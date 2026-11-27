<!--GITHUB_BLOCK-->

# Settings

<!--/GITHUB_BLOCK-->

O componente `Settings` fornece o layout para um painel de configurações com os seguintes recursos.

- agrupamento de itens de um ou dois níveis
- filtragem do conteúdo do painel por cabeçalhos de itens
- exibição do status de carregamento e do conteúdo

<!--GITHUB_BLOCK-->

## Usage

One-level settings example:

```tsx
<Settings>
  <Settings.Page title="Appearance">...</Settings.Page>
  <Settings.Page title="Notifications">...</Settings.Page>
</Settings>
```

Two-level settings example:
_Note:_ `Settings` with `view=mobile` groups `Settings.Group` are ignored.

```tsx
<Settings>
  <Settings.Group groupTitle="My service">
    <Settings.Page title="Appearance">...</Settings.Page>
    <Settings.Page title="Notifications">...</Settings.Page>
  </Settings.Group>
  <Settings.Group groupTitle="General">
    <Settings.Page title="Appearance">...</Settings.Page>
    <Settings.Page title="Notifications">...</Settings.Page>
  </Settings.Group>
</Settings>
```

Pages with sections example:

```tsx
<Settings.Page title="Features" icon={'...'}>
  <Settings.Section title="Common">
    <Settings.Item title="Default VCS">...</Settings.Item>
    <Settings.Item title="Search root">...</Settings.Item>
  </Settings.Section>
  <Settings.Section title="Beta functionality">...</Settings.Section>
</Settings.Page>
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome                           | Descrição                                                   | Tipo                         | Padrão            |
| :----------------------------- | :------------------------------------------------------------ | :--------------------------- | :---------------- |
| loading                        | Indicador de status de carregamento                                        | `boolean`                    |                    |
| renderLoading                  | Conteúdo para o status de carregamento                                    | `() => React.ReactNode`      |                    |
| renderNotFound                 | Conteúdo do painel vazio                                           | `() => React.ReactNode`      |                    |
| initialPage                    | Página inicial no formato `/groupId/pageId`                    | `string`                     |                    |
| view                           | Altera a visualização para Mobile                                        | `"normal"`, `"mobile"`       | `"normal"`         |
| onPageChange                   | Manipulador de alteração de página                                           | `(newPage?: string) => void` |                    |
| onClose                        | Manipulador de fechamento das configurações                                        | `() => void`                 |                    |
| title                          | Título da página                                                    | `string`                     | 'Settings'         |
| filterPlaceholder              | Texto do placeholder do filtro                                       | `string`                     | 'Search settings'  |
| emptyPlaceholder               | Texto para filtro vazio                                             | `string`                     | 'No results found' |
| enableMobileSettingsTabsScroll | Na visualização móvel, as abas transbordarão com rolagem em vez de quebrar linha | `boolean`                    |                    |

## Settings.Group

Nível opcional para organizar páginas relacionadas, por exemplo, "Geral" vs "Específico da aplicação".

### Propriedades

| Nome       | Descrição        | Tipo     | Padrão |
| :--------- | :----------------- | :------- | :------ |
| id         | ID exclusivo do grupo | `string` |         |
| groupTitle | Cabeçalho do grupo    | `string` |         |

## Settings.Page

Coleção de seções de configurações relacionadas, por exemplo, "Aparência" no grupo Geral.

### Propriedades

| Nome  | Descrição                  | Tipo                                                                                        | Padrão |
| :---- | :--------------------------- | :------------------------------------------------------------------------------------------ | :------ |
| id    | ID exclusivo da página em um grupo | `string`                                                                                    |         |
| title | Título da página                | `string`                                                                                    |         |
| icon  | Propriedades do ícone da página   | [`IconProps`](https://github.com/gravity-ui/uikit/tree/main/src/components/Icon#properties) |         |

## Settings.Section

Categoria de configurações relacionadas, por exemplo, "Configurações de tema" na página Aparência.

### Propriedades

| Nome      | Descrição                                                                 | Tipo              | Padrão |
| :-------- | :------------------------------------------------------------------------ | :---------------- | :----- |
| title     | Título da seção                                                           | `string`          |        |
| header    | Cabeçalho da seção                                                        | `React.ReactNode` |        |
| withBadge | Exibir selo na seção e no menu                                            | `boolean`         |        |
| hideTitle | Ocultar título da seção. Propriedade necessária para ocultar o título em configurações simples no celular | `boolean`         |        |

## Settings.Item

Configuração individual com título e componente de controle.
⚠️ No caso de apenas um `Settings.Item` em `Settings.Section`, o título não é exibido.

### Propriedades

| Nome                 | Descrição                                                              | Tipo                                                      | Padrão     |
| :------------------- | :--------------------------------------------------------------------- | :-------------------------------------------------------- | :--------- |
| title                | Título do item                                                         | `string`                                                  |            |
| renderTitleComponent | Cabeçalho personalizado de                                             | `(highlightedTitle?: React.ReactNode) => React.ReactNode` |            |
| align                | Alinhamento do item                                                    | `"top"`, `"center"`                                       | `"center"` |
| mode                 | Layout para celular. Título e controle serão colocados em uma linha    | `"row"`                                                   |            |
| description          | Descrição do item                                                      | `React.ReactNode`                                         |            |
