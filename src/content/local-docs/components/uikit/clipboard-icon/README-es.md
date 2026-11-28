<!--GITHUB_BLOCK-->

# ClipboardIcon

<!--/GITHUB_BLOCK-->

`ClipboardIcon` es un icono de copia animado que refleja el estado de la copia (inactivo o éxito); está diseñado para usarse dentro de `CopyToClipboard` o `ClipboardButton` en lugar de usarse por sí solo.

```tsx
import {ClipboardIcon} from '@gravity-ui/uikit';
```

### Estado

Dependiendo de la propiedad `status`, el icono cambiará en consecuencia:

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

## Propiedades

| Nombre      | Descripción                                                 | Tipo     | Por defecto |
| :-------- | :---------------------------------------------------------- | :------- | :---------- |
| className | Atributo HTML `class`                                       | `string` |             |
| size      | Determina el tamaño del icono                               | `number` |             |
| status    | Los valores disponibles son `pending`, `success` y `error`. | `string` |             |
