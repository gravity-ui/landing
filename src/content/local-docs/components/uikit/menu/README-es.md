# Menú

El componente `Menu` muestra una lista de opciones en el `Popup` al interactuar con su disparador, típicamente un botón.

Hay una colección de componentes relacionados:

- `Menu` - el contenedor del menú
- `MenuItem` - una opción para seleccionar del menú
- `MenuDivider` - un divisor para agrupar opciones
- `MenuTrigger` - un disparador predeterminado incorporado, `Button` con un ícono de elipsis

## Uso básico

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function BasicMenu() {
  return (
    <Menu trigger={<MenuTrigger />}>
      <MenuItem>Copiar</MenuItem>
      <MenuItem>Mover</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Eliminar</MenuItem>
    </Menu>
  );
}
```

## Disparador personalizado

Puedes renderizar cualquier tipo de componente como disparador si acepta `basic HTMLAttributes` como props y una `ref` para `HTMLElement`.
Para componentes más complejos, puedes usar una variante de función del prop `trigger` que tiene `triggerProps` como primer argumento
y `triggerRef` como segundo argumento, que debes pasar a tu componente.

## Menú contextual

Para implementar el patrón de menú contextual, debes usar un "elemento virtual" como disparador:

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function ContextMenu() {
  const [trigger, setTrigger] = React.useState(null);

  React.useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      setTrigger({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: event.clientX,
            y: event.clientY,
            top: event.clientY,
            right: event.clientX,
            bottom: event.clientY,
            left: event.clientX,
          };
        },
      });
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <Menu trigger={trigger}>
      <MenuItem>Copiar</MenuItem>
      <MenuItem>Mover</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Eliminar</MenuItem>
    </Menu>
  );
}
```

## Modo en línea

Por defecto, `Menu` se renderiza dentro del `Popup`. Pero puedes renderizarlo en línea usando el prop `inline` en tu propio contenedor.

## Propiedades

| Nombre            | Descripción                                     |                                              Tipo                                               |     Por defecto      |
| :-------------- | :---------------------------------------------- | :---------------------------------------------------------------------------------------------: | :--------------: |
| className       | Atributo `class` de HTML                          |                                            `string`                                             |                  |
| style           | Atributo `style` de HTML                          |                                      `React.CSSProperties`                                      |                  |
| aria-label      | Nombre accesible para el menú                    |                                            `string`                                             |                  |
| aria-labelledby | ID de un elemento que nombra el menú            |                                            `string`                                             |                  |
| qa              | ID de prueba (atributo `data-qa`)                   |                                            `string`                                             |                  |
| open            | Estado controlado para `open`                     |                                            `boolean`                                            |                  |
| defaultOpen     | Estado no controlado para `open`                   |                                            `boolean`                                            |                  |
| children        | Componentes relacionados con el menú (ítems, divisores, etc.) |                                        `React.ReactNode`                                        |                  |
| disabled        | Estado deshabilitado                                  |                                            `boolean`                                            |     `false`      |
| inline          | Renderiza el menú en línea                         |                                            `boolean`                                            |     `false`      |
| trigger         | Elemento disparador que abre el menú            | `React.ReactElement` `(triggerProps, triggerRef) => React.ReactElement` `VirtualElement` `null` |                  |
| placement       | Posicionamiento del popup                          |                                        `PopupPlacement`                                         | `"bottom-start"` |
| onOpenChange    | Callback para el cambio de estado de `open`                |                `(open: boolean, event: Event, reason: OpenChangeReason) => void`                |                  |
| size            | El tamaño del `Menu`                                 |                                    `"s"` `"m"` `"l"` `"xl"`                                     |      `"m"`       |

### MenuItem

Cuando se pasa un `Icon` sin un tamaño explícito a la propiedad `icon`, su tamaño se selecciona
automáticamente según el tamaño del `Menu`. Establezca explícitamente el `size`, `width` o `height`
del `Icon` para anularlo.

`MenuItem` acepta cualquier prop válida de elemento `button` o `a` además de estas:

| Nombre      | Descripción                         |                                Type                                |  Default   |
| :-------- | :---------------------------------- | :----------------------------------------------------------------: | :--------: |
| qa        | ID de prueba (atributo `data-qa`)   |                              `string`                              |            |
| theme     | El tema de `MenuItem`               | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` | `"normal"` |
| selected  | Estado seleccionado (`menuitemcheckbox`) |                             `boolean`                              |            |
| disabled  | Estado deshabilitado                |                             `boolean`                              |  `false`   |
| icon      | Slot de renderizado para un icono   |                        `React.ReactElement`                        |            |
| arrow     | Slot de renderizado para una flecha de menú anidado |                        `React.ReactElement`                        |            |
| children  | Contenido                           |                         `React.ReactNode`                          |            |
| component | Componente raíz personalizado       |                        `React.ElementType`                         |            |

### MenuTrigger

`MenuTrigger` acepta cualquier prop del componente `Button` además de estas:

| Nombre | Descripción             |            Type             |    Default     |
| :--- | :---------------------- | :-------------------------: | :------------: |
| icon | Tipo de icono a mostrar | `"horizontal"` `"vertical"` | `"horizontal"` |