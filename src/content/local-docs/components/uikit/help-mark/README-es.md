<!--GITHUB_BLOCK-->

# HelpMark

<!--/GITHUB_BLOCK-->

Un icono de ayuda que revela información contextual en un popover al pasar el cursor o hacer clic. Ideal para mostrar consejos, explicaciones o contenido de apoyo sin ocupar espacio adicional en la interfaz.

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## Ejemplos

Componente con HTML sin procesar renderizado y cierre al salir el ratón:

<!--SANDBOX
import {HelpMark} from '@gravity-ui/uikit';

export default function () {
    return (
        <HelpMark onClick={() => console.log('just action happened')}>
            <b>Lorem ipsum</b> dolor sit{' '}
            <a href="https://example.com" target="_blank" rel="noreferrer">
                amet
            </a>
            , at scelerisque suspendisse
        </HelpMark>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<HelpMark onClick={() => console.log('just action happened')}>
  <b>Lorem ipsum</b> dolor sit{' '}
  <a href="https://example.com" target="_blank" rel="noreferrer">
    amet
  </a>
  , at scelerisque suspendisse
</HelpMark>
```

<!--/GITHUB_BLOCK-->

## Propiedades

`HelpMark` acepta cualquier prop válido de elemento `button` además de estos:

| Nombre       | Descripción                               |           Tipo           | Por defecto |
| :----------- | :---------------------------------------- | :----------------------: | :---------: |
| iconSize     | Establece el tamaño del icono             | `"s"` `"m"` `"l"` `"xl"` |    `"m"`    |
| popoverProps | Sobrescribe las props de `Popover`        |      `PopoverProps`      |             |
| children     | Contenido mostrado dentro del popover     |    `React.ReactNode`     |             |
