<!--GITHUB_BLOCK-->

# Popup

<!--/GITHUB_BLOCK-->

`Popup` posiciona conteúdo flutuante acima da página, ancorado a um elemento de referência — a primitiva de baixo nível por trás de tooltips, popovers e menus, construída sobre o [Floating UI](https://floating-ui.com). Sua visibilidade é controlada com a propriedade `open`; seus filhos são renderizados dentro do componente [`Portal`](../Portal), a menos que você defina a propriedade `disablePortal`.

```tsx
import {Popup} from '@gravity-ui/uikit';
```

## Âncora

Para especificar a âncora de um elemento flutuante, você pode usar a propriedade `anchorElement`.

<!--SANDBOX
import {useState} from 'react';
import {Button, Popup} from '@gravity-ui/uikit';

export default function () {
    const [buttonElement, setButtonElement] = useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button ref={setButtonElement} onClick={() => setOpen((prevOpen) => !prevOpen)}>
                Toggle Popup
            </Button>
            <Popup anchorElement={buttonElement} open={open} placement="bottom">
                <div style={{padding: 5}}>
                    Content
                </div>
            </Popup>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [buttonElement, setButtonElement] = React.useState(null);
const [open, setOpen] = React.useState(false);

<Button ref={setButtonElement} onClick={() => setOpen((prevOpen) => !prevOpen)}>
  Toggle Popup
</Button>
<Popup anchorElement={buttonElement} open={open} placement="bottom">
  Content
</Popup>
```

<!--/GITHUB_BLOCK-->

## Posicionamento

Use a propriedade `placement` para gerenciar a posição do `Popup` ao redor do elemento âncora.
Por padrão, o `Popup` usa o [middleware flip](https://floating-ui.com/docs/flip) para evitar overflow.
Se a propriedade for definida como um array, o primeiro elemento será usado como valor de posicionamento padrão, os demais serão usados como [posicionamentos de fallback](https://floating-ui.com/docs/flip#fallbackplacements).
Também é aceitável usar os valores `auto`, `auto-start`, `auto-end` para usar o [middleware autoPlacement](https://floating-ui.com/docs/autoPlacement) em vez do flip.

<!--SANDBOX
import {Popup, PopupProps} from '@gravity-ui/uikit';
import {CSSProperties, useState} from 'react';

const anchorStyles: CSSProperties = {
    margin: '40px 100px',
    width: 320,
    height: 140,
    border: '2px dashed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5em',
};

function PopupInstance({children, ...props}: PopupProps) {
    return (
        <Popup open disablePortal {...props}>
            <div style={{padding: 5}}>{children}</div>
        </Popup>
    );
}

export default function () {
    const [anchorElement, setAnchorElement] = useState<HTMLDivElement | null>(null);

    return (
        <div>
            <div ref={setAnchorElement} style={anchorStyles}>
                Anchor
            </div>
            <PopupInstance anchorElement={anchorElement} placement="top-start">
                Top Start
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="top">
                Top
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="top-end">
                Top End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="right-start">
                Right Start
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="right">
                Right
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="right-end">
                Right End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="bottom-end">
                Bottom End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="bottom">
                Bottom
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="bottom-start">
                Bottom Start
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="left-end">
                Left End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="left">
                Left
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="left-start">
                Left Start
            </PopupInstance>
        </div>
    );
};
SANDBOX-->

## Propriedades

| Nome                    | Descrição                                                                                |                             Tipo                              |     Padrão     |
| :---------------------- | :----------------------------------------------------------------------------------------- | :-----------------------------------------------------------: | :------------: |
| anchorElement           | Elemento de âncora. Pode ser também um `VirtualElement`                                    |                     `PopupAnchorElement`                      |                |
| aria-describedby        | Atributo `aria-describedby`. Use-o se você tiver nós de rótulo e descrição                  |                           `string`                            |                |
| aria-label              | Atributo `aria-label`. Use-o apenas se você não tiver nenhuma legenda visível               |                           `string`                            |                |
| aria-labelledby         | Atributo `aria-labelledby`. Preferível se você tiver uma legenda visível                    |                           `string`                            |                |
| children                | Qualquer conteúdo React                                                                    |                       `React.ReactNode`                       |                |
| className               | Atributo HTML `class` para o nó raiz                                                       |                           `string`                            |                |
| container               | Elemento DOM ao qual o componente é montado via `Portal`                                   |                         `HTMLElement`                         | `document.body` |
| disableEscapeKeyDown    | Desabilita o fechamento ao pressionar `Esc`                                                |                           `boolean`                           |     `false`     |
| disableFocusOut         | Desabilita o fechamento ao perder o foco                                                   |                           `boolean`                           |     `false`     |
| disableOutsideClick     | Desabilita o fechamento ao clicar fora                                                      |                           `boolean`                           |     `false`     |
| disablePortal           | Desabilita o uso de `Portal`                                                               |                           `boolean`                           |     `false`     |
| disableTransition       | Desabilita a animação de aparecimento/desaparecimento do popup                             |                           `boolean`                           |     `false`     |
| floatingClassName       | Classe adicional para aplicar ao elemento `Floating UI`                                    |                           `string`                            |                |
| floatingContext         | Contexto `Floating UI` para fornecer interações                                            |                     `FloatingRootContext`                     |                |
| floatingInteractions    | Substitui as interações do `Floating UI`                                                   |                     `Array<ElementProps>`                     |                |
| floatingMiddlewares     | Middlewares do `Floating UI`. Se definidos, eles substituirão completamente os middlewares padrão. |                      `Array<Middleware>`                      |                |
| floatingStyles          | Estilos a serem aplicados ao elemento `Floating UI`                                        |                     `React.CSSProperties`                     |                |
| focusOrder              | A ordem em que o foco circula                                                              |        `Array<'reference' \| 'floating' \| 'content'>`        |  `['content']`  |
| hasArrow                | Renderiza uma seta apontando para a âncora                                                 |                           `boolean`                           |     `false`     |
| id                      | Atributo HTML `id`                                                                         |                           `string`                            |                |
| initialFocus            | Elemento inicial a ser focado. Um número positivo é o índice do elemento tabulável.        |               `number` `React.Ref<HTMLElement>`               |                |
| keepMounted             | O `Popup` não será removido do DOM ao ser ocultado                                         |                           `boolean`                           |     `false`     |
| modal                   | Habilita o comportamento de captura de foco                                                |                           `boolean`                           |     `false`     |
| offset                  | Valor de offset do `Floating UI`                                                           |                         `PopupOffset`                         |       `4`       |
| onOpenChange            | Lida com o evento de mudança de abertura do `Popup`                                        |                          `Function`                           |                |
| onTransitionIn          | Ao iniciar a animação de abertura do popup                                                 |                          `Function`                           |                |
| onTransitionInComplete  | Ao concluir a animação de abertura do popup                                                |                          `Function`                           |                |
| onTransitionOut         | Ao iniciar a animação de fechamento do popup                                               |                          `Function`                           |                |
| onTransitionOutComplete | Ao concluir a animação de fechamento do popup                                              |                          `Function`                           |                |
| open                    | Gerencia a visibilidade do `Popup`                                                         |                           `boolean`                           |     `false`     |
| placement               | Posicionamento do `Floating UI`                                                            | `Placement` `Array<Placement>` `auto` `auto-start` `auto-end` |                |
| qa                      | Atributo de teste (`data-qa`)                                                              |                           `string`                            |                |
| returnFocus             | Elemento a ser focado ao fechar                                                            |              `boolean` `React.Ref<HTMLElement>`               |     `true`      |
| role                    | Papel de acessibilidade para o popup                                                       |                           `string`                            |                |
| strategy                | Estratégia de posicionamento do `Floating UI`                                              |                      `absolute` `fixed`                       |   `absolute`    |
| style                   | Atributo HTML `style` para o nó raiz                                                       |                     `React.CSSProperties`                     |                |

## API CSS

| Nome                         | Descrição      |
| :--------------------------- | :--------------- |
| `--g-popup-background-color` | Cor de fundo |
| `--g-popup-border-color`     | Cor da borda     |
| `--g-popup-border-radius`    | Raio da borda    |
| `--g-popup-border-width`     | Largura da borda     |
