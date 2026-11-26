`FilePreview` es una tarjeta de vista previa compacta para un solo archivo, que muestra una miniatura o un icono de tipo de archivo con el nombre del archivo y acciones opcionales.

```tsx
import {FilePreview} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Propiedades

| Nombre                | Descripción                                                                                                                                                           | Tipo                  | Requerido | Predeterminado |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------- | :-------: | :------------ |
| file                | La interfaz `File` proporciona información sobre los archivos y permite que JavaScript en una página web acceda a su contenido.                                       | `File`                |     ✓     |               |
| imageSrc            | Fuente para la vista previa de la imagen                                                                                                                              | `string`              |           |               |
| description         | Descripción que se muestra debajo del nombre del archivo                                                                                                              | `string`              |           |               |
| selected            | Habilita o deshabilita los estilos seleccionados                                                                                                                      | `boolean`             |           | `false`       |
| className           | Nombre de la clase para el contenedor del archivo                                                                                                                     | `string`              |           |               |
| onClick             | Manejador de clics para el contenedor del archivo                                                                                                                     | `function`            |           |               |
| [actions](#actions) | Una matriz de acciones interactivas                                                                                                                                   | `FilePreviewAction[]` |           | `[]`          |
| view                | El modo de vista previa del archivo (el texto no es visible para la vista `compact`)                                                                                   | `default`, `compact`  |           | `default`     |

#### Acciones

Para un archivo, puedes prescribir acciones que serán visibles cuando pases el cursor sobre él.

| Nombre              | Descripción                     | Tipo                                                                                                                                                       | Requerido | Predeterminado |
| ----------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------- |
| id                | ID de la acción                       | `String`                                                                                                                                                   |          |         |
| icon              | Icono de la acción                     | `React.ReactNode`                                                                                                                                          |    ✓     |         |
| title             | Indicación de la acción al pasar el ratón por encima            | `String`                                                                                                                                                   |    ✓     |         |
| onClick           | Manejador de clics de la acción            | `React.MouseEventHandler<HTMLElement>` para la vista predeterminada y `(event: React.MouseEvent<HTMLElement, MouseEvent> or KeyboardEvent) => void` para la vista compacta |          |         |
| href              | URL del botón de acción              | `String`                                                                                                                                                   |          |         |
| disabled          | Acción deshabilitada                 | `boolean`                                                                                                                                                  |          |         |
| extraProps        | Props adicionales del botón de acción  | `ButtonButtonProps or ButtonLinkProps` (solo funciona para la vista de escritorio predeterminada)                                                                           |          |         |
| tooltipExtraProps | Props adicionales de la tooltip de la acción | `Omit<ActionTooltipProps, 'title' or 'children'>` (solo funciona para la vista de escritorio predeterminada)                                                                |          |         |