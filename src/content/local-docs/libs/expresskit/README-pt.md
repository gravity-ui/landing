# ExpressKit

ExpressKit é um wrapper leve para [express.js](https://expressjs.com/) que se integra com [NodeKit](https://github.com/gravity-ui/nodekit) e oferece recursos úteis como logging de requisições, suporte a tracing, controllers e middlewares assíncronos, e descrição detalhada de rotas.

## Instalar

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
    res.send('Olá Mundo!');
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

| Opção              | Tipo                 | Padrão                           | Descrição                                                                                             |
| ------------------ | -------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `appCsrfSecret`    | `string \| string[]` | -                                | **Obrigatório.** Chave(s) secreta(s) para geração de token HMAC. Múltiplos segredos permitem rotação de chave. |
| `appCsrfLifetime`  | `number`             | `2592000` (30 dias)              | Tempo de vida do token em segundos. Defina como `0` para expiração inexistente.                       |
| `appCsrfHeaderName`| `string`             | `'x-csrf-token'`                 | Nome do cabeçalho HTTP para validação do token.                                                       |
| `appCsrfMethods`   | `string[]`           | `['POST', 'PUT', 'DELETE', 'PATCH']` | Métodos HTTP que exigem validação CSRF.                                                               |

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
    handler: (req, res) => res.json({data: 'sempre fresco'}),
  },
});
```

O `enableCaching` em nível de rota substitui a configuração global. O estado do cache está disponível em `req.routeInfo.enableCaching`.

## Validação e Serialização de Resposta

- [Validação de Requisição e Serialização de Resposta](https://github.com/gravity-ui/expresskit/blob/main/docs/VALIDATOR.md) - use esquemas Zod para validação automática de requisição e serialização de resposta.

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

Um wrapper leve para Express.js sobre o NodeKit que adiciona logging de requisição, tracing, controllers/middleware assíncronos e um mapa declarativo de rotas — utilize-o quando precisar de um servidor HTTP com a espinha dorsal de logging/telemetria do NodeKit, em vez de conectar middleware Express e NodeKit manualmente.

### Quando usar

- Construindo um serviço HTTP Express que deve compartilhar o logging, tracing e configuração do NodeKit.
- Rotas declarativas (`{'GET /path': handler}`) com políticas de autenticação, CSRF e cache por rota.
- Preocupações de segurança integradas (tokens CSRF, cabeçalhos CSP) integradas ao contexto da requisição.

### Quando não usar

- Para o logging/telemetria/configuração fundamental sem uma camada HTTP, use [`@gravity-ui/nodekit`](https://github.com/gravity-ui/nodekit) diretamente — o ExpressKit depende dele, mas você pode não precisar das partes HTTP.
- Para um framework não-Express (Fastify, Koa, NestJS), o ExpressKit é específico para Express; use as ferramentas próprias desse framework.

### Armadilhas comuns

- **Construir `ExpressKit` sem uma instância `NodeKit`** — o construtor requer uma instância NodeKit como primeiro argumento; crie `new NodeKit()` primeiro.
- **Alucinar `app.get`/`app.post`** — as rotas são declaradas como um mapa de `'METHOD /path': handler` passado para `new ExpressKit(nodekit, routes)`, não através de encadeamento de métodos no estilo Express.
- **Esquecer de chamar `app.run()`** — as rotas são registradas na construção, mas o servidor só inicia quando você chama `app.run()`.
- **CSRF esperando um contexto de autenticação** — a geração de token CSRF requer que `appAuthHandler` defina o ID do usuário no contexto original; sem ele, a geração de token falha.
- **Usar middleware no estilo Express que ignora o contexto** — controllers/middleware assíncronos devem usar o contexto do ExpressKit para preservar o tracing; handlers Express brutos o perdem.

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/expresskit/dist/docs/INDEX.md`.