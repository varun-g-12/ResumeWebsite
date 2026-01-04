# Git Commit Message Best Practices

## Structure
```
<type>: <short summary> (50 chars max)

<optional detailed explanation>
```

## Key Rules
- Use imperative mood ("Add" not "Added")
- Capitalize first letter
- No period at end of subject
- Keep subject under 50 characters
- Explain **what** and **why**, not how
- Do not include "Generated with Claude Code" or similar attribution

## Common Types
- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code restructuring
- `docs:` - Documentation
- `test:` - Tests
- `chore:` - Maintenance

## Examples

**Good:**
```
feat: Add user login with JWT

Implement authentication endpoints and middleware
for secure user sessions
```

**Bad:**
```
fixed stuff
```

## Tips
- One logical change per commit
- Write for your future self
- Be specific and clear
