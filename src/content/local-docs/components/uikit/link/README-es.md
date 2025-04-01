<!--GITHUB_BLOCK-->

# Enlace

<!--/GITHUB_BLOCK-->

```tsx
import {Link} from '@gravity-ui/uikit';
```

`Link` es una parte del texto que, al hacer clic en ella, lleva al usuario a otra parte de la página, a otra página del servicio o a una página web externa.

Su principal diferencia con [Button](../Button) es la función de navegación. La mayoría de las veces, `Link` lleva a otra página o abre una nueva pestaña del navegador.

## Apariencia

Hay tres tipos de enlaces disponibles: `normal` (el marrón habitual), `primary` (negro) y `secondary` (gris). Puedes gestionarlo con la `view` propiedad. También puede habilitar la visualización de que ya se ha hecho clic en el enlace utilizando la `visitable` propiedad.

### Normal

Este es el `link` patrón más conocido y mejor establecido. Se usa para resaltar visualmente un elemento dentro de un texto o tabla, y como parte de la navegación. Puede usarlo para navegar tanto a páginas internas como a fuentes externas, incluida la documentación. Además, este tipo se usa para páginas de error y estados cero.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Link view="normal" href="#">Link</Link>
`}>
    <UIKit.Link view="normal" href="#">Link</UIKit.Link>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="normal" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Primaria

Este tipo se usa cuando está claro de forma nativa que se puede hacer clic en un elemento, pero el uso de un color marrón `Link` sobrecargará la interfaz e impedirá resaltar correctamente los puntos clave de una página.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Link view="primary" href="#">Link</Link>
`}>
    <UIKit.Link view="primary" href="#">Link</UIKit.Link>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="primary" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Secundaria

Al igual que el primario `Link`, este tipo se usa cuando el usuario tiene claro de forma nativa que se puede hacer clic en un elemento, mientras que navegar por él no es esencial y afecta a un número reducido de escenarios. Su objetivo principal es no distraer al usuario de los puntos clave de la página. Este `Secondary` tipo se usa con mayor frecuencia en rutas de navegación o cuando se muestran atributos secundarios.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Link view="secondary" href="#">Link</Link>
`}>
    <UIKit.Link view="secondary" href="#">Link</UIKit.Link>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="secondary" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Visitable

Esta propiedad se usa para mostrar que ya se `Link` ha hecho clic en ella.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Link href="https://gravity-ui.com/" visitable>Link</Link>
`}>
    <UIKit.Link href="https://gravity-ui.com/" visitable>Link</UIKit.Link>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Link href="https://gravity-ui.com/" visitable>
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

## `href`

La `href` propiedad es obligatoria.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Link href="#">Link with href</Link>
`}>
    <UIKit.Link href="#">Link with href</UIKit.Link>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Link href="#">Link with href</Link>
```

<!--/GITHUB_BLOCK-->

## Uso

Puedes usar un `Link` elemento de texto independiente y como parte del texto:

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Text>
    <Link href="#">what roles are active in the service</Link>
</Text>
<Text>
    Currently, this role can only be assigned to a <Link href="#">folder</Link> or <Link href="#">cloud</Link>
</Text>
`}>
    <UIKit.Text>
        <UIKit.Link href="#">what roles are active in the service</UIKit.Link>
    </UIKit.Text>
    <UIKit.Text>
        Currently, this role can only be assigned to a <UIKit.Link href="#">folder</UIKit.Link> or <UIKit.Link href="#">cloud</UIKit.Link>
    </UIKit.Text>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Text>
    <Link href="#">What roles are available in the service</Link>
</Text>
<Text>
    Currently, this role can only be assigned to a <Link href="#">folder</Link> or <Link href="#">cloud</Link>
</Text>
```

<!--/GITHUB_BLOCK-->

## Propiedades

`Link` acepta cualquier `a` elemento de apoyo válido además de estos:

| Nombre    | Descripción                                          |           Tipo           | Predeterminado |
| :-------- | :--------------------------------------------------- | :----------------------: | :------------: |
| niños     | `Link` contenido                                     |    `React.ReactNode`     |                |
| href      | `href` Atributo HTML                                 |         `string`         |                |
| qa        | `data-qa` Atributo HTML, usado para realizar pruebas |         `string`         |                |
| subrayar  | Muestra el subrayado debajo del `Link`               |        `boolean`         |    `false`     |
| vista     | `Link` apariencia                                    | `"normal"` `"secondary"` |   `"normal"`   |
| visitable | Muestra el estado de `:visitable` CSS                |        `boolean`         |    `false`     |
