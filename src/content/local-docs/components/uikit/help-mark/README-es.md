Un icono de ayuda que revela información contextual en un popover al pasar el cursor o hacer clic. Ideal para mostrar consejos, explicaciones o contenido de apoyo sin ocupar espacio adicional en la interfaz.

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## Ejemplos

Componente con HTML sin procesar renderizado y cierre al salir el ratón:

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Propiedades

`HelpMark` acepta cualquier prop válido de elemento `button` además de estos:

| Nombre       | Descripción                               |           Tipo           | Por defecto |
| :----------- | :---------------------------------------- | :----------------------: | :---------: |
| iconSize     | Establece el tamaño del icono             | `"s"` `"m"` `"l"` `"xl"` |    `"m"`    |
| popoverProps | Sobrescribe las props de `Popover`        |      `PopoverProps`      |             |
| children     | Contenido mostrado dentro del popover     |    `React.ReactNode`     |             |
GRAVITY_TRANSLATION_BLOCK_2_END