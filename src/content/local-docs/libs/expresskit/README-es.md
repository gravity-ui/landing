# ExpressKit

ExpressKit es un wrapper ligero para [express.js](https://expressjs.com/) que se integra con [NodeKit](https://github.com/gravity-ui/nodekit) y proporciona algunas características útiles como registro de solicitudes, soporte de tracing, controladores y middleware asíncronos, y descripciones detalladas de las rutas.

Instalación:

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

Uso básico:

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

ExpressKit proporciona protección integrada contra Cross-Site Request Forgery (CSRF) para asegurar tus aplicaciones contra solicitudes maliciosas de origen cruzado. El middleware CSRF genera y valida automáticamente tokens para solicitudes HTTP que cambian el estado.

### Configuración Básica

Para habilitar la protección CSRF, configura la clave secreta en tu configuración:

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';

const config: Partial<AppConfig> = {
  // ...
  appCsrfSecret: 'tu-clave-secreta-aqui',
};

export default config;
```

### Opciones de Configuración

| Opción              | Tipo                 | Predeterminado                       | Descripción                                                                                     |
| ------------------- | -------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `appCsrfSecret`     | `string \| string[]` | -                                    | **Requerido.** Clave(s) secreta(s) para la generación de tokens HMAC. Múltiples secretos permiten la rotación de claves. |
| `appCsrfLifetime`   | `number`             | `2592000` (30 días)                  | Vida útil del token en segundos. Establecer a `0` para que no expire.                                        |
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

    // Asegúrate de que tu middleware establezca el ID de usuario en el originalContext, de lo contrario, la generación del token CSRF fallará
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

### Configuración por Ruta

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