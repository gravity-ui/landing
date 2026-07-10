# @gravity-ui/icons &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/icons)](https://www.npmjs.com/package/@gravity-ui/icons) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/icons/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/icons/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/icons/)

Un conjunto de iconos de Gravity UI. Los iconos tienen dos fuentes: SVG y React. Echa un vistazo a la página de [showcase](https://preview.gravity-ui.com/icons/).

## Instalación

```shell
npm install --save-dev @gravity-ui/icons
```

## Uso

### React

```js
import Cloud from '@gravity-ui/icons/Cloud';
```

o

```js
import {Cloud} from '@gravity-ui/icons';
```

### SVG

> Es posible que necesites un cargador adecuado para esto

```js
import cloudIcon from '@gravity-ui/icons/svgs/cloud.svg';
```

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE) para más detalles.

## Para agentes de IA

El conjunto oficial de iconos SVG para Gravity UI, distribuido tanto como componentes React como archivos `.svg` sin procesar para su uso con el renderizador `Icon` de `@gravity-ui/uikit`.

### Cuándo usar

- Necesitas un icono dentro de una aplicación Gravity UI y quieres un conjunto consistente y listo para usar.
- Renderizando un icono a través de uikit: importa el componente del icono aquí y pásalo al `Icon` de uikit a través de su prop `data`.
- Necesitas el recurso `.svg` sin procesar (por ejemplo, para `background-image` en CSS o un cargador SVG en tiempo de compilación) en lugar de un componente React.

### Cuándo no usar

- Renderizando el icono en pantalla — este paquete solo proporciona los glifos; el renderizador real (tamaño, color, a11y) es el componente `Icon` de [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Necesitas un icono personalizado o de marca que no esté en el conjunto — importa tu propio SVG y pásalo al `Icon` de uikit; no esperes que esté aquí.

### Errores comunes

- **Los iconos se pasan como datos, no por nombre.** Haz `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} />` — no hay una API de `<Icon name="gear" />`, y este paquete no exporta su propio componente `<Icon>`.
- **La ruta de importación importa para el tree-shaking.** `import Cloud from '@gravity-ui/icons/Cloud'` carga un solo icono; `import {Cloud} from '@gravity-ui/icons'` también funciona pero depende del bundler para hacer tree-shaking del barrel.
- **Las importaciones SVG necesitan un cargador.** `import icon from '@gravity-ui/icons/svgs/cloud.svg'` solo funciona si tu bundler está configurado para manejar archivos `.svg`.
- **El tamaño y el color provienen del renderizador.** Establece `size` en el `Icon` de uikit y controla el color con `color`/CSS `currentColor`; los SVGs en sí mismos no tienen un color fijo.