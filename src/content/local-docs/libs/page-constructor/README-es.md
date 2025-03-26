# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Constructor de páginas

`Page-constructor` es una biblioteca para renderizar páginas web o sus partes basadas en datos `JSON` (el soporte para el formato `YAML` se añadirá más adelante).

Al crear páginas, se utiliza un enfoque basado en componentes: una página se construye utilizando un conjunto de bloques predefinidos que pueden colocarse en cualquier orden. Cada bloque tiene un tipo determinado y un conjunto de parámetros de datos de entrada.

Para el formato de datos de entrada y la lista de bloques disponibles, consulta la [documentación](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs).

## Instalación

```shell
npm install @gravity-ui/page-constructor
```

## Dependencias requeridas

Ten en cuenta que para comenzar a usar el paquete, tu proyecto también debe tener instalado lo siguiente: `@diplodoc/transform`, `@gravity-ui/uikit`, `react`. Consulta la sección `peerDependencies` de `package.json` para obtener información precisa.

### Primeros pasos

El constructor de páginas se importa como un componente de React. Para asegurarte de que funcione correctamente, envuélvelo en `PageConstructorProvider`:

```jsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';

const Page: React.PropsWithChildren<PageProps> = ({content}) => (
  <PageConstructorProvider>
    <PageConstructor content={content} />
  </PageConstructorProvider>
);
```

### Parámetros

```typescript
interface PageConstructorProps {
  content: PageContent; // Datos de bloques en formato JSON.
  shouldRenderBlock?: ShouldRenderBlock; // Una función que se invoca al renderizar cada bloque y te permite establecer condiciones para su visualización.
  custom?: Custom; // Bloques personalizados (ver `Personalización`).
  renderMenu?: () => React.ReactNode; // Una función que renderiza el menú de la página con navegación (planeamos añadir renderizado para la versión predeterminada del menú).
  navigation?: NavigationData; // Datos de navegación para usar el componente de navegación en formato JSON
  isBranded?: boolean; // Si es true, añade un pie de página que enlaza a https://gravity-ui.com/. Prueba el componente BrandFooter para más personalización.
}

interface PageConstructorProviderProps {
  isMobile?: boolean; // Una bandera que indica que el código se ejecuta en modo móvil.
  locale?: LocaleContextProps; // Información sobre el idioma y el dominio (utilizado al generar y formatear enlaces).
  location?: Location; // API del historial del navegador o del enrutador, la URL de la página.
  analytics?: AnalyticsContextProps; // función para manejar eventos de analítica

  ssrConfig?: SSR; // Una bandera que indica que el código se ejecuta en el lado del servidor.
  theme?: 'light' | 'dark'; // Tema para renderizar la página.
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

interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}
```

### Utilidades del servidor

El paquete proporciona un conjunto de utilidades de servidor para transformar tu contenido.

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

Internamente, se utiliza un paquete para transformar Yandex Flavored Markdown en HTML - `diplodoc/transfrom`, por lo que también está en las dependencias peer.

También puedes usar utilidades útiles en los lugares que necesites, por ejemplo, en tus componentes personalizados.

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

Puedes encontrar más utilidades en esta [sección](https://github.com/gravity-ui/page-constructor/tree/main/src/text-transform)

### Bloques personalizados

El constructor de páginas te permite usar bloques definidos por el usuario en su aplicación. Los bloques son componentes regulares de React.

Para pasar bloques personalizados al constructor:

1. Crea un bloque en tu aplicación.

2. En tu código, crea un objeto con el tipo de bloque (string) como clave y un componente de bloque importado como valor.

3. Pasa el objeto que creaste al parámetro `custom.blocks`, `custom.headers` o `custom.subBlocks` del componente `PageConstructor` (`custom.headers` especifica los encabezados de bloque que se renderizarán por separado sobre el contenido general).

4. Ahora puedes usar el bloque creado en los datos de entrada (el parámetro `content`) especificando su tipo y datos.

Para usar mixins y variables de estilo del constructor al crear bloques personalizados, añade la importación en tu archivo:

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

### Bloques cargables

A veces es necesario que un bloque se renderice a sí mismo basándose en datos que se cargarán. En este caso, se utilizan bloques cargables.

Para añadir bloques `loadable` personalizados, pasa a `PageConstructor` la propiedad `custom.loadable` con nombres de fuentes de datos (string) para el componente como clave y un objeto como valor.

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // método de carga de datos
  component: React.ComponentType; // bloque para pasar datos cargados
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

### Grid

El constructor de páginas utiliza la cuadrícula `bootstrap` y su implementación basada en componentes de React que puedes usar en tu propio proyecto (incluso por separado del constructor).

Ejemplo de uso:

```jsx
import {Grid, Row, Col} from '@gravity-ui/page-constructor';

const Page: React.FC<PageProps> = ({children}) => (
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

const Page: React.FC<PageProps> = ({data, logo}) => <Navigation data={data} logo={logo} />;
```

### Bloques

Cada bloque es un componente atómico de nivel superior. Se almacenan en el directorio `src/units/constructor/blocks`.

### Sub-bloques

Los sub-bloques son componentes que pueden usarse en la propiedad `children` del bloque. En una configuración, se especifica una lista de componentes secundarios de sub-bloques. Una vez renderizados, estos sub-bloques se pasan al bloque como `children`.

### Cómo añadir un nuevo bloque al `page-constructor`

1. En el directorio `src/blocks` o `src/sub-blocks`, crea una carpeta con el código del bloque o sub-bloque.

2. Añade el nombre del bloque o sub-bloque a la enumeración `BlockType` o `SubBlockType` y describe sus propiedades en el archivo `src/models/constructor-items/blocks.ts` o `src/models/constructor-items/sub-blocks.ts` de manera similar a los existentes.

3. Añade la exportación para el bloque en el archivo `src/blocks/index.ts` y para el sub-bloque en el archivo `src/sub-blocks/index.ts`.

4. Añade un nuevo componente o bloque al mapeo en `src/constructor-items.ts`.

5. Añade un validador para el nuevo bloque:

   - Añade un archivo `schema.ts` al directorio del bloque o sub-bloque. En este archivo, describe un validador de parámetros para el componente en formato [`json-schema`](http://json-schema.org/).
   - Expórtalo en el archivo `schema/validators/blocks.ts` o `schema/validators/sub-blocks.ts`.
   - Añádelo a `enum` o `selectCases` en el archivo `schema/index.ts`.

6. En el directorio del bloque, añade el archivo `README.md` con una descripción de los parámetros de entrada.
7. En el directorio del bloque, añade una demostración de storybook en la carpeta `__stories__`. Todo el contenido de demostración para la historia debe colocarse en `data.json` en el directorio de la historia. El `Story` genérico debe aceptar el tipo de props del bloque, de lo contrario, se mostrarán props de bloque incorrectos en Storybook.
8. Añade la plantilla de datos del bloque a la carpeta `src/editor/data/templates/`, el nombre del archivo debe coincidir con el tipo de bloque.
9. (opcional) Añade el icono de vista previa del bloque a la carpeta `src/editor/data/previews/`, el nombre del archivo debe coincidir con el tipo de bloque.

### Temas

El `PageConstructor` te permite usar temas: puedes establecer diferentes valores para propiedades individuales del bloque dependiendo del tema seleccionado en la aplicación.

Para añadir un tema a una propiedad de bloque:

1. En el archivo `models/blocks.ts`, define el tipo de la propiedad respectiva del bloque usando el genérico `ThemeSupporting<T>`, donde `T` es el tipo de la propiedad.

2. En el archivo con el componente `react` del bloque, obtén el valor de la propiedad con el tema a través de `getThemedValue` y el hook `useTheme` (ver ejemplos en el bloque `MediaBlock.tsx`).

3. Añade soporte de tema al validador de propiedades: en el archivo `schema.ts` del bloque, envuelve esta propiedad en `withTheme`.

### i18n

El `page-constructor` es una biblioteca basada en `uikit`, y usamos una instancia de `i18n` de uikit. Para configurar la internacionalización, solo necesitas usar el `configure` de uikit:

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### Mapas

Para usar mapas, coloca el tipo de mapa, scriptSrc y apiKey en el campo `mapContext` en `PageConstructorProvider`.

Puedes definir variables de entorno para el modo de desarrollo en el archivo .env.development dentro de la raíz del proyecto.
`STORYBOOK_GMAP_API_KEY` - apiKey para google maps

### Analítica

#### Inicialización

Para comenzar a usar cualquier analítica, pasa un manejador al constructor. El manejador debe crearse en el lado del proyecto. El manejador recibirá los objetos de evento `default` y `custom`. El manejador pasado se activará en clics de botones, enlaces, navegación y controles. Como se usa un manejador para todos los tratamientos de eventos, presta atención a cómo tratar diferentes eventos al crear el manejador. Hay campos predefinidos que sirven para ayudarte a construir una lógica compleja.

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

Un objeto de evento solo tiene un campo obligatorio: `name`. También tiene campos predefinidos, que sirven para ayudar a gestionar una lógica compleja. Por ejemplo, `counter.include` puede ayudar a enviar un evento en un contador particular si se utilizan varios sistemas de analítica en un proyecto.

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

Es posible configurar un evento para enviar a qué sistema de analítica.

```ts
type AnalyticsCounters = {
  include?: string[]; // array de ids de contadores de analítica que se aplicarán
  exclude?: string[]; // array de ids de contadores de analítica que no se aplicarán
};
```

#### Parámetro de contexto

Pasa el valor `context` para definir el lugar en un proyecto donde se activa un evento.

Usa el selector a continuación o crea una lógica que satisfaga las necesidades del proyecto.

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### Tipos de eventos reservados

Se utilizan varios tipos de eventos predefinidos para marcar eventos configurados automáticamente. Usa los tipos para filtrar eventos predeterminados, por ejemplo.

```ts
enum PredefinedEventTypes {
  Default = 'default-event', // eventos predeterminados que se activan en cada clic de botón
  Play = 'play', // Evento de React player
  Stop = 'stop', // Evento de React player
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

Para Vite, necesitas instalar el plugin `vite-plugin-dynamic-import` y configurar el config para que funcionen las importaciones dinámicas.

## Flujo de lanzamiento

En casos habituales, utilizamos dos tipos de commits:

1. fix: un commit del tipo fix corrige un error en tu código base (esto se correlaciona con PATCH en Semantic Versioning).
2. feat: un commit del tipo feat introduce una nueva característica en la base de código (esto se correlaciona con MINOR en Semantic Versioning).
3. BREAKING CHANGE: un commit que tiene un pie de página BREAKING CHANGE:, o añade un ! después del tipo/alcance, introduce un cambio de API disruptivo (correlacionado con MAJOR en Semantic Versioning). Un BREAKING CHANGE puede ser parte de commits de cualquier tipo.
4. Para establecer manualmente la versión del paquete de lanzamiento, debes añadir `Release-As: <version>` a tu mensaje de commit, por ejemplo:

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

Puedes ver toda la información [aquí](https://www.conventionalcommits.org/en/v1.0.0/).

Cuando recibas la aprobación de tu pull-request de los propietarios del código y pases todas las verificaciones, por favor haz lo siguiente:

1. Debes verificar si hay un pull-request de lanzamiento del robot con cambios de otro colaborador (se ve como `chore(main): release 0.0.0`). Si existe, debes verificar por qué no está fusionado. Si el colaborador está de acuerdo en lanzar una versión compartida, sigue el siguiente paso. Si no, pídele que lance su versión, luego sigue el siguiente paso.
2. Squash y fusiona tu PR (Es importante lanzar una nueva versión con Github-Actions)
3. Espera hasta que el robot cree un PR con una nueva versión del paquete e información sobre tus cambios en CHANGELOG.md. Puedes ver el proceso en [la pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).
4. Verifica tus cambios en CHANGELOG.md y aprueba el PR del robot.
5. Squash y fusiona el PR. Puedes ver el proceso de lanzamiento en [la pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).

### Lanzamiento de versiones alfa

Si quieres lanzar una versión alfa del paquete desde tu rama, puedes hacerlo manualmente:

1. Ve a la pestaña Actions
2. Selecciona el flujo de trabajo "Release alpha version" en el lado izquierdo de la página
3. Puedes ver en el lado derecho el botón "Run workflow". Aquí puedes elegir la rama.
4. También puedes ver el campo con la versión manual. Si lanzas alfa en tu rama por primera vez, no configures nada aquí. Después del primer lanzamiento, tienes que establecer la nueva versión manualmente porque no cambiamos package.json en caso de que la rama pueda expirar muy pronto. Usa el prefijo `alpha` en tu versión manual, de lo contrario obtendrás un error.
5. Presiona "Run workflow" y espera hasta que la acción termine. Puedes lanzar tantas versiones como quieras, pero no abuses de ello y lanza versiones si realmente las necesitas. En otros casos, usa [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack).

### Lanzamiento de versiones beta-major

Si quieres lanzar una nueva versión major, probablemente necesitarás versiones beta antes de una estable, por favor haz lo siguiente:

1. Crea o actualiza la rama `beta`.
2. Añade allí tus cambios.
3. Cuando estés listo para una nueva versión beta, lánzala manualmente con un commit vacío (o puedes añadir este mensaje de commit con pie de página al último commit):

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4. El robot de release please creará un nuevo PR a la rama `beta` con CHANGELOG.md actualizado y aumentará la versión del paquete
5. Puedes repetirlo tantas veces como quieras. Cuando estés listo para lanzar la última versión major sin la etiqueta beta, tienes que crear un PR desde la rama `beta` a la rama `main`. Ten en cuenta que es normal que la versión de tu paquete tenga la etiqueta beta. El robot lo sabe y lo cambia adecuadamente. `3.0.0-beta.0` se convertirá en `3.0.0`

### Flujo de lanzamiento para versiones major anteriores

Si quieres lanzar una nueva versión en major anterior después de hacer commit a main, por favor haz lo siguiente:

1. Actualiza la rama necesaria, los nombres de las ramas de lanzamiento major anteriores son:
   1. `version-1.x.x/fixes` - para major 1.x.x
   2. `version-2.x.x` - para major 2.x.x
2. Haz checkout a una nueva rama desde la rama de lanzamiento major anterior
3. Cherry-pick tu commit desde la rama `main`
4. Crea PR, obtén una aprobación y fusiona en la rama de lanzamiento major anterior
5. Squash y fusiona tu PR (Es importante lanzar una nueva versión con Github-Actions)
6. Espera hasta que el robot cree un PR con una nueva versión del paquete e información sobre tus cambios en CHANGELOG.md. Puedes ver el proceso en [la pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).
7. Verifica tus cambios en CHANGELOG.md y aprueba el PR del robot.
8. Squash y fusiona el PR. Puedes ver el proceso de lanzamiento en [la pestaña Actions](https://github.com/gravity-ui/page-constructor/actions).

## Editor del constructor de páginas

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

## Pruebas

La documentación completa está disponible en el [enlace](./test-utils/docs/README.md) proporcionado.
