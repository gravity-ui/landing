# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![npm downloads](https://img.shields.io/npm/dm/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

[English](README.md) | [Русский](README-ru.md)

Un conjunto de componentes React flexibles, muy prácticos y eficientes para crear aplicaciones web enriquecidas. Parte del sistema de diseño [Gravity UI](https://gravity-ui.com).

<!--GITHUB_BLOCK-->

![Imagen de portada](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

### ![Logo Globo Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Logo Globo Oscuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Sitio web](https://gravity-ui.com) &nbsp;&nbsp; ![Logo Documentación Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Logo Documentación Oscuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [Documentación](https://gravity-ui.com/components/uikit/alert) &nbsp;&nbsp; ![Logo Figma Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Logo Figma Oscuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>) &nbsp;&nbsp; ![Logo Themer Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Logo Themer Oscuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer) &nbsp;&nbsp; ![Logo Storybook Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Logo Storybook Oscuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/) &nbsp;&nbsp; ![Logo Comunidad Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Logo Comunidad Oscuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Comunidad](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## Acerca de

UIKit es el paquete fundamental del sistema de diseño [Gravity UI](https://gravity-ui.com), un conjunto probado en batalla de más de 70 componentes React creados para aplicaciones web de producción. Se encarga de las partes difíciles: temas, accesibilidad, diseño RTL, renderizado del lado del servidor e internacionalización, para que puedas concentrarte en construir tu producto.

Características clave:

- **Más de 70 componentes** — entradas, superposiciones, visualización de datos, primitivas de diseño, retroalimentación y más
- **Tematización integrada** — variantes claras, oscuras y de alto contraste con una herramienta [Themer](https://gravity-ui.com/themer) en vivo para personalizar tokens
- **Soporte RTL** — dirección de diseño completa de derecha a izquierda

Explora el catálogo completo de componentes en [Storybook](https://preview.gravity-ui.com/uikit/) o en la [documentación](https://gravity-ui.com/components/uikit/alert).

## Primeros pasos

### Requisitos previos

React 16.14, 17, 18 o 19 debe estar instalado en tu proyecto.

### Instalación

```shell
npm install @gravity-ui/uikit
```

## Uso

Importa componentes directamente desde el paquete:

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = (
  <Button view="action" size="l">
    Enviar
  </Button>
);
```

### Estilos

Incluye los estilos base y las fuentes una vez en la parte superior del punto de entrada de tu aplicación:

```js
// index.js
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

También hay disponible un archivo SCSS con [mixins](styles/mixins.scss) con utilidades útiles para usar en tus propias hojas de estilo.

### Guías

Lee más:

- [Tematización](docs/theming.md) — habilita temas claros, oscuros y de alto contraste
- [Renderizado del lado del servidor](docs/server-side-rendering.md) — genera la clase CSS raíz en el servidor
- [Internacionalización](docs/i18n.md) — establece el idioma de los componentes integrados

## Desarrollo

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start   # inicia Storybook en http://localhost:7007
```

Otros comandos útiles:

```shell
npm test              # ejecuta pruebas unitarias
npm run lint          # lint JS, SCSS y Markdown
npm run typecheck     # verificación de tipos de TypeScript
npm run playwright    # ejecuta pruebas de regresión visual
```

## Mantenedores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/amje">
        <img src="https://github.com/amje.png?size=100" width="100" alt="amje" /><br />
        <sub><b>@amje</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ValeraS">
        <img src="https://github.com/ValeraS.png?size=100" width="100" alt="ValeraS" /><br />
        <sub><b>@ValeraS</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/korvin89">
        <img src="https://github.com/korvin89.png?size=100" width="100" alt="korvin89" /><br />
        <sub><b>@korvin89</b></sub>
      </a>
    </td>
  </tr>
</table>

## Contribuciones

¡Tus contribuciones son bienvenidas! Por favor, lee [CONTRIBUTING.md](CONTRIBUTING.md) antes de enviar una pull request. Para ver las directrices detalladas de las PR, consulta [contribute/pull-request.md](contribute/pull-request.md).

Tenemos [![contributors](https://img.shields.io/github/contributors/gravity-ui/uikit?label=contributors)](https://github.com/gravity-ui/uikit/graphs/contributors) colaboradores y seguimos sumando. ¡Únete a nosotros!

Únete a la comunidad en [Telegram](https://t.me/gravity_ui) para preguntas y discusiones.

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE) para más detalles.

## Para agentes de IA

La biblioteca base de componentes React y tokens de diseño para aplicaciones Gravity UI — controles, entradas, superposiciones, diseño y temas en los que se basa cada otro paquete de `@gravity-ui/*`.

### Cuándo usar

- Interfaz de usuario estándar de aplicaciones: botones, controles de formulario, modales y popups, menús, pestañas, etiquetas, tipografía y primitivas de diseño.
- La base de temas de una aplicación Gravity UI: `ThemeProvider`, tokens de diseño y variables CSS que el resto del ecosistema `@gravity-ui/*` espera que estén presentes.
- Datos tabulares sencillos a través del componente `Table` integrado (selección, ordenación, acciones de fila).

### Cuándo no usar

- Cuadrículas de datos con muchas funcionalidades (virtualización, redimensionamiento de columnas, agrupación, reordenación): utiliza [`@gravity-ui/table`](https://github.com/gravity-ui/table), un paquete separado sin cabeza. **No** es lo mismo que el componente `Table` de uikit.
- Gráficos y visualización de datos: utiliza [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (`@gravity-ui/chartkit` es el wrapper heredado).
- Estructuras de navegación de aplicaciones (barra lateral, encabezado, pie de página, logo): utiliza [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation).
- Selectores de fecha, calendarios y controles de rango: utiliza [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components).
- El conjunto de iconos SVG en sí: utiliza [`@gravity-ui/icons`](https://github.com/gravity-ui/icons); uikit solo distribuye el renderizador `Icon`.

### Errores comunes

- La prop de estilo de `Button` es `view`, no `variant` o `color`.
- **Los componentes se renderizan sin estilo sin configuración.** Envuelve la aplicación en `ThemeProvider` **e** importa `@gravity-ui/uikit/styles/styles.css` (además de `fonts.css`) una vez en el punto de entrada; ambos son necesarios.
- **`Icon` no tiene prop `name`.** Pasa un componente de icono importado a través de `data`: `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`.
- Los valores de `theme` son `light | dark | light-hc | dark-hc`. No existe `theme="default"`.

### Documentación útil

- [Componentes de diseño y espaciado](./docs/layout.md)
- [Temas, Colores y Branding](./docs/theming.md)
- [Tipografía](./docs/typography.md)

## Documentación para agentes de IA

La documentación legible por agentes para la versión instalada se encuentra en `node_modules/@gravity-ui/uikit/build/docs/INDEX.md`.

## Historial de Estrellas

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
    <img alt="Gráfico de Historial de Estrellas" width="600" src="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
  </picture>
</div>

---

Si encuentras útil UIKit, considera darle una ⭐ en [GitHub](https://github.com/gravity-ui/uikit) — ayuda a otros a descubrir el proyecto.