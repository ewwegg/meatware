# Meatware: AI-Human Collaboration Framework

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Goal](#project-goal)
3. [Core Philosophy](#core-philosophy)
4. [Core Objectives](#core-objectives)
5. [Framework Architecture](#framework-architecture)
6. [Internal Structure](#internal-structure)
7. [Key Features](#key-features)
8. [Implementation Concepts](#implementation-concepts)
9. [Success Criteria](#success-criteria)
10. [Not In Scope](#not-in-scope)

## Project Overview

**Meatware** is an integrated framework that enhances human-AI collaboration in software development by systematically managing context, plans, and interactions through a cohesive system with clear entry points for different development phases. The entire framework is contained within a single folder structure that can be installed in any project using npm.

This framework is specifically designed for individual developers working with AI coding assistants, providing a transparent system where all context and mechanisms are visible and inspectable by users.

## Project Goal

Develop "meatware" as a comprehensive framework implemented through a unified folder structure that creates a systematic approach to AI-enhanced coding. This is not merely a directory organization but an interconnected framework where files reference and build upon each other, guiding AI assistants through a structured workflow. 

The framework focuses on reducing developer mental load by handling context management and documentation systematically, allowing developers to focus on core tasks while AI assistants navigate the framework independently.

## Core Philosophy

The fundamental premise of meatware is that effective AI-assisted development requires six essential elements:

1. **Structured Knowledge**: Organized information that AI tools can consistently reference
2. **Clear Specifications**: Well-defined requirements that establish what needs to be built
3. **Detailed Implementation Plans**: Step-by-step approaches that map out how to build it
4. **Standardized Interactions**: Consistent patterns for communicating with AI tools
5. **Contextual Awareness**: A shared understanding of the current development state
6. **Transparency**: Making all context and mechanisms visible and inspectable by users

By consolidating these elements into a single, well-organized directory structure, meatware aims to maximize developer productivity while ensuring AI tools have the context they need to perform effectively.

## Core Objectives

1. **Create an integrated framework** that provides a systematic approach to AI-assisted development through interlinked files and clear directional flows.

2. **Implement dual entry points** that clearly separate documentation/preparation from execution phases of development.

3. **Design a self-guiding system** where AI agents can determine next steps and required information without constant human direction.

4. **Develop a package installation system** that allows developers to easily add the meatware directory to any project with minimal configuration.

5. **Design AI-agnostic nomenclature** that works across all AI coding tools and avoids tool-specific terminology.

6. **Implement automatic context management** that intelligently selects and provides the right information to AI tools based on the current task.

7. **Create a systematic documentation builder** that guides AI agents to ask the right questions and comprehensively complete all required documentation.

8. **Provide templates and examples** for each component to accelerate adoption.

9. **Ensure complete transparency** by keeping all framework elements visible within the folder structure for developer inspection.

## Framework Architecture

Meatware is designed as a framework, not just a folder structure. This distinction is crucial for understanding its implementation:

1. **Interlinked Documentation**: Files within the framework reference and build upon each other, creating a web of interconnected information that allows AI agents to navigate the project comprehensively.

2. **Dual Entry Points**:

   - **Documentation Entry Point**: A clear initial entry point (`campaign.md`) that guides AI agents through the process of asking systematic questions to the developer and completing all required documentation within the framework. This entry point is used when setting up and preparing the project.
   - **Execution Entry Point**: A separate entry point (`conquer.md`) used when it's time to apply the framework to actual project development. This creates a clear separation between documentation/preparation and execution phases.

3. **Self-Guiding System**: The framework is designed so that once an AI agent enters through the appropriate entry point, it can systematically navigate to find what it needs next or determine the appropriate next actions without requiring constant human direction.

4. **Comprehensive Documentation Builder**: The framework includes mechanisms that lead AI agents through a series of prompts and questions to ensure all necessary documentation is systematically completed before execution begins.

5. **Workflow Separation**: By clearly delineating the preparation and execution phases through distinct entry points, the framework creates a natural checkpoint for developers to review and approve plans before implementation begins.

6. **Visible Navigation Paths**: All cross-references and navigation paths are explicit and inspectable, making it clear how the AI navigates through the framework.

## Internal Structure

The meatware directory includes these primary subdirectories:

1. **`/knowledge`**:

   - Purpose: Persistent storage of contextual information that AI assistants need to understand the codebase
   - Content: API docs, architectural patterns, integration details, custom conventions
   - Format: Primarily markdown files optimized for AI consumption
   - Organization: Clear patterns for different knowledge types with consistent structure

2. **`/specification`**:

   - Purpose: Detailed planning and requirements documentation for features and components
   - Content: User stories, acceptance criteria, requirements, constraints, design decisions
   - Format: Structured markdown with consistent sections for problem statements, expected outcomes, and success criteria
   - Templates: Standardized templates to ensure comprehensive documentation

3. **`/implementation`**:

   - Purpose: Execution-focused plans that translate specifications into working code
   - Content: Step-by-step approaches, technical solutions, validation methods, refactoring strategies
   - Format: Structured markdown with detailed implementation guides, code patterns, and testing procedures
   - Granularity: Clear milestones and checkpoints for developer review and approval

4. **`/command`**:

   - Purpose: Reusable interaction patterns for consistent AI tool usage
   - Content: Context primers, common tasks, validation workflows
   - Format: Templated prompts that can be executed with any AI coding assistant
   - Standardization: Consistent command formats that work across AI tools

5. **`/context`**:

   - Purpose: Working repository for current project state and session management
   - Content: Project structure maps, dependency graphs, active codeflows
   - Format: JSON/YAML structures for machine consumption but human-readable
   - Includes a `/cached` subfolder for temporary context storage between sessions
   - Transparency: Clear indication of what context is being used for AI decisions

6. **`/docs`**:

   - Purpose: Human-oriented documentation for the meatware system itself
   - Content: Usage guides, best practices, pattern libraries, template examples
   - Format: Rich markdown documentation with examples and practical guidance
   - Focus: Pragmatic documentation directly related to framework usage

7. **`/config`**:
   - Purpose: Configuration settings to adapt meatware to different project types and AI tools
   - Content: Default settings, project-specific configurations, AI tool integration settings
   - Format: YAML or JSON configuration files
   - Simplicity: Minimal configuration requirements for quick adoption

## Key Features

1. **Universal Primer**: A one-command approach to prime any AI assistant with the essential context about the project

2. **Dual-Phase Planning**: Separate systems for specification development and implementation planning

3. **Command Registry**: A system for registering, discovering, and executing common AI interaction patterns

4. **Context Management**: Intelligent selection of relevant knowledge based on the current task or file being modified, with caching for efficiency

5. **Documentation System**: Human-readable guides and references for effective meatware usage

6. **Integration System**: Methods to connect meatware with various AI tools through their APIs or command-line interfaces

7. **Transparent Operation**: All framework mechanisms are visible and inspectable within the folder structure

8. **Quick-Win Implementation**: Streamlined adoption process that delivers immediate value with minimal setup

9. **Mental Load Reduction**: Framework handles the cognitive load of context management, leaving developers free to focus on core tasks

## Implementation Concepts

1. **Package Structure**
   - Lightweight npm-installable package
   - Simple directory structure with template files
   - Minimal configuration requirements for quick adoption

2. **Documentation Process**
   - Systematic approach to building comprehensive documentation
   - Templates that guide AI assistants in asking necessary questions
   - Progressive knowledge building from essential information to comprehensive coverage

3. **Implementation Planning**
   - Granular roadmap with clear milestones
   - Checkpoints for developer review and approval
   - Consistent format for technical solutions and validation methods

4. **Context Management Approach**
   - Transparent selection of relevant context
   - Simple, effective rules for determining context relevance
   - Visible paths for information flow between framework components

5. **Standardized Formats**
   - Consistent file structures for each directory type
   - Human-readable and machine-parsable formats
   - Simple linking system for cross-references between documents

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

10. The framework is lightweight and not over-engineered

11. Developers can inspect and understand what information the AI is using for decisions

## Not In Scope

1. Creating AI-specific optimization techniques that only work with one tool

2. Supporting legacy AI interaction patterns that don't follow structured approaches

3. Automatically populating all knowledge without developer input

4. Replacing existing documentation systems rather than complementing them

5. IDE integrations beyond simple CLI interaction

6. CI/CD pipeline integrations

7. Enterprise-scale team collaboration features

8. Complex extensibility frameworks and plugin architectures

9. Commercial services built on the framework

10. Performance optimizations for extremely large codebases