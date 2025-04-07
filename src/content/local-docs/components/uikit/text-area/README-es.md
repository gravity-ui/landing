<!--GITHUB_BLOCK-->

# TextArea

<!--/GITHUB_BLOCK-->

```tsx
import {TextArea} from '@gravity-ui/uikit';
```

`TextArea` permiten a los usuarios introducir texto en una interfaz de usuario.

## Apariencia

La apariencia `TextArea`de está controlada por las `pin` propiedades `view` y.

### Ver

`normal`- es la vista principal de `TextArea` (utilizada de forma predeterminada).

<!--LANDING_BLOCK
<ExampleBlock code={`<TextArea placeholder="Placeholder" />`}>
    <UIKit.TextArea placeholder="Placeholder" />
</ExampleBlock>
LANDING_BLOCK-->

`clear`- se puede usar cuando se usa un envoltorio personalizado para. `TextArea`

<!--LANDING_BLOCK
<ExampleBlock code={`<TextArea view="clear" placeholder="Placeholder" />`}>
    <UIKit.TextArea view="clear" placeholder="Placeholder" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea view="normal" />
<TextArea view="clear" />
```

<!--/GITHUB_BLOCK-->

### Alfiler

Le permite controlar la apariencia de los bordes derecho e izquierdo `TextArea`del borde.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextArea placeholder="Placeholder" pin="round-brick" />
<TextArea placeholder="Placeholder" pin="brick-brick" />
<TextArea placeholder="Placeholder" pin="brick-round" />
`}
>
    <UIKit.TextArea placeholder="Placeholder" pin="round-brick" />
    <UIKit.TextArea placeholder="Placeholder" pin="brick-brick" />
    <UIKit.TextArea placeholder="Placeholder" pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea pin="round-brick" />
<TextArea pin="brick-brick" />
<TextArea pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## Estados

### Discapacitado

El estado en el `TextArea` que no desea que el usuario pueda interactuar con el componente.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextArea placeholder="Placeholder" disabled={true} />
`}
>
    <UIKit.TextArea placeholder="Placeholder" disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea disabled />
```

<!--/GITHUB_BLOCK-->

### Error

El estado en el `TextArea` que desea mostrar una entrada de usuario incorrecta. Para cambiar el aspecto de `TextArea`, utilice la `validationState` propiedad con el valor «no válido».
Se puede agregar un texto de mensaje opcional a través de la `errorMessage` propiedad.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextArea placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
<TextArea view="clear" placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
`}
>
    <UIKit.TextArea placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
    <UIKit.TextArea view="clear" placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Tamaño

`s`— Se usa cuando los controles estándar son demasiado grandes (mesas, cartas pequeñas).

`m`— El tamaño básico, utilizado en la mayoría de los componentes.

`l`— Se utiliza para los controles básicos del encabezado, las ventanas modales o las ventanas emergentes de una página.

`xl`— Se utiliza en las páginas promocionales y de destino.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextArea placeholder="Placeholder" size="s" />
<TextArea placeholder="Placeholder" size="m" />
<TextArea placeholder="Placeholder" size="l" />
<TextArea placeholder="Placeholder" size="xl" />
`}
>
    <UIKit.TextArea placeholder="Placeholder" size="s" />
    <UIKit.TextArea placeholder="Placeholder" size="m" />
    <UIKit.TextArea placeholder="Placeholder" size="l" />
    <UIKit.TextArea placeholder="Placeholder" size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea size="s" />
<TextArea size="m" />
<TextArea size="l" />
<TextArea size="xl" />
```

<!--/GITHUB_BLOCK-->

## Gestión de filas

El recuento de filas de `TextArea` está controlado por `rows` las `maxRows` propiedades `minRows` y. La `rows` propiedad desactiva el cálculo automático de la altura.
Para establecer la altura deseada de `TextArea`, utilice la `style` propiedad `className` o con la `rows` propiedad establecida en 1.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextArea placeholder="Placeholder" size="s" />
`}
>
    <div>
        rows = 2
        <UIKit.TextArea placeholder="Placeholder" rows={2} />
    </div>
    <div>
        minRows = 2
        <UIKit.TextArea placeholder="Placeholder" minRows={2} />
    </div>
    <div>
        maxRows = 2
        <UIKit.TextArea placeholder="Placeholder" maxRows={2} />
    </div>
    <div>
        height = 200px
        <UIKit.TextArea placeholder="Placeholder" rows={1} style={{height: 200px}}/>
    </div>
</ExampleBlock>
LANDING_BLOCK-->

## Área de texto redimensionable

Puede obtener un comportamiento redimensionable proporcionando `resize` estilo a la `controlProps` propiedad. Asegúrese de especificar la `rows` propiedad si permite cambiar el tamaño de la altura del área de texto; de lo contrario, el cambio de tamaño entrará en conflicto con el cálculo automático de la altura.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextArea
    rows={4}
    placeholder="Placeholder"
    style={{width: "auto", maxWidth: "100%"}}
    controlProps={{style: {resize: "both"}}}
/>
`}
>
    <UIKit.TextArea
        rows={4}
        placeholder="Placeholder"
        style={{width: "auto", maxWidth: "100%"}}
        controlProps={{style: {resize: "both"}}}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea rows={4} controlProps={{style: {resize: 'both'}}} />
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre               | Descripción                                                                                                                                |                        Tipo                         | Predeterminado  |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------: | :-------------: |
| autoComplete         | El `autocomplete` atributo del control                                                                                                     |                 `boolean` `string`                  |                 |
| autoFocus            | El `autofocus` atributo del control                                                                                                        |                      `boolean`                      |                 |
| className            | El nombre de la clase contenedora del control                                                                                              |                      `string`                       |                 |
| controlProps         | Los atributos html del control                                                                                                             | `Atributos React.TextAreAHTML<HTMLTextAreaElement>` |                 |
| controlRef           | React ref proporcionada al control                                                                                                         |         `Reactar.Ref<HTMLTextAreaElement>`          |                 |
| defaultValue         | El valor predeterminado del control. Se usa cuando el componente no está controlado                                                        |                      `string`                       |                 |
| inhabilitado         | Indica que el usuario no puede interactuar con el control                                                                                  |                      `boolean`                      |     `false`     |
| errorMessage         | Texto de error                                                                                                                             |                      `string`                       |                 |
| hasClear             | Muestra el icono para borrar el valor del control                                                                                          |                      `boolean`                      |     `false`     |
| identificación       | El `id` atributo del control                                                                                                               |                      `string`                       |                 |
| maxRows              | El número máximo de líneas de texto visibles para el control. Se ignora si `rows` se especifica                                            |                      `number`                       |                 |
| minRows              | El número mínimo de líneas de texto visibles para el control. Se ignora si `rows` se especifica                                            |                      `number`                       |                 |
| nombre               | El `name` atributo del control. Si no se especifica, se generará automáticamente.                                                          |                      `string`                       |                 |
| nota                 | Un elemento opcional que se muestra en la esquina inferior derecha del espacio de control y de uso compartido con el contenedor de errores |                  `React.ReactNode`                  |                 |
| onBlur               | Se dispara cuando el control pierde el foco. Proporciona un evento de enfoque como argumento de devolución de llamada                      |                     `function`                      |                 |
| onChange             | Se activa cuando el usuario cambia el valor de la entrada. Proporciona un evento de cambio como argumento de devolución de llamada         |                     `function`                      |                 |
| onFocus              | Se dispara cuando el control se enfoca. Proporciona un evento de enfoque como argumento de devolución de llamada                           |                     `function`                      |                 |
| onKeyDown            | Se dispara cuando se pulsa una tecla. Proporciona un evento de teclado como argumento de devolución de llamada                             |                     `function`                      |                 |
| onKeyUp              | Se dispara cuando se suelta una tecla. Proporciona un evento de teclado como argumento de devolución de llamada                            |                     `function`                      |                 |
| onUpdate             | Se activa cuando el usuario cambia el valor de la entrada. Proporciona un nuevo valor como argumento de devolución de llamada              |                     `function`                      |                 |
| alfiler              | La vista fronteriza del control                                                                                                            |                      `string`                       | `"round-round"` |
| marcador de posición | Texto que aparece en el control cuando no hay ningún valor establecido                                                                     |                      `string`                       |                 |
| qa                   | Atributo de identificación de prueba (`data-qa`)                                                                                           |                      `string`                       |                 |
| readOnly             | Indica que el usuario no puede cambiar el valor del control                                                                                |                      `boolean`                      |     `false`     |
| rema                 | El número de líneas de texto visibles del control. Si no se especifica, la altura se calculará automáticamente en función del contenido    |                      `number`                       |                 |
| tamaño               | El tamaño del control                                                                                                                      |                    `"s"` `"xl"`                     |      `"m"`      |
| tabIndex             | El `tabindex` atributo del control                                                                                                         |                      `string`                       |                 |
| tipo                 | El tipo de control                                                                                                                         |                      `string`                       |                 |
| validationState      | Estado de validación                                                                                                                       |                     `"invalid"`                     |                 |
| valor                | El valor del control                                                                                                                       |                      `string`                       |                 |
| vista                | La visión del control                                                                                                                      |                `"normal"` `"clear"`                 |   `"normal"`    |

## API CSS

| Nombre                              | Descripción                                                                   |
| :---------------------------------- | :---------------------------------------------------------------------------- |
| `--g-text-area-text-color`          | Color del texto                                                               |
| `--g-text-area-placeholder-color`   | Color del marcador de posición                                                |
| `--g-text-area-background-color`    | Color de fondo                                                                |
| `--g-text-area-border-radius`       | Radio de borde                                                                |
| `--g-text-area-border-width`        | Ancho del borde                                                               |
| `--g-text-area-border-color`        | Color del borde                                                               |
| `--g-text-area-border-color-hover`  | Color del borde si pasa el ratón por encima                                   |
| `--g-text-area-border-color-active` | Color del borde si está activo                                                |
| `--g-text-area-focus-outline-color` | Color del contorno si está enfocado (de forma predeterminada, no se presenta) |
