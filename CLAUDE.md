# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Meatware is an integrated framework enhancing human-AI collaboration in software development. It systematically manages context, plans, and interactions through a cohesive directory structure installed as a single package. The framework provides clear entry points for different development phases, guiding AI assistants through a structured workflow that reduces developer mental load.

This project targets individual developers (both AI experts and those with limited AI experience) and focuses on a lightweight MVP implementation prioritizing simplicity and essential features.

## Current Project Phase

The project is currently in the planning and documentation phase. We are developing:
1. Comprehensive framework architecture and specifications
2. Directory structure and file organization
3. Cross-referencing and navigation mechanisms 
4. Templates for consistent documentation

## Core Philosophy

All work on this project must align with these core concepts:

1. **Structured Knowledge**: Organized information that AI tools can consistently reference
2. **Clear Specifications**: Well-defined requirements establishing what needs to be built
3. **Detailed Implementation Plans**: Step-by-step approaches mapping out implementation
4. **Standardized Interactions**: Consistent patterns for communicating with AI tools
5. **Contextual Awareness**: Shared understanding of current development state
6. **Transparency**: All framework mechanisms visible and inspectable within folder structure

## Development Principles

- **Lightweight Implementation**: Focus on simplicity and essential features for MVP by an indie developer
- **Individual Developer Focus**: Designed for solo developers, supporting both AI experts and beginners
- **Reduced Mental Load**: Framework handles context management, allowing developers to focus on core tasks
- **Self-Contained**: All functionality within a single folder structure installable via npm
- **Open Source**: Prioritize widespread adoption over commercialization

## Repository Structure

The framework consists of:

### Entry Points
- **`campaign.md`**: Documentation/preparation entry point with interview-style process
- **`conquer.md`**: Execution entry point with task prioritization and implementation

### Directory Structure
- **`/knowledge/`**: Contextual information storage
  - `/api/`: API documentation 
  - `/architecture/`: Architectural patterns
  - `/integrations/`: Integration details
  - `/conventions/`: Custom conventions
  - `/clarity/`: Questions and answers by topic
  - `/changelog/`: Decision logs and changes

- **`/specification/`**: Requirements documentation
  - Feature-organized specifications with problem statements, requirements, constraints

- **`/implementation/`**: Execution-focused plans
  - `/roadmap/`: Milestone-based organization
  - Feature-specific implementation plans with tasks and validation

- **`/command/`**: Reusable interaction patterns
  - Templates for consistent AI tool usage
  - Organized by purpose (query, generation, validation)

- **`/context/`**: Project state management
  - Project structure maps, active tasks, session tracking
  - Context selection rules and dependencies

- **`/docs/`**: Human-oriented documentation
  - `/human/`: Human-focused documentation
  - `/system/`: System documentation
  - `/quickstart/`: Quick-start guides
  - `/best-practices/`: Best practices

- **`/config/`**: Framework configuration
  - Configuration settings for different project types
  - Integration settings for different AI tools

### Core Mechanisms
- **Self-Navigation System**: YAML frontmatter metadata, explicit linking
- **Cross-Referencing**: Consistent link syntax between related files
- **Context Management**: Templates guiding AI through context selection
- **Changelog System**: Timestamped decision logs with clear summaries
- **Clarity Documentation**: Structured Q&A capturing understanding

## File Map

### Planning Documents
- **`/planning-docs/revised-project-idea.md`**: Comprehensive overview of the Meatware project, its goals, philosophy, and structure. The definitive high-level reference.
- **`/planning-docs/project-specs.md`**: Detailed implementation specifications for each component of the framework, explaining what each part should do and how it should work.

### Core Files
- **`CLAUDE.md`** (this file): Project guidance and context for AI assistants.
- **`clarity.md`**: Captures questions, answers, and understanding about the project as it evolves.

### Future Framework Files (To Be Implemented)
- **`campaign.md`**: Entry point for documentation phase with guided interview process.
- **`conquer.md`**: Entry point for execution phase with task prioritization.
- **`index.md`**: Master linking document pointing to all main sections.
- **`/knowledge/` directories**: Organized contextual information.
- **`/specification/` directories**: Feature-specific requirements.
- **`/implementation/roadmap/` directories**: Milestone-based implementation plans.
- **`/command/registry.md`**: Central registry of standardized commands.
- **`/context/` tracking files**: Project state and context management.
- **`/docs/` guides**: Human-oriented documentation and usage instructions.
- **`/config/` settings**: Framework configuration options.

## Claude Collaboration Guidelines

When working in this repository, Claude should:

1. **Use Extended Thinking**: Utilize maximum token allowance and extensive reasoning. Cost optimization is not a concern; the focus is on producing the highest quality outcome.

2. **Ask Clarifying Questions BEFORE Taking Action**: 
   - ALWAYS ask clarifying questions BEFORE undertaking any significant task
   - Seek to fully understand requirements, context, and objectives first
   - Frame questions to expose assumptions and reveal potential misunderstandings
   - Present multiple interpretations when ambiguity exists
   - Obtain confirmation before proceeding with implementation

3. **Document Understanding in clarity.md**:
   - After receiving answers to clarifying questions, document the new understanding
   - Update the knowledge base in `clarity.md` with insights gained
   - Organize entries by topic with clear headers and concise points
   - Include both the questions asked and the understanding gained
   - Use this documented understanding as the basis for subsequent work

4. **Apply Critical Thinking**: Continuously evaluate how each document ties back to the core philosophy and objectives.

5. **Focus on Integration**: Ensure all work emphasizes how components interconnect rather than treating them as isolated elements.

6. **Provide Rationale**: Include reasoning behind recommendations and design decisions.

7. **Prioritize Conciseness**: Aim for comprehensive but succinct documentation that avoids unnecessary verbosity.

## Question-First Workflow

Follow this workflow for all tasks:

1. **Initial Task Analysis**: Understand the basic request
2. **Question Formulation**: Develop and ask clarifying questions
3. **Knowledge Documentation**: Record answers and insights in clarity.md
4. **Informed Execution**: Complete the task based on enhanced understanding
5. **Outcome Documentation**: Document results with references to relevant sections in clarity.md

## Key Implementation Concepts

1. **Self-Guiding System**: Files include navigation metadata, prerequisites, next steps, and explicit links allowing AI tools to navigate independently.

2. **Cross-Referencing**: Consistent linking syntax between related documents creates a navigable web of information.

3. **Context Management**: Templates guide AI to identify relevant context, document selection process, and maintain transparency.

4. **Standardized Formats**: Consistent file structures, metadata, and linking conventions across the framework.

5. **Changelog System**: Each entry stored as individual file using format: `YYYY-MM-DD-[3-word-summary].md` with template-based structure.

## Current Focus Areas

1. Refining the framework architecture and specifications
2. Developing the cross-referencing and navigation mechanisms
3. Creating templates for knowledge organization
4. Designing the clarity and changelog documentation systems
5. Ensuring all components align with core philosophy

All development should continuously reinforce the self-guiding nature of the system while maintaining AI-agnostic design principles.