<!--GITHUB_BLOCK-->

# Información sobre herramientas

<!--/GITHUB_BLOCK-->

Un consejo de texto sencillo que usa su nodo secundario como ancla. Este componente solo acepta contenido de texto y puede ser excelente
alternativa al `title` atributo del navegador con su tamaño pequeño y su largo retraso de aparición.

## Uso

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Content">
  <div tabIndex={0}>Anchor</div>
</Tooltip>;
```

## Ancla

Para poder `Tooltip` trabajar, debe aprobar un documento válido `ReactElement` como niño que acepte `ref` propiedades para `HTMLElement`
y otras propiedades para `HTMLElement`.

Alternativamente, puede pasar la función como elemento secundario para proporcionar referencias y accesorios manualmente a sus componentes subyacentes:

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Content">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</Tooltip>;
```

## Estado controlado

De forma predeterminada, `Tooltip` se abre y se oculta al colocar el cursor sobre el ancla. Puede cambiar este comportamiento para establecer manualmente el estado de apertura.
Pasa tu estado al `open` utilero y cámbialo por `onOpenChange` callback.
`onOpenChange` la devolución de llamada tiene la siguiente firma: `(open: boolean, event? : Evento, motivo: «flotar» | 'enfoque') => vacío.`

## Rol

`Tooltip` acepta la `role` propiedad, lo que cambia la forma en que debe actuar en términos de accesibilidad.
`tooltip` el rol debe usarse cuando el ancla tiene su propio texto y el `label` rol en caso contrario (por ejemplo, en el botón del icono).

## Propiedades

| Nombre       | Descripción                                                                                                                   |                       Tipo                       | Predeterminado |
| :----------- | ----------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------: | :------------: |
| niños        | Elemento de anclaje para `Tooltip`                                                                                            |         `React.ReactElement` `Function`          |                |
| className    | `class` Atributo HTML                                                                                                         |                     `string`                     |                |
| closeDelay   | Número de ms para retrasar la ocultación `Tooltip` después de que finalice el desplazamiento                                  |                     `number`                     |      `0`       |
| contenido    | Contenido que se mostrará en el `Tooltip`                                                                                     |                `React.ReactNode`                 |                |
| inhabilitado | Impedir que `Tooltip` se abran                                                                                                |                    `boolean`                     |                |
| compensar    | `Tooltip` desplazado desde su ancla                                                                                           |                     `number`                     |      `4`       |
| onOpenChange | Llamada para gestionar el cambio de estado abierto                                                                            |                    `Function`                    |                |
| abierto      | Estado abierto controlado                                                                                                     |                    `boolean`                     |                |
| openDelay    | Número de ms de retraso que se muestran `Tooltip` después de que comience el desplazamiento                                   |                     `number`                     |     `1000`     |
| colocación   | `Tooltip` posición relativa a su ancla                                                                                        | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`    |
| qa           | `data-qa` Atributo HTML, usado para realizar pruebas                                                                          |                     `string`                     |                |
| papel        | El rol `Tooltip` se usa para                                                                                                  |              `"tooltip"` `"label"`               |  `"tooltip"`   |
| estrategia   | El tipo de propiedad de posición CSS que se va a utilizar.                                                                    |                `absolute` `fixed`                |   `absolute`   |
| estilo       | `style` Atributo HTML                                                                                                         |              `React.CSSProperties`               |                |
| desencadenar | Tipo de evento que debería activar la apertura. De forma predeterminada, tanto el puntero del ratón como el enfoque lo hacen. |                    `"focus"`                     |                |

## API CSS

| Nombre                         | Descripción     |
| :----------------------------- | :-------------- |
| `--g-tooltip-text-color`       | Color del texto |
| `--g-tooltip-background-color` | Color de fondo  |
| `--g-tooltip-padding`          | Acolchado       |
| `--g-tooltip-border-radius`    | Radio de borde  |
| `--g-tooltip-box-shadow`       | Sombra          |
