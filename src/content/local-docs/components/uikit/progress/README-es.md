<!--GITHUB_BLOCK-->

# Progreso

<!--/GITHUB_BLOCK-->

```tsx
import {Progress} from '@gravity-ui/uikit';
```

El `Progress` componente muestra el progreso actual de la operación. También se puede dividir en secciones.

## Tema

Utilice la `theme` propiedad para especificar el color de todo el progreso o de la parte compuesta:

<!--LANDING_BLOCK

<ExampleBlock
  code={`
<Progress text="default" value={50} />
<Progress text="warning" theme="warning" value={50} />
<Progress text="info" theme="info" value={50} />
<Progress text="success" theme="success" value={50} />
<Progress text="danger" theme="danger" value={50} />
<Progress text="misc" theme="misc" value={50} />
`}
>
  <div style={{width: '30%'}}>
    <UIKit.Progress text="default" value={50} />
    <div style={{height: '15px'}} />
    <UIKit.Progress text="success" theme="success" value={50} />
  </div>
  <div style={{width: '30%'}}>
    <UIKit.Progress text="warning" theme="warning" value={50} />
    <div style={{height: '15px'}} />
    <UIKit.Progress text="danger" theme="danger" value={50} />
  </div>
  <div style={{width: '30%'}}>
    <UIKit.Progress text="info" theme="info "value={50} />
    <div style={{height: '15px'}} />
    <UIKit.Progress text="misc" theme="misc" value={50} />
  </div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="default" value={50} />
<Progress text="warning" theme="warning" value={50} />
<Progress text="info" theme="info" value={50} />
<Progress text="success" theme="success" value={50} />
<Progress text="danger" theme="danger" value={50} />
<Progress text="misc" theme="misc" value={50} />
```

<!--/GITHUB_BLOCK-->

## Estados

<!--LANDING_BLOCK

<ExampleBlock
  code={`
<Progress text="Loading" theme="misc" value={60} loading={true} />
`}
>
  <div style={{width: '30%'}}>
    <UIKit.Progress text="Loading" theme="misc" value={60} loading={true} />
  </div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="Loading" theme="misc" value={60} loading={true} />
```

<!--/GITHUB_BLOCK-->

## Tamaño

Para administrar el tamaño del `Progress` componente, utilice la `size` propiedad que puede tomar los siguientes valores: `"xs"` `"s"`, y `"m"`. La `text` propiedad solo funciona con el `"m"` tamaño.

<!--LANDING_BLOCK

<ExampleBlock
  code={`
<Progress theme="success" value={60} size="xs" />
<Progress theme="warning" value={70} size="s" />
<Progress theme="danger" value={80} size="m" />
`}
>
  <div style={{width: '30%'}}><UIKit.Progress theme="success" value={60} size="xs" /></div>
  <div style={{width: '30%'}}><UIKit.Progress theme="warning" value={70} size="s" /></div>
  <div style={{width: '30%'}}><UIKit.Progress theme="danger" value={80} size="m" /></div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Progress theme="success" value={60} size="xs" />
<Progress theme="warning" value={70} size="s" />
<Progress theme="danger" value={80} size="m" />
```

<!--/GITHUB_BLOCK-->

## Puntos de quiebre

Utilice la `colorStops` propiedad para establecer los puntos de interrupción del `Progress` componente.

<!--LANDING_BLOCK

<ExampleBlock
  code={`
<Progress
  value={10}
  colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]}
/>
<Progress
  value={40}
  colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]}
/>
<Progress
  value={60}
  colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]}
/>
`}
>
  <div style={{width: '30%'}}>
    <UIKit.Progress
      value={10}
      colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]}
    />
  </div>
  <div style={{width: '30%'}}>
    <UIKit.Progress
      value={40}
      colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]}
    />
  </div>
  <div style={{width: '30%'}}>
    <UIKit.Progress
      value={60}
      colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]}
    />
  </div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Progress value={10} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={40} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={60} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
```

<!--/GITHUB_BLOCK-->

## Pila

<!--LANDING_BLOCK

<ExampleBlock
  code={`
<Progress
  stack={[
    {theme: 'default', content: 'First', value: 25},
    {theme: 'success', content: 'Second', value: 25},
    {theme: 'warning', content: 'Third', value: 25},
    {theme: 'danger', content: 'Fourth', value: 25},
  ]}
/>
<Progress text="Progress with custom colors"
  stack={[
    {color: '#6e5d8c', value: 33.333333333333336},
    {color: '#5b785b', value: 33.333333333333336},
    {color: '#956069', value: 33.333333333333336},
  ]}
/>
`}
>
<div style={{width: '30%'}}>
  <UIKit.Progress
    stack={[
      {theme: 'default', content: 'First', value: 25},
      {theme: 'success', content: 'Second', value: 25},
      {theme: 'warning', content: 'Third', value: 25},
      {theme: 'danger', content: 'Fourth', value: 25},
    ]}
  />
</div>
<div style={{width: '30%'}}>
  <UIKit.Progress text="Progress with custom colors"
    stack={[
      {color: '#6e5d8c', value: 33.333333333333336},
      {color: '#5b785b', value: 33.333333333333336},
      {color: '#956069', value: 33.333333333333336},
    ]}
  />
</div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Progress stack={[
  {theme: 'default', content: 'First', value: 25},
  {theme: 'success', content: 'Second', value: 25},
  {theme: 'warning', content: 'Third', value: 25},
  {theme: 'danger', content: 'Fourth', value: 25},
]} />
<Progress text="Progress with custom colors" stack={[
  {color: '#6e5d8c', value: 33.333333333333336},
  {color: '#5b785b', value: 33.333333333333336},
  {color: '#956069', value: 33.333333333333336},
]} />
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre          | Descripción                                                                                                                               |                   Tipo                   | Predeterminado |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------: | :------------: |
| className       | `class` Atributo HTML                                                                                                                     |                 `string`                 |                |
| colorStops      | Establece puntos de interrupción con temas                                                                                                | `Matriz<{theme: string; stop: number;}>` |                |
| colorStopsValue | Establece el valor para elegir la parada actual o un valor alternativo para ColorStops. El rango disponible es de 0 a 100.                |                 `number`                 |                |
| cargando        | Alterna el estado `loading`                                                                                                               |                `boolean`                 |    `false`     |
| tamaño          | Establece el tamaño de la barra de progreso. El texto de la barra de progreso solo se puede mostrar en `"m"` tamaño.                      |                 `string`                 |     `"m"`      |
| pila            | Configuración de la barra de progreso compuesta. No es obligatorio si `value` se proporciona un.                                          |             `Matriz<Stack>`              |                |
| stackClassName  | `class` Atributo HTML de la pila                                                                                                          |                 `string`                 |                |
| mensaje         | Texto dentro de la barra de progreso                                                                                                      |               `ReactNode`                |                |
| canción         | Establece el color de progreso                                                                                                            |                 `string`                 |  `"default"`   |
| valor           | Valor de progreso actual. El rango disponible es de 0 a 100. El uso del valor de la `stack` propiedad es opcional y se usa como MaxValue. |                 `number`                 |                |

### `Stack`

| Nombre    | Descripción                                                                                                                                 |    Tipo     | Predeterminado |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :---------: | :------------: |
| className | `class` Atributo HTML del elemento stack                                                                                                    |  `string`   |                |
| color     | Establece el color de fondo del atributo `style` HTML                                                                                       |  `string`   |                |
| contenido | Contenido de elementos de pila                                                                                                              | `ReactNode` |                |
| título    | `title` Atributo HTML                                                                                                                       |  `string`   |                |
| canción   | Establece el color del elemento de pila                                                                                                     |  `string`   |  `"default"`   |
| valor     | Valor de progreso actual. El rango disponible es de 0 a 100. El uso del valor de la `stack` propiedad es opcional y se usa como `maxValue`. |  `number`   |                |
| qa        | `data-qa` Atributo HTML, usado para realizar pruebas                                                                                        |  `string`   |                |

## API CSS

| Nombre                                 | Descripción                        |
| :------------------------------------- | :--------------------------------- |
| `--g-progress-empty-text-color`        | Color `Progress` de texto vacío    |
| `--g-progress-filled-text-color`       | Color `Progress` del texto relleno |
| `--g-progress-empty-background-color`  | Color `Progress` de fondo vacío    |
| `--g-progress-filled-background-color` | Color de `Progress` fondo relleno  |
