<!--GITHUB_BLOCK-->

# Tabs components

<!--/GITHUB_BLOCK-->

Los componentes de pestañas se utilizan para explorar, organizar contenido y cambiar entre diferentes vistas.

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

<!--SANDBOX
import {useState} from 'react';
import {Tab, TabList, TabPanel, TabProvider} from '@gravity-ui/uikit';

export default function () {
    const [activeTab, setActiveTab] = useState('second');

    return (
        <TabProvider value={activeTab} onUpdate={setActiveTab}>
            <TabList>
                <Tab value="first">First Tab</Tab>
                <Tab value="second">Active Tab</Tab>
                <Tab value="third" disabled>
                    Disabled Tab
                </Tab>
            </TabList>
            <div>
                <TabPanel value="first">First Panel</TabPanel>
                <TabPanel value="second">Second Panel</TabPanel>
                <TabPanel value="third">Third Panel</TabPanel>
            </div>
        </TabProvider>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [activeTab, setActiveTab] = React.useState('second');

return (
  <TabProvider value={activeTab} onUpdate={setActiveTab}>
    <TabList>
      <Tab value="first">First Tab</Tab>
      <Tab value="second">Active Tab</Tab>
      <Tab value="third" disabled>
        Disabled Tab
      </Tab>
    </TabList>
    <div>
      <TabPanel value="first">First Panel</TabPanel>
      <TabPanel value="second">Second Panel</TabPanel>
      <TabPanel value="third">Third Panel</TabPanel>
    </div>
  </TabProvider>
);
```

<!--/GITHUB_BLOCK-->

### Componentes

- [TabProvider](#tabprovider)
- [TabList](#tablist)
- [Tab](#tab)
- [TabPanel](#tabpanel)

## TabProvider

Un componente que proporciona la funcionalidad de selección de pestañas.

## Propiedades

| Nombre     | Descripción                                              |           Tipo            | Predeterminado |
| :------- | :------------------------------------------------------- | :-----------------------: | :-----: |
| children | Lista de pestañas y paneles de pestañas, probablemente con algunos envoltorios |     `React.ReactNode`     |         |
| value    | Valor de la pestaña activa                                         |         `string`          |         |
| onUpdate | Manejador de actualización de pestañas                                       | `(value: string) => void` |         |

## TabList

Componente que sirve como contenedor para un conjunto de `tabs`.

### Tamaño

Para controlar el tamaño de las `tabs`, utiliza la propiedad `size`. El tamaño predeterminado es `m`.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TabList value="second" size="m">
                <Tab value="first">M Size first</Tab>
                <Tab value="second">M Size second</Tab>
            </TabList>
            <TabList value="second" size="l">
                <Tab value="first">L Size first</Tab>
                <Tab value="second">L Size second</Tab>
            </TabList>
            <TabList value="second" size="xl">
                <Tab value="first">XL Size first</Tab>
                <Tab value="second">v Size second</Tab>
            </TabList>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="second" size="m">
    <Tab value="first">M Size first</Tab>
    <Tab value="second">M Size second</Tab>
</TabList>
<TabList value="second" size="l">
    <Tab value="first">L Size first</Tab>
    <Tab value="second">L Size second</Tab>
</TabList>
<TabList value="second" size="xl">
    <Tab value="first">XL Size first</Tab>
    <Tab value="second">v Size second</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Propiedades

`TabList` acepta cualquier prop válido de elemento `div` además de estos:

| Nombre            | Descripción                                                                            |               Tipo               | Predeterminado  |
| :-------------- | :------------------------------------------------------------------------------------- | :------------------------------: | :------: |
| children        | Lista de pestañas, probablemente con algunos envoltorios                                              |        `React.ReactNode`         |          |
| value           | Valor de la pestaña activa                                                                       |             `string`             |          |
| onUpdate        | Manejador de actualización de pestañas                                                                     |    `(value: string) => void`     |          |
| className       | Clase CSS del elemento                                                                   |             `string`             |          |
| activateOnFocus | Activar pestaña al enfocar. Utiliza esto solo si el contenido del panel se puede mostrar inmediatamente   |            `boolean`             | `false`  |
| size            | Tamaño del elemento                                                                       |        `"m"` `"l"` `"xl"`        |  `"m"`   |
| contentOverflow | Cómo tratar los elementos que no caben horizontalmente (envolver, desplazar o un menú **Más**) | `"wrap"` `"scroll"` `"collapse"` | `"wrap"` |
| moreLabel       | Etiqueta para el disparador de desbordamiento de colapso cuando la pestaña activa es visible en la lista     |        `React.ReactNode`         | `"More"` |
| qa              | Atributo `data-qa` de HTML, utilizado en pruebas                                                |             `string`             |          |

## Tab

Este componente se utiliza para renderizar elementos de pestaña.

### Icono

Se utiliza si necesitas mostrar un icono para un elemento de pestaña.

<!--SANDBOX
import {Gear} from '@gravity-ui/icons';
import {Icon, Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" icon={<Icon size={16} data={Gear} />}>
                Tab with icon
            </Tab>
            <Tab value="second">Tab without icon</Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" icon={<Icon size={16} data={GearIcon} />}>
    Tab with icon
  </Tab>
  <Tab value="second">Tab without icon</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Estados

El elemento de pestaña tiene un indicador de deshabilitado.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first">First Tab</Tab>
            <Tab value="second" disabled>
                Disabled Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first">First Tab</Tab>
  <Tab value="second" disabled>
    Disabled Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Contador

Se utiliza si necesitas mostrar un número para un elemento de pestaña.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" counter={13}>
                First Tab
            </Tab>
            <Tab value="second" counter={3}>
                Second Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" counter={13}>
    First Tab
  </Tab>
  <Tab value="second" counter={3}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Etiqueta

Se utiliza si necesitas mostrar una etiqueta para un elemento de pestaña.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" label={{content: 'Label 1'}}>
                First Tab
            </Tab>
            <Tab value="second" label={{content: 'Label 2'}}>
                Second Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" label={{content: 'Label 1'}}>
    First Tab
  </Tab>
  <Tab value="second" label={{content: 'Label 2'}}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Desbordamiento de contenido

Se utiliza si necesitas colapsar elementos de pestaña.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
    <Tab value="first">First Tab</Tab>
    <Tab value="second">Second Tab</Tab>
    <Tab value="third">Third Tab</Tab>
    <Tab value="fourth">Fourth Tab</Tab>
    <Tab value="fifth">Fifth Tab</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
        <UIKit.Tab value="first">First Tab</UIKit.Tab>
        <UIKit.Tab value="second">Second Tab</UIKit.Tab>
        <UIKit.Tab value="third">Third Tab</UIKit.Tab>
        <UIKit.Tab value="fourth">Fourth Tab</UIKit.Tab>
        <UIKit.Tab value="fifth">Fifth Tab</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
  <Tab value="first">First Tab</Tab>
  <Tab value="second">Second Tab</Tab>
  <Tab value="third">Third Tab</Tab>
  <Tab value="fourth">Fourth Tab</Tab>
  <Tab value="fifth">Fifth Tab</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Propiedades

`Tab` acepta cualquier prop válido de elemento `button` o `a` además de estos:

| Nombre  | Descripción                                |        Tipo         | Por defecto |
| :------ | :----------------------------------------- | :-----------------: | :---------: |
| value   | Valor de la pestaña                        |      `string`       |             |
| title   | Título de la pestaña                       |      `string`       |             |
| icon    | Icono mostrado al principio                |  `React.ReactNode`  |             |
| counter | Contenido mostrado al final                |  `number` `string`  |             |
| href    | Una URL a la que enlazar.                  |      `string `      |             |
| label   | `<Label>` mostrado al final                |  `React.ReactNode`  |             |
| disabled| Estado inactivo                            |      `boolean`      |             |
| component | Sobrescribe el componente raíz           | `React.ElementType` |             |
| children| Contenido de la pestaña                    |  `React.ReactNode`  |             |
| qa      | Atributo `data-qa` de HTML, usado en pruebas |      `string`       |             |

## TabPanel

Es un elemento contenedor para el contenido asociado a una pestaña.

### Propiedades

`TabPanel` acepta cualquier prop válida del elemento `div` además de estas:

| Nombre  | Descripción             |       Type        | Por defecto |
| :------ | :---------------------- | :---------------: | :---------: |
| children| Contenido del panel     | `React.ReactNode` |             |
| value   | Valor de la pestaña activa |     `string`      |             |
| qa      | Atributo `data-qa` de HTML, usado en pruebas |     `string`      |             |

## API CSS

| Nombre                             | Descripción                |
| :------------------------------- | :------------------------- |
| `--g-tabs-border-width`          | Ancho del borde de las pestañas |
| `--g-tabs-item-height`           | Altura del ítem de las pestañas |
| `--g-tabs-item-border-width`     | Ancho del borde del ítem de las pestañas |
| `--g-tabs-item-gap`              | Distancia entre pestañas   |
| `--g-tabs-vertical-item-height`  | Altura del ítem vertical de las pestañas |
| `--g-tabs-vertical-item-padding` | Relleno del ítem vertical de las pestañas |
