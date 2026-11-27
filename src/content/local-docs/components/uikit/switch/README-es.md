<!--GITHUB_BLOCK-->

# Switch

<!--/GITHUB_BLOCK-->

El componente `Switch` se utiliza para alternar entre dos estados: normalmente, entre **activado** y **desactivado**, o **habilitado** y **deshabilitado**.

```tsx
import {Switch} from '@gravity-ui/uikit';
```

## Estados

Un `Switch` puede tener diferentes estados:

- Marcado: Cuando el interruptor tiene el estado **Activado**.
- Deshabilitado: Cuando el interruptor no está disponible.

<!--SANDBOX
import {Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Switch size="l" checked={false}>
                Unchecked
            </Switch>
            <Switch size="l" checked>
                Checked
            </Switch>
            <Switch size="l" disabled>
                Disabled
            </Switch>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="l" checked={false}>Unchecked</Switch>
<Switch size="l" checked>Checked</Switch>
<Switch size="l" disabled>Disabled</Switch>
```

<!--/GITHUB_BLOCK-->

## Tamaño

Utiliza la propiedad `size` para gestionar el tamaño del `Switch`. El tamaño predeterminado es `m`.

<!--SANDBOX
import {Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Switch size="s">S Size</Switch>
            <Switch size="m">M Size</Switch>
            <Switch size="l">L Size</Switch>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="s">S Size</Switch>
<Switch size="m">M Size</Switch>
<Switch size="l">L Size</Switch>
```

<!--/GITHUB_BLOCK-->

## Etiqueta

Puedes asignar una etiqueta a un `Switch` utilizando la propiedad `content` o proporcionarla como propiedad hija.

<!--SANDBOX
import {Box, Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <div>
            <Switch content="Content" size="l" />
            <Box spacing={{mt: 2}}>
                <Switch size="l">
                    <span>Content as children</span>
                </Switch>
            </Box>
        </div>
    );
}
SANDBOX-->

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

| Nombre           | Descripción                                                                                              |                     Tipo                      | Por defecto |
| :--------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-------: |
| children       | El contenido del interruptor (normalmente, una etiqueta)                                                             |                  `ReactNode`                  |           |
| content        | El contenido del interruptor (alternativa a children)                                                      |                  `ReactNode`                  |           |
| disabled       | Activa/desactiva el estado `disabled` del interruptor                                                               |                   `boolean`                   | `false` |
| loading        | Activa/desactiva el estado `loading` del interruptor                                                                |                   `boolean`                   | `false` |
| checked        | Activa/desactiva el estado `checked` del interruptor                                                                |                   `boolean`                   | `false` |
| defaultChecked | Establece el estado inicial marcado cuando el componente se monta                                             |                   `boolean`                   | `false` |
| onUpdate       | Se dispara cuando el estado del interruptor es cambiado por el usuario y proporciona el valor marcado como argumento de callback |         `(checked: boolean) => void`          |           |
| onChange       | Se dispara cuando el estado del interruptor es cambiado por el usuario y proporciona el evento de cambio como argumento de callback  |                  `Function`                   |           |
| onFocus        | Manejador de eventos para usar cuando el elemento de entrada del interruptor recibe foco                                        |                  `Function`                   |           |
| onBlur         | Manejador de eventos para usar cuando el elemento de entrada del interruptor pierde foco                                           |                  `Function`                   |           |
| size           | Establece el tamaño del interruptor                                                                              |                  `s` `m` `l`                  |   `m`   |
| id             | Atributo `id` de HTML                                                                                      |                   `string`                    |           |
| qa             | Atributo `data-qa` de HTML, usado para pruebas                                                               |                   `string`                    |           |
| style          | Atributo `style` de HTML                                                                                   |             `React.CSSProperties`             |           |
| className      | Atributo `class` de HTML                                                                                   |                   `string`                    |           |
| title          | Atributo `title` de HTML                                                                                   |                   `string`                    |           |
| name           | Atributo `name` de HTML para el elemento de entrada                                                              |                   `string`                    |           |
| value          | Atributo `value` de HTML para el elemento de entrada                                                             |                   `string`                    |           |
| indeterminate  | Activa/desactiva el estado indeterminado del interruptor                                                            |                   `boolean`                   | `false` |
| controlProps   | Propiedades adicionales para el elemento de entrada subyacente                                                    | `React.InputHTMLAttributes<HTMLInputElement>` |           |
| controlRef     | Ref al elemento de entrada subyacente                                                                      |         `React.Ref<HTMLInputElement>`         |           |
