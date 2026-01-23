# Ẏagr <img src="https://raw.githubusercontent.com/gravity-ui/yagr/main/docs/assets/yagr.svg" width="24px" height="24px" />

Yagr es un renderizador de gráficos HTML5 Canvas de alto rendimiento basado en [uPlot](https://github.com/leeoniya/uPlot). Proporciona funcionalidades de alto nivel para gráficos uPlot.

<img src="https://raw.githubusercontent.com/gravity-ui/yagr/main/docs/assets/demo.png" width="800" />

## Características

-   [Líneas, áreas, columnas y puntos como tipos de visualización. Configurables por serie](https://yagr.tech/en/api/visualization)
-   [Tooltip de leyenda configurable](https://yagr.tech/en/plugins/tooltip)
-   [Ejes con opciones adicionales para precisión de nivel decimal](https://yagr.tech/en/api/axes)
-   [Escalas con funciones de rango y transformaciones configurables](https://yagr.tech/en/api/scales)
-   [Líneas y bandas de trazado. Capa de dibujo configurable](https://yagr.tech/en/plugins/plot-lines)
-   [Gráficos responsivos](https://yagr.tech/en/api/settings#adaptivity) (requiere [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver))
-   [Soporte de alto nivel para áreas/columnas apiladas](https://yagr.tech/en/api/scales#stacking)
-   [Marcadores configurables](./docs/api/markers.md)
-   [Tema claro/oscuro](https://yagr.tech/en/api/settings#theme)
-   [Normalización de datos](https://yagr.tech/en/api/scales#normalization)
-   [Retículas, marcadores de cursor y ajuste configurables](https://yagr.tech/en/api/cursor)
-   Typescript
-   [Localización](https://yagr.tech/en/api/settings#localization)
-   [Variables CSS en nombres de color](https://yagr.tech/en/api/css)
-   [Leyenda paginada en línea](https://yagr.tech/en/plugins/legend)
-   [Manejo de errores y hooks extendidos](https://yagr.tech/en/api/lifecycle)
-   [Alineación e interpolación de datos para datos faltantes](https://yagr.tech/en/api/data-processing)
-   [Actualizaciones en tiempo real](https://yagr.tech/en/api/dynamic-updates)

## [Documentación](https://yagr.tech)

## Inicio Rápido

```
npm i @gravity-ui/yagr
```

### Módulo NPM

```typescript
import Yagr from '@gravity-ui/yagr';

new Yagr(document.body, {
    timeline: [1, 2, 3, 4, 5],
    series: [
        {
            data: [1, 2, 3, 4, 5],
            color: 'red',
        },
        {
            data: [2, 3, 1, 4, 5],
            color: 'green',
        },
    ],
});
```

### Etiqueta Script

```html
<script src="https://unpkg.com/@gravity-ui/yagr/dist/yagr.iife.min.js"></script>
<script>
    new Yagr(document.body, {
        timeline: [1, 2, 3, 4, 5],
        series: [
            {
                data: [1, 2, 3, 4, 5],
                color: 'red',
            },
            {
                data: [2, 3, 1, 4, 5],
                color: 'green',
            },
        ],
    });
</script>
```

### Ejemplos

¿Necesitas algo específico? Yagr presenta algunos ejemplos útiles en la carpeta [demo/examples](./demo/examples/). Cómo iniciarlos con la versión actual:

1. Clona el repositorio.
2. Instala las dependencias `npm i`.
3. Ejecuta `npm run build`.
4. Ejecuta `npx http-server .`.
5. Abre los ejemplos en el navegador según la salida de http-server.