`ListItemView` é a visualização de uma linha de lista: ela organiza o conteúdo de uma linha — o ícone, a
descrição, o conteúdo final — e desenha os estados que seu proprietário passa.

```tsx
import {ListItemView} from '@gravity-ui/uikit';
```

O [List](../List/README.md) desenha suas linhas com esta visualização e a expõe como `List.ItemView`, com
apenas as props do layout. Use `ListItemView` em si para construir uma linha fora de uma lista — uma
linha de um menu próprio, um item de uma árvore — ou quando uma linha precisa das props de aninhamento e
colapso que uma lista não passa.

- [Uso Básico](#uso-básico)
- [Tamanhos](#tamanhos)
- [Slots](#slots)
- [Estados](#estados)
- [Seleção](#seleção)
- [Aninhamento e Colapso](#aninhamento-e-colapso)
- [Alça de Arrastar](#alça-de-arrastar)
- [Outro Elemento](#outro-elemento)
- [API CSS](#api-css)
- [Propriedades](#propriedades)

## Uso Básico

A visualização é um elemento de bloco com a largura de seu contêiner: a largura de uma linha é a largura da lista
ao seu redor.

```tsx
import {Envelope} from '@gravity-ui/icons';
import {Icon, ListItemView} from '@gravity-ui/uikit';

function Mailbox() {
  return (
    <ListItemView startContent={<Icon data={Envelope} size={16} />} onClick={openMailbox}>
      Inbox
    </ListItemView>
  );
}
```

<ListItemViewExample />

A visualização não tem um papel ARIA próprio: uma linha obtém seu papel da lista à qual pertence (`option` em
um listbox, `row` em uma grade), e `role` junto com o restante das props DOM alcançam o elemento raiz conforme
são passadas. Dentro de um `<List>` as props vêm prontas de `getItemProps()`.

## Tamanhos

A prop `size` define a densidade de uma linha — `s`, `m`, `l` ou `xl`. Ela controla a altura mínima,
os preenchimentos, o raio do canto e o tamanho dos controles da linha; `xl` também muda o texto para
`body-2`. As alturas são as dos controles — 24, 28, 36 e 44px — e, assim como nos controles, os preenchimentos
de bloco vêm da altura: uma única linha preenche a linha exatamente, cada linha seguinte adiciona sua altura de
linha. Os preenchimentos inline crescem com o tamanho — 8, 12, 16 e 16px. Uma linha sem `size` tem a altura,
os preenchimentos e o raio de `m` com os controles da visualização base; dentro de um `<List>` cada linha
recebe o tamanho da lista.

<ListItemViewSizes />

## Slots

O conteúdo de uma linha são seus filhos, e o resto está nas props: `startContent` para um ícone inicial ou
um avatar, `description` para a segunda linha, `endContent` para o que fecha a linha — um rótulo, um atalho,
uma ação.

<ListItemViewSlots />

```tsx
<ListItemView
  startContent={<Icon data={Star} size={16} />}
  description="Flagged by you"
  endContent={<Label>3</Label>}
>
  Starred
</ListItemView>
```

## Estados

Uma linha exibe quatro estados, e cada um deles é uma prop — a visualização não mantém estado próprio:

- `active` — o cursor do teclado: uma lista o move com as teclas de seta;
- `hovered` — o destaque de hover, forçado pelas props. Sem a prop, a linha se destaca em `:hover`;
  `hovered={false}` suprime isso, que é o que uma lista faz enquanto um arrastar está em andamento;
- `disabled` — a linha é esmaecida e para de reagir ao ponteiro, incluindo seu próprio `onClick`;
- `selected` — veja [Seleção](#seleção).

<ListItemViewStates />

## Seleção

`selectionStyle` indica como uma linha selecionada é exibida: `highlight` tinge a linha, `check` mantém um
slot para uma marca de seleção na frente do conteúdo, `none` mostra a seleção por nada — para uma linha que
a indica em seu próprio conteúdo. A prop não tem padrão: uma linha `selected` sem ela se parece com qualquer
outra. Dentro de um `<List>` a lista escolhe o estilo — `check` para uma seleção múltipla, `highlight` para
uma única.

<ListItemViewSelection />

O slot de marca de seleção é mantido para cada linha de uma lista, selecionada ou não, para que o conteúdo das
linhas não salte à medida que a seleção muda.

## Aninhamento e Colapso

`nestedLevel` indenta uma linha pela profundidade de uma árvore, e `collapsible` dá à linha o alternador de
seu ramo: `collapsed` é seu estado e `onCollapseChange` seu manipulador. Um clique na própria linha também
alterna o ramo, a menos que a linha tenha um `onClick` próprio.

O alternador é decoração: ele carrega `aria-hidden` e está fora da ordem de tabulação, então a própria linha
é a única maneira de acessar o ramo. O `aria-expanded` da linha é seu para definir.

<ListItemViewNesting />

## Alça de Arrastar

`dragHandle` preenche o slot mais externo de uma linha, na frente do recuo, do alternador de colapso e da
marca de seleção, para que a alça de uma lista reordenável permaneça na borda da linha, independentemente
do que mais a linha exiba. A visualização não sabe nada sobre arrastar e soltar: as props da biblioteca
residem no elemento que você passa.

<ListItemViewDragHandle />

```tsx
<ListItemView
  dragHandle={
    <span {...dragHandleProps} aria-label="Drag to reorder">
      <Icon data={Grip} size={12} />
    </span>
  }
>
  {track.title}
</ListItemView>
```

## Outro Elemento

`component` renderiza a linha como outro elemento — um link, um botão — e `componentProps` são as props
desse elemento: `href`, `type`, os manipuladores. Com `isContainer`, a visualização não organiza nada e deixa
a marcação da linha para você, mantendo os estados e o elemento.

<ListItemViewCustomElement />

## API CSS

| Nome                                        | Descrição                          |
| :------------------------------------------ | :----------------------------------- |
| `--g-list-item-view-min-height`             | A altura mínima de uma linha         |
| `--g-list-item-view-border-radius`          | O raio do canto                      |
| `--g-list-item-view-padding-inline`         | O preenchimento inline               |
| `--g-list-item-view-padding-block`          | O preenchimento block                |
| `--g-list-item-view-line-height`            | A altura da linha do conteúdo        |
| `--g-list-item-view-controls-gap`           | O espaço entre os slots              |
| `--g-list-item-view-controls-size`          | O tamanho dos controles de uma linha |
| `--g-list-item-view-controls-border-radius` | O raio do canto dos controles        |
| `--g-list-item-view-controls-icon-size`     | O tamanho dos ícones do controle     |
| `--g-list-item-view-spacer-size`            | A indentação de um nível de aninhamento |
| `--g-list-item-view-background-color`       | O fundo de uma linha                 |
| `--g-list-item-view-background-color-hover` | O fundo de uma linha pairada         |
| `--g-list-item-view-text-color`             | A cor do conteúdo                    |
| `--g-list-item-view-description-color`      | A cor da descrição                   |

As variáveis aplicam-se a uma linha de qualquer tamanho: `size` apenas fornece a geometria padrão — a altura mínima, o raio, os preenchimentos e os controles — para uma variável que não está definida. O preenchimento block padrão segue a altura mínima e a altura da linha; `--g-list-item-view-padding-block` o fixa. O cabeçalho da seção de uma lista (`List.SectionHeader`) segue a mesma altura mínima e preenchimento inline, as variáveis incluídas, para que as linhas e os cabeçalhos de uma lista mantenham uma borda.

## Propriedades

| Nome             | Descrição                                                                                 |                  Tipo                  | Padrão |
| :--------------- | :------------------------------------------------------------------------------------------ | :------------------------------------: | :-----: |
| children         | O conteúdo da linha                                                                      |           `React.ReactNode`            |         |
| size             | A densidade da linha                                                                      |        `'s'` `'m'` `'l'` `'xl'`        |         |
| startContent     | O conteúdo inicial: um ícone, um avatar                                                     |           `React.ReactNode`            |         |
| description      | A segunda linha da linha                                                                  |           `React.ReactNode`            |         |
| endContent       | O conteúdo final: um rótulo, um atalho, uma ação                                        |           `React.ReactNode`            |         |
| dragHandle       | O conteúdo do slot mais externo: a alça de arrastar de uma linha reorganizável                     |           `React.ReactNode`            |         |
| active           | O cursor do teclado na linha                                                       |               `boolean`                |         |
| hovered          | O destaque de hover, forçado pelas props (`false` suprime o `:hover` da linha)       |               `boolean`                |         |
| disabled         | Se a linha está desabilitada                                                                 |               `boolean`                |         |
| selected         | Se a linha está selecionada                                                                 |               `boolean`                |         |
| selectionStyle   | Como uma linha selecionada é exibida                                                                 |    `'highlight'` `'check'` `'none'`    |         |
| collapsible      | Se a linha tem o alternador de seu ramo                                                |               `boolean`                |         |
| collapsed        | Se o ramo da linha está colapsado                                                  |               `boolean`                |         |
| onCollapseChange | O manipulador do alternador (um clique na linha sem `onClick` alterna o ramo também) |     `(collapsed: boolean) => void`     |         |
| nestedLevel      | A profundidade da linha em uma árvore: a indentação à sua frente                                   |                `number`                |   `0`   |
| onClick          | O manipulador de um clique na linha (um clique em um descendente focável não é um)            | `React.MouseEventHandler<HTMLElement>` |         |
| component        | O elemento que a linha renderiza                                                          |          `React.ElementType`           | `'div'` |
| componentProps   | As props desse elemento                                                                   |   `React.ComponentProps<component>`    |         |
| isContainer      | Renderiza os filhos como estão, sem o layout dos slots                           |               `boolean`                | `false` |
| className        | A classe CSS da linha                                                                    |                `string`                |         |
| style            | O estilo inline da linha                                                                 |         `React.CSSProperties`          |         |

A documentação Markdown é traduzida para pt.
Os nomes dos componentes, identificadores de API, links e blocos de código são preservados.
Cada placeholder GRAVITY_TRANSLATION_BLOCK_<number>_END é copiado verbatim em sua própria linha, na ordem original. Os placeholders são mantidos fora das cercas de código Markdown.
O restante das props atinge o elemento raiz da linha: `role`, `id`, `tabIndex`, `aria-*`, `data-*`, os manipuladores do ponteiro e do teclado.