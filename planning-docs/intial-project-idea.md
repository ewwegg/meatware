# Project Overview and Instructions

**Meatware**: An integrated framework that enhances human-AI collaboration in software development by systematically managing context, plans, and interactions through a cohesive system with clear entry points for different development phases.

> > Needs to mention it's all contained in a single file

## Project Goal

Develop "meatware" as a comprehensive framework implemented through a unified folder structure that creates a systematic approach to AI-enhanced coding. This is not merely a directory organization but an interconnected framework where files reference and build upon each other, guiding AI assistants through a structured workflow. The framework can be installed in any project root directory as a single package to facilitate more effective collaboration between developers and AI coding assistants.

> > Agentic coding assistants (is this the right terminology? It is specifically made to work with AI agents)

## Core Objectives

1. **Create an integrated framework** that provides a systematic approach to AI-assisted development through interlinked files and clear directional flows.

2. **Implement dual entry points** that clearly separate documentation/preparation from execution phases of development.

3. **Design a self-guiding system** where AI agents can determine next steps and required information without constant human direction.

4. **Develop a package installation system** that allows developers to easily add the meatware directory to any project with minimal configuration.

5. **Design AI-agnostic nomenclature** that works across all AI coding tools and avoids tool-specific terminology.

6. **Implement automatic context management** that intelligently selects and provides the right information to AI tools based on the current task.

7. **Create a systematic documentation builder** that guides AI agents to ask the right questions and comprehensively complete all required documentation.

8. **Provide templates and examples** for each component to accelerate adoption.

## Framework Architecture

Meatware is designed as a framework, not just a folder structure. This distinction is crucial for understanding its implementation:

1. **Interlinked Documentation**: Files within the framework reference and build upon each other, creating a web of interconnected information that allows AI agents to navigate the project comprehensively.

2. **Dual Entry Points**:

   - **Documentation Entry Point**: A clear initial entry point (`campaign.md`) that guides AI agents through the process of asking systematic questions to the developer and completing all required documentation within the framework. This entry point is used when setting up and preparing the project.
   - **Execution Entry Point**: A separate entry point (`conquer.md`) used when it's time to apply the framework to actual project development. This creates a clear separation between documentation/preparation and execution phases.

3. **Self-Guiding System**: The framework is designed so that once an AI agent enters through the appropriate entry point, it can systematically navigate to find what it needs next or determine the appropriate next actions without requiring constant human direction.

4. **Comprehensive Documentation Builder**: The framework includes mechanisms that lead AI agents through a series of prompts and questions to ensure all necessary documentation is systematically completed before execution begins.

5. **Workflow Separation**: By clearly delineating the preparation and execution phases through distinct entry points, the framework creates a natural checkpoint for developers to review and approve plans before implementation begins.# Meatware Project: High-Level Objectives

## Internal Structure

The meatware directory includes these primary subdirectories:

1. **`/knowledge`**:

   - Purpose: Persistent storage of contextual information that AI assistants need to understand the codebase
   - Content: API docs, architectural patterns, integration details, custom conventions
   - Format: Primarily markdown files optimized for AI consumption

2. **`/specification`**:

   - Purpose: Detailed planning and requirements documentation for features and components
   - Content: User stories, acceptance criteria, requirements, constraints, design decisions
   - Format: Structured markdown with consistent sections for problem statements, expected outcomes, and success criteria

3. **`/implementation`**:

   - Purpose: Execution-focused plans that translate specifications into working code
   - Content: Step-by-step approaches, technical solutions, validation methods, refactoring strategies
   - Format: Structured markdown with detailed implementation guides, code patterns, and testing procedures

4. **`/command`**:

   - Purpose: Reusable interaction patterns for consistent AI tool usage
   - Content: Context primers, common tasks, validation workflows
   - Format: Templated prompts that can be executed with any AI coding assistant

5. **`/context`**:

   - Purpose: Working repository for current project state and session management
   - Content: Project structure maps, dependency graphs, active codeflows
   - Format: JSON/YAML structures for machine consumption
   - Includes a `/cached` subfolder for temporary context storage between sessions

6. **`/docs`**:

   - Purpose: Human-oriented documentation for the meatware system itself
   - Content: Usage guides, best practices, pattern libraries, template examples
   - Format: Rich markdown documentation with examples and tutorials

7. **`/config`**:
   - Purpose: Configuration settings to adapt meatware to different project types and AI tools
   - Content: Default settings, project-specific configurations, AI tool integration settings
   - Format: YAML or JSON configuration files

## Key Features

1. **Universal Primer**: A one-command approach to prime any AI assistant with the essential context about the project

2. **Dual-Phase Planning**: Separate systems for specification development and implementation planning

3. **Command Registry**: A system for registering, discovering, and executing common AI interaction patterns

4. **Context Management**: Intelligent selection of relevant knowledge based on the current task or file being modified, with caching for efficiency

5. **Documentation System**: Human-readable guides and references for effective meatware usage

6. **Integration System**: Methods to connect meatware with various AI tools through their APIs or command-line interfaces

## Implementation Approach

1. Create a package structure that can be installed via npm

2. Develop two distinct entry point files:

   - `campaign.md` for guiding the documentation and preparation phase
   - `conquer.md` for the project execution phase

3. Implement a system of cross-references and links between files that guide AI assistants through appropriate workflows

4. Design templates that prompt AI assistants to ask specific, necessary questions to developers during the documentation phase

5. Develop a CLI tool for managing the meatware directory and executing common tasks

6. Implement handlers for different AI assistants (Claude, GitHub Copilot, etc.) to ensure consistent behavior

7. Design a plugin architecture that allows extension to support new AI tools or specialized workflows

8. Create comprehensive documentation on meatware usage patterns and best practices

## Success Criteria

1. A developer can install meatware in any project with a single command

2. AI assistants can navigate the framework autonomously from either of the entry points

3. The framework successfully guides AI agents to gather all necessary information by prompting developers with systematic questions

4. Clear separation exists between the documentation/preparation phase and the execution phase

5. The meatware framework can be effectively used with any major AI coding assistant

6. The system enables effective context management, planning, and reusable interactions for AI-assisted coding

7. The framework produces comprehensive, consistent documentation across projects

8. The system requires minimal ongoing maintenance and automatically adapts to project changes

9. New developers on a project can get up to speed faster by leveraging the organized context in meatware

10. The framework is lightwieght and not over-engineered

## Not In Scope

1. Creating AI-specific optimization techniques that only work with one tool

2. Supporting legacy AI interaction patterns that don't follow structured approaches

3. Automatically populating all knowledge without developer input

4. Replacing existing documentation systems rather than complementing them

## Core Philosophy

The fundamental premise of meatware is that effective AI-assisted development requires five things:

1. **Structured Knowledge**: Organized information that AI tools can consistently reference
2. **Clear Specifications**: Well-defined requirements that establish what needs to be built
3. **Detailed Implementation Plans**: Step-by-step approaches that map out how to build it
4. **Standardized Interactions**: Consistent patterns for communicating with AI tools
5. **Contextual Awareness**: A shared understanding of the current development state

By consolidating these elements into a single, well-organized directory structure, meatware aims to maximize developer productivity while ensuring AI tools have the context they need to perform effectively.
