# Metadata Format Specifications

This document defines the standard format for YAML frontmatter metadata used across all Meatware framework files. Consistent metadata enables effective navigation, cross-referencing, and context management throughout the framework.

## Overview

YAML frontmatter is a block of YAML-formatted metadata at the beginning of a Markdown file, enclosed by triple dashes:

```yaml
---
key1: value1
key2: value2
---
```

This metadata provides structured information about the file for both human readers and AI tools navigating the framework.

## Required Metadata Fields

The following fields are required in all Meatware framework files:

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `title` | String | The full title of the document | `"API Documentation Format"` |
| `category` | String (Enum) | The framework category this file belongs to | `"knowledge"` |
| `created` | Date (ISO 8601) | Date when the file was first created | `"2023-09-01"` |
| `updated` | Date (ISO 8601) | Date when the file was last updated | `"2023-09-15"` |
| `version` | String (SemVer) | Current version of the document | `"0.1.0"` |
| `status` | String (Enum) | Current status of the document | `"approved"` |

## Optional Metadata Fields

The following fields are optional but encouraged where applicable:

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `prerequisite_files` | Array of Strings | Files that should be read before this one | `["/knowledge/overview.md"]` |
| `next_steps` | Array of Strings | Suggested files to read after this one | `["/specification/feature-x.md"]` |
| `related_files` | Array of Strings | Files with related information | `["/knowledge/related-concept.md"]` |
| `authors` | Array of Strings | Names of document authors | `["Jane Doe", "John Smith"]` |
| `tags` | Array of Strings | Categorization tags | `["api", "auth", "security"]` |
| `summary` | String | Brief document summary (max 150 chars) | `"Defines API documentation standards"` |
| `priority` | String (Enum) | Implementation priority | `"high"` |
| `complexity` | String (Enum) | Implementation complexity | `"medium"` |

## Category-Specific Metadata

### Knowledge Files

```yaml
knowledge_type: "api|architecture|integration|convention|clarity|changelog"
expertise_level: "beginner|intermediate|advanced"
stability: "experimental|stable|deprecated"
```

### Specification Files

```yaml
problem_id: "PROB-123"
stakeholders: ["User role", "Dev team"]
requirements: ["REQ-1", "REQ-2"]
dependencies: ["SPEC-234", "SPEC-345"]
```

### Implementation Files

```yaml
milestone: "M1"
implements: ["SPEC-123"]
estimated_effort: "2d"
dev_checkpoint: true
```

### Command Files

```yaml
command_type: "query|generation|validation"
context_required: ["knowledge", "specification"]
compatibility: ["Claude", "GPT-4", "Bard"]
```

### Context Files

```yaml
context_scope: "global|project|feature"
cache_duration: "session|day|permanent"
update_frequency: "realtime|daily|manual"
```

### Documentation Files

```yaml
audience: "developer|user|administrator"
skill_level: "beginner|intermediate|advanced"
format: "guide|reference|tutorial|faq"
```

## Field Value Standards

### Category Values

Valid values for the `category` field:
- `knowledge`: Contextual information storage
- `specification`: Requirements documentation
- `implementation`: Execution-focused plans
- `command`: Reusable interaction patterns
- `context`: Project state management
- `docs`: Human-oriented documentation
- `config`: Framework configuration

### Status Values

Valid values for the `status` field:
- `draft`: Initial working document
- `review`: Ready for peer review
- `approved`: Reviewed and approved
- `archived`: No longer actively maintained

### Priority Values

Valid values for the `priority` field:
- `critical`: Must be implemented immediately
- `high`: Should be implemented in current cycle
- `medium`: Planned for near-term implementation
- `low`: Nice to have, not time-sensitive

### Complexity Values

Valid values for the `complexity` field:
- `trivial`: Very simple implementation
- `simple`: Straightforward implementation
- `medium`: Moderate complexity
- `complex`: Significant complexity
- `very-complex`: Extremely challenging implementation

## File Path References

All file paths in metadata should follow these conventions:

1. Always use absolute paths from the repository root
2. Always include the file extension
3. Use forward slashes (/) regardless of operating system
4. Example: `/knowledge/api/authentication.md`

## YAML Syntax Guidelines

1. Use quotes for string values containing special characters
2. Arrays can be written in expanded form (one item per line with leading dashes) or in inline form with brackets
3. Nested objects should use indentation of 2 spaces
4. Boolean values should be lowercase (`true`, `false`)
5. Keep key names simple and use snake_case for consistency

## Example Metadata Blocks

### Knowledge File Example

```yaml
---
title: "Authentication API Documentation"
category: "knowledge"
knowledge_type: "api"
created: "2023-09-01"
updated: "2023-09-15"
version: "0.1.0"
status: "approved"
expertise_level: "intermediate"
stability: "stable"
authors: ["Jane Doe"]
tags: ["api", "auth", "security"]
prerequisite_files: ["/knowledge/api/overview.md"]
next_steps: ["/knowledge/api/authorization.md"]
related_files: [
  "/specification/auth-system.md",
  "/implementation/auth-implementation.md"
]
summary: "Comprehensive documentation of the authentication API endpoints, parameters, and response formats"
---
```

### Specification File Example

```yaml
---
title: "Authentication System Specification"
category: "specification"
created: "2023-09-02"
updated: "2023-09-16"
version: "0.2.0"
status: "review"
problem_id: "PROB-123"
stakeholders: ["End Users", "Security Team", "API Team"]
requirements: ["REQ-1", "REQ-2", "REQ-3"]
dependencies: ["SPEC-456"]
priority: "high"
complexity: "medium"
related_files: ["/knowledge/api/authentication.md"]
---
```

### Implementation File Example

```yaml
---
title: "Authentication System Implementation Plan"
category: "implementation"
created: "2023-09-10"
updated: "2023-09-17"
version: "0.1.0"
status: "draft"
milestone: "M2"
implements: ["SPEC-123"]
estimated_effort: "5d"
dev_checkpoint: true
prerequisite_files: ["/specification/auth-system.md"]
related_files: ["/knowledge/api/authentication.md"]
---
```

## Validation

All metadata must be validated during the build process to ensure it adheres to these standards. Validation will check:

1. Presence of all required fields
2. Correct data types for all fields
3. Valid values for enumerated fields
4. Existence of referenced files
5. Syntax correctness

## Integration with Navigation

Metadata is utilized by the framework's self-navigation system to:

1. Build relationships between files
2. Determine prerequisite information
3. Suggest logical next steps
4. Categorize and index content
5. Facilitate context selection for AI tools

## Maintenance

As the framework evolves, this metadata specification may be extended. The process for extending the specification is:

1. Propose new metadata fields with clear purpose
2. Define field type and valid values
3. Update this specification document
4. Update validation tools
5. Communicate changes to contributors