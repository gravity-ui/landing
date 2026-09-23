# ExpressKit

ExpressKit é um wrapper leve para [express.js](https://expressjs.com/) que se integra com [NodeKit](https://github.com/gravity-ui/nodekit) e oferece recursos úteis como logging de requisições, suporte a tracing, controllers e middlewares assíncronos, e descrição detalhada de rotas.

Instalação:

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
    res.send('Hello World!');
  },
});

app.run();
```

## Telemetria própria

Por padrão, a telemetria própria envia a URL original da requisição. Aplicações com strings de consulta grandes ou de alta cardinalidade podem remover parâmetros de consulta antes de enviar estatísticas:

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

## Proteção CSRF

O ExpressKit oferece proteção integrada contra Cross-Site Request Forgery (CSRF) para proteger suas aplicações contra requisições maliciosas de origem cruzada. O middleware CSRF gera e valida automaticamente tokens para requisições HTTP que alteram o estado.

### Configuração Básica

Para habilitar a proteção CSRF, configure a chave secreta em seu arquivo de configuração:

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';

const config: Partial<AppConfig> = {
  // ...
  appCsrfSecret: 'sua-chave-secreta-aqui',
};

export default config;
```

### Opções de Configuração

| Opção              | Tipo                 | Padrão                           | Descrição                                                                                     |
| ------------------ | -------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------- |
| `appCsrfSecret`    | `string \| string[]` | -                                | **Obrigatório.** Chave(s) secreta(s) para geração de token HMAC. Múltiplas chaves permitem rotação. |
| `appCsrfLifetime`  | `number`             | `2592000` (30 dias)              | Tempo de vida do token em segundos. Defina como `0` para expiração infinita.                    |
| `appCsrfHeaderName`| `string`             | `'x-csrf-token'`                 | Nome do cabeçalho HTTP para validação do token.                                                 |
| `appCsrfMethods`   | `string[]`           | `['POST', 'PUT', 'DELETE', 'PATCH']` | Métodos HTTP que exigem validação CSRF.                                                         |

### Uso

Uma vez configurada, a proteção CSRF é aplicada automaticamente a todas as rotas com os métodos HTTP especificados:

```typescript
import {ExpressKit, AuthPolicy} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit({
  config: {
    appCsrfSecret: 'sua-chave-secreta',
    appAuthPolicy: AuthPolicy.required,

    // Certifique-se de que seu middleware define o ID do usuário no originalContext, caso contrário, a geração do token CSRF falhará
    appAuthHandler: seuAuthHandler,
  },
});

const app = new ExpressKit(nodekit, {
  'GET /api/form': (req, res) => {
    // O token está disponível no contexto da requisição
    res.json({csrfToken: req.originalContext.get('csrfToken')});
  },

  'POST /api/submit': (req, res) => {
    // Esta rota valida automaticamente o token CSRF
    res.json({message: 'Formulário enviado com sucesso'});
  },
});
```

### Configuração por Rota

Você pode desabilitar a proteção CSRF para rotas específicas:

```typescript
const app = new ExpressKit(nodekit, {
  'POST /api/webhook': {
    authPolicy: AuthPolicy.required,
    disableCsrf: true, // Desabilita CSRF para esta rota
    handler: (req, res) => {
      res.json({message: 'Webhook processado'});
    },
  },
});
```

## Controle de Cache

Por padrão, o ExpressKit define cabeçalhos `no-cache` em todas as respostas. Você pode controlar esse comportamento globalmente ou por rota.

### Configuração Global

```typescript
const config: Partial<AppConfig> = {
  expressEnableCaching: true, // Permite cache por padrão
};
```

### Configuração por Rota

```typescript
const app = new ExpressKit(nodekit, {
  'GET /api/cached': {
    enableCaching: true, // Permite cache para esta rota
    handler: (req, res) => res.json({data: 'cacheable'}),
  },
  'GET /api/fresh': {
    enableCaching: false, // Força no-cache
    handler: (req, res) => res.json({data: 'always fresh'}),
  },
});
```

O `enableCaching` em nível de rota substitui a configuração global. O estado do cache está disponível em `req.routeInfo.enableCaching`.

## Validação e Serialização de Resposta

- [Validação de Requisição e Serialização de Resposta](https://github.com/gravity-ui/expresskit/blob/main/docs/VALIDATOR.md) - use esquemas Zod para validação automática de requisição e serialização de resposta.