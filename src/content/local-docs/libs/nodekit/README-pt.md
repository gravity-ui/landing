# NodeKit

NodeKit é um kit de ferramentas simples para seus aplicativos, scripts e bibliotecas Node.js. Ele fornece funcionalidades para logging, telemetria, configuração e tratamento de erros, para que você possa ter uma base familiar em seus diferentes projetos.

## Instalar

```bash
npm install --save @gravity-ui/nodekit
```

## Primeiros passos

Adicione a dependência ao seu projeto:

```bash
npm install --save @gravity-ui/nodekit
```

E então importe e inicialize o NodeKit em sua aplicação:

```typescript
import {NodeKit} from '@gravity-ui/nodekit';

const nodeKit = new NodeKit();
nodekit.ctx.log('App está pronta');
```

## Documentação

Veja o diretório `docs/` para documentação adicional:

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md) especifica como você pode configurar o próprio nodekit e suas aplicações baseadas em nodekit
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) descreve o conceito de contextos do NodeKit, logging e tracing
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) contém a descrição de uma classe de erro customizada útil que o NodeKit fornece para suas aplicações
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) lista algumas funções auxiliares adicionais que vêm com o NodeKit

## Contribuindo

### Primeiros passos

Obtenha cópias do repositório NodeKit e dos aplicativos de exemplo:

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

Vincule seu nodekit ao npm e inicie o compilador:

```bash
cd nodekit && npm link && npm run dev
```

Em seguida, em outro terminal, vá para os exemplos, abra o que lhe interessa, vincule seu nodekit lá e inicie o aplicativo:

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

Neste ponto, você pode fazer alterações tanto no NodeKit quanto no aplicativo de demonstração e ver os resultados em tempo real.

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

Um kit de ferramentas fundamental para Node.js (logging, telemetria, erros tipados, config, contextos de requisição) compartilhado entre os backends do Gravity UI — utilize-o para obter uma espinha dorsal consistente para o aplicativo antes de adicionar qualquer camada HTTP, em vez de montar você mesmo a infraestrutura de logging/erros/configuração.

### Quando usar

- Qualquer serviço/script Node.js que deseje logging compartilhado, telemetria (tracing) e um `AppError` tipado.
- Fornecer contexto com escopo de requisição (logs/traces) através de limites assíncronos.
- Centralizar a configuração para que múltiplos serviços no mesmo ecossistema se comportem de forma consistente.

### Quando não usar

- Para expor rotas HTTP, middleware ou um servidor, use [`@gravity-ui/expresskit`](https://github.com/gravity-ui/expresskit) — ele é construído sobre o NodeKit e adiciona a camada Express/HTTP.
- Para um script autônomo de arquivo único sem necessidades de logging/telemetria, as APIs Node.js simples são mais leves do que o sistema completo de contexto do NodeKit.

### Armadilhas comuns

- **Alucinar `import {Logger}` / `logger`** — o logging é acessado através do contexto do NodeKit: `new NodeKit()` então `nodekit.ctx.log(...)`, não uma exportação de logger independente.
- **Instanciar NodeKit repetidamente** — crie uma instância `NodeKit` por aplicativo e compartilhe seu `ctx`; criar muitas instâncias fragmenta a configuração de logging/telemetria.
- **Lançar `Error` simples** — use o `AppError` incluído (veja `docs/app-error.md`) para que os códigos de erro e a telemetria sejam capturados de forma consistente.
- **Ignorar a inicialização da configuração** — o NodeKit lê a configuração na construção; revise `docs/configuration.md` antes de assumir os padrões.

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/nodekit/dist/docs/INDEX.md`.