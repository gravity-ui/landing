<!--GITHUB_BLOCK-->

# Componentes de pestañas

<!--/GITHUB_BLOCK-->

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

Los componentes de pestañas se utilizan para explorar, organizar el contenido y cambiar entre diferentes vistas.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<TabProvider value={activeTab} onUpdate={setActiveTab}>
    <TabList>
        <Tab value="first">First Tab</Tab>
        <Tab value="second">Active Tab</Tab>
        <Tab value="third" disabled>Disabled Tab</Tab>
    </TabList>
    <div>
        <TabPanel value="first">First Panel</TabPanel>
        <TabPanel value="second">Second Panel</TabPanel>
        <TabPanel value="third">Third Panel</TabPanel>
    </div>
</TabProvider>
`}
>
    <UIKit.TabProvider value="first">
        <UIKit.TabList>
            <UIKit.Tab value="first">First Tab</UIKit.Tab>
            <UIKit.Tab value="second">Active Tab</UIKit.Tab>
            <UIKit.Tab value="third" disabled>Disabled Tab</UIKit.Tab>
        </UIKit.TabList>
        <div>
            <UIKit.TabPanel value="first">First Panel</UIKit.TabPanel>
            <UIKit.TabPanel value="second">Second Panel</UIKit.TabPanel>
            <UIKit.TabPanel value="third">Third Panel</UIKit.TabPanel>
        </div>
    </UIKit.TabProvider>
</ExampleBlock>

LANDING_BLOCK-->

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
- [pestaña](#tab)
- [TabPanel](#tabpanel)

## TabProvider

Un componente que proporciona la funcionalidad de selección de pestañas

### Propiedades

| Nombre   | Descripción                                                                    |           Tipo            | Predeterminado |
| :------- | :----------------------------------------------------------------------------- | :-----------------------: | :------------: |
| niños    | Lista de pestañas y paneles de pestañas, probablemente con algunos envoltorios |     `React.ReactNode`     |                |
| valor    | Valor de pestaña activa                                                        |         `string`          |                |
| onUpdate | Actualizar el controlador de pestañas                                          | `(value: string) => void` |                |

## TabList

Componente que sirve de contenedor para un conjunto de `tabs`

### Tamaño

Para controlar el tamaño del `tabs` uso de la `size` propiedad. El tamaño predeterminado es `m`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
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
`}
>
    <UIKit.TabList value="second" size="m">
        <UIKit.Tab value="first">M Size first</UIKit.Tab>
        <UIKit.Tab value="second">M Size second</UIKit.Tab>
    </UIKit.TabList>

    <UIKit.TabList value="second" size="l">
        <UIKit.Tab value="first">L Size first</UIKit.Tab>
        <UIKit.Tab value="second">L Size second</UIKit.Tab>
    </UIKit.TabList>

    <UIKit.TabList value="second" size="xl">
        <UIKit.Tab value="first">XL Size first</UIKit.Tab>
        <UIKit.Tab value="second">v Size second</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>

LANDING_BLOCK-->

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

| Nombre          | Descripción                                                                                        |           Tipo            | Predeterminado |
| :-------------- | :------------------------------------------------------------------------------------------------- | :-----------------------: | :------------: |
| niños           | Lista de pestañas, probablemente con algunos envoltorios                                           |     `React.ReactNode`     |                |
| valor           | Valor de pestaña activa                                                                            |         `string`          |                |
| onUpdate        | Actualizar el controlador de pestañas                                                              | `(value: string) => void` |                |
| className       | Clase CSS del elemento                                                                             |         `string`          |                |
| activateOnFocus | Activa la pestaña al enfocar. Úselo solo si el contenido del panel se puede mostrar inmediatamente |         `boolean`         |    `false`     |
| tamaño          | Tamaño del elemento                                                                                |       `"m"` `"xl"`        |     `"m"`      |
| qa              | `data-qa` Atributo HTML, usado en las pruebas                                                      |         `string`          |                |

## pestaña

Este componente se usa para renderizar elementos de pestañas.

### Icono

Se usa si necesita mostrar un icono para un elemento de pestaña.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first">
    <Tab value="first" icon={<Icon size={16} data={GearIcon} />}>Tab with icon</Tab>
    <Tab value="second">Tab without icon</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first">
        <UIKit.Tab
            icon={
                <UIKit.Icon data={() => (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M7.199 2H8.8a.2.2 0 0 1 .2.2c0 1.808 1.958 2.939 3.524 2.034a.199.199 0 0 1 .271.073l.802 1.388a.199.199 0 0 1-.073.272c-1.566.904-1.566 3.164 0 4.069a.199.199 0 0 1 .073.271l-.802 1.388a.199.199 0 0 1-.271.073C10.958 10.863 9 11.993 9 13.8a.2.2 0 0 1-.199.2H7.2a.199.199 0 0 1-.2-.2c0-1.808-1.958-2.938-3.524-2.034a.199.199 0 0 1-.272-.073l-.8-1.388a.199.199 0 0 1 .072-.271c1.566-.905 1.566-3.165 0-4.07a.199.199 0 0 1-.073-.271l.801-1.388a.199.199 0 0 1 .272-.073C5.042 5.138 7 4.007 7 2.2c0-.11.089-.199.199-.199ZM5.5 2.2c0-.94.76-1.7 1.699-1.7H8.8c.94 0 1.7.76 1.7 1.7a.85.85 0 0 0 1.274.735 1.699 1.699 0 0 1 2.32.622l.802 1.388c.469.813.19 1.851-.622 2.32a.85.85 0 0 0 0 1.472 1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.699 1.699 0 0 1-2.32.622.85.85 0 0 0-1.274.735c0 .939-.76 1.7-1.699 1.7H7.2a1.7 1.7 0 0 1-1.699-1.7.85.85 0 0 0-1.274-.735 1.698 1.698 0 0 1-2.32-.622l-.802-1.388a1.699 1.699 0 0 1 .622-2.32.85.85 0 0 0 0-1.471 1.699 1.699 0 0 1-.622-2.321l.801-1.388a1.699 1.699 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2Zm4 5.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd"></path></svg>
                )} size={16} />
            }
            value="first"
        >
            Tab with icon
        </UIKit.Tab>
        <UIKit.Tab value="second">Tab without icon</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

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

El elemento de la pestaña tiene el indicador desactivado.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first">
    <Tab value="first" >First Tab</Tab>
    <Tab value="second" disabled>Disabled Tab</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first">
        <UIKit.Tab value="first">First Tab</UIKit.Tab>
        <UIKit.Tab disabled value="second">Disabled Tab</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

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

Se usa si necesita mostrar un número para un elemento de pestañas.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first">
    <Tab value="first" counter={13}>First Tab</Tab>
    <Tab value="second" counter={3}>Second Tab</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first">
        <UIKit.Tab value="first" counter={13}>First Tab</UIKit.Tab>
        <UIKit.Tab value="second" counter={3}>Second Tab</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

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

Se usa si necesita mostrar una etiqueta para un elemento de pestañas.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first">
    <Tab value="first" label={{content: 'Label 1'}}>First Tab</Tab>
    <Tab value="second" label={{content: 'Label 2'}}>Second Tab</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first">
        <UIKit.Tab value="first" label={{content: 'Label 1'}}>First Tab</UIKit.Tab>
        <UIKit.Tab value="second" label={{content: 'Label 2'}}>Second Tab</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

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

### Propiedades

| Nombre       | Descripción                                   |       Tipo        | Predeterminado |
| :----------- | --------------------------------------------- | :---------------: | :------------: |
| valor        | Valor de tabulación                           |     `string`      |                |
| título       | Título de la pestaña                          |     `string`      |                |
| icono        | Icono que se muestra al inicio                | `React.ReactNode` |                |
| mostrador    | Contenido que se muestra al final             | `number` `string` |                |
| href         | Una URL a la que vincular.                    |     `string`      |                |
| etiqueta     | `<Label>` se muestra al final                 | `React.ReactNode` |                |
| inhabilitado | Estado inactivo                               |     `boolean`     |                |
| niños        | Contenido de la pestaña                       | `React.ReactNode` |                |
| qa           | `data-qa` Atributo HTML, usado en las pruebas |     `string`      |                |

## TabPanel

Es un elemento contenedor para el contenido asociado a una pestaña

### Propiedades

| Nombre | Descripción                                   |       Tipo        | Predeterminado |
| :----- | :-------------------------------------------- | :---------------: | :------------: |
| niños  | Contenido del panel                           | `React.ReactNode` |                |
| valor  | Valor de pestaña activa                       |     `string`      |                |
| qa     | `data-qa` Atributo HTML, usado en las pruebas |     `string`      |                |

## API CSS

| Nombre                           | Descripción                                  |
| :------------------------------- | :------------------------------------------- |
| `--g-tabs-border-width`          | Ancho del borde de las pestañas              |
| `--g-tabs-item-height`           | Altura del elemento de pestañas              |
| `--g-tabs-item-border-width`     | Ancho del borde del elemento de pestañas     |
| `--g-tabs-item-gap`              | Distancia entre pestañas                     |
| `--g-tabs-vertical-item-height`  | Altura vertical del elemento de las pestañas |
| `--g-tabs-vertical-item-padding` | Relleno vertical de elementos con pestañas   |
