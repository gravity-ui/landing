El componente Skeleton muestra una vista previa de marcador de posición de su contenido antes de que se carguen los datos. Esta vista previa se muestra para reducir la frustración por el tiempo de carga.

```tsx
import {Skeleton} from '@gravity-ui/uikit';
```

## Animación

Use la prop `animation` para controlar la animación de carga. El valor predeterminado es `'gradient'`.

| Valor        | Descripción                            |
| :----------- | :------------------------------------- |
| `'gradient'` | Brillo de degradado deslizante — **predeterminado** |
| `'pulse'`    | Pulso de opacidad                          |
| `'none'`     | Sin animación                           |

## Variante

Use la prop `variant` para elegir una apariencia preestablecida. El valor predeterminado es `'rect'`.

| Valor      | Descripción                                                                               |
| :--------- | :---------------------------------------------------------------------------------------- |
| `'rect'`   | Esquinas redondeadas usando un token de radio de borde sensible al tamaño — **predeterminado**                      |
| `'circle'` | Completamente circular (`border-radius: 50%`, `aspect-ratio: 1`)                                  |
| `'square'` | Relación de aspecto cuadrada (`aspect-ratio: 1`) con el mismo redondeo que `'rect'`                |
| `'text'`   | Marcador de posición de línea de texto — la altura hereda `font-size` y `line-height` del contexto padre |

## Tamaño

Use la prop `size` para establecer una altura preestablecida del esqueleto (y ancho para las variantes `'circle'` / `'square'`). Cada tamaño también ajusta el token de radio de borde utilizado por las variantes `'rect'` y `'square'`. Cuando se omite `size`, establezca las dimensiones con `width` y `height` en su lugar.

| Valor  | Descripción |
| :----- | :---------- |
| `'xs'` | Extra pequeño |
| `'s'`  | Pequeño       |
| `'m'`  | Mediano      |
| `'l'`  | Grande       |
| `'xl'` | Extra grande |

GRAVITY_TRANSLATION_BLOCK_1_END

## Marcador de posición de texto

Use `variant="text"` para renderizar un esqueleto que hereda `font-size` y `line-height` del contexto padre. Coloque varios esqueletos dentro de un elemento `<Text variant="...">` para marcadores de posición de varias líneas.

GRAVITY_TRANSLATION_BLOCK_2_END

## Propiedades

| Nombre        | Descripción                                                                                                                  |                       Tipo                       |  Por defecto   |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------: | :--------: |
| `style`     | Propiedades CSS personalizadas para el elemento raíz                                                                                   |              `React.CSSProperties`               |            |
| `className` | Clase CSS personalizada para el elemento raíz                                                                                        |                     `string`                     |            |
| `qa`        | Atributo HTML `data-qa`, utilizado para pruebas                                                                                   |                     `string`                     |            |
| `animation` | Tipo de animación a aplicar al esqueleto                                                                                      |      `'gradient'` \| `'pulse'` \| `'none'`       | `gradient` |
| `variant`   | Apariencia preestablecida. `'circle'` y `'square'` fuerzan `aspect-ratio: 1`. `'text'` hereda la tipografía del contexto padre.    | `'rect'` \| `'square'` \| `'circle'` \| `'text'` |   `rect`   |
| `size`      | Altura preestablecida (y anchura para variantes `'circle'`/`'square'`). También controla el token de `border-radius` para `'rect'`/`'square'`. |   `'xs'` \| `'s'` \| `'m'` \| `'l'` \| `'xl'`    |            |
| `width`     | Anchura personalizada. Alias de `style.width`                                                                                        |               `number` \| `string`               |            |
| `height`    | Altura personalizada. Alias de `style.height`                                                                                        |               `number` \| `string`               |            |