El componente `Menu` permite crear fácilmente vistas para listas de acciones.

```tsx
import {Menu} from '@gravity-ui/uikit';
```

Tiene componentes dedicados para elementos (`Menu.Item`) y grupos (`Menu.Group`). Puedes combinarlos para crear menús más complejos.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Tamaño

Esta propiedad se utiliza para seleccionar el tamaño del menú. El valor predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Propiedades

| Nombre      | Descripción                                |           Tipo           | Predeterminado |
| :---------- | :----------------------------------------- | :----------------------: | :------------: |
| size        | Tamaño del menú                            | `"s"` `"m"` `"l"` `"xl"` |     `"m"`      |
| children    | Elemento hijo                              |    `React.ReactNode`     |                |
| className   | Atributo `class` HTML                      |         `string`         |                |
| style       | Atributo `style` HTML                      |  `React.CSSProperties`   |                |
| qa          | Atributo `data-qa` HTML, usado para pruebas |         `string`         |                |

## Menu.Item

Esta propiedad se utiliza para renderizar elementos del menú.

### Icono

Utiliza la propiedad `iconStart` o `iconEnd` para mostrar un icono al principio o al final de un elemento del menú:

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Estados

Usando esta propiedad, puedes habilitar o deshabilitar (atenuar) elementos específicos del menú:

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Tema

Esto te permite cambiar el tema del elemento del menú. El tema predeterminado es `normal`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### Propiedades

| Nombre             | Descripción                                    |           Tipo            |  Predeterminado   |
| :---------------- | :--------------------------------------------- | :-----------------------: | :--------: |
| iconStart        | Icono del menú antes del texto del elemento                     |        `ReactNode`        |            |
| iconEnd          | Icono del menú después del texto del elemento                      |        `ReactNode`        |            |
| selected         | Indicador de elemento de menú seleccionado                        |         `boolean`         |  `false`   |
| disabled         | Indicador de elemento de menú deshabilitado                        |         `boolean`         |  `false`   |
| active           | Indicador de elemento de menú activo                          |         `boolean`         |  `false`   |
| href             | URL                                            |         `string`          |            |
| title            | Atributo de título                                |         `string`          |            |
| target           | Atributo de destino                               |         `string`          |            |
| rel              | Atributo rel                                  |         `string`          |            |
| onClick          | Manejador para el evento onclick                      | `React.MouseEventHandler` |            |
| theme            | Tema del elemento del menú                                |   `"normal"` `"danger"`   | `"normal"` |
| children         | Elemento hijo                                  |     `React.ReactNode`     |            |
| className        | Atributo HTML `class` para el elemento raíz    |         `string`          |            |
| contentClassName | Atributo HTML `class` para el elemento de contenido |         `string`          |            |
| style            | Atributo HTML `style`                         |   `React.CSSProperties`   |            |
| qa               | Atributo HTML `data-qa`, usado para pruebas     |         `string`          |            |
| extraProps       | Atributos HTML adicionales                     |         `Record`          |            |

## Menu.Group

Puedes agrupar elementos por temas dentro de un solo menú:

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### Propiedades

| Nombre      | Descripción                                |         Tipo          | Predeterminado |
| :-------- | :----------------------------------------- | :-------------------: | :-----: |
| label     | Etiqueta del grupo de menú                           |       `string`        |         |
| children  | Elemento hijo                              |   `React.ReactNode`   |         |
| className | Atributo HTML `class`                     |       `string`        |         |
| style     | Atributo HTML `style`                     | `React.CSSProperties` |         |
| qa        | Atributo HTML `data-qa`, usado para pruebas |       `string`        |         |