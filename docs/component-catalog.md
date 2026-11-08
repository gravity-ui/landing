# Component catalog architecture

The landing component catalog is derived from immutable GitHub source trees for the exact Gravity
UI package versions installed in `node_modules`. Package documentation indexes and GitHub default
branches are deliberately not used as catalog inputs.

## Sources of truth

1. `package.json` in each installed npm package provides the resolved version.
2. The matching `v<version>` Git tag provides the immutable repository source tree.
3. A top-level `src/components/<PascalCase>/README.md` declares a landing-compatible component page.
4. Hand-written landing configs override generated entries by route id and add sandboxes, design
   guidance, RTL metadata, or other landing-only behavior.

Nested components, labs, hooks, and legacy lowercase directories require an explicit hand-written
config. Automatic discovery is therefore limited to the same public README convention used by
existing component pages.

## Build flow

`npm run prepare-metadata` performs two steps:

1. It records versions resolved from installed packages in `src/data/packages-versions.json`.
2. It requests each exact GitHub tag tree and generates `src/data/component-catalog.json`.

The generated catalog is ignored by Git. A catalog whose schema, repositories, and exact package
versions still match is reused without network access; dependency updates invalidate it. Generation
uses `GITHUB_TOKEN` or `GH_TOKEN` when available and otherwise uses GitHub's unauthenticated API.

Component pages load localized README content from `raw.githubusercontent.com` at the immutable tag
already recorded in the catalog, falling back to English through the existing server behavior.
Relative component links are rewritten to landing routes, and relative images resolve against the
tagged README directory.

Generation fails without overwriting the previous catalog when GitHub rejects a request, omits a
tree, or returns a truncated recursive tree. This prevents a partial catalog from silently reaching
a build.

## Adding support for another library

Add its package and GitHub repository to `COMPONENT_LIBRARIES` in
`scripts/component-catalog/index.mjs`. The repository must tag releases as `v<package version>` and
keep component documentation at `src/components/<Component>/README.md`.
