# Axios Wrapper

`Axios Wrapper` — это библиотека, которая предоставляет удобную обертку над Axios, добавляя к ее функционалу автоматическую отмену одновременно выполняемых запросов.

## Установка

```shell
npm install --save-dev @gravity-ui/axios-wrapper
```

## HTTP API

### Параметры конструктора

##### `config` (опциональный)

Конфигурация экземпляра `axios`.

##### `collector` (опциональный)

Конфигурация сборщика запросов представляется в виде объекта:

```json
{
  "collectErrors": 10,
  "collectRequests": 10
}
```

### Основные методы

`Axios Wrapper` поддерживает следующие HTTP-методы: `get`, `head`, `put`, `post`, `delete`.

Методы `get` и `head` имеют сигнатуру `(url, params, options)`, а `put`, `post` и `delete` — `(url, data, params, options)`.

В `params` задаются параметры строки запроса, а в `options` — настройки запроса.

На данный момент поддерживаются следующие настройки запроса:

- `concurrentId (string)` — идентификатор запроса. Данная настройка является опциональной.
- `collectRequest (bool)` — флаг для включения или отключения логирования запроса (по умолчанию — `true`). Данная настройка является опциональной.
- `requestConfig (object)` — конфигурация с пользовательскими параметрами запроса. Данная настройка является опциональной.
- `headers (object)` — объект с пользовательскими заголовками запроса. Данная настройка является опциональной.
- `timeout (number)` — таймаут запроса. Данная настройка является опциональной.
- `onDownloadProgress (function)` — обратный вызов для обработки прогресса загрузки файла. Данная настройка является опциональной.

### Заголовки

Метод `setDefaultHeader({name (string), value (string), methods (array)})` позволяет добавить заголовок по умолчанию для запроса.

`name` и `value` — обязательные аргументы, а `methods` — опциональный аргумент, указывающий все методы, которым будут переданы такие заголовки по умолчанию (по умолчанию заголовки передаются всем методам).

### CSRF

Метод `setCSRFToken` позволяет задать CSRF-токен, который будет добавляться ко всем запросам `put`, `post` и `delete`.

### Одновременно выполняемые запросы

В некоторых случаях лучше отменить запрос в процессе его выполнения, если его результаты больше не нужны. Для этого в `options` запроса необходимо передать `concurrentId`.
При следующем запросе с тем же значением `concurrentId` предыдущий запрос будет отменен.

Также можно вручную отменить запрос, вызвав метод `cancelRequest(concurrentId)`.

### Сбор запросов

С помощью параметра `collector` можно настроить сбор запросов в локальное хранилище. Он хранит все запросы и ошибки отдельно.
Следующий экземпляр `apiInstance` будет хранить 10 последних запросов (как успешных, так и неудачных) и 10 последних ошибочных запросов.

```javascript
const apiInstance = new API({
  collector: {
    collectErrors: 10,
    collectRequests: 10,
  },
});
```

Для получения сохраненных запросов необходимо вызвать метод `getCollectedRequests`, который возвращает объект `{errors: [...], requests: [...]}`.

### Использование

Рекомендуется использовать наследование от базового класса `AxiosWrapper`:

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

Когда параметр `baseURL` передается в конфигурацию `axios`, запрашиваемые пути будут добавляться к нему:

```javascript
const apiInstance = new API({
  config: {
    baseURL: '/api/v2',
  },
});
```
