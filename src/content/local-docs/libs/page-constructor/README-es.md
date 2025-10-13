# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page constructor

`Page-constructor` es una biblioteca para renderizar páginas web o partes de ellas basándose en datos `JSON` (próximamente se añadirá soporte para el formato `YAML`).

Al crear páginas, se utiliza un enfoque basado en componentes: una página se construye utilizando un conjunto de bloques listos para usar que se pueden colocar en cualquier orden. Cada bloque tiene un tipo específico y un conjunto de parámetros de datos de entrada.

Para conocer el formato de los datos de entrada y la lista de bloques disponibles, consulta la [documentación](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs).

## Instalación

```shell
npm install @gravity-ui/page-constructor
```

## Inicio rápido

Primero, necesitamos un proyecto React y algún tipo de servidor. Por ejemplo, puedes crear un proyecto React usando Vite y un servidor Express, o puedes crear una aplicación Next.js, que tendrá lado cliente y servidor a la vez.

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

```html
<div class="language-selector">
  <a href="/en/README.md">English</a>
  <a href="/es/README.md">Español</a>
</div>
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

Internamente, se utiliza un paquete para transformar Yandex Flavored Markdown a HTML: `diplodoc/transfrom`, por lo que también se encuentra en las dependencias peer.

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

Para una guía completa sobre el uso de utilidades del servidor, incluyendo explicaciones detalladas y casos de uso avanzados, visita el [capítulo adicional sobre el uso de utilidades del servidor](./docs/data-preparation.md).

### Bloques personalizados

El constructor de páginas te permite usar bloques definidos por el usuario en su aplicación. Los bloques son componentes React normales.

Para pasar bloques personalizados al constructor:

1. Crea un bloque en tu aplicación.

2. En tu código, crea un objeto con el tipo de bloque (cadena) como clave y un componente de bloque importado como valor.

3. Pasa el objeto que creaste a los parámetros `custom.blocks`, `custom.headers` o `custom.subBlocks` del componente `PageConstructor` (`custom.headers` especifica los encabezados del bloque que se renderizarán por separado encima del contenido general).

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

Para agregar bloques `loadable` personalizados, pasa al `PageConstructor` la propiedad `custom.loadable` con los nombres de las fuentes de datos (cadena) como clave y un objeto como valor.

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

Los sub-bloques son componentes que se pueden usar en la propiedad `children` de un bloque. En una configuración, se especifica una lista de componentes hijos de sub-bloques. Una vez renderizados, estos sub-bloques se pasan al bloque como `children`.

### Cómo agregar un nuevo bloque a `page-constructor`

1. En el directorio `src/blocks` o `src/sub-blocks`, crea una carpeta con el código del bloque o sub-bloque.

2. Agrega el nombre del bloque o sub-bloque al enum `BlockType` o `SubBlockType` y describe sus propiedades en el archivo `src/models/constructor-items/blocks.ts` o `src/models/constructor-items/sub-blocks.ts` de manera similar a los existentes.

3. Agrega una exportación para el bloque en el archivo `src/blocks/index.ts` y para el sub-bloque en el archivo `src/sub-blocks/index.ts`.

4. Agrega un nuevo componente o bloque al mapeo en `src/constructor-items.ts`.

5. Agrega un validador para el nuevo bloque:

   - Agrega un archivo `schema.ts` al directorio del bloque o sub-bloque. En este archivo, describe un validador de parámetros para el componente en formato [`json-schema`](http://json-schema.org/).
   - Expórtalo en el archivo `schema/validators/blocks.ts` o `schema/validators/sub-blocks.ts`.
   - Agrégalo a `enum` o `selectCases` en el archivo `schema/index.ts`.

6. En el directorio del bloque, agrega el archivo `README.md` con una descripción de los parámetros de entrada.
7. En el directorio del bloque, agrega una demostración de storybook en la carpeta `__stories__`. Todo el contenido de demostración para la historia debe colocarse en `data.json` en el directorio de la historia. La `Story` genérica debe aceptar el tipo de props del bloque, de lo contrario, se mostrarán props de bloque incorrectos en Storybook.
8. Agrega una plantilla de datos de bloque a la carpeta `src/editor/data/templates/`, el nombre del archivo debe coincidir con el tipo de bloque.
9. (opcional) Agrega un icono de vista previa del bloque a la carpeta `src/editor/data/previews/`, el nombre del archivo debe coincidir con el tipo de bloque.

### Temas

El `PageConstructor` te permite usar temas: puedes establecer diferentes valores para propiedades individuales de los bloques según el tema seleccionado en la aplicación.

Para agregar un tema a una propiedad de bloque:

1. En el archivo `models/blocks.ts`, define el tipo de la propiedad de bloque respectiva usando el genérico `ThemeSupporting<T>`, donde `T` es el tipo de la propiedad.

2. En el archivo con el componente `react` del bloque, obtén el valor de la propiedad con el tema a través del hook `getThemedValue` y `useTheme` (ver ejemplos en el bloque `MediaBlock.tsx`).

3. Agrega soporte de tema a la propiedad validadora: en el archivo `schema.ts` del bloque, envuelve esta propiedad en `withTheme`.

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
`STORYBOOK_GMAP_API_KEY` - apiKey para google maps.

### Analíticas

#### Inicialización

Para comenzar a usar cualquier analítica, pasa un manejador al constructor. El manejador debe ser creado en el lado del proyecto. El manejador recibirá los objetos de evento `default` y `custom`. El manejador pasado se activará al hacer clic en botones, enlaces, navegación y controles. Como se utiliza un solo manejador para tratar todos los eventos, presta atención a cómo tratar diferentes eventos al crear el manejador. Hay campos predefinidos que sirven para ayudarte a construir lógica compleja.

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

Un objeto de evento tiene un único campo obligatorio: `name`. También tiene campos predefinidos que sirven para ayudar a gestionar la lógica compleja. Por ejemplo, `counter.include` puede ayudar a enviar un evento a un contador particular si se utilizan varios sistemas de análisis en un proyecto.

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

Es posible configurar un evento al que se enviará un sistema de análisis.

```ts
type AnalyticsCounters = {
  include?: string[]; // array de IDs de contadores de análisis que se aplicarán
  exclude?: string[]; // array de IDs de contadores de análisis que no se aplicarán
};
```

#### Parámetro `context`

Pase el valor de `context` para definir el lugar en el proyecto donde se dispara un evento.

Utilice el selector a continuación o cree una lógica que sirva a las necesidades del proyecto.

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### Tipos de evento reservados

Se utilizan varios tipos de eventos predefinidos para marcar eventos configurados automáticamente. Utilice los tipos para filtrar eventos predeterminados, por ejemplo.

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

Para Vite, necesita instalar el plugin `vite-plugin-dynamic-import` y configurar el archivo `vite.config.ts` para que los imports dinámicos funcionen.

## Flujo de lanzamiento

En casos habituales, utilizamos dos tipos de commits:

1. `fix`: un commit de tipo `fix` corrige un error en su código (esto se correlaciona con `PATCH` en el Versionado Semántico).
2. `feat`: un commit de tipo `feat` introduce una nueva funcionalidad en el código (esto se correlaciona con `MINOR` en el Versionado Semántico).
3. `BREAKING CHANGE`: un commit que tiene un pie de página `BREAKING CHANGE:`, o añade un `!` después del tipo/ámbito, introduce un cambio de API que rompe la compatibilidad (correlacionándose con `MAJOR` en el Versionado Semántico). Un `BREAKING CHANGE` puede formar parte de commits de cualquier tipo.
4. Para establecer manualmente la versión del paquete de lanzamiento, necesita añadir `Release-As: <version>` a su mensaje de commit, por ejemplo:

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

Puede ver toda la información [aquí](https://www.conventionalcommits.org/en/v1.0.0/).

Cuando reciba la aprobación de su pull-request por parte de los propietarios del código y supere todas las comprobaciones, por favor, haga lo siguiente:

1. Debe comprobar si existe un pull-request de lanzamiento del robot con cambios de otro contribuyente (tiene un aspecto como `chore(main): release 0.0.0`). Si existe, debe comprobar por qué no se ha fusionado. Si el contribuyente está de acuerdo en lanzar una versión compartida, siga el siguiente paso. Si no, pídale que lance su versión, y luego siga el siguiente paso.
2. Haga un "Squash and merge" de su PR (¡Es importante lanzar una nueva versión con Github-Actions!).
3. Espere hasta que el robot cree un PR con una nueva versión del paquete e información sobre sus cambios en `CHANGELOG.md`. Puede ver el proceso en [la pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).
4. Compruebe sus cambios en `CHANGELOG.md` y apruebe el PR del robot.
5. Haga un "Squash and merge" del PR. Puede ver el proceso de lanzamiento en [la pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).

### Lanzamiento de versiones Alpha

Si desea lanzar una versión alpha del paquete desde su rama, puede hacerlo manualmente:

1. Vaya a la pestaña Actions.
2. Seleccione el flujo de trabajo "Release alpha version" en el lado izquierdo de la página.
3. En el lado derecho, verá el botón "Run workflow". Aquí puede elegir la rama.
4. También verá un campo para la versión manual. Si lanza alpha en su rama por primera vez, no ponga nada aquí. Después del primer lanzamiento, tendrá que establecer la nueva versión manualmente porque no cambiamos `package.json` en caso de que la rama pueda expirar muy pronto. Utilice el prefijo `alpha` en su versión manual, de lo contrario obtendrá un error.
5. Pulse "Run workflow" y espere hasta que la acción finalice. Puede lanzar versiones tantas veces como quiera, pero no abuse y lance versiones si realmente las necesita. En otros casos, utilice [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack).

### Lanzamiento de versiones Beta-major

Si desea lanzar una nueva versión mayor, probablemente necesitará versiones beta antes de una estable, por favor, haga lo siguiente:

1. Cree o actualice la rama `beta`.
2. Añada sus cambios allí.
3. Cuando esté listo para una nueva versión beta, láncela manualmente con un commit vacío (o puede añadir este mensaje de commit con pie de página al último commit):

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4. El robot "Release please" creará un nuevo PR a la rama `beta` con `CHANGELOG.md` actualizado y el número de versión del paquete incrementado.
5. Puede repetirlo tantas veces como quiera. Cuando esté listo para lanzar la última versión mayor sin etiqueta beta, tendrá que crear un PR desde la rama `beta` a la rama `main`. Tenga en cuenta que es normal que su versión de paquete tenga una etiqueta beta. El robot lo sabe y lo cambia adecuadamente. `3.0.0-beta.0` se convertirá en `3.0.0`.

### Flujo de lanzamiento para versiones mayores anteriores

Si desea lanzar una nueva versión en una versión mayor anterior después de confirmarla en `main`, por favor, haga lo siguiente:

1. Actualice la rama necesaria, los nombres de las ramas de lanzamiento de versiones mayores anteriores son:
   1. `version-1.x.x/fixes` - para la versión mayor 1.x.x
   2. `version-2.x.x` - para la versión mayor 2.x.x
2. Cree una nueva rama a partir de la rama de lanzamiento de la versión mayor anterior.
3. Haga un "cherry-pick" de su commit desde la rama `main`.
4. Cree un PR, obtenga la aprobación y fusione en la rama de lanzamiento de la versión mayor anterior.
5. Haga un "Squash and merge" de su PR (¡Es importante lanzar una nueva versión con Github-Actions!).
6. Espere hasta que el robot cree un PR con una nueva versión del paquete e información sobre sus cambios en `CHANGELOG.md`. Puede ver el proceso en [la pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).
7. Compruebe sus cambios en `CHANGELOG.md` y apruebe el PR del robot.
8. Haga un "Squash and merge" del PR. Puede ver el proceso de lanzamiento en [la pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).

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

Aquí tienes la traducción del archivo README al español, manteniendo un tono natural y la estructura solicitada:

```html
<a href="../README.es.md">es</a> | <a href="../README.en.md">en</a>
```

Este proyecto incluye un **Banco de Memoria** completo: una colección de archivos de documentación Markdown que proporcionan información detallada sobre la arquitectura del proyecto, sus componentes y patrones de uso. El Banco de Memoria es especialmente útil cuando se trabaja con agentes de IA, ya que contiene información estructurada sobre:

- **Descripción General del Proyecto**: Requisitos principales, objetivos y contexto.
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

Los agentes de IA pueden leer estos archivos para familiarizarse rápidamente con el contexto del proyecto y tomar decisiones más informadas sobre cambios de código e implementaciones.

## Pruebas

La documentación completa está disponible en el [enlace](./test-utils/docs/README.md) proporcionado.