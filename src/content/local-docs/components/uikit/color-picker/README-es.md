# ColorPicker

El componente `ColorPicker` permite a los usuarios seleccionar colores mediante una interfaz interactiva de selector de colores con modos de entrada HEX/RGB y soporte opcional para canal alfa.

El selector muestra una muestra de color que abre una ventana emergente con:

- Selector de saturación y brillo
- Deslizador de tono
- Deslizador alfa (cuando está habilitado)
- Campos de entrada de color (modos HEX o RGB)

## Uso básico

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function BasicColorPicker() {
  const [color, setColor] = React.useState('#ff0000');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} />;
}
```

GRAVITY_TRANSLATION_BLOCK_1_END

## Con canal alfa

El `ColorPicker` admite transparencia alfa cuando `withAlpha` está habilitado. Esto agrega un deslizador de transparencia y cambia a los formatos de color HEXA/RGBA:

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function ColorPickerWithAlpha() {
  const [color, setColor] = React.useState('#ff0000ff');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} withAlpha={true} />;
}
```

GRAVITY_TRANSLATION_BLOCK_2_END

## Modo compacto

Para diseños con espacio limitado, puede renderizar solo la muestra de color sin mostrar el texto del valor del color:

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function CompactColorPicker() {
  return (
    <ColorPicker
      defaultValue="#00ff00"
      compact={true}
      onUpdate={(newColor) => console.log('Nuevo color:', newColor)}
    />
  );
}
```

GRAVITY_TRANSLATION_BLOCK_3_END

## Estados controlados y no controlados

El `ColorPicker` admite patrones de uso tanto controlados como no controlados:

```jsx
// No controlado
<ColorPicker
  defaultValue="#ffbe5c"
  onUpdate={(color) => console.log('Color cambiado:', color)}
/>

// Controlado
<ColorPicker
  value={color}
  onUpdate={setColor}
/>
```

GRAVITY_TRANSLATION_BLOCK_4_END

También puede controlar el estado abierto de la ventana emergente del selector:

```jsx
// Estado abierto controlado
<ColorPicker value={color} open={isOpen} onOpenChange={setIsOpen} onUpdate={setColor} />
```

GRAVITY_TRANSLATION_BLOCK_5_END

## Propiedades

| Nombre           | Descripción                                                              |           Tipo            |                                      Valor por defecto                                       |
| :------------- | :----------------------------------------------------------------------- | :-----------------------: | :--------------------------------------------------------------------------------: |
| size           | El tamaño de `ColorPicker`                                               | `"s"` `"m"` `"l"` `"xl"`  |                                       `"m"`                                        |
| value          | Valor de color para estado controlado (cadena HEX o HEXA)                |         `string`          |                                                                                    |
| defaultValue   | Valor de color por defecto para estado no controlado                     |         `string`          |                                    `"#000000"`                                     |
| onUpdate       | Callback cuando el usuario actualiza el color. Recibe una cadena HEX(A). | `(value: string) => void` |                                                                                    |
| popupPlacement | Posición del popup                                                       |     `PopupPlacement`      | `['bottom-start', 'bottom-end', 'left-start', 'left-end', 'top-start', 'top-end']` |
| open           | Estado controlado para abrir/cerrar el popup                             |         `boolean`         |                                                                                    |
| defaultOpen    | Estado por defecto para abrir/cerrar el popup                            |         `boolean`         |                                      `false`                                       |
| onOpenChange   | Callback para el cambio de estado de abrir/cerrar del popup              | `(open: boolean) => void` |                                                                                    |
| withAlpha      | Habilita el soporte del canal alfa para el modo HEXA/RGBA y el control deslizante de transparencia |         `boolean`         |                                      `false`                                       |
| compact        | Renderiza solo el botón del selector sin mostrar el texto del valor de color |         `boolean`         |                                      `false`                                       |

## Formatos de color

El `ColorPicker` siempre devuelve los valores de color en formato HEX:

- Cuando `withAlpha={false}`: Devuelve HEX de 6 dígitos (ej. `#ff0000`)
- Cuando `withAlpha={true}`: Devuelve HEXA de 8 dígitos (ej. `#ff0000ff`)

Dentro del popup del selector, los usuarios pueden cambiar entre los modos de entrada HEX y RGB para introducir colores en su formato preferido.