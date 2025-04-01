# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Constructor de páginas

`Page-constructor` es una biblioteca para representar páginas web o sus partes en función de `JSON` datos (la compatibilidad con el `YAML` formato se agregará más adelante).

Al crear páginas, se utiliza un enfoque basado en componentes: una página se crea utilizando un conjunto de bloques listos para usar que se pueden colocar en cualquier orden. Cada bloque tiene un determinado tipo y conjunto de parámetros de datos de entrada.

Para ver el formato de los datos de entrada y la lista de bloques disponibles, consulte la [documentación](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs).

## Instalar

```shell
npm install @gravity-ui/page-constructor
```

## Dependencias necesarias

Tenga en cuenta que para empezar a usar el paquete, su proyecto también debe tener instalado lo siguiente: `@diplodoc/transform`, `@gravity-ui/uikit`, `react`. Consulte la `peerDependencies` sección de `package.json` para obtener información precisa.

### Cómo empezar

El constructor de la página se importa como un componente de React. Para asegurarte de que funciona correctamente, envuélvelo en `PageConstructorProvider`:

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
  content: PageContent; // Blocks data in JSON format.
  shouldRenderBlock?: ShouldRenderBlock; // A function that is invoked when rendering each block and  lets you set conditions for its display.
  custom?: Custom; // Custom blocks (see `Customization`).
  renderMenu?: () => React.ReactNode; // A function that renders the page menu with navigation (we plan to add rendering for the default menu version).
  navigation?: NavigationData; // Navigation data for using navigation component in JSON format
  isBranded?: boolean; // If true, adds a footer that links to https://gravity-ui.com/. Try BrandFooter component for more customization.
}

interface PageConstructorProviderProps {
  isMobile?: boolean; //A flag indicating that the code is executed in mobile mode.
  locale?: LocaleContextProps; //Info about the language and domain (used when generating and formatting links).
  location?: Location; //API of the browser or router history, the page URL.
  analytics?: AnalyticsContextProps; // function to handle analytics event

  ssrConfig?: SSR; //A flag indicating that the code is run on the server size.
  theme?: 'light' | 'dark'; //Theme to render the page with.
  mapsContext?: MapsContextType; //Params for map: apikey, type, scriptSrc, nonce
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

El paquete proporciona un conjunto de utilidades de servidor para transformar el contenido.

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

Bajo el capó, se usa un paquete para transformar Yandex Flavored Markdown en HTML `diplodoc/transfrom`, por lo que también está en dependencias entre pares

También puede usar utilidades útiles en los lugares que necesite, por ejemplo, en sus componentes personalizados.

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

2. En tu código, crea un objeto con el tipo de bloque (cadena) como clave y un componente de bloque importado como valor.

3. Pase el objeto que creó al componente `custom.headers` o al `custom.blocks` `custom.subBlocks` parámetro del `PageConstructor` componente (`custom.headers` especifica los encabezados de bloque que se mostrarán por separado por encima del contenido general).

4. Ahora puede usar el bloque creado en los datos de entrada (el `content` parámetro) especificando su tipo y datos.

Para usar mixins y variables de estilo constructor al crear bloques personalizados, agrega import en tu archivo:

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

### Bloques cargables

A veces es necesario que un bloque se renderice en función de los datos que se van a cargar. En este caso, se utilizan bloques cargables.

Para agregar `loadable` bloques personalizados, pase a `PageConstructor` la `custom.loadable` propiedad con los nombres de las fuentes de datos (cadena) para el componente como clave y un objeto como valor.

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // data loading method
  component: React.ComponentType; //blog to pass loaded data
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

### Cuadrícula

El constructor de la página usa la `bootstrap` cuadrícula y su implementación en función de los componentes de React que puedes usar en tu propio proyecto (incluso por separado del constructor).

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

La navegación de páginas también se puede usar por separado del constructor:

```jsx
import {Navigation} from '@gravity-ui/page-constructor';

const Page: React.FC<PageProps> = ({data, logo}) => <Navigation data={data} logo={logo} />;
```

### Bloques

Cada bloque es un componente atómico de nivel superior. Están guardados en el `src/units/constructor/blocks` directorio.

### Subbloques

Los subbloques son componentes que se pueden usar en la `children` propiedad del bloque. En una configuración, se especifica una lista de componentes secundarios de los subbloques. Una vez renderizados, estos subbloques se pasan al bloque como `children`.

### Cómo añadir un nuevo bloque al `page-constructor`

1. En el `src/sub-blocks` directorio `src/blocks` o, cree una carpeta con el código de bloque o subbloque.

2. Agregue el nombre del bloque o subbloque a enum `BlockType` o`SubBlockType` y describa sus propiedades en el `src/models/constructor-items/sub-blocks.ts` archivo `src/models/constructor-items/blocks.ts` o de forma similar a las existentes.

3. Agregue la exportación para el bloque del `src/blocks/index.ts` archivo y para el subbloque del `src/sub-blocks/index.ts` archivo.

4. Añada un nuevo componente o bloque al mapeo `src/constructor-items.ts`.

5. Agregue un validador para el nuevo bloque:

   - Añade un `schema.ts` archivo al directorio de bloques o subbloques. En este archivo, describa un validador de parámetros para el componente en [`json-schema`](http://json-schema.org/) formato.
   - Expórtelo al `schema/validators/sub-blocks.ts` archivo `schema/validators/blocks.ts` or.
   - Añádelo al `schema/index.ts` archivo `enum` o `selectCases` dentro de él.

6. En el directorio de bloques, añada el `README.md` archivo con una descripción de los parámetros de entrada.
7. En el directorio de bloques, agregue la demostración del libro de cuentos en la `__stories__` carpeta. Todo el contenido de demostración de la historia debe colocarse `data.json` en el directorio de historias. El genérico `Story` debe aceptar el tipo de accesorios de bloque; de lo contrario, los accesorios de bloque incorrectos se mostrarán en Storybook.
8. Agregue la plantilla de datos de bloque a `src/editor/data/templates/` la carpeta, el nombre del archivo debe coincidir con el tipo de bloque
9. (opcional) Agregue el icono de vista previa del bloque a la `src/editor/data/previews/` carpeta, el nombre del archivo debe coincidir con el tipo de bloque

### Temas

Te `PageConstructor` permite usar temas: puedes establecer diferentes valores para las propiedades de los bloques individuales en función del tema seleccionado en la aplicación.

Para añadir un tema a una propiedad de bloque:

1. En el `models/blocks.ts` archivo, defina el tipo de la propiedad de bloque respectiva utilizando `ThemeSupporting<T>` generic, where `T` es el tipo de propiedad.

2. En el archivo con el `react` componente del bloque, obtenga el valor de la propiedad con el tema via `getThemedValue` y `useTheme` hook (consulte los ejemplos del `MediaBlock.tsx` bloque).

3. Agregue soporte de temas al validador de propiedades: en el `schema.ts` archivo del bloque, incluya esta propiedad. `withTheme`

### i18n

`page-constructor` Es una `uikit-based` biblioteca y utilizamos una instancia de `i18n` from uikit. Para configurar la internacionalización, solo necesitas usar el comando `configure` from uikit:

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### Mapas

Para usar mapas, coloque el tipo de mapa, ScriptsRC y ApiKey en el campo in. `mapContext` `PageConstructorProvider`

Puede definir variables de entorno para el modo de desarrollo en el archivo.env.development dentro de la raíz del proyecto.
`STORYBOOK_GMAP_API_KEY`- ApiKey para Google Maps

### Analítica

#### Init

Para empezar a usar cualquier análisis, pasa un controlador al constructor. El controlador debe crearse en el lado del proyecto. El controlador recibirá los objetos del `custom` evento `default` y. El controlador aprobado se activará al hacer clic en un botón, un enlace, una navegación y un control. Como se usa un controlador para el tratamiento de todos los eventos, preste atención a cómo tratar los diferentes eventos al crear el controlador. Hay campos predefinidos que sirven para ayudarle a crear una lógica compleja.

Pase `autoEvents: true` al constructor para activar los eventos configurados automáticamente.

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

Un objeto de evento solo tiene un campo obligatorio: `name`. También tiene campos predefinidos, que ayudan a gestionar la lógica compleja. Por ejemplo, `counter.include` puede ayudar a enviar un evento en un contador determinado si se utilizan varios sistemas de análisis en un proyecto.

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
  [key: string]?: string; // only a 'string' type is supported
}>;
```

#### Selector de contador

Es posible configurar un evento al que enviar un sistema de análisis.

```ts
type AnalyticsCounters = {
  include?: string[]; // array of analytics counter ids that will be applied
  exclude?: string[]; // array of analytics counter ids that will not be applied
};
```

#### parámetro de contexto

Pase un `context` valor para definir el lugar de un proyecto en el que se desencadena un evento.

Usa el selector que aparece a continuación o crea una lógica que se adapte a las necesidades del proyecto.

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### Tipos de eventos reservados

Se utilizan varios tipos de eventos predefinidos para marcar los eventos configurados automáticamente. Utilice los tipos para filtrar los eventos predeterminados, por ejemplo.

```ts
enum PredefinedEventTypes {
  Default = 'default-event', // default events which fire on every button click
  Play = 'play', // React player event
  Stop = 'stop', // React player event
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

Para Vite, debe instalar el `vite-plugin-dynamic-import` complemento y configurar la configuración para que funcionen las importaciones dinámicas

## Flujo de liberación

En los casos habituales, utilizamos dos tipos de confirmaciones:

1. corrección: una confirmación del tipo fix corrige un error en tu base de código (esto se correlaciona con PATCH en el control de versiones semántico).
2. hazaña: una confirmación del tipo feat introduce una nueva función en el código base (esto se correlaciona con MINOR en el control de versiones semántico).
3. BREAKING CHANGE: una confirmación que tiene un pie de página BREAKING CHANGE:, o que agrega un! después del tipo/ámbito, introduce un cambio importante en la API (que se correlaciona con MAJOR en el control de versiones semántico). Un CAMBIO RADICAL puede formar parte de las confirmaciones de cualquier tipo.
4. Para configurar la versión del paquete de lanzamiento manualmente, debe agregar `Release-As: <version>` a su mensaje de confirmación, p. ej.

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

Puedes ver toda la información [aquí](https://www.conventionalcommits.org/en/v1.0.0/).

Cuando recibas la aprobación de tu solicitud de extracción por parte de los propietarios del código y pases todas las comprobaciones, haz lo siguiente:

1. Deberías comprobar si hay una solicitud de extracción de versión de un robot con cambios de otro colaborador (al parecer `chore(main): release 0.0.0`). Si existe, debe comprobar por qué no está fusionado. Si el colaborador acepta publicar una versión compartida, sigue el siguiente paso. Si no es así, pídele que publique su versión y, a continuación, sigue el siguiente paso.
2. Aplasta y fusiona tus relaciones públicas (es importante lanzar una nueva versión con Github-Actions)
3. Espere hasta que el robot cree un PR con una nueva versión del paquete e información sobre sus cambios en ChangeLog.md. Puedes ver el proceso en [la pestaña Acciones](https://github.com/gravity-ui/page-constructor/actions).
4. Comprueba tus cambios en ChangeLog.md y aprueba las relaciones públicas del robot.
5. Aplasta y fusiona PR. Puedes ver el proceso de lanzamiento en [la pestaña Acciones](https://github.com/gravity-ui/page-constructor/actions).

### Lanzamiento de las versiones Alpha

Si quieres lanzar la versión alfa del paquete desde tu sucursal, puedes hacerlo manualmente:

1. Ir a la pestaña Acciones
2. Seleccione el flujo de trabajo «Publicar versión alfa» en el lado de la página izquierda
3. Puede ver en el lado derecho el botón «Ejecutar flujo de trabajo». Aquí puede elegir la sucursal.
4. También puede ver el campo con la versión manual. Si publicas alpha en tu rama por primera vez, no configures nada aquí. Tras el primer lanzamiento, tienes que configurar la nueva versión manualmente porque no cambiamos package.json en caso de que la rama caduque muy pronto. Usa el prefijo `alpha` en tu versión manual; de lo contrario, obtendrás un error.
5. Pulse «Ejecutar flujo de trabajo» y espere hasta que finalice la acción. Puedes lanzar tantas versiones como quieras pero no abusar de ello y lanzar versiones si realmente lo necesitas. En otros casos, utilice [npm pack.](https://docs.npmjs.com/cli/v7/commands/npm-pack)

### Lanzamiento de las versiones beta principales

Si quieres lanzar una nueva versión principal, es probable que necesites una versión beta antes que una estable, haz lo siguiente:

1. Crea o actualiza la sucursal `beta`.
2. Añada allí sus cambios.
3. Cuando estés listo para una nueva versión beta, libérala manualmente con una confirmación vacía (o puedes añadir este mensaje de confirmación con el pie de página a la última confirmación):

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4. Release please, el robot creará un nuevo PR para la sucursal `beta` con la versión actualizada de ChangeLog.md y bump del paquete
5. Puedes repetirlo tantas veces como quieras. Cuando esté listo para lanzar la última versión principal sin etiqueta beta, debe crear un PR de una rama `beta` a otra `main`. Tenga en cuenta que es normal que la versión de su paquete tenga la etiqueta beta. El robot lo sabe y lo cambia correctamente. `3.0.0-beta.0` se convertirá `3.0.0`

### Flujo de lanzamiento para las versiones principales anteriores

Si quieres lanzar una nueva versión en la versión principal anterior después de confirmarla en la principal, haz lo siguiente:

1. Actualice la rama necesaria, los nombres de las ramas de las versiones principales anteriores son:
   1. `version-1.x.x/fixes`- para la versión 1.x.x principal
   2. `version-2.x.x`- para la versión 2.xx principal
2. Echa un vistazo a una nueva rama de la versión principal anterior
3. Elige tu compromiso de la sucursal `main`
4. Cree relaciones públicas, obtenga una aprobación y únase a la rama de lanzamiento principal anterior
5. Aplasta y fusiona tus relaciones públicas (es importante lanzar una nueva versión con Github-Actions)
6. Espere hasta que el robot cree un PR con una nueva versión del paquete e información sobre sus cambios en ChangeLog.md. Puedes ver el proceso en [la pestaña Acciones](https://github.com/gravity-ui/page-constructor/actions).
7. Comprueba tus cambios en ChangeLog.md y aprueba las relaciones públicas del robot.
8. Aplasta y fusiona PR. Puedes ver el proceso de lanzamiento en [la pestaña Acciones](https://github.com/gravity-ui/page-constructor/actions).

## Editor de constructores de páginas

El editor proporciona una interfaz de usuario para la administración del contenido de la página con vista previa en tiempo real.

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
