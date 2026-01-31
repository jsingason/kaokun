# Contributing to Kaokun

Thanks for your interest in contributing!

## Development Setup

```bash
git clone https://github.com/jsingason/kaokun.git
cd kaokun
npm install
```

## Scripts

- `npm test` - Run tests
- `npm run test:coverage` - Run tests with coverage
- `npm run build` - Build CJS and ESM outputs
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix lint issues
- `npm run format` - Format with Prettier
- `npm run typecheck` - Type check without emitting

## Pull Request Process

1. Fork the repo and create your branch from `main`
2. Make your changes
3. Add tests if applicable
4. Ensure `npm run lint` and `npm test` pass
5. Submit a PR with a clear description

## Code Style

- Prettier handles formatting (runs on pre-commit)
- ESLint handles linting
- TypeScript strict mode is enabled

## Adding Kaomoji

To add new kaomoji, edit `src/libs/kao.ts`:
- Add eyes to `kaoParts.eyes`
- Add mouths to `kaoParts.mouth`
- Add emotion faces to `kaoEmotions.<emotion>`

## Questions?

Open an issue for discussion.
