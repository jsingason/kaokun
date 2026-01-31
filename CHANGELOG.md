# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2025-01-31

### Fixed
- Seeding bug: deterministic output now works correctly when `seed` is provided
- Previously `Math.random()` was used even with seeds, breaking determinism

### Changed
- Migrated from deprecated TSLint to ESLint + @typescript-eslint
- Tests now import from source instead of compiled output

### Added
- Proper ESM module support via `exports` field in package.json
- `types` field pointing to TypeScript declarations
- `sideEffects: false` for better tree-shaking
- Jest coverage configuration and thresholds
- GitHub Actions CI workflow
- Husky + lint-staged for pre-commit hooks
- CONTRIBUTING.md, CODE_OF_CONDUCT.md
- Issue and PR templates

## [1.1.10] - Previous

- Initial tracked version
- Basic kaomoji generation with seeding support
- 11 emotion categories
