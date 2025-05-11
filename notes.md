We need to make revisions to project-specs.md. There's a lot of duplicated information that will lead to inconsistencies over time. Make the document more concise, by combining similar topics, without losing any of the psecific information. You can restructure the headings to allow for a more logical layout if you need.

In addition to that, make these revisions:

1. "Question templates in `/knowledge/questions/[topic].md`" - this should be called clarity and it's where it put the questions and it's understanding of the answer `/knowledge/clarity/[topic].md`

2. "Implementation plans organized by feature: `/feature/[feature-name]/`" - implementation plans should be organised from a roadmap that's created.

3. "User-focused documentation in `/user/`" - refer to "user" as "human" in all documentation.

4. there needs to be a system for changelogs and other decision logging mechanisms, so that the ai agent continuosly documents what they've done. THis should use a template, and each entry should be it's own file using a format like [timestamp]-[3 word ummary of task].

5. These concepts are too complicated and should be replaced by prompting the ai agent to do something similar:

- "Automatic context collection via simple shell scripts or Node.js utilities"
- "Simple regex-based relevance detection for files"
