<!--GITHUB_BLOCK-->

# Settings

<!--/GITHUB_BLOCK-->

El componente `Settings` proporciona el diseño para un panel de configuración con las siguientes características.

- Agrupación de elementos de un solo nivel y de dos niveles
- Filtrado del contenido del panel por encabezados de elementos
- Visualización del estado de carga y del contenido

<!--GITHUB_BLOCK-->

## Usage

One-level settings example:

```tsx
<Settings>
  <Settings.Page title="Appearance">...</Settings.Page>
  <Settings.Page title="Notifications">...</Settings.Page>
</Settings>
```

Two-level settings example:
_Note:_ `Settings` with `view=mobile` groups `Settings.Group` are ignored.

```tsx
<Settings>
  <Settings.Group groupTitle="My service">
    <Settings.Page title="Appearance">...</Settings.Page>
    <Settings.Page title="Notifications">...</Settings.Page>
  </Settings.Group>
  <Settings.Group groupTitle="General">
    <Settings.Page title="Appearance">...</Settings.Page>
    <Settings.Page title="Notifications">...</Settings.Page>
  </Settings.Group>
</Settings>
```

Pages with sections example:

```tsx
<Settings.Page title="Features" icon={'...'}>
  <Settings.Section title="Common">
    <Settings.Item title="Default VCS">...</Settings.Item>
    <Settings.Item title="Search root">...</Settings.Item>
  </Settings.Section>
  <Settings.Section title="Beta functionality">...</Settings.Section>
</Settings.Page>
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre                           | Descripción                                                   | Tipo                         | Valor predeterminado |
| :----------------------------- | :------------------------------------------------------------ | :--------------------------- | :------------------- |
| loading                        | Indicador del estado de carga                                 | `boolean`                    |                      |
| renderLoading                  | Contenido para el estado de carga                             | `() => React.ReactNode`      |                      |
| renderNotFound                 | Contenido del panel vacío                                     | `() => React.ReactNode`      |                      |
| initialPage                    | Página inicial en formato `/groupId/pageId`                   | `string`                     |                      |
| view                           | Cambiar vista para móvil                                      | `"normal"`, `"mobile"`       | `"normal"`           |
| onPageChange                   | Manejador de cambio de página                                 | `(newPage?: string) => void` |                      |
| onClose                        | Manejador de cierre de configuración                          | `() => void`                 |                      |
| title                          | Título de la página                                           | `string`                     | 'Settings'           |
| filterPlaceholder              | Texto del marcador de posición del filtro                     | `string`                     | 'Search settings'    |
| emptyPlaceholder               | Texto para filtro vacío                                       | `string`                     | 'No results found'   |
| enableMobileSettingsTabsScroll | En vista móvil, las pestañas se desbordarán con desplazamiento en lugar de envolverse | `boolean`                    |                      |

## Settings.Group

Nivel opcional para organizar páginas relacionadas, por ejemplo, "General" frente a "Específico de la aplicación".

### Propiedades

| Nombre       | Descripción             | Tipo     | Valor predeterminado |
| :----------- | :---------------------- | :------- | :------------------- |
| id           | ID único del grupo      | `string` |                      |
| groupTitle   | Encabezado del grupo    | `string` |                      |

## Settings.Page

Colección de secciones de configuración relacionadas, por ejemplo, "Apariencia" en el grupo General.

### Propiedades

| Nombre | Descripción                               | Tipo                                                                                        | Valor predeterminado |
| :----- | :---------------------------------------- | :------------------------------------------------------------------------------------------ | :------------------- |
| id     | ID único de la página en un grupo         | `string`                                                                                    |                      |
| title  | Título de la página                       | `string`                                                                                    |                      |
| icon   | Propiedades del icono de la página        | [`IconProps`](https://github.com/gravity-ui/uikit/tree/main/src/components/Icon#properties) |                      |

## Settings.Section

Categoría de configuraciones relacionadas, por ejemplo, "Configuración del tema" en la página Apariencia.

### Propiedades

| Nombre      | Descripción                                                                   | Tipo              | Por defecto |
| :---------- | :---------------------------------------------------------------------------- | :---------------- | :---------- |
| title     | Título de la sección                                                              | `string`          |         |
| header    | Encabezado de la sección                                                             | `React.ReactNode` |         |
| withBadge | Mostrar insignia en la sección y el menú                                              | `boolean`         |         |
| hideTitle | Ocultar el título de la sección. La prop es necesaria para ocultar el título en configuraciones simples en móvil | `boolean`         |         |

## Settings.Item

Configuración individual con un título y un componente de control.
⚠️ En caso de tener solo un `Settings.Item` en `Settings.Section`, el título no se muestra.

### Propiedades

| Nombre                 | Descripción                                                | Tipo                                                      | Por defecto    |
| :------------------- | :--------------------------------------------------------- | :-------------------------------------------------------- | :--------- |
| title                | Título del ítem                                              | `string`                                                  |            |
| renderTitleComponent | Encabezado personalizado de                                           | `(highlightedTitle?: React.ReactNode) => React.ReactNode` |
| align                | Alineación del ítem                                             | `"top"`, `"center"`                                       | `"center"` |
| mode                 | Diseño para móvil. El título y el control se colocarán en fila | `"row"`                                                   |            |
| description          | Descripción del ítem                                        | `React.ReactNode`                                         |            |
