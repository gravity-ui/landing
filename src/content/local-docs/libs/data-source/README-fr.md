# Data Source &middot; [![npm version](https://img.shields.io/npm/v/@gravity-ui/data-source?logo=npm&label=version)](https://www.npmjs.com/package/@gravity-ui/data-source) [![ci](https://img.shields.io/github/actions/workflow/status/gravity-ui/data-source/ci.yml?branch=main&label=ci&logo=github)](https://github.com/gravity-ui/data-source/actions/workflows/ci.yml?query=branch:main)

**Data Source** est un simple wrapper pour la récupération de données. C'est une sorte de "port" dans l'[architecture propre](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). Il vous permet de créer des wrappers pour des éléments liés à la récupération de données, en fonction de vos cas d'utilisation. **Data Source** utilise [react-query](https://tanstack.com/query/latest) en arrière-plan.

## Installation

```bash
npm install @gravity-ui/data-source @tanstack/react-query
```

`@tanstack/react-query` est une dépendance pair.

## Démarrage Rapide

### 1. Configuration du DataManager

Tout d'abord, créez et fournissez un `DataManager` dans votre application :

```tsx
import React from 'react';
import {ClientDataManager, DataManagerContext} from '@gravity-ui/data-source';

const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 3,
    },
    // ... autres options react-query
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

### 2. Définition des Types d'Erreurs et des Wrappers

Définissez un type d'erreur et créez vos constructeurs pour les sources de données basés sur les constructeurs par défaut :

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

### 3. Création d'un Composant DataLoader Personnalisé

Écrivez un composant `DataLoader` basé sur le composant par défaut pour définir l'affichage de l'état de chargement et des erreurs :

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
  LoadingView = YourLoader, // Vous pouvez utiliser votre propre composant de chargement
  ErrorView = YourError, // Vous pouvez utiliser votre propre composant d'erreur
  ...restProps
}) => {
  return <DataLoaderBase LoadingView={LoadingView} ErrorView={ErrorView} {...restProps} />;
};
```

### 4. Définition de Votre Première Source de Données

```ts
import {skipContext} from '@gravity-ui/data-source';

// Votre fonction API
import {fetchUser} from './api';

export const userDataSource = makePlainQueryDataSource({
  // Les clés doivent être uniques. Peut-être devriez-vous créer un helper pour nommer les sources de données
  name: 'user',
  // skipContext est un helper pour ignorer les 2 premiers paramètres de la fonction (context et fetchContext)
  fetch: skipContext(fetchUser),
  // Optionnel : générer des tags pour une invalidation de cache avancée
  tags: (params) => [`user:${params.userId}`, 'users'],
});
```

### 5. Utilisation dans les Composants

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

## Concepts Clés

### Types de Sources de Données

La bibliothèque fournit deux types principaux de sources de données :

#### Source de Données de Requête Simple (Plain Query Data Source)

Pour les schémas simples de requête/réponse :

```ts
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(async (params: {userId: number}) => {
    const response = await fetch(`/api/users/${params.userId}`);
    return response.json();
  }),
});
```

#### Source de Données de Requête Infinie (Infinite Query Data Source)

Pour la pagination et le défilement infini :

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

### Gestion des États

La bibliothèque normalise les états des requêtes en trois états simples :

- `loading` - Chargement des données en cours. Identique à `isLoading` dans React Query.
- `success` - Données disponibles (peut être ignoré en utilisant `idle`).
- `error` - Échec de la récupération des données.

### Concept d'Idle

La bibliothèque fournit un symbole spécial `idle` pour ignorer l'exécution de la requête :

```ts
import {idle} from '@gravity-ui/data-source';

const UserProfile: React.FC<{userId?: number}> = ({userId}) => {
  // La requête ne s'exécutera pas si userId n'est pas défini
  const {data, status} = useQueryData(userDataSource, userId ? {userId} : idle);

  return (
    <DataLoader status={status} error={null}>
      {data && <UserCard user={data} />}
    </DataLoader>
  );
};
```

Lorsque les paramètres sont égaux à `idle` :

- La requête ne s'exécute pas.
- Le statut reste `success`.
- Les données restent `undefined`.
- Le composant peut être rendu en toute sécurité sans chargement.

**Avantages de `idle` :**

1. **Sécurité des Types** - TypeScript infère correctement les types pour les paramètres conditionnels.
2. **Performance** - Évite les requêtes serveur inutiles.
3. **Simplicité Logique** - Pas besoin de gérer un état `enabled` supplémentaire.
4. **Cohérence** - Approche unifiée pour toutes les requêtes conditionnelles.

Ceci est particulièrement utile pour les requêtes conditionnelles lorsque vous souhaitez charger des données uniquement sous certaines conditions tout en conservant la sécurité des types.

## Référence API

### Création de Sources de Données

#### `makePlainQueryDataSource(config)`

Crée une source de données de requête simple pour les schémas de requête/réponse.

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
    // ... autres options react-query
  },
});
```

**Paramètres :**

- `name` - Identifiant unique pour la source de données
- `fetch` - Fonction qui effectue la récupération réelle des données
- `transformParams` (optionnel) - Transforme les paramètres d'entrée avant la requête
- `transformResponse` (optionnel) - Transforme les données de réponse
- `tags` (optionnel) - Génère des tags de cache pour l'invalidation
- `options` (optionnel) - Options React Query

#### `makeInfiniteQueryDataSource(config)`

Crée une source de données pour les requêtes infinies, adaptée aux schémas de pagination et de défilement infini.

```ts
const infiniteDataSource = makeInfiniteQueryDataSource({
  name: 'infinite-data',
  fetch: skipContext(fetchFunction),
  next: (lastPage, allPages) => nextPageParam || undefined,
  prev: (firstPage, allPages) => prevPageParam || undefined,
  // ... autres options identiques à celles de 'plain'
});
```

**Paramètres supplémentaires :**

- `next` - Fonction pour déterminer les paramètres de la page suivante
- `prev` (optionnel) - Fonction pour déterminer les paramètres de la page précédente

### Hooks React

#### `useQueryData(dataSource, params, options?)`

Hook principal pour récupérer des données avec une source de données.

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

**Retourne :**

- `data` - Les données récupérées
- `status` - Statut actuel ('loading' | 'success' | 'error')
- `error` - Objet d'erreur si la requête a échoué
- `refetch` - Fonction pour recharger manuellement les données
- Autres propriétés React Query

#### `useQueryResponses(responses)`

Combine plusieurs réponses de requêtes en un seul état.

```ts
const user = useQueryData(userDataSource, {userId});
const posts = useQueryData(postsDataSource, {userId});

const {status, error, refetch, refetchErrored} = useQueryResponses([user, posts]);
```

**Retourne :**

- `status` - Statut combiné de toutes les requêtes
- `error` - Première erreur rencontrée
- `refetch` - Fonction pour recharger toutes les requêtes
- `refetchErrored` - Fonction pour recharger uniquement les requêtes échouées

#### `useRefetchAll(states)`

Crée une fonction de rappel pour recharger plusieurs requêtes.

```ts
const refetchAll = useRefetchAll([user, posts, comments]);
// refetchAll() déclenchera le rechargement de toutes les requêtes
```

#### `useRefetchErrored(states)`

Crée une fonction de rappel pour recharger uniquement les requêtes échouées.

```ts
const refetchErrored = useRefetchErrored([user, posts, comments]);
// refetchErrored() ne rechargera que les requêtes ayant des erreurs
```

#### `useDataManager()`

Retourne le DataManager depuis le contexte.

```ts
const dataManager = useDataManager();
await dataManager.invalidateTag('users');
```

#### `useQueryContext()`

Retourne le contexte de la requête (pour construire des hooks de données personnalisés basés sur react-query).

### Composants React

#### `<DataLoader />`

Composant pour gérer les états de chargement et les erreurs.

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

**Props :**

- `status` - Statut de chargement actuel
- `error` - Objet d'erreur
- `errorAction` - Fonction ou configuration d'action pour la nouvelle tentative en cas d'erreur
- `LoadingView` - Composant à afficher pendant le chargement
- `ErrorView` - Composant à afficher en cas d'erreur
- `loadingViewProps` - Props passées à LoadingView
- `errorViewProps` - Props passées à ErrorView

#### `<DataInfiniteLoader />`

Composant spécialisé pour les requêtes infinies.

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

**Props supplémentaires :**

- `hasNextPage` - Indique si des pages supplémentaires sont disponibles
- `fetchNextPage` - Fonction pour récupérer la page suivante
- `isFetchingNextPage` - Indique si la page suivante est en cours de récupération
- `MoreView` - Composant pour le bouton "charger plus"

#### `withDataManager(Component)`

HOC qui injecte DataManager en tant que prop.

```tsx
const MyComponent = withDataManager<Props>(({dataManager, ...props}) => {
  // Le composant a accès à dataManager
  return <div>...</div>;
});
```

### Gestion des Données

#### `ClientDataManager`

Classe principale pour la gestion des données.

```ts
const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 300000, // 5 minutes
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});
```

**Méthodes :**

##### `invalidateTag(tag, options?)`

Invalide toutes les requêtes avec un tag spécifique.

```ts
await dataManager.invalidateTag('users');
await dataManager.invalidateTag('posts', {
  repeat: {count: 3, interval: 1000}, // Nouvelle tentative d'invalidation
});
```

##### `invalidateTags(tags, options?)`

Invalide les requêtes qui ont tous les tags spécifiés.

```ts
await dataManager.invalidateTags(['user', 'profile']);
```

##### `invalidateSource(dataSource, options?)`

Invalide toutes les requêtes pour une source de données.

```ts
await dataManager.invalidateSource(userDataSource);
```

##### `invalidateParams(dataSource, params, options?)`

Invalide une requête spécifique avec des paramètres exacts.

```ts
await dataManager.invalidateParams(userDataSource, {userId: 123});
```

##### `resetSource(dataSource)`

Réinitialise (efface) toutes les données mises en cache pour une source de données.

```ts
await dataManager.resetSource(userDataSource);
```

##### `resetParams(dataSource, params)`

Réinitialise les données mises en cache pour des paramètres spécifiques.

```ts
await dataManager.resetParams(userDataSource, {userId: 123});
```

##### `invalidateSourceTags(dataSource, params, options?)`

Invalide les requêtes en fonction des tags générés par une source de données.

```ts
await dataManager.invalidateSourceTags(userDataSource, {userId: 123});
```

### Utilitaires

#### `skipContext(fetchFunction)`

Utilitaires pour adapter les fonctions fetch existantes à l'interface de la source de données.

```ts
// Fonction existante
async function fetchUser(params: {userId: number}) {
  // ...
}

// Adaptée pour la source de données
const dataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(fetchUser), // Ignore le contexte et les paramètres de fetchContext
});
```

#### `withCatch(fetchFunction, errorHandler)`

Ajoute une gestion d'erreurs standardisée aux fonctions fetch.

```ts
const safeFetch = withCatch(fetchUser, (error) => ({error: true, message: error.message}));
```

#### `withCancellation(fetchFunction)`

Ajoute la prise en charge de l'annulation aux fonctions fetch.

```ts
const cancellableFetch = withCancellation(fetchFunction);
// Gère automatiquement AbortSignal de React Query
```

#### `getProgressiveRefetch(options)`

Crée une fonction d'intervalle de re-fetch progressive.

```ts
const progressiveRefetch = getProgressiveRefetch({
  minInterval: 1000, // Commence à 1 seconde
  maxInterval: 30000, // Max 30 secondes
  multiplier: 2, // Double à chaque fois
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

Convertit les statuts de React Query en statuts DataLoader.

```ts
const status = normalizeStatus('pending', 'fetching'); // 'loading'
```

#### Utilitaires de Statut et d'Erreur

```ts
// Obtient le statut combiné à partir de plusieurs états
const status = getStatus([user, posts, comments]);

// Obtient la première erreur à partir de plusieurs états
const error = getError([user, posts, comments]);

// Fusionne plusieurs statuts
const combinedStatus = mergeStatuses(['loading', 'success', 'error']); // 'error'

// Vérifie si une clé de requête a un tag
const hasUserTag = hasTag(queryKey, 'users');
```

#### Utilitaires de Composition de Clés

```ts
// Compose la clé de cache pour une source de données
const key = composeKey(userDataSource, {userId: 123});

// Compose la clé complète incluant les tags
const fullKey = composeFullKey(userDataSource, {userId: 123});
```

#### Constantes

```ts
import {idle} from '@gravity-ui/data-source';

// Symbole spécial pour ignorer l'exécution de la requête
const params = shouldFetch ? {userId: 123} : idle;

// Alternative type-safe à enabled: false
// Au lieu de :
const {data} = useQueryData(userDataSource, {userId: userId || ''}, {enabled: Boolean(userId)});

// Utilisez :
const {data} = useQueryData(userDataSource, userId ? {userId} : idle);
// TypeScript infère correctement les types pour les deux branches
```

#### Composition des Options de Requête

```ts
// Compose les options React Query pour les requêtes simples
const plainOptions = composePlainQueryOptions(context, dataSource, params, options);

// Compose les options React Query pour les requêtes infinies
const infiniteOptions = composeInfiniteQueryOptions(context, dataSource, params, options);
```

**Note :** Ces fonctions sont principalement destinées à un usage interne lors de la création d'implémentations de sources de données personnalisées.

## Motifs Avancés

### Requêtes Conditionnelles avec `idle`

Utilisez `idle` pour créer des requêtes conditionnelles :

```ts
import {idle} from '@gravity-ui/data-source';

const ConditionalDataComponent: React.FC<{
  userId?: number;
  shouldLoadPosts: boolean;
}> = ({userId, shouldLoadPosts}) => {
  // Charge l'utilisateur uniquement si userId est défini
  const user = useQueryData(
    userDataSource,
    userId ? {userId} : idle
  );

  // Charge les posts uniquement si l'utilisateur est chargé et que le drapeau est activé
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

### Transformation des Données

Transformez les paramètres de requête et les données de réponse :

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

### Invalidation de Cache Basée sur les Tags

Utilisez des tags pour une gestion sophistiquée du cache :

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

// Invalide toutes les données d'un utilisateur spécifique
await dataManager.invalidateTag('user:123');

// Invalide toutes les données liées à l'utilisateur
await dataManager.invalidateTag('users');
```

### Gestion des Erreurs avec des Types

Créez une gestion d'erreurs type-safe :

```ts
interface ApiError {
  code: number;
  message: string;
  details?: Record<string, unknown>;
}

const ErrorView: React.FC<ErrorViewProps<ApiError>> = ({error, action}) => (
  <div className="error">
    <h3>Erreur {error?.code}</h3>
    <p>{error?.message}</p>
    {action && (
      <button onClick={action.handler}>
        {action.children || 'Réessayer'}
      </button>
    )}
  </div>
);
```

### Requêtes Infinies avec Pagination Complexe

Gérez des scénarios de pagination complexes :

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

### Combinaison de Plusieurs Sources de Données

Combinez les données de plusieurs sources :

```ts
const UserProfile: React.FC<{userId: number}> = ({userId}) => {
  const user = useQueryData(userDataSource, {userId});
  const posts = useQueryData(userPostsDataSource, {userId});
  const followers = useQueryData(userFollowersDataSource, {userId});

  const combined = useQueryResponses([user, posts, followers]);
```

```jsx
// Les types sont automatiquement inférés
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(async (params: {userId: number}): Promise<User> => {
    // Le type de retour est inféré comme User
  }),
});

// Le type de retour du hook est automatiquement typé
const {data} = useQueryData(userDataSource, {userId: 123});
// data est typé comme User | undefined
```

### Types d'erreurs personnalisés

Définissez et utilisez des types d'erreurs personnalisés :

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
  {id: number}, // Type des paramètres
  {id: number}, // Type de la requête
  ApiResponse, // Type de la réponse
  User, // Type des données
  ApiError // Type de l'erreur
>({
  name: 'typed-user',
  fetch: skipContext(fetchUser),
});
```

## Contribution

Veuillez lire [CONTRIBUTING.md](CONTRIBUTING.md) pour plus de détails sur notre code de conduite et le processus de soumission des pull requests.

## Licence

Licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.