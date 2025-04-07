# Data Source &middot; [![npm version](https://img.shields.io/npm/v/@gravity-ui/data-source?logo=npm&label=version)](https://www.npmjs.com/package/@gravity-ui/data-source) [![ci](https://img.shields.io/github/actions/workflow/status/gravity-ui/data-source/ci.yml?branch=main&label=ci&logo=github)](https://github.com/gravity-ui/data-source/actions/workflows/ci.yml?query=branch:main)

**Data Source** 是数据获取的简单封装。它是[清洁架构](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)中的一种"端口"。它允许您根据您的用例为数据获取周围的内容创建封装。**Data Source** 内部使用 [react-query](https://tanstack.com/query/latest)。

## 安装

```bash
npm install @gravity-ui/data-source @tanstack/react-query
```

`@tanstack/react-query` 是一个对等依赖项。

## 入门指南

首先，定义错误类型并基于默认构造函数（makePlainQueryDataSource / makeInfiniteQueryDataSource）为数据源和错误创建构造函数。例如：

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

基于默认值编写一个 `DataLoader` 组件。这有助于定义加载状态和错误的显示方式。例如：

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

定义您的第一个数据源：

```ts
export const objectDataSource = makePlainQueryDataSource({
  // 键必须是唯一的。也许您应该创建一个辅助函数来为数据源命名
  name: 'object',
  // skipContext 只是一个辅助函数，用于跳过函数中的前 2 个参数（context 和 fetchContext）
  fetch: skipContext(objectFetch),
});
```

在应用程序中使用它：

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
