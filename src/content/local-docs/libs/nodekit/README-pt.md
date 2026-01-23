# NodeKit

NodeKit é um kit de ferramentas simples para seus aplicativos, scripts e bibliotecas Node.js. Ele fornece funcionalidades para logging, telemetria, configuração e tratamento de erros, para que você possa ter uma base familiar em seus diferentes projetos.

## Primeiros passos

Adicione a dependência ao seu projeto:

```bash
npm install --save @gravity-ui/nodekit
```

E então importe e inicialize o NodeKit em seu aplicativo:

```typescript
import {NodeKit} from '@gravity-ui/nodekit';

const nodeKit = new NodeKit();
nodekit.ctx.log('App está pronto');
```

## Documentação

Veja o diretório `docs/` para documentação adicional:

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md) especifica como você pode configurar o próprio nodekit e seus aplicativos baseados em nodekit
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) descreve o conceito de contextos do NodeKit, logging e tracing
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) contém a descrição de uma classe de erro customizada útil que o NodeKit fornece para seus aplicativos
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) lista algumas funções auxiliares adicionais que são empacotadas com o NodeKit

## Contribuição

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