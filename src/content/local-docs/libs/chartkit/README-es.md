# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

Componente React basado en plugins que proporciona una interfaz de renderizado unificada para múltiples bibliotecas de gráficos. Registras uno o más plugins y renderizas gráficos a través de `<ChartKit type="..." data={...} />` — ChartKit se encarga de enviarlo al renderizador correcto automáticamente.

Cada renderizador de plugin se carga de forma diferida (lazy-loaded), por lo que el código de la biblioteca subyacente solo se descarga cuando ChartKit se renderiza realmente en la interfaz de usuario. ChartKit también maneja la visualización de tooltips amigables para móviles de forma nativa. Puedes usar los plugins integrados o implementar los tuyos propios.

**Cuándo usarlo:**

- Necesitas gráficos declarativos modernos (`gravity-charts`) o gráficos de series temporales / monitorización (`yagr`)
- Necesitas múltiples tipos de gráficos bajo una única API consistente
- Estás desarrollando dentro del ecosistema de Gravity UI

**Cuándo no usarlo:**

- Solo necesitas una biblioteca de gráficos específica — prefiere usar [@gravity-ui/charts](https://github.com/gravity-ui/charts) directamente

## Tabla de contenidos

- [Primeros pasos](#get-started)
- [Desarrollo](#development)

## Primeros pasos

### Requisitos

- React 16, 17 o 18
- `[@gravity-ui/uikit](https://github.com/gravity-ui/uikit)` — dependencia peer requerida (proporciona temas y primitivas de UI)

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

Para obtener detalles completos de la configuración, consulta la [guía de estilos de uikit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

### Uso básico

ChartKit utiliza un registro global de plugins. Llama a `settings.set` una vez en el punto de entrada de tu aplicación para registrar los plugins que necesitas. Cuando se renderiza `<ChartKit type="..." />`, busca el plugin coincidente; si no se encuentra ninguno, se lanza un error. El renderizador de cada plugin es un componente `React.lazy`, por lo que su código se descarga solo cuando ChartKit aparece por primera vez en la interfaz de usuario.

Puedes registrar múltiples plugins a la vez:

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

O llama a `settings.set` varias veces — fusiona la lista de plugins en lugar de reemplazarla.

**Ejemplo básico:**

```tsx
import {ThemeProvider} from '@gravity-ui/uikit';
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
    <ThemeProvider theme="light">
      <div style={{height: 300}}>
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </ThemeProvider>
  );
}
```

`ChartKit` se adapta al tamaño de su contenedor padre — asegúrate de que el contenedor tenga una altura explícita.

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

### Desarrollar con una dependencia local

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

Esto le indica a Vite que observe ese paquete en `node_modules` y omita su pre-empaquetado. Después de reconstruir `@gravity-ui/charts`, Storybook se recargará en caliente automáticamente.

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

### Ejecutar pruebas

```shell
npm test
```

Las pruebas de regresión visual se ejecutan en Docker para garantizar capturas de pantalla consistentes entre entornos:

```shell
npm run test:docker
```

Para actualizar las capturas de pantalla de referencia después de cambios intencionados en la UI:

```shell
npm run test:docker:update
```

### Contribuir

Por favor, consulta la [guía de contribución](CONTRIBUTING.md) antes de enviar una pull request.