GRAVITY_TRANSLATION_BLOCK_0_END

El componente `Drawer` es un elemento de interfaz versátil utilizado en aplicaciones web para proporcionar un panel deslizante que emerge del borde de la pantalla. Este panel puede albergar navegaciones, herramientas o contenido adicional. El componente se implementa utilizando React y transiciones CSS para animaciones fluidas.

```tsx
import {Drawer} from '@gravity-ui/uikit';
```

## Uso

Aquí tienes un ejemplo sencillo de cómo usar el componente `Drawer`:

```tsx
import React from 'react';
import {Drawer} from '@gravity-ui/uikit';

const App = () => {
  const [isVisible, setVisible] = React.useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Abrir Drawer</button>
      <Drawer onOpenChange={setVisible} open={isVisible}>
        <p>Contenido del drawer</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## Ubicación

Para controlar la ubicación del `Drawer`, puedes pasar la prop `placement`. Los valores posibles son `left`, `right`, `top` y `bottom`.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} placement="left">
  <p>Contenido del drawer</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="right">
  <p>Contenido del drawer</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="top">
  <p>Contenido del drawer</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="bottom">
  <p>Contenido del drawer</p>
</Drawer>
```

## Animación

Por defecto, el `Drawer` se desliza hacia adentro y hacia afuera con una transición. Para mostrarlo u ocultarlo instantáneamente, pasa la prop `disableTransition`.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} disableTransition>
  <p>Contenido del drawer</p>
</Drawer>
```

## Redimensionable

Un `Drawer` puede ser redimensionable pasando la prop `resizable`.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} resizable>
  <p>Contenido del drawer</p>
</Drawer>
```

Además, puedes usar la prop `size` para controlar el tamaño del `Drawer` y pasar el manejador `onResize` para almacenar el valor redimensionado.

```tsx
const [size, setSize] = useState(500);

<Drawer onOpenChange={setVisible} open={isVisible} resizable size={size} onResize={setSize}>
  <p>Contenido del drawer</p>
</Drawer>;
```

## Propiedades

| Nombre                    | Descripción                                                                                                                             |                Tipo                |     Predeterminado     |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------: | :--------------------: |
| className               | Atributo HTML `class` para el nodo raíz                                                                                                |              `string`              |                        |
| qa                      | Atributo de prueba (`data-qa`)                                                                                                          |              `string`              |                        |
| style                   | Atributo HTML `style` para el nodo raíz                                                                                                |       `React.CSSProperties`        |                        |
| aria-label              | Atributo HTML `aria-label` para describir el `Drawer`                                                                                   |              `string`              |                        |
| aria-labelledby         | ID del elemento de título visible del `Drawer`                                                                                          |              `string`              |                        |
| aria-describedby        | `aria-describedby` para el elemento `Drawer`                                                                                            |              `string`              |                        |
| aria-details            | `aria-details` para el elemento `Drawer` del usuario                                                                                    |              `string`              |                        |
| returnFocus             | Elemento en el que se enfocará al cerrar                                                                                                | `boolean` `React.Ref<HTMLElement>` |         `true`         |
| initialFocus            | Elemento inicial en el que se enfocará. Un número positivo es el índice del elemento enfocable.                                         | `number` `React.Ref<HTMLElement>`  |                        |
| placement               | Especifica el lado desde el cual el cajón debe deslizarse                                                                              |              `string`              |        `left`        |
| contentClassName        | Atributo HTML `class` para el nodo de contenido                                                                                         |              `string`              |                        |
| children                | Cualquier contenido de React                                                                                                            |         `React.ReactNode`          |                        |
| container               | Elemento DOM al que se monta el componente a través de `Portal`                                                                         |           `HTMLElement`            |    `document.body`   |
| contentOverflow         | Determina si el `Drawer` tiene su propio indicador de desplazamiento interno. Por defecto, no lo tiene.                                 |          `visible` `auto`          |      `visible`     |
| disableBodyScrollLock   | Deshabilita el bloqueo de desplazamiento mientras está abierto                                                                          |             `boolean`              |        `false`       |
| disableEscapeKeyDown    | Deshabilita el cierre al presionar `Esc`                                                                                               |             `boolean`              |        `false`       |
| disableOutsideClick     | Deshabilita el cierre al hacer clic fuera                                                                                               |             `boolean`              |        `false`       |
| disableTransition       | Deshabilita la animación del cajón                                                                                                      |             `boolean`              |        `false`       |
| disableModal            | Deshabilita la gestión de foco modal                                                                                                    |             `boolean`              |        `false`       |
| disableLayer            | Deshabilita el registro del `Drawer` en el gestor de capas                                                                              |             `boolean`              |        `true`        |
| disablePortal           | Deshabilita el uso de `Portal`                                                                                                          |             `boolean`              |        `false`       |
| keepMounted             | El `Drawer` no se eliminará del DOM al ocultarse                                                                                        |             `boolean`              |        `false`       |
| resizable               | Habilita el redimensionamiento del cajón mediante el puntero                                                                            |             `boolean`              |        `false`       |
| open                    | Gestiona la visibilidad del `Drawer`                                                                                                    |             `boolean`              |        `false`       |
| hideVeil                | Elimina el velo del `Drawer` sin cambiar el manejo de clics externos                                                                   |             `boolean`              |        `false`       |
| onOpenChange            | Callback llamado en el momento del cambio de estado abierto                                                                             |             `Function`             |                        |
| onTransitionIn          | El callback se dispara al inicio de la transición "in"                                                                                  |             `Function`             |                        |
| onTransitionInComplete  | El callback se dispara al completar la transición "in"                                                                                  |             `Function`             |                        |
| onTransitionOut         | El callback se dispara al inicio de la transición "out"                                                                                 |             `Function`             |                        |
| onTransitionOutComplete | El callback se dispara al completar la transición "out"                                                                                 |             `Function`             |                        |
| onResizeEnd             | Callback llamado al finalizar el redimensionamiento                                                                                     |             `Function`             |                        |
| onResize                | Callback llamado cuando el cajón se está redimensionando                                                                                |             `Function`             |                        |
| onResizeStart           | Callback llamado al inicio del redimensionamiento                                                                                       |             `Function`             |                        |
| maxSize                 | Ancho o alto máximo del cajón en píxeles                                                                                                |              `number`              |                        |
| minSize                 | Ancho o alto mínimo del cajón en píxeles                                                                                                |              `number`              |                        |
| size                    | Ancho o alto del cajón en píxeles. Cuando se pasa la opción `auto`, el ancho o alto del Drawer se ajustará para adaptarse a su contenido. |         `number \| 'auto'`         |                        |