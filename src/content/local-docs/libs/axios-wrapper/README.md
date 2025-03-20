# Axios Wrapper

This library provides a convenient wrapper around Axios adding automatic cancelling of concurrent requests
to its features.

## Install

```shell
npm install --save-dev @gravity-ui/axios-wrapper
```

## HTTP API

### Constructor parameters

##### config [optional]

The configuration of an `axios` instance.

##### collector [optional]

The configuration of requests collector is an object:

```json
{
  "collectErrors": 10,
  "collectRequests": 10
}
```

### Basic methods

Wrapper provides http-methods `get`, `head`, `put`, `post`, `delete`.

Methods `get` and `head` have the signature `(url, params, options)`; `put`, `post`, while the `delete` method
has `(url, data, params, options)` signature.

The `params` argument stands for query string parameters while `options` is a request settings.

Currently 4 request settings are supported:

- `concurrentId (string)`: optional request id
- `collectRequest (bool)`: optional flag, telling if the request should be logger (default `true`)
- `requestConfig (object)`: optional config with the custom request parameters
- `headers (object)`: optional object with custom request headers.
- `timeout (number)`: optional request timeout
- `onDownloadProgress (function)`: optional callback for processing file download progress

### Headers

The `setDefaultHeader({name (string), value (string), methods (array)})` method allows to add a default
request header.

Arguments `name` and `value` are required, optional argument `methods` specified all methods which get those
default headers (by default all methods will get those headers).

### CSRF

The `setCSRFToken` method allows specifying CSRF-token, which will be added to all `put`, `post` and `delete`
requests.

### Concurrent requests

Sometimes it is better to cancel the request in flight if its results are no longer needed. To make this
happen, one should pass to request's `options` the `concurrentId` id. When the next request with the same
`concurrentId` occurs the previous request with that id will be cancelled.

One cancel a request manually as well by invoking the `cancelRequest(concurrentId)` method.

### Collecting requests

It is possible to set up requests collection into the local storage using the `collector` option. It stores
all requests and errors separately. The following `apiInstance` will keep 10 last requests (both successful
and not) and 10 last erroneous requests.

```javascript
const apiInstance = new API({
  collector: {
    collectErrors: 10,
    collectRequests: 10,
  },
});
```

To obtain saved requests one have to invoke the `getCollectedRequests` method which returns the object
`{errors: [...], requests: [...]}`.

### Usage

The suggested usage is to subclass the base `AxiosWrapper` class:

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

When the `baseURL` parameter is passed into `axios` config, all requested pathnames will be appended to it.

```javascript
const apiInstance = new API({
  config: {
    baseURL: '/api/v2',
  },
});
```
