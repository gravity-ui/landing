# NodeKit

NodeKit is a simple toolkit for your Node.js apps, scripts and libraries. It provides functionality for logging, telemetry, configuration and error handling, so you can have familiar foundation in your different projects.

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

