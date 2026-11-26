`Link` es una parte del texto que, al hacer clic, lleva al usuario a otra parte de la página, a otra página dentro del servicio o a una página web externa.

```tsx
import {Link} from '@gravity-ui/uikit';
```

Su principal diferencia con [Button](../Button) es la función de navegación. La mayoría de las veces, un `Link` lleva a otra página o abre una nueva pestaña del navegador.

## Apariencia

Hay tres tipos de enlaces disponibles: `normal` (el habitual marrón), `primary` (negro) y `secondary` (gris). Puedes gestionarlo con la propiedad `view`. También puedes habilitar la visualización de que el enlace ya ha sido visitado usando la propiedad `visitable`.

### Normal

Este es el patrón de `link` más familiar y bien establecido. Se utiliza para resaltar visualmente un elemento dentro de un texto o tabla, y como parte de la navegación. Puedes usarlo para navegar tanto a páginas internas como a fuentes externas, incluida la documentación. Además, este tipo se utiliza para páginas de error y estados cero.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Primary

Este tipo se utiliza cuando está claro de forma nativa que un elemento es clickeable, pero usar un `Link` marrón sobrecargaría la interfaz y te impediría resaltar adecuadamente los puntos clave de una página.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Secondary

Al igual que el `Link` primario, este tipo se utiliza cuando está claro de forma nativa para el usuario que un elemento es clickeable, mientras que la navegación a través de él no es esencial y afecta a un pequeño número de escenarios. Su objetivo principal es no distraer al usuario de los puntos clave de la página. El tipo `Secondary` se utiliza con mayor frecuencia en las migas de pan o al mostrar atributos secundarios.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Visitable

Esta propiedad se utiliza para mostrar que el `Link` ya ha sido visitado.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## `href`

La propiedad `href` es obligatoria.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Uso

Puedes usar un `Link` tanto como un elemento de texto independiente como parte del texto:

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

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