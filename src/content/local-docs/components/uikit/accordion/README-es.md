<!--GITHUB_BLOCK-->

# Accordion

<!--/GITHUB_BLOCK-->

El componente Accordion te permite crear paneles de contenido colapsables donde los usuarios pueden mostrar u ocultar secciones de información. Esto es útil para organizar grandes cantidades de contenido de forma compacta.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Base example

```tsx
<Accordion>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Controlar el estado del acordeón

Puedes controlar el estado del acordeón utilizando las propiedades `value` y `onUpdate` del componente raíz, o por elemento.

Ejemplo de control de estado desde el componente raíz:

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState<string | null>('item1');

    return (
        <Accordion value={value} onUpdate={setValue}>
            <Accordion.Item summary="Settings" value="item1">
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item summary="Notifications" value="item2">
                Manage notification preferences
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [value, setValue] = React.useState('item1');

  return (
    <Accordion value={value} onUpdate={setValue}>
      <Accordion.Item summary="Settings" value="item1">
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" value="item2">
        Manage notification preferences
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

Ejemplo de control de estado por elemento con la prop `expanded`:

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);

    return (
        <Accordion>
            <Accordion.Item
                summary="Settings"
                onUpdate={setItem1}
                value="item1"
                expanded={item1}
            >
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item
                summary="Notifications"
                onUpdate={setItem2}
                value="item2"
                expanded={item2}
            >
                Manage notification preferences
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [item1, setItem1] = React.useState(true);
  const [item2, setItem2] = React.useState(false);
  return (
    <Accordion>
      <Accordion.Item summary="Settings" onUpdate={setItem1} value="item1" expanded={item1}>
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" onUpdate={setItem2} value="item2" expanded={item2}>
        Manage notification preferences
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

## Tamaño

Usa la propiedad `size` para controlar el tamaño del `Accordion`. El tamaño predeterminado es `m`.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion size="m">
                <Accordion.Item summary="Medium Size">Content for medium accordion</Accordion.Item>
            </Accordion>
            <Accordion size="l">
                <Accordion.Item summary="Large Size">Content for large accordion</Accordion.Item>
            </Accordion>
            <Accordion size="xl">
                <Accordion.Item summary="Extra Large Size">
                    Content for extra large accordion
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion size="m">
    <Accordion.Item summary="Medium Size">
        Content for medium accordion
    </Accordion.Item>
</Accordion>
<Accordion size="l">
    <Accordion.Item summary="Large Size">
        Content for large accordion
    </Accordion.Item>
</Accordion>
<Accordion size="xl">
    <Accordion.Item summary="Extra Large Size">
        Content for extra large accordion
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Vista

`solid`: Vista principal con fondo (usada por defecto).

`top-bottom`: Vista con bordes superior e inferior.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion view="solid">
                <Accordion.Item summary="Solid View">Content with solid background</Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
            </Accordion>
            <Accordion view="top-bottom">
                <Accordion.Item summary="Top-Bottom View">
                    Content with top-bottom borders
                </Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion view="solid">
    <Accordion.Item summary="Solid View">
        Content with solid background
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
<Accordion view="top-bottom">
    <Accordion.Item summary="Top-Bottom View">
        Content with top-bottom borders
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Posición de la flecha

`end`: La flecha se posiciona al final del encabezado (usado por defecto).

`start`: La flecha se posiciona al principio del encabezado.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion arrowPosition="end">
                <Accordion.Item summary="Arrow at End">Content with arrow at the end</Accordion.Item>
            </Accordion>
            <Accordion arrowPosition="start">
                <Accordion.Item summary="Arrow at Start">
                    Content with arrow at the start
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion arrowPosition="end">
    <Accordion.Item summary="Arrow at End">
        Content with arrow at the end
    </Accordion.Item>
</Accordion>
<Accordion arrowPosition="start">
    <Accordion.Item summary="Arrow at Start">
        Content with arrow at the start
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Múltiple

La propiedad `multiple` permite que varios elementos del acordeón se expandan simultáneamente.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion multiple>
            <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
            <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
            <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion multiple>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Resumen Personalizado

Usa el componente `Accordion.Summary` para crear un encabezado personalizado.

<!--SANDBOX
import {Accordion, Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item value="custom">
                <Accordion.Summary>
                    {(props) => (
                        <Button {...props} view="flat" width="max">
                            Custom Summary Button
                        </Button>
                    )}
                </Accordion.Summary>
                Content with custom summary component
            </Accordion.Item>
            <Accordion.Item summary="Regular Summary">
                Content with regular summary prop
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item value="custom">
    <Accordion.Summary>
      {(props) => (
        <Button {...props} view="flat" width="max">
          <Icon data={Settings} size={16} />
          Custom Summary Button
        </Button>
      )}
    </Accordion.Summary>
    Content with custom summary component
  </Accordion.Item>
  <Accordion.Item summary="Regular Summary">Content with regular summary prop</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Estado Deshabilitado

Los elementos individuales del acordeón se pueden deshabilitar usando la propiedad `disabled`.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item summary="Active Item">
                This item is active and can be expanded
            </Accordion.Item>
            <Accordion.Item summary="Disabled Item" disabled>
                This item is disabled and cannot be expanded
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item summary="Active Item">This item is active and can be expanded</Accordion.Item>
  <Accordion.Item summary="Disabled Item" disabled>
    This item is disabled and cannot be expanded
  </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Propiedades

### Accordion

| Nombre          | Descripción                                        |            Tipo            |  Predeterminado  |
| :-------------- | :------------------------------------------------- | :------------------------: | :--------------: |
| size            | Tamaño del acordeón                                |     `"m"` `"l"` `"xl"`     |      `"m"`       |
| view            | Apariencia del acordeón                            |  `"solid"` `"top-bottom"`  |    `"solid"`     |
| multiple        | Permite que varios elementos se expandan simultáneamente |         `boolean`          |     `false`      |
| arrowPosition   | Posición del indicador de flecha                   |     `"start"` `"end"`      |      `"end"`       |
| defaultValue    | Valor predeterminado para el estado no controlado  | `string` `string[]` `null` |                  |
| value           | Valor actual para el estado controlado             | `string` `string[]` `null` |                  |
| onUpdate        | Función de devolución de llamada que se llama cuando cambia el estado |         `Function`         |                  |
| ariaLevel       | Nivel de encabezado para accesibilidad             |          `number`          |        `3`         |
| className       | Nombre de la clase CSS                             |          `string`          |                  |
| qa              | Atributo `data-qa` de HTML, usado para pruebas     |          `string`          |                  |

### Accordion.Item

| Nombre            | Descripción                                      |       Type        | Predeterminado |
| :-------------- | :----------------------------------------------- | :---------------: | :------------: |
| value             | Identificador único para el elemento             |     `string`      |                |
| summary           | Encabezado del elemento del acordeón            | `React.ReactNode` |                |
| expanded          | Estado expandido controlado                      |     `boolean`     |                |
| defaultExpanded   | Estado expandido predeterminado                  |     `boolean`     |                |
| disabled          | Deshabilita el elemento del acordeón            |     `boolean`     |     `false`      |
| keepMounted       | Mantiene el contenido en el DOM incluso cuando está colapsado |     `boolean`     |                |
| onUpdate          | Función de devolución de llamada que se llama cuando cambia el estado del elemento |    `Function`     |                |
| className         | Nombre de la clase CSS                           |     `string`      |                |
| qa                | Atributo `data-qa` de HTML, usado para pruebas   |     `string`      |                |

### Accordion.Summary

| Nombre     | Descripción                                                                             |                      Tipo                       |                                          Valor predeterminado                                          |
| :--------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | Función de renderizado de resumen personalizado                                                          | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | Atributo `data-qa` de HTML, utilizado para pruebas. Solo funciona si `qa` se pasa en Accordion.Item |                    `string`                     | `${accordion-item}-summary` si `qa` se pasa en Accordion.Item, `disclosure-summary` si no |

## API de CSS

| Nombre                           | Descripción                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | Relleno en línea (horizontal) para el acordeón |
