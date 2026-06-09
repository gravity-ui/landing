# playwright-tools

Uma biblioteca de utilitários adicionais para escrever testes usando Playwright Test.

```
npm i -D @gravity-ui/playwright-tools
```

O pacote contém vários subdiretórios com utilitários para diferentes propósitos. Você deve importar desses subdiretórios, por exemplo:

```ts
import { matchScreenshot } from 'playwright-tools/actions';
```

- [actions](./actions/README.md) — Ações do navegador.
- [auth/storage](./auth/storage/README.md) — Funções de autenticação para salvar e restaurar snapshots do armazenamento do navegador.
- [component-tests](./component-tests/README.md) — Utilitários e fixtures para Playwright Component Testing.
- [fixtures](./fixtures/README.md) — Fixtures para passar valores para testes.
- [har](./har/README.md) — Funções para trabalhar com dumps de requisições HAR.
- [utils](./utils/README.md) — Funções auxiliares.

Você pode aprender mais sobre Playwright e como configurá-lo na [documentação do Playwright](https://playwright.dev/docs/intro).

## Mantenedores

[@Avol-V](https://github.com/Avol-V)
[SwinX](https://github.com/SwinX)