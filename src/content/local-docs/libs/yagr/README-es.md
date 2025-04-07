# Agr <img src="https://raw.githubusercontent.com/gravity-ui/yagr/main/docs/assets/yagr.svg" width="24px" height="24px" />

[Yagr es un renderizador de gráficos de lienzo HTML5 de alto rendimiento basado en uPlot.](https://github.com/leeoniya/uPlot) Proporciona funciones de alto nivel para los gráficos de uPlot.

<img src="https://raw.githubusercontent.com/gravity-ui/yagr/main/docs/assets/demo.png" width="800" />

## Características

- [Líneas, áreas, columnas y puntos como tipos de visualización. Configurable por serie](https://yagr.tech/en/api/visualization)
- [Descripción emergente de leyenda configurable](https://yagr.tech/en/plugins/tooltip)
- [Ejes con opciones adicionales para una precisión de nivel decimal](https://yagr.tech/en/api/axes)
- [Escalas con transformaciones y funciones de rango configurables](https://yagr.tech/en/api/scales)
- [Líneas argumentales y bandas. Capa de dibujo configurable](https://yagr.tech/en/plugins/plot-lines)
- [Gráficos adaptables](https://yagr.tech/en/api/settings#adaptivity) (requiere [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver))
- [Soporte de alto nivel de áreas/columnas apiladas](https://yagr.tech/en/api/scales#stacking)
- [Marcadores configurables](./docs/api/markers.md)
- [Tema claro/oscuro](https://yagr.tech/en/api/settings#theme)
- [Normalización de datos](https://yagr.tech/en/api/scales#normalization)
- [Puntos de mira, marcadores de cursor y ajuste configurables](https://yagr.tech/en/api/cursor)
- Texto mecanografiado
- [Localización](https://yagr.tech/en/api/settings#localization)
- [Variables CSS en nombres de colores](https://yagr.tech/en/api/css)
- [Leyenda en línea paginada](https://yagr.tech/en/plugins/legend)
- [Gestión de errores y ganchos extendidos](https://yagr.tech/en/api/lifecycle)
- [Alineación e interpolación de datos para datos faltantes](https://yagr.tech/en/api/data-processing)
- [Actualizaciones en tiempo real](https://yagr.tech/en/api/dynamic-updates)

## [Documentación](https://yagr.tech)

## Inicio rápido

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

### Etiqueta de script

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
2. Instale las dependencias. `npm i`
3. Corre `npm run build`.
4. Corre `npx http-server .`.
5. Abra los ejemplos en el navegador según la salida del servidor http.
