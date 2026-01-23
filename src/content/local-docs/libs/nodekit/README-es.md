# NodeKit

NodeKit es un conjunto de herramientas sencillo para tus aplicaciones, scripts y bibliotecas de Node.js. Proporciona funcionalidades para registro (logging), telemetría, configuración y manejo de errores, para que puedas tener una base familiar en tus diferentes proyectos.

## Primeros pasos

Añade la dependencia a tu proyecto:

```bash
npm install --save @gravity-ui/nodekit
```

Y luego importa e inicializa NodeKit en tu aplicación:

```typescript
import {NodeKit} from '@gravity-ui/nodekit';

const nodeKit = new NodeKit();
nodekit.ctx.log('La aplicación está lista');
```

## Documentación

Consulta el directorio `docs/` para obtener documentación adicional:

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md) especifica cómo puedes configurar tanto NodeKit como tus aplicaciones basadas en NodeKit.
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) describe el concepto de contextos de NodeKit, registro (logging) y trazado (tracing).
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) contiene la descripción de una útil clase de error personalizada que NodeKit proporciona para tus aplicaciones.
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) enumera algunas funciones auxiliares adicionales que se incluyen con NodeKit.

## Contribución

### Primeros pasos

Obtén copias del repositorio de NodeKit y de las aplicaciones de ejemplo:

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

Enlaza tu NodeKit a npm e inicia el compilador:

```bash
cd nodekit && npm link && npm run dev
```

Luego, en otra terminal, ve a los ejemplos, abre el que te interese, enlaza tu NodeKit allí y luego inicia la aplicación:

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

En este punto, puedes realizar cambios tanto en NodeKit como en la aplicación de demostración y ver los resultados en tiempo real.