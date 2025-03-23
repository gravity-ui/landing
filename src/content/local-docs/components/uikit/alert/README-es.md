<!--GITHUB_BLOCK-->

# Alert

<!--/GITHUB_BLOCK-->

```tsx
import {Alert} from '@gravity-ui/uikit';
```

### Tema (`theme`)

`normal`: Tema principal (usado por defecto).

`info`: Usado para cualquier tipo de información regular.

`success`: Usado para información positiva.

`warning`: Usado para información que necesita atención.

`danger`: Usado para errores críticos.

`utility`: Usado para consejos útiles.

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

### Vista (`view`)

`filled`: Usado para ajustar el color de fondo de la alerta (usado por defecto).

`outlined`: Usado para ajustar el color del borde de la alerta.

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

### Disposición (`layout`)

`vertical`: Usado para dirigir a los usuarios al contenido si hay una propiedad `actions` con botones. Permite mostrar botones debajo del texto (usado por defecto).

`horizontal`: Usado para dirigir a los usuarios al contenido si hay una propiedad `actions` con botones. Permite mostrar botones a la derecha del texto.

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

### Esquinas (`corners`)

`rounded`: Habilita esquinas redondeadas en la ventana de alerta (usado por defecto).

`square`: Habilita esquinas cuadradas en la ventana de alerta.

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

## Título de alerta

`title`: Título de la alerta. Tiene una prioridad menor que `Alert.Title`.

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

`message`: Mensaje de la alerta. Debe ser lo suficientemente significativo para explicar completamente de qué trata la alerta.

## `onClose`

`onClose`: Función de callback llamada cuando un usuario hace clic en el botón de cierre de la alerta. Cuando esta propiedad está definida, el botón de cierre será visible.

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

### Alineación (`align`)

Determina cómo se alinea verticalmente el contenido dentro del componente `Alert`.

`baseline`: Alineación predeterminada.

`center`: El contenido está centrado verticalmente dentro del componente `Alert`. Puede ser útil si las acciones ocupan más espacio que el texto, o si el icono debe estar en el medio del contenido.

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

| Nombre    | Descripción                                                                                |                                Tipo                                | Valor predeterminado |
| :-------- | :----------------------------------------------------------------------------------------- | :----------------------------------------------------------------: | :------------------: |
| theme     | Apariencia de la alerta                                                                    | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` |      `"normal"`      |
| view      | Habilitar/deshabilitar el color de fondo de la alerta                                      |                      `"filled"` `"outlined"`                       |      `"filled"`      |
| layout    | Usado para dirigir a los usuarios al contenido si hay propiedad `actions` con botones      |                    `"vertical"` `"horizontal"`                     |     `"vertical"`     |
| corners   | Usado para esquinas redondeadas/cuadradas de la ventana de alerta                          |                       `"rounded"` `"square"`                       |     `"rounded"`      |
| title     | Título de la alerta                                                                        |                              `string`                              |                      |
| message   | Mensaje de la alerta                                                                       |                         `React.ReactNode`                          |                      |
| onClose   | Función de callback llamada cuando el usuario hace clic en el botón de cierre de la alerta |                             `Function`                             |                      |
| actions   | Array de botones o componentes personalizados completos                                    |                 `React.ReactNode` `"AlertAction"`                  |                      |
| align     | Determina cómo se alinea verticalmente el contenido dentro del componente `Alert`          |                      `"center"` `"baseline"`                       |     `"baseline"`     |
| style     | Atributo de estilo HTML                                                                    |                       `React.CSSProperties`                        |                      |
| className | Nombre de la clase de alerta                                                               |                              `string`                              |                      |
| icon      | Sobrescribir el icono predeterminado                                                       |                         `React.ReactNode`                          |                      |
| qa        | Atributo HTML `data-qa`, usado en pruebas                                                  |                              `string`                              |                      |
