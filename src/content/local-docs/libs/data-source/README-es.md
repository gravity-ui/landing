# Data Source &middot; [![npm version](https://img.shields.io/npm/v/@gravity-ui/data-source?logo=npm&label=version)](https://www.npmjs.com/package/@gravity-ui/data-source) [![ci](https://img.shields.io/github/actions/workflow/status/gravity-ui/data-source/ci.yml?branch=main&label=ci&logo=github)](https://github.com/gravity-ui/data-source/actions/workflows/ci.yml?query=branch:main)

**Data Source** es un envoltorio sencillo para la obtención de datos. Es una especie de "puerto" en la [arquitectura limpia](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). Permite crear envoltorios para elementos relacionados con la obtención de datos, según tus casos de uso. **Data Source** utiliza [react-query](https://tanstack.com/query/latest) internamente.

## Instalación

```bash
npm install @gravity-ui/data-source @tanstack/react-query
```

`@tanstack/react-query` es una dependencia peer.

## Inicio Rápido

### 1. Configurar DataManager

Primero, crea y proporciona un `DataManager` en tu aplicación:

```tsx
import React from 'react';
import {ClientDataManager, DataManagerContext} from '@gravity-ui/data-source';

const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      retry: 3,
    },
    // ... otras opciones de react-query
  },
});

function App() {
  return (
    <DataManagerContext.Provider value={dataManager}>
      <YourApplication />
    </DataManagerContext.Provider>
  );
}
```

### 2. Definir Tipos de Error y Envoltorios

Define un tipo de error y crea tus constructores para las fuentes de datos basándote en los constructores predeterminados:

```ts
import {makePlainQueryDataSource as makePlainQueryDataSourceBase} from '@gravity-ui/data-source';

export interface ApiError {
  code: number;
  title: string;
  description?: string;
}

export const makePlainQueryDataSource = <TParams, TRequest, TResponse, TData, TError = ApiError>(
  config: Omit<PlainQueryDataSource<TParams, TRequest, TResponse, TData, TError>, 'type'>,
): PlainQueryDataSource<TParams, TRequest, TResponse, TData, TError> => {
  return makePlainQueryDataSourceBase(config);
};
```

### 3. Crear Componente DataLoader Personalizado

Escribe un componente `DataLoader` basado en el predeterminado para definir tu visualización del estado de carga y los errores:

```tsx
import {
  DataLoader as DataLoaderBase,
  DataLoaderProps as DataLoaderPropsBase,
  ErrorViewProps,
} from '@gravity-ui/data-source';

export interface DataLoaderProps
  extends Omit<DataLoaderPropsBase<ApiError>, 'LoadingView' | 'ErrorView'> {
  LoadingView?: ComponentType;
  ErrorView?: ComponentType<ErrorViewProps<ApiError>>;
}

export const DataLoader: React.FC<DataLoaderProps> = ({
  LoadingView = YourLoader, // Puedes usar tu propio componente de carga
  ErrorView = YourError, // Puedes usar tu propio componente de error
  ...restProps
}) => {
  return <DataLoaderBase LoadingView={LoadingView} ErrorView={ErrorView} {...restProps} />;
};
```

### 4. Definir Tu Primera Fuente de Datos

```ts
import {skipContext} from '@gravity-ui/data-source';

// Tu función de API
import {fetchUser} from './api';

export const userDataSource = makePlainQueryDataSource({
  // Las claves deben ser únicas. Quizás deberías crear un helper para generar nombres de fuentes de datos
  name: 'user',
  // skipContext es un helper para omitir los 2 primeros parámetros de la función (context y fetchContext)
  fetch: skipContext(fetchUser),
  // Opcional: generar etiquetas para invalidación avanzada de caché
  tags: (params) => [`user:${params.userId}`, 'users'],
});
```

### 5. Usar en Componentes

```tsx
import {useQueryData} from '@gravity-ui/data-source';

export const UserProfile: React.FC<{userId: number}> = ({userId}) => {
  const {data, status, error, refetch} = useQueryData(userDataSource, {userId});

  return (
    <DataLoader status={status} error={error} errorAction={refetch}>
      {data && <UserCard user={data} />}
    </DataLoader>
  );
};
```

## Conceptos Clave

### Tipos de Fuentes de Datos

La biblioteca proporciona dos tipos principales de fuentes de datos:

#### Fuente de Datos de Consulta Simple (Plain Query Data Source)

Para patrones simples de solicitud/respuesta:

```ts
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(async (params: {userId: number}) => {
    const response = await fetch(`/api/users/${params.userId}`);
    return response.json();
  }),
});
```

#### Fuente de Datos de Consulta Infinita (Infinite Query Data Source)

Para paginación y desplazamiento infinito:

```ts
const postsDataSource = makeInfiniteQueryDataSource({
  name: 'posts',
  fetch: skipContext(async (params: {page: number; limit: number}) => {
    const response = await fetch(`/api/posts?page=${params.page}&limit=${params.limit}`);
    return response.json();
  }),
  next: (lastPage, allPages) => {
    if (lastPage.hasNext) {
      return {page: allPages.length + 1, limit: 20};
    }
    return undefined;
  },
});
```

### Gestión de Estados

La biblioteca normaliza los estados de las consultas en tres estados simples:

- `loading` - Carga de datos real. Lo mismo que `isLoading` en React Query.
- `success` - Datos disponibles (puede omitirse usando `idle`).
- `error` - Falló la obtención de datos.

### Concepto de `idle`

La biblioteca proporciona un símbolo especial `idle` para omitir la ejecución de la consulta:

```ts
import {idle} from '@gravity-ui/data-source';

const UserProfile: React.FC<{userId?: number}> = ({userId}) => {
  // La consulta no se ejecutará si userId no está definido
  const {data, status} = useQueryData(userDataSource, userId ? {userId} : idle);

  return (
    <DataLoader status={status} error={null}>
      {data && <UserCard user={data} />}
    </DataLoader>
  );
};
```

Cuando los parámetros son iguales a `idle`:

- La consulta no se ejecuta.
- El estado permanece `success`.
- Los datos permanecen `undefined`.
- El componente puede renderizarse de forma segura sin mostrar carga.

**Beneficios de `idle`:**

1. **Seguridad de Tipos** - TypeScript infiere correctamente los tipos para parámetros condicionales.
2. **Rendimiento** - Evita solicitudes innecesarias al servidor.
3. **Simplicidad Lógica** - No es necesario gestionar un estado `enabled` adicional.
4. **Consistencia** - Enfoque unificado para todas las consultas condicionales.

Esto es especialmente útil para consultas condicionales cuando deseas cargar datos solo bajo ciertas condiciones, manteniendo al mismo tiempo la seguridad de tipos.

## Referencia de la API

### Creación de Fuentes de Datos

#### `makePlainQueryDataSource(config)`

Crea una fuente de datos de consulta simple para patrones de solicitud/respuesta.

```ts
const dataSource = makePlainQueryDataSource({
  name: 'unique-name',
  fetch: skipContext(fetchFunction),
  transformParams: (params) => transformedRequest,
  transformResponse: (response) => transformedData,
  tags: (params) => ['tag1', 'tag2'],
  options: {
    staleTime: 60000,
    retry: 3,
    // ... otras opciones de react-query
  },
});
```

**Parámetros:**

- `name` - Identificador único para el origen de datos
- `fetch` - Función que realiza la obtención real de datos
- `transformParams` (opcional) - Transforma los parámetros de entrada antes de la solicitud
- `transformResponse` (opcional) - Transforma los datos de respuesta
- `tags` (opcional) - Genera etiquetas de caché para invalidación
- `options` (opcional) - Opciones de React Query

#### `makeInfiniteQueryDataSource(config)`

Crea un origen de datos de consulta infinita para patrones de paginación y desplazamiento infinito.

```ts
const infiniteDataSource = makeInfiniteQueryDataSource({
  name: 'infinite-data',
  fetch: skipContext(fetchFunction),
  next: (lastPage, allPages) => nextPageParam || undefined,
  prev: (firstPage, allPages) => prevPageParam || undefined,
  // ... otras opciones iguales que las de consulta simple
});
```

**Parámetros Adicionales:**

- `next` - Función para determinar los parámetros de la siguiente página
- `prev` (opcional) - Función para determinar los parámetros de la página anterior

### Hooks de React

#### `useQueryData(dataSource, params, options?)`

Hook principal para obtener datos con un origen de datos.

```ts
const {data, status, error, refetch, ...rest} = useQueryData(
  userDataSource,
  {userId: 123},
  {
    enabled: true,
    refetchInterval: 30000,
  },
);
```

**Devuelve:**

- `data` - Los datos obtenidos
- `status` - Estado actual ('loading' | 'success' | 'error')
- `error` - Objeto de error si la solicitud falló
- `refetch` - Función para volver a obtener datos manualmente
- Otras propiedades de React Query

#### `useQueryResponses(responses)`

Combina múltiples respuestas de consulta en un único estado.

```ts
const user = useQueryData(userDataSource, {userId});
const posts = useQueryData(postsDataSource, {userId});

const {status, error, refetch, refetchErrored} = useQueryResponses([user, posts]);
```

**Devuelve:**

- `status` - Estado combinado de todas las consultas
- `error` - Primer error encontrado
- `refetch` - Función para volver a obtener todas las consultas
- `refetchErrored` - Función para volver a obtener solo las consultas fallidas

#### `useRefetchAll(states)`

Crea una función de callback para volver a obtener múltiples consultas.

```ts
const refetchAll = useRefetchAll([user, posts, comments]);
// refetchAll() activará la reobtención de todos los datos de las consultas
```

#### `useRefetchErrored(states)`

Crea una función de callback para volver a obtener solo las consultas fallidas.

```ts
const refetchErrored = useRefetchErrored([user, posts, comments]);
// refetchErrored() solo volverá a obtener los datos de las consultas con errores
```

#### `useDataManager()`

Devuelve el `DataManager` del contexto.

```ts
const dataManager = useDataManager();
await dataManager.invalidateTag('users');
```

#### `useQueryContext()`

Devuelve el contexto de la consulta (para construir hooks de datos personalizados basados en react-query).

### Componentes de React

#### `<DataLoader />`

Componente para manejar estados de carga y errores.

```tsx
<DataLoader
  status={status}
  error={error}
  errorAction={refetch}
  LoadingView={SpinnerComponent}
  ErrorView={ErrorComponent}
  loadingViewProps={{size: 'large'}}
  errorViewProps={{showDetails: true}}
>
  {data && <YourContent data={data} />}
</DataLoader>
```

**Props:**

- `status` - Estado de carga actual
- `error` - Objeto de error
- `errorAction` - Función o configuración de acción para reintentar en caso de error
- `LoadingView` - Componente a mostrar durante la carga
- `ErrorView` - Componente a mostrar en caso de error
- `loadingViewProps` - Props pasadas a `LoadingView`
- `errorViewProps` - Props pasadas a `ErrorView`

#### `<DataInfiniteLoader />`

Componente especializado para consultas infinitas.

```tsx
<DataInfiniteLoader
  status={status}
  error={error}
  hasNextPage={hasNextPage}
  fetchNextPage={fetchNextPage}
  isFetchingNextPage={isFetchingNextPage}
  LoadingView={SpinnerComponent}
  ErrorView={ErrorComponent}
  MoreView={LoadMoreButton}
>
  {data.map((item) => (
    <Item key={item.id} data={item} />
  ))}
</DataInfiniteLoader>
```

**Props Adicionales:**

- `hasNextPage` - Indica si hay más páginas disponibles
- `fetchNextPage` - Función para obtener la siguiente página
- `isFetchingNextPage` - Indica si se está obteniendo la siguiente página
- `MoreView` - Componente para el botón "cargar más"

#### `withDataManager(Component)`

HOC que inyecta `DataManager` como una prop.

```tsx
const MyComponent = withDataManager<Props>(({dataManager, ...props}) => {
  // El componente tiene acceso a dataManager
  return <div>...</div>;
});
```

### Gestión de Datos

#### `ClientDataManager`

Clase principal para la gestión de datos.

```ts
const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 300000, // 5 minutos
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});
```

**Métodos:**

##### `invalidateTag(tag, options?)`

Invalida todas las consultas con una etiqueta específica.

```ts
await dataManager.invalidateTag('users');
await dataManager.invalidateTag('posts', {
  repeat: {count: 3, interval: 1000}, // Reintentar invalidación
});
```

##### `invalidateTags(tags, options?)`

Invalida las consultas que tienen todas las etiquetas especificadas.

```ts
await dataManager.invalidateTags(['user', 'profile']);
```

##### `invalidateSource(dataSource, options?)`

Invalida todas las consultas para un origen de datos.

```ts
await dataManager.invalidateSource(userDataSource);
```

##### `invalidateParams(dataSource, params, options?)`

Invalida una consulta específica con parámetros exactos.

```ts
await dataManager.invalidateParams(userDataSource, {userId: 123});
```

##### `resetSource(dataSource)`

Restablece (borra) todos los datos cacheados para un origen de datos.

```ts
await dataManager.resetSource(userDataSource);
```

##### `resetParams(dataSource, params)`

Restablece los datos cacheados para parámetros específicos.

```ts
await dataManager.resetParams(userDataSource, {userId: 123});
```

##### `invalidateSourceTags(dataSource, params, options?)`

Invalida consultas basándose en las etiquetas generadas por un origen de datos.

```ts
await dataManager.invalidateSourceTags(userDataSource, {userId: 123});
```

### Utilidades

#### `skipContext(fetchFunction)`

Utilidad para adaptar funciones `fetch` existentes a la interfaz de origen de datos.

```ts
// Función existente
async function fetchUser(params: {userId: number}) {
  // ...
}

// Adaptada para el origen de datos
const dataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(fetchUser), // Omite el contexto y los parámetros de fetchContext
});
```

#### `withCatch(fetchFunction, errorHandler)`

Añade manejo de errores estandarizado a las funciones fetch.

```ts
const safeFetch = withCatch(fetchUser, (error) => ({error: true, message: error.message}));
```

#### `withCancellation(fetchFunction)`

Añade soporte de cancelación a las funciones fetch.

```ts
const cancellableFetch = withCancellation(fetchFunction);
// Maneja automáticamente AbortSignal de React Query
```

#### `getProgressiveRefetch(options)`

Crea una función de intervalo de refetch progresivo.

```ts
const progressiveRefetch = getProgressiveRefetch({
  minInterval: 1000, // Empieza con 1 segundo
  maxInterval: 30000, // Máximo 30 segundos
  multiplier: 2, // Duplica cada vez
});

const dataSource = makePlainQueryDataSource({
  name: 'data',
  fetch: skipContext(fetchData),
  options: {
    refetchInterval: progressiveRefetch,
  },
});
```

#### `normalizeStatus(status, fetchStatus)`

Convierte los estados de React Query a estados de DataLoader.

```ts
const status = normalizeStatus('pending', 'fetching'); // 'loading'
```

#### Utilidades de Estado y Error

```ts
// Obtiene el estado combinado de múltiples estados
const status = getStatus([user, posts, comments]);

// Obtiene el primer error de múltiples estados
const error = getError([user, posts, comments]);

// Fusiona múltiples estados
const combinedStatus = mergeStatuses(['loading', 'success', 'error']); // 'error'

// Comprueba si una clave de consulta tiene una etiqueta
const hasUserTag = hasTag(queryKey, 'users');
```

#### Utilidades de Composición de Claves

```ts
// Compone la clave de caché para una fuente de datos
const key = composeKey(userDataSource, {userId: 123});

// Compone la clave completa incluyendo etiquetas
const fullKey = composeFullKey(userDataSource, {userId: 123});
```

#### Constantes

```ts
import {idle} from '@gravity-ui/data-source';

// Símbolo especial para omitir la ejecución de la consulta
const params = shouldFetch ? {userId: 123} : idle;

// Alternativa segura para tipos a enabled: false
// En lugar de:
const {data} = useQueryData(userDataSource, {userId: userId || ''}, {enabled: Boolean(userId)});

// Usa:
const {data} = useQueryData(userDataSource, userId ? {userId} : idle);
// TypeScript infiere correctamente los tipos para ambas ramas
```

#### Composición de Opciones de Consulta

```ts
// Compone las opciones de React Query para consultas simples
const plainOptions = composePlainQueryOptions(context, dataSource, params, options);

// Compone las opciones de React Query para consultas infinitas
const infiniteOptions = composeInfiniteQueryOptions(context, dataSource, params, options);
```

**Nota:** Estas funciones se utilizan principalmente internamente al crear implementaciones de fuentes de datos personalizadas.

## Patrones Avanzados

### Consultas Condicionales con `idle`

Usa `idle` para crear consultas condicionales:

```ts
import {idle} from '@gravity-ui/data-source';

const ConditionalDataComponent: React.FC<{
  userId?: number;
  shouldLoadPosts: boolean;
}> = ({userId, shouldLoadPosts}) => {
  // Carga el usuario solo si userId está definido
  const user = useQueryData(
    userDataSource,
    userId ? {userId} : idle
  );

  // Carga las publicaciones solo si el usuario está cargado y la bandera está habilitada
  const posts = useQueryData(
    userPostsDataSource,
    user.data && shouldLoadPosts ? {userId: user.data.id} : idle
  );

  const combined = useQueryResponses([user, posts]);

  return (
    <DataLoader status={combined.status} error={combined.error}>
      <div>
        {user.data && <UserInfo user={user.data} />}
        {posts.data && <UserPosts posts={posts.data} />}
      </div>
    </DataLoader>
  );
};
```

### Transformación de Datos

Transforma parámetros de solicitud y datos de respuesta:

```ts
const apiDataSource = makePlainQueryDataSource({
  name: 'api-data',
  transformParams: (params: {id: number}) => ({
    userId: params.id,
    apiVersion: 'v2',
    format: 'json',
  }),
  transformResponse: (response: ApiResponse) => ({
    user: response.data.user,
    metadata: response.meta,
  }),
  fetch: skipContext(apiFetch),
});
```

### Invalidez de Caché Basada en Etiquetas

Usa etiquetas para una gestión de caché sofisticada:

```ts
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  tags: (params) => [`user:${params.userId}`, 'users', 'profiles'],
  fetch: skipContext(fetchUser),
});

const userPostsDataSource = makePlainQueryDataSource({
  name: 'user-posts',
  tags: (params) => [`user:${params.userId}`, 'posts'],
  fetch: skipContext(fetchUserPosts),
});

// Invalida todos los datos de un usuario específico
await dataManager.invalidateTag('user:123');

// Invalida todos los datos relacionados con el usuario
await dataManager.invalidateTag('users');
```

### Manejo de Errores con Tipos

Crea un manejo de errores seguro para tipos:

```ts
interface ApiError {
  code: number;
  message: string;
  details?: Record<string, unknown>;
}

const ErrorView: React.FC<ErrorViewProps<ApiError>> = ({error, action}) => (
  <div className="error">
    <h3>Error {error?.code}</h3>
    <p>{error?.message}</p>
    {action && (
      <button onClick={action.handler}>
        {action.children || 'Reintentar'}
      </button>
    )}
  </div>
);
```

### Consultas Infinitas con Paginación Compleja

Maneja escenarios de paginación complejos:

```ts
interface PaginationParams {
  cursor?: string;
  limit?: number;
  filters?: Record<string, unknown>;
}

interface PaginatedResponse<T> {
  data: T[];
  nextCursor?: string;
  hasMore: boolean;
}

const infiniteDataSource = makeInfiniteQueryDataSource({
  name: 'paginated-data',
  fetch: skipContext(async (params: PaginationParams) => {
    const response = await fetch(`/api/data?${new URLSearchParams(params)}`);
    return response.json() as PaginatedResponse<DataItem>;
  }),
  next: (lastPage) => {
    if (lastPage.hasMore && lastPage.nextCursor) {
      return {cursor: lastPage.nextCursor, limit: 20};
    }
    return undefined;
  },
});
```

### Combinación de Múltiples Fuentes de Datos

Combina datos de múltiples fuentes:

```ts
const UserProfile: React.FC<{userId: number}> = ({userId}) => {
  const user = useQueryData(userDataSource, {userId});
  const posts = useQueryData(userPostsDataSource, {userId});
  const followers = useQueryData(userFollowersDataSource, {userId});

  const combined = useQueryResponses([user, posts, followers]);
```

```jsx
// Los tipos se infieren automáticamente
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(async (params: {userId: number}): Promise<User> => {
    // El tipo de retorno se infiere como User
  }),
});

// El tipo de retorno del hook se tipifica automáticamente
const {data} = useQueryData(userDataSource, {userId: 123});
// data se tipifica como User | undefined
```

### Tipos de error personalizados

Define y utiliza tipos de error personalizados:

```ts
interface ValidationError {
  field: string;
  message: string;
}

interface ApiError {
  type: 'network' | 'validation' | 'server';
  message: string;
  validation?: ValidationError[];
}

const typedDataSource = makePlainQueryDataSource<
  {id: number}, // Tipo de parámetros
  {id: number}, // Tipo de solicitud
  ApiResponse, // Tipo de respuesta
  User, // Tipo de datos
  ApiError // Tipo de error
>({
  name: 'typed-user',
  fetch: skipContext(fetchUser),
});
```

## Contribución

Por favor, lee [CONTRIBUTING.md](CONTRIBUTING.md) para obtener detalles sobre nuestro código de conducta y el proceso para enviar solicitudes de extracción (pull requests).

## Licencia

Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
```