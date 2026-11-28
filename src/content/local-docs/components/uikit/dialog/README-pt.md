<!--GITHUB_BLOCK-->

# Dialog

<!--/GITHUB_BLOCK-->

`Dialog` é uma janela modal com um título, corpo e ações de rodapé, usada para confirmações, formulários e prompts. É construída sobre o `Modal`.

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## Uso

```tsx
const [open, setOpen] = useState(false);
const dialogTitleId = 'app-confirmation-dialog-title';

<Dialog
  onClose={() => setOpen(false)}
  open={open}
  onEnterKeyDown={() => {
    alert('onEnterKeyDown');
  }}
  aria-labelledby={dialogTitleId}
>
  <Dialog.Header caption="Caption" id={dialogTitleId} />
  <Dialog.Body>Dialog.Body</Dialog.Body>
  <Dialog.Footer
    onClickButtonCancel={() => setOpen(false)}
    onClickButtonApply={() => alert('onApply')}
    textButtonApply="Apply"
    textButtonCancel="Cancel"
  />
</Dialog>;
```

## Propriedades

| Nome                  | Descrição                                                                                             | Tipo                                                                                             | Padrão      |
| :-------------------- | :---------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- | :---------- |
| open                  | Estado atual da caixa de diálogo                                                                      | `boolean`                                                                                        |             |
| onEscapeKeyDown       | Manipulador de evento de pressionamento da tecla Escape                                               | `(event: KeyboardEvent) => void`                                                                 |             |
| onEnterKeyDown        | Manipulador de evento de pressionamento da tecla Enter                                                | `(event: KeyboardEvent) => void`                                                                 |             |
| onOutsideClick        | Manipulador de evento ao clicar fora da caixa de diálogo                                             | `(event: MouseEvent) => void`                                                                    |             |
| onClose               | Manipulador de evento ao fechar a caixa de diálogo                                                    | `(event: MouseEvent or KeyboardEvent,` `reason: ModalCloseReason or "closeButtonClick") => void` |             |
| className             | `className` do wrapper do conteúdo da caixa de diálogo                                                | `string`                                                                                         |             |
| modalClassName        | `className` da caixa modal na qual a caixa de diálogo está incorporada                                | `string`                                                                                         |             |
| size                  | Tamanho da caixa de diálogo. Obsoleto. Use `maxWidth` + `fullWidth` para obter o mesmo resultado.     | `'s'` `'m'` `'l'`                                                                                |             |
| maxWidth              | Largura máxima do conteúdo da caixa de diálogo                                                        | `'s'` `'m'` `'l'`                                                                                |             |
| fullWidth             | Se `true`, o conteúdo se estende até `maxWidth`                                                       | `boolean`                                                                                        |             |
| disableBodyScrollLock | Alterna se o scroll do corpo é bloqueado                                                              | `boolean`                                                                                        | `false`     |
| disableEscapeKeyDown  | Alterna se o pressionamento da tecla Escape está desabilitado                                         | `boolean`                                                                                        | `false`     |
| disableOutsideClick   | Alterna se o clique externo está desabilitado                                                         | `boolean`                                                                                        | `false`     |
| keepMounted           | Alterna se a caixa de diálogo é mantida no estado montado                                             | `boolean`                                                                                        | `false`     |
| hasCloseButton        | Alterna se há um ícone de fechar no canto superior direito da caixa de diálogo                        | `boolean`                                                                                        | `true`      |
| aria-labelledby       | ID da legenda do `<Dialog/>`. Use a propriedade `id` do `<Dialog.Header/>` para definir o ID da legenda | `string`                                                                                         |             |
| aria-label            | Rótulo da caixa de diálogo para acessibilidade. Defina `aria-labelledby` se a legenda for visível para o usuário | `string`                                                                                         |             |
| container             | Elemento container para a caixa de diálogo                                                            | `HTMLElement`                                                                                    |             |
| qa                    | Valor do atributo `data-qa` da caixa modal na qual a caixa de diálogo está incorporada               | `string`                                                                                         |             |
| contentOverflow       | Determina se o `Dialog` tem um indicador de scroll interno ou aumenta com o conteúdo                  | `'visible'` `'auto'`                                                                             | `'visible'` |
