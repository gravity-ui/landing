# Gravity UI Charts · [![npm package](https://img.shields.io/npm/v/@gravity-ui/charts)](https://www.npmjs.com/package/@gravity-ui/charts) [![License](https://img.shields.io/github/license/gravity-ui/charts)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/charts/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/charts/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/charts/)

Librería de gráficos React con más de 10 tipos de gráficos: área, barras, línea, pastel, dispersión, treemap y más.

## Instalación

```shell
npm install @gravity-ui/uikit @gravity-ui/charts
```

`@gravity-ui/uikit` es una dependencia peer requerida — proporciona la tematización y los estilos de los que dependen los gráficos.

## Uso

Importa los estilos de `@gravity-ui/uikit` una vez en tu punto de entrada, envuelve tu aplicación en `ThemeProvider` y renderiza un `Chart` dentro de un contenedor con una altura explícita:

```tsx
import {ThemeProvider} from '@gravity-ui/uikit';
import {Chart} from '@gravity-ui/charts';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

const data = {
  series: {
    data: [
      {
        type: 'line',
        name: 'Temperature',
        data: [
          {x: 0, y: 10},
          {x: 1, y: 25},
          {x: 2, y: 18},
          {x: 3, y: 30},
        ],
      },
    ],
  },
};

export default function App() {
  return (
    <ThemeProvider theme="light">
      <div style={{height: 300}}>
        <Chart data={data} />
      </div>
    </ThemeProvider>
  );
}
```

`Chart` se adapta al tamaño de su contenedor padre, por lo que el elemento envolvente debe tener una altura definida.

## Documentación

- [Visión general](https://gravity-ui.github.io/charts/pages/overview.html)
- [Primeros pasos](https://gravity-ui.github.io/charts/pages/get-started.html)
- [Desarrollo](https://gravity-ui.github.io/charts/pages/development.html)
- [API](https://gravity-ui.github.io/charts/pages/api/overview.html)
- [Guías](https://gravity-ui.github.io/charts/pages/guides/tooltip.html)

## Licencia

Distribuido bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## Para agentes de IA

Una librería declarativa de gráficos React para aplicaciones Gravity UI — renderiza gráficos de línea, área, barras, pastel, dispersión, treemap y otros a partir de una única configuración `data`, tematizada para que coincida con el resto de la aplicación.

### Cuándo usar

- Gráficos empresariales estándar: `line`, `area`, `bar-x`/`bar-y`, `pie`, `scatter`, `treemap`, `waterfall`, `sankey`, `radar`, `heatmap`, `funnel`, `x-range`.
- Visualizaciones que deben seguir la tematización de Gravity UI (clara/oscura) y compartir tokens con una aplicación `@gravity-ui/uikit`.
- Renderizar un gráfico a partir de datos declarativos en lugar de dibujarlo imperativamente.

### Cuándo no usar

- Proyectos que aún usan `@gravity-ui/chartkit` — ese es el antiguo wrapper basado en adaptadores (YAGR/Highcharts/D3); este paquete es el renderizador independiente moderno y no es un reemplazo directo.
- Datos tabulares simples — usa [`@gravity-ui/table`](https://github.com/gravity-ui/table).
- Renderizado no-React o solo del lado del servidor — `Chart` renderiza SVG de React y necesita el DOM.

### Errores comunes

- **El componente es `Chart`, no `ChartKit`.** Importa `{Chart}` desde `@gravity-ui/charts`; `ChartKit` pertenece al paquete legado separado `@gravity-ui/chartkit`.
- **La prop `data` es `data`, con la forma `{series: {data: [...]}}`.** Cada entrada en `series.data` es una serie con su propio `type` y array `data` — no hay un array de series de nivel superior.
- **Nada se renderiza sin un contenedor con tamaño.** `Chart` llena su contenedor padre, así que dale al envoltorio una altura explícita.
- **Requiere configuración de uikit.** Envuelve en `ThemeProvider` e importa `@gravity-ui/uikit/styles/styles.css`; `@gravity-ui/uikit` es una dependencia peer requerida.

### Documentación útil

- [Primeros pasos](./docs/diplodoc/pages/get-started.md)
- [Tematización](./docs/diplodoc/pages/guides/theming.md)
- [Tooltip](./docs/diplodoc/pages/guides/tooltip.md)
- [Leyenda](./docs/diplodoc/pages/guides/legend.md)
- [Contenido HTML](./docs/diplodoc/pages/guides/html.md)
- [Formato de valores](./docs/diplodoc/pages/guides/value-formatting.md)
- [Etiquetas de datos](./docs/diplodoc/pages/guides/data-labels.md)
- [Tipos de ejes](./docs/diplodoc/pages/guides/axis-types.md)