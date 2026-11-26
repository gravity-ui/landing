# ExpressKit

ExpressKit es un wrapper ligero para [express.js](https://expressjs.com/) que se integra con [NodeKit](https://github.com/gravity-ui/nodekit) y proporciona algunas características útiles como registro de solicitudes, soporte de tracing, controladores y middleware asíncronos, y descripciones detalladas de las rutas.

## Instalación

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

## Uso

```typescript
import {ExpressKit} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit();

const app = new ExpressKit(nodekit, {
  'GET /': (req, res) => {
    res.send('¡Hola Mundo!');
  },
});

app.run();
```

## Telemetría propia

Por defecto, la telemetría propia envía la URL de la solicitud original. Las aplicaciones con cadenas de consulta grandes o de alta cardinalidad pueden eliminar los parámetros de consulta antes de enviar estadísticas:

```typescript
const config: Partial<AppConfig> = {
  appTelemetryChEnableSelfStats: true,
  appTelemetryChSelfStatsStripQueryParams: true,
};
```

## CSP

`config.ts`

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';
import {csp} from '@gravity-ui/expresskit';

const config: Partial<AppConfig> = {
    expressCspEnable: true,
    expressCspPresets: ({getDefaultPresets}) => {
        return getDefaultPresets({defaultNone: true}).concat([
            csp.inline(),
            {csp.directives.REPORT_TO: 'my-report-group'},
        ]);
    },
    expressCspReportTo: [
        {
            group: 'my-report-group',
            max_age: 30 * 60,
            endpoints: [{ url: 'https://cspreport.com/send'}],
            include_subdomains: true,
        }
    ]
}

export default config;
```

## Protección CSRF

ExpressKit proporciona protección integrada contra falsificación de solicitudes entre sitios (CSRF) para proteger tus aplicaciones contra solicitudes maliciosas de origen cruzado. El middleware CSRF genera y valida automáticamente tokens para solicitudes HTTP que cambian el estado.

### Configuración básica

Para habilitar la protección CSRF, configura la clave secreta en tu configuración:

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';

const config: Partial<AppConfig> = {
  // ...
  appCsrfSecret: 'tu-clave-secreta-aqui',
};

export default config;
```

### Opciones de configuración

| Opción              | Tipo                 | Predeterminado                       | Descripción                                                                                     |
| ------------------- | -------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `appCsrfSecret`     | `string \| string[]` | -                                    | **Requerido.** Clave(s) secreta(s) para la generación de tokens HMAC. Múltiples secretos permiten la rotación de claves. |
| `appCsrfLifetime`   | `number`             | `2592000` (30 días)                  | Duración del token en segundos. Establecer en `0` para que no expire.                                        |
| `appCsrfHeaderName` | `string`             | `'x-csrf-token'`                     | Nombre de la cabecera HTTP para la validación del token.                                                          |
| `appCsrfMethods`    | `string[]`           | `['POST', 'PUT', 'DELETE', 'PATCH']` | Métodos HTTP que requieren validación CSRF.                                                      |

### Uso

Una vez configurada, la protección CSRF se aplica automáticamente a todas las rutas con los métodos HTTP especificados:

```typescript
import {ExpressKit, AuthPolicy} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit({
  config: {
    appCsrfSecret: 'tu-clave-secreta',
    appAuthPolicy: AuthPolicy.required,

    // Asegúrate de que tu middleware establezca el ID de usuario en originalContext, de lo contrario, la generación del token CSRF fallará
    appAuthHandler: tuManejadorDeAutenticacion,
  },
});

const app = new ExpressKit(nodekit, {
  'GET /api/form': (req, res) => {
    // El token está disponible en el contexto de la solicitud
    res.json({csrfToken: req.originalContext.get('csrfToken')});
  },

  'POST /api/submit': (req, res) => {
    // Esta ruta valida automáticamente el token CSRF
    res.json({message: 'Formulario enviado con éxito'});
  },
});
```

### Configuración por ruta

Puedes deshabilitar la protección CSRF para rutas específicas:

```typescript
const app = new ExpressKit(nodekit, {
  'POST /api/webhook': {
    authPolicy: AuthPolicy.required,
    disableCsrf: true, // Deshabilita CSRF para esta ruta
    handler: (req, res) => {
      res.json({message: 'Webhook procesado'});
    },
  },
});
```

## Control de caché

Por defecto, ExpressKit establece cabeceras `no-cache` en todas las respuestas. Puedes controlar este comportamiento globalmente o por ruta.

### Configuración global

```typescript
const config: Partial<AppConfig> = {
  expressEnableCaching: true, // Permite la caché por defecto
};
```

### Configuración por ruta

```typescript
const app = new ExpressKit(nodekit, {
  'GET /api/cached': {
    enableCaching: true, // Permite la caché para esta ruta
    handler: (req, res) => res.json({data: 'cacheable'}),
  },
  'GET /api/fresh': {
    enableCaching: false, // Fuerza no-cache
    handler: (req, res) => res.json({data: 'siempre fresco'}),
  },
});
```

El `enableCaching` a nivel de ruta anula la configuración global. El estado de la caché está disponible en `req.routeInfo.enableCaching`.

## Validación y serialización de respuestas

- [Validación de solicitudes y serialización de respuestas](https://github.com/gravity-ui/expresskit/blob/main/docs/VALIDATOR.md) - utiliza esquemas Zod para la validación automática de solicitudes y la serialización de respuestas.

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE) para más detalles.

## Para agentes de IA

Una capa ligera de Express.js sobre NodeKit que añade registro de solicitudes, rastreo, controladores/middleware asíncronos y un mapa de rutas declarativo. Utilízalo cuando necesites un servidor HTTP con la columna vertebral de registro/telemetría de NodeKit, en lugar de conectar Express y NodeKit manualmente.

### Cuándo usarlo

- Al construir un servicio HTTP de Express que deba compartir el registro, el rastreo y la configuración de NodeKit.
- Rutas declarativas (`{'GET /ruta': manejador}`) con políticas de autenticación, CSRF y caché por ruta.
- Preocupaciones de seguridad integradas (tokens CSRF, encabezados CSP) integradas con el contexto de la solicitud.

### Cuándo no usarlo

- Para el registro/telemetría/configuración fundamental sin una capa HTTP, utiliza [`@gravity-ui/nodekit`](https://github.com/gravity-ui/nodekit) directamente. ExpressKit depende de él, pero es posible que no necesites las partes HTTP.
- Para un framework que no sea Express (Fastify, Koa, NestJS), ExpressKit es específico de Express; utiliza las herramientas propias de ese framework.

### Errores comunes

- **Construir `ExpressKit` sin una instancia de `NodeKit`**: el constructor requiere una instancia de NodeKit como primer argumento; crea `new NodeKit()` primero.
- **Inventar `app.get`/`app.post`**: las rutas se declaran como un mapa de `'MÉTODO /ruta': manejador` pasado a `new ExpressKit(nodekit, routes)`, no a través de encadenamiento de métodos al estilo de Express.
- **Olvidar llamar a `app.run()`**: las rutas se registran en la construcción, pero el servidor solo se inicia cuando llamas a `app.run()`.
- **CSRF esperando un contexto de autenticación**: la generación de tokens CSRF requiere que `appAuthHandler` establezca el ID de usuario en el contexto original; sin él, la generación de tokens falla.
- **Usar middleware al estilo de Express que omite el contexto**: los controladores/middleware asíncronos deben usar el contexto de ExpressKit para preservar el rastreo; los manejadores de Express puros lo pierden.

## Documentación para agentes de IA

La documentación legible por agentes para la versión instalada se encuentra en `node_modules/@gravity-ui/expresskit/dist/docs/INDEX.md`.