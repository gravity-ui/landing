# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

Un conjunto de componentes React flexibles, muy prácticos y eficientes para crear aplicaciones web enriquecidas.

<!--GITHUB_BLOCK-->

![Imagen de portada](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

## Recursos

### ![Logo del Globo Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Logo del Globo Oscuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Sitio web](https://gravity-ui.com)

### ![Logo de Documentación Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Logo de Documentación Oscuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [Documentación](https://gravity-ui.com/components/uikit/alert)

### ![Logo de Figma Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Logo de Figma Oscuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>)

### ![Logo del Themer Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Logo del Themer Oscuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer)

### ![Logo de Storybook Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Logo de Storybook Oscuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/)

### ![Logo de Comunidad Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Logo de Comunidad Oscuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Comunidad](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## Instalación

```shell
npm install --save-dev @gravity-ui/uikit
```

## Uso

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = <Button view="action" size="l" />;
```

### Estilos

UIKit viene con estilos base y un tema. Para que todo se vea bien, incluye esto al principio de tu archivo de entrada:

```js
// index.js

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

// ...
```

UIKit soporta diferentes temas: claro, oscuro y sus variantes de contraste. Tu aplicación debe renderizarse dentro de `ThemeProvider`:

```js
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from '@gravity-ui/uikit';

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme="light">
    <App />
  </ThemeProvider>,
);
```

Es posible generar las clases CSS raíz iniciales durante el SSR para evitar el parpadeo del tema:

```js
import {getRootClassName} from '@gravity-ui/uikit/server';

const theme = 'dark';
const rootClassName = getRootClassName({theme});

const html = `
<html>
  <body>
    <div id="root" class="${rootClassName}"></div>
  </body>
</html>
`;
```

Además, hay un archivo SCSS con [mixins](styles/mixins.scss) con utilidades útiles para usar en tu aplicación.

### Internacionalización (I18N)

Algunos componentes contienen tokens de texto (palabras y frases). Vienen en dos idiomas: `en` (por defecto) y `ru`.
Para establecer el idioma, usa la función `configure`:

```js
// index.js

import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## Desarrollo

Para iniciar el servidor de desarrollo con storybook, ejecuta lo siguiente:

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start
```

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE) para más detalles.

## Para agentes de IA

La biblioteca base de componentes React y tokens de diseño para aplicaciones Gravity UI — controles, entradas, superposiciones, diseño y temas en los que se basa cada otro paquete de @gravity-ui.

### Cuándo usar

- UI estándar de aplicaciones: botones, controles de formulario, modales y ventanas emergentes, menús, pestañas, etiquetas, tipografía y primitivas de diseño.
- La base de temas de una aplicación Gravity UI: `ThemeProvider`, tokens de diseño y variables CSS que el resto del ecosistema `@gravity-ui/*` espera que estén presentes.
- Datos tabulares sencillos a través del componente `Table` integrado (selección, ordenación, acciones de fila).

### Cuándo no usar

- Rejillas de datos con muchas funciones (virtualización, redimensionamiento de columnas, agrupación, reordenación): utiliza [`@gravity-ui/table`](https://github.com/gravity-ui/table), un paquete headless independiente. **No** es lo mismo que el componente `Table` de uikit.
- Gráficos y visualización de datos: utiliza [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (`@gravity-ui/chartkit` es el wrapper heredado).
- Estructuras de navegación de aplicaciones (barra lateral, encabezado, pie de página, logo): utiliza [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation).
- Selectores de fecha, calendarios y controles de rango: utiliza [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components).
- El conjunto de iconos SVG en sí: utiliza [`@gravity-ui/icons`](https://github.com/gravity-ui/icons); uikit solo distribuye el renderizador `Icon`.

### Errores comunes

- La prop de estilo de `Button` es `view`, no `variant` ni `color`.
- **Los componentes se renderizan sin estilo sin configuración.** Envuelve la aplicación en `ThemeProvider` **e** importa `@gravity-ui/uikit/styles/styles.css` (además de `fonts.css`) una vez en el punto de entrada; ambos son necesarios.
- **`Icon` no tiene la prop `name`.** Pasa un componente de icono importado a través de `data`: `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`.
- Los valores de `theme` son `light | dark | light-hc | dark-hc`. No existe `theme="default"`.

### Documentación útil

- [Componentes de diseño y espaciado](./docs/layout.md)
- [Temas, Colores y Marca](./docs/theming.md)
- [Tipografía](./docs/typography.md)