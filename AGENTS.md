# Repository Guidelines

Kindwijs is a Nuxt 2 application delivered via Netlify and GitHub Actions. Follow the guidance below to keep contributions aligned with the existing workflow.

## Project Structure & Module Organization
- `pages/` holds Nuxt route views; each `.vue` file becomes a route.
- `components/` contains shared Vue components used across pages, with assets in `assets/` and static files in `static/`.
- `nuxt.config.js` configures global modules, SEO, and layout metadata.
- Tests live in `test/` with Jest snapshots under `test/__snapshots__/`.
- `dist/` and `.nuxt/` are build artifacts; do not commit changes there.

## Build, Test, and Development Commands
- `yarn dev` starts the local Nuxt server (uses `NODE_OPTIONS=--openssl-legacy-provider` for Node 18 compatibility).
- `yarn build` compiles for production; `yarn start-build` serves the built bundle.
- `yarn generate` creates a static export used by Netlify.
- `yarn lint` (alias `yarn lint:js`) runs ESLint across `.js` and `.vue` files.
- `yarn test` executes the Jest suite and updates coverage in `coverage/`.

## Coding Style & Naming Conventions
EditorConfig and Prettier enforce two-space indentation, LF endings, no trailing semicolons, and single quotes. Favor PascalCase for Vue component files (`components/NavBar.vue`), kebab-case for directory names, and descriptive prop names. Run `yarn lint --fix` before submitting to satisfy the shared ESLint configuration (`@nuxtjs`, `plugin:nuxt/recommended`, `prettier`).

## Testing Guidelines
Use Jest with `@vue/test-utils` for component behavior and snapshot coverage. Place new specs in `test/` using the `ComponentName.spec.js` pattern. Update or regenerate snapshots intentionally and review the diffs. Ensure meaningful assertions for emitted events, props, and rendering branches, and keep coverage reports clean by removing temporary fixtures.

## Commit & Pull Request Guidelines
Existing history favors short, imperative commit messages (e.g., `deps upgrade`, `SEO`). Follow the same style, grouping related changes per commit. For pull requests, include: a concise summary, linked Jira/GitHub issue (if any), screenshots for UI changes, and the results of `yarn lint` and `yarn test`. Avoid merging build artifacts and confirm Netlify deploy previews when relevant.

## Environment & Tooling Notes
Use Yarn (v1) and Node 18 LTS. The provided scripts add the OpenSSL legacy flag; no extra manual configuration is needed. GitHub Actions (`.github/workflows/main.yml`) mirrors this setup, so align local tool versions to prevent CI drift.
