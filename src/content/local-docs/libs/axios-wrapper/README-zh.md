# Axios Wrapper
该库提供了一个方便的 Axios 包装器，增加了自动取消并发请求的功能。

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
包装器提供了 http 方法 `get`、`head`、`put`、`post`、`delete`。

`get` 和 `head` 方法的签名是 `(url, params, options)`；`put`、`post` 和 `delete` 方法的签名是
`(url, data, params, options)`。

`params` 参数代表查询字符串参数，而 `options` 是请求设置。

目前支持 4 种请求设置：
- `concurrentId (string)`：可选的请求 ID
- `collectRequest (bool)`：可选的标志，指示是否应记录请求（默认为 `true`）
- `requestConfig (object)`：可选的自定义请求参数配置
- `headers (object)`：可选的自定义请求头对象。
- `timeout (number)`：可选的请求超时时间
- `onDownloadProgress (function)`：可选的回调函数，用于处理文件下载进度

### 请求头
`setDefaultHeader({name (string), value (string), methods (array)})` 方法允许添加一个默认
请求头。

`name` 和 `value` 参数是必需的，可选参数 `methods` 指定了所有将接收这些默认请求头的
方法（默认情况下，所有方法都将接收这些请求头）。

### CSRF
`setCSRFToken` 方法允许指定 CSRF-token，该 token 将被添加到所有 `put`、`post` 和 `delete`
请求中。

### 并发请求
有时最好在请求进行中时取消它，如果其结果不再需要。要实现这一点，应该在请求的 `options` 中
传递 `concurrentId`。当出现具有相同 `concurrentId` 的下一个请求时，具有该 ID 的前一个请求将被取消。

也可以通过调用 `cancelRequest(concurrentId)` 方法手动取消请求。

### 收集请求
可以使用 `collector` 选项将请求收集到本地存储中。它会分别存储所有请求和错误。以下 `apiInstance`
将保留最后 10 个请求（包括成功和失败的）以及最后 10 个错误请求。
```javascript
const apiInstance = new API({
    collector: {
        collectErrors: 10,
        collectRequests: 10
    }
});
```

要获取已保存的请求，需要调用 `getCollectedRequests` 方法，该方法返回一个对象
`{errors: [...], requests: [...]}`。

### 用法
建议的用法是继承基础 `AxiosWrapper` 类：
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

当 `baseURL` 参数传递到 `axios` 配置中时，所有请求的路径名都将附加到它后面。
```javascript
const apiInstance = new API({
    config: {
        baseURL: '/api/v2'
    }
});
```