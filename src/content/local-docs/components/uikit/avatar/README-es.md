<!--GITHUB_BLOCK-->

# Avatar

<!--/GITHUB_BLOCK-->

Este componente está diseñado para renderizar avatares. Tiene tres tipos básicos de avatar: imagen, icono y texto (iniciales del nombre). Todos estos tipos tienen propiedades especiales para configurar el comportamiento y la apariencia.

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

## Tipos

### Imagen

Este componente se puede usar para renderizar avatares usando imágenes. Para proporcionar una imagen, usa la propiedad `imgUrl`.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" size="l" />;
}
SANDBOX-->

También puedes proporcionar la propiedad `srcSet` para cargar imágenes de diferentes tamaños.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352"
            srcSet="https://loremflickr.com/57/43/cats?lock=2879400393572352 1x, https://loremflickr.com/131/98/cats?lock=4373954936438784 2x, https://loremflickr.com/164/123/cats?lock=3007328513163264 3x, https://loremflickr.com/225/169/cats?lock=8243879964835840 4x"
            size="l"
        />
    );
}
SANDBOX-->

El componente `Avatar` tiene la propiedad `fallbackImgUrl` que te permite proporcionar la imagen que se muestra cuando ocurre un error al cargar la imagen, a través del enlace `imgUrl` (error CSP o imagen original no encontrada).

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="random_link"
            fallbackImgUrl="https://loremflickr.com/640/480/cats?lock=3552647338524672"
            size="l"
        />
    );
}
SANDBOX-->

### Icono

Este componente se puede usar para renderizar avatares usando iconos. Usa la propiedad `icon` para proporcionar un icono, de la misma manera que lo harías con el componente `Icon`.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar icon={GraduationCap} size="l" />;
}
SANDBOX-->

### Texto

Este componente se puede usar para renderizar avatares usando texto. Usa la propiedad `text` para ello. El texto se renderiza como iniciales (primeras letras de dos palabras) o simplemente las dos primeras letras de una sola palabra.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" size="l" />
            <Avatar text="Guardian" size="l" />
        </>
    );
}
SANDBOX-->

## Apariencia

### Tema y vista

El componente `Avatar` tiene temas predefinidos (`normal`, `brand`) y vistas (`filled`, `outlined`).

El tema predeterminado es `normal` y la vista predeterminada es `filled`.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar icon={GraduationCap} size="l" theme="normal" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="normal" view="outlined" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="outlined" />
        </>
    );
}
SANDBOX-->

### Colores personalizados

También puedes proporcionar colores personalizados a través de las propiedades `backgroundColor`, `borderColor` y `color` (esta última solo funciona para avatares de icono y texto). Estos colores tienen una prioridad mayor que los colores del tema.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar
                text="Charles Darwin"
                size="l"
                backgroundColor="var(--g-color-base-danger-medium)"
                color="var(--g-color-text-primary)"
            />
            <Avatar text="Charles Darwin" size="l" borderColor="var(--g-color-line-misc)" />
        </>
    );
}
SANDBOX-->

### Tamaño

Usa la propiedad `size` para gestionar el tamaño del `Avatar`. El tamaño predeterminado es `m`. Los valores posibles son `3xs`, `2xs`, `xs`, `s`, `m`, `l` y `xl`.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" size="3xs" />
            <Avatar text="Charles Darwin" theme="brand" size="2xs" />
            <Avatar text="Charles Darwin" theme="brand" size="xs" />
            <Avatar text="Charles Darwin" theme="brand" size="s" />
            <Avatar text="Charles Darwin" theme="brand" size="m" />
            <Avatar text="Charles Darwin" theme="brand" size="l" />
            <Avatar text="Charles Darwin" theme="brand" size="xl" />
        </>
    );
}
SANDBOX-->

### Forma

Usa la propiedad `shape` para gestionar la forma del `Avatar`. La forma predeterminada es `circle`. Los valores posibles son `circle` y `square`.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" shape="circle" />
            <Avatar text="Charles Darwin" theme="brand" shape="square" />
        </>
    );
}
SANDBOX-->

## Propiedades

### Comunes

| Nombre             | Descripción                                |                      Tipo                       | Valor predeterminado |
| :----------------- | :----------------------------------------- | :---------------------------------------------: | :------------------: |
| size             | Tamaño del avatar                                | `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'` |         `m`          |
| theme            | Tema del avatar                                |              `'normal'` `'brand'`               |       `normal`       |
| view             | Opciones de relleno y contorno del avatar        |             `'filled'` `'outlined'`             |       `filled`       |
| shape            | Forma del avatar                                 |              `'circle'` `'square'`              |       `circle`       |
| backgroundColor  | Color de fondo personalizado                   |                    `string`                     |                      |
| borderColor      | Color de borde personalizado                   |                    `string`                     |                      |
| title            | Atributo `title` de HTML                       |                    `string`                     |                      |
| aria-label       | `aria-label` para la sección del avatar        |                    `string`                     |                      |
| aria-labelledby  | `aria-labelledby` para la sección del avatar   |                    `string`                     |                      |
| aria-describedby | `aria-describedby` para el bloque del avatar   |                    `string`                     |                      |
| aria-details     | `aria-details` para el bloque del avatar       |                    `string`                     |                      |
| className        | Clase CSS personalizada para el elemento raíz  |                    `string`                     |                      |
| style            | Atributo `style` de HTML                       |              `React.CSSProperties`              |                      |
| qa               | Atributo `data-qa` de HTML, usado para pruebas |                    `string`                     |                      |

### Específico de la imagen

| Nombre            | Descripción                               |        Tipo        |   Valor predeterminado |
| :---------------- | :---------------------------------------- | :----------------: | :--------------------: |
| imgUrl            | Atributo `src` de `img` en HTML           |      `string`      |                        |
| fallbackImgUrl    | Imagen de respaldo que se muestra si ocurre un error |      `string`      |                        |
| sizes             | Atributo `sizes` de `img` en HTML         |      `string`      |                        |
| srcSet            | Atributo `srcSet` de `img` en HTML        |      `string`      |                        |
| alt               | Atributo `alt` de `img` en HTML           |      `string`      |      props.title       |
| loading           | Atributo `loading` de `img` en HTML       | `'eager'` `'lazy'` |                        |
| withImageBorder | Añadir borde predeterminado para la imagen |     `boolean`      |                        |

### Específico del icono

| Nombre  | Descripción        |    Tipo    | Valor predeterminado |
| :------ | :----------------- | :--------: | :------------------: |
| icon  | Fuente del icono SVG | `IconData` |                      |
| color | Color del icono personalizado  |  `string`  |                      |

### Específico del texto

| Nombre  | Descripción       |   Type   | Valor predeterminado |
| :------ | :---------------- | :------: | :------------------: |
| text  | Texto del avatar       | `string` |                      |
| color | Color del texto personalizado | `string` |                      |

## API CSS

| Nombre                            | Descripción             |
| :------------------------------ | :---------------------- |
| `--g-avatar-size`               | Tamaño (ancho y alto) |
| `--g-avatar-border-width`       | Ancho del borde            |
| `--g-avatar-inner-border-width` | Ancho del borde interior      |
| `--g-avatar-border-color`       | Color del borde            |
| `--g-avatar-background-color`   | Color de fondo        |
| `--g-avatar-text-color`         | Color del icono y texto     |
| `--g-avatar-font-weight`        | Peso de la fuente del texto        |
| `--g-avatar-font-size`          | Tamaño de la fuente del texto          |
| `--g-avatar-line-height`        | Altura de línea del texto        |