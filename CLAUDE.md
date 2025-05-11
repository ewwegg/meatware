# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Meatware is an integrated framework enhancing human-AI collaboration in software development. It systematically manages context, plans, and interactions through a cohesive directory structure installed as a single package. The framework provides clear entry points for different development phases, guiding AI assistants through a structured workflow that reduces developer mental load.

## Current Project Phase

The project is now in the **implementation phase**, following the roadmap specified in `/project-implementation/roadmap.md`. We are executing each milestone sequentially, documenting implementation details, challenges, technical debt, and next steps in structured implementation logs.

## Core Philosophy

All work on this project must align with these core concepts:

1. **Structured Knowledge**: Organized information that AI tools can consistently reference
2. **Clear Specifications**: Well-defined requirements establishing what needs to be built
3. **Detailed Implementation Plans**: Step-by-step approaches mapping out implementation
4. **Standardized Interactions**: Consistent patterns for communicating with AI tools
5. **Contextual Awareness**: Shared understanding of current development state
6. **Transparency**: All framework mechanisms visible and inspectable within folder structure

## Repository Structure

### Current Project Files
- **`CLAUDE.md`** (this file): Project guidance and context for AI assistants
- **`clarity.md`**: Questions, answers, and understanding about the project
- **`notes.md`**: General project notes and information
- **`/planning-docs/revised-project-idea.md`**: Comprehensive overview of the Meatware project
- **`/planning-docs/project-specs.md`**: Detailed implementation specifications
- **`/project-implementation/roadmap.md`**: Implementation roadmap with milestone specifications
- **`/project-implementation/implementation-log/`**: Directory for milestone implementation logs

### Implementation Roadmap

The roadmap in `/project-implementation/roadmap.md` defines 12 sequential milestones (M0-M11) covering the entire implementation cycle. Each milestone has specific:
- Objectives
- Deliverables
- Tasks
- Dependencies

## Implementation Guidelines

### Milestone Execution Process
1. Review current milestone specifications from the roadmap
2. Implement all required components and files
3. Test functionality against milestone objectives
4. Document implementation in the corresponding log file
5. Prepare for review before proceeding to the next milestone

### Implementation Log Requirements
Each milestone requires a corresponding log file in `/project-implementation/implementation-log/` following the format `milestone-[#]-[name].md`. These logs must document:
- What was accomplished
- Implementation details for each component
- Challenges encountered
- Technical debt created
- Next steps for subsequent milestones

Refer to `/project-implementation/implementation-log/README.md` and `/project-implementation/implementation-log/milestone-template.md` for detailed log format requirements.

## Claude Collaboration Guidelines

When working on implementation, Claude should:

1. **Follow the Roadmap**: Adhere strictly to the milestone sequence and specifications defined in the roadmap

2. **Maintain Implementation Quality**:
   - Ensure code and documentation follow established standards
   - Create robust, well-structured solutions
   - Test functionality thoroughly before completion

3. **Document Comprehensively**:
   - Create implementation logs for each milestone
   - Document challenges and technical debt honestly
   - Provide clear next steps for subsequent milestones

4. **Apply Critical Thinking**: Continuously evaluate how each implementation decision aligns with the core philosophy

5. **Ask Clarifying Questions**: Always seek clarification before making significant implementation decisions

6. **Document Understanding in clarity.md**: Capture important insights and decisions in the clarity documentation

7. **Focus on Integration**: Ensure components work together cohesively rather than as isolated elements