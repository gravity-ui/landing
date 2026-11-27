<!--GITHUB_BLOCK-->

# Link

<!--/GITHUB_BLOCK-->

`Link` es una parte del texto que, al hacer clic, lleva al usuario a otra parte de la página, a otra página dentro del servicio o a una página web externa.

```tsx
import {Link} from '@gravity-ui/uikit';
```

Su principal diferencia con [Button](../Button) es la función de navegación. La mayoría de las veces, un `Link` lleva a otra página o abre una nueva pestaña del navegador.

## Apariencia

Hay tres tipos de enlaces disponibles: `normal` (el habitual marrón), `primary` (negro) y `secondary` (gris). Puedes gestionarlo con la propiedad `view`. También puedes habilitar la visualización de que el enlace ya ha sido visitado usando la propiedad `visitable`.

### Normal

Este es el patrón de `link` más familiar y bien establecido. Se utiliza para resaltar visualmente un elemento dentro de un texto o tabla, y como parte de la navegación. Puedes usarlo para navegar tanto a páginas internas como a fuentes externas, incluida la documentación. Además, este tipo se utiliza para páginas de error y estados cero.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link view="normal" href="#">Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="normal" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Primary

Este tipo se utiliza cuando está claro de forma nativa que un elemento es clickeable, pero usar un `Link` marrón sobrecargaría la interfaz y te impediría resaltar adecuadamente los puntos clave de una página.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link view="primary" href="#">Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="primary" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Secondary

Al igual que el `Link` primario, este tipo se utiliza cuando está claro de forma nativa para el usuario que un elemento es clickeable, mientras que la navegación a través de él no es esencial y afecta a un pequeño número de escenarios. Su objetivo principal es no distraer al usuario de los puntos clave de la página. El tipo `Secondary` se utiliza con mayor frecuencia en las migas de pan o al mostrar atributos secundarios.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link view="secondary" href="#">Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="secondary" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Visitable

Esta propiedad se utiliza para mostrar que el `Link` ya ha sido visitado.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link href="https://gravity-ui.com/" visitable>Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link href="https://gravity-ui.com/" visitable>
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

## `href`

La propiedad `href` es obligatoria.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link href="#">Link with href</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link href="#">Link with href</Link>
```

<!--/GITHUB_BLOCK-->

## Uso

Puedes usar un `Link` tanto como un elemento de texto independiente como parte del texto:

<!--SANDBOX
import {Link, Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>
                <Link href="#">what roles are active in the service</Link>
            </Text>
            <Text>
                Currently, this role can only be assigned to a{' '}
                <Link href="#">folder</Link> or <Link href="#">cloud</Link>
            </Text>
        </>
    );
}
SANDBOX-->

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

`Link` acepta cualquier prop válida del elemento `a` además de estas:

| Nombre      | Descripción                                |                 Tipo                 |  Por defecto   |
| :-------- | :----------------------------------------- | :----------------------------------: | :------------: |
| children  | Contenido del `Link`                       |          `React.ReactNode`           |                |
| href      | Atributo HTML `href`                       |               `string`               |                |
| qa        | Atributo HTML `data-qa`, usado para pruebas |               `string`               |                |
| underline | Muestra un subrayado debajo del `Link`     |              `boolean`               |    `false`     |
| view      | Apariencia del `Link`                      | `"normal"` `"primary"` `"secondary"` |   `"normal"`   |
| visitable | Muestra el estado CSS `:visitable`          |              `boolean`               |    `false`     |
