`Sheet` é um componente projetado para uso no contexto mobile como um elemento informativo ou interativo. Você pode colocar conteúdo de qualquer tamanho nele, pois a rolagem interna e o redimensionamento dinâmico são suportados.

```tsx
import {Sheet} from '@gravity-ui/uikit';
```

Em dispositivos móveis, você pode mover um `Sheet` puxando sua parte principal ou a área de deslizar. Para fechá-lo, deslize para baixo, toque na área fora do `Sheet` ou pressione `Escape`.

## Uso

```tsx
import React from 'react';
import {Button, Sheet} from '@gravity-ui/uikit';

const SheetExample = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Abrir Sheet</Button>
      <Sheet open={open} onOpenChange={setOpen} title="Sheet de Conteúdo">
        Conteúdo
      </Sheet>
    </React.Fragment>
  );
};
```

## Propriedades
GRAVITY_TRANSLATION_BLOCK_0_END

| Nome                        | Descrição                                                                                                                                                                                                                                                                                                                                                  |     Tipo      |     Padrão     |
| :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------: | :------------: |
| allowHideOnContentScroll    | Habilita o comportamento de fechar a janela da folha deslizando para baixo se o conteúdo estiver rolado até o topo (`content Node.scrollTop === 0`) ou não tiver rolagem alguma.                                                                                                                                                                                             |   `boolean`   |     `true`      |
| alwaysFullHeight            | A altura da `Sheet` sempre terá o valor máximo                                                                                                                                                                                                                                                                                                            |   `boolean`   |   `undefined`   |
| className                   | Atributo HTML `class`                                                                                                                                                                                                                                                                                                                                      |   `string`    |   `undefined`   |
| container                   | Elemento DOM ao qual o componente é montado via `Portal`                                                                                                                                                                                                                                                                                                       | `HTMLElement` | `document.body` |
| contentClassName            | Atributo HTML `class` para o conteúdo da folha.                                                                                                                                                                                                                                                                                                                |   `string`    |   `undefined`   |
| defaultOpen                 | Abre a folha na montagem quando `open` não é passado. Para reabrir uma folha fechada, controle-a com `open`.                                                                                                                                                                                                                                                        |   `boolean`   |     `false`     |
| disableEscapeKeyDown        | Desabilita o fechamento da folha com a tecla Escape.                                                                                                                                                                                                                                                                                                         |   `boolean`   |     `false`     |
| disableOutsideClick         | Desabilita o fechamento da folha clicando no véu.                                                                                                                                                                                                                                                                                                             |   `boolean`   |     `false`     |
| disablePortal               | Desabilita o uso de `Portal`                                                                                                                                                                                                                                                                                                                                      |   `boolean`   |     `false`     |
| hideTopBar                  | Oculta a barra superior com a alça de redimensionamento.                                                                                                                                                                                                                                                                                                                    |   `boolean`   |                 |
| id                          | ID da folha usado como hash em uma URL. Certifique-se de especificar vários valores de `id` se houver mais de uma folha na página.                                                                                                                                                                                                                                     |   `string`    |     `sheet`     |
| keepMounted                 | A `Sheet` não será removida do DOM ao ser ocultada                                                                                                                                                                                                                                                                                                         |   `boolean`   |     `false`     |
| maxContentHeightCoefficient | Coeficiente que determina a altura máxima da `Sheet` em relação à altura da viewport (intervalo 0-1)                                                                                                                                                                                                                                             |   `number`    |      `0.9`      |
| onOpenChange                | Callback `(open: boolean, event?: Event, reason?: SheetOpenChangeReason) => void`, como em [`Popup.onOpenChange`](../Popup/README.md#properties).<br>Solicitações de descarte `open=false` com motivo `escape-key`, `outside-press`, `swipe`, ou `navigation`. Uma folha controlada fecha assim que o pai define `open` como `false`; uma não controlada fecha sozinha. |  `function`   |   `undefined`   |
| onTransitionIn              | Chamado quando a transição de abertura começa.                                                                                                                                                                                                                                                                                                                   | `() => void`  |   `undefined`   |
| onTransitionInComplete      | Chamado quando a transição de abertura é concluída.                                                                                                                                                                                                                                                                                                                | `() => void`  |   `undefined`   |
| onTransitionOut             | Chamado quando a transição de fechamento começa.                                                                                                                                                                                                                                                                                                                   | `() => void`  |   `undefined`   |
| onTransitionOutComplete     | Chamado quando a transição de fechamento é concluída, incluindo o descarte imediato após um deslize de tela cheia.                                                                                                                                                                                                                                                       | `() => void`  |   `undefined`   |
| open                        | Estado de abertura controlado. Sem ele, a folha se fecha ao ser descartada e `onOpenChange` apenas relata a mudança.                                                                                                                                                                                                                                           |   `boolean`   |   `undefined`   |
| swipeAreaClassName          | Atributo HTML `class` para a área de deslize.                                                                                                                                                                                                                                                                                                                   |   `string`    |   `undefined`   |
| title                       | Título da janela da folha.                                                                                                                                                                                                                                                                                                                                          |   `string`    |   `undefined`   |

Um toque que começa em uma alça de arrastar — um elemento com `draggable="true"` ou uma alça de `@hello-pangea/dnd` — é deixado para o arrastar e não desliza a folha.

## API CSS

| Nome                         | Descrição                                                                                                                                                            |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--g-sheet-content-padding`  | Preenchimento do conteúdo. O valor padrão inclui automaticamente `env(safe-area-inset-bottom)` para a parte inferior e `max(10px, env(safe-area-inset-left/right))` para os lados. |
| `--g-sheet-background-color` | Cor de fundo                                                                                                                                                       |