Puede usar el componente `Hotkey` para mostrar atajos de teclado tanto para Mac como para PC.

```tsx
import {Hotkey} from '@gravity-ui/uikit';
```

### Valor

Los atajos de teclado se establecen en el formato `<tecla>+<tecla>`, lo que significa que debe especificar varias teclas separadas por un signo más, por ejemplo, `shift+tab`.

La secuencia de combinaciones de teclas se puede separar por un espacio: `<atajo> <atajo>`, por ejemplo, `ctrl+a ctrl+c ctrl+v`.

Puede usar `mod` como abreviatura de `cmd` en Mac y `ctrl` para otras plataformas. Por ejemplo, `mod+v` se representa como ⌘+A para Mac y Ctrl+A para PC.

GRAVITY_TRANSLATION_BLOCK_0_END

### Vista

`light`: Se usa si el componente se muestra sobre un fondo claro (se usa por defecto).

`dark`: Se usa si el componente se muestra sobre un fondo oscuro.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Plataforma

`pc`: Se usa para mostrar atajos de teclado para un teclado de PC normal.

`mac`: Se usa para mostrar atajos de teclado para un teclado Macintosh.

Por defecto, la plataforma se detecta automáticamente.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Propiedades

| Nombre      | Descripción                                                                    |         Tipo          |        Por defecto         |
| :-------- | :----------------------------------------------------------------------------- | :-------------------: | :--------------------: |
| view      | Se usa para establecer el esquema de color                                     |  `"light"` `"dark"`   |       `"light"`        |
| platform  | Se usa para seleccionar la plataforma (PC o Macintosh) para mostrar el atajo de teclado |    `"pc"` `"mac"`     | Detectado automáticamente |
| title     | Valor del atajo de teclado                                                     |       `string`        |                        |
| style     | Atributo de estilo HTML                                                        | `React.CSSProperties` |                        |
| className | Nombre de la clase de alerta                                                   |       `string`        |                        |