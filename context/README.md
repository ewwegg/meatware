# Context Directory

## Purpose

The Context directory contains working repositories for current project state and session management. This directory stores structured information about the project's structure, dependencies, active tasks, and other contextual information that AI tools need to maintain awareness of the project state.

## Structure

- `/maps/` - Project structure maps and relationship visualizations
- `/state/` - Current project state tracking
- `/history/` - Session history and past interactions
- `/cached/` - Temporary context storage between sessions

## Usage

Context files are primarily used to:
1. Track the current state of the project
2. Maintain awareness between AI sessions
3. Store relationship maps and dependencies
4. Cache frequently used information
5. Provide transparency into what information is being used

## File Format

Context files use both Markdown for documentation and structured formats (JSON, YAML) for machine-readable data:
- YAML frontmatter for metadata
- Schema documentation
- Content examples
- Usage guidelines
- Clear documentation of update patterns

## Navigation

For a complete overview of this directory's contents, see the [Context Index](index.md).

## Templates

For creating new context files, use the [Context Template](/templates/context/_template.md).