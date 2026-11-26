`ClipboardIcon` é um ícone de cópia animado que reflete o estado da cópia (ocioso ou sucesso); ele deve ser usado dentro de `CopyToClipboard` ou `ClipboardButton`, em vez de ser usado sozinho.

```tsx
import {ClipboardIcon} from '@gravity-ui/uikit';
```

### Status

Dependendo da propriedade `status`, o ícone mudará de acordo:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Propriedades

| Nome      | Descrição                                                               | Tipo     | Padrão |
| :-------- | :---------------------------------------------------------------------- | :------- | :----- |
| className | Atributo HTML `class`                                                   | `string` |        |
| size      | Determina o tamanho do ícone                                            | `number` |        |
| status    | Os valores disponíveis são `pending`, `success` e `error`.              | `string` |        |