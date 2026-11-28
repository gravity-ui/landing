GRAVITY_TRANSLATION_BLOCK_0_END

Use an `ActionsPanel` para renderizar múltiples botones en una fila.
Cuando no hay suficiente espacio, los botones que no caben se añadirán a un menú de desbordamiento.
El desbordamiento utiliza `Menu`; `menu.item` acepta `MenuItemProps`.

## Ejemplo

GRAVITY_TRANSLATION_BLOCK_1_END

```jsx
<ActionsPanel
  actions={[
    {
      id: 'action1',
      button: { props: { children: 'Action 1' } },
    },
    {
      id: 'action2',
      button: { props: { children: 'Action 2' } },
    },
    {
      id: 'action3',
      button: { props: { children: 'Action 3' } },
    },
    {
      id: 'action4',
      button: { props: { children: 'Action 4' } },
    },
    {
      id: 'action5',
      button: { props: { children: 'Action 5' } },
      menu: {
        item: {
          children: 'Action 5 Menu',
        },
      },
    },
  ]}
/>
```

GRAVITY_TRANSLATION_BLOCK_2_END

## Iconos de acción

Use las propiedades de `Button` o `menu.item` para establecer iconos.

GRAVITY_TRANSLATION_BLOCK_3_END

```jsx
<ActionsPanel
  actions={[
    {
      id: 'action1',
      button: {
        props: {
          'aria-label': 'Action 1',
          children: <IconSearch />,
        },
      },
    },
    {
      id: 'action2',
      button: {
        props: {
          'aria-label': 'Action 2',
          children: <IconAdd />,
        },
      },
      menu: {
        item: {
          children: 'Action 2 Menu',
          leadingIcon: <IconAdd />,
        },
      },
    },
  ]}
/>
```

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Nota

Use la propiedad `renderNote` para renderizar una nota.

GRAVITY_TRANSLATION_BLOCK_6_END

```jsx
<ActionsPanel
  actions={[
    {
      id: 'action1',
      button: { props: { children: 'Action 1' } },
    },
  ]}
  renderNote={() => <Text>This is a note.</Text>}
/>
```

GRAVITY_TRANSLATION_BLOCK_7_END

## Grupos en el menú de desbordamiento

Use `action.menu.group` para agrupar acciones en el menú de desbordamiento.

GRAVITY_TRANSLATION_BLOCK_8_END

```jsx
<ActionsPanel
  actions={[
    {
      id: 'action1',
      button: { props: { children: 'Action 1' } },
      menu: {
        item: { children: 'Action 1 Menu' },
        group: 'Group 1',
      },
    },
    {
      id: 'action2',
      button: { props: { children: 'Action 2' } },
      menu: {
        item: { children: 'Action 2 Menu' },
        group: 'Group 1',
      },
    },
    {
      id: 'action3',
      button: { props: { children: 'Action 3' } },
      menu: {
        item: { children: 'Action 3 Menu' },
        group: 'Group 2',
      },
    },
  ]}
/>
```

GRAVITY_TRANSLATION_BLOCK_9_END

## Submenú de acción y menú anidado

Pase un `Menu` como hijo directo de `menu.item.children` para añadir un submenú. Un botón de acción visible utiliza el mismo submenú.

GRAVITY_TRANSLATION_BLOCK_10_END

```jsx
<ActionsPanel
  actions={[
    {
      id: 'action1',
      button: { props: { children: 'Action 1' } },
      menu: {
        item: {
          children: 'Action 1 Menu',
          children: (
            <Menu>
              <Menu.Item>Submenu 1</Menu.Item>
              <Menu.Item>Submenu 2</Menu.Item>
            </Menu>
          ),
        },
      },
    },
  ]}
/>
```

## Propiedades

| Nombre          | Descripción                                               |          Tipo           | Default |
| :-------------- | :-------------------------------------------------------- | :---------------------: | :-----: |
| actions       | Array de acciones                                          |  `ActionsPanelItem[]`   |         |
| onClose       | Manejador de clics opcional para el botón de cierre                       |      `() => void`       |         |
| renderNote    | Propiedad de renderizado opcional para mostrar el contenido de una nota | `() => React.ReactNode` |         |
| className     | Atributo `class` opcional de HTML                           |        `string`         |         |
| noteClassName | Atributo `class` opcional de HTML                           |        `string`         |         |
| maxRowActions | Número máximo de acciones en una fila                        |        `number`         |   `4`   |

## ActionsPanelItem

| Nombre      | Descripción                                        |                  Type                   | Default |
| :---------- | :------------------------------------------------- | :-------------------------------------: | :-----: |
| id        | ID único de la acción                                   |                `string`                 |         |
| menu      | Configuración para la acción en el menú de desbordamiento               | `{item: MenuItemProps; group?: string}` |         |
| button    | Configuración para la acción de botón                         |         `{props: ButtonProps}`          |         |
| collapsed | Si es verdadero, entonces el elemento siempre está dentro del menú de desbordamiento |                `boolean`                |         |