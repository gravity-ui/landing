<!--/GITHUB_BLOCK-->

El componente Accordion te permite crear paneles de contenido colapsables donde los usuarios pueden mostrar u ocultar secciones de información. Esto es útil para organizar grandes cantidades de contenido de forma compacta.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Ejemplo base

```tsx
<Accordion>
  <Accordion.Item summary="Primer elemento">Contenido del primer elemento</Accordion.Item>
  <Accordion.Item summary="Segundo elemento">Contenido del segundo elemento</Accordion.Item>
  <Accordion.Item summary="Tercer elemento">Contenido del tercer elemento</Accordion.Item>
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
            <Accordion.Item summary="Configuración" value="item1">
                Configura los ajustes de tu aplicación
            </Accordion.Item>
            <Accordion.Item summary="Notificaciones" value="item2">
                Gestiona las preferencias de notificación
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
      <Accordion.Item summary="Configuración" value="item1">
        Configura los ajustes de tu aplicación
      </Accordion.Item>
      <Accordion.Item summary="Notificaciones" value="item2">
        Gestiona las preferencias de notificación
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
                summary="Configuración"
                onUpdate={setItem1}
                value="item1"
                expanded={item1}
            >
                Configura los ajustes de tu aplicación
            </Accordion.Item>
            <Accordion.Item
                summary="Notificaciones"
                onUpdate={setItem2}
                value="item2"
                expanded={item2}
            >
                Gestiona las preferencias de notificación
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
      <Accordion.Item summary="Configuración" onUpdate={setItem1} value="item1" expanded={item1}>
        Configura los ajustes de tu aplicación
      </Accordion.Item>
      <Accordion.Item summary="Notificaciones" onUpdate={setItem2} value="item2" expanded={item2}>
        Gestiona las preferencias de notificación
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

## Tamaño

Utiliza la propiedad `size` para controlar el tamaño del `Accordion`. El tamaño predeterminado es `m`.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion size="m">
                <Accordion.Item summary="Tamaño mediano">Contenido para acordeón mediano</Accordion.Item>
            </Accordion>
            <Accordion size="l">
                <Accordion.Item summary="Tamaño grande">Contenido para acordeón grande</Accordion.Item>
            </Accordion>
            <Accordion size="xl">
                <Accordion.Item summary="Tamaño extra grande">
                    Contenido para acordeón extra grande
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion size="m">
    <Accordion.Item summary="Tamaño mediano">
        Contenido para acordeón mediano
    </Accordion.Item>
</Accordion>
<Accordion size="l">
    <Accordion.Item summary="Tamaño grande">
        Contenido para acordeón grande
    </Accordion.Item>
</Accordion>
<Accordion size="xl">
    <Accordion.Item summary="Tamaño extra grande">
        Contenido para acordeón extra grande
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Vista

`solid`: Vista principal con fondo (usada por defecto).

`top-bottom`: Vista con bordes superior e inferior.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';
```

export default function () {
    return (
        <>
            <Accordion view="solid">
                <Accordion.Item summary="Vista Sólida">Contenido con fondo sólido</Accordion.Item>
                <Accordion.Item summary="Otro Elemento">Más contenido</Accordion.Item>
            </Accordion>
            <Accordion view="top-bottom">
                <Accordion.Item summary="Vista Arriba-Abajo">
                    Contenido con bordes arriba y abajo
                </Accordion.Item>
                <Accordion.Item summary="Otro Elemento">Más contenido</Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion view="solid">
    <Accordion.Item summary="Vista Sólida">
        Contenido con fondo sólido
    </Accordion.Item>
    <Accordion.Item summary="Otro Elemento">
        Más contenido
    </Accordion.Item>
</Accordion>
<Accordion view="top-bottom">
    <Accordion.Item summary="Vista Arriba-Abajo">
        Contenido con bordes arriba y abajo
    </Accordion.Item>
    <Accordion.Item summary="Otro Elemento">
        Más contenido
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Posición de la Flecha

`end`: La flecha se posiciona al final del encabezado (usado por defecto).

`start`: La flecha se posiciona al inicio del encabezado.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion arrowPosition="end">
                <Accordion.Item summary="Flecha al Final">Contenido con flecha al final</Accordion.Item>
            </Accordion>
            <Accordion arrowPosition="start">
                <Accordion.Item summary="Flecha al Inicio">
                    Contenido con flecha al inicio
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion arrowPosition="end">
    <Accordion.Item summary="Flecha al Final">
        Contenido con flecha al final
    </Accordion.Item>
</Accordion>
<Accordion arrowPosition="start">
    <Accordion.Item summary="Flecha al Inicio">
        Contenido con flecha al inicio
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Múltiple

La propiedad `multiple` permite expandir varios elementos del acordeón simultáneamente.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion multiple>
            <Accordion.Item summary="Primer Elemento">Contenido del primer elemento</Accordion.Item>
            <Accordion.Item summary="Segundo Elemento">Contenido del segundo elemento</Accordion.Item>
            <Accordion.Item summary="Tercer Elemento">Contenido del tercer elemento</Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion multiple>
  <Accordion.Item summary="Primer Elemento">Contenido del primer elemento</Accordion.Item>
  <Accordion.Item summary="Segundo Elemento">Contenido del segundo elemento</Accordion.Item>
  <Accordion.Item summary="Tercer Elemento">Contenido del tercer elemento</Accordion.Item>
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
                            Botón de Resumen Personalizado
                        </Button>
                    )}
                </Accordion.Summary>
                Contenido con componente de resumen personalizado
            </Accordion.Item>
            <Accordion.Item summary="Resumen Regular">
                Contenido con prop de resumen regular
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
          Botón de Resumen Personalizado
        </Button>
      )}
    </Accordion.Summary>
    Contenido con componente de resumen personalizado
  </Accordion.Item>
  <Accordion.Item summary="Resumen Regular">Contenido con prop de resumen regular</Accordion.Item>
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
            <Accordion.Item summary="Elemento Activo">
                Este elemento está activo y se puede expandir
            </Accordion.Item>
            <Accordion.Item summary="Elemento Desactivado" disabled>
                Este elemento está desactivado y no se puede expandir
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item summary="Elemento Activo">Este elemento está activo y se puede expandir</Accordion.Item>
  <Accordion.Item summary="Elemento Desactivado" disabled>
    Este elemento está desactivado y no se puede expandir
  </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Propiedades

### Accordion

| Nombre          | Descripción                                        |            Tipo            |  Por defecto  |
| :-------------- | :------------------------------------------------- | :------------------------: | :-----------: |
| size          | Tamaño del Accordion                               |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | Apariencia del Accordion                           |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | Permite expandir múltiples elementos simultáneamente |         `boolean`          |  `false`  |
| arrowPosition | Posición del indicador de flecha                   |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | Valor por defecto para el estado no controlado     | `string` `string[]` `null` |               |
| value         | Valor actual para el estado controlado             | `string` `string[]` `null` |               |
| onUpdate      | Función de callback llamada cuando cambia el estado |         `Function`         |               |
| ariaLevel     | Nivel de encabezado para accesibilidad             |          `number`          |      `3`      |
| className     | Nombre de la clase CSS                             |          `string`          |               |
| qa            | Atributo `data-qa` de HTML, usado para pruebas     |          `string`          |               |

### Accordion.Item

| Nombre            | Descripción                                      |       Type        | Por defecto |
| :-------------- | :----------------------------------------------- | :---------------: | :---------: |
| value           | Identificador único para el elemento             |     `string`      |             |
| summary         | Encabezado del elemento del Accordion            | `React.ReactNode` |             |
| expanded        | Estado expandido controlado                      |     `boolean`     |             |
| defaultExpanded | Estado expandido por defecto                     |     `boolean`     |             |
| disabled        | Desactiva el elemento del Accordion              |     `boolean`     |   `false`   |
| keepMounted     | Mantiene el contenido en el DOM incluso cuando está colapsado |     `boolean`     |             |
| onUpdate        | Función de callback llamada cuando cambia el estado del elemento |    `Function`     |             |
| className       | Nombre de la clase CSS                           |     `string`      |             |
| qa              | Atributo `data-qa` de HTML, usado para pruebas   |     `string`      |             |

### Accordion.Summary

| Nombre     | Descripción                                                                             |                      Tipo                       |                                          Valor predeterminado                                          |
| :--------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | Función de renderizado de resumen personalizada                                                          | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | Atributo `data-qa` de HTML, utilizado para pruebas. Solo funciona si `qa` se pasa en Accordion.Item |                    `string`                     | `${accordion-item}-summary` si `qa` se pasa en Accordion.Item, `disclosure-summary` si no |

## API de CSS

| Nombre                           | Descripción                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | Relleno en línea (horizontal) para el acordeón |