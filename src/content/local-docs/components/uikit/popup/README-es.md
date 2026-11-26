`Popup` posiciona contenido flotante sobre la página, anclado a un elemento de referencia — la primitiva de bajo nivel detrás de tooltips, popovers y menús, construida sobre [Floating UI](https://floating-ui.com). Su visibilidad se controla con la propiedad `open`; sus hijos se renderizan dentro del componente [`Portal`](../Portal) a menos que establezcas la propiedad `disablePortal`.

```tsx
import {Popup} from '@gravity-ui/uikit';
```

## Ancla

Para especificar el ancla de un elemento flotante, puedes usar la propiedad `anchorElement`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Posicionamiento

Usa la propiedad `placement` para gestionar la posición del `Popup` alrededor del elemento ancla.
Por defecto, `Popup` utiliza el [middleware flip](https://floating-ui.com/docs/flip) para prevenir desbordamientos.
Si la propiedad se establece a un array, el primer elemento se usará como valor de posicionamiento predeterminado, los restantes se usarán como [posicionamientos de respaldo](https://floating-ui.com/docs/flip#fallbackplacements).
También es aceptable usar los valores `auto`, `auto-start`, `auto-end` para usar el [middleware autoPlacement](https://floating-ui.com/docs/autoPlacement) en lugar de flip.

GRAVITY_TRANSLATION_BLOCK_3_END

## Propiedades

| Nombre                    | Descripción                                                                                |                             Tipo                              |     Predeterminado     |
| :---------------------- | :----------------------------------------------------------------------------------------- | :-----------------------------------------------------------: | :--------------------: |
| anchorElement           | Elemento ancla. También puede ser un `VirtualElement`                                      |                     `PopupAnchorElement`                      |                        |
| aria-describedby        | Atributo `aria-describedby`. Úsalo si tienes nodos de etiqueta y descripción               |                           `string`                            |                        |
| aria-label              | Atributo `aria-label`. Úsalo solo si no tienes ningún título visible                       |                           `string`                            |                        |
| aria-labelledby         | Atributo `aria-labelledby`. Preferible si tienes un título visible                         |                           `string`                            |                        |
| children                | Cualquier contenido de React                                                                 |                       `React.ReactNode`                       |                        |
| className               | Atributo HTML `class` para el nodo raíz                                                    |                           `string`                            |                        |
| container               | Elemento DOM al que se monta el componente a través de `Portal`                            |                         `HTMLElement`                         |    `document.body`     |
| disableEscapeKeyDown    | Deshabilita el cierre al presionar `Esc`                                                  |                           `boolean`                           |        `false`         |
| disableFocusOut         | Deshabilita el cierre al perder el foco                                                    |                           `boolean`                           |        `false`         |
| disableOutsideClick     | Deshabilita el cierre al hacer clic fuera                                                  |                           `boolean`                           |        `false`         |
| disablePortal           | Deshabilita el uso de `Portal`                                                             |                           `boolean`                           |        `false`         |
| disableTransition       | Deshabilita la animación de aparición/desaparición del popup                              |                           `boolean`                           |        `false`         |
| floatingClassName       | Clase adicional para aplicar al elemento `Floating UI`                                     |                           `string`                            |                        |
| floatingContext         | Contexto `Floating UI` para proporcionar interacciones                                     |                     `FloatingRootContext`                     |                        |
| floatingInteractions    | Sobrescribe las interacciones de `Floating UI`                                             |                     `Array<ElementProps>`                     |                        |
| floatingMiddlewares     | Middlewares de `Floating UI`. Si se establecen, sobrescribirán completamente los middlewares predeterminados. |                      `Array<Middleware>`                      |                        |
| floatingStyles          | Estilos para aplicar al elemento `Floating UI`                                             |                     `React.CSSProperties`                     |                        |
| focusOrder              | El orden en el que el foco circula                                                         |        `Array<'reference' \| 'floating' \| 'content'>`        |      `['content']`     |
| hasArrow                | Renderiza una flecha apuntando al ancla                                                    |                           `boolean`                           |        `false`         |
| id                      | Atributo HTML `id`                                                                         |                           `string`                            |                        |
| initialFocus            | Elemento inicial a enfocar. Un número positivo es el índice del elemento tabulable.        |               `number` `React.Ref<HTMLElement>`               |                        |
| keepMounted             | `Popup` no se eliminará del DOM al ocultarse                                               |                           `boolean`                           |        `false`         |
| modal                   | Habilita el comportamiento de captura de foco                                              |                           `boolean`                           |        `false`         |
| offset                  | Valor de offset de `Floating UI`                                                           |                         `PopupOffset`                         |           `4`            |
| onOpenChange            | Maneja el evento de cambio de apertura de `Popup`                                          |                          `Function`                           |                        |
| onTransitionIn          | Al inicio de la animación de apertura del popup                                            |                          `Function`                           |                        |
| onTransitionInComplete  | Al finalizar la animación de apertura del popup                                            |                          `Function`                           |                        |
| onTransitionOut         | Al inicio de la animación de cierre del popup                                              |                          `Function`                           |                        |
| onTransitionOutComplete | Al finalizar la animación de cierre del popup                                              |                          `Function`                           |                        |
| open                    | Gestiona la visibilidad de `Popup`                                                         |                           `boolean`                           |        `false`         |
| placement               | Ubicación de `Floating UI`                                                                 | `Placement` `Array<Placement>` `auto` `auto-start` `auto-end` |                        |
| qa                      | Atributo de prueba (`data-qa`)                                                             |                           `string`                            |                        |
| returnFocus             | Elemento a enfocar al cerrar                                                               |              `boolean` `React.Ref<HTMLElement>`               |         `true`         |
| role                    | Rol de accesibilidad para el popup                                                         |                           `string`                            |                        |
| strategy                | Estrategia de posicionamiento de `Floating UI`                                             |                      `absolute` `fixed`                       |       `absolute`       |
| style                   | Atributo HTML `style` para el nodo raíz                                                    |                     `React.CSSProperties`                     |                        |

## API CSS

| Nombre                         | Descripción      |
| :--------------------------- | :--------------- |
| `--g-popup-background-color` | Color de fondo |
| `--g-popup-border-color`     | Color del borde     |
| `--g-popup-border-radius`    | Radio del borde    |
| `--g-popup-border-width`     | Ancho del borde     |