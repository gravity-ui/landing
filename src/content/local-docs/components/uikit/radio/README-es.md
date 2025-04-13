<!--GITHUB_BLOCK-->

# Radio

<!--/GITHUB_BLOCK-->

```tsx
import {Radio} from '@gravity-ui/uikit';
```

El `Radio` componente permite a los usuarios seleccionar una sola opción de una lista de opciones.

## Estados

`Radio` puede tener los siguientes estados:

- Comprobado: La radio está seleccionada.
- Discapacitado: La radio no está disponible para su selección.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Radio value="option 1" content="Unchecked" size="l" checked={false}/>
<Radio value="option 2" content="Checked" size="l" checked/>
<Radio value="option 3" content="Disabled" size="l" disabled/>
`}
>
    <UIKit.Radio value="option 1" content="Unchecked" size="l" checked={false}/>
    <UIKit.Radio value="option 2" content="Checked" size="l" checked/>
    <UIKit.Radio value="option 3" content="Disabled" size="l" disabled/>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Radio value="option 1" content="Unchecked" size="l" checked={false}/>
<Radio value="option 2" content="Checked" size="l" checked/>
<Radio value="option 3" content="Disabled" size="l" disabled/>
```

<!--/GITHUB_BLOCK-->

## Tamaño

Para gestionar el `Radio` tamaño, utilice la `size` propiedad. El tamaño predeterminado es `m`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Radio value="option 1" content="M Size" size="m"/>
<Radio value="option 2" content="L Size" size="l"/>
`}
>
    <UIKit.Radio value="option 1" content="M Size" size="m"/>
    <UIKit.Radio value="option 2" content="L Size" size="l"/>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Radio value="option 1" content="M Size" size="m"/>
<Radio value="option 2" content="L Size" size="l"/>
```

<!--/GITHUB_BLOCK-->

## Etiqueta

Puede asignar una etiqueta a un usuario `Radio` de la `content` propiedad o proporcionarla como una propiedad secundaria.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<div>
  <Radio content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Radio size="l">
      <span>Content as children</span>
    </Radio>
  </div>
</div>
`}
>
<div>
  <UIKit.Radio content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <UIKit.Radio size="l">
      <span>Content as children</span>
    </UIKit.Radio>
  </div>
</div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Radio content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Radio size="l">
      <span>Content as children</span>
    </Radio>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre         | Descripción                                                                                                                         |                       Tipo                        | Predeterminado |
| :------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------: | :------------: |
| niños          | El contenido de la radio (normalmente, una etiqueta).                                                                               |                    `ReactNode`                    |                |
| contenido      | El contenido de la radio (alternativa a los niños).                                                                                 |                    `ReactNode`                    |                |
| inhabilitado   | Cambia el `disabled` estado de la radio.                                                                                            |                     `boolean`                     |    `false`     |
| comprobado     | Cambia el `checked` estado de la radio.                                                                                             |                     `boolean`                     |    `false`     |
| defaultChecked | Establece el estado inicial de verificación cuando se monta el componente                                                           |                     `boolean`                     |    `false`     |
| onUpdate       | Se activa cuando el usuario cambia el estado de la radio y proporciona el valor marcado como argumento de devolución de llamada.    |           `(checked: boolean) => void`            |                |
| onChange       | Se activa cuando el usuario cambia el estado de la radio y proporciona el evento de cambio como argumento de devolución de llamada. |                    `Function`                     |                |
| onFocus        | Controlador de eventos para usar cuando el elemento de entrada de radio recibe el foco.                                             |                    `Function`                     |                |
| onBlur         | Controlador de eventos para usar cuando el elemento de entrada de radio pierde el foco.                                             |                    `Function`                     |                |
| tamaño         | Establece el tamaño de la radio.                                                                                                    |                      `m` `l`                      |      `m`       |
| identificación | `id` Atributo HTML                                                                                                                  |                     `string`                      |                |
| qa             | `data-qa` Atributo HTML, usado para realizar pruebas.                                                                               |                     `string`                      |                |
| estilo         | `style` Atributo HTML                                                                                                               |               `React.CSSProperties`               |                |
| className      | `class` Atributo HTML                                                                                                               |                     `string`                      |                |
| título         | `title` Atributo HTML                                                                                                               |                     `string`                      |                |
| nombre         | `name` Atributo HTML para el elemento de entrada                                                                                    |                     `string`                      |                |
| valor          | Valor de control                                                                                                                    |                     `string`                      |                |
| indeterminado  | Alterna el estado indeterminado de la radio.                                                                                        |                     `boolean`                     |    `false`     |
| controlProps   | Propiedades adicionales para el elemento de entrada subyacente                                                                      | `Atributos HTML de React.Input<HTMLInputElement>` |                |
| controlRef     | Referencia al elemento de entrada subyacente                                                                                        |          `Reactar.Ref<HTMLInputElement>`          |                |
