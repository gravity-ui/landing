# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

**English** · [Русский](README-ru.md)

Um renderizador de formulários baseado em JSON Schema e `react-final-form`. Um único schema descreve tanto o valor quanto como ele é renderizado: as regras de validação são palavras-chave padrão do Draft-07, e com o que um nó é desenhado é a extensão `nodeParameters`.

- Ponto de entrada: `@gravity-ui/dynamic-forms`.
- Status: **API estável**.
- Duas camadas: `core` (motor headless) e `kit` (entidades e layouts prontos em `@gravity-ui/uikit`).

A API anterior DynamicField / DynamicView está disponível em `@gravity-ui/dynamic-forms/deprecated`. As importações do SchemaRenderer do ponto de entrada `/unstable` removido movem-se para a raiz do pacote. Veja o [guia de migração](MIGRATION.md) para a transição completa e [docs/deprecated](docs/deprecated) para a documentação da API anterior.

## Instalar

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## Conteúdo

- [Como usar](docs/en/how-to-use.md) — início rápido, a prop `name`, modos, o que escolher.
- [Referência da API](docs/en/api.md) — componentes, hooks, props, constantes, utilitários, exports do `kit`, tipos.
- [Schema](docs/en/schema.md) — `nodeParameters`, flags, anotações, palavras-chave, `stringNumber`, `$ref`.
- [Runtime](docs/en/runtime.md) — ciclo de vida do nó, coerção de valor, validação, erros, eventos, patches.
- [Kit](docs/en/kit.md) — layouts, catálogo de entidades, componentes de serviço, estilos.
- [Extensão](docs/en/extension.md) — entidades customizadas, layouts, validadores, configuração, renderizador standalone.
- [Migração](MIGRATION.md) — migrando da API principal anterior ou `/unstable`, convertendo Spec, compatibilidade através de `/deprecated`.
- [Observações e limitações](docs/en/limitations.md) — discrepâncias verificadas por código, limitações e bugs.

## O que é

`src/lib` é um motor de formulários onde tanto o formulário quanto a visão geral dos valores são construídos a partir de um único JSON Schema. A camada `core` não possui controles próprios: tudo o que é renderizado vem da configuração. A validação é feita através de `json-schema-library` (Draft-07) mais a palavra-chave customizada `stringNumber`. A camada `kit` fornece um registro pronto: 30 chaves de entidade em 6 tipos de nó, 7 chaves de layout, componentes de serviço, o hook `useExpanded`, textos de erro e o conversor `specToJsonSchema` do formato Spec antigo.

## Como funciona

1. **Schema e configuração.** `useSchemaRenderer` clona o `schema` e armazena o estado em um campo de serviço com um validador.
2. **Nós.** `SchemaRendererNode` pega o subschema por ponteiro, registra um campo `final-form`, seleciona `entity` e `layout`.
3. **Mudança.** Uma edição de valor, via `validateFields`, aciona apenas o validador do campo de serviço.
4. **Erros.** O validador espalha os erros por nome em `srState.errors`; nós com uma mensagem alterada são re-renderizados.
5. **Imperativo.** `useSchemaRendererTools` aplica patches no schema e adiciona erros externos, reiniciando a validação.

## Dependências

| Pacote                                      | Papel     | Por quê                                                               |
| :------------------------------------------ | :------- | :---------------------------------------------------------------- |
| `react` / `react-dom` / `react-is`          | peer     | 18, 19. Renderização.                                             |
| `final-form` / `react-final-form`           | peer     | Formulário, campos, submissão, assinaturas.                       |
| `@gravity-ui/uikit`                         | peer     | Versão 8. Controles do kit: TextInput, Select, Checkbox, etc.     |
| `json-schema-library`                       | runtime  | Validação Draft-07 e a palavra-chave customizada `stringNumber`.  |
| `decimal.js`                                | runtime  | Comparação de números e escala em `stringNumber` e `*_with_scale`. |
| `@gravity-ui/date-components`, `date-utils` | runtime  | `DateInput` e `DateValue`.                                        |
| `@gravity-ui/icons`                         | runtime  | `iconName` em Alert, Label, TextContent.                          |
| `@gravity-ui/i18n`                          | runtime  | Localização de textos de erro.                                    |
| `@bem-react/classname`, `lodash`, `uuid`    | runtime  | Classes, utilitários, chaves.                                     |
| Monaco                                      | external | Não empacotado. Passado via `userContext.MonacoEditor`.           |

## I18N

Certos componentes incluem tokens de texto (palavras e frases) que estão disponíveis em dois idiomas: `en` (o padrão) e `ru`. Para definir o idioma, use a função `configure`:

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento com storybook, execute o seguinte comando:

```shell
npm ci
npm run dev
```