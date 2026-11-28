`Popover` muestra contenido flotante, opcionalmente interactivo (texto, enlaces o botones) anclado a un elemento hijo y abierto al pasar el cursor o hacer clic. Envuelve [`Popup`](../Popup/README.md) con interactividad de activación incorporada, utilizando el `ReactElement` pasado a través de la propiedad `children` como activador.

```tsx
import {Popover} from '@gravity-ui/uikit';
```

¿Migrando desde el `Popover` heredado? Consulte la [guía de migración](https://github.com/gravity-ui/uikit/blob/main/docs/migration-from-legacy-popover.md).

## Uso

Envuelva un elemento HTML o cualquier componente que acepte manejadores DOM nativos y atributos ARIA en propiedades (es decir, `Button`) con el componente `Popover`. Coloque su contenido
en la propiedad `content`.

```jsx
import {Button, Popover} from '@gravity-ui/uikit';

<Popover content="Contenido">
  <Button>Haz clic o pasa el cursor sobre mí</Button>
</Popover>;
```

## Propiedades

| Nombre                 | Descripción                                                                                                   |                                Tipo                                 |     Predeterminado     |
| :------------------- | :------------------------------------------------------------------------------------------------------------ | :-----------------------------------------------------------------: | :--------------------: |
| children             | `ReactNode` que acepta manejadores DOM                                                                        |                          `React.ReactNode`                          |                        |
| className            | Atributo `class` de HTML para el nodo raíz                                                                          |                              `string`                               |                        |
| container            | Elemento DOM al que se monta el componente a través de `Portal`                                                        |                            `HTMLElement`                            |    `document.body`     |
| content              | Cualquier contenido para renderizar dentro del `Popover`                                                                    |                          `React.ReactNode`                          |                        |
| contentClassName     | Atributo `class` de HTML para el nodo de contenido                                                                       |                              `string`                               |                        |
| delay                | Espera el tiempo especificado en milisegundos antes de cambiar el estado `open`                                              |             `number` `{open?: number; close?: number}`              |                        |
| disableEscapeKeyDown | No cerrar al presionar la tecla `Esc`                                                                               |                              `boolean`                              |        `false`         |
| disableLayer         | No usar `LayerManager` en elementos flotantes apilados                                                       |                              `boolean`                              |        `false`         |
| disableOutsideClick  | No cerrar al hacer clic fuera                                                                               |                              `boolean`                              |        `false`         |
| disablePortal        | Deshabilita el uso de `Portal`                                                                                       |                              `boolean`                              |        `false`         |
| disabled             | No abrir con ningún evento                                                                                      |                              `boolean`                              |        `false`         |
| enableSafePolygon    | Usa un área de polígono dinámico al mover el puntero del disparador al contenido del `Popover` para evitar que se cierre |                              `boolean`                              |        `false`         |
| hasArrow             | Renderiza una flecha apuntando al disparador                                                                       |                              `boolean`                              |        `false`         |
| keepMounted          | El `Popover` no se eliminará del DOM al ocultarse                                                        |                              `boolean`                              |        `false`         |
| middlewares          | Middlewares de `Floating UI`. Si se establecen, sobrescribirán completamente los middlewares predeterminados.                    |                         `Array<Middleware>`                         |                        |
| modal                | Habilita el comportamiento de captura de foco                                                                              |                              `boolean`                              |        `false`         |
| offset               | Valor de offset de `Floating UI`                                                                                    |                           `PopoverOffset`                           |          `4`           |
| onOpenChange         | Función que se llama cuando cambia el estado `open`                                                         |                             `Function`                              |                        |
| open                 | Controla manualmente el estado `open`                                                                             |                              `boolean`                              |                        |
| placement            | Colocación de `Floating UI`                                                                                       | `Placement` `Array<Placement>` `"auto"` `"auto-start"` `"auto-end"` |        `"top"`         |
| qa                   | Atributo de prueba (`data-qa`)                                                                                    |                              `string`                               |                        |
| rest                 | Tiempo en ms que el cursor debe permanecer en reposo antes de abrir.                                                      |                              `number`                               |          `0`           |
| strategy             | Estrategia de posicionamiento de `Floating UI`                                                                            |                       `"absolute"` `"fixed"`                        |      `"absolute"`      |
| style                | Atributo `style` de HTML para el nodo raíz                                                                          |                              `string`                               |                        |
| toggle               | Si se debe alternar el estado `open` con clics repetidos                                                       |                              `boolean`                              |        `true`          |
| trigger              | Qué evento debe abrir el `Popover`. El valor predeterminado `all` se refiere tanto a `hover` como a `click`                 |                          `"all"` `"click"`                          |        `"all"`         |