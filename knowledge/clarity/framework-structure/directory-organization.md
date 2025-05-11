---
title: "Clarity: Framework Directory Organization"
category: "knowledge"
knowledge_type: "clarity"
created: "2023-09-04"
updated: "2023-09-04"
version: "0.1.0"
status: "active"
authors: ["Meatware Team"]
tags: ["directory structure", "organization", "framework architecture", "folder hierarchy"]
related_files: [
  "/knowledge/clarity/index.md",
  "/docs/file-naming-conventions.md",
  "/project-implementation/milestone-1-core-directory-structure.md"
]
navigation_context: "When seeking clarity about the framework's directory structure and organization"
navigation_keywords: ["directory", "folder", "structure", "organization", "hierarchy"]
navigation_priority: "high"
summary: "Questions and answers about the Meatware framework's directory organization, capturing insights about structure and hierarchy design"
---

# Clarity: Framework Directory Organization

> **Navigation**: [Knowledge Index](/knowledge/index.md) > [Clarity Index](/knowledge/clarity/index.md) > [Framework Structure](/knowledge/clarity/framework-structure/) > Framework Directory Organization
>
> **Context**: This document captures questions, answers, and insights about the Meatware framework's directory organization and folder hierarchy.

## Purpose

This clarity document captures key questions and answers about the framework's directory structure to ensure consistent understanding throughout implementation. It serves as a reference for both humans and AI tools to align on the organization of the framework's components.

## Topic Overview

The Meatware framework uses a carefully designed directory structure to organize different types of information and functionality. The structure is a fundamental aspect of the framework, as it determines how information is organized, accessed, and navigated by both humans and AI tools.

## Questions and Answers

### Question 1: What is the overall organization of the framework's directory structure?

**Context**: Understanding the high-level organization is essential for implementing the framework and ensuring its components are properly structured.

**Answer**: 

The framework is organized into a set of top-level directories, each with a specific purpose and content type:

- **/knowledge/**: Contextual information storage organized by category
  - `/api/`: API documentation
  - `/architecture/`: Architectural patterns
  - `/integrations/`: Integration details
  - `/conventions/`: Custom conventions
  - `/clarity/`: Questions and answers by topic
  - `/changelog/`: Decision logs and changes

- **/specification/**: Requirements documentation
  - Feature-organized specifications with problem statements, requirements, constraints

- **/implementation/**: Execution-focused plans
  - `/roadmap/`: Milestone-based organization
  - Feature-specific implementation plans with tasks and validation

- **/command/**: Reusable interaction patterns
  - Templates for consistent AI tool usage
  - Organized by purpose (query, generation, validation)

- **/context/**: Project state management
  - Project structure maps, active tasks, session tracking
  - Context selection rules and dependencies

- **/docs/**: Human-oriented documentation
  - `/human/`: Human-focused documentation
  - `/system/`: System documentation
  - `/quickstart/`: Quick-start guides
  - `/best-practices/`: Best practices

- **/config/**: Framework configuration
  - Configuration settings for different project types
  - Integration settings for different AI tools

Each directory contains specific file types and follows consistent organizational patterns to ensure predictability and ease of navigation.

**Insights Gained**:
- The directory structure follows a logical separation of concerns
- Each top-level directory has a distinct purpose and information type
- Subdirectories provide further organization within each category
- The structure is designed to be navigable by both humans and AI tools

**Implementation Impact**:
- All framework components must be implemented following this structure
- File organization must respect the boundaries between directories
- Navigation and cross-referencing must account for this organization
- Templates and standards must align with the directory structure

---

### Question 2: How should the framework balance standardization with flexibility in directory structure?

**Context**: This question addresses how rigid the directory structure should be versus allowing project-specific adaptations.

**Answer**: 

The framework prioritizes standardization of structure over flexibility, especially in the MVP implementation:

- **Standardized Structure Priority**: Everything essential is covered by the standardized approach.
- **Fixed Core Structure**: The top-level directories and their primary subdirectories are fixed and should not be modified.
- **Limited Customization**: Project-specific flexibility is considered a future enhancement, not an MVP requirement.
- **Adaptive Content**: While the structure is standardized, the framework adapts to users as they complete documentation.
- **Consistency Focus**: Maintaining a consistent structure is essential for navigation, cross-referencing, and AI tool integration.

The framework does not include customization options in the initial implementation. The standardized structure is designed to accommodate a wide range of projects without modification.

**Insights Gained**:
- Standardization is a core strength of the framework
- The structure should be complete enough to handle typical use cases without modification
- Flexibility should come from content, not structural changes
- Consistency enables better AI tool integration

**Implementation Impact**:
- Implementation should enforce the standard directory structure
- Documentation should emphasize the importance of maintaining the structure
- Templates and tools should reinforce the standard organization
- Future versions may explore controlled extension points for customization

---

### Question 3: How should subdirectories be organized within top-level directories?

**Context**: This question explores the organizational principles for subdirectories to ensure consistent patterns throughout the framework.

**Answer**: 

Subdirectories follow these organizational principles:

1. **Categorical Organization**: Subdirectories group related content by category or function
   - Example: `/knowledge/api/`, `/knowledge/architecture/`, etc.

2. **Feature-Based Organization**: Within categorical subdirectories, content may be further organized by feature
   - Example: Feature-specific specifications within `/specification/`

3. **Type-Based Organization**: Content is sometimes organized by type rather than subject
   - Example: `/command/` organized by purpose (query, generation, validation)

4. **Index Files**: Each directory includes an index.md file that provides an overview and links to all contents
   - Example: `/knowledge/index.md` lists and links to all knowledge categories

5. **README Files**: Each directory includes a README.md that explains its purpose and structure
   - These are primarily for human developers to understand the organization

6. **Templates**: Directory-specific templates are provided in each location
   - Example: `_template.md` files in each directory establishing the standard format

7. **Consistent Naming**: Subdirectories follow consistent naming conventions
   - Lowercase, hyphenated names for readability and URL-compatibility

**Insights Gained**:
- Consistent organizational patterns improve navigability
- Different organizational principles can be applied to different content types
- Clear structural documentation is essential for framework users
- Templates establish consistency within each directory type

**Implementation Impact**:
- All subdirectory implementation must follow these organizational principles
- Index and README files must be created for all directories
- Templates must be provided and documented for each directory type
- Navigation system must account for these organizational patterns

## Key Insights Summary

1. **Structured Separation of Concerns**: The framework's directory structure provides a clear separation of concerns, with each top-level directory serving a specific purpose in the framework ecosystem.

2. **Standardization Over Flexibility**: The framework prioritizes a standardized structure over flexibility, ensuring consistent organization that benefits navigation, cross-referencing, and AI tool integration.

3. **Consistent Organizational Patterns**: Subdirectories follow consistent organizational principles including categorical grouping, feature-based organization, index files, README files, templates, and naming conventions.

## Open Questions

1. How might the directory structure evolve for larger projects with extensive content in certain areas?
2. What extension mechanisms might be appropriate for future versions that need more flexibility?
3. How should the framework handle cases where content might logically belong in multiple directories?

## Decisions Informed

1. [Milestone 1: Core Directory Structure](/project-implementation/implementation-log/milestone-1-core-directory-structure.md) - The understanding of directory organization directly informed the implementation of the core directory structure.
2. [File Naming Conventions](/docs/file-naming-conventions.md) - The organization principles influenced the development of file naming conventions.

## Related Topics

- [Navigation System Implementation](/knowledge/clarity/framework-structure/navigation-system.md) - How navigation works within the directory structure
- [Cross-Referencing Mechanism](/knowledge/clarity/framework-structure/cross-referencing.md) - How files reference each other across directories
- [File Naming Conventions](/docs/file-naming-conventions.md) - Standards for naming files within the structure

## Revision History

| Date | Question | Change |
|------|----------|--------|
| 2023-09-04 | Question 1 | Initial documentation of framework directory organization |
| 2023-09-04 | Question 2 | Initial documentation of standardization vs. flexibility |
| 2023-09-04 | Question 3 | Initial documentation of subdirectory organization |

---

**Related Topics**: [Directory Structure](/knowledge/architecture/directory-structure.md) | [Navigation System](/knowledge/architecture/navigation-system.md)

**Navigation Path**: [Home](/index.md) > [Knowledge](/knowledge/index.md) > [Clarity](/knowledge/clarity/index.md) > [Framework Structure](/knowledge/clarity/framework-structure/) > [Directory Organization](/knowledge/clarity/framework-structure/directory-organization.md)