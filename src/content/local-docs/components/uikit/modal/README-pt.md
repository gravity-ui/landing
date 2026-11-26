O componente `Modal` serve como base para criar janelas pop-up com um plano de fundo acima do restante do conteúdo em uma página.
Ele desabilita a rolagem ao abrir e gerencia o foco para o conteúdo. Os componentes filhos do `Modal` são renderizados dentro do componente [`Portal`](../Portal).
Com o `Modal`, você pode implementar diálogos, alertas, confirmações e muito mais.

```tsx
import {Modal} from '@gravity-ui/uikit';
```

## Uso

```tsx
import {useState} from 'react';
import {Button, Modal} from '@gravity-ui/uikit';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Abrir Modal</Button>
<Modal open={open} onClose={() => setOpen(false)}>
    Conteúdo
</Modal>
```

## Propriedades

| Nome                  | Descrição                                                                                                |       Tipo        |     Padrão     |
| :-------------------- | :------------------------------------------------------------------------------------------------------- | :---------------: | :------------: |
| autoFocus             | Enquanto aberto, o foco será definido no primeiro elemento interativo no conteúdo                        |     `boolean`     |     `true`     |
| children              | Qualquer conteúdo React                                                                                  | `React.ReactNode` |                |
| className             | Atributo HTML `class` para o nó raiz                                                                     |     `string`      |                |
| container             | Elemento DOM ao qual o componente é montado via `Portal`                                                 |   `HTMLElement`   | `document.body` |
| contentClassName      | Atributo HTML `class` para o nó de conteúdo                                                              |     `string`      |                |
| disableBodyScrollLock | Desabilita o bloqueio de rolagem enquanto aberto                                                         |     `boolean`     |     `false`    |
| disableEscapeKeyDown  | Desabilita o fechamento ao pressionar `Esc`                                                              |     `boolean`     |     `false`    |
| disableOutsideClick   | Desabilita o fechamento ao clicar fora                                                                    |     `boolean`     |     `false`    |
| disablePortal         | Desabilita o uso de `Portal`                                                                             |     `boolean`     |     `false`    |
| focusTrap             | Habilita o comportamento de captura de foco                                                              |     `boolean`     |     `true`     |
| keepMounted           | O `Modal` não será removido do DOM ao ser ocultado                                                       |     `boolean`     |     `false`    |
| onClose               | Lida com o evento de fechamento do `Modal`                                                               |    `Function`     |                |
| onEnterKeyDown        | Manipulador de evento de pressionamento de `Enter`                                                       |    `Function`     |                |
| onEscapeKeyDown       | Manipulador de evento de pressionamento de `Esc`                                                         |    `Function`     |                |
| onTransitionEnter     | Manipulador de evento de início da transição de abertura                                                 |    `Function`     |                |
| onTransitionExit      | Manipulador de evento de início da transição de fechamento                                               |    `Function`     |                |
| onTransitionEntered   | Manipulador de evento de fim da transição de abertura                                                    |    `Function`     |                |
| onTransitionExited    | Manipulador de evento de fim da transição de fechamento                                                  |    `Function`     |                |
| onOutsideClick        | Manipulador de evento de clique externo                                                                  |    `Function`     |                |
| open                  | Gerencia a visibilidade do `Modal`                                                                       |     `boolean`     |     `false`    |
| qa                    | Atributo de teste (`data-qa`)                                                                            |     `string`      |                |
| restoreFocusRef       | Elemento para o qual o foco será restaurado                                                             | `React.RefObject` |                |
| style                 | Atributo HTML `style` para o nó raiz                                                                     |     `string`      |                |
| aria-label            | Atributo HTML `aria-label` para descrever o `Modal`                                                      |     `string`      |                |
| aria-labelledby       | ID do elemento de legenda visível do `Modal`                                                             |     `string`      |                |
| contentOverflow       | Determina se o `Modal` tem um indicador de rolagem interno ou aumenta com o conteúdo                    | `visible` `auto`  |    `visible`   |

## API CSS

| Nome                      | Descrição                       |
| :------------------------ | :-------------------------------- |
| `--g-modal-margin`        | Margem em torno do conteúdo do `Modal` |
| `--g-modal-border-radius` | Raio da borda do conteúdo do `Modal`     |
| `--g-modal-width`         | Largura do conteúdo do `Modal`             |
| `--g-modal-max-width`     | Largura máxima do conteúdo do `Modal`         |
| `--g-modal-height`        | Altura do conteúdo do `Modal`            |
| `--g-modal-max-height`    | Altura máxima do conteúdo do `Modal`    |