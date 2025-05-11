---
title: "Metadata Format Reference"
category: "knowledge"
knowledge_type: "convention"
created: "2023-09-04"
updated: "2023-09-04"
version: "0.1.0"
status: "active"
expertise_level: "intermediate"
stability: "stable"
authors: ["Meatware Team"]
tags: ["metadata", "yaml", "frontmatter", "convention", "navigation", "reference"]
prerequisite_files: ["/docs/metadata-format-specifications.md", "/knowledge/architecture/navigation-system.md"]
next_steps: ["/knowledge/conventions/file-naming-reference.md", "/knowledge/conventions/directory-structure-reference.md"]
related_files: ["/docs/navigation-metadata.md", "/knowledge/architecture/knowledge-management-system.md"]
navigation_context: "When looking for detailed reference information about metadata formats"
navigation_keywords: ["metadata", "yaml", "frontmatter", "format", "fields", "navigation"]
navigation_priority: "high"
summary: "Reference documentation for metadata formats with detailed specifications and field definitions used throughout the framework"
---

# Metadata Format Reference

> **Navigation**: [Knowledge Index](/knowledge/index.md) > [Conventions Index](/knowledge/conventions/index.md) > Metadata Format Reference
>
> **Prerequisites**: [Metadata Format Specifications](/docs/metadata-format-specifications.md), [Navigation System Architecture](/knowledge/architecture/navigation-system.md)
>
> **Context**: This document provides detailed reference information about metadata formats for implementation and usage within the framework.

## Purpose

This reference documentation provides comprehensive specifications for the metadata formats used throughout the Meatware framework. It covers all standardized metadata fields, their formats, purposes, and usage patterns, serving as the authoritative reference for implementing and working with metadata in the framework.

## Prerequisites

Before reading this document, you should be familiar with:

- [Metadata Format Specifications](/docs/metadata-format-specifications.md) - Provides the conceptual foundation for metadata usage
- [Navigation System Architecture](/knowledge/architecture/navigation-system.md) - Explains how metadata supports navigation

## Reference Details

### Specifications

The framework uses YAML frontmatter at the beginning of markdown files to store metadata:

| Property | Value | Description |
|----------|-------|-------------|
| Format | YAML | Metadata is stored in YAML format |
| Delimiter | `---` | Triple dashes delimit the frontmatter section |
| Location | File start | Metadata must be at the very beginning of files |
| Case Sensitivity | Yes | Field names are case-sensitive |
| Required Fields | Varies by file type | Each file type has specific required fields |
| Field Order | Recommended | Follow the recommended field order for consistency |

### Common Metadata Fields

Detailed description of all common metadata fields:

#### title

- **Type**: String
- **Default**: None
- **Required**: Yes
- **Description**: The human-readable title of the document
- **Example**: `"Metadata Format Reference"`
- **Constraints**: Should be concise, descriptive, and unique within its context

#### category

- **Type**: String
- **Default**: None
- **Required**: Yes
- **Description**: The primary category the document belongs to
- **Example**: `"knowledge"`
- **Constraints**: Must be one of the predefined categories (knowledge, specification, implementation, command, context, docs, config)

#### knowledge_type

- **Type**: String
- **Default**: None
- **Required**: Yes (for knowledge documents)
- **Description**: The specific type of knowledge document
- **Example**: `"convention"`
- **Constraints**: Must be one of the predefined types (architecture, api, integration, convention, clarity, changelog)

#### created

- **Type**: String (Date)
- **Default**: None
- **Required**: Yes
- **Description**: The creation date of the document
- **Example**: `"2023-09-04"`
- **Constraints**: Must follow YYYY-MM-DD format

#### updated

- **Type**: String (Date)
- **Default**: Same as created
- **Required**: Yes
- **Description**: The last update date of the document
- **Example**: `"2023-09-04"`
- **Constraints**: Must follow YYYY-MM-DD format and be >= created date

#### version

- **Type**: String
- **Default**: "0.1.0"
- **Required**: Yes
- **Description**: The semantic version of the document
- **Example**: `"0.1.0"`
- **Constraints**: Must follow semantic versioning format (MAJOR.MINOR.PATCH)

#### status

- **Type**: String
- **Default**: "draft"
- **Required**: Yes
- **Description**: The current status of the document
- **Example**: `"active"`
- **Constraints**: Must be one of: draft, active, archived, deprecated

#### expertise_level

- **Type**: String
- **Default**: "beginner"
- **Required**: No
- **Description**: The expertise level required to understand the document
- **Example**: `"intermediate"`
- **Constraints**: Must be one of: beginner, intermediate, advanced

#### stability

- **Type**: String
- **Default**: "experimental"
- **Required**: No
- **Description**: The stability level of the documented content
- **Example**: `"stable"`
- **Constraints**: Must be one of: experimental, stable, deprecated

#### authors

- **Type**: Array
- **Default**: []
- **Required**: Yes
- **Description**: List of document authors
- **Example**: `["Meatware Team"]`
- **Constraints**: Must be a valid YAML array of strings

#### tags

- **Type**: Array
- **Default**: []
- **Required**: Yes
- **Description**: Keywords for categorization and search
- **Example**: `["metadata", "yaml", "frontmatter"]`
- **Constraints**: Must be a valid YAML array of strings

### Navigation Metadata Fields

Fields specifically related to navigation and cross-referencing:

#### prerequisite_files

- **Type**: Array
- **Default**: []
- **Required**: No
- **Description**: List of files that should be read before this document
- **Example**: `["/docs/metadata-format-specifications.md"]`
- **Constraints**: Must be valid absolute file paths within the framework

#### next_steps

- **Type**: Array
- **Default**: []
- **Required**: No
- **Description**: List of recommended files to read after this document
- **Example**: `["/knowledge/conventions/file-naming-reference.md"]`
- **Constraints**: Must be valid absolute file paths within the framework

#### related_files

- **Type**: Array
- **Default**: []
- **Required**: Yes
- **Description**: List of files related to this document
- **Example**: `["/docs/navigation-metadata.md"]`
- **Constraints**: Must be valid absolute file paths within the framework

#### navigation_context

- **Type**: String
- **Default**: None
- **Required**: Yes
- **Description**: Description of when this document is relevant to navigation
- **Example**: `"When looking for detailed reference information about metadata formats"`
- **Constraints**: Should be a complete sentence starting with "When"

#### navigation_keywords

- **Type**: Array
- **Default**: []
- **Required**: Yes
- **Description**: Keywords that help AI tools navigate to this document
- **Example**: `["metadata", "yaml", "frontmatter"]`
- **Constraints**: Must be a valid YAML array of strings

#### navigation_priority

- **Type**: String
- **Default**: "medium"
- **Required**: Yes
- **Description**: The priority level for navigation
- **Example**: `"high"`
- **Constraints**: Must be one of: high, medium, low

#### summary

- **Type**: String
- **Default**: None
- **Required**: Yes
- **Description**: Brief summary of the document content
- **Example**: `"Reference documentation for metadata formats with detailed specifications and field definitions used throughout the framework"`
- **Constraints**: Maximum 150 characters

## Usage Examples

### Example 1: Basic Knowledge Document Metadata

```yaml
---
title: "Cross-Referencing System"
category: "knowledge"
knowledge_type: "architecture"
created: "2023-09-03"
updated: "2023-09-03"
version: "0.1.0"
status: "draft"
authors: ["Meatware Team"]
tags: ["cross-referencing", "links", "relationships"]
navigation_context: "When seeking to understand how documents reference each other"
navigation_keywords: ["cross-reference", "linking", "relationships"]
navigation_priority: "high"
summary: "Architectural overview of the cross-referencing system that connects documents throughout the framework"
---
```

Explanation: This example shows the minimal required metadata for a knowledge document of the architecture type. It includes all required fields and sets appropriate values for the cross-referencing system document.

### Example 2: Comprehensive Document Metadata

```yaml
---
title: "Navigation Metadata Specification"
category: "docs"
created: "2023-09-01"
updated: "2023-09-04"
version: "0.2.0"
status: "active"
expertise_level: "intermediate"
stability: "stable"
authors: ["Meatware Team"]
tags: ["navigation", "metadata", "specification", "yaml"]
prerequisite_files: ["/docs/metadata-format-specifications.md"]
next_steps: ["/knowledge/architecture/navigation-system.md", "/knowledge/conventions/metadata-format-reference.md"]
related_files: ["/docs/cross-referencing.md", "/docs/standard-navigation-sections.md"]
navigation_context: "When implementing navigation metadata or understanding its specification"
navigation_keywords: ["navigation", "metadata", "specification", "yaml", "frontmatter"]
navigation_priority: "high"
summary: "Detailed specification for navigation metadata fields, formats, and usage patterns in the framework"
---
```

Explanation: This example demonstrates a comprehensive metadata section for a documentation file. It includes all standard fields plus optional fields like expertise_level and stability, and provides thorough cross-referencing through prerequisite_files, next_steps, and related_files.

## Edge Cases

### Edge Case 1: Metadata in Generated Files

When files are generated programmatically, ensure that:
- All required metadata fields are included
- Dates are generated correctly in YYYY-MM-DD format
- Arrays are properly formatted as YAML arrays
- No extraneous fields are included

### Edge Case 2: Metadata in Template Files

Template files should:
- Use placeholder values for variable fields (e.g., "YYYY-MM-DD" for dates)
- Include comments explaining expected values
- Maintain required fields with placeholder values
- Use descriptive placeholders (e.g., "Author Name" instead of "author")

### Edge Case 3: Updating Existing Metadata

When updating existing metadata:
- Always update the "updated" date to the current date
- Increment the version number according to semantic versioning rules
- Preserve existing field values unless they need to change
- Update status if the document has progressed (e.g., from "draft" to "active")

## Implementation Notes

Important notes for implementers:

- Always use a YAML parser to read and write metadata to avoid syntax errors
- Validate metadata against the schema to ensure all required fields are present
- Maintain field order according to the specification for consistency
- Ensure all file paths in prerequisite_files, next_steps, and related_files are absolute paths
- Keep summaries under 150 characters for optimal display and indexing

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 0.1.0 | 2023-09-04 | Initial version of the metadata format reference |

## Related References

- [Navigation Metadata](/docs/navigation-metadata.md) - Specific standards for navigation-related metadata
- [Documentation Standards](/docs/documentation-standards.md) - Overall documentation standards
- [Knowledge Management System](/knowledge/architecture/knowledge-management-system.md) - How metadata fits into the knowledge architecture

## Next Steps

After reading this document, you may want to explore:

- [File Naming Reference](/knowledge/conventions/file-naming-reference.md) - Conventions for naming files
- [Directory Structure Reference](/knowledge/conventions/directory-structure-reference.md) - Reference for directory organization

---

**Next Steps**: [File Naming Reference](/knowledge/conventions/file-naming-reference.md) | [Directory Structure Reference](/knowledge/conventions/directory-structure-reference.md)

**Related Topics**: [Navigation Metadata](/docs/navigation-metadata.md) | [Documentation Standards](/docs/documentation-standards.md)

**Navigation Path**: [Home](/index.md) > [Knowledge](/knowledge/index.md) > [Conventions](/knowledge/conventions/index.md) > [Metadata Format Reference](/knowledge/conventions/metadata-format-reference.md)