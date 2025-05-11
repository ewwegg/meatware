---
title: "Context Directory Index"
category: "context"
created: "2023-09-01"
updated: "2023-09-01"
version: "0.1.0"
status: "draft"
---

# Context Directory

## Overview

The Context directory contains working repositories for current project state and session management. This directory stores structured information about the project's structure, dependencies, active tasks, and other contextual information that AI tools need to maintain awareness of the project state.

## Directory Contents

### Maps

- [Maps Index](/context/maps/index.md) - Project structure maps and relationship visualizations

### State

- [State Index](/context/state/index.md) - Current project state tracking

### History

- [History Index](/context/history/index.md) - Session history and past interactions

### Cached

- [Cached Index](/context/cached/index.md) - Temporary context storage between sessions

## Current Context Files

*No context files have been created yet. As context files are added, they will be listed here by type.*

## Usage Guidelines

Context files should:
- Be machine-readable with human-readable documentation
- Have clear update and access patterns
- Document their scope and duration
- Specify how frequently they should be updated
- Include validation rules for content
- Be transparent about what information they track and why

## Templates

For creating new context files, use the template: [Context Template](/templates/context/_template.md)

## Related Components

- [Knowledge Directory](/knowledge/index.md): Provides information to populate context
- [Implementation Directory](/implementation/index.md): Status tracked in context
- [Command Directory](/command/index.md): Uses context for informed interactions