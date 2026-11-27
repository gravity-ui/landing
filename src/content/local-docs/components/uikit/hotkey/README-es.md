<!--GITHUB_BLOCK-->

# Hotkey

<!--/GITHUB_BLOCK-->

Puede usar el componente `Hotkey` para mostrar atajos de teclado tanto para Mac como para PC.

```tsx
import {Hotkey} from '@gravity-ui/uikit';
```

### Valor

Los atajos de teclado se establecen en el formato `<tecla>+<tecla>`, lo que significa que debe especificar varias teclas separadas por un signo más, por ejemplo, `shift+tab`.

La secuencia de combinaciones de teclas se puede separar por un espacio: `<atajo> <atajo>`, por ejemplo, `ctrl+a ctrl+c ctrl+v`.

Puede usar `mod` como abreviatura de `cmd` en Mac y `ctrl` para otras plataformas. Por ejemplo, `mod+v` se representa como ⌘+A para Mac y Ctrl+A para PC.

### Vista

`light`: Se usa si el componente se muestra sobre un fondo claro (se usa por defecto).

`dark`: Se usa si el componente se muestra sobre un fondo oscuro.

<!--SANDBOX
import {Hotkey} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Hotkey view="light" value="mod+a mod+c mod+v" />
            <Hotkey view="dark" value="mod+a mod+c mod+v" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```
<Hotkey view="light" value="mod+a mod+c mod+v" />
<Hotkey view="dark" value="mod+a mod+c mod+v" />
```

<!--/GITHUB_BLOCK-->

### Plataforma

`pc`: Se usa para mostrar atajos de teclado para un teclado de PC normal.

`mac`: Se usa para mostrar atajos de teclado para un teclado Macintosh.

Por defecto, la plataforma se detecta automáticamente.

<!--SANDBOX
import {Hotkey} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Hotkey value="mod+a mod+c mod+v" />
            <Hotkey platform="pc" value="mod+a mod+c mod+v" />
            <Hotkey platform="mac" value="mod+a mod+c mod+v" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```
<Hotkey value="mod+a mod+c mod+v" />
<Hotkey platform="pc" value="mod+a mod+c mod+v" />
<Hotkey platform="mac" value="mod+a mod+c mod+v" />
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre      | Descripción                                                                    |         Tipo          |        Por defecto         |
| :-------- | :----------------------------------------------------------------------------- | :-------------------: | :--------------------: |
| view      | Se usa para establecer el esquema de color                                     |  `"light"` `"dark"`   |       `"light"`        |
| platform  | Se usa para seleccionar la plataforma (PC o Macintosh) para mostrar el atajo de teclado |    `"pc"` `"mac"`     | Detectado automáticamente |
| title     | Valor del atajo de teclado                                                     |       `string`        |                        |
| style     | Atributo de estilo HTML                                                        | `React.CSSProperties` |                        |
| className | Nombre de la clase de alerta                                                   |       `string`        |                        |
