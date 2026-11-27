`Dialog` é uma janela modal com um título, corpo e ações de rodapé, usada para confirmações, formulários e prompts. É construída sobre o `Modal`.

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## Uso

```tsx
const [open, setOpen] = useState(false);
const dialogTitleId = 'app-confirmation-dialog-title';

<Dialog onOpenChange={setOpen} open={open} aria-labelledby={dialogTitleId}>
  <Dialog.Header caption="Legenda" id={dialogTitleId} />
  <Dialog.Body>Dialog.Body</Dialog.Body>
  <Dialog.Footer
    onClickButtonCancel={() => setOpen(false)}
    onClickButtonApply={() => alert('onApply')}
    textButtonApply="Aplicar"
    textButtonCancel="Cancelar"
  />
</Dialog>;
```

## Propriedades
GRAVITY_TRANSLATION_BLOCK_0_END

| Nome                  | Descrição                                                                                             | Tipo                                                                | Padrão      |
| :-------------------- | :---------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------ | :---------- |
| open                  | Estado atual da caixa de diálogo                                                                      | `boolean`                                                           |             |
| onOpenChange          | Lida com as alterações no estado de abertura da caixa de diálogo                                      | `(open: boolean, event?: Event, reason?: OpenChangeReason) => void` |             |
| initialFocus          | Alvo de foco inicial, incluindo o botão `cancel` ou `apply` no rodapé                                | `ModalProps['initialFocus'] \| 'cancel' \| 'apply'`                 |             |
| returnFocus           | Controla para onde o foco retorna após o fechamento                                                   | `ModalProps['returnFocus']`                                         |             |
| className             | `className` do wrapper de conteúdo da caixa de diálogo                                                | `string`                                                            |             |
| modalClassName        | `className` da caixa modal na qual a caixa de diálogo está incorporada                                | `string`                                                            |             |
| maxWidth              | Largura máxima do conteúdo da caixa de diálogo                                                        | `'s'` `'m'` `'l'`                                                   |             |
| fullWidth             | Se `true`, o conteúdo se estende até `maxWidth`                                                       | `boolean`                                                           |             |
| disableBodyScrollLock | Alterna se o bloqueio de rolagem do corpo está desativado                                             | `boolean`                                                           | `false`     |
| disableTransition     | Pula as animações de abertura e fechamento quando `true`.                                             | `boolean`                                                           | `false`     |
| disableEscapeKeyDown  | Alterna se a tecla de escape pressionada está desativada                                              | `boolean`                                                           | `false`     |
| disableOutsideClick   | Alterna se o clique externo está desativado                                                           | `boolean`                                                           | `false`     |
| keepMounted           | Alterna se a caixa de diálogo é mantida no estado montado                                             | `boolean`                                                           | `false`     |
| hasCloseButton        | Alterna se há um ícone de cruz no canto superior direito da caixa de diálogo                           | `boolean`                                                           | `true`      |
| aria-labelledby       | ID da legenda `<Dialog/>`. Use a propriedade `id` de `<Dialog.Header/>` para definir o ID da legenda | `string`                                                            |             |
| aria-label            | Rótulo da caixa de diálogo para a11y. Defina `aria-labelledby` se a legenda for visível para o usuário | `string`                                                            |             |
| container             | Elemento container para a caixa de diálogo                                                            | `HTMLElement`                                                       |             |
| qa                    | Valor do atributo `data-qa` da caixa modal na qual a caixa de diálogo está incorporada               | `string`                                                            |             |
| contentOverflow       | Determina se o `Dialog` tem um indicador de rolagem interno ou aumenta com o conteúdo                 | `'visible'` `'auto'`                                                | `'visible'` |

GRAVITY_TRANSLATION_BLOCK_1_END

`onOpenChange` recebe `escape-key` para Escape, `outside-press` para um clique externo, `click` para o botão de fechar e `undefined` para o botão de dispensar do leitor de tela. Feche quando `open` se tornar `false`, independentemente do motivo.
GRAVITY_TRANSLATION_BLOCK_1_END