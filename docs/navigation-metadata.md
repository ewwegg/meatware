---
title: "Navigation Metadata Specification"
category: "docs"
created: "2023-09-02"
updated: "2023-09-02"
version: "0.1.0"
status: "draft"
audience: "developer"
skill_level: "intermediate"
format: "reference"
tags: ["navigation", "metadata", "self-guiding"]
prerequisite_files: ["/docs/metadata-format-specifications.md"]
next_steps: ["/docs/cross-referencing.md"]
related_files: ["/docs/documentation-standards.md", "/docs/file-naming-conventions.md"]
---

# Navigation Metadata Specification

## Overview

This document defines the navigation metadata system that enables self-guided navigation through the Meatware framework. The navigation metadata, implemented through YAML frontmatter and standardized sections, allows AI tools to independently traverse the framework, understand relationships between files, and select appropriate paths.

## Navigation Metadata Fields

The following YAML frontmatter fields are specifically designed for navigation:

### Core Navigation Fields

| Field | Type | Description | Required | Example |
|-------|------|-------------|----------|---------|
| `prerequisite_files` | Array of Strings | Files that should be read before this one | No | `["/knowledge/overview.md", "/specification/feature-x.md"]` |
| `next_steps` | Array of Strings | Suggested files to read after this one | No | `["/implementation/feature-y.md"]` |
| `related_files` | Array of Strings | Files with related information | No | `["/knowledge/related-concept.md"]` |
| `parent_document` | String | The parent document in a hierarchical structure | No | `"/specification/index.md"` |
| `child_documents` | Array of Strings | Child documents in a hierarchical structure | No | `["/specification/feature/sub-feature-1.md"]` |
| `sequence_position` | Number | Position in a sequence of documents | No | `2` |
| `sequence_total` | Number | Total number of documents in the sequence | No | `5` |

### Contextual Navigation Fields

| Field | Type | Description | Required | Example |
|-------|------|-------------|----------|---------|
| `navigation_context` | String | Description of when to navigate to this file | No | `"When seeking information about the framework architecture"` |
| `navigation_keywords` | Array of Strings | Keywords that indicate this file is relevant | No | `["architecture", "structure", "organization"]` |
| `navigation_priority` | String (Enum) | Priority level when multiple paths are available | No | `"high"` (values: low, medium, high) |

### File Relationship Fields

These fields are useful for establishing file relationships beyond simple linking:

| Field | Type | Description | Required | Example |
|-------|------|-------------|----------|---------|
| `implements` | Array of Strings | Specifications implemented by this file | No | `["/specification/feature-x.md"]` |
| `specified_by` | Array of Strings | Specifications that define this implementation | No | `["/specification/feature-y.md"]` |
| `documented_in` | Array of Strings | Documentation about this file | No | `["/docs/feature-guide.md"]` |
| `documents` | Array of Strings | Files documented by this file | No | `["/implementation/feature-z.md"]` |
| `replaces` | String | File that this file replaces (if any) | No | `"/deprecated/old-file.md"` |
| `replaced_by` | String | File that replaces this file (if deprecated) | No | `"/current/new-file.md"` |

### Navigation State Fields

| Field | Type | Description | Required | Example |
|-------|------|-------------|----------|---------|
| `nav_requires_context` | Array of Strings | Context files needed to fully understand this file | No | `["/context/state/active-features.json"]` |
| `nav_provides_context` | Array of Strings | Context this file provides for other files | No | `["/context/maps/feature-relationships.json"]` |

## Standard Navigation Sections

In addition to YAML frontmatter, each file should include these standardized sections for navigation:

### Prerequisites Section

```markdown
## Prerequisites

Before reading this document, you should be familiar with:

- [Framework Overview](/knowledge/overview.md) - Basic understanding of the framework
- [Feature X Specification](/specification/feature-x.md) - Requirements for Feature X
```

### Next Steps Section

```markdown
## Next Steps

After reading this document, you may want to explore:

- [Implementation Guide](/implementation/feature-y.md) - How to implement Feature Y
- [Usage Examples](/docs/examples/feature-z-examples.md) - Examples of using Feature Z
```

### Related Documents Section

```markdown
## Related Documents

- [Related Concept](/knowledge/related-concept.md) - Information about a related concept
- [Alternative Approach](/specification/alternative.md) - An alternative approach to this feature
```

## Navigation Cues

### Header Cues

Each file should include navigation cues in the header immediately following the YAML frontmatter:

```markdown
---
title: "Document Title"
# other frontmatter fields
---

# Document Title

> **Navigation**: [Parent Document](/path/to/parent.md) > Document Title > [Child Document](/path/to/child.md)
>
> **Prerequisites**: [Prerequisite 1](/path/to/prereq1.md), [Prerequisite 2](/path/to/prereq2.md)
>
> **Context**: This document is relevant when [specific context]
```

### Footer Cues

Each file should include navigation cues in the footer:

```markdown
---

**Next Steps**: [Next Document 1](/path/to/next1.md) | [Next Document 2](/path/to/next2.md)

**Related Topics**: [Related Topic 1](/path/to/related1.md) | [Related Topic 2](/path/to/related2.md)

**Navigation Path**: [Home](/index.md) > [Category](/category/index.md) > [Current Document](current-document.md)
```

## Navigation Link Syntax

For consistent cross-referencing, use the following link syntax:

1. **Internal document references**: `[Link Text](/absolute/path/to/file.md)`
2. **Section references within the same document**: `[Link Text](#section-id)`
3. **Section references in another document**: `[Link Text](/absolute/path/to/file.md#section-id)`

## Directory Navigation

### Index Files

Each directory must contain an `index.md` file that:
1. Lists all files in the directory with brief descriptions
2. Provides categorization of directory contents
3. Explains the purpose and scope of the directory
4. Links to parent and child directories

### Directory README Files

Each directory should have a `README.md` file that:
1. Explains the purpose of the directory
2. Describes the organization of files within the directory
3. Provides usage guidelines
4. Links to the directory's index file

## Implementation Guidelines

When implementing navigation metadata:

1. **Be consistent**: Use the same fields and formats throughout the framework
2. **Keep paths absolute**: Always use absolute paths from the repository root
3. **Verify links**: Ensure all linked files actually exist
4. **Balance completeness with brevity**: Include essential navigation but don't overwhelm
5. **Consider bidirectional links**: If file A links to file B, file B should usually link back to file A
6. **Prioritize navigation**: List more important links first in navigation sections
7. **Use clear navigation context**: Explain when and why to navigate to another document

## Navigation Path Patterns

### Knowledge Exploration Path

```
index.md → knowledge/index.md → knowledge/[type]/index.md → specific knowledge file
```

### Specification to Implementation Path

```
index.md → specification/index.md → specification/[feature].md → implementation/[feature].md
```

### Learning Path

```
index.md → docs/quickstart/index.md → docs/quickstart/getting-started.md → subsequent tutorials
```

## Examples

### Example YAML Frontmatter

```yaml
---
title: "Authentication System Implementation"
category: "implementation"
created: "2023-09-02"
updated: "2023-09-02"
version: "0.1.0"
status: "draft"
prerequisite_files: [
  "/specification/auth-system.md",
  "/knowledge/api/authentication.md"
]
next_steps: [
  "/implementation/auth-validation.md",
  "/docs/examples/auth-usage.md"
]
related_files: [
  "/knowledge/security/best-practices.md",
  "/implementation/user-management.md"
]
implements: ["/specification/auth-system.md"]
navigation_priority: "high"
navigation_context: "When implementing the authentication system"
---
```

### Example Navigation Header

```markdown
# Authentication System Implementation

> **Navigation**: [Implementation Index](/implementation/index.md) > Authentication System Implementation
>
> **Prerequisites**: [Auth System Specification](/specification/auth-system.md), [Authentication API](/knowledge/api/authentication.md)
>
> **Context**: This document describes how to implement the authentication system specified in the Auth System Specification.
```

### Example Navigation Footer

```markdown
---

**Next Steps**: [Auth Validation](/implementation/auth-validation.md) | [Auth Usage Examples](/docs/examples/auth-usage.md)

**Related Topics**: [Security Best Practices](/knowledge/security/best-practices.md) | [User Management](/implementation/user-management.md)

**Navigation Path**: [Home](/index.md) > [Implementation](/implementation/index.md) > [Authentication System Implementation](/implementation/auth-system.md)
```

## Testing Navigation

To test navigation paths:

1. Start at the root `index.md`
2. Follow navigation links to reach specific documents
3. Verify that bidirectional navigation works (can navigate forward and backward)
4. Check that navigation context is clear for each link
5. Ensure all links resolve to valid documents
6. Verify that prerequisite chains are logical and complete