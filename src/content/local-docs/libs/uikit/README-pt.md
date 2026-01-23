# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

Um conjunto de componentes React flexíveis, altamente práticos e eficientes para criar aplicações web ricas.

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

## Recursos

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Website](https://gravity-ui.com)

### ![Documentation Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Documentation Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [Documentação](https://gravity-ui.com/components/uikit/alert)

### ![Figma Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Figma Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>)

### ![Themer Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Themer Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer)

### ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/)

### ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Comunidade](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## Instalação

```shell
npm install --save-dev @gravity-ui/uikit
```

## Uso

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = <Button view="action" size="l" />;
```

### Estilos

O UIKit vem com estilos base e tema. Para que tudo fique bonito, inclua isto no topo do seu arquivo de entrada:

```js
// index.js

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

// ...
```

O UIKit suporta diferentes temas: claro, escuro e suas variantes de contraste. Sua aplicação deve ser renderizada dentro de `ThemeProvider`:

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

É possível gerar classes CSS raiz iniciais durante o SSR para evitar o flash de tema:

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

Além disso, há um arquivo SCSS com [mixins](styles/mixins.scss) com utilitários úteis para usar em sua aplicação.

### I18N

Alguns componentes contêm tokens de texto (palavras e frases). Eles vêm em dois idiomas: `en` (padrão) e `ru`.
Para definir o idioma, use a função `configure`:

```js
// index.js

import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento com o storybook, execute o seguinte:

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start
```