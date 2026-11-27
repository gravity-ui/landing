<!--GITHUB_BLOCK-->

# Alert

<!--/GITHUB_BLOCK-->

El componente `Alert` muestra un mensaje destacado para llamar la atención del usuario sobre información importante.

```tsx
import {Alert} from '@gravity-ui/uikit';
```

### Tema

`normal`: Tema principal (usado por defecto).

`info`: Se usa para cualquier tipo de información regular.

`success`: Se usa para información positiva.

`warning`: Se usa para información que requiere atención.

`danger`: Se usa para errores críticos.

`utility`: Se usa para consejos útiles.

`clear`: Sin estilos, adecuado para su uso en otros componentes (por ejemplo, como `content` en `Popover`)

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert theme="normal" title="Normal" message="Normal theme" />
            <Alert theme="info" title="Info" message="Info theme" />
            <Alert theme="success" title="Success" message="Success theme" />
            <Alert theme="warning" title="Warning" message="Warning theme" />
            <Alert theme="danger" title="Danger" message="Danger theme" />
            <Alert theme="utility" title="Utility" message="Utility theme" />
            <Alert theme="clear" title="Clear" message="Clear theme" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert theme="normal" title="Normal" message="Normal theme"/>
<Alert theme="info" title="Info" message="Info theme"/>
<Alert theme="success" title="Success" message="Success theme"/>
<Alert theme="warning" title="Warning" message="Warning theme"/>
<Alert theme="danger" title="Danger" message="Danger theme"/>
<Alert theme="utility" title="Utility" message="Utility theme"/>
<Alert theme="clear" title="Clear" message="Clear theme"/>
```

<!--/GITHUB_BLOCK-->

### Vista

`filled`: Se usa para ajustar el color de fondo de la alerta (usado por defecto).

`outlined`: Se usa para ajustar el color del borde de la alerta.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert title="Filled" message="Filled view" view="filled" />
            <Alert title="Outlined" message="Outlined theme" view="outlined" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```
<Alert title="Filled" message="Filled view" view="filled" />
<Alert title="Outlined" message="Outlined theme" view="outlined" />
```

<!--/GITHUB_BLOCK-->

### Diseño

`vertical`: Se usa para dirigir a los usuarios al contenido si hay una propiedad `actions` con botones. Permite mostrar los botones debajo del texto (usado por defecto).

`horizontal`: Se usa para dirigir a los usuarios al contenido si hay una propiedad `actions` con botones. Permite mostrar los botones a la derecha del texto.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert
                layout="vertical"
                title="Vertical"
                message="Vertical direction"
                actions={<Alert.Action>button</Alert.Action>}
            />
            <Alert
                layout="horizontal"
                title="Horizontal"
                message="Horizontal direction"
                actions={<Alert.Action>button</Alert.Action>}
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert layout="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert layout="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

### Esquinas

`rounded`: Habilita esquinas redondeadas de la ventana de alerta (usado por defecto).

`square`: Habilita esquinas cuadradas de la ventana de alerta.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert title="Rounded" message="Rounded corners" corners="rounded" />
            <Alert title="Square" message="Square corners" corners="square" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title="Rounded" message="Rounded corners" corners="rounded"/>
<Alert title="Square" message="Square corners" corners="square"/>
```

<!--/GITHUB_BLOCK-->

## Título de la alerta

`title`: Título de la alerta. Tiene una prioridad menor que `Alert.Title`.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return <Alert title={<Alert.Title className={'some-class'} text="some text" />} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title={<Alert.Title className={'some-class'} text="some text"></Alert.Title>} />
```

<!--/GITHUB_BLOCK-->

## Mensaje de la alerta

`message`: Mensaje de la alerta. Debe ser lo suficientemente significativo como para explicar completamente de qué trata la alerta.

## `onClose`

`onClose`: Función de callback que se llama cuando el usuario hace clic en el botón de cierre de la alerta. Cuando esta propiedad está definida, el botón de cierre será visible.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <Alert
            onClose={() => alert('Close button pressed')}
            title="Alert has close"
            message="Alert has close"
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert
  onClose={() => alert('Close button pressed')}
  title="Alert has close"
  message="Alert has close"
/>
```

<!--/GITHUB_BLOCK-->

### Alineación

Determina cómo se alinea verticalmente el contenido dentro del componente `Alert`.

`baseline`: Alineación por defecto.

`center`: El contenido se centra verticalmente dentro del componente `Alert`. Puede ser útil si las acciones ocupan más espacio que el texto, o si el icono debe estar en el medio del contenido.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert
                align="baseline"
                theme="info"
                title="Baseline"
                message="Baseline align"
                actions={<Alert.Action>button</Alert.Action>}
            />
            <Alert
                align="center"
                theme="info"
                title="Center"
                message="Center align"
                actions={<Alert.Action>button</Alert.Action>}
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert align="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert align="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre          | Descripción                                                                 |                                     Tipo                                     |   Predeterminado    |
| :-------------- | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------: | :-----------------: |
| theme         | Apariencia de la alerta                                                            | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` `"clear"` |  `"normal"`  |
| size          | Tamaño de la alerta                                                                  |                              `"s"` `"m"` `"l"`                               |    `"m"`     |
| view          | Habilitar/deshabilitar el color de fondo de la alerta                                |                           `"filled"` `"outlined"`                            |  `"filled"`  |
| layout        | Se utiliza para dirigir a los usuarios al contenido si hay una propiedad `actions` con botones |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| actionsLayout | Se utiliza para controlar la dirección de los botones de acción.                        |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| corners       | Se utiliza para esquinas redondeadas/cuadradas de la ventana de alerta                           |                            `"rounded"` `"square"`                            | `"rounded"`  |
| title         | Título de la alerta                                                          |                                   `string`                                   |                     |
| message       | Mensaje de la alerta                                                        |                              `React.ReactNode`                               |                     |
| onClose       | Una función de devolución de llamada que se llama cuando el usuario hace clic en el botón de cierre de la alerta    |                                  `Function`                                  |                     |
| actions       | Matriz de botones o componentes personalizados completos                                  |                      `React.ReactNode` `"AlertAction"`                       |                     |
| align         | Determina cómo se alinea verticalmente el contenido dentro del componente Alert     |                           `"center"` `"baseline"`                            | `"baseline"` |
| style         | Atributo de estilo HTML                                                        |                            `React.CSSProperties`                             |                     |
| className     | Nombre de la clase de la alerta                                                         |                                   `string`                                   |                     |
| icon          | Anular el icono predeterminado                                                       |                              `React.ReactNode`                               |                     |
| qa            | Atributo `data-qa` de HTML, utilizado en pruebas.                                    |                                   `string`                                   |                     |

## API CSS

| Nombre                               | Descripción                                                                    |
| :--------------------------------- | :----------------------------------------------------------------------------- |
| `--g-alert-padding`                | Rellenos laterales.                                                                 |
| `--g-alert-border-radius`          | Radio del borde.                                                                 |
| `--g-alert-icon-margin-inline-end` | La indentación entre el icono y la parte de contenido (contenido de texto + acciones)         |
| `--g-alert-close-btn-margin`       | La indentación entre la parte de contenido (contenido de texto + acciones) y el botón de cierre |
| `--g-alert-actions-margin`         | Espacio entre el contenido de texto y las acciones.                                          |
| `--g-alert-message-title-indent`   | Espacio entre el título y el mensaje.                                                 |
| `--g-alert-actions-gap`            | Espacio entre los botones de acción.                                                    |
| `--g-alert-title-text-color`       | Color del título.                                                                   |
| `--g-alert-title-font-size`        | Tamaño de fuente del título.                                                               |
| `--g-alert-title-line-height`      | Altura de línea del título.                                                             |
| `--g-alert-message-text-color`     | Color del mensaje.                                                                 |
| `--g-alert-message-font-size`      | Tamaño de fuente del mensaje.                                                             |
| `--g-alert-message-font-weight`    | Peso de fuente del mensaje.                                                           |
| `--g-alert-message-line-height`    | Altura de línea del mensaje.                                                           |
