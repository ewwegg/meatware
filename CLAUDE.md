# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Current Project Phase: Planning & Documentation

This project is currently in the planning and initial documentation phase. The focus is on developing a comprehensive framework plan and creating concise documentation that clearly articulates what Meatware is and how it should be implemented.

## Project Purpose

Meatware is an integrated framework enhancing human-AI collaboration in software development by systematically managing context, plans, and interactions. The system will provide clear entry points for different development phases through a cohesive directory structure installed as a single package.

## Core Philosophy

All planning and documentation must continuously align with these core concepts:

1. **Structured Knowledge**: Organized information that AI tools can consistently reference
2. **Clear Specifications**: Well-defined requirements establishing what needs to be built
3. **Detailed Implementation Plans**: Step-by-step approaches mapping out implementation
4. **Standardized Interactions**: Consistent patterns for communicating with AI tools
5. **Contextual Awareness**: Shared understanding of current development state
6. **Transparency**: The framework operates entirely within its folder structure, making all context and mechanisms visible and inspectable by users

## Development Principles

- **Lightweight Implementation**: Focus on simplicity and essential features for an MVP by an indie developer
- **Individual Developer Focus**: Designed primarily for individual developers, both AI experts and those with limited AI experience
- **Reduced Mental Load**: Framework handles the heavy mental load, allowing developers to focus on their core tasks
- **Self-Contained**: All functionality contained within a single folder structure installable via npm
- **Open Source**: Prioritize widespread adoption over commercialization

## Claude Collaboration Guidelines

When working in this repository, Claude should:

1. **Use Extended Thinking**: Always utilize maximum token allowance and extensive reasoning for all tasks. Cost optimization is not a concern; the focus is on producing the highest quality outcome.

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

4. **Apply Critical Thinking**: Consistently evaluate how each planning document and specification ties back to the core philosophy and objectives.

5. **Focus on Integration**: Ensure all documentation emphasizes how components interconnect rather than treating them as isolated elements.

6. **Provide Rationale**: Include reasoning behind recommendations and design decisions.

7. **Prioritize Conciseness**: Aim for comprehensive but succinct documentation that avoids unnecessary verbosity.

## Question-First Workflow

The expected workflow for any task is:

1. **Initial Task Analysis**: Understand the basic request
2. **Question Formulation**: Develop and ask clarifying questions
3. **Knowledge Documentation**: Record answers and insights in clarity.md
4. **Informed Execution**: Complete the task based on enhanced understanding
5. **Outcome Documentation**: Document results with references to relevant sections in clarity.md

This systematic approach ensures all work is based on clear understanding and creates a persistent knowledge base that improves over time.

## Repository Structure

The repository is being developed to include:

- **Dual Entry Points**: Documentation entry (`campaign.md`) and execution entry (`conquer.md`)
- **Directory Structure**: Knowledge, specification, implementation, command, context, docs, and config directories
- **Cross-Referenced Documentation**: Files that reference and build upon each other

## Next Steps

Focus on developing:

1. Clear architectural documentation
2. Implementation specifications
3. Templates for knowledge organization
4. Framework for AI context management
5. Integration patterns between components

All development should continuously reinforce the self-guiding nature of the system while maintaining AI-agnostic design principles.