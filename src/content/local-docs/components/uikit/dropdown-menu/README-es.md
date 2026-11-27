<!--GITHUB_BLOCK-->

# DropdownMenu

<!--/GITHUB_BLOCK-->

```tsx
import {DropdownMenu} from '@gravity-ui/uikit';
```

El componente de menú desplegable ofrece agrupaciones de elementos, submenús y un botón personalizable. Los elementos del menú desplegable se configuran con la `items` propiedad. De forma predeterminada, el conmutador de menú es un botón con el icono de puntos suspensivos (\*\*\*\*), que se puede anular con la propiedad. `renderSwitcher`

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    items={[
        {
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        items={[
            {
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  items={[
    {
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

## Elementos agrupados

`DropdownMenu` los elementos se pueden agrupar y separar visualmente de otros elementos del menú mediante la introducción de matrices de elementos de menú anidados en la `items` matriz.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    items={[
        [
            {
                action: () => console.log('Call'),
                text: 'Call',
            },
            {
                action: () => console.log('Send email'),
                text: 'Send email',
            },
        ],
        {
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        items={[
            [
                {
                    action: () => console.log('Call'),
                    text: 'Call',
                },
                {
                    action: () => console.log('Send email'),
                    text: 'Send email',
                },
            ],
            {
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  items={[
    [
      {
        action: () => console.log('Call'),
        text: 'Call',
      },
      {
        action: () => console.log('Send email'),
        text: 'Send email',
      },
    ],
    {
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

## Submenús

La `items` propiedad de un elemento de menú individual agrega subelementos anidados a dicho elemento.

Los elementos de menú con submenús reciben los siguientes nombres de clase adicionales para permitir un estilo adicional:

- `.g-dropdown-menu__menu-item_with-submenu`: Para artículos con más de un elemento anidado.
- `.g-dropdown-menu__menu-item_active-parent`: Para el elemento cuyo submenú está abierto actualmente.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    items={[
        {
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
        {
            text: 'More',
            items: [
                {
                    action: () => console.log('Mark as'),
                    text: 'Mark as',
                    items: [
                        {
                            action: () => console.log('Important'),
                            text: 'Important',
                        },
                        {
                            action: () => console.log('Favorite'),
                            text: 'Favorite',
                        },
                    ],
                },
                {
                    action: () => console.log('Copy'),
                    text: 'Copy',
                },
                {
                    text: 'Move to',
                    items: [
                        {
                            action: () => console.log('Location #1'),
                            text: 'Location #1',
                        },
                        {
                            action: () => console.log('Location #2'),
                            text: 'Location #2',
                        },
                    ],
                },
            ],
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        items={[
            {
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
            {
                text: 'More',
                items: [
                    {
                        action: () => console.log('Mark as'),
                        text: 'Mark as',
                        items: [
                            {
                                action: () => console.log('Important'),
                                text: 'Important',
                            },
                            {
                                action: () => console.log('Favorite'),
                                text: 'Favorite',
                            },
                        ],
                    },
                    {
                        action: () => console.log('Copy'),
                        text: 'Copy',
                    },
                    {
                        text: 'Move to',
                        items: [
                            {
                                action: () => console.log('Location #1'),
                                text: 'Location #1',
                            },
                            {
                                action: () => console.log('Location #2'),
                                text: 'Location #2',
                            },
                        ],
                    },
                ],
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  items={[
    {
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
    {
      text: 'More',
      items: [
        {
          action: () => console.log('Mark as'),
          text: 'Mark as',
          items: [
            {
              action: () => console.log('Important'),
              text: 'Important',
            },
            {
              action: () => console.log('Favorite'),
              text: 'Favorite',
            },
          ],
        },
        {
          action: () => console.log('Copy'),
          text: 'Copy',
        },
        {
          text: 'Move to',
          items: [
            {
              action: () => console.log('Location #1'),
              text: 'Location #1',
            },
            {
              action: () => console.log('Location #2'),
              text: 'Location #2',
            },
          ],
        },
      ],
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

## Alternar menú personalizado

Para configurar el conmutador de menú, utilice la `renderSwitcher` propiedad. Puede ser cualquier función que devuelva un componente de React (o cualquiera de los `(props: SwitcherProps) => React.ReactNode` términos de TypeScript, ver [`SwitcherProps`](#switcherprops) más abajo). De forma predeterminada, el conmutador de menú es un botón con el icono de puntos suspensivos ()**.**

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    renderSwitcher={(props) => (
        <div {...props} style={{cursor: 'pointer', borderBottom: '1px dotted'}}>John Doe</div>
    )}
    items={[
        {
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        renderSwitcher={(props) => (
            <div {...props} style={{cursor: 'pointer', borderBottom: '1px dotted'}}>John Doe</div>
        )}
        items={[
            {
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  renderSwitcher={(props) => (
    <div {...props} style={{cursor: 'pointer', borderBottom: '1px dotted'}}>
      John Doe
    </div>
  )}
  items={[
    {
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

El ejemplo anterior está demasiado simplificado para demostrar la idea del interruptor de menú personalizable. En una aplicación real, generalmente se recomienda que el interruptor del menú en el que se puede hacer clic sea un componente accesible con un teclado y otras tecnologías de asistencia, como un botón.

## Iconos personalizados

Puede añadir iconos personalizados a un `DropdownMenu` elemento mediante la `iconEnd` propiedad `iconStart` o. De forma predeterminada, los `DropdownMenu` elementos no tienen iconos.

Puede cambiar el icono de alternancia del menú con las `renderSwitcher` propiedades `DropdownMenu`del menú. De forma predeterminada, el conmutador de menú es un botón con el icono de puntos suspensivos ()**.**

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    renderSwitcher={(props) => (
        <Button {...props} view="flat">
            <Icon size={16} data={Bars} />
        </Button>
    )}
    items={[
        {
            iconStart: <Icon size={16} data={Pencil} />,
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            iconStart: <Icon size={16} data={TrashBin} />,
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        renderSwitcher={(props) => (
            <UIKit.Button {...props} view="flat">
                <UIKit.Icon
                    data={() => (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.25 3.25A.75.75 0 0 1 2 2.5h12A.75.75 0 0 1 14 4H2a.75.75 0 0 1-.75-.75Zm0 4.75A.75.75 0 0 1 2 7.25h12a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8ZM2 12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H2Z" clip-rule="evenodd"></path></svg>
                    )}
                    size={16}
                />
            </UIKit.Button>
        )}
        items={[
            {
                iconStart: (
                    <UIKit.Icon
                        data={() => (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M11.423 1A3.577 3.577 0 0 1 15 4.577c0 .27-.108.53-.3.722l-.528.529-1.971 1.971-5.059 5.059a3 3 0 0 1-1.533.82l-2.638.528a1 1 0 0 1-1.177-1.177l.528-2.638a3 3 0 0 1 .82-1.533l5.059-5.059 2.5-2.5c.191-.191.451-.299.722-.299Zm-2.31 4.009-4.91 4.91a1.5 1.5 0 0 0-.41.766l-.38 1.903 1.902-.38a1.5 1.5 0 0 0 .767-.41l4.91-4.91a2.077 2.077 0 0 0-1.88-1.88Zm3.098.658a3.59 3.59 0 0 0-1.878-1.879l1.28-1.28c.995.09 1.788.884 1.878 1.88l-1.28 1.28Z" clip-rule="evenodd"></path></svg>
                        )}
                        size={16}
                    />
                ),
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                iconStart: (
                    <UIKit.Icon
                        data={() => (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2Zm2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5H11Zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438l.315-7.562Zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0Zm3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"></path></svg>
                        )}
                        size={16}
                    />
                ),
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  renderSwitcher={(props) => (
    <Button {...props} view="flat">
      <Icon size={16} data={Bars} />
    </Button>
  )}
  items={[
    {
      iconStart: <Icon size={16} data={Pencil} />,
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      iconStart: <Icon size={16} data={TrashBin} />,
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre                     | Descripción                                                                                                               |                                    Tipo                                     |       Predeterminado        |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------: | :-------------------------: |
| `items`                    | Conjunto de artículos. Las matrices anidadas de elementos representan grupos separados visualmente.                       | `(Elemento del menú desplegable\| [[ Elemento del menú desplegable])]\| []` |                             |
| `data`                     | Carga útil proporcionada a las acciones ejecutadas desde el menú. (Esto puede resultar útil para los menús contextuales). |                                    `any`                                    |                             |
| `icon`                     | Icono del predeterminado `switcher`.                                                                                      |                              `React.ReactNode`                              | Icono de puntos suspensivos |
| `size`                     | Se aplica tanto al menú predeterminado `switcher` como al menú.                                                           |                          `'s'\| 'm'\| 'l'\| 'xl'`                           |            `'m'`            |
| `disabled`                 | Al establecer esta propiedad para que `true` se desactive el `switcher` botón y se impida que se abra el menú.            |                                  `boolean`                                  |                             |
| `renderSwitcher`           | Función de renderizado para el control de conmutación del menú.                                                           |                              `React.ReactNode`                              |                             |
| `switcherWrapperClassName` | Valor de la `className` propiedad `switcher`del componente principal.                                                     |                                  `string`                                   |                             |
| `defaultSwitcherProps`     | `switcher` Propiedades predeterminadas.                                                                                   |                                `ButtonProps`                                |                             |
| `defaultSwitcherClassName` | Valor de la `className` propiedad del valor predeterminado `switcher`.                                                    |                                  `string`                                   |                             |
| `menuProps`                | Anula las propiedades predeterminadas del menú desplegable emergente.                                                     |                                 `MenuProps`                                 |                             |
| `popupProps`               | Anula las propiedades predeterminadas de la ventana emergente.                                                            |                                `PopupProps`                                 |                             |
| `open`                     | Alterna la visibilidad del menú desplegable.                                                                              |                                  `boolean`                                  |                             |
| `onOpenToggle`             | Se llama cuando se abre o cierra el menú.                                                                                 |                                `() => void`                                 |                             |
| `onSwitcherClick`          | Se llama cuando `switcher` se hace clic en él.                                                                            |              `controlador de eventos React.mouse<HTMLElement>`              |                             |
| `hideOnScroll`             | Especifica si se debe ocultar el menú cuando se desplaza un elemento principal.                                           |                                  `boolean`                                  |           `true`            |
| `children`                 | Contenido personalizado dentro del menú emergente.                                                                        |                              `React.ReactNode`                              |                             |

### DropdownMenuItem

Este tipo describe los elementos individuales del menú desplegable.

| Nombre       | Descripción                                                                                                                                         |                                 Tipo                                  | Predeterminado |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------: | :------------: |
| `text`       | Contenido de los elementos del menú.                                                                                                                |                           `React.ReactNode`                           |                |
| `action`     | Controlador de clics en los elementos del menú. Obtiene los parámetros del componente principal del menú desplegable ( `event` tanto como `data`).  |            `(event: React.MouseEvent, data: any) => void`             |                |
| `iconStart`  | Icono del elemento del menú antes del contenido del elemento.                                                                                       |                           `React.ReactNode`                           |                |
| `iconEnd`    | Icono del elemento del menú después del contenido del elemento. Se ignora si el elemento tiene un submenú.                                          |                           `React.ReactNode`                           |                |
| `hidden`     | Determina si el elemento está oculto.                                                                                                               |                               `boolean`                               |                |
| `disabled`   | Determina si el elemento está desactivado.                                                                                                          |                               `boolean`                               |                |
| `href`       | El elemento del menú con esta propiedad se convierte en un enlace a la ubicación especificada.                                                      |                               `string`                                |                |
| `target`     | Igual que el `target` atributo de la `<a>` etiqueta.                                                                                                |                               `string`                                |                |
| `rel`        | Igual que el `rel` atributo de la `<a>` etiqueta.                                                                                                   |                               `string`                                |                |
| `extraProps` | Propiedades adicionales de los elementos del menú.                                                                                                  |                               `object`                                |                |
| `title`      | Texto de información sobre herramientas.                                                                                                            |                               `string`                                |                |
| `className`  | `class` Valor de atributo HTML.                                                                                                                     |                               `string`                                |                |
| `items`      | Elementos del submenú.                                                                                                                              | `(Elemento del menú desplegable\| [[Elemento del menú desplegable])]` |                |
| `popupProps` | Propiedades de la ventana emergente del submenú.                                                                                                    |                               `string`                                |                |
| `path`       | Ruta de los índices desde la raíz hasta el elemento actual.                                                                                         |                              `number[]`                               |                |
| `closeMenu`  | `closeMenu` Llamada personalizada. Puede invocarse en lugar de cerrar el menú principal y usarse para cerrar los submenús antes del menú principal. |                             `() => void`                              |                |

### SwitcherProps

| Nombre      | Descripción                                                                   |     Tipo     |
| :---------- | :---------------------------------------------------------------------------- | :----------: |
| `onClick`   | Se llama cuando se hace clic en el conmutador.                                | `() => void` |
| `onKeyDown` | Se llama cuando el conmutador está enfocado y se presiona la tecla de acción. | `() => void` |
