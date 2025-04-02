<!--GITHUB_BLOCK-->

# Interruptor

<!--/GITHUB_BLOCK-->

```tsx
import {Switch} from '@gravity-ui/uikit';
```

El `Switch` componente se usa para alternar entre dos estados: normalmente, entre **activado** y **desactivado**, o **activado** y \*\*\*\* desactivado.

## Estados

A `Switch` puede tener diferentes estados:

- Comprobado: Cuando el conmutador esté **en** estado encendido.
- Discapacitado: Cuando el conmutador no está disponible.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Switch size="l" checked={false}>Unchecked</Switch>
<Switch size="l" checked>Checked</Switch>
<Switch size="l" disabled>Disabled</Switch>
`}
>
    <UIKit.Switch size="l" checked={false}>Unchecked</UIKit.Switch>
    <UIKit.Switch size="l" checked>Checked</UIKit.Switch>
    <UIKit.Switch size="l" disabled>Disabled</UIKit.Switch>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="l" checked={false}>Unchecked</Switch>
<Switch size="l" checked>Checked</Switch>
<Switch size="l" disabled>Disabled</Switch>
```

<!--/GITHUB_BLOCK-->

## Tamaño

Usa la `size` propiedad para administrar el `Switch` tamaño. El tamaño predeterminado es `m`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Switch size="m">M Size</Switch>
<Switch size="l">L Size</Switch>
`}
>
    <UIKit.Switch size="m">M Size</UIKit.Switch>
    <UIKit.Switch size="l">L Size</UIKit.Switch>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="m">M Size</Switch>
<Switch size="l">L Size</Switch>
```

<!--/GITHUB_BLOCK-->

## Etiqueta

Puede asignar una etiqueta a un usuario `Switch` de la `content` propiedad o proporcionarla como una propiedad secundaria.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<div>
  <Switch content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Switch size="l">
      <span>Content as children</span>
    </Switch>
  </div>
</div>
`}
>
<div>
  <UIKit.Switch content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <UIKit.Switch size="l">
      <span>Content as children</span>
    </UIKit.Switch>
  </div>
</div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Switch content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Switch size="l">
      <span>Content as children</span>
    </Switch>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre         | Descripción                                                                                                                           |                       Tipo                        | Predeterminado |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------ | :-----------------------------------------------: | :------------: |
| niños          | El contenido del conmutador (normalmente, una etiqueta)                                                                               |                    `ReactNode`                    |                |
| contenido      | El contenido del interruptor (alternativo a los niños)                                                                                |                    `ReactNode`                    |                |
| inhabilitado   | Alterna el `disabled` estado del conmutador                                                                                           |                     `boolean`                     |    `false`     |
| comprobado     | Alterna el `checked` estado del conmutador                                                                                            |                     `boolean`                     |    `false`     |
| defaultChecked | Establece el estado inicial de verificación cuando se monta el componente                                                             |                     `boolean`                     |    `false`     |
| onUpdate       | Se activa cuando el usuario cambia el estado del conmutador y proporciona el valor marcado como argumento de devolución de llamada    |           `(checked: boolean) => void`            |                |
| onChange       | Se activa cuando el usuario cambia el estado del conmutador y proporciona el evento de cambio como argumento de devolución de llamada |                    `Function`                     |                |
| onFocus        | Controlador de eventos para usar cuando el elemento de entrada del conmutador recibe el foco                                          |                    `Function`                     |                |
| onBlur         | Controlador de eventos para usar cuando el elemento de entrada del conmutador pierde el foco                                          |                    `Function`                     |                |
| tamaño         | Establece el tamaño del conmutador                                                                                                    |                      `m` `l`                      |      `m`       |
| identificación | `id` Atributo HTML                                                                                                                    |                     `string`                      |                |
| qa             | `data-qa` Atributo HTML, usado para realizar pruebas                                                                                  |                     `string`                      |                |
| estilo         | `style` Atributo HTML                                                                                                                 |               `React.CSSProperties`               |                |
| className      | `class` Atributo HTML                                                                                                                 |                     `string`                      |                |
| título         | `title` Atributo HTML                                                                                                                 |                     `string`                      |                |
| nombre         | `name` Atributo HTML para el elemento de entrada                                                                                      |                     `string`                      |                |
| valor          | `value` Atributo HTML para el elemento de entrada                                                                                     |                     `string`                      |                |
| indeterminado  | Alterna el estado indeterminado del conmutador                                                                                        |                     `boolean`                     |    `false`     |
| controlProps   | Propiedades adicionales para el elemento de entrada subyacente                                                                        | `Atributos HTML de React.Input<HTMLInputElement>` |                |
| controlRef     | Referencia al elemento de entrada subyacente                                                                                          |          `Reactar.Ref<HTMLInputElement>`          |                |
