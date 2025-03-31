# Fuente de datos & middot; [![npm version](https://img.shields.io/npm/v/@gravity-ui/data-source?logo=npm&label=version) (https://www.npmjs.com/package/@gravity-ui/data-source) [![ci](https://img.shields.io/github/actions/workflow/status/gravity-ui/data-source/ci.yml?branch=main&label=ci&logo=github) (https://github.com/gravity-ui/data-source/actions/workflows/ci.yml?query=branch:main)

**Data Source** es un sencillo envoltorio para la obtención de datos. Es una especie de «puerto» en una [arquitectura limpia](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). Te permite crear envoltorios para cosas relacionadas con la obtención de datos según tus casos de uso. **Data Source** usa [react-query de](https://tanstack.com/query/latest) forma oculta.

## Instalación

```bash
npm install @gravity-ui/data-source @tanstack/react-query
```

`@tanstack/react-query` es una dependencia de los compañeros.

## Cómo empezar

En primer lugar, defina un tipo de error y cree sus constructores para las fuentes de datos y su error se base en los constructores predeterminados (MakePlainQueryDataSource /MakeInfiniteQueryDataSource). Por ejemplo:

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

Escriba un `DataLoader` componente según el valor predeterminado. Esto resulta práctico para definir la visualización del estado de carga y los errores. Por ejemplo:

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

Defina su primera fuente de datos:

```ts
export const objectDataSource = makePlainQueryDataSource({
  // Keys have to be unique. Maybe you should create a helper for making names of data sources
  name: 'object',
  // skipContext is just a helper to skip 2 first parameters in the function (context and fetchContext)
  fetch: skipContext(objectFetch),
});
```

Utilízalo en la aplicación:

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
