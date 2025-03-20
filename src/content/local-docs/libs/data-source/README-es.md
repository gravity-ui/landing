# Data Source &middot; [![npm version](https://img.shields.io/npm/v/@gravity-ui/data-source?logo=npm&label=version)](https://www.npmjs.com/package/@gravity-ui/data-source) [![ci](https://img.shields.io/github/actions/workflow/status/gravity-ui/data-source/ci.yml?branch=main&label=ci&logo=github)](https://github.com/gravity-ui/data-source/actions/workflows/ci.yml?query=branch:main)

**Data Source** es un simple envoltorio para la obtención de datos. Es una especie de "puerto" en la [arquitectura limpia](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). Te permite crear envoltorios para elementos relacionados con la obtención de datos según tus casos de uso. **Data Source** utiliza [react-query](https://tanstack.com/query/latest) internamente.

## Instalación

```bash
npm install @gravity-ui/data-source @tanstack/react-query
```

`@tanstack/react-query` es una dependencia peer.

## Primeros pasos

Primero, define un tipo de error y crea tus constructores para fuentes de datos y tu error basado en constructores predeterminados (makePlainQueryDataSource / makeInfiniteQueryDataSource). Por ejemplo:

```ts
import {makePlainQueryDataSource as makePlainQueryDataSourceBase} from '@gravity-ui/data-source';

export interface ApiError {
  title: string;
  code?: number;
  description?: string;
}

export const makePlainQueryDataSource = <TParams, TRequest, TResponse, TData, TError = ApiError>(
  config: Omit<PlainQueryDataSource<TParams, TRequest, TResponse, TData, TError>, 'type'>,
): PlainQueryDataSource<TParams, TRequest, TResponse, TData, TError> => {
  return makePlainQueryDataSourceBase(config);
};
```

Escribe un componente `DataLoader` basado en el predeterminado. Esto es conveniente para definir tu visualización del estado de carga y errores. Por ejemplo:

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
  LoadingView = YourLoader,
  ErrorView = YourError,
  ...restProps
}) => {
  return <DataLoaderBase LoadingView={LoadingView} ErrorView={ErrorView} {...restProps} />;
};
```

Define tu primera fuente de datos:

```ts
export const objectDataSource = makePlainQueryDataSource({
  // Las claves deben ser únicas. Quizás deberías crear un helper para hacer nombres de fuentes de datos
  name: 'object',
  // skipContext es solo un helper para omitir los 2 primeros parámetros en la función (context y fetchContext)
  fetch: skipContext(objectFetch),
});
```

Úsalo en la aplicación:

```tsx
import {useQueryData} from '@gravity-ui/data-source';

export const SomeComponent: React.FC = () => {
  const {data, status, error, refetch} = useQueryData(objectDataSource, {objectId: 1});

  return (
    <DataLoader status={status} error={error} errorAction={refetch}>
      {data && <ObjectComponent object={data} />}
    </DataLoader>
  );
};
```
