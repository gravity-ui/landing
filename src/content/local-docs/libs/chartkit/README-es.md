# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

Componente React basado en plugins que renderiza gráficos de múltiples bibliotecas de gráficos, como Gravity Charts y Yagr, a través de una única API de ChartKit, con tooltips amigables para móviles y soporte para plugins personalizados. Registras uno o más plugins y renderizas gráficos a través de `<ChartKit type="..." data={...} />` — ChartKit se encarga de despachar al renderizador correcto automáticamente.

Cada renderizador de plugin se carga de forma diferida (lazy-loaded), por lo que el código de la biblioteca subyacente solo se descarga cuando ChartKit se renderiza realmente en la interfaz de usuario. ChartKit también maneja la visualización de tooltips amigables para móviles de forma nativa. Puedes usar los plugins integrados o implementar los tuyos propios.

**Cuándo usarlo:**

- Necesitas gráficos declarativos modernos (`gravity-charts`) o gráficos de series temporales / monitorización (`yagr`)
- Necesitas múltiples tipos de gráficos bajo una única API consistente
- Quieres que los gráficos sigan el mismo tema claro/oscuro que el resto de tu UI de forma nativa

**Cuándo no usarlo:**

- Solo necesitas una biblioteca de gráficos específica — prefiere usar [@gravity-ui/charts](https://github.com/gravity-ui/charts) directamente

## Tabla de contenidos

- [Primeros pasos](#getting-started)
- [Actualización de paquetes de gráficos](#updating-charting-packages)
- [Desarrollo](#development)

## Primeros pasos

### Requisitos

- React 18 o 19
- [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 8 — dependencia peer requerida (proporciona temas y primitivas de UI)

### Instalación

```shell
npm install @gravity-ui/chartkit @gravity-ui/uikit
```

### Estilos

Importa los estilos de `@gravity-ui/uikit` en tu punto de entrada:

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

Para detalles completos de configuración, consulta la [guía de estilos de uikit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

### Uso básico

ChartKit utiliza un registro global de plugins. Llama a `settings.set` una vez en el punto de entrada de tu aplicación para registrar los plugins que necesitas. Cuando se renderiza `<ChartKit type="..." />`, busca el plugin correspondiente; si no se encuentra ninguno, se lanza un error. El renderizador de cada plugin es un componente `React.lazy`, por lo que su código se descarga solo cuando ChartKit aparece por primera vez en la UI.

Puedes registrar múltiples plugins a la vez:

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

O llama a `settings.set` varias veces — fusiona la lista de plugins en lugar de reemplazarla.

**Ejemplo básico:**

```tsx
import {Provider} from '@gravity-ui/uikit';
import ChartKit, {settings} from '@gravity-ui/chartkit';
import {GravityChartsPlugin} from '@gravity-ui/chartkit/gravity-charts';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

settings.set({plugins: [GravityChartsPlugin]});

const data = {
  series: {
    data: [
      {
        type: 'line',
        name: 'Series',
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
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </Provider>
  );
}
```

`ChartKit` se adapta al tamaño de su contenedor padre; asegúrate de que el contenedor tenga una altura explícita.

### SplitTooltip

El diseño de tooltip de panel dividido que `gravity-charts` utiliza en dispositivos táctiles (`tooltip={{splitted: true}}`) también está disponible como un componente independiente. Funciona con cualquier contenido: renderiza el panel principal y el panel del tooltip uno al lado del otro (o apilados, dependiendo del tamaño del contenedor) con un redimensionador arrastrable entre ellos.

```tsx
import {SplitTooltip} from '@gravity-ui/chartkit';

export function Panel() {
  return (
    <div style={{height: 400}}>
      <SplitTooltip
        renderMainPane={() => <MyVisualization />}
        renderTooltip={() => <MyTooltipContent />}
      />
    </div>
  );
}
```

Consulta el tipo `SplitTooltipProps` para controlar el diseño, el tamaño de los paneles y las opciones del redimensionador.

## Actualización de paquetes de gráficos

ChartKit incluye dos bibliotecas de gráficos de Gravity UI como dependencias:

- [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) — potencia el plugin `gravity-charts`
- [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) — potencia el plugin `yagr`

Si necesitas una versión más reciente de uno de estos paquetes, abre una solicitud de actualización de paquete ([Package update request](https://github.com/gravity-ui/ChartKit/issues/new?template=package-update-request.yml)) y selecciona el(los) paquete(s) que necesitas. Los mantenedores actualizarán los paquetes seleccionados y lanzarán la actualización.

### Actualización desde ChartKit 8

Consulta la [guía de migración](docs/migration-to-v9.md): uikit 8 y React 18+, las notas sobre la compilación CommonJS/ESM y la `moduleResolution` de TypeScript, y los cambios en los datos de `gravity-charts` que vienen con `@gravity-ui/charts` 2.

## Desarrollo

### Prerrequisitos

- [Node.js](https://nodejs.org/) 22 (ver [.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc))
- [npm](https://www.npmjs.com/) 10 o posterior

### Configuración

Clona el repositorio e instala las dependencias:

```shell
git clone https://github.com/gravity-ui/ChartKit.git
cd ChartKit
npm ci
```

### Ejecutar Storybook

```shell
npm run start
```

Storybook estará disponible en `http://localhost:7007`.

### Desarrollo con una dependencia local

Para trabajar en una dependencia (por ejemplo, `@gravity-ui/charts`) y ver tus cambios en vivo en Storybook sin publicarlos en npm:

**1. Enlaza el paquete local**

```shell
# En tu clon local de @gravity-ui/charts:
git clone https://github.com/gravity-ui/charts.git
cd charts
npm ci
# haz tus cambios
npm run build
npm link

# En ChartKit:
npm link @gravity-ui/charts
```

**2. Configura la observación del paquete local**

Crea un archivo `.env.local` en la raíz de ChartKit (está ignorado por git):

```shell
LOCAL_PKG=@gravity-ui/charts
```

Esto le indica a Vite que vigile ese paquete en `node_modules` y omita su pre-empaquetado. Después de reconstruir `@gravity-ui/charts`, Storybook se recargará automáticamente.

Para múltiples paquetes, usa una lista separada por comas:

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Inicia Storybook**

```shell
npm run start
```

**4. Restaura el paquete original**

Cuando hayas terminado:

1. Comenta `LOCAL_PKG` en `.env.local`
2. Ejecuta `npm install` en ChartKit — esto reemplaza el enlace simbólico con la versión del registro

```shell
# En ChartKit:
npm ci
```

### Ejecución de pruebas

```shell
npm test
```

Para verificar el paquete construido, primero constrúyelo. La verificación carga tanto la compilación CommonJS como la ESM en Node, compara sus exportaciones y realiza una verificación de tipos de un consumidor bajo las resoluciones de módulos `nodenext`, `bundler` y `node`:

```shell
npm run build
npm run test:build
```

Las pruebas de regresión visual se ejecutan en Docker para garantizar capturas de pantalla consistentes entre entornos:

```shell
npm run test:docker
```

Para actualizar las capturas de pantalla de referencia después de cambios intencionales en la interfaz de usuario:

```shell
npm run test:docker:update
```

### Contribución

Por favor, consulta la [guía de contribución](CONTRIBUTING.md) antes de enviar una solicitud de extracción.

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE) para más detalles.

## Para agentes de IA

Un componente React basado en plugins que renderiza gráficos de múltiples bibliotecas de gráficos, como Gravity Charts y Yagr, a través de una única API `<ChartKit type="..." data={...} />`, cargando cada biblioteca de forma perezosa solo cuando se renderiza su tipo de gráfico.

### Cuándo usar

- Renderizar más de un motor de gráficos detrás de un componente consistente: `gravity-charts` (gráficos SVG declarativos a través de [`@gravity-ui/charts`](https://github.com/gravity-ui/charts)) y `yagr` (series temporales basadas en uPlot a través de [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr)).
- Carga perezosa de paquetes de gráficos — el renderizador de cada plugin es `React.lazy`, por lo que el código de una biblioteca solo se descarga cuando su tipo de gráfico se muestra realmente.
- Tooltips amigables para móviles listos para usar — el gráfico y su tooltip se muestran en paneles divididos redimensionables en lugar de un popup al pasar el ratón; para `gravity-charts` actívalo con `<ChartKit type="gravity-charts" tooltip={{splitted: true}} />`.
- Usar el diseño de tooltip de panel dividido por sí solo — `SplitTooltip` es un componente independiente exportado desde la entrada raíz: pasa `renderMainPane` y `renderTooltip`, y los organiza como paneles redimensionables (verticales u horizontales, elegidos por el tamaño del contenedor) para cualquier contenido, no solo para gráficos ChartKit.
- Escribir tu propio plugin — registra `{type, renderer}` a través de `settings.set({plugins: [...]})`, donde `renderer` es un componente `React.lazy`; ChartKit lo despacha por `type` exactamente igual que a los plugins integrados.
- Tematización clara/oscura consistente en todos los motores de gráficos lista para usar — los gráficos siguen el tema `@gravity-ui/uikit` de la aplicación circundante.

### Cuándo no usar

- Para un solo tipo de gráfico, importa [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (general) o [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) (series temporales de alto rendimiento) directamente — el registro de plugins es una sobrecarga para un solo motor.
- Para componer una cuadrícula de dashboard de widgets, usa [`@gravity-ui/dashkit`](https://github.com/gravity-ui/dashkit) — ChartKit renderiza un gráfico; DashKit organiza muchos widgets.

### Errores comunes

- **Renderizar `<ChartKit>` antes de `settings.set({plugins: [...]})`** — el registro global de plugins debe estar poblado en la entrada de la aplicación; un `type` no registrado lanza un error en tiempo de renderizado.
- **Prop `chartType` / `library` inventada** — la prop de despacho es `type` (por ejemplo, `type="gravity-charts"`), y los datos son `data`.
- **Importar plugins desde la entrada raíz** — los plugins residen en exportaciones de subrutas (por ejemplo, `@gravity-ui/chartkit/gravity-charts`, `@gravity-ui/chartkit/yagr`); la entrada raíz `@gravity-ui/chartkit` no los reexporta.
- **Asumir una forma de `data` única para cada `type`** — la forma depende del plugin, por ejemplo, `gravity-charts` toma `ChartData` de `@gravity-ui/charts` (`{series: {data: [...]}}`), mientras que `yagr` toma `{data: {graphs, timeline}, libraryConfig}` con `libraryConfig` requerido.
- **Olvidar la altura del contenedor** — `ChartKit` llena su padre; sin una altura explícita en el envoltorio, el gráfico colapsa a cero.
- **Falta la importación de estilos de uikit** — la tematización depende de `@gravity-ui/uikit/styles/styles.css`; sin ella, los gráficos se renderizan sin estilo.

## Documentación para agentes de IA

La documentación legible por agentes para la versión instalada se encuentra en `node_modules/@gravity-ui/chartkit/build/docs/INDEX.md`.