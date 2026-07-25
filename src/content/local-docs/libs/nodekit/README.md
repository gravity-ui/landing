# NodeKit

NodeKit is a simple toolkit for your Node.js apps, scripts and libraries. It provides functionality for logging, telemetry, configuration and error handling, so you can have familiar foundation in your different projects.

## Install

```bash
npm install --save @gravity-ui/nodekit
```

## Getting started

Add dependency to your project:

```bash
npm install --save @gravity-ui/nodekit
```

And then import and init NodeKit in your application:

```typescript
import {NodeKit} from '@gravity-ui/nodekit';

const nodeKit = new NodeKit();
nodekit.ctx.log('App is ready');
```

## Documentation

See `docs/` directory for additional documentation:

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md) specifies how you can configure both nodekit itself and your nodekit-based applications
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) describes concept of NodeKit contexts, logging and tracing
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) contains description of useful custom error class they NodeKit provides for your applications
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) lists some additional helper functions that are bundled with NodeKit

## Contributing

### Getting started

Grab a copies of NodeKit repository and example applications:

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

Link your nodekit to npm and start a compiler:

```bash
cd nodekit && npm link && npm run dev
```

Then, in another terminal, go to examples, open the one that you're interested in, link your nodekit there, then start the app:

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

At this point you can make changes both to NodeKit and demo app, and see results in real time.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## For AI agents

A foundational Node.js toolkit (logging, telemetry, typed errors, config, request contexts) shared across Gravity UI backends — reach for it to get a consistent app spine before adding any HTTP layer, instead of assembling logging/error/config plumbing yourself.

### When to use

- Any Node.js service/script that wants shared logging, telemetry (tracing), and a typed `AppError`.
- Providing request-scoped context (logs/traces) across async boundaries.
- Centralizing configuration so multiple services in the same ecosystem behave consistently.

### When not to use

- To expose HTTP routes, middleware, or a server, use [`@gravity-ui/expresskit`](https://github.com/gravity-ui/expresskit) — it builds on top of NodeKit and adds the Express/HTTP layer.
- For a standalone, single-file script with no logging/telemetry needs, plain Node APIs are lighter than the full NodeKit context system.

### Common pitfalls

- **Hallucinating `import {Logger}` / `logger`** — logging is reached through the NodeKit context: `new NodeKit()` then `nodekit.ctx.log(...)`, not a standalone logger export.
- **Instantiating NodeKit repeatedly** — create one `NodeKit` instance per app and share its `ctx`; creating many instances fragments logging/telemetry config.
- **Throwing plain `Error`** — use the bundled `AppError` (see `docs/app-error.md`) so error codes and telemetry are captured consistently.
- **Skipping config initialization** — NodeKit reads configuration on construction; review `docs/configuration.md` before assuming defaults.

## Documentation for AI agents

Agent-readable documentation for the installed version is located in `node_modules/@gravity-ui/nodekit/dist/docs/INDEX.md`.
