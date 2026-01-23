# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Constructor de páginas

`Page-constructor` es una biblioteca para renderizar páginas web o partes de ellas basándose en datos `JSON` (se añadirá soporte para el formato `YAML` más adelante).

Al crear páginas, se utiliza un enfoque basado en componentes: una página se construye utilizando un conjunto de bloques listos para usar que se pueden colocar en cualquier orden. Cada bloque tiene un tipo específico y un conjunto de parámetros de datos de entrada.

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
        title: 'Hola mundo',
        background: {color: '#f0f0f0'},
        description:
          '**¡Felicidades!** Has integrado [page-constructor](https://github.com/gravity-ui/page-constructor) en tu sitio web',
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
      title: 'Hola mundo',
      background: {color: '#f0f0f0'},
      description:
        '**¡Felicidades!** Has integrado [page-constructor](https://github.com/gravity-ui/page-constructor) en tu sitio web',
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
  allowHTML: true,
  path: __dirname,
  plugins,
});
```

Internamente, se utiliza un paquete para transformar Yandex Flavored Markdown en HTML: `diplodoc/transfrom`, por lo que también se encuentra en las dependencias peer.

También puedes usar utilidades útiles donde las necesites, por ejemplo, en tus componentes personalizados.

```ts
const {
  typografToText,
  typografToHTML,
  yfmTransformer,
} = require('@gravity-ui/page-constructor/server');

const post = {
  title: typografToText(title, lang),
  content: typografToHTML(content, lang),
  description: yfmTransformer(lang, description, {plugins}),
};
```

Puedes encontrar más utilidades en esta [sección](https://github.com/gravity-ui/page-constructor/tree/main/src/text-transform).

### Documentación detallada sobre utilidades del servidor y transformadores

Para obtener una guía completa sobre el uso de utilidades del servidor, incluidas explicaciones detalladas y casos de uso avanzados, visita el [capítulo adicional sobre el uso de utilidades del servidor](./docs/data-preparation.md).

### Bloques personalizados

El constructor de páginas te permite usar bloques que son definidos por el usuario en su aplicación. Los bloques son componentes React normales.

Para pasar bloques personalizados al constructor:

1. Crea un bloque en tu aplicación.

2. En tu código, crea un objeto con el tipo de bloque (cadena) como clave y un componente de bloque importado como valor.

3. Pasa el objeto que creaste al parámetro `custom.blocks`, `custom.headers` o `custom.subBlocks` del componente `PageConstructor` (`custom.headers` especifica los encabezados del bloque que se renderizarán por separado encima del contenido general).

4. Ahora puedes usar el bloque creado en los datos de entrada (el parámetro `content`) especificando su tipo y datos.

Para usar mixins y variables de estilo del constructor al crear bloques personalizados, agrega una importación en tu archivo:

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

Para usar la fuente predeterminada, agrega una importación en tu archivo:

```css
@import '~@gravity-ui/page-constructor/styles/fonts.scss';
```

### Bloques cargables

A veces es necesario que un bloque se renderice basándose en datos que deben cargarse. En este caso, se utilizan bloques cargables.

Para agregar bloques `loadable` personalizados, pasa al `PageConstructor` la propiedad `custom.loadable` con nombres de origen de datos (cadena) como clave y un objeto como valor.

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // método de carga de datos
  component: React.ComponentType; // bloque para pasar los datos cargados
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

### Grid

El constructor de páginas utiliza la cuadrícula de `bootstrap` y su implementación basada en componentes React que puedes usar en tu propio proyecto (incluso por separado del constructor).

Ejemplo de uso:

```jsx
import {Grid, Row, Col} from '@gravity-ui/page-constructor';

const Page = ({children}: PropsWithChildren<PageProps>) => (
  <Grid>
    <Row>
      <Col sizes={{lg: 4, sm: 6, all: 12}}>{children}</Col>
    </Row>
  </Grid>
);
```

### Navegación

La navegación de la página también se puede usar por separado del constructor:

```jsx
import {Navigation} from '@gravity-ui/page-constructor';

const Page= ({data, logo}: React.PropsWithChildren<PageProps>) => <Navigation data={data} logo={logo} />;
```

### Bloques

Cada bloque es un componente atómico de nivel superior. Se almacenan en el directorio `src/units/constructor/blocks`.

### Sub-bloques

Los sub-bloques son componentes que se pueden usar en la propiedad `children` de un bloque. En una configuración, se especifica una lista de componentes hijos de los sub-bloques. Una vez renderizados, estos sub-bloques se pasan al bloque como `children`.

### Cómo agregar un nuevo bloque a `page-constructor`

1. En el directorio `src/blocks` o `src/sub-blocks`, crea una carpeta con el código del bloque o sub-bloque.

2. Agrega el nombre del bloque o sub-bloque a la enumeración `BlockType` o `SubBlockType` y describe sus propiedades en el archivo `src/models/constructor-items/blocks.ts` o `src/models/constructor-items/sub-blocks.ts` de manera similar a los existentes.

3. Agrega una exportación para el bloque en el archivo `src/blocks/index.ts` y para el sub-bloque en el archivo `src/sub-blocks/index.ts`.

4. Agrega un nuevo componente o bloque al mapeo en `src/constructor-items.ts`.

5. Agrega un validador para el nuevo bloque:

   - Agrega un archivo `schema.ts` al directorio del bloque o sub-bloque. En este archivo, describe un validador de parámetros para el componente en formato [`json-schema`](http://json-schema/).
   - Expórtalo en el archivo `schema/validators/blocks.ts` o `schema/validators/sub-blocks.ts`.
   - Agrégalo a `enum` o `selectCases` en el archivo `schema/index.ts`.

6. En el directorio del bloque, agrega el archivo `README.md` con una descripción de los parámetros de entrada.
7. En el directorio del bloque, agrega una demostración de storybook en la carpeta `__stories__`. Todo el contenido de demostración para la historia debe colocarse en `data.json` en el directorio de la historia. La `Story` genérica debe aceptar el tipo de props del bloque, de lo contrario, se mostrarán props de bloque incorrectos en Storybook.
8. Agrega una plantilla de datos de bloque a la carpeta `src/editor/data/templates/`, el nombre del archivo debe coincidir con el tipo de bloque.
9. (opcional) Agrega un icono de vista previa del bloque a la carpeta `src/editor/data/previews/`, el nombre del archivo debe coincidir con el tipo de bloque.

### Temas

El `PageConstructor` te permite usar temas: puedes establecer diferentes valores para las propiedades individuales de los bloques según el tema seleccionado en la aplicación.

Para agregar un tema a una propiedad de bloque:

1. En el archivo `models/blocks.ts`, define el tipo de la propiedad de bloque respectiva usando el genérico `ThemeSupporting<T>`, donde `T` es el tipo de la propiedad.

2. En el archivo con el componente `react` del bloque, obtén el valor de la propiedad con el tema a través de `getThemedValue` y el hook `useTheme` (ver ejemplos en el bloque `MediaBlock.tsx`).

3. Agrega soporte de tema al validador de la propiedad: en el archivo `schema.ts` del bloque, envuelve esta propiedad en `withTheme`.

### i18n

`page-constructor` es una biblioteca basada en `uikit`, y usamos una instancia de `i18n` de uikit. Para configurar la internacionalización, solo necesitas usar `configure` de uikit:

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### Mapas

Para usar mapas, coloca el tipo de mapa, `scriptSrc` y `apiKey` en el campo `mapContext` en `PageConstructorProvider`.

Puedes definir variables de entorno para el modo de desarrollo en el archivo `.env.development` dentro de la raíz del proyecto.
`STORYBOOK_GMAP_API_KEY` - apiKey para google maps

### Analíticas

#### Inicialización

Para comenzar a usar cualquier analítica, pasa un manejador al constructor. El manejador debe ser creado en el lado del proyecto. El manejador recibirá los objetos de evento `default` y `custom`. El manejador pasado se activará en clics de botones, enlaces, navegación y controles. Como se utiliza un solo manejador para tratar todos los eventos, presta atención a cómo tratar diferentes eventos al crear el manejador. Hay campos predefinidos que sirven para ayudarte a construir lógica compleja.

Pasa `autoEvents: true` al constructor para activar eventos configurados automáticamente.

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

Utiliza el selector a continuación o crea lógica que sirva a las necesidades del proyecto.

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### Tipos de evento reservados

Se utilizan varios tipos de eventos predefinidos para marcar eventos configurados automáticamente. Utiliza los tipos para filtrar eventos predeterminados, por ejemplo.

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

Para Vite, necesitas instalar el plugin `vite-plugin-dynamic-import` y configurar el archivo `vite.config.ts` para que los imports dinámicos funcionen.

## Flujo de lanzamiento

En casos habituales, utilizamos dos tipos de commits:

1. `fix`: un commit de tipo `fix` corrige un error en tu código (esto se correlaciona con `PATCH` en Versionado Semántico).
2. `feat`: un commit de tipo `feat` introduce una nueva funcionalidad en el código (esto se correlaciona con `MINOR` en Versionado Semántico).
3. `BREAKING CHANGE`: un commit que tiene un pie de página `BREAKING CHANGE:`, o añade un `!` después del tipo/alcance, introduce un cambio de API que rompe la compatibilidad (correlacionándose con `MAJOR` en Versionado Semántico). Un `BREAKING CHANGE` puede ser parte de commits de cualquier tipo.
4. Para establecer la versión del paquete de lanzamiento manualmente, necesitas añadir `Release-As: <version>` a tu mensaje de commit, por ejemplo:

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

Puedes ver toda la información [aquí](https://www.conventionalcommits.org/en/v1.0.0/).

Cuando recibas la aprobación de tu pull-request por parte de los propietarios del código y pases todas las comprobaciones, por favor, haz lo siguiente:

1. Debes comprobar si hay un pull-request de lanzamiento del robot con cambios de otro contribuyente (tiene un aspecto como `chore(main): release 0.0.0`). Si existe, debes comprobar por qué no se ha fusionado. Si el contribuyente está de acuerdo en lanzar una versión compartida, sigue el siguiente paso. Si no, pídele que lance su versión, y luego sigue el siguiente paso.
2. Haz un "Squash and merge" de tu PR (¡Es importante lanzar una nueva versión con Github-Actions!).
3. Espera hasta que el robot cree un PR con una nueva versión del paquete e información sobre tus cambios en `CHANGELOG.md`. Puedes ver el proceso en [la pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).
4. Comprueba tus cambios en `CHANGELOG.md` y aprueba el PR del robot.
5. Haz un "Squash and merge" del PR. Puedes ver el proceso de lanzamiento en [la pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).

### Lanzamiento de versiones Alpha

Si quieres lanzar una versión alpha del paquete desde tu rama, puedes hacerlo manualmente:

1. Ve a la pestaña Actions.
2. Selecciona el workflow "Release alpha version" en el lado izquierdo de la página.
3. A la derecha, verás el botón "Run workflow". Aquí puedes elegir la rama.
4. También verás un campo para la versión manual. Si lanzas una alpha en tu rama por primera vez, no pongas nada aquí. Después del primer lanzamiento, tendrás que establecer la nueva versión manualmente porque no cambiamos `package.json` en caso de que la rama pueda expirar muy pronto. Usa el prefijo `alpha` en tu versión manual, de lo contrario obtendrás un error.
5. Pulsa "Run workflow" y espera hasta que la acción termine. Puedes lanzar versiones tantas veces como quieras, pero no abuses y lanza versiones solo si realmente las necesitas. En otros casos, usa [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack).

### Lanzamiento de versiones Beta-major

Si quieres lanzar una nueva versión major, probablemente necesitarás versiones beta antes de la estable. Por favor, haz lo siguiente:

1. Crea o actualiza la rama `beta`.
2. Añade tus cambios allí.
3. Cuando estés listo para una nueva versión beta, lánzala manualmente con un commit vacío (o puedes añadir este mensaje de commit con un pie de página al último commit):

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4. El robot "Release please" creará un nuevo PR a la rama `beta` con `CHANGELOG.md` actualizado y la versión del paquete incrementada.
5. Puedes repetirlo tantas veces como quieras. Cuando estés listo para lanzar la última versión major sin etiqueta beta, tendrás que crear un PR desde la rama `beta` a la rama `main`. Ten en cuenta que es normal que la versión de tu paquete tenga una etiqueta beta. El robot lo sabe y lo cambia correctamente. `3.0.0-beta.0` se convertirá en `3.0.0`.

### Flujo de lanzamiento para versiones major anteriores

Si quieres lanzar una nueva versión en una versión major anterior después de haberla confirmado en `main`, por favor, haz lo siguiente:

1. Actualiza la rama necesaria. Los nombres de las ramas de lanzamiento de versiones major anteriores son:
   1. `version-1.x.x/fixes` - para la major 1.x.x
   2. `version-2.x.x` - para la major 2.x.x
2. Crea una nueva rama a partir de la rama de lanzamiento de la versión major anterior.
3. Haz un "cherry-pick" de tu commit desde la rama `main`.
4. Crea un PR, obtén la aprobación y fusiona en la rama de lanzamiento de la versión major anterior.
5. Haz un "Squash and merge" de tu PR (¡Es importante lanzar una nueva versión con Github-Actions!).
6. Espera hasta que el robot cree un PR con una nueva versión del paquete e información sobre tus cambios en `CHANGELOG.md`. Puedes ver el proceso en [la pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).
7. Comprueba tus cambios en `CHANGELOG.md` y aprueba el PR del robot.
8. Haz un "Squash and merge" del PR. Puedes ver el proceso de lanzamiento en [la pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).

## Editor de Page Constructor

El editor proporciona una interfaz de usuario para la gestión del contenido de la página con vista previa en tiempo real.

Cómo usar:

```tsx
import {Editor} from '@gravity-ui/page-constructor/editor';

interface MyAppEditorProps {
  initialContent: PageContent;
  transformContent: ContentTransformer;
  onChange: (content: PageContent) => void;
}

export const MyAppEditor = ({initialContent, onChange, transformContent}: MyAppEditorProps) => (
  <Editor content={initialContent} onChange={onChange} transformContent={transformContent} />
);
```

## Memory Bank

Este proyecto incluye un completo **Banco de Memoria** (Memory Bank): una colección de archivos de documentación en Markdown que proporcionan información detallada sobre la arquitectura del proyecto, sus componentes y patrones de uso. El Banco de Memoria es particularmente útil cuando se trabaja con agentes de IA, ya que contiene información estructurada sobre:

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

### Para Agentes de IA

Al trabajar con agentes de IA en este proyecto, el Banco de Memoria sirve como una base de conocimiento integral que ayuda a los agentes a comprender:

- La estructura y los patrones del proyecto.
- Las API de los componentes y ejemplos de uso.
- Los flujos de trabajo de desarrollo y las mejores prácticas.
- El estado actual de implementación y los próximos pasos.

Los agentes de IA pueden leer estos archivos para familiarizarse rápidamente con el contexto del proyecto y tomar decisiones más informadas sobre cambios e implementaciones de código.

## Pruebas

La documentación completa está disponible en el [enlace](./test-utils/docs/README.md) proporcionado.