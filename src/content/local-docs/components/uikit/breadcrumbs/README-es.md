<!--GITHUB_BLOCK-->

# Breadcrumbs

<!--/GITHUB_BLOCK-->

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

`Breadcrumbs` (migas de pan) es un elemento de navegación que muestra la ubicación actual de una página dentro de la jerarquía de un sitio web. Proporciona enlaces que permiten a los usuarios volver a niveles superiores en la jerarquía, facilitando la navegación a través de un sitio web con múltiples capas. Las migas de pan son especialmente útiles para sitios web y aplicaciones grandes con estructura de páginas basada en jerarquía.

## Ejemplo

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Breadcrumbs>
    <Breadcrumbs.Item>Region</Breadcrumbs.Item>
    <Breadcrumbs.Item>Country</Breadcrumbs.Item>
    <Breadcrumbs.Item>City</Breadcrumbs.Item>
    <Breadcrumbs.Item>District</Breadcrumbs.Item>
    <Breadcrumbs.Item>Street</Breadcrumbs.Item>
</Breadcrumbs>
`}
>
    <UIKit.Breadcrumbs>
        <UIKit.Breadcrumbs.Item>Region</UIKit.Breadcrumbs.Item>
        <UIKit.Breadcrumbs.Item>Country</UIKit.Breadcrumbs.Item>
        <UIKit.Breadcrumbs.Item>City</UIKit.Breadcrumbs.Item>
        <UIKit.Breadcrumbs.Item>District</UIKit.Breadcrumbs.Item>
        <UIKit.Breadcrumbs.Item>Street</UIKit.Breadcrumbs.Item>
    </UIKit.Breadcrumbs>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<Breadcrumbs>
  <Breadcrumbs.Item>Region</Breadcrumbs.Item>
  <Breadcrumbs.Item>Country</Breadcrumbs.Item>
  <Breadcrumbs.Item>City</Breadcrumbs.Item>
  <Breadcrumbs.Item>District</Breadcrumbs.Item>
  <Breadcrumbs.Item>Street</Breadcrumbs.Item>
</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsExample />

<!--/GITHUB_BLOCK-->

### Eventos

Utilice la propiedad `onAction` como callback para manejar eventos de clic en los elementos.

### Enlaces

En `Breadcrumbs`, hacer clic en un elemento normalmente activa `onAction`. Sin embargo, también puede usarlos como enlaces a otras páginas o sitios web. Para hacer eso, agregue la propiedad `href` al componente `<Breadcrumbs.Item>`.

### Contexto raíz

Para ayudar a los usuarios a entender la estructura general, algunas aplicaciones siempre muestran el punto de inicio (elemento raíz) de las migas de pan, incluso cuando otros elementos están ocultos debido a limitaciones de espacio.

### Separador

Puede personalizar el separador entre los elementos de las migas de pan.

### Migas de pan con iconos

Puede agregar iconos a los elementos de las migas de pan.

### Integración con routers

Las migas de pan se pueden integrar con varios routers como React Router, Next.js y Tanstack Router.

### Puntos de referencia

Cuando las migas de pan se utilizan como elemento principal de navegación para una página, se pueden colocar en un punto de referencia de navegación.

### Elementos deshabilitados

Puede deshabilitar elementos específicos de las migas de pan.

## Propiedades

| Nombre           | Descripción                                                                               | Tipo                                       | Predeterminado |
| :--------------- | :---------------------------------------------------------------------------------------- | :----------------------------------------- | :------------- |
| children         | Elementos de migas de pan                                                                 | `React.ReactElement<BreadcrumbsItemProps>` |                |
| disabled         | Determina si `Breadcrumbs` está deshabilitado                                             | `boolean`                                  |                |
| showRoot         | Habilita o deshabilita mostrar siempre el elemento raíz si los elementos están colapsados | `boolean`                                  |                |
| popupPlacement   | Estilo del popup del elemento colapsado                                                   | `PopupPlacement`                           |                |
| popupStyle       | Estilo del popup del elemento colapsado                                                   | `"staircase"`                              |                |
| qa               | Atributo HTML `data-qa`, usado para pruebas                                               | `string`                                   |                |
| separator        | Nodo separador personalizado                                                              | `React.ReactNode`                          | "/"            |
| action           | Manejador de eventos `click`                                                              | `(id: Key) => void`                        |                |
| navigate         | Navegación del lado del cliente                                                           | `(href: string) => void`                   |                |
| id               | ID único del elemento                                                                     | `string`                                   |                |
| className        | Nombre de clase CSS para el elemento                                                      | `string`                                   |                |
| style            | Establece el estilo en línea para el elemento                                             | `CSSProperties`                            |                |
| aria-label       | Define un valor de cadena que etiqueta el elemento actual                                 | `string`                                   |                |
| aria-labelledby  | Identifica los elementos que etiquetan el elemento actual                                 | `string`                                   |                |
| aria-describedby | Identifica los elementos que describen el objeto                                          | `string`                                   |                |

### BreadcrumbsItemProps

| Nombre     | Descripción                                            | Tipo                              | Predeterminado |
| :--------- | :----------------------------------------------------- | :-------------------------------- | :------------- |
| children   | Contenido de las migas de pan                          | `string`                          |                |
| title      | Representación en cadena del contenido del elemento    | `string`                          |                |
| aria-label | Etiqueta de accesibilidad para el elemento             | `string`                          |                |
| href       | URL a usar para el hipervínculo                        | `string`                          |                |
| target     | Ventana de destino para el enlace                      | `React.HTMLAttributeAnchorTarget` |                |
| rel        | Relación entre el recurso vinculado y la página actual | `string`                          |                |
| disabled   | Si el elemento BreadcrumbsItem está deshabilitado      | `boolean`                         |                |
