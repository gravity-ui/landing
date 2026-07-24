# NodeKit

NodeKit es un kit de herramientas sencillo para tus aplicaciones, scripts y bibliotecas de Node.js. Proporciona funcionalidades para registro (logging), telemetría, configuración y manejo de errores, para que puedas tener una base familiar en tus diferentes proyectos.

## Instalación

```bash
npm install --save @gravity-ui/nodekit
```

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
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) describe el concepto de contextos de NodeKit, registro (logging) y rastreo (tracing).
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) contiene la descripción de una útil clase de error personalizada que NodeKit proporciona para tus aplicaciones.
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) lista algunas funciones auxiliares adicionales que se incluyen con NodeKit.

## Contribución

### Primeros pasos

Obtén copias del repositorio de NodeKit y de las aplicaciones de ejemplo:

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

Vincula tu NodeKit a npm e inicia el compilador:

```bash
cd nodekit && npm link && npm run dev
```

Luego, en otra terminal, ve a los ejemplos, abre el que te interese, vincula tu NodeKit allí y luego inicia la aplicación:

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

En este punto, puedes realizar cambios tanto en NodeKit como en la aplicación de demostración, y ver los resultados en tiempo real.

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE) para más detalles.

## Para agentes de IA

Un kit de herramientas fundamental para Node.js (registro, telemetría, errores tipados, configuración, contextos de solicitud) compartido entre los backends de Gravity UI: úsalo para obtener una columna vertebral de aplicación consistente antes de añadir cualquier capa HTTP, en lugar de ensamblar tú mismo la canalización de registro/errores/configuración.

### Cuándo usarlo

- Cualquier servicio/script de Node.js que desee registro compartido, telemetría (rastreo) y un `AppError` tipado.
- Proporcionar contexto a nivel de solicitud (registros/rastreos) a través de límites asíncronos.
- Centralizar la configuración para que múltiples servicios en el mismo ecosistema se comporten de manera consistente.

### Cuándo no usarlo

- Para exponer rutas HTTP, middleware o un servidor, utiliza [`@gravity-ui/expresskit`](https://github.com/gravity-ui/expresskit) — se basa en NodeKit y añade la capa Express/HTTP.
- Para un script independiente de un solo archivo sin necesidades de registro/telemetría, las API nativas de Node son más ligeras que el sistema completo de contexto de NodeKit.

### Errores comunes

- **"Alucinaciones" de `import {Logger}` / `logger`** — el registro se accede a través del contexto de NodeKit: `new NodeKit()` y luego `nodekit.ctx.log(...)`, no a través de una exportación de registrador independiente.
- **Instanciar NodeKit repetidamente** — crea una instancia de `NodeKit` por aplicación y comparte su `ctx`; crear muchas instancias fragmenta la configuración de registro/telemetría.
- **Lanzar `Error` simple** — utiliza el `AppError` incluido (ver `docs/app-error.md`) para que los códigos de error y la telemetría se capturen de manera consistente.
- **Omitir la inicialización de la configuración** — NodeKit lee la configuración al construirse; revisa `docs/configuration.md` antes de asumir los valores predeterminados.

## Documentación para agentes de IA

La documentación legible por agentes para la versión instalada se encuentra en `node_modules/@gravity-ui/nodekit/dist/docs/INDEX.md`.