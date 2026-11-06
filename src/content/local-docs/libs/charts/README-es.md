# Gravity UI Charts · [![npm package](https://img.shields.io/npm/v/@gravity-ui/charts)](https://www.npmjs.com/package/@gravity-ui/charts) [![License](https://img.shields.io/github/license/gravity-ui/charts)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/charts/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/charts/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/charts/)

Librería declarativa de gráficos React: líneas, áreas, barras, circulares, de dispersión, de árbol, de Sankey, de mapas de calor y más, renderizados a partir de una única configuración de datos.

## Instalación

```shell
npm install @gravity-ui/uikit @gravity-ui/charts
```

`@gravity-ui/uikit` es una dependencia peer requerida; proporciona la tematización y los estilos de los que dependen los gráficos.

## Uso

Importa los estilos de `@gravity-ui/uikit` una vez en tu punto de entrada, envuelve tu aplicación en `Provider` y renderiza un `Chart` dentro de un contenedor con una altura explícita:

```tsx
import {Provider} from '@gravity-ui/uikit';
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
    <Provider theme="light">
      <div style={{height: 300}}>
        <Chart data={data} />
      </div>
    </Provider>
  );
}
```

`Chart` se adapta al tamaño de su elemento padre, por lo que el elemento contenedor debe tener una altura definida.

## Herramientas de configuración de gráficos

El paquete proporciona declaraciones de TypeScript y JSON Schema para la validación, generación e integración de Monaco de la configuración de gráficos. Consulta la [documentación de herramientas de configuración de gráficos](https://gravity-ui.github.io/charts/pages/integrations/chart-config.html) para obtener detalles de configuración y uso.

## Documentación

- [Visión general](https://gravity-ui.github.io/charts/pages/overview.html)
- [Primeros pasos](https://gravity-ui.github.io/charts/pages/get-started.html)
- [Desarrollo](https://gravity-ui.github.io/charts/pages/development.html)
- [API](https://gravity-ui.github.io/charts/pages/api/overview.html)
- [Guías](https://gravity-ui.github.io/charts/pages/guides/series-types/index.html)

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE) para obtener más detalles.

## Para agentes de IA

Una librería declarativa de gráficos React: renderiza gráficos de líneas, áreas, barras, circulares, de dispersión, de árbol, de Sankey, de mapas de calor y otros a partir de una única configuración `data`, con temas claro y oscuro integrados.

### Cuándo usar

- Tipos de series compatibles: `line`, `area`, `area-range`, `bar-x`/`bar-y`, `pie`, `scatter`, `treemap`, `waterfall`, `sankey`, `radar`, `heatmap`, `funnel`, `x-range`.
- Visualizaciones que deben seguir la tematización de Gravity UI (clara/oscura) y compartir tokens con una aplicación `@gravity-ui/uikit`.
- Renderizar un gráfico a partir de datos declarativos en lugar de dibujarlo imperativamente.

### Cuándo no usar

- Proyectos que aún usan `@gravity-ui/chartkit`: ese es el antiguo wrapper basado en adaptadores (YAGR/Highcharts/D3); este paquete es el renderizador independiente moderno y no es un reemplazo directo.
- Datos tabulares simples: usa [`@gravity-ui/table`](https://github.com/gravity-ui/table).
- Renderizado no-React o solo del lado del servidor: `Chart` renderiza SVG de React y necesita el DOM.

### Errores comunes

- El componente es `Chart`, no `ChartKit`. Importa `{Chart}` desde `@gravity-ui/charts`; `ChartKit` pertenece al paquete separado y heredado `@gravity-ui/chartkit`.
- El prop `data` es `data`, con la forma `{series: {data: [...]}}`. Cada entrada en `series.data` es una serie con su propio `type` y array `data`; no hay un array de series de nivel superior.
- Nada se renderiza sin un contenedor con tamaño. `Chart` llena su padre, así que dale al contenedor una altura explícita.
- Requiere configuración de uikit. Envuelve en `Provider` e importa `@gravity-ui/uikit/styles/styles.css`; `@gravity-ui/uikit` es una dependencia peer requerida.

### Documentación útil

- [Primeros pasos](./docs/diplodoc/pages/get-started.md)
- [Tipos de series](./docs/diplodoc/pages/guides/series-types/index.md)
- [Tematización](./docs/diplodoc/pages/guides/theming.md)
- [Tooltip](./docs/diplodoc/pages/guides/tooltip.md)
- [Leyenda](./docs/diplodoc/pages/guides/legend.md)
- [Contenido HTML](./docs/diplodoc/pages/guides/html.md)
- [Formato de valores](./docs/diplodoc/pages/guides/value-formatting.md)
- [Etiquetas de datos](./docs/diplodoc/pages/guides/data-labels.md)
- [Tipos de ejes](./docs/diplodoc/pages/guides/axes/axis-types.md)
- [Etiquetas de ejes](./docs/diplodoc/pages/guides/axes/axis-labels.md)
- [Eventos e interacciones](./docs/diplodoc/pages/guides/chart-interactions.md)
- [Herramientas de configuración de gráficos](./docs/diplodoc/pages/integrations/chart-config.md)
- [Migración de v1 a v2](./docs/diplodoc/pages/migration/v2.md)

## Documentación para agentes de IA

La documentación legible por agentes para la versión instalada se encuentra en `node_modules/@gravity-ui/charts/dist/docs/INDEX.md`.