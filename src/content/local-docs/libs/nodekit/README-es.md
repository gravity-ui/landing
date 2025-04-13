# NodeKit

NodeKit es un conjunto de herramientas sencillo para sus aplicaciones, scripts y bibliotecas de Node.js. Proporciona funciones para el registro, la telemetría, la configuración y la gestión de errores, para que pueda tener una base familiar en sus diferentes proyectos.

## Cómo empezar

Agregue dependencia a su proyecto:

```bash
npm install --save @gravity-ui/nodekit
```

Y luego importe e inicie NodeKit en su aplicación:

```typescript
import {NodeKit} from '@gravity-ui/nodekit';

const nodeKit = new NodeKit();
nodekit.ctx.log('App is ready');
```

## Documentación

Consulte el `docs/` directorio para obtener documentación adicional:

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md) especifica cómo puedes configurar tanto el propio nodekit como tus aplicaciones basadas en nodekit
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) describe el concepto de contextos, registro y rastreo de NodeKit
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) contiene una descripción de la útil clase de error personalizada que NodeKit proporciona para sus aplicaciones
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) enumera algunas funciones auxiliares adicionales que se incluyen con NodeKit

## Contribuyendo

### Cómo empezar

Obtenga copias del repositorio de NodeKit y de las aplicaciones de ejemplo:

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

Vincula tu nodekit a npm e inicia un compilador:

```bash
cd nodekit && npm link && npm run dev
```

Luego, en otro terminal, ve a los ejemplos, abre el que te interese, vincula tu nodekit allí e inicia la aplicación:

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

En este punto, puede realizar cambios tanto en NodeKit como en la aplicación de demostración y ver los resultados en tiempo real.
