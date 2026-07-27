# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page constructor

`Page-constructor` es una biblioteca para renderizar páginas web o partes de ellas basándose en datos `JSON` (próximamente se añadirá soporte para el formato `YAML`).

Al crear páginas, se utiliza un enfoque basado en componentes: una página se construye utilizando un conjunto de bloques predefinidos que se pueden colocar en cualquier orden. Cada bloque tiene un tipo específico y un conjunto de parámetros de datos de entrada.

Para conocer el formato de los datos de entrada y la lista de bloques disponibles, consulta la [documentación](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs).

## Instalación

```shell
npm install @gravity-ui/page-constructor
```

## Inicio rápido

Primero, necesitamos un proyecto de React y algún tipo de servidor. Por ejemplo, puedes crear un proyecto de React usando Vite y un servidor Express, o puedes crear una aplicación Next.js, que tendrá lado cliente y servidor a la vez.

Instala las dependencias necesarias:

```shell
npm install @gravity-ui/page-constructor @diplodoc/transform @gravity-ui/uikit
```

Inserta el `Page Constructor` en la página. Para que funcione correctamente, debe estar envuelto en un `PageConstructorProvider`:

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';

const App = () => {
  const content = {
    blocks: [
      {
        type: 'header-block',
        title: 'Hello world',
        background: {color: '#f0f0f0'},
        description:
          '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
      },
    ],
  };

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

Este fue el ejemplo más sencillo de conexión. Para que el marcado YFM funcione, necesitas procesar el contenido en el servidor y recibirlo en el cliente.

Si tu servidor es una aplicación separada, entonces necesitas instalar page-constructor:

```shell
npm install @gravity-ui/page-constructor
```

Para procesar YFM en todos los bloques base, llama a `contentTransformer` y pásale el contenido y las opciones:

```ts
const express = require('express');
const app = express();
const {contentTransformer} = require('@gravity-ui/page-constructor/server');

const content = {
  blocks: [
    {
      type: 'header-block',
      title: 'Hello world',
      background: {color: '#f0f0f0'},
      description:
        '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
    },
  ],
};

app.get('/content', (req, res) => {
  res.send({content: contentTransformer({content, options: {lang: 'en'}})});
});

app.listen(3000);
```

En el cliente, añade una llamada al endpoint para recibir el contenido:

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';
import {useEffect, useState} from 'react';

const App = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/content').then((r) => r.json());
      setContent(response.content);
    })();
  }, []);

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

### Plantilla lista para usar

Para iniciar un nuevo proyecto, puedes usar la [plantilla lista para usar en Next.js](https://github.com/gravity-ui/page-constructor-website-template) que hemos preparado.

### Generador de sitios estáticos

[Page Constructor Builder](https://github.com/gravity-ui/page-constructor-builder) - utilidad de línea de comandos para construir páginas estáticas a partir de configuraciones YAML utilizando @gravity-ui/page-constructor

## Documentación

### Parámetros

```typescript
interface PageConstructorProps {
  content: PageContent; // Datos de bloques en formato JSON.
  shouldRenderBlock?: ShouldRenderBlock; // Una función que se invoca al renderizar cada bloque y permite establecer condiciones para su visualización.
  custom?: Custom; // Bloques personalizados (ver `Personalización`).
  renderMenu?: () => React.ReactNode; // Una función que renderiza el menú de la página con navegación (planeamos añadir la renderización de la versión predeterminada del menú).
  navigation?: NavigationData; // Datos de navegación para usar el componente de navegación en formato JSON
  isBranded?: boolean; // Si es verdadero, añade un pie de página que enlaza a https://gravity-ui.com/. Prueba el componente BrandFooter para una mayor personalización.
}

interface PageConstructorProviderProps {
  isMobile?: boolean; // Un indicador de que el código se está ejecutando en modo móvil.
  locale?: LocaleContextProps; // Información sobre el idioma y el dominio (se utiliza al generar y formatear enlaces).
  location?: Location; // API del historial del navegador o del router, la URL de la página.
  analytics?: AnalyticsContextProps; // función para manejar eventos de analítica

  ssrConfig?: SSR; // Un indicador de que el código se está ejecutando en el lado del servidor.
  theme?: 'light' | 'dark'; // Tema con el que renderizar la página.
  mapsContext?: MapsContextType; // Parámetros para el mapa: apikey, type, scriptSrc, nonce
}

export interface PageContent extends Animatable {
  blocks: Block[];
  menu?: Menu;
  background?: MediaProps;
}

interface Custom {
  blocks?: CustomItems;
  subBlocks?: CustomItems;
  headers?: CustomItems;
  loadable?: LoadableConfig;
}

type ShouldRenderBlock = (block: Block, blockKey: string) => Boolean;

interface Location {
  history?: History;
  search?: string;
  hash?: string;
  pathname?: string;
  hostname?: string;
}

interface Locale {
  lang?: Lang;
  tld?: string;
}

interface SSR {
  isServer?: boolean;
}

interface NavigationData {
  logo: NavigationLogo;
  header: HeaderData;
}

interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}

interface HeaderData {
  leftItems: NavigationItem[];
  rightItems?: NavigationItem[];
}
```

```typescript
interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}
```

### Utilidades del servidor

El paquete proporciona un conjunto de utilidades del servidor para transformar tu contenido.

```ts
const {fullTransform} = require('@gravity-ui/page-constructor/server');

const {html} = fullTransform(content, {
  lang,
  extractTitle: true,
  allowHTML: true

```ts
function sendEvents(events: MyEventType []) {
  ...
}

<PageConstructorProvider
    ...

    analytics={{sendEvents, autoEvents: true}}

    ...
/>
```

Un objeto de evento tiene un único campo obligatorio: `name`. También tiene campos predefinidos que sirven para ayudar a gestionar lógica compleja. Por ejemplo, `counter.include` puede ayudar a enviar un evento a un contador particular si se utilizan varios sistemas de análisis en un proyecto.

```ts
type AnalyticsEvent<T = {}> = T & {
  name: string;
  type?: string;
  counters?: AnalyticsCounters;
  context?: string;
};
```

Es posible configurar un tipo de evento necesario para un proyecto.

```ts
type MyEventType = AnalyticsEvent<{
  [key: string]?: string; // solo se admite el tipo 'string'
}>;
```

#### Selector de contador

Es posible configurar un evento para determinar a qué sistema de análisis se enviará.

```ts
type AnalyticsCounters = {
  include?: string[]; // array de IDs de contadores de análisis que se aplicarán
  exclude?: string[]; // array de IDs de contadores de análisis que no se aplicarán
};
```

#### Parámetro `context`

Pasa el valor de `context` para definir el lugar en el proyecto donde se dispara un evento.

Utiliza el selector de abajo o crea lógica que sirva a las necesidades del proyecto.

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### Tipos de evento reservados

Varios tipos de eventos predefinidos se utilizan para marcar eventos configurados automáticamente. Utiliza los tipos para filtrar eventos predeterminados, por ejemplo.

```ts
enum PredefinedEventTypes {
  Default = 'default-event', // eventos predeterminados que se disparan en cada clic de botón
  Play = 'play', // evento del reproductor de React
  Stop = 'stop', // evento del reproductor de React
}
```

## Desarrollo

```bash
npm ci
npm run dev
```

#### Nota sobre Vite

```ts
import react from '@vitejs/plugin-react-swc';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
  plugins: [
    react(),
    dynamicImport({
      filter: (id) => id.includes('/node_modules/@gravity-ui/page-constructor'),
    }),
  ],
});
```

Para Vite, necesitas instalar el plugin `vite-plugin-dynamic-import` y configurar el archivo `vite.config.js` para que las importaciones dinámicas funcionen.

## Flujo de lanzamiento

En casos habituales, utilizamos dos tipos de commits:

1. `fix`: un commit de tipo `fix` corrige un error en tu código (esto se correlaciona con `PATCH` en Versionado Semántico).
2. `feat`: un commit de tipo `feat` introduce una nueva funcionalidad en el código (esto se correlaciona con `MINOR` en Versionado Semántico).
3. `BREAKING CHANGE`: un commit que tiene un pie de página `BREAKING CHANGE:`, o añade un `!` después del tipo/ámbito, introduce un cambio de API que rompe la compatibilidad (correlacionándose con `MAJOR` en Versionado Semántico). Un `BREAKING CHANGE` puede ser parte de commits de cualquier tipo.
4. Para establecer la versión del paquete de lanzamiento manualmente, necesitas añadir `Release-As: <version>` a tu mensaje de commit, por ejemplo:

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

Puedes ver toda la información [aquí](https://www.conventionalcommits.org/en/v1.0.0/).

Cuando recibas la aprobación de tu pull-request por parte de los propietarios del código y pases todas las comprobaciones, por favor, haz lo siguiente:

1. Debes comprobar si hay un pull-request de lanzamiento del robot con cambios de otro contribuyente (parece `chore(main): release 0.0.0`). Si existe, debes comprobar por qué no se ha fusionado. Si el contribuyente está de acuerdo en lanzar una versión compartida, sigue el siguiente paso. Si no, pídele que lance su versión, y luego sigue el siguiente paso.
2. Haz un "Squash and merge" de tu PR (¡Es importante lanzar una nueva versión con Github-Actions!).
3. Espera hasta que el robot cree un PR con una nueva versión del paquete e información sobre tus cambios en `CHANGELOG.md`. Puedes ver el proceso en la [pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).
4. Comprueba tus cambios en `CHANGELOG.md` y aprueba el PR del robot.
5. Haz un "Squash and merge" del PR. Puedes ver el proceso de lanzamiento en la [pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).

### Lanzamiento de versiones Alpha

Si quieres lanzar una versión alpha del paquete desde tu rama, puedes hacerlo manualmente:

1. Ve a la pestaña Actions.
2. Selecciona el flujo de trabajo "Release alpha version" en el lado izquierdo de la página.
3. A la derecha, verás el botón "Run workflow". Aquí puedes elegir la rama.
4. También verás un campo para la versión manual. Si lanzas una alpha en tu rama por primera vez, no pongas nada aquí

Este proyecto incluye un completo **Banco de Memoria** (Memory Bank): una colección de archivos de documentación Markdown que proporcionan información detallada sobre la arquitectura del proyecto, sus componentes y patrones de uso. El Banco de Memoria es particularmente útil cuando se trabaja con agentes de IA, ya que contiene información estructurada sobre:

- **Resumen del Proyecto**: Requisitos principales, objetivos y contexto.
- **Documentación de Componentes**: Guías de uso detalladas para todos los componentes.
- **Arquitectura del Sistema**: Patrones técnicos y decisiones de diseño.
- **Progreso del Desarrollo**: Estado actual y detalles de implementación.

### Uso del Banco de Memoria

El Banco de Memoria se encuentra en el directorio `memory-bank/` y consta de archivos Markdown regulares que se pueden leer como cualquier otra documentación:

- `projectbrief.md` - Documento fundamental con los requisitos principales.
- `productContext.md` - Propósito del proyecto y objetivos de experiencia de usuario.
- `systemPatterns.md` - Arquitectura y decisiones técnicas.
- `techContext.md` - Tecnologías, configuración y restricciones.
- `activeContext.md` - Enfoque de trabajo actual y cambios recientes.
- `progress.md` - Estado de implementación y problemas conocidos.
- `usage/` - Documentación de uso específica de componentes.
- `storybookComponents.md` - Detalles de integración de Storybook.

## Pruebas

La documentación completa está disponible en el [enlace](./test-utils/docs/README.md) proporcionado.

## Licencia

Distribuido bajo la Licencia MIT. Consulte [LICENSE](LICENSE) para obtener más detalles.

## Para agentes de IA

Una biblioteca para renderizar páginas web completas o secciones de páginas a partir de una configuración declarativa JSON/YAML, utilizando un conjunto de bloques listos para usar y ordenables. Úsala para crear páginas de marketing/landing, no interfaces de usuario de aplicaciones generales.

### Cuándo usarla

- Páginas basadas en datos: renderiza una configuración de `content` de bloques tipados con `PageConstructor` envuelto en `PageConstructorProvider`.
- Páginas de marketing, landing y documentación ensambladas a partir de bloques preconstruidos (encabezados, medios, tarjetas, etc.).
- Procesamiento YFM del lado del servidor del texto de los bloques a través de las utilidades `contentTransformer`, `fullTransform` de `@gravity-ui/page-constructor/server`.
- Reutilización independiente de la cuadrícula responsiva (`Grid`/`Row`/`Col`) o del componente `Navigation`.

### Cuándo no usarla

- Interfaces de usuario de aplicaciones generales (botones, formularios, modales): usa [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Edición de contenido Markdown/YFM: usa [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor).
- Estructuras de navegación de aplicaciones (barra lateral, encabezado): usa [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation); el `Navigation` de este paquete es una navegación superior a nivel de página.

### Errores comunes

- **`PageConstructor` debe estar envuelto en `PageConstructorProvider`.** Renderizarlo sin envolver rompe el contexto (idioma, tema, SSR, analíticas).
- **La prop `content` tiene la forma `{blocks: [...]}`.** Cada objeto de bloque necesita un `type` que coincida con un bloque conocido más sus campos de datos; no hay una prop `data`/`config`.
- **El YFM en el texto de los bloques necesita procesamiento del lado del servidor.** Los campos similares a Markdown se renderizan como texto plano a menos que proceses el contenido a través de `contentTransformer`/`fullTransform` de `@gravity-ui/page-constructor/server`; `@diplodoc/transform` es una dependencia peer requerida.
- **Importa los estilos SCSS.** Añade `@gravity-ui/page-constructor/styles/styles.scss` (SCSS, no CSS); los bloques personalizados importan el mismo archivo para reutilizar mixins/variables.
- **Vite necesita `vite-plugin-dynamic-import`.** Las importaciones dinámicas de bloques fallan en Vite sin él.

## Documentación para agentes de IA

La documentación legible por agentes para la versión instalada se encuentra en `node_modules/@gravity-ui/page-constructor/build/docs/INDEX.md`.