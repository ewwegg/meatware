---
title: "Command Template Title"
category: "command"
command_type: "query|generation|validation"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
version: "0.1.0"
status: "draft"
context_required: ["knowledge", "specification"]
compatibility: ["Claude", "GPT-4", "Bard"]
tags: ["tag1", "tag2"]
related_files: ["/path/to/related.md"]
---

# Command Name

## Purpose

Clear explanation of what this command accomplishes and when it should be used.

## Required Context

Description of the context needed to execute this command effectively.

| Context Type | Description | Required/Optional |
|--------------|-------------|-------------------|
| Context 1 | What this context provides | Required |
| Context 2 | What this context provides | Optional |

## Prompt Template

```
[The actual command template with {{variable}} placeholders]

Instructions for the AI on how to complete this command.

Parameters:
- {{variable1}}: Description of this parameter
- {{variable2}}: Description of this parameter
```

## Expected Response Format

Description of the format the response should follow.

```
[Example of the expected response format]
```

## Example Usage

### Example 1

**Inputs**:
- variable1: value1
- variable2: value2

**Command**:
```
[Example of the command with values filled in]
```

**Expected Output**:
```
[Example of the expected output]
```

## Error Handling

Guidance on how to handle common errors or edge cases when using this command.

## Notes

Any additional information, caveats, or special considerations for this command.