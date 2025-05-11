# Version Control Strategy

This document outlines the version control strategy for the Meatware framework, establishing consistent practices for managing changes throughout the development lifecycle.

## Repository Structure

### Branches

- **main**: Primary branch containing stable, production-ready code
- **develop**: Integration branch for ongoing development work
- **feature/[name]**: Feature-specific branches for new development
- **bugfix/[name]**: Branches for bug fixes
- **release/[version]**: Release preparation branches
- **hotfix/[name]**: Urgent fixes for production issues

### Protected Branches

The following branches are protected and require pull request approval before merging:
- main
- develop
- release/*

## Workflow

### Feature Development

1. Create feature branch from develop: `feature/descriptive-name`
2. Implement feature with frequent commits
3. Create pull request to develop branch
4. Code review and approval
5. Merge to develop

### Bugfix Process

1. Create bugfix branch from develop: `bugfix/issue-description`
2. Implement fix with targeted commits
3. Create pull request to develop branch
4. Code review and approval
5. Merge to develop

### Release Process

1. Create release branch from develop: `release/x.y.z`
2. Final testing and documentation updates
3. Version bump and changelog update
4. Create pull request to main
5. Final review and approval
6. Merge to main
7. Tag release with version number
8. Merge back to develop

### Hotfix Process

1. Create hotfix branch from main: `hotfix/critical-issue`
2. Implement minimal fix with focused commits
3. Create pull requests to both main and develop
4. Code review and approval
5. Merge to main
6. Tag with incremental version number
7. Merge to develop

## Commit Standards

### Commit Message Format

Follow the conventional commits specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Formatting changes (whitespace, formatting, missing semi-colons)
- **refactor**: Code changes that neither fix bugs nor add features
- **test**: Adding or correcting tests
- **chore**: Changes to build process or auxiliary tools
- **perf**: Performance improvements

### Examples

```
feat(knowledge): Add API documentation template

Create standardized template for documenting APIs within the knowledge directory.
Includes sections for endpoints, parameters, and response formats.

Closes #123
```

```
fix(context): Resolve file path resolution issue

Paths were being incorrectly normalized, causing cross-references to fail.
```

## Pull Request Process

### PR Template

All pull requests must use the standard PR template which includes:
- Description of changes
- Related issue(s)
- Type of change (bugfix, feature, etc.)
- Checklist of completed items
- Test instructions

### Review Requirements

- At least one approving review required
- All comments must be resolved
- CI checks must pass
- Documentation updated as needed

## Versioning

### Semantic Versioning

Follow [Semantic Versioning 2.0.0](https://semver.org/):

- **MAJOR**: Incompatible API changes
- **MINOR**: Backwards-compatible functionality additions
- **PATCH**: Backwards-compatible bug fixes

### Version Bumping

- Update version in package.json
- Update version in relevant documentation
- Tag commits with version number using format: `v1.2.3`

## Git Hooks

### Pre-commit Hooks

- Lint staged files
- Check formatting
- Run quick tests
- Validate commit message format

### Pre-push Hooks

- Run full test suite
- Check for security vulnerabilities
- Verify documentation is up to date

## Changelog Management

- Maintain CHANGELOG.md in the root directory
- Update for each release
- Group changes by type (Added, Changed, Fixed, Removed)
- Include PR and issue numbers
- Credit contributors

## File History Preservation

- Avoid force-pushing to shared branches
- Use rebase sparingly and only on local/personal branches
- Preserve meaningful commit history when squashing

## Backporting

- Critical fixes should be backported to supported older versions
- Use cherry-picking to apply specific commits
- Create dedicated backport branches: `backport/x.y.z/feature-name`

## Repository Maintenance

### Regular Maintenance

- Prune stale branches quarterly
- Archive completed release branches
- Review and update this strategy as needed

### Release Archiving

- Tag each release with appropriate version
- Create GitHub release entry with release notes
- Archive release artifacts if applicable

## Conflict Resolution

1. Pull latest changes from target branch
2. Resolve conflicts locally with clear understanding of both changes
3. Document significant conflict resolution decisions in commit message
4. Request review for complex conflict resolutions