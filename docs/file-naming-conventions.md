---
title: "File Naming Conventions"
category: "docs"
created: "2023-09-01"
updated: "2023-09-01"
version: "0.1.0"
status: "draft"
audience: "developer"
skill_level: "beginner"
format: "reference"
tags: ["standards", "conventions", "organization"]
related_files: ["/docs/documentation-standards.md", "/docs/metadata-format-specifications.md"]
---

# File Naming Conventions

## Overview

This document defines the standard file naming conventions for the Meatware framework. Consistent file naming ensures discoverability, clear organization, and effective navigation throughout the framework.

## General Rules

1. **Use lowercase letters** for all filenames
2. **Use hyphens** (`-`) to separate words, not spaces or underscores
3. **Use only alphanumeric characters** and hyphens in filenames
4. **Be descriptive but concise**
5. **Avoid abbreviations** unless widely recognized
6. **Include file extensions** appropriate to the file type (`.md`, `.json`, `.yaml`)
7. **Use only ASCII characters** (no special characters or Unicode symbols)

## Directory-Specific Conventions

### Knowledge Directory

```
/knowledge/[knowledge-type]/[subject]-[aspect].md
```

Examples:
- `/knowledge/api/authentication-endpoints.md`
- `/knowledge/architecture/component-diagram.md`
- `/knowledge/conventions/code-style.md`

Special files:
- `index.md` for directory indexes
- `_template.md` for templates

### Specification Directory

```
/specification/[feature-area]/[feature-name].md
```

Examples:
- `/specification/navigation/self-navigation-system.md`
- `/specification/knowledge/changelog-system.md`
- `/specification/context/caching-mechanism.md`

### Implementation Directory

```
/implementation/roadmap/milestone-[number]/[feature-name].md
```

Examples:
- `/implementation/roadmap/milestone-1/directory-structure.md`
- `/implementation/roadmap/milestone-2/navigation-metadata.md`

Task files:
```
/implementation/roadmap/milestone-[number]/tasks/[task-number]-[task-name].md
```

Examples:
- `/implementation/roadmap/milestone-1/tasks/01-create-directories.md`
- `/implementation/roadmap/milestone-1/tasks/02-create-templates.md`

### Command Directory

```
/command/[command-type]/[action]-[subject].md
```

Examples:
- `/command/query/find-knowledge.md`
- `/command/generation/create-specification.md`
- `/command/validation/verify-implementation.md`

### Context Directory

```
/context/[context-type]/[scope]-[subject].md
```

Examples:
- `/context/maps/project-structure.md`
- `/context/state/active-tasks.md`
- `/context/history/session-2023-09-01.md`

Structured data files:
```
/context/[context-type]/[scope]-[subject].[json|yaml]
```

Examples:
- `/context/maps/dependency-graph.json`
- `/context/state/current-state.yaml`

### Documentation Directory

```
/docs/[audience]/[topic]-[subtopic].md
```

Examples:
- `/docs/human/getting-started.md`
- `/docs/system/navigation-system.md`
- `/docs/quickstart/first-project.md`

### Configuration Directory

```
/config/[scope]-config.[json|yaml]
```

Examples:
- `/config/core-config.json`
- `/config/environments/development-config.yaml`
- `/config/environments/production-config.yaml`

### Templates Directory

```
/templates/[directory-name]/_template.[md|json|yaml]
```

Examples:
- `/templates/knowledge/_template.md`
- `/templates/config/_template.json`
- `/templates/config/_template.yaml`

## Special Files

These files have standardized names that should be used consistently:

- `README.md` - Description and overview for each directory
- `index.md` - Index of contents for each directory
- `_template.md` - Template for creating new files in a directory
- `CHANGELOG.md` - Record of notable changes
- `LICENSE` - License information
- `package.json` - NPM package configuration
- `campaign.md` - Entry point for documentation phase
- `conquer.md` - Entry point for execution phase

## Changelog Files

Changelog files follow a standardized date-based format:

```
/knowledge/changelog/YYYY-MM-DD-[three-word-summary].md
```

Examples:
- `/knowledge/changelog/2023-09-01-initial-framework-creation.md`
- `/knowledge/changelog/2023-09-15-navigation-system-update.md`

## Best Practices

1. **Keep filenames short but descriptive**
   - Aim for maximum of 50 characters
   - Balance brevity with clarity

2. **Use natural ordering where appropriate**
   - Add numeric prefixes for ordered content (e.g., `01-introduction.md`, `02-setup.md`)
   - Ensure consistent digit padding (use `01`, `02` rather than `1`, `2`)

3. **When to use compound words vs. hyphens**
   - Use compound words for terminology that appears that way in the industry
   - Otherwise, separate distinct words with hyphens

4. **Managing file revisions**
   - Do not add version numbers to filenames
   - Use metadata and Git for version tracking instead

5. **Hierarchical organization**
   - Keep directory structure flat when possible (max 3-4 levels deep)
   - Group related files in subdirectories
   
6. **Handle pluralization consistently**
   - Use singular form for type designations (e.g., `/command/query/` not `/command/queries/`)
   - Use plural form for collections (e.g., `/docs/best-practices/` not `/docs/best-practice/`)

## Examples

### Good Examples

✅ `/knowledge/api/authentication-flow.md`
✅ `/specification/navigation/cross-referencing.md`
✅ `/implementation/roadmap/milestone-1/tasks/01-setup-directories.md`
✅ `/docs/quickstart/first-time-setup.md`

### Bad Examples

❌ `/knowledge/API/Authentication_Flow.md` (uses uppercase and underscores)
❌ `/specification/Navigation System.md` (contains spaces)
❌ `/implementation/roadmap/m1/t1-dirs.md` (unclear abbreviations)
❌ `/docs/quickstart/1.md` (not descriptive)

## Application of Conventions

These naming conventions apply to:
- All files created within the Meatware framework
- Documentation references to files and directories
- Command-line examples in documentation
- API references and examples