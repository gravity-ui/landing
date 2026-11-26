GRAVITY_TRANSLATION_BLOCK_0_END

El componente `Toc` está diseñado para mostrar una tabla de contenidos de la página, mostrando una lista de elementos con dos niveles de jerarquía.

```tsx
import {Toc} from '@gravity-ui/uikit';
```

## Uso

Puedes usar `Toc` de dos maneras:

1. Con elementos como enlaces.
2. Con elementos como botones clickables.

Para usar la primera opción, proporciona el enlace apropiado a cada elemento de `Toc` a través de la propiedad `href`. Aún podrás usar un manejador de clics para controlar el elemento activo de `Toc`.

Si omites esto, el componente usará la otra opción.

## Propiedades

| Nombre      | Descripción                                                              |    Tipo     | Por defecto |
| :---------- | :----------------------------------------------------------------------- | :---------: | :---------: |
| className | Clase CSS                                                                |  `string`   |             |
| items     | Elementos de la tabla de contenidos                                      | `TocItem[]` |             |
| value     | Elemento activo actual                                                   |  `string`   |             |
| onUpdate  | Manejador de clics en el elemento                                        | `Function`  |             |
| qa        | El valor a proporcionar al atributo `data-qa` del contenedor de `Toc` |  `string`   |             |

#### TocItem

| Nombre    | Descripción                                                                                              |        Tipo         | Por defecto |
| :-------- | :------------------------------------------------------------------------------------------------------- | :-----------------: | :---------: |
| value   | Valor del elemento                                                                                       |      `string`       |             |
| content | Contenido del elemento a mostrar                                                                         | `React.ReactNode[]` |             |
| href    | La propiedad `href` del elemento `<a>`, al que se convertirá un elemento si se proporciona |      `string`       |             |
| items   | Elementos hijos                                                                                          |     `TocItem[]`     |             |