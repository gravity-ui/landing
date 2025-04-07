<!--GITHUB_BLOCK-->

# Casilla de verificación

<!--/GITHUB_BLOCK-->

```tsx
import {Checkbox} from '@gravity-ui/uikit';
```

El `Checkbox` componente permite al usuario seleccionar o deseleccionar un valor específico.

## Estados

A `Checkbox` puede tener diferentes estados:

- Comprobado: La casilla de verificación está marcada.
- Discapacitado: La casilla de verificación no está disponible.
- Indeterminado: La casilla de verificación se encuentra en un estado intermedio entre estar marcada y desmarcada.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Checkbox size="l" checked={false}>Unchecked</Checkbox>
<Checkbox size="l" checked>Checked</Checkbox>
<Checkbox size="l" disabled>Disabled</Checkbox>
<Checkbox size="l" indeterminate>Indeterminate</Checkbox>
`}
>
    <UIKit.Checkbox size="l" checked={false}>Unchecked</UIKit.Checkbox>
    <UIKit.Checkbox size="l" checked>Checked</UIKit.Checkbox>
    <UIKit.Checkbox size="l" disabled>Disabled</UIKit.Checkbox>
    <UIKit.Checkbox size="l" indeterminate>Indeterminate</UIKit.Checkbox>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Checkbox size="l" checked={false}>Unchecked</Checkbox>
<Checkbox size="l" checked>Checked</Checkbox>
<Checkbox size="l" disabled>Disabled</Checkbox>
<Checkbox size="l" indeterminate>Indeterminate</Checkbox>
```

<!--/GITHUB_BLOCK-->

## Tamaño

Usa la `size` propiedad para administrar el `Checkbox` tamaño. El tamaño predeterminado es `m`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Checkbox size="m">M Size</Checkbox>
<Checkbox size="l">L Size</Checkbox>
`}
>
    <UIKit.Checkbox size="m">M Size</UIKit.Checkbox>
    <UIKit.Checkbox size="l">L Size</UIKit.Checkbox>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Checkbox size="m">M Size</Checkbox>
<Checkbox size="l">L Size</Checkbox>
```

<!--/GITHUB_BLOCK-->

## Etiqueta

Puede asignar una etiqueta a un usuario `Checkbox` de la `content` propiedad o proporcionarla como una propiedad secundaria.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
 <div>
  <Checkbox content="Content" size="l" />
  <div
      style={{
          marginTop: 10,
      }}
  >
      <Checkbox size="l">
          <span>Content as children</span>
      </Checkbox>
  </div>
</div>
`}
>
 <div>
  <UIKit.Checkbox content="Content" size="l" />
  <div
      style={{
          marginTop: 10,
      }}
  >
      <UIKit.Checkbox size="l">
          <span>Content as children</span>
      </UIKit.Checkbox>
  </div>
</div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Checkbox content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Checkbox size="l">
      <span>Content as children</span>
    </Checkbox>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre         | Descripción                                                                                                                                           |                       Tipo                        | Predeterminado |
| :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------: | :------------: |
| niños          | Contenido de la casilla de verificación (normalmente, una etiqueta).                                                                                  |                    `ReactNode`                    |                |
| contenido      | Contenido de las casillas de verificación (alternativo a los niños).                                                                                  |                    `ReactNode`                    |                |
| inhabilitado   | Cambia el `disabled` estado de la casilla de verificación.                                                                                            |                     `boolean`                     |    `false`     |
| comprobado     | Cambia el `checked` estado de la casilla de verificación.                                                                                             |                     `boolean`                     |    `false`     |
| defaultChecked | Establece el estado inicial de verificación cuando se monta el componente.                                                                            |                     `boolean`                     |    `false`     |
| onUpdate       | Se activa cuando el usuario cambia el estado de la casilla de verificación y proporciona el valor marcado como argumento de devolución de llamada.    |           `(checked: boolean) => void`            |                |
| onChange       | Se activa cuando el usuario cambia el estado de la casilla de verificación y proporciona el evento de cambio como argumento de devolución de llamada. |                    `Function`                     |                |
| onFocus        | Controlador de eventos para usar cuando el elemento de entrada de la casilla de verificación recibe el foco.                                          |                    `Function`                     |                |
| onBlur         | Controlador de eventos para usar cuando el elemento de entrada de la casilla de verificación pierde el foco.                                          |                    `Function`                     |                |
| tamaño         | Determina el tamaño de la casilla de verificación.                                                                                                    |                      `m` `l`                      |      `m`       |
| identificación | `id` Atributo HTML                                                                                                                                    |                     `string`                      |                |
| qa             | `data-qa` Atributo HTML, usado para realizar pruebas                                                                                                  |                     `string`                      |                |
| estilo         | `style` Atributo HTML                                                                                                                                 |               `React.CSSProperties`               |                |
| className      | `class` Atributo HTML                                                                                                                                 |                     `string`                      |                |
| título         | `title` Atributo HTML                                                                                                                                 |                     `string`                      |                |
| nombre         | `name` Atributo HTML para el elemento de entrada.                                                                                                     |                     `string`                      |                |
| valor          | `value` Atributo HTML para el elemento de entrada.                                                                                                    |                     `string`                      |                |
| indeterminado  | Cambia el `indeterminate` estado de la casilla de verificación.                                                                                       |                     `boolean`                     |    `false`     |
| controlProps   | Propiedades adicionales para el elemento de entrada subyacente.                                                                                       | `Atributos HTML de React.Input<HTMLInputElement>` |                |
| controlRef     | Refiere al elemento de entrada subyacente.                                                                                                            |          `Reactar.Ref<HTMLInputElement>`          |                |
