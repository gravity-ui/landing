# Data Source &middot; [![npm version](https://img.shields.io/npm/v/@gravity-ui/data-source?logo=npm&label=version)](https://www.npmjs.com/package/@gravity-ui/data-source) [![ci](https://img.shields.io/github/actions/workflow/status/gravity-ui/data-source/ci.yml?branch=main&label=ci&logo=github)](https://github.com/gravity-ui/data-source/actions/workflows/ci.yml?query=branch:main)

`Data Source` — это простой оберточный компонент для фетчинга данных. В рамках [чистой архитектуры](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) он выполняет роль порта, позволяя создавать обертки для различных сценариев работы с данными. `Data Source` в своей основе использует [`react-query`](https://tanstack.com/query/latest).

## Установка

```bash
npm install @gravity-ui/data-source @tanstack/react-query
```

`@tanstack/react-query` является peer-зависимостью.

## Начало работы

В первую очередь определите тип ошибки и на основе стандартных конструкторов создайте свои собственные конструкторы для источников данных и ошибок (`makePlainQueryDataSource` или `makeInfiniteQueryDataSource`). Например:

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

Создайте компонент `DataLoader` на основе стандартного шаблона. Он поможет настроить отображение статуса загрузки и ошибок. Например:

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

Определите первый источник данных:

```ts
export const objectDataSource = makePlainQueryDataSource({
  // Keys have to be unique. Maybe you should create a helper for making names of data sources
  name: 'object',
  // skipContext is just a helper to skip 2 first parameters in the function (context and fetchContext)
  fetch: skipContext(objectFetch),
});
```

Интегрируйте его в приложение:

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
