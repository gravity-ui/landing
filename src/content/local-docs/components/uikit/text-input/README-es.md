<!--GITHUB_BLOCK-->

# TextInput

<!--/GITHUB_BLOCK-->

```tsx
import {TextInput} from '@gravity-ui/uikit';
```

TextInput permite a los usuarios introducir texto en una interfaz de usuario.

## Apariencia

La apariencia de `TextInput` está controlada por las `pin` propiedades `view` y.

### Ver

`normal`- la vista principal de `TextInput` (utilizada de forma predeterminada).

<!--LANDING_BLOCK
<ExampleBlock code={`<TextInput placeholder="Placeholder" />`}>
    <UIKit.TextInput placeholder="Placeholder" />
</ExampleBlock>
LANDING_BLOCK-->

`clear`- se puede usar con un envoltorio personalizado para. `TextInput`

<!--LANDING_BLOCK
<ExampleBlock code={`<TextInput view="clear" placeholder="Placeholder" />`}>
    <UIKit.TextInput view="clear" placeholder="Placeholder" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput view="normal" />
<TextInput view="clear" />
```

<!--/GITHUB_BLOCK-->

### Alfiler

Le permite controlar la vista de los bordes derecho e izquierdo `TextInput`del borde.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextInput placeholder="Placeholder" pin="round-brick" />
<TextInput placeholder="Placeholder" pin="brick-brick" />
<TextInput placeholder="Placeholder" pin="brick-round" />
`}
>
    <UIKit.TextInput placeholder="Placeholder" pin="round-brick" />
    <UIKit.TextInput placeholder="Placeholder" pin="brick-brick" />
    <UIKit.TextInput placeholder="Placeholder" pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput pin="round-brick" />
<TextInput pin="brick-brick" />
<TextInput pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## Estados

### Discapacitado

El estado en el `TextInput` que no desea que el usuario pueda interactuar con el componente.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextInput placeholder="Placeholder" disabled={true} />
`}
>
    <UIKit.TextInput placeholder="Placeholder" disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput disabled />
```

<!--/GITHUB_BLOCK-->

### Error

El estado `TextInput` en el que desea indicar una entrada de usuario incorrecta. Para cambiar el `TextInput` aspecto, utilice la `validationState` propiedad con el `"invalid"` valor. Se puede agregar un texto de mensaje opcional a través de la `errorMessage` propiedad. De forma predeterminada, el texto del mensaje se representa fuera del componente.
Este comportamiento se puede cambiar con la `errorPlacement` propiedad.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextInput placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
<TextInput placeholder="Placeholder" errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
`}
>
    <UIKit.TextInput placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
    <UIKit.TextInput placeholder="Placeholder" errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput errorMessage="Error message" validationState="invalid" />
<TextInput errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Tamaño

`s`— Se usa cuando los controles estándar son demasiado grandes (mesas, cartas pequeñas).

`m`— Tamaño básico, utilizado en la mayoría de los componentes.

`l`— Controles básicos realizados en el encabezado, las ventanas modales o las ventanas emergentes de una página.

`xl`— Se utiliza en las páginas promocionales y de destino.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextInput placeholder="Placeholder" size="s" />
<TextInput placeholder="Placeholder" size="m" />
<TextInput placeholder="Placeholder" size="l" />
<TextInput placeholder="Placeholder" size="xl" />
`}
>
    <UIKit.TextInput placeholder="Placeholder" size="s" />
    <UIKit.TextInput placeholder="Placeholder" size="m" />
    <UIKit.TextInput placeholder="Placeholder" size="l" />
    <UIKit.TextInput placeholder="Placeholder" size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput size="s" />
<TextInput size="m" />
<TextInput size="l" />
<TextInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## Etiqueta

Le permite establecer la etiqueta a la izquierda del control.

- la etiqueta ocupa la posición más a la izquierda en relación con el control. Es decir, los elementos agregados a través de la `startContent` propiedad se ubicarán a la derecha.
- La etiqueta no puede ocupar más de la mitad del ancho de todo el espacio de TextInput.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextInput placeholder="Placeholder" label="Label" />
<TextInput placeholder="Placeholder" label="Very long label with huge amount of symbols" />
`}
>
    <UIKit.TextInput placeholder="Placeholder" label="Label" />
    <UIKit.TextInput placeholder="Placeholder" label="Very long label with huge amount of symbols" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput label="Label" />
```

<!--/GITHUB_BLOCK-->

## Contenido adicional

### Iniciar contenido

Le permite agregar contenido a la izquierda del control (o a la derecha en caso de usar [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)). Ubicado a la izquierda (o a la derecha en caso de usar rtl) de la etiqueta agregada mediante la `label` propiedad.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<TextInput placeholder="Placeholder" label="Label" startContent={<Label size="s">Left</Label>} />`}
>
    <UIKit.TextInput
        placeholder="Search"
        label="Label"
        startContent={<UIKit.Label size="s">Left</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput startContent={<Label>Left</Label>} />
```

<!--/GITHUB_BLOCK-->

### Contenido final

Le permite agregar contenido a la derecha (o a la izquierda en caso de usar [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)) del control. Ubicado a la derecha (o a la izquierda en caso de usar rtl) del botón de borrar agregado mediante la `hasClear` propiedad.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<TextInput placeholder="Placeholder" endContent={<Label size="s">Right</Label>} hasClear/>`}
>
    <UIKit.TextInput
        hasClear
        placeholder="Placeholder"
        endContent={<UIKit.Label size="s">Right</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput endContent={<Label>Right</Label>} />
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre               | Descripción                                                                                                                           |                       Tipo                        | Predeterminado  |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------ | :-----------------------------------------------: | :-------------: |
| autoComplete         | El `autocomplete` atributo del control                                                                                                |                `boolean` `string`                 |                 |
| autoFocus            | El `autofocus` atributo del control                                                                                                   |                     `boolean`                     |                 |
| className            | El nombre de la clase contenedora del control                                                                                         |                     `string`                      |                 |
| controlProps         | Los atributos html del control                                                                                                        | `Atributos HTML de React.Input<HTMLInputElement>` |                 |
| controlRef           | React ref proporcionada al control                                                                                                    |          `Reactar.Ref<HTMLInputElement>`          |                 |
| defaultValue         | El valor predeterminado del control, que se usa cuando el componente no está controlado                                               |                     `string`                      |                 |
| inhabilitado         | Indica que el usuario no puede interactuar con el control                                                                             |                 `React.ReactNode`                 |                 |
| endContent           | Nodo del usuario`renderizado después del nodo de entrada, botón de borrar e icono de error                                            |                     `string`                      |                 |
| errorMessage         | Texto de error                                                                                                                        |                     `string`                      |                 |
| errorPlacement       | Colocación del error                                                                                                                  |                `outside` `inside`                 |    `outside`    |
| hasClear             | Muestra el icono para borrar el valor del control                                                                                     |                     `boolean`                     |     `false`     |
| identificación       | El `id` atributo del control                                                                                                          |                     `string`                      |                 |
| etiqueta             | Texto de ayuda representado a la izquierda del nodo de entrada                                                                        |                     `string`                      |                 |
| nombre               | El `name` atributo del control. Si no se especifica, se generará automáticamente si no se especifica                                  |                     `string`                      |                 |
| nota                 | Un elemento opcional que se muestra en la esquina inferior derecha del control y que comparte un espacio con el contenedor de errores |                 `React.ReactNode`                 |                 |
| onBlur               | Se dispara cuando el control pierde el foco. Proporciona un evento de enfoque como argumento de devolución de llamada                 |                    `function`                     |                 |
| onChange             | Se activa cuando el usuario cambia el valor de la entrada. Proporciona un evento de cambio como argumento de devolución de llamada    |                    `function`                     |                 |
| onFocus              | Se dispara cuando el control se enfoca. Proporciona un evento de enfoque como argumento de devolución de llamada                      |                    `function`                     |                 |
| onKeyDown            | Se dispara cuando se pulsa una tecla. Proporciona un evento de teclado como argumento de devolución de llamada                        |                    `function`                     |                 |
| onKeyUp              | Se dispara cuando se suelta una tecla. Proporciona un evento de teclado como argumento de devolución de llamada                       |                    `function`                     |                 |
| onUpdate             | Se activa cuando el usuario cambia el valor de la entrada. Proporciona un nuevo valor como argumento de devolución de llamada         |                    `function`                     |                 |
| alfiler              | La vista fronteriza del control                                                                                                       |                     `string`                      | `'round-round'` |
| marcador de posición | Texto que aparece en el control cuando no tiene ningún valor establecido                                                              |                     `string`                      |                 |
| qa                   | Atributo de ID de prueba (`data-qa`)                                                                                                  |                     `string`                      |
| readOnly             | Indica que el usuario no puede cambiar el valor del control                                                                           |                     `boolean`                     |     `false`     |
| tamaño               | El tamaño del control                                                                                                                 |                   `"s"` `"xl"`                    |      `"m"`      |
| startContent         | El nodo del usuario`se representa antes de la etiqueta y el nodo de entrada                                                           |                 `React.ReactNode`                 |                 |
| tabIndex             | El `tabindex` atributo del control                                                                                                    |                     `string`                      |                 |
| tipo                 | El tipo de control                                                                                                                    |                 `"email"` `"url"`                 |                 |
| validationState      | Estado de validación                                                                                                                  |                    `"invalid"`                    |                 |
| valor                | El valor del control                                                                                                                  |                     `string`                      |                 |
| vista                | La vista del control                                                                                                                  |               `"normal"` `"clear"`                |   `"normal"`    |

## API CSS

| Nombre                               | Descripción                                                                   |
| :----------------------------------- | :---------------------------------------------------------------------------- |
| `--g-text-input-text-color`          | Color del texto                                                               |
| `--g-text-input-label-color`         | Color de etiqueta                                                             |
| `--g-text-input-placeholder-color`   | Color del marcador de posición                                                |
| `--g-text-input-background-color`    | Color de fondo                                                                |
| `--g-text-input-border-radius`       | Radio de borde                                                                |
| `--g-text-input-border-width`        | Ancho del borde                                                               |
| `--g-text-input-border-color`        | Color del borde                                                               |
| `--g-text-input-border-color-hover`  | Color del borde si pasa el ratón por encima                                   |
| `--g-text-input-border-color-active` | Color del borde si está activo                                                |
| `--g-text-input-focus-outline-color` | Color del contorno si está enfocado (de forma predeterminada, no se presenta) |
