# Meatware: Detailed Project Specifications

## Table of Contents
1. [Framework Architecture](#framework-architecture)
2. [Directory Structure and Content](#directory-structure-and-content)
3. [Core Mechanisms](#core-mechanisms)
4. [Documentation and Knowledge Management](#documentation-and-knowledge-management)
5. [Workflow and Interaction](#workflow-and-interaction)
6. [Installation and Configuration](#installation-and-configuration)
7. [Success Criteria and Validation](#success-criteria-and-validation)
8. [Out of Scope Boundaries](#out-of-scope-boundaries)

## Framework Architecture

### Installation and Structure
- Install via npm with `npm install meatware` command
- Creates a `meatware/` directory at the root of the target project
- All files contained within a single folder structure - no external dependencies
- No configuration required in other project files

### Dual Entry Points
- `campaign.md` at root serves as documentation/preparation entry:
  - Structured as a guided interview process
  - Progressive sections that build on each other
  - Checklist format to track completion
  - Direct links to all template files needed
- `conquer.md` at root serves as execution entry:
  - Task prioritization framework
  - Links to all specifications and implementation plans
  - Implementation status tracking
  - Decision log for tracking execution choices

### Self-Navigation System
- Navigation metadata in file headers using YAML frontmatter:
  ```
  ---
  category: specification
  prerequisite_files: ["/knowledge/architecture/overview.md"]
  next_steps: ["/implementation/roadmap/milestone1/feature.md"]
  related_files: ["/specification/related-feature.md"]
  ---
  ```
- Each file includes standard sections:
  - "Related Files" listing directly connected documents
  - "Prerequisites" listing files that should be read before this one
  - "Next Steps" suggesting logical progression paths
- Index files in each directory list all contained files with summaries
- Navigation cues embedded in file headers and footers
- Root directory contains master linking document (`index.md`) pointing to all main sections

### Interlinking Mechanism
- Consistent link syntax: `[[path/to/file.md]]` or markdown link syntax `[Link Text](path/to/file.md)`
- Cross-directory dependencies explicitly tracked in `/context/dependencies.json`
- Reference indexes in `/context/references/` track all cross-references
- File relationship visualization in `/docs/maps/relationships.md`
- Each file includes explicit references to related files

### Challenges
- Ensuring linking syntax works across different AI systems
- Creating a navigation system that is intuitive for both AI and humans
- Balancing comprehensiveness with simplicity
- Maintaining the self-contained architecture across different project types

## Directory Structure and Content

### `/knowledge` Directory
- **Organization**: 
  - Subdirectories by knowledge type: `/api`, `/architecture`, `/integrations`, `/conventions`
  - `/clarity` subdirectory for questions and understanding by topic
  - `/changelog` subdirectory for decision logs and changes
  - Template file `_template.md` in each subdirectory
  - Index file in each subdirectory listing contents
  
- **Content Structure**: Files follow standardized format:
  ```
  # [Knowledge Item Name]
  
  ## Purpose
  [Clear explanation of what this knowledge represents]
  
  ## Details
  [Comprehensive information about the item]
  
  ## Usage Examples
  [Examples of how this knowledge is applied]
  
  ## Related Components
  [Links to related knowledge items]
  ```

- **Changelog System**:
  - Each entry stored as individual file using format: `YYYY-MM-DD-[3-word-summary].md`
  - Template-based structure for consistent documentation
  - Automatic prompting for changelog entries after significant milestones
  - Entries link to affected files and contain rationales for decisions

### `/specification` Directory
- **Organization**:
  - Specifications organized by feature area: `/feature-area/[feature].md`
  - Index file listing all specifications with status
  - Relationship mapping between specifications
  - Priority indicators for implementation ordering
  
- **Content Structure**: Each specification includes:
  - Problem Statement
  - Requirements (using standardized must/should/may language)
  - Constraints
  - Acceptance Criteria (in testable format)
  - Design Decisions (including alternatives considered)
  - Related Specifications (links)

### `/implementation` Directory
- **Organization**:
  - Roadmap-based structure: `/roadmap/[milestone]/[feature].md`
  - Each feature directory contains:
    - `plan.md` - overall implementation approach
    - `tasks/` - directory of individual task files
    - `validation.md` - validation approach
    - `status.md` - current implementation status
  
- **Content Structure**: Implementation plans include:
  - Approach overview
  - Task breakdown with dependencies
  - Validation strategy tied to specification criteria
  - Developer checkpoints clearly marked
  - Links to corresponding specifications

### `/command` Directory
- **Organization**:
  - Commands organized by purpose: `/query`, `/generation`, `/validation`
  - Each directory contains command templates
  - Index file in each directory listing available commands
  - Standard naming convention: `[action]-[subject].md`
  
- **Content Structure**: Command template format:
  ```
  # [Command Name]
  
  ## Purpose
  [What this command accomplishes]
  
  ## Required Context
  [Context needed to execute this command]
  
  ## Prompt Template
  [The actual command template]
  
  ## Expected Response Format
  [Format of the expected response]
  
  ## Example Usage
  [Example of using this command]
  ```
  - Prompt templates use consistent variable syntax: `{{variable_name}}`

### `/context` Directory
- **Organization**:
  - `/maps/` - project structure maps
  - `/state/` - current project state
  - `/history/` - session history
  - `/cached/` - temporary context storage
  
- **Content Structure**:
  - Project maps in machine-readable JSON with human-readable documentation
  - State tracking for active tasks, documentation status, and implementation progress
  - Context usage tracking for transparency
  - Clear documentation of context selection rules

### `/docs` Directory
- **Organization**:
  - Human-focused documentation in `/human/`
  - System documentation in `/system/`
  - Quick-start guides in `/quickstart/`
  - Best practices in `/best-practices/`
  
- **Content Structure**:
  - Clear, concise documentation focused on practical usage
  - Step-by-step guides with examples
  - Troubleshooting sections for common issues
  - FAQs based on anticipated questions

### `/config` Directory
- **Organization**:
  - Main configuration in `config.json`
  - Environment-specific configurations in `/environments/`
  - Default settings in `defaults.json`
  - Configuration documentation in `options.md`
  
- **Content Structure**:
  - Well-commented configuration files
  - Clear documentation of all options
  - Default values with explanations
  - Validation rules for configuration values

### Challenges
- Maintaining consistency across different file types
- Balancing structure with flexibility
- Creating appropriate granularity for knowledge items
- Developing effective indexing for knowledge retrieval

## Core Mechanisms

### Cross-Referencing System
- Files explicitly link to related documents using consistent syntax
- Each knowledge file links to related specifications
- Specifications link to implementation plans
- Implementation tasks link to validation criteria
- Command templates reference the knowledge they require
- All cross-references are bidirectional where possible

### Context Management
- Context selection guided by templates that prompt AI to:
  - Identify the current task or question
  - Determine relevant knowledge areas
  - Gather appropriate context files
  - Consider recency and specificity of information
  - Document which context was used and why
- Context workflow embedded in templates, guiding the AI through context selection
- Context tracking in `/context/state.json` to preserve session awareness
- Explicit documentation of context used for decisions

### Universal Primer
- Implementation through dedicated document that AI agents can reference to:
  - Understand the overall structure of the meatware framework
  - Identify key entry points and navigation paths
  - Locate critical knowledge and documentation
  - Use consistent commands and interactions
- Primer updated at key milestones in the project lifecycle

### AI-Agnostic Approach
- Avoid references to specific AI tools or models in all documentation
- Use generic terms: "AI assistant" instead of specific product names
- Formatting guidelines use markdown as the lowest common denominator
- Command prompts structured to work with any LLM conversation pattern

### Transparency
- All context files stored in markdown
- Configuration stored in JSON
- No hidden state or opaque mechanisms
- Documentation includes explanation of all components
- Explicit indication of what context is being used for AI decisions

### Workflow Separation
- Clear handoff point between preparation (campaign) and execution (conquer)
- Validation checklist in `/docs/transition-checklist.md`
- Developer approval request template in `/docs/approval-request.md`
- Version tracking for documentation to execution transition

### Challenges
- Creating self-navigation that doesn't sacrifice human readability
- Developing intuitive paths through complex documentation
- Balancing automation with human oversight
- Maintaining simplicity while implementing all required mechanisms

## Documentation and Knowledge Management

### Clarity Documentation
- Clarity documentation in `/knowledge/clarity/[topic].md`
- Each file captures questions and their answers about specific topics
- Structured format with clear headers and organized points
- Questions explicitly linked to resulting decisions
- AI agent prompted to update clarity files after gaining new insights

### Comprehensive Documentation Builder
- Staged question templates in various files guiding documentation:
  - Initial project context questions
  - Architecture and design questions
  - Implementation details questions
  - Edge case and constraint questions
- Documentation completion tracking in `/context/documentation-status.md`
- Gap analysis to identify missing information
- Prompts for expanding incomplete documentation areas

### Templates and Examples
- Every directory includes an `_template.md` file
- `/examples/[category]/` directories with sample files
- Implementation showcase in `/examples/showcase/`
- Quick-start templates in `/examples/quickstart/`

### Knowledge Evolution
- Documentation status tracking
- Gap identification mechanisms
- Periodic review prompts built into the framework
- Change tracking through changelog system

### Challenges
- Creating documentation that serves both novice and experienced users
- Balancing comprehensiveness with clarity
- Keeping documentation aligned with system changes
- Avoiding documentation that feels like marketing

## Workflow and Interaction

### Documentation Process
- Step-by-step workflow in `campaign.md`
- Progressive templates that build on each other
- Question prompts embedded in templates
- Documentation completion tracking
- Templates guide AI assistants in asking necessary questions

### Implementation Planning
- Roadmap-based organization with clear milestones
- Granular task breakdown templates
- Developer checkpoint system with clear criteria
- Status tracking mechanism
- Consistent format for technical solutions and validation methods

### Command Registry
- Central registry in `/command/registry.md` listing all commands
- Categorization system by command purpose
- Standard format for command documentation
- Import/export mechanism for using commands in AI conversations

### Context Collection Workflow
- AI prompted at specific points to:
  - Review the current task or query
  - Identify relevant files based on content and metadata
  - Summarize the selected context for transparency
  - Document the selection process for later review
- Milestone-based triggers for context gathering built into templates
- Clear documentation of what information was used and why

### Challenges
- Creating a process that's comprehensive but not overwhelming
- Balancing structure with flexibility
- Developing effective question prompts
- Managing documentation evolution over time

## Installation and Configuration

### Package Structure
- Standard npm package with `package.json`
- Installation script that creates directory structure
- Template copying mechanism
- Minimal dependencies (ideally none beyond Node.js itself)

### Standardized Formats
- Consistent format for each file type
- Standard YAML frontmatter for metadata
- Common linking syntax across all files
- Validation mechanism for format compliance

### Quick-Win Implementation
- Fast installation via simple npm command
- Minimal configuration requirements
- Pre-populated templates that provide immediate value
- Quick-start guide that shows immediate benefits

### Mental Load Reduction
- Template-based documentation that prompts for specific information
- AI guidance built into template files with clear instructions
- Structured approach that doesn't require remembering details
- AI-navigable structure that minimizes human direction

### Challenges
- Creating a package that works across different project types
- Balancing included templates with size concerns
- Handling installation edge cases
- Versioning strategy for updates

## Success Criteria and Validation

### Installation Success
- **Validation**: Test on different project types, verify components, check for conflicts
- **Measurement**: Success rate across projects, installation time, post-install steps needed

### AI Navigation Effectiveness
- **Validation**: Test with different AI assistants, check for navigation dead-ends
- **Measurement**: Success finding information, human interventions needed, navigation time

### Documentation Quality
- **Validation**: Assess completeness, consistency, usefulness for different users
- **Measurement**: Coverage percentage, consistency score, user satisfaction, learning time

### Framework Lightweightness
- **Validation**: Measure resource usage, complexity, footprint, performance impact
- **Measurement**: Directory size, file count, complexity score, installation resources

### Information Transparency
- **Validation**: Test developer visibility into AI decisions, clarity of mechanisms
- **Measurement**: Understanding of operations, ability to predict AI behavior

### Human Experience
- **Validation**: Test mental load reduction, ease of adoption, productivity impact
- **Measurement**: Time savings, satisfaction scores, error reduction

### Phase Separation Clarity
- **Validation**: Test transition between documentation and execution phases
- **Measurement**: Developer understanding, completeness at transition, smoothness

### New Developer Onboarding
- **Validation**: Test with developers new to the project
- **Measurement**: Time to productivity, knowledge retention, confidence ratings

## Out of Scope Boundaries

### Technical Boundaries
- **AI-Specific Optimizations**: Focus on common capabilities, avoid tool-specific features
- **Legacy Interaction Patterns**: Support only structured, navigable documentation approaches
- **Automatic Knowledge Population**: Require manual knowledge input, provide templates only
- **IDE Integrations**: Limit to CLI and file system, avoid IDE-specific features
- **CI/CD Pipeline Integrations**: Focus on local development workflow only
- **Large Codebase Optimizations**: Target moderately sized projects, use simple mechanisms

### Scope Boundaries
- **Documentation System Replacement**: Complement rather than replace existing documentation
- **Team Collaboration Features**: Focus on single-developer workflow, manual collaboration
- **Complex Extensibility Frameworks**: Maintain simple file-based structure, avoid plugins
- **Commercial Services**: Prioritize open source and local functionality

### Enforcement Approach
- Clear documentation of intentional limitations
- Architecture that doesn't require out-of-scope components
- Focus on core use cases in all templates and examples
- Regular review to prevent scope creep