# Axios Wrapper

这个库提供了一个方便的 Axios 封装器，为其功能添加了自动取消并发请求的能力。

## 安装

```shell
npm install --save-dev @gravity-ui/axios-wrapper
```

## HTTP API

### 构造函数参数

##### config [可选]

`axios` 实例的配置。

##### collector [可选]

请求收集器的配置是一个对象：

```json
{
  "collectErrors": 10,
  "collectRequests": 10
}
```

### 基本方法

封装器提供 HTTP 方法 `get`、`head`、`put`、`post`、`delete`。

方法 `get` 和 `head` 的签名是 `(url, params, options)`；而 `put`、`post` 和 `delete` 方法的签名是 `(url, data, params, options)`。

参数 `params` 代表查询字符串参数，而 `options` 是请求设置。

目前支持 4 种请求设置：

- `concurrentId (string)`：可选的请求 ID
- `collectRequest (bool)`：可选标志，表示是否应该记录请求（默认为 `true`）
- `requestConfig (object)`：带有自定义请求参数的可选配置
- `headers (object)`：带有自定义请求头的可选对象
- `timeout (number)`：可选的请求超时时间
- `onDownloadProgress (function)`：用于处理文件下载进度的可选回调函数

### 请求头

`setDefaultHeader({name (string), value (string), methods (array)})` 方法允许添加默认请求头。

参数 `name` 和 `value` 是必需的，可选参数 `methods` 指定了将获得这些默认头的所有方法（默认情况下，所有方法都将获得这些头）。

### CSRF

`setCSRFToken` 方法允许指定 CSRF 令牌，该令牌将添加到所有 `put`、`post` 和 `delete` 请求中。

### 并发请求

有时，如果不再需要请求的结果，最好取消正在进行的请求。要实现这一点，应该在请求的 `options` 中传递 `concurrentId`。当发生具有相同 `concurrentId` 的下一个请求时，具有该 ID 的前一个请求将被取消。

也可以通过调用 `cancelRequest(concurrentId)` 方法手动取消请求。

### 收集请求

可以使用 `collector` 选项设置将请求收集到本地存储中。它分别存储所有请求和错误。以下 `apiInstance` 将保留最后 10 个请求（成功和不成功的）和最后 10 个错误请求。

```javascript
const apiInstance = new API({
  collector: {
    collectErrors: 10,
    collectRequests: 10,
  },
});
```

要获取保存的请求，必须调用 `getCollectedRequests` 方法，该方法返回对象 `{errors: [...], requests: [...]}`。

### 使用方法

建议的使用方法是继承基础 `AxiosWrapper` 类：

```javascript
export class API extends AxiosWrapper {
  getProjects() {
    return this.get('/projects');
  }
  getSensors({project, selectors}) {
    return this.get(`/projects/${project}/sensors`, {selectors, pageSize: 200});
  }
  getNames({project, selectors}) {
    return this.get(`/projects/${project}/sensors/names`, {selectors});
  }
  getLabels({project, names, selectors}) {
    return this.get(`/projects/${project}/sensors/labels`, {names, selectors});
  }
}
```

当 `baseURL` 参数传递到 `axios` 配置中时，所有请求的路径名将附加到它上面。

```javascript
const apiInstance = new API({
  config: {
    baseURL: '/api/v2',
  },
});
```
