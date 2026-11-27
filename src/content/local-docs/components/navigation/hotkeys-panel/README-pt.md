<!--GITHUB_BLOCK-->

# HotkeysPanel

<!--/GITHUB_BLOCK-->

Um painel de navegação para documentação de atalhos.
O painel exibe um conjunto de atalhos para sua aplicação com uma descrição de seu propósito.

```ts
import {HotkeysPanel} from '@gravity-ui/navigation';
```

## Propriedades

| Propriedade                | Tipo            | Obrigatório | Padrão | Descrição                                                                  |
| :------------------------- | :-------------- | :---------: | :----- | :--------------------------------------------------------------------------- |
| hotkeys                    | `Array`         |     sim     |        | Lista de grupos de atalhos                                                   |
| title                      | `ReactNode`     |             |        | O título do painel                                                           |
| togglePanelHotkey          | `String`        |             |        | O atalho para abrir o painel                                                 |
| open                       | `Boolean`       |     sim     |        | Se a gaveta está aberta ou não                                               |
| onClose                    | `Function`      |             |        | Manipulador para fechar a gaveta                                             |
| filterable                 | `Boolean`       |             | true   | Se deve mostrar o campo de busca ou não                                      |
| filterPlaceholder          | `String`        |             |        | Placeholder do campo de busca                                                |
| filterClassName            | `String`        |             |        | Nome da classe do campo de busca                                             |
| leftOffset                 | `Number/String` |             |        | Offset esquerdo da gaveta                                                    |
| topOffset                  | `Number/String` |             |        | Offset superior da gaveta                                                    |
| emptyState                 | `ReactNode`     |             |        | Placeholder para quando não há resultados de busca                           |
| className                  | `String`        |             |        | Nome da classe da gaveta                                                     |
| drawerItemClassName        | `String`        |             |        | Nome da classe do item da gaveta                                             |
| titleClassName             | `String`        |             |        | Nome da classe do título                                                     |
| itemContentClassName       | `String`        |             |        | Nome da classe do conteúdo do item da lista                                  |
| listClassName              | `String`        |             |        | Nome da classe da lista                                                      |
| platform                   | `'pc'`/`'mac'`  |             | auto   | Plataforma para o formato de exibição do atalho                             |
| drawerProps                | `DrawerProps`   |             |        | Props adicionais para o componente `Drawer` (style, container, hideVeil, etc.) |
| disableNavigationOffset    | `Boolean`       |             | false  | Se deve desabilitar o offset esquerdo automático com base no tamanho do `AsideHeader` |

GRAVITY_TRANSL

## API CSS

| Nome                                 | Descrição                       | Padrão |
| :----------------------------------- | :-------------------------------- | :-----: |
| `--hotkeys-panel-width`              | A largura do painel            | `400px` |
| `--hotkeys-panel-vertical-padding`   | O preenchimento superior e inferior do painel | `18px`  |
| `--hotkeys-panel-horizontal-padding` | O preenchimento esquerdo e direito do painel | `24px`  |

### Uso

Veja o exemplo do storybook `src/components/HotkeysPanel/__stories__/HotkeysPanelShowcase`.
