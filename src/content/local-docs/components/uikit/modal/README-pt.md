O componente `Modal` serve como base para criar janelas pop-up com um plano de fundo acima do restante do conteúdo em uma página.
Ele desabilita a rolagem ao abrir e gerencia o foco para o conteúdo. Os componentes filhos do `Modal` são renderizados dentro do componente [`Portal`](../Portal).
Com `Modal`, você pode implementar diálogos, alertas, confirmações e muito mais.

```tsx
import {Modal} from '@gravity-ui/uikit';
```

## Uso

```tsx
import {useState} from 'react';
import {Button, Modal} from '@gravity-ui/uikit';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Abrir Modal</Button>
<Modal open={open} onOpenChange={setOpen}>
    Conteúdo
</Modal>
```

## Propriedades
GRAVITY_TRANSLATION_BLOCK_0_END

| Nome                         | Descrição                                                                                  |                    Tipo                     |     Padrão     |
| :--------------------------- | :------------------------------------------------------------------------------------------- | :-----------------------------------------: | :-------------: |
| children                     | Qualquer conteúdo React                                                                            |              `React.ReactNode`              |                 |
| className                    | Atributo `class` HTML para o nó raiz                                                     |                  `string`                   |                 |
| container                    | Elemento DOM ao qual o componente é montado via `Portal`                                       |                `HTMLElement`                | `document.body` |
| contentClassName             | Atributo `class` HTML para o nó de conteúdo                                                  |                  `string`                   |                 |
| disableBodyScrollLock        | Desabilita o bloqueio de rolagem enquanto aberto                                                           |                  `boolean`                  |     `false`     |
| disableTransition            | Pula as animações de abertura e fechamento quando `true`.                                            |                  `boolean`                  |     `false`     |
| disableEscapeKeyDown         | Desabilita o fechamento ao pressionar `Esc`                                                           |                  `boolean`                  |     `false`     |
| disableOutsideClick          | Desabilita o fechamento ao clicar fora                                                  |                  `boolean`                  |     `false`     |
| disablePortal                | Desabilita o uso de `Portal`                                                                      |                  `boolean`                  |     `false`     |
| keepMounted                  | O `Modal` não será removido do DOM ao ser ocultado                                         |                  `boolean`                  |     `false`     |
| initialFocus                 | Alvo de foco inicial; o padrão é o nó de conteúdo                                           | `FloatingFocusManagerProps['initialFocus']` |                 |
| returnFocus                  | Controla para onde o foco retorna após o fechamento                                                   | `FloatingFocusManagerProps['returnFocus']`  |                 |
| disableVisuallyHiddenDismiss | Remove os botões de descarte ocultos para leitores de tela                                                    |                  `boolean`                  |     `false`     |
| floatingRef                  | Ref para o nó de conteúdo do modal                                                                |  `React.RefObject<HTMLDivElement \| null>`  |                 |
| onOpenChange                 | Lida com as mudanças de estado de abertura do `Modal`                                                           |                 `Function`                  |                 |
| onTransitionIn               | Manipulador de evento de início da transição de abertura                                                          |                 `Function`                  |                 |
| onTransitionOut              | Manipulador de evento de início da transição de fechamento                                                         |                 `Function`                  |                 |
| onTransitionInComplete       | Manipulador de evento de fim da transição de abertura                                                            |                 `Function`                  |                 |
| onTransitionOutComplete      | Manipulador de evento de fim da transição de fechamento                                                           |                 `Function`                  |                 |
| open                         | Gerencia a visibilidade do `Modal`                                                                   |                  `boolean`                  |     `false`     |
| qa                           | Atributo de teste (`data-qa`)                                                                   |                  `string`                   |                 |
| style                        | Atributo `style` HTML para o nó raiz                                                     |                  `string`                   |                 |
| aria-label                   | Atributo `aria-label` HTML para descrever o `Modal`                                              |                  `string`                   |                 |
| aria-labelledby              | ID do elemento de legenda visível do `Modal`                                                    |                  `string`                   |                 |
| contentOverflow              | Determina se o `Modal` tem um indicador de rolagem interno ou aumenta com o conteúdo |              `visible` `auto`               |    `visible`    |

`onOpenChange` recebe `escape-key` para Escape, `outside-press` para um clique externo e `undefined` para o botão de dispensar do leitor de tela. Feche quando `open` se tornar `false`, independentemente do motivo.

## API CSS

| Nome                      | Descrição                       |
| :------------------------ | :-------------------------------- |
| `--g-modal-margin`        | Margem em torno do conteúdo do `Modal` |
| `--g-modal-border-radius` | Raio da borda do conteúdo do `Modal`     |
| `--g-modal-width`         | Largura do conteúdo do `Modal`             |
| `--g-modal-min-width`     | Largura mínima do conteúdo do `Modal`         |
| `--g-modal-max-width`     | Largura máxima do conteúdo do `Modal`         |
| `--g-modal-height`        | Altura do conteúdo do `Modal`            |
| `--g-modal-min-height`    | Altura mínima do conteúdo do `Modal`        |
| `--g-modal-max-height`    | Altura máxima do conteúdo do `Modal`        |