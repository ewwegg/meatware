#!/usr/bin/env node

/**
 * generate-indexes.js
 * 
 * A utility script to generate knowledge index files for the Meatware framework.
 * This script scans markdown files in the knowledge directory, extracts their
 * metadata, and generates JSON index files organized by category, type, topic, and search.
 * 
 * Usage:
 *   node generate-indexes.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { execSync } = require('child_process');
const yaml = require('yaml');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

// Configuration
const KNOWLEDGE_DIR = path.resolve(__dirname, '../../knowledge');
const INDEX_DIR = path.resolve(__dirname, '../../knowledge/indexing');
const CATEGORIES = ['architecture', 'api', 'clarity', 'changelog', 'conventions', 'integrations'];
const TYPES = ['conceptual', 'reference', 'guide', 'decision', 'clarity', 'changelog'];
const TOPICS = ['navigation', 'cross-referencing', 'metadata', 'directory-structure'];

// Ensure index directories exist
async function ensureDirectories() {
  await mkdir(path.join(INDEX_DIR, 'categories'), { recursive: true });
  await mkdir(path.join(INDEX_DIR, 'types'), { recursive: true });
  await mkdir(path.join(INDEX_DIR, 'topics'), { recursive: true });
  await mkdir(path.join(INDEX_DIR, 'search'), { recursive: true });
}

// Find all markdown files in the knowledge directory
function findMarkdownFiles() {
  try {
    const command = `find ${KNOWLEDGE_DIR} -type f -name "*.md" -not -path "*/indexing/*" -not -path "*/templates/*"`;
    const output = execSync(command).toString();
    return output.split('\n').filter(file => file.trim() !== '');
  } catch (error) {
    console.error('Error finding markdown files:', error);
    return [];
  }
}

// Extract YAML frontmatter from a markdown file
async function extractFrontmatter(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    
    if (frontmatterMatch && frontmatterMatch[1]) {
      const frontmatter = yaml.parse(frontmatterMatch[1]);
      return {
        filePath: filePath.replace(path.resolve(__dirname, '../..'), ''),
        frontmatter
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Error extracting frontmatter from ${filePath}:`, error);
    return null;
  }
}

// Create an index entry from a file's frontmatter
function createIndexEntry(file) {
  if (!file || !file.frontmatter) return null;
  
  const { frontmatter, filePath } = file;
  
  return {
    title: frontmatter.title || path.basename(filePath, '.md'),
    path: filePath,
    created: frontmatter.created || 'unknown',
    updated: frontmatter.updated || frontmatter.created || 'unknown',
    version: frontmatter.version || '0.1.0',
    status: frontmatter.status || 'draft',
    summary: frontmatter.summary || '',
    tags: frontmatter.tags || [],
    authors: frontmatter.authors || [],
    navigation_priority: frontmatter.navigation_priority || 'medium',
    navigation_keywords: frontmatter.navigation_keywords || [],
    category: frontmatter.category || '',
    knowledge_type: frontmatter.knowledge_type || ''
  };
}

// Write an index file
async function writeIndexFile(indexType, indexName, entries) {
  const indexPath = path.join(INDEX_DIR, indexType, `${indexName}.json`);
  
  const indexData = {
    index_type: indexType,
    index_name: indexName,
    created: new Date().toISOString().split('T')[0],
    updated: new Date().toISOString().split('T')[0],
    count: Array.isArray(entries) ? entries.length : Object.keys(entries).length,
    entries: entries
  };
  
  try {
    await writeFile(indexPath, JSON.stringify(indexData, null, 2), 'utf8');
    console.log(`Generated ${indexPath}`);
  } catch (error) {
    console.error(`Error writing index file ${indexPath}:`, error);
  }
}

// Generate category indexes
async function generateCategoryIndexes(files) {
  for (const category of CATEGORIES) {
    const entries = files
      .filter(file => {
        return file.frontmatter.category === 'knowledge' && 
               file.frontmatter.knowledge_type === category;
      })
      .map(createIndexEntry)
      .filter(entry => entry !== null);
    
    await writeIndexFile('categories', category, entries);
  }
}

// Generate type indexes
async function generateTypeIndexes(files) {
  for (const type of TYPES) {
    let entries;
    
    if (type === 'conceptual' || type === 'reference' || type === 'guide') {
      // These are not explicit types but inferred from content
      entries = files
        .filter(file => {
          if (type === 'conceptual') {
            return file.filePath.includes('/architecture/') && !file.filePath.includes('_template');
          } else if (type === 'reference') {
            return file.filePath.includes('/conventions/') && 
                   file.filePath.includes('reference') && 
                   !file.filePath.includes('_template');
          } else if (type === 'guide') {
            return file.filePath.includes('/conventions/') && 
                   (file.filePath.includes('creating') || file.filePath.includes('guide')) && 
                   !file.filePath.includes('_template');
          }
          return false;
        })
        .map(createIndexEntry)
        .filter(entry => entry !== null);
    } else {
      // These match directly to knowledge_type
      entries = files
        .filter(file => {
          return file.frontmatter.category === 'knowledge' && 
                 file.frontmatter.knowledge_type === type;
        })
        .map(createIndexEntry)
        .filter(entry => entry !== null);
    }
    
    await writeIndexFile('types', type, entries);
  }
}

// Generate topic indexes
async function generateTopicIndexes(files) {
  for (const topic of TOPICS) {
    const entries = files
      .filter(file => {
        const content = file.filePath.toLowerCase();
        const tags = (file.frontmatter.tags || []).map(tag => tag.toLowerCase());
        const keywords = (file.frontmatter.navigation_keywords || []).map(kw => kw.toLowerCase());
        
        return content.includes(topic) || 
               tags.includes(topic) || 
               keywords.includes(topic);
      })
      .map(createIndexEntry)
      .filter(entry => entry !== null);
    
    await writeIndexFile('topics', topic, entries);
  }
}

// Generate search indexes
async function generateSearchIndexes(files) {
  // Tags index
  const tagEntries = {};
  
  files.forEach(file => {
    const entry = createIndexEntry(file);
    if (!entry) return;
    
    (entry.tags || []).forEach(tag => {
      if (!tagEntries[tag]) {
        tagEntries[tag] = [];
      }
      
      tagEntries[tag].push({
        title: entry.title,
        path: entry.path,
        summary: entry.summary
      });
    });
  });
  
  await writeIndexFile('search', 'tags', tagEntries);
  
  // Keywords index
  const keywordEntries = {};
  
  files.forEach(file => {
    const entry = createIndexEntry(file);
    if (!entry || !file.frontmatter.navigation_keywords) return;
    
    file.frontmatter.navigation_keywords.forEach(keyword => {
      if (!keywordEntries[keyword]) {
        keywordEntries[keyword] = [];
      }
      
      keywordEntries[keyword].push({
        title: entry.title,
        path: entry.path,
        summary: entry.summary
      });
    });
  });
  
  await writeIndexFile('search', 'keywords', keywordEntries);
  
  // Recent index
  const recentEntries = files
    .map(createIndexEntry)
    .filter(entry => entry !== null)
    .sort((a, b) => {
      const dateA = new Date(a.updated);
      const dateB = new Date(b.updated);
      return dateB - dateA; // Sort in descending order (newest first)
    })
    .slice(0, 20); // Limit to 20 most recent
  
  await writeIndexFile('search', 'recent', recentEntries);
  
  // Popular index (simulated - in a real implementation this would use access metrics)
  const popularEntries = files
    .map(createIndexEntry)
    .filter(entry => entry !== null && entry.navigation_priority === 'high')
    .slice(0, 20); // Limit to 20 entries
  
  await writeIndexFile('search', 'popular', popularEntries);
}

// Main function
async function main() {
  try {
    console.log('Generating knowledge indexes...');
    
    // Ensure index directories exist
    await ensureDirectories();
    
    // Find all markdown files
    const filePaths = findMarkdownFiles();
    console.log(`Found ${filePaths.length} markdown files`);
    
    // Extract frontmatter from all files
    const filesWithFrontmatter = await Promise.all(
      filePaths.map(extractFrontmatter)
    );
    
    const validFiles = filesWithFrontmatter.filter(file => file !== null);
    console.log(`Extracted frontmatter from ${validFiles.length} files`);
    
    // Generate indexes
    await generateCategoryIndexes(validFiles);
    await generateTypeIndexes(validFiles);
    await generateTopicIndexes(validFiles);
    await generateSearchIndexes(validFiles);
    
    console.log('Index generation complete!');
  } catch (error) {
    console.error('Error generating indexes:', error);
    process.exit(1);
  }
}

// Run the main function
main();