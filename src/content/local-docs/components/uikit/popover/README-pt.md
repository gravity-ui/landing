`Popover` exibe conteúdo flutuante, opcionalmente interativo (texto, links ou botões) ancorado a um elemento filho e aberto ao passar o mouse ou clicar. Ele envolve o [`Popup`](../Popup/README.md) com interatividade de gatilho integrada, usando o `ReactElement` passado através da propriedade `children` como gatilho.

```tsx
import {Popover} from '@gravity-ui/uikit';
```

Migrando do `Popover` legado? Veja o [guia de migração](https://github.com/gravity-ui/uikit/blob/main/docs/migration-from-legacy-popover.md).

## Uso

Envolva um elemento HTML ou qualquer componente que aceite manipuladores DOM nativos e atributos ARIA em propriedades (ou seja, `Button`) com o componente `Popover`. Coloque seu conteúdo
na propriedade `content`.

```jsx
import {Button, Popover} from '@gravity-ui/uikit';

<Popover content="Conteúdo">
  <Button>Clique ou passe o mouse sobre mim</Button>
</Popover>;
```

## Propriedades

| Nome                 | Descrição                                                                                                     |                                Tipo                                 |     Padrão     |
| :------------------- | :------------------------------------------------------------------------------------------------------------ | :-----------------------------------------------------------------: | :------------: |
| children             | `ReactNode` que aceita manipuladores DOM                                                                      |                          `React.ReactNode`                          |                |
| className            | Atributo `class` HTML para o nó raiz                                                                          |                              `string`                               |                |
| container            | Elemento DOM ao qual o componente é montado via `Portal`                                                      |                            `HTMLElement`                            | `document.body` |
| content              | Qualquer conteúdo para renderizar dentro do `Popover`                                                         |                          `React.ReactNode`                          |                |
| contentClassName     | Atributo `class` HTML para o nó de conteúdo                                                                   |                              `string`                               |                |
| delay                | Aguarda o tempo especificado em milissegundos antes de alterar o estado `open`                                |             `number` `{open?: number; close?: number}`              |                |
| disableEscapeKeyDown | Não fechar ao pressionar a tecla `Esc`                                                                        |                              `boolean`                              |     `false`     |
| disableLayer         | Não usar `LayerManager` ao empilhar elementos flutuantes                                                      |                              `boolean`                              |     `false`     |
| disableOutsideClick  | Não fechar ao clicar fora                                                                                    |                              `boolean`                              |     `false`     |
| disablePortal        | Desabilita o uso de `Portal`                                                                                  |                              `boolean`                              |     `false`     |
| disabled             | Não abrir em nenhum evento                                                                                    |                              `boolean`                              |     `false`     |
| enableSafePolygon    | Usa área de polígono dinâmico ao mover o ponteiro do gatilho para o conteúdo do `Popover` para evitar que feche |                              `boolean`                              |     `false`     |
| hasArrow             | Renderiza uma seta apontando para o gatilho                                                                  |                              `boolean`                              |     `false`     |
| keepMounted          | O `Popover` não será removido do DOM ao ser ocultado                                                           |                              `boolean`                              |     `false`     |
| middlewares          | Middlewares do `Floating UI`. Se definidos, eles substituirão completamente os middlewares padrão.             |                         `Array<Middleware>`                         |                |
| modal                | Habilita o comportamento de captura de foco                                                                   |                              `boolean`                              |     `false`     |
| offset               | Valor de offset do `Floating UI`                                                                              |                           `PopoverOffset`                           |       `4`       |
| onOpenChange         | Função que é chamada quando o estado `open` muda                                                              |                             `Function`                              |                |
| open                 | Controla manualmente o estado `open`                                                                          |                              `boolean`                              |                |
| placement            | Posicionamento do `Floating UI`                                                                               | `Placement` `Array<Placement>` `"auto"` `"auto-start"` `"auto-end"` |     `"top"`     |
| qa                   | Atributo de teste (`data-qa`)                                                                                 |                              `string`                               |                |
| rest                 | Quanto tempo em ms o cursor deve permanecer parado antes de abrir.                                             |                              `number`                               |       `0`       |
| strategy             | Estratégia de posicionamento do `Floating UI`                                                                 |                       `"absolute"` `"fixed"`                        |  `"absolute"`   |
| style                | Atributo `style` HTML para o nó raiz                                                                          |                              `string`                               |                |
| toggle               | Se deve alternar o estado `open` com cliques repetidos                                                        |                              `boolean`                              |     `true`      |
| trigger              | Qual evento deve abrir o `Popover`. O valor padrão `all` refere-se a `hover` e `click`                         |                          `"all"` `"click"`                          |     `"all"`     |