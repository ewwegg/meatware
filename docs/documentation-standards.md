# Meatware Documentation Standards

This document defines the standards and conventions for all documentation within the Meatware framework. Adherence to these standards ensures consistency, clarity, and navigability across all components.

## File Format

- All documentation must be written in Markdown format (`.md` extension)
- UTF-8 encoding must be used for all files
- Line endings should use LF (Unix-style), not CRLF
- Use soft wrapping for content, avoiding hard line breaks within paragraphs

## Metadata Header

All documentation files must include YAML frontmatter at the beginning of the file:

```yaml
---
title: "Document Title"
category: "knowledge|specification|implementation|command|context|docs|config"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
version: "0.1.0"
status: "draft|review|approved|archived"
prerequisite_files: ["/path/to/file1.md", "/path/to/file2.md"]
next_steps: ["/path/to/next1.md", "/path/to/next2.md"]
related_files: ["/path/to/related1.md", "/path/to/related2.md"]
---
```

## Document Structure

### Required Sections

1. **Title**: Top-level heading with document name `# Document Title`
2. **Summary/Overview**: Brief description of document purpose (2-3 sentences)
3. **Table of Contents**: For documents longer than 50 lines
4. **Body Content**: Organized into logical sections with clear headers
5. **Related Files**: Links to related documentation at the end of the document
6. **Next Steps**: Suggested documents to read next (when applicable)

### Heading Structure

- Use proper heading hierarchy (H1 → H2 → H3)
- Avoid skipping levels (e.g., H1 then H3)
- Limit to 3 levels of headings when possible
- H1 reserved for document title only
- H2 for major sections
- H3 for subsections

## Formatting Conventions

### General Formatting

- Use **bold** for emphasis of important terms or concepts
- Use *italics* for secondary emphasis
- Use `code formatting` for:
  - File paths
  - Code snippets
  - Command lines
  - Configuration keys
- Use blockquotes for important notes or callouts

### Code Blocks

- Always specify the language for syntax highlighting
- Use triple backticks (```) to define code blocks
- Example:

```javascript
function example() {
  console.log("This is a code example");
}
```

### Lists

- Use ordered lists (1. 2. 3.) for sequential steps or prioritized items
- Use unordered lists (- or *) for non-sequential items
- Maintain consistent indentation for nested lists (2 spaces)
- Keep list items parallel in structure

### Links

- Use the standard Markdown link syntax: `[Link Text](URL)`
- For internal document links, use relative paths
- For links to other documents in the framework, use absolute paths from the root
- Example: `[Knowledge Management](/knowledge/README.md)`

## Content Guidelines

### Language

- Use clear, concise language
- Write in present tense
- Use active voice instead of passive
- Define acronyms on first use
- Use gender-neutral language
- Maintain professional tone

### Document Naming

- Use lowercase letters, numbers, and hyphens only
- No spaces in filenames
- Be descriptive but concise
- Follow the pattern: `descriptive-name.md` 
- For templates, use `_template.md`

### Images

- Store images in an `/assets` folder in each main directory
- Use descriptive filenames for images
- Include alt text for all images
- Keep image dimensions reasonable (max width 1000px)
- Use SVG format for diagrams when possible

## Directory-Specific Standards

### Knowledge Directory

- Organize by knowledge domain in subdirectories
- Begin files with a clear "Purpose" section
- Include "Usage Examples" section
- Cross-reference related knowledge items

### Specification Directory

- Include "Problem Statement" section
- Use must/should/may language for requirements
- Include "Constraints" section
- Document "Acceptance Criteria" in testable format
- List "Design Decisions" with rationale

### Implementation Directory

- Include "Approach" section outlining implementation strategy
- Break down tasks with dependencies
- Document validation strategy tied to specifications
- Mark developer checkpoints clearly

### Command Directory

- Document purpose, required context, and expected response
- Use consistent variable syntax in templates
- Include example usage
- Organize by command purpose

## Quality Standards

- All documentation must be spell-checked
- No grammar errors
- No broken links
- No redundant information
- Regular reviews for accuracy and completeness

## Review Process

1. Self-review against these standards
2. Peer review for technical accuracy
3. Update YAML frontmatter (status, version, updated date)
4. Review for alignment with Meatware core philosophy
5. Final approval and integration

## Version Control

- Document significant changes in the YAML frontmatter
- Update the "updated" date when making changes
- Major content revisions should increment version number
- Follow semantic versioning (MAJOR.MINOR.PATCH)