# UIKit & middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit) (https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github) (https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685) (https://preview.gravity-ui.com/uikit/)

Un conjunto de componentes de React flexibles, altamente prácticos y eficientes para crear aplicaciones web sofisticadas.

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

## Recursos

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Sitio web](https://gravity-ui.com)

### ![Documentation Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Documentation Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [Documentación](https://gravity-ui.com/components/uikit/alert)

### ![Figma Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Figma Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma] ()<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>

### ![Themer Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Themer Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Temer](https://gravity-ui.com/themer)

### ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Libro de cuentos](https://preview.gravity-ui.com/uikit/)

### ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Comunidad](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## Instalar

```shell
npm install --save-dev @gravity-ui/uikit
```

## Uso

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = <Button view="action" size="l" />;
```

### Estilos

UIKit viene con un estilo y un tema básicos. Para que todo se vea bien, incluye esto en la parte superior de tu archivo de entrada:

```js
// index.js

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

// ...
```

UIKit admite diferentes temas: claros, oscuros y sus variantes de contraste. Tu aplicación debe renderizarse dentro de `ThemeProvider`:

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

Es posible generar clases CSS raíz iniciales durante SSR para evitar que el tema parpadee:

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

Además, hay un archivo de [mezclas](styles/mixins.scss) SCSS con útiles ayudantes para usar en tu aplicación.

### I18N

Algunos componentes contienen símbolos de texto (palabras y frases). Están disponibles en dos idiomas: `en` (predeterminado) y `ru`.
Para configurar la `configure` función de uso del idioma:

```js
// index.js

import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## Desarrollo

Para iniciar el servidor de desarrollo con Storybook, ejecute lo siguiente:

```shell
npm start
```
