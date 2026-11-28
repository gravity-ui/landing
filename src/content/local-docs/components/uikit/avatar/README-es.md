Este componente está diseñado para renderizar avatares. Tiene tres tipos básicos de avatar: imagen, icono y texto (iniciales del nombre). Todos estos tipos tienen propiedades especiales para configurar el comportamiento y la apariencia.

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

## Tipos

### Imagen

Este componente se puede usar para renderizar avatares usando imágenes. Para proporcionar una imagen, use la propiedad `imgUrl`.

GRAVITY_TRANSLATION_BLOCK_0_END

También puede proporcionar la propiedad `srcSet` para cargar imágenes de diferentes tamaños.

GRAVITY_TRANSLATION_BLOCK_1_END

El componente `Avatar` tiene la propiedad `fallbackImgUrl` que le permite proporcionar la imagen que se muestra cuando ocurre un error al cargar la imagen, a través del enlace `imgUrl` (error de CSP o imagen original no encontrada).

GRAVITY_TRANSLATION_BLOCK_2_END

### Icono

Este componente se puede usar para renderizar avatares usando iconos. Use la propiedad `icon` para proporcionar un icono, al igual que lo haría en el caso del componente `Icon`.

GRAVITY_TRANSLATION_BLOCK_3_END

### Texto

Este componente se puede usar para renderizar avatares usando texto. Use la propiedad `text` para ello. El texto se renderiza como iniciales (primeras letras de dos palabras) o simplemente las dos primeras letras de una sola palabra.

GRAVITY_TRANSLATION_BLOCK_4_END

## Apariencia

### Tema y vista

El componente `Avatar` tiene temas predefinidos (`normal`, `brand`) y vistas (`filled`, `outlined`).

El tema predeterminado es `normal` y la vista predeterminada es `filled`.

GRAVITY_TRANSLATION_BLOCK_5_END

### Colores personalizados

También puede proporcionar colores personalizados a través de las propiedades `backgroundColor`, `borderColor` y `color` (esta última solo funciona para avatares de icono y texto). Estos colores tienen una prioridad mayor que los colores del tema.

GRAVITY_TRANSLATION_BLOCK_6_END

### Tamaño

Use la propiedad `size` para gestionar el tamaño del `Avatar`. El tamaño predeterminado es `m`. Los valores posibles son `3xs`, `2xs`, `xs`, `s`, `m`, `l` y `xl`.

GRAVITY_TRANSLATION_BLOCK_7_END

### Forma

Use la propiedad `shape` para gestionar la forma del `Avatar`. La forma predeterminada es `circle`. Los valores posibles son `circle` y `square`.

GRAVITY_TRANSLATION_BLOCK_8_END

## Propiedades

### Comunes

| Nombre             | Descripción                                |                      Type                       | Predeterminado |
| :----------------- | :----------------------------------------- | :---------------------------------------------: | :------------: |
| size               | Tamaño del avatar                          | `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'` |      `m`       |
| theme              | Tema del avatar                            |              `'normal'` `'brand'`               |    `normal`    |
| view               | Opciones de relleno y contorno del avatar  |             `'filled'` `'outlined'`             |    `filled`    |
| shape              | Forma del avatar                           |              `'circle'` `'square'`              |    `circle`    |
| backgroundColor    | Color de fondo personalizado               |                    `string`                     |                |
| borderColor        | Color de borde personalizado               |                    `string`                     |                |
| title              | Atributo HTML `title`                      |                    `string`                     |                |
| aria-label         | `aria-label` para la sección del avatar    |                    `string`                     |                |
| aria-labelledby    | `aria-labelledby` para la sección del avatar |                    `string`                     |                |
| aria-describedby   | `aria-describedby` para el bloque del avatar |                    `string`                     |                |
| aria-details       | `aria-details` para el bloque del avatar   |                    `string`                     |                |
| className          | Clase CSS personalizada para el elemento raíz |                    `string`                     |                |
| style              | Atributo HTML `style`                      |              `React.CSSProperties`              |                |
| qa                 | Atributo HTML `data-qa`, usado para pruebas |                    `string`                     |                |

### Específicas de imagen

| Nombre            | Descripción                               |        Tipo        | Por defecto |
| :---------------- | :---------------------------------------- | :----------------: | :---------: |
| imgUrl            | Atributo HTML `src` de la etiqueta `img`  |      `string`      |             |
| fallbackImgUrl    | Imagen de respaldo que se muestra si ocurre un error |      `string`      |             |
| sizes             | Atributo HTML `sizes` de la etiqueta `img` |      `string`      |             |
| srcSet            | Atributo HTML `srcSet` de la etiqueta `img` |      `string`      |             |
| loading           | Atributo HTML `loading` de la etiqueta `img` | `'eager'` `'lazy'` |             |
| withImageBorder | Añadir borde predeterminado para la imagen |     `boolean`      |             |

### Específico para iconos

| Nombre | Descripción           |    Tipo    | Por defecto |
| :----- | :-------------------- | :--------: | :---------: |
| icon   | Fuente del icono SVG  | `IconData` |             |
| color  | Color personalizado del icono |  `string`  |             |

### Específico para texto

| Nombre | Descripción           |   Tipo   | Por defecto |
| :----- | :-------------------- | :------: | :---------: |
| text   | Texto del avatar      | `string` |             |
| color  | Color personalizado del texto | `string` |             |

## API CSS

| Nombre                            | Descripción             |
| :-------------------------------- | :---------------------- |
| `--g-avatar-size`               | Tamaño (ancho y alto) |
| `--g-avatar-border-width`       | Ancho del borde            |
| `--g-avatar-inner-border-width` | Ancho del borde interior      |
| `--g-avatar-border-color`       | Color del borde            |
| `--g-avatar-background-color`   | Color de fondo        |
| `--g-avatar-text-color`         | Color del icono y texto     |
| `--g-avatar-font-weight`        | Peso de la fuente del texto        |
| `--g-avatar-font-size`          | Tamaño de la fuente del texto          |
| `--g-avatar-line-height`        | Altura de línea del texto        |