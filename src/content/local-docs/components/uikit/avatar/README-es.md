<!--GITHUB_BLOCK-->

# Avatar

<!--/GITHUB_BLOCK-->

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

Este componente está destinado a renderizar avatares. Tiene tres tipos básicos de avatar: imagen, icono y texto (iniciales del nombre). Todos estos tipos tienen propiedades especiales para configurar el comportamiento y la apariencia.

## Tipos

### Imagen

Este componente puede usarse para renderizar avatares usando imágenes. Para proporcionar una imagen, use la propiedad `imgUrl`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" size="l" />
`}
>
    <UIKit.Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" size="l" />
</ExampleBlock>

LANDING_BLOCK-->

También puede proporcionar la propiedad `srcSet` para cargar imágenes de diferentes tamaños.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" srcSet="https://loremflickr.com/57/43/cats?lock=2879400393572352 1x, https://loremflickr.com/131/98/cats?lock=4373954936438784 2x, https://loremflickr.com/164/123/cats?lock=3007328513163264 3x, https://loremflickr.com/225/169/cats?lock=8243879964835840 4x" size="l" />
`}
>
    <UIKit.Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" srcSet="https://loremflickr.com/57/43/cats?lock=2879400393572352 1x, https://loremflickr.com/131/98/cats?lock=4373954936438784 2x, https://loremflickr.com/164/123/cats?lock=3007328513163264 3x, https://loremflickr.com/225/169/cats?lock=8243879964835840 4x" size="l" />
</ExampleBlock>

LANDING_BLOCK-->

El componente `Avatar` tiene la propiedad `fallbackImgUrl` que le permite proporcionar la imagen que se muestra cuando ocurre un error de carga de imagen a través del enlace `imgUrl` (error CSP o no hay imagen original).

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Avatar imgUrl="random_link" fallbackImgUrl="https://loremflickr.com/640/480/cats?lock=3552647338524672" size="l" />
`}
>
    <UIKit.Avatar imgUrl="random_link" fallbackImgUrl="https://loremflickr.com/640/480/cats?lock=3552647338524672" size="l" />
</ExampleBlock>

LANDING_BLOCK-->

### Icono

Este componente puede usarse para renderizar avatares usando iconos. Use la propiedad `icon` para proporcionar un icono, tal como lo haría en el caso del componente `Icon`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
import {GraduationCap} from '@gravity-ui/icons';

<Avatar icon={GraduationCap} size="l" />
`}
>
    <UIKit.Avatar icon={'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202 1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202ZM1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.896 1.896 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0V7.643Zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447Z" clip-rule="evenodd"/></svg>'} size="l" />
</ExampleBlock>

LANDING_BLOCK-->

### Texto

Este componente puede usarse para renderizar avatares usando texto. Use la propiedad `text` para eso. El texto se renderiza como iniciales (primeras letras de dos palabras) o simplemente las dos primeras letras de una sola palabra.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Avatar text="Charles Darwin" size="l" />
<Avatar text="Guardian" size="l" />
`}
>
    <UIKit.Avatar text="Charles Darwin" size="l" />
    <UIKit.Avatar text="Guardian" size="l" />
</ExampleBlock>

LANDING_BLOCK-->

## Apariencia

### Tema y vista

El componente `Avatar` tiene temas predefinidos (`normal`, `brand`) y vistas (`filled`, `outlined`).

El tema predeterminado es `normal` y la vista predeterminada es `filled`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
import {GraduationCap} from '@gravity-ui/icons';

<Avatar icon={GraduationCap} size="l" theme="normal" view="filled" />
<Avatar icon={GraduationCap} size="l" theme="brand" view="filled" />
<Avatar icon={GraduationCap} size="l" theme="normal" view="outlined" />
<Avatar icon={GraduationCap} size="l" theme="brand" view="outlined" />
`}
>
    <UIKit.Avatar icon={'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202 1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202ZM1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.896 1.896 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0V7.643Zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447Z" clip-rule="evenodd"/></svg>'} size="l" theme="normal" view="filled" />
    <UIKit.Avatar icon={'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202 1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202ZM1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.896 1.896 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0V7.643Zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447Z" clip-rule="evenodd"/></svg>'} size="l" theme="brand" view="filled" />
    <UIKit.Avatar icon={'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202 1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202ZM1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.896 1.896 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0V7.643Zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447Z" clip-rule="evenodd"/></svg>'} size="l" theme="normal" view="outlined" />
    <UIKit.Avatar icon={'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202 1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202ZM1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.896 1.896 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0V7.643Zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447Z" clip-rule="evenodd"/></svg>'} size="l" theme="brand" view="outlined" />
</ExampleBlock>

LANDING_BLOCK-->

### Colores personalizados

También puede proporcionar colores personalizados a través de las propiedades `backgroundColor`, `borderColor` y `color` (esta última funciona solo para avatares de icono y texto). Estos colores tienen una prioridad más alta que los colores del tema.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Avatar text="Charles Darwin" size="l" backgroundColor="var(--g-color-base-danger-medium)" color="var(--g-color-text-primary)" />
<Avatar text="Charles Darwin" size="l" borderColor="var(--g-color-line-misc)" />
`}
>
    <UIKit.Avatar text="Charles Darwin" size="l" backgroundColor="var(--g-color-base-danger-medium)" color="var(--g-color-text-primary)" />
    <UIKit.Avatar text="Charles Darwin" size="l" borderColor="var(--g-color-line-misc)" />
</ExampleBlock>

LANDING_BLOCK-->

### Tamaño

Use la propiedad `size` para gestionar el tamaño del `Avatar`. El tamaño predeterminado es `m`. Los valores posibles son `3xs`, `2xs`, `xs`, `s`, `m`, `l` y `xl`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Avatar text="Charles Darwin" theme="brand" size="3xs" />
<Avatar text="Charles Darwin" theme="brand" size="2xs" />
<Avatar text="Charles Darwin" theme="brand" size="xs" />
<Avatar text="Charles Darwin" theme="brand" size="s" />
<Avatar text="Charles Darwin" theme="brand" size="m" />
<Avatar text="Charles Darwin" theme="brand" size="l" />
<Avatar text="Charles Darwin" theme="brand" size="xl" />
`}
>
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="3xs" />
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="2xs" />
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="xs" />
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="s" />
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="m" />
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="l" />
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="xl" />
</ExampleBlock>

LANDING_BLOCK-->

## Propiedades

### Comunes

| Nombre           | Descripción                                   |                      Tipo                       | Predeterminado |
| :--------------- | :-------------------------------------------- | :---------------------------------------------: | :------------: |
| size             | Tamaño del avatar                             | `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'` |      `m`       |
| theme            | Tema del avatar                               |              `'normal'` `'brand'`               |    `normal`    |
| view             | Opciones de relleno y contorno del avatar     |             `'filled'` `'outlined'`             |    `filled`    |
| backgroundColor  | Color de fondo personalizado                  |                    `string`                     |                |
| borderColor      | Color de borde personalizado                  |                    `string`                     |                |
| title            | Atributo HTML `title`                         |                    `string`                     |                |
| aria-label       | `aria-label` para la sección del avatar       |                    `string`                     |                |
| aria-labelledby  | `aria-labelledby` para la sección del avatar  |                    `string`                     |                |
| aria-describedby | `aria-describedby` para el bloque del avatar  |                    `string`                     |                |
| aria-details     | `aria-details` para el bloque del avatar      |                    `string`                     |                |
| className        | Clase CSS personalizada para el elemento raíz |                    `string`                     |                |
| style            | Atributo HTML `style`                         |              `React.CSSProperties`              |                |
| qa               | Atributo HTML `data-qa`, usado para pruebas   |                    `string`                     |                |

### Específicas de imagen

| Nombre         | Descripción                                    |        Tipo        | Predeterminado |
| :------------- | :--------------------------------------------- | :----------------: | :------------: |
| imgUrl         | Atributo HTML `src` de `img`                   |      `string`      |                |
| fallbackImgUrl | Imagen de respaldo mostrada si ocurre un error |      `string`      |                |
| sizes          | Atributo HTML `sizes` de `img`                 |      `string`      |                |
| srcSet         | Atributo HTML `srcSet` de `img`                |      `string`      |                |
| alt            | Atributo HTML `alt` de `img`                   |      `string`      |  props.title   |
| loading        | Atributo HTML `loading` de `img`               | `'eager'` `'lazy'` |                |

### Específicas de icono

| Nombre | Descripción                  |    Tipo    | Predeterminado |
| :----- | :--------------------------- | :--------: | :------------: |
| icon   | Fuente del icono SVG         | `IconData` |                |
| color  | Color de icono personalizado |  `string`  |                |

### Específicas de texto

| Nombre | Descripción                  |   Tipo   | Predeterminado |
| :----- | :--------------------------- | :------: | :------------: |
| text   | Texto del avatar             | `string` |                |
| color  | Color de texto personalizado | `string` |                |

## API CSS

| Nombre                          | Descripción                   |
| :------------------------------ | :---------------------------- |
| `--g-avatar-size`               | Tamaño (ancho y alto)         |
| `--g-avatar-border-width`       | Ancho del borde               |
| `--g-avatar-inner-border-width` | Ancho del borde interno       |
| `--g-avatar-border-color`       | Color del borde               |
| `--g-avatar-background-color`   | Color de fondo                |
| `--g-avatar-text-color`         | Color de icono y texto        |
| `--g-avatar-font-weight`        | Peso de la fuente del texto   |
| `--g-avatar-font-size`          | Tamaño de la fuente del texto |
| `--g-avatar-line-height`        | Altura de línea del texto     |
