<!--GITHUB_BLOCK-->

# ClipboardIcon

<!--/GITHUB_BLOCK-->

`ClipboardIcon` é um ícone de cópia animado que reflete o estado da cópia (ocioso ou sucesso); ele deve ser usado dentro de `CopyToClipboard` ou `ClipboardButton`, em vez de ser usado sozinho.

```tsx
import {ClipboardIcon} from '@gravity-ui/uikit';
```

### Status

Dependendo da propriedade `status`, o ícone mudará de acordo:

<!--SANDBOX
import {ClipboardIcon} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ClipboardIcon size={24} />
            <ClipboardIcon size={24} status="success" />
            <ClipboardIcon size={24} status="error" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<CopyToClipboard text="Some text to copy" timeout={500}>
  {(status) => <ClipboardIcon size={24} status={status} />}
</CopyToClipboard>
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome      | Descrição                                                               | Tipo     | Padrão |
| :-------- | :---------------------------------------------------------------------- | :------- | :----- |
| className | Atributo HTML `class`                                                   | `string` |        |
| size      | Determina o tamanho do ícone                                            | `number` |        |
| status    | Os valores disponíveis são `pending`, `success` e `error`.              | `string` |        |
