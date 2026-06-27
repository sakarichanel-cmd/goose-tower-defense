# Development Guide

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- Git
- A code editor (VS Code recommended)

### Setup

```bash
# Clone the repository
git clone https://github.com/sakarichanel-cmd/goose-tower-defense.git
cd goose-tower-defense

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
├── src/
│   ├── core/          # Game engine (loop, physics, etc)
│   ├── towers/        # Tower classes and mechanics
│   ├── enemies/       # Enemy AI and spawning
│   ├── ui/            # Interface and controls
│   ├── utils/         # Helper functions
│   ├── maps/          # Level data
│   └── index.js       # Entry point
├── tests/             # Unit and integration tests
├── docs/              # Documentation
├── package.json       # Dependencies
└── webpack.config.js  # Build configuration
```

## Development Workflow

1. **Create a feature branch** from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/feature-name
   ```

2. **Make changes** and test locally:
   ```bash
   npm run dev    # Run dev server
   npm test       # Run tests
   ```

3. **Commit with clear messages**:
   ```bash
   git commit -m "feat: description of changes"
   ```

4. **Push and create a Pull Request**:
   ```bash
   git push origin feature/feature-name
   ```

## Code Style

- Use ES6+ syntax
- Write clear, descriptive variable names
- Add comments for complex logic
- Follow existing patterns in the codebase

## Testing

Write tests for new features:

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch
```

## Git Branches

- **main** - Stable, production-ready code
- **develop** - Integration branch for features
- **feature/*** - Individual feature branches
- **bugfix/*** - Bug fix branches
- **hotfix/*** - Emergency production fixes

## Issues & PRs

- Link commits to issues: `Fix #123`
- Keep PRs focused and reviewable
- Reference any related issues in PR description

## Questions?

Check the [FAQ](./docs/faq.md) or open a [discussion](https://github.com/sakarichanel-cmd/goose-tower-defense/discussions)!