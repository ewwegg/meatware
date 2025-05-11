#!/usr/bin/env node

/**
 * create-clarity-doc.js
 * 
 * A utility script to scaffold new clarity documentation files with
 * proper metadata and structure based on the standard template.
 * 
 * Usage:
 *   node create-clarity-doc.js <category> <title> <author>
 * 
 * Example:
 *   node create-clarity-doc.js framework-structure "Navigation System" "John Smith"
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const readFile = promisify(fs.readFile);

// Get command line arguments
const args = process.argv.slice(2);
if (args.length < 3) {
  console.error('Usage: node create-clarity-doc.js <category> <title> <author>');
  process.exit(1);
}

const category = args[0];
const title = args[1];
const author = args[2];

// Generate filename from title
const filename = title.toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

// Create today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Path configuration
const TEMPLATE_PATH = path.resolve(__dirname, '../../knowledge/templates/clarity.md');
const OUTPUT_DIR = path.resolve(__dirname, `../../knowledge/clarity/${category}`);
const OUTPUT_PATH = path.resolve(OUTPUT_DIR, `${filename}.md`);

// Generate keywords from title and category
const generateKeywords = (title, category) => {
  const words = title.toLowerCase()
    .replace(/[^a-z0-9\s]+/g, '')
    .split(' ')
    .filter(word => word.length > 3);
  
  const categoryWords = category.split('-');
  
  return [...new Set([...words, ...categoryWords])];
};

// Process the template file
async function processTemplate() {
  try {
    // Ensure the output directory exists
    await mkdir(OUTPUT_DIR, { recursive: true });
    
    // Read the template file
    let template = await readFile(TEMPLATE_PATH, 'utf8');
    
    // Generate keywords
    const keywords = generateKeywords(title, category);
    
    // Replace placeholders in the template
    template = template
      .replace(/title: "Clarity: Topic Title"/g, `title: "Clarity: ${title}"`)
      .replace(/created: "YYYY-MM-DD"/g, `created: "${today}"`)
      .replace(/updated: "YYYY-MM-DD"/g, `updated: "${today}"`)
      .replace(/authors: \["Author Name"\]/g, `authors: ["${author}"]`)
      .replace(/tags: \["tag1", "tag2", "tag3"\]/g, `tags: ${JSON.stringify(keywords)}`)
      .replace(/navigation_keywords: \["keyword1", "keyword2", "keyword3"\]/g, 
               `navigation_keywords: ${JSON.stringify(keywords)}`)
      .replace(/Clarity: Topic Title/g, `Clarity: ${title}`)
      .replace(/\[specific topic\]/g, title.toLowerCase())
      .replace(/> \*\*Navigation\*\*: \[Knowledge Index\].*Clarity: Topic Title/, 
               `> **Navigation**: [Knowledge Index](/knowledge/index.md) > [Clarity Index](/knowledge/clarity/index.md) > [${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}](/knowledge/clarity/${category}/) > Clarity: ${title}`)
      .replace(/\*\*Navigation Path\*\*:.*Clarity: Topic Title\]/g, 
               `**Navigation Path**: [Home](/index.md) > [Knowledge](/knowledge/index.md) > [Clarity](/knowledge/clarity/index.md) > [${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}](/knowledge/clarity/${category}/) > [Clarity: ${title}](/knowledge/clarity/${category}/${filename}.md)`)
      .replace(/summary: "Questions and answers about \[specific topic\].*"/g, 
               `summary: "Questions and answers about ${title.toLowerCase()}, capturing insights about key aspects and considerations"`)
      .replace(/\| YYYY-MM-DD \| Question X \| Initial answer \|/g, 
               `| ${today} | Question 1 | Initial documentation |`);
    
    // Write the processed template to the output file
    await writeFile(OUTPUT_PATH, template);
    
    console.log(`Clarity document created at: ${OUTPUT_PATH}`);
    console.log(`\nNext steps:`);
    console.log(`1. Complete the document with specific questions and answers`);
    console.log(`2. Update the clarity index at /knowledge/clarity/index.md`);
    console.log(`3. Add cross-references to related documents`);
    
  } catch (error) {
    console.error('Error creating clarity document:', error);
    process.exit(1);
  }
}

// Run the main function
processTemplate();