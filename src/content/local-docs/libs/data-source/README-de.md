# Data Source &middot; [![npm version](https://img.shields.io/npm/v/@gravity-ui/data-source?logo=npm&label=version)](https://www.npmjs.com/package/@gravity-ui/data-source) [![ci](https://img.shields.io/github/actions/workflow/status/gravity-ui/data-source/ci.yml?branch=main&label=ci&logo=github)](https://github.com/gravity-ui/data-source/actions/workflows/ci.yml?query=branch:main)

**Data Source** ist ein einfacher Wrapper für das Abrufen von Daten. Es ist eine Art "Port" in der [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). Es ermöglicht Ihnen, Wrapper für Dinge rund um das Abrufen von Daten zu erstellen, je nach Ihren Anwendungsfällen. **Data Source** verwendet intern [react-query](https://tanstack.com/query/latest).

## Installation

```bash
npm install @gravity-ui/data-source @tanstack/react-query
```

`@tanstack/react-query` ist eine Peer-Abhängigkeit.

## Schnellstart

### 1. DataManager einrichten

Erstellen und stellen Sie zuerst einen `DataManager` in Ihrer Anwendung bereit:

```tsx
import React from 'react';
import {ClientDataManager, DataManagerContext} from '@gravity-ui/data-source';

const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 Minuten
      retry: 3,
    },
    // ... weitere react-query-Optionen
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

### 2. Fehlertypen und Wrapper definieren

Definieren Sie einen Fehlertyp und erstellen Sie Ihre Konstruktoren für Datenquellen basierend auf den Standardkonstruktoren:

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

### 3. Benutzerdefinierten DataLoader-Komponenten erstellen

Schreiben Sie eine `DataLoader`-Komponente, die auf der Standardkomponente basiert, um Ihre Anzeige des Ladezustands und von Fehlern zu definieren:

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
  LoadingView = YourLoader, // Sie können Ihre eigene Loader-Komponente verwenden
  ErrorView = YourError, // Sie können Ihre eigene Fehlerkomponente verwenden
  ...restProps
}) => {
  return <DataLoaderBase LoadingView={LoadingView} ErrorView={ErrorView} {...restProps} />;
};
```

### 4. Ihre erste Datenquelle definieren

```ts
import {skipContext} from '@gravity-ui/data-source';

// Ihre API-Funktion
import {fetchUser} from './api';

export const userDataSource = makePlainQueryDataSource({
  // Schlüssel müssen eindeutig sein. Vielleicht sollten Sie einen Helfer für die Benennung von Datenquellen erstellen
  name: 'user',
  // skipContext ist ein Helfer, um die ersten 2 Parameter der Funktion zu überspringen (context und fetchContext)
  fetch: skipContext(fetchUser),
  // Optional: Tags für fortgeschrittene Cache-Invalidierung generieren
  tags: (params) => [`user:${params.userId}`, 'users'],
});
```

### 5. In Komponenten verwenden

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

## Kernkonzepte

### Datenquellentypen

Die Bibliothek bietet zwei Haupttypen von Datenquellen:

#### Plain Query Data Source

Für einfache Anfrage/Antwort-Muster:

```ts
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(async (params: {userId: number}) => {
    const response = await fetch(`/api/users/${params.userId}`);
    return response.json();
  }),
});
```

#### Infinite Query Data Source

Für Paginierung und unendliches Scrollen:

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

### Statusverwaltung

Die Bibliothek normalisiert Abfragestati in drei einfache Status:

- `loading` - Aktuelles Laden der Daten. Das Gleiche wie `isLoading` in React Query.
- `success` - Daten verfügbar (kann mit `idle` übersprungen werden).
- `error` - Fehler beim Abrufen der Daten.

### Idle-Konzept

Die Bibliothek stellt ein spezielles `idle`-Symbol bereit, um die Abfrageausführung zu überspringen:

```ts
import {idle} from '@gravity-ui/data-source';

const UserProfile: React.FC<{userId?: number}> = ({userId}) => {
  // Die Abfrage wird nicht ausgeführt, wenn userId nicht definiert ist
  const {data, status} = useQueryData(userDataSource, userId ? {userId} : idle);

  return (
    <DataLoader status={status} error={null}>
      {data && <UserCard user={data} />}
    </DataLoader>
  );
};
```

Wenn die Parameter gleich `idle` sind:

- Die Abfrage wird nicht ausgeführt.
- Der Status bleibt `success`.
- Die Daten bleiben `undefined`.
- Die Komponente kann sicher ohne Ladeanzeige gerendert werden.

**Vorteile von `idle`:**

1. **Typsicherheit** - TypeScript leitet Typen für bedingte Parameter korrekt ab.
2. **Performance** - Vermeidet unnötige Serveranfragen.
3. **Logische Einfachheit** - Keine Notwendigkeit, einen zusätzlichen `enabled`-Status zu verwalten.
4. **Konsistenz** - Einheitlicher Ansatz für alle bedingten Abfragen.

Dies ist besonders nützlich für bedingte Abfragen, wenn Sie Daten nur unter bestimmten Bedingungen laden möchten, während die Typsicherheit erhalten bleibt.

## API-Referenz

### Datenquellen erstellen

#### `makePlainQueryDataSource(config)`

Erstellt eine Plain Query Data Source für einfache Anfrage/Antwort-Muster.

```html
<ul>
  <li><a href="/en/README.md">English</a></li>
  <li><a href="/de/README.md">Deutsch</a></li>
</ul>
```

# @gravity/data-manager

Ein Framework, das die Datenverwaltung in React-Anwendungen vereinfacht. Es bietet eine einheitliche Schnittstelle für das Abrufen, Zwischenspeichern und Verwalten von Daten, die auf [React Query](https://react-query.tanstack.com/) basiert.

## Kernkonzepte

### Datenquellen

Datenquellen sind die Bausteine für die Datenverwaltung. Sie definieren, wie Daten abgerufen und transformiert werden.

#### `makePlainQueryDataSource(config)`

Erstellt eine Datenquelle für einfache Abfragemuster.

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
    // ... weitere react-query-Optionen
  },
});
```

**Parameter:**

- `name` - Eindeutiger Bezeichner für die Datenquelle
- `fetch` - Funktion, die den eigentlichen Datenabruf durchführt
- `transformParams` (optional) - Transformiert Eingabeparameter vor der Anfrage
- `transformResponse` (optional) - Transformiert Antwortdaten
- `tags` (optional) - Generiert Cache-Tags für die Invalidierung
- `options` (optional) - React Query-Optionen

#### `makeInfiniteQueryDataSource(config)`

Erstellt eine Datenquelle für unendliche Abfragen, die für Paginierungs- und unendliche Scrollmuster verwendet wird.

```ts
const infiniteDataSource = makeInfiniteQueryDataSource({
  name: 'infinite-data',
  fetch: skipContext(fetchFunction),
  next: (lastPage, allPages) => nextPageParam || undefined,
  prev: (firstPage, allPages) => prevPageParam || undefined,
  // ... weitere Optionen wie bei "plain"
});
```

**Zusätzliche Parameter:**

- `next` - Funktion zur Bestimmung der Parameter für die nächste Seite
- `prev` (optional) - Funktion zur Bestimmung der Parameter für die vorherige Seite

### React Hooks

#### `useQueryData(dataSource, params, options?)`

Der Haupt-Hook zum Abrufen von Daten mit einer Datenquelle.

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

**Gibt zurück:**

- `data` - Die abgerufenen Daten
- `status` - Aktueller Status ('loading' | 'success' | 'error')
- `error` - Fehlerobjekt, wenn die Anfrage fehlgeschlagen ist
- `refetch` - Funktion zum manuellen erneuten Abrufen von Daten
- Weitere React Query-Eigenschaften

#### `useQueryResponses(responses)`

Kombiniert mehrere Abfrageergebnisse in einen einzigen Zustand.

```ts
const user = useQueryData(userDataSource, {userId});
const posts = useQueryData(postsDataSource, {userId});

const {status, error, refetch, refetchErrored} = useQueryResponses([user, posts]);
```

**Gibt zurück:**

- `status` - Kombinierter Status aller Abfragen
- `error` - Erster aufgetretener Fehler
- `refetch` - Funktion zum erneuten Abrufen aller Abfragen
- `refetchErrored` - Funktion zum erneuten Abrufen nur fehlgeschlagener Abfragen

#### `useRefetchAll(states)`

Erstellt eine Callback-Funktion zum erneuten Abrufen mehrerer Abfragen.

```ts
const refetchAll = useRefetchAll([user, posts, comments]);
// refetchAll() löst das erneute Abrufen aller Abfragen aus
```

#### `useRefetchErrored(states)`

Erstellt eine Callback-Funktion zum erneuten Abrufen nur fehlgeschlagener Abfragen.

```ts
const refetchErrored = useRefetchErrored([user, posts, comments]);
// refetchErrored() ruft nur Abfragen mit Fehlern erneut ab
```

#### `useDataManager()`

Gibt den DataManager aus dem Kontext zurück.

```ts
const dataManager = useDataManager();
await dataManager.invalidateTag('users');
```

#### `useQueryContext()`

Gibt den Abfragekontext zurück (zum Erstellen benutzerdefinierter Daten-Hooks basierend auf react-query).

### React Komponenten

#### `<DataLoader />`

Komponente zur Handhabung von Ladezuständen und Fehlern.

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

- `status` - Aktueller Ladezustand
- `error` - Fehlerobjekt
- `errorAction` - Funktion oder Aktionskonfiguration für den Fehler-Retry
- `LoadingView` - Komponente, die während des Ladens angezeigt wird
- `ErrorView` - Komponente, die bei einem Fehler angezeigt wird
- `loadingViewProps` - An `LoadingView` übergebene Props
- `errorViewProps` - An `ErrorView` übergebene Props

#### `<DataInfiniteLoader />`

Spezialisierte Komponente für unendliche Abfragen.

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

**Zusätzliche Props:**

- `hasNextPage` - Gibt an, ob weitere Seiten verfügbar sind
- `fetchNextPage` - Funktion zum Abrufen der nächsten Seite
- `isFetchingNextPage` - Gibt an, ob die nächste Seite abgerufen wird
- `MoreView` - Komponente für den "Mehr laden"-Button

#### `withDataManager(Component)`

HOC, das den DataManager als Prop injiziert.

```tsx
const MyComponent = withDataManager<Props>(({dataManager, ...props}) => {
  // Die Komponente hat Zugriff auf dataManager
  return <div>...</div>;
});
```

### Datenverwaltung

#### `ClientDataManager`

Hauptklasse für die Datenverwaltung.

```ts
const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 300000, // 5 Minuten
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});
```

**Methoden:**

##### `invalidateTag(tag, options?)`

Invalidiert alle Abfragen mit einem bestimmten Tag.

```ts
await dataManager.invalidateTag('users');
await dataManager.invalidateTag('posts', {
  repeat: {count: 3, interval: 1000}, // Retry-Invalidierung
});
```

##### `invalidateTags(tags, options?)`

Invalidiert Abfragen, die alle angegebenen Tags haben.

```ts
await dataManager.invalidateTags(['user', 'profile']);
```

##### `invalidateSource(dataSource, options?)`

Invalidiert alle Abfragen für eine Datenquelle.

```ts
await dataManager.invalidateSource(userDataSource);
```

##### `invalidateParams(dataSource, params, options?)`

Invalidiert eine bestimmte Abfrage mit exakten Parametern.

```ts
await dataManager.invalidateParams(userDataSource, {userId: 123});
```

##### `resetSource(dataSource)`

Setzt (leert) alle zwischengespeicherten Daten für eine Datenquelle zurück.

```ts
await dataManager.resetSource(userDataSource);
```

##### `resetParams(dataSource, params)`

Setzt zwischengespeicherte Daten für spezifische Parameter zurück.

```ts
await dataManager.resetParams(userDataSource, {userId: 123});
```

##### `invalidateSourceTags(dataSource, params, options?)`

Invalidiert Abfragen basierend auf Tags, die von einer Datenquelle generiert wurden.

```ts
await dataManager.invalidateSourceTags(userDataSource, {userId: 123});
```

### Hilfsprogramme

#### `skipContext(fetchFunction)`

Hilfsprogramm zum Anpassen vorhandener Fetch-Funktionen an die Datenquellen-Schnittstelle.

```ts
// Bestehende Funktion
async function fetchUser(params: {userId: number}) {
  // ...
}

// Angepasst für Datenquelle
const dataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(fetchUser), // Überspringt Kontext- und fetchContext-Parameter
});
```

#### `withCatch(fetchFunction, errorHandler)`

Fügt standardisierte Fehlerbehandlung zu Fetch-Funktionen hinzu.

```ts
const safeFetch = withCatch(fetchUser, (error) => ({error: true, message: error.message}));
```

#### `withCancellation(fetchFunction)`

Fügt Abbruchunterstützung zu Fetch-Funktionen hinzu.

```ts
const cancellableFetch = withCancellation(fetchFunction);
// Behandelt AbortSignal von React Query automatisch
```

#### `getProgressiveRefetch(options)`

Erstellt eine Funktion für progressive Nachladeintervalle.

```ts
const progressiveRefetch = getProgressiveRefetch({
  minInterval: 1000, // Start mit 1 Sekunde
  maxInterval: 30000, // Maximal 30 Sekunden
  multiplier: 2, // Verdoppelt sich jedes Mal
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

Konvertiert React Query-Status in DataLoader-Status.

```ts
const status = normalizeStatus('pending', 'fetching'); // 'loading'
```

#### Status- und Fehler-Dienstprogramme

```ts
// Ermittelt den kombinierten Status aus mehreren Zuständen
const status = getStatus([user, posts, comments]);

// Ermittelt den ersten Fehler aus mehreren Zuständen
const error = getError([user, posts, comments]);

// Kombiniert mehrere Status
const combinedStatus = mergeStatuses(['loading', 'success', 'error']); // 'error'

// Prüft, ob ein Query-Schlüssel ein Tag hat
const hasUserTag = hasTag(queryKey, 'users');
```

#### Dienstprogramme zur Schlüsselkomposition

```ts
// Komponiert den Cache-Schlüssel für eine Datenquelle
const key = composeKey(userDataSource, {userId: 123});

// Komponiert den vollständigen Schlüssel einschließlich Tags
const fullKey = composeFullKey(userDataSource, {userId: 123});
```

#### Konstanten

```ts
import {idle} from '@gravity-ui/data-source';

// Spezielles Symbol zum Überspringen der Query-Ausführung
const params = shouldFetch ? {userId: 123} : idle;

// Typsichere Alternative zu enabled: false
// Anstatt:
const {data} = useQueryData(userDataSource, {userId: userId || ''}, {enabled: Boolean(userId)});

// Verwenden Sie:
const {data} = useQueryData(userDataSource, userId ? {userId} : idle);
// TypeScript leitet Typen für beide Zweige korrekt ab
```

#### Komposition von Query-Optionen

```ts
// Komponiert React Query-Optionen für einfache Abfragen
const plainOptions = composePlainQueryOptions(context, dataSource, params, options);

// Komponiert React Query-Optionen für unendliche Abfragen
const infiniteOptions = composeInfiniteQueryOptions(context, dataSource, params, options);
```

**Hinweis:** Diese Funktionen sind hauptsächlich für die interne Verwendung bei der Erstellung benutzerdefinierter Datenquellenimplementierungen bestimmt.

## Fortgeschrittene Muster

### Bedingte Abfragen mit `idle`

Verwenden Sie `idle`, um bedingte Abfragen zu erstellen:

```ts
import {idle} from '@gravity-ui/data-source';

const ConditionalDataComponent: React.FC<{
  userId?: number;
  shouldLoadPosts: boolean;
}> = ({userId, shouldLoadPosts}) => {
  // Lädt den Benutzer nur, wenn userId definiert ist
  const user = useQueryData(
    userDataSource,
    userId ? {userId} : idle
  );

  // Lädt Beiträge nur, wenn der Benutzer geladen ist und das Flag aktiviert ist
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

### Datentransformation

Transformiert Anfrageparameter und Antwortdaten:

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

### Tag-basierte Cache-Invalidierung

Verwenden Sie Tags für eine ausgefeilte Cache-Verwaltung:

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

// Ungültigmachen aller Daten für einen bestimmten Benutzer
await dataManager.invalidateTag('user:123');

// Ungültigmachen aller benutzerbezogenen Daten
await dataManager.invalidateTag('users');
```

### Fehlerbehandlung mit Typen

Erstellt typsichere Fehlerbehandlung:

```ts
interface ApiError {
  code: number;
  message: string;
  details?: Record<string, unknown>;
}

const ErrorView: React.FC<ErrorViewProps<ApiError>> = ({error, action}) => (
  <div className="error">
    <h3>Fehler {error?.code}</h3>
    <p>{error?.message}</p>
    {action && (
      <button onClick={action.handler}>
        {action.children || 'Erneut versuchen'}
      </button>
    )}
  </div>
);
```

### Unendliche Abfragen mit komplexer Paginierung

Behandelt komplexe Paginierungsszenarien:

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

### Kombinieren mehrerer Datenquellen

Kombiniert Daten aus mehreren Quellen:

```ts
const UserProfile: React.FC<{userId: number}> = ({userId}) => {
  const user = useQueryData(userDataSource, {userId});
  const posts = useQueryData(userPostsDataSource, {userId});
  const followers = useQueryData(userFollowersDataSource, {userId});

  const combined = useQueryResponses([user, posts, followers]);
```

```html
<div class="language-selector">
  <a href="/en/README.md" class="language-link">English</a>
  <a href="/de/README.md" class="language-link">Deutsch</a>
</div>
```

```jsx
  return (
    <DataLoader
      status={combined.status}
      error={combined.error}
      errorAction={combined.refetchErrored} // Nur fehlgeschlagene Anfragen erneut versuchen
      LoadingView={ProfileSkeleton}
      ErrorView={ProfileError}
    >
      {user && posts && followers && (
        <div>
          <UserInfo user={user.data} />
          <UserPosts posts={posts.data} />
          <UserFollowers followers={followers.data} />
        </div>
      )}
    </DataLoader>
  );
};
```

## TypeScript-Unterstützung

Die Bibliothek wurde mit einem TypeScript-First-Ansatz entwickelt und bietet vollständige Typinferenz:

```ts
// Typen werden automatisch abgeleitet
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(async (params: {userId: number}): Promise<User> => {
    // Rückgabetyp wird als User abgeleitet
  }),
});

// Hook-Rückgabetyp ist automatisch typisiert
const {data} = useQueryData(userDataSource, {userId: 123});
// data ist als User | undefined typisiert
```

### Benutzerdefinierte Fehlertypen

Definieren und verwenden Sie benutzerdefinierte Fehlertypen:

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
  {id: number}, // Parametertyp
  {id: number}, // Anfragetyp
  ApiResponse, // Antworttyp
  User, // Datentyp
  ApiError // Fehlertyp
>({
  name: 'typed-user',
  fetch: skipContext(fetchUser),
});
```

## Mitwirkung

Bitte lesen Sie [CONTRIBUTING.md](CONTRIBUTING.md) für Details zu unserem Verhaltenskodex und dem Prozess für das Einreichen von Pull-Requests.

## Lizenz

MIT-Lizenz. Details finden Sie in der Datei [LICENSE](LICENSE).