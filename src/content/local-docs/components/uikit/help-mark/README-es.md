Un icono de ayuda que revela información contextual en un popover en escritorio y en una hoja en móvil. Ideal para mostrar consejos, explicaciones o contenido de apoyo sin ocupar espacio adicional en la interfaz.

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## Ejemplos

Componente con HTML sin procesar renderizado y cierre al salir el ratón:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Propiedades

`HelpMark` acepta cualquier prop válido de elemento `button` además de estas:

| Nombre         | Descripción                                   |           Tipo           | Por defecto |
| :------------- | :-------------------------------------------- | :----------------------: | :---------: |
| size         | Establece el tamaño del icono                                | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| popoverProps | Sobrescribe las props de `Popover` de escritorio              |      `PopoverProps`      |         |
| sheetProps   | Sobrescribe las props de `Sheet` de móvil                 |       `SheetProps`       |         |
| children     | Contenido mostrado dentro del popover o la hoja |    `React.ReactNode`     |         |

## API CSS

| Nombre                 | Descripción     |
| :------------------- | :-------------- |
| `--g-help-mark-size` | Tamaño del icono en px |