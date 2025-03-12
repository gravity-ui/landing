# NodeKit

NodeKit es un conjunto de herramientas simple para tus aplicaciones, scripts y bibliotecas de Node.js. Proporciona funcionalidad para registro, telemetría, configuración y manejo de errores, para que puedas tener una base familiar en tus diferentes proyectos.

## Primeros pasos

Añade la dependencia a tu proyecto:

```bash
npm install --save @gravity-ui/nodekit
```

Y luego importa e inicializa NodeKit en tu aplicación:

```typescript
import {NodeKit} from '@gravity-ui/nodekit';

const nodeKit = new NodeKit();
nodekit.ctx.log('App is ready');
```

## Documentación

Consulta el directorio `docs/` para documentación adicional:

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md) especifica cómo puedes configurar tanto nodekit como tus aplicaciones basadas en nodekit
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) describe el concepto de contextos de NodeKit, registro y trazado
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) contiene la descripción de una clase de error personalizada útil que NodeKit proporciona para tus aplicaciones
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) enumera algunas funciones auxiliares adicionales que vienen incluidas con NodeKit

## Contribuir

### Primeros pasos

Obtén copias del repositorio de NodeKit y aplicaciones de ejemplo:

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

Enlaza tu nodekit a npm e inicia un compilador:

```bash
cd nodekit && npm link && npm run dev
```

Luego, en otra terminal, ve a los ejemplos, abre el que te interese, enlaza tu nodekit allí, luego inicia la aplicación:

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

En este punto puedes hacer cambios tanto en NodeKit como en la aplicación de demostración, y ver los resultados en tiempo real.
