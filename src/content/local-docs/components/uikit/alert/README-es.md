<!--GITHUB_BLOCK-->

# Alerta

<!--/GITHUB_BLOCK-->

```tsx
import {Alert} from '@gravity-ui/uikit';
```

### Tema

`normal`: Tema principal (usado por defecto).

`info`: Se utiliza para cualquier tipo de información regular.

`success`: Se usa para información positiva.

`warning`: Se usa para información que necesita atención.

`danger`: Se usa para errores críticos.

`utility`: Se usa para consejos útiles.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert theme="normal" title="Normal" message="Normal theme" />
<Alert theme="info" title="Info" message="Info theme" />
<Alert theme="success" title="Success" message="Success theme" />
<Alert theme="warning" title="Warning" message="Warning theme" />
<Alert theme="danger" title="Danger" message="Danger theme" />
<Alert theme="utility" title="utility" message="Utility theme" />
`}>
    <UIKit.Alert theme="normal" title="Normal" message="Normal theme" />
    <UIKit.Alert theme="info" title="Info" message="Info theme" />
    <UIKit.Alert theme="success" title="Success" message="Success theme" />
    <UIKit.Alert theme="warning" title="Warning" message="Warning theme" />
    <UIKit.Alert theme="danger" title="Danger" message="Danger theme" />
    <UIKit.Alert theme="utility" title="Utility" message="Utility theme" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Alert theme="normal" title="Normal" message="Normal theme"/>
<Alert theme="info" title="Info" message="Info theme"/>
<Alert theme="success" title="Success" message="Success theme"/>
<Alert theme="warning" title="Warning" message="Warning theme"/>
<Alert theme="danger" title="Danger" message="Danger theme"/>
<Alert theme="utility" title="Utility" message="Utility theme"/>
```

<!--/GITHUB_BLOCK-->

### Ver

`filled`: Se usa para ajustar el color de fondo de la alerta (se usa de forma predeterminada).

`outlined`: Se usa para ajustar el color del borde de la alerta.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert title="Filled" message="Filled view" view="filled" />
<Alert title="Outlined" message="Outlined theme" view="outlined" />
`}
>
    <UIKit.Alert title="Filled" message="Filled view" view="filled" />
    <UIKit.Alert title="Outlined" message="Outlined theme" view="outlined" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```
<Alert title="Filled" message="Filled view" view="filled" />
<Alert title="Outlined" message="Outlined theme" view="outlined" />
```

<!--/GITHUB_BLOCK-->

### Disposición

`vertical`: Se usa para dirigir a los usuarios al contenido si hay una `actions` propiedad con botones. Permite mostrar los botones debajo del texto (se utilizan de forma predeterminada).

`horizontal`: Se usa para dirigir a los usuarios al contenido si hay una `actions` propiedad con botones. Permite mostrar los botones a la derecha del texto.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert layout="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>} />
<Alert layout="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>} />
`}>
    <UIKit.Alert layout="vertical" title="Vertical" message="Vertical direction" actions={<UIKit.Alert.Action>button</UIKit.Alert.Action>} />
    <UIKit.Alert layout="horizontal" title="Horizontal" message="Horizontal direction" actions={<UIKit.Alert.Action>button</UIKit.Alert.Action>} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Alert layout="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert layout="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

### Esquinas

`rounded`: Activa las esquinas redondeadas de la ventana de alerta (se usa de forma predeterminada).

`square`: Activa las esquinas cuadradas de la ventana de alerta.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert title="Rounded" message="Rounded corners" corners="rounded"  />
<Alert title="Square" message="Square corners" corners="square" />
`}
>
    <UIKit.Alert title="Rounded" message="Rounded corners" corners="rounded"  />
    <UIKit.Alert title="Square" message="Square corners" corners="square" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title="Rounded" message="Rounded corners" corners="rounded"/>
<Alert title="Square" message="Square corners" corners="square"/>
```

<!--/GITHUB_BLOCK-->

## Título de la alerta

`title`: Título de la alerta. Tiene una prioridad inferior a `Alert.Title`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert title={<Alert.Title className={'some-class'} text="some text"></Alert.Title>} />
`}
>
    <UIKit.Alert title={<UIKit.Alert.Title className={'some-class'} text="some text"></UIKit.Alert.Title>} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title={<Alert.Title className={'some-class'} text="some text"></Alert.Title>} />
```

<!--/GITHUB_BLOCK-->

## Mensaje de alerta

`message`: Mensaje de alerta. Debe ser lo suficientemente significativo como para explicar completamente de qué se trata la alerta.

## `onClose`

`onClose`: La función de devolución de llamada se activa cuando un usuario hace clic en el botón de cierre de la alerta. Cuando se defina esta propiedad, aparecerá el botón de cierre.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert onClose={() => alert('Close button pressed')} title="Alert has close" message="Alert has close" />
`}
>
    <UIKit.Alert onClose={() => alert('Close button pressed')} title="Alert has close" message="Alert has close" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Alert
  onClose={() => alert('Close button pressed')}
  title="Alert has close"
  message="Alert has close"
/>
```

<!--/GITHUB_BLOCK-->

### Alinear

Determina cómo se alinea verticalmente el contenido del `Alert` componente.

`baseline`: Alineación predeterminada.

`center`: El contenido está centrado verticalmente dentro del `Alert` componente. Puede resultar útil si las acciones ocupan más espacio que el texto o si el icono debe estar en el centro del contenido.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert align="baseline" theme="info" title="Baseline" message="Baseline align" actions={<Alert.Action>button</Alert.Action>} />
<Alert align="center" theme="info" title="Center" message="Center align" actions={<Alert.Action>button</Alert.Action>} align="center"/>
`}>
    <UIKit.Alert align="baseline" theme="info" title="Baseline" message="Baseline align" actions={<UIKit.Alert.Action>button</UIKit.Alert.Action>} />
    <UIKit.Alert align="center" theme="info" title="Center" message="Center align" actions={<UIKit.Alert.Action>button</UIKit.Alert.Action>} align="center"/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Alert align="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert align="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre    | Descripción                                                                                                       |               Tipo                | Predeterminado |
| :-------- | :---------------------------------------------------------------------------------------------------------------- | :-------------------------------: | :------------: |
| canción   | Apariencia de alertas                                                                                             |      `"normal"` `"utility"`       |   `"normal"`   |
| vista     | Activar/desactivar el color de fondo de la alerta                                                                 |      `"filled"` `"outlined"`      |   `"filled"`   |
| diseño    | Se usa para dirigir a los usuarios al contenido si hay una propiedad `actions` con botones                        |    `"vertical"` `"horizontal"`    |  `"vertical"`  |
| arrincona | Se utiliza para las esquinas redondas/cuadradas de la ventana de alerta                                           |      `"rounded"` `"square"`       |  `"rounded"`   |
| título    | Título de la alerta                                                                                               |             `string`              |                |
| mensaje   | Mensaje de la alerta                                                                                              |         `React.ReactNode`         |                |
| onClose   | Una función de devolución de llamada que se invoca cuando el usuario hace clic en el botón de cierre de la alerta |            `Function`             |                |
| acciones  | Conjunto de botones o componentes totalmente personalizados                                                       | `React.ReactNode` `"AlertAction"` |                |
| alinear   | Determina cómo se alinea verticalmente el contenido del componente de alerta                                      |      `"center"` `"baseline"`      |  `"baseline"`  |
| estilo    | Atributo de estilo HTML                                                                                           |       `React.CSSProperties`       |                |
| className | Nombre de la clase de alerta                                                                                      |             `string`              |                |
| icono     | Anular el icono predeterminado                                                                                    |         `React.ReactNode`         |                |
| qa        | `data-qa` Atributo HTML, usado en las pruebas.                                                                    |             `string`              |                |
