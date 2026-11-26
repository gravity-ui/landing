# @gravity-ui/components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/components)](https://www.npmjs.com/package/@gravity-ui/components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/components/)

Um conjunto de componentes React complexos construídos sobre [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit). Parte do sistema de design [Gravity UI](https://gravity-ui.com).

## Instalação

```shell
npm install @gravity-ui/components
```

## Uso

`@gravity-ui/uikit` 8 e React 18/19 são necessários. Instale a versão pré-lançamento atual do UIKit 8 com `npm install @gravity-ui/uikit@beta`.

`@gravity-ui/uikit` é uma dependência peer: instale-a, importe seus estilos uma vez no ponto de entrada do aplicativo e envolva o aplicativo em `Provider`. Os componentes deste pacote são renderizados sem estilo sem essa configuração.

```tsx
import {Provider, TextInput} from '@gravity-ui/uikit';
import {FormRow} from '@gravity-ui/components';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export function App() {
  return (
    <Provider theme="light">
      <FormRow label="Nome" fieldId="name">
        <TextInput id="name" name="name" />
      </FormRow>
    </Provider>
  );
}
```

### Migrando para o UIKit 8

- Substitua o `ThemeProvider` no nível do aplicativo por `Provider`.
- Use `onOpenChange` em vez de `onClose` em `ConfirmDialog` e `ChangelogDialog`. `ConfirmDialog` aceita as novas props de Diálogo, incluindo `maxWidth` e `fullWidth` em vez de `size`.
- Remova `disableHeightTransition` das configurações do popup de consentimento de cookies e `ChangelogDialog`; o UIKit não anima mais a altura do conteúdo.
- `Stories` e `StoriesGroup` mantêm `onClose`, com argumentos opcionais de evento/razão e razões do UIKit 8 (`escape-key`, `outside-press`, `click`).
- Passe atributos HTML nativos diretamente para as props de botão/link, incluindo `StoreBadge`, em vez de `extraProps`. Use as visualizações de Botão do UIKit 8 em ações de story personalizadas.

Consulte o [guia de migração do UIKit 8](https://github.com/gravity-ui/uikit/blob/next/docs/migration-to-v8.md) para as alterações na API subjacentes. Este pacote usa as novas APIs List, Menu e Popover sem o ponto de entrada legado.

### Diálogo de confirmação

```tsx
import {ConfirmDialog} from '@gravity-ui/components';

<ConfirmDialog
  open={open}
  title="Excluir o projeto?"
  message="Isso não pode ser desfeito."
  textButtonApply="Excluir"
  textButtonCancel="Cancelar"
  onClickButtonApply={handleDelete}
  onClickButtonCancel={() => setOpen(false)}
  onOpenChange={setOpen}
/>;
```

### Mais exemplos

Cada componente tem um README ao lado de sua origem com props e exemplos — veja `src/components/<Component>/README.md`. Demos ao vivo: [Storybook](https://preview.gravity-ui.com/components/).

## Desenvolvimento

```shell
git clone git@github.com:gravity-ui/components.git
cd components
npm ci
npm run start   # inicia o Storybook em http://localhost:7009
```

Outros comandos úteis:

```shell
npm test              # executa testes unitários
npm run lint          # verifica JS e SCSS
npm run typecheck     # verifica tipos do TypeScript
```

## Contribuições

Contribuições são bem-vindas! Por favor, leia [CONTRIBUTING.md](CONTRIBUTING.md) antes de enviar um pull request.

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

A camada de componentes compostos do Gravity UI — linhas de formulário prontas, diálogos de confirmação, notificações, histórias, galerias e widgets semelhantes em nível de produto montados a partir de primitivas do `@gravity-ui/uikit`, para que você não precise reconstruí-los manualmente.

### Quando usar

- Layout de formulário: `FormRow` (rótulo + campo + descrição) em vez de um wrapper de rótulo/entrada feito à mão.
- Fluxos de confirmação: `ConfirmDialog` em vez de compor `Dialog` com dois botões você mesmo.
- Widgets de produto: `Notifications`, `Stories` / `StoriesGroup`, `ChangelogDialog`, `OnboardingMenu`, `PromoSheet`, `CookieConsent`, `Reactions`, `SharePopover`, `StoreBadge`.
- Auxiliares de dados: `InfiniteScroll`, `ItemSelector`, `DelayedTextInput`, `TokenizedInput`, `Gallery`.

### Quando não usar

- Controles básicos, overlays, layout e temas — use [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) diretamente; este pacote apenas adiciona compostos sobre ele.
- Grades de dados — use [`@gravity-ui/table`](https://github.com/gravity-ui/table); não há tabela aqui.
- Seletores de data e calendários — use [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components).
- Estruturas de navegação de aplicativos (cabeçalho lateral, rodapé) — use [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation).
- Formulários baseados em esquema — use [`@gravity-ui/dynamic-forms`](https://github.com/gravity-ui/dynamic-forms); `FormRow` é apenas uma linha de layout.

### Armadilhas comuns

- **Nada é estilizado sem a configuração do uikit.** Instale `@gravity-ui/uikit`, importe `@gravity-ui/uikit/styles/styles.css` (mais `fonts.css`) uma vez e envolva o aplicativo em `Provider` — este pacote não envia estilos globais próprios.
- **`FormRow` não renderiza a entrada.** Passe o controle como `children` e vincule-o com `fieldId` correspondendo ao `id` do controle; a prop `label` é o texto do rótulo, não um elemento `<label>`.
- **`ConfirmDialog` não tem `onConfirm` / `onCancel`.** Os manipuladores são `onClickButtonApply` e `onClickButtonCancel`, e `textButtonApply` / `textButtonCancel` são obrigatórios.
- **Importações alucinadas.** Tudo é exportado da raiz do pacote: `import {FormRow} from '@gravity-ui/components'`. Não há importações de subcaminho como `@gravity-ui/components/FormRow`.

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/components/build/docs/INDEX.md`.