---
title: "Standard Navigation Sections"
category: "docs"
created: "2023-09-02"
updated: "2023-09-02"
version: "0.1.0"
status: "draft"
audience: "developer"
skill_level: "beginner"
format: "reference"
tags: ["navigation", "standards", "documentation"]
prerequisite_files: ["/docs/navigation-metadata.md", "/docs/documentation-standards.md"]
next_steps: ["/docs/file-naming-conventions.md"]
related_files: ["/docs/metadata-format-specifications.md"]
---

# Standard Navigation Sections

> **Navigation**: [Documentation Index](/docs/index.md) > Standard Navigation Sections
>
> **Prerequisites**: [Navigation Metadata Specification](/docs/navigation-metadata.md), [Documentation Standards](/docs/documentation-standards.md)
>
> **Context**: This document defines the standard sections that should be included in all Meatware framework files to enable effective navigation.

## Overview

To create a consistent, navigable framework, all Meatware documents must include standardized sections that facilitate navigation. These sections help both humans and AI tools understand document relationships, prerequisites, and logical next steps.

## Required Navigation Sections

The following navigation sections must be included in all framework documents:

### Prerequisites Section

The Prerequisites section lists documents that should be read before the current document to ensure proper understanding of the content.

#### Format

```markdown
## Prerequisites

Before reading this document, you should be familiar with:

- [Document Title](/path/to/document.md) - Brief description of relevance
- [Document Title](/path/to/document.md) - Brief description of relevance
```

#### Example

```markdown
## Prerequisites

Before reading this document, you should be familiar with:

- [Framework Architecture](/knowledge/architecture/overview.md) - Provides the overall architectural context
- [Authentication Specification](/specification/auth-system.md) - Defines the requirements this implementation fulfills
```

### Next Steps Section

The Next Steps section suggests logical documents to explore after reading the current document, guiding the reader through a coherent learning or implementation path.

#### Format

```markdown
## Next Steps

After reading this document, you may want to explore:

- [Document Title](/path/to/document.md) - Brief description of relevance
- [Document Title](/path/to/document.md) - Brief description of relevance
```

#### Example

```markdown
## Next Steps

After reading this document, you may want to explore:

- [Token Validation](/implementation/auth/token-validation.md) - Details on validating authentication tokens
- [Authentication Examples](/docs/examples/authentication-usage.md) - Examples of using the authentication system
```

### Related Documents Section

The Related Documents section links to documents that contain related information but aren't strictly prerequisites or next steps.

#### Format

```markdown
## Related Documents

- [Document Title](/path/to/document.md) - Brief description of relationship
- [Document Title](/path/to/document.md) - Brief description of relationship
```

#### Example

```markdown
## Related Documents

- [Security Best Practices](/knowledge/security/best-practices.md) - Security considerations relevant to authentication
- [User Management](/implementation/user-management.md) - Related system that interacts with authentication
- [Error Handling](/knowledge/conventions/error-handling.md) - Conventions for handling authentication errors
```

## Navigation Cues

### Header Navigation Cue

Each document should include a navigation cue directly after the title, providing immediate context and navigation options.

#### Format

```markdown
> **Navigation**: [Parent Document](/path/to/parent.md) > Current Document Title > [Child Document](/path/to/child.md)
>
> **Prerequisites**: [Prerequisite 1](/path/to/prereq1.md), [Prerequisite 2](/path/to/prereq2.md)
>
> **Context**: This document is relevant when [specific context]
```

#### Example

```markdown
> **Navigation**: [Implementation Index](/implementation/index.md) > Authentication Implementation
>
> **Prerequisites**: [Auth Specification](/specification/auth-system.md), [API Standards](/knowledge/api/standards.md)
>
> **Context**: This document is relevant when implementing the authentication system
```

### Footer Navigation Cue

Each document should include a navigation cue at the bottom, providing paths forward and backward through the framework.

#### Format

```markdown
---

**Next Steps**: [Next Document 1](/path/to/next1.md) | [Next Document 2](/path/to/next2.md)

**Related Topics**: [Related Topic 1](/path/to/related1.md) | [Related Topic 2](/path/to/related2.md)

**Navigation Path**: [Home](/index.md) > [Category](/category/index.md) > [Current Document](current-document.md)
```

#### Example

```markdown
---

**Next Steps**: [Token Validation](/implementation/auth/token-validation.md) | [Usage Examples](/docs/examples/auth-usage.md)

**Related Topics**: [Security Best Practices](/knowledge/security/best-practices.md) | [User Management](/implementation/user-management.md)

**Navigation Path**: [Home](/index.md) > [Implementation](/implementation/index.md) > [Authentication Implementation](/implementation/auth-implementation.md)
```

## Section Placement

Navigation sections should be placed in consistent locations within documents:

1. **Header Navigation Cue**: Immediately after the document title
2. **Prerequisites Section**: Near the beginning of the document, after the overview/introduction
3. **Related Documents Section**: Near the end of the document, before any appendices
4. **Next Steps Section**: At the end of the document, before the footer navigation cue
5. **Footer Navigation Cue**: At the very bottom of the document

## Directory-Specific Guidance

Different types of documents may require slightly different approaches to navigation sections:

### Knowledge Documents

- Emphasize conceptual prerequisites
- Link to specifications that apply this knowledge
- Connect to related knowledge areas

### Specification Documents

- Link to related knowledge items
- Connect to implementation documents
- Reference related specifications

### Implementation Documents

- Link to specifications being implemented
- Connect to validation documents
- Reference related implementations

### Command Documents

- Link to knowledge required to use the command
- Connect to example usages
- Reference related commands

### Documentation Documents

- Organize in learning paths
- Connect to related examples
- Reference prerequisite concepts

## Implementation Notes

When implementing these standard navigation sections:

1. Always use absolute paths from the repository root
2. Include brief descriptions explaining why each link is relevant
3. Limit each section to 3-7 links for readability
4. Ensure all links are valid and point to existing documents
5. Use consistent formatting as shown in the examples
6. Organize links by relevance or logical sequence
7. Update navigation sections when document relationships change

## Next Steps

After reading this document, you may want to explore:

- [File Naming Conventions](/docs/file-naming-conventions.md) - Conventions for naming files in the framework
- [Templates Directory](/templates/index.md) - Templates implementing these navigation sections

## Related Documents

- [Navigation Metadata Specification](/docs/navigation-metadata.md) - Detailed specification for navigation metadata
- [Documentation Standards](/docs/documentation-standards.md) - Overall documentation standards for the framework
- [Metadata Format Specifications](/docs/metadata-format-specifications.md) - Specifications for YAML frontmatter

---

**Next Steps**: [File Naming Conventions](/docs/file-naming-conventions.md) | [Templates Directory](/templates/index.md)

**Related Topics**: [Navigation Metadata](/docs/navigation-metadata.md) | [Documentation Standards](/docs/documentation-standards.md)

**Navigation Path**: [Home](/index.md) > [Documentation](/docs/index.md) > [Standard Navigation Sections](/docs/standard-navigation-sections.md)