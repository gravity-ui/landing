<!--GITHUB_BLOCK-->

# Disclosure

<!--/GITHUB_BLOCK-->

`Disclosure` es un componente colapsable que permite mostrar y ocultar su contenido anidado.

```tsx
import {Disclosure} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Base example

```tsx
<Disclosure summary="Summary">Content</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Controlar el estado de expansión

Puedes controlar el estado de expansión usando las propiedades `expanded` y `onUpdate`.

Ejemplo de componente controlado:

<!--SANDBOX
import {Disclosure} from '@gravity-ui/uikit';

export default function () {
    return (
        <Disclosure summary="Summary" defaultExpanded>
            Content
        </Disclosure>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledDisclosure() {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <Disclosure summary="Summary" expanded={expanded} onUpdate={setExpanded}>
      Content
    </Disclosure>
  );
}
```

<!--/GITHUB_BLOCK-->

## Tamaño

Usa la propiedad `size` para controlar el tamaño de `Disclosure`. El tamaño predeterminado es `m`.

<!--SANDBOX
import {Disclosure, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure summary="Middle size" size="m">
                Content
            </Disclosure>
            <Disclosure summary="Large size" size="l">
                Content
            </Disclosure>
            <Disclosure summary="Extra large size" size="xl">
                Content
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Middle size" size="m">
  Content
</Disclosure>
<Disclosure summary="Large size" size="l">
  Content
</Disclosure>
<Disclosure summary="Extra large size" size="xl">
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Posición de la flecha

`start`: La flecha se posiciona al inicio del encabezado (usado por defecto).

`end`: La flecha se posiciona al final del encabezado.

<!--SANDBOX
import {Disclosure, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure summary="Summary with start arrow" arrowPosition="start">
                Content
            </Disclosure>
            <Disclosure summary="Summary with end arrow" arrowPosition="end">
                Content
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Summary with start arrow" arrowPosition="start">
  Content
</Disclosure>
<Disclosure summary="Summary with end arrow" arrowPosition="end">
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Contenido personalizado

Usa el componente `Disclosure.Summary` para crear un encabezado personalizado y `Disclosure.Details` para el contenido personalizado.

<!--SANDBOX
import {Check} from '@gravity-ui/icons';
import {Button, Disclosure, Flex, Icon} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure>
                <Disclosure.Summary>
                    {(props) => (
                        <Button {...props}>
                            <Icon data={Check} size={14} />
                            Custom summary
                            <Icon data={Check} size={14} />
                        </Button>
                    )}
                </Disclosure.Summary>
                <div>Custom details</div>
                <div>More custom details</div>
            </Disclosure>
            <Disclosure summary="Summary">
                <Disclosure.Summary>
                    {(_props, defaultButton) => (
                        <Flex gap={4}>
                            {defaultButton}
                            <Icon data={Check} size={14} />
                        </Flex>
                    )}
                </Disclosure.Summary>
                <Disclosure.Details>Custom Details</Disclosure.Details>
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure>
  <Disclosure.Summary>
    {(props) => (
      <Button {...props}>
        <Icon data={Check} size={14} />
        Custom summary
        <Icon data={Check} size={14} />
      </Button>
    )}
  </Disclosure.Summary>
  <div>Custom details</div>
  <div>More custom details</div>
</Disclosure>
```

```tsx
<Disclosure>
  <Disclosure.Summary>
    {(_props, defaultButton) => (
      <Flex gap={4}>
        {defaultButton}
        <Icon data={Check} size={14} />
      </Flex>
    )}
  </Disclosure.Summary>
  <Disclosure.Details>Custom Details</Disclosure.Details>
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Estado deshabilitado

`Disclosure` puede ser deshabilitado usando la propiedad `disabled`.

<!--SANDBOX
import {Disclosure} from '@gravity-ui/uikit';

export default function () {
    return (
        <Disclosure summary="Summary" disabled>
            Content
        </Disclosure>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Summary" disabled>
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Propiedades

### Disclosure

| Nombre             | Descripción                                                  | Tipo                                                  | Predeterminado |
| :--------------- | :----------------------------------------------------------- | :---------------------------------------------------- | :------------- |
| size             | Tamaño del componente                                        | `"m"` `"l"` `"xl"`                                    | `"m"`          |
| className        | Nombre de la clase CSS del elemento raíz                     | `string`                                              |                |
| disabled         | Estado deshabilitado                                         | `boolean`                                             | `false`        |
| defaultExpanded  | Estado de apertura predeterminado                            | `boolean`                                             | `false`        |
| expanded         | Estado de apertura controlado                                | `boolean`                                             |                |
| arrowPosition    | Controla la posición de la flecha                            | `"start"` `"end"`                                     | `"start"`      |
| summary          | Resumen del contenido                                        | `React.ReactNode`                                     |                |
| keepMounted      | Mantiene el contenido en el DOM incluso cuando está colapsado | `boolean`                                             | `true`         |
| onUpdate         | Se llama a la función de devolución de llamada cuando cambia el estado de expansión/colapso. | `(expanded: boolean) => void`                         |                |
| onSummaryKeyDown | Se llama a la función de devolución de llamada en eventos de teclado cuando el resumen tiene el foco. | `(e: React.KeyboardEvent<HTMLButtonElement>) => void` |                |
| children         | Contenido                                                    | `React.ReactNode`                                     |                |
| qa               | Identificador de prueba                                      | `string`                                              |                |

### Disclosure.Summary

| Nombre     | Descripción                                      | Tipo                                            | Predeterminado |
| :------- | :----------------------------------------------- | :---------------------------------------------- | :------------- |
| children | Función de renderizado                           | `(props, defaultSummary) => React.ReactElement` |                |
| qa       | Identificador de prueba                          | `string`                                        | `disclosure-summary` |

### Disclosure.Details

| Nombre     | Descripción     | Tipo              | Por defecto              |
| :--------- | :-------------- | :---------------- | :----------------------- |
| children | Contenido         | `React.ReactNode` |                          |
| qa       | Identificador de prueba | `string`          | `disclosure-details` |

## API CSS

| Nombre                                 | Descripción                                          |
| :----------------------------------- | :--------------------------------------------------- |
| `--g-disclosure-text-color`          | Color del texto para el resumen del contenido                   |
| `--g-disclosure-text-color-disabled` | Color del texto para el resumen del contenido en estado deshabilitado |
