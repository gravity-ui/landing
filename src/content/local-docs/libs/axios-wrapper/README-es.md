# Axios Wrapper

Esta biblioteca proporciona un envoltorio conveniente alrededor de Axios, añadiendo la cancelación automática de solicitudes concurrentes a sus características.

## Instalación

```shell
npm install --save-dev @gravity-ui/axios-wrapper
```

## API HTTP

### Parámetros del constructor

##### config [opcional]

La configuración de una instancia de `axios`.

##### collector [opcional]

La configuración del recolector de solicitudes es un objeto:

```json
{
  "collectErrors": 10,
  "collectRequests": 10
}
```

### Métodos básicos

El wrapper proporciona métodos HTTP `get`, `head`, `put`, `post`, `delete`.

Los métodos `get` y `head` tienen la firma `(url, params, options)`; mientras que los métodos `put`, `post` y `delete` tienen la firma `(url, data, params, options)`.

El argumento `params` representa los parámetros de la cadena de consulta, mientras que `options` son las configuraciones de la solicitud.

Actualmente se admiten 4 configuraciones de solicitud:

- `concurrentId (string)`: id de solicitud opcional
- `collectRequest (bool)`: bandera opcional que indica si la solicitud debe ser registrada (por defecto `true`)
- `requestConfig (object)`: configuración opcional con los parámetros de solicitud personalizados
- `headers (object)`: objeto opcional con encabezados de solicitud personalizados.
- `timeout (number)`: tiempo de espera de solicitud opcional
- `onDownloadProgress (function)`: callback opcional para procesar el progreso de descarga de archivos

### Encabezados

El método `setDefaultHeader({name (string), value (string), methods (array)})` permite añadir un encabezado de solicitud predeterminado.

Los argumentos `name` y `value` son obligatorios, el argumento opcional `methods` especifica todos los métodos que obtendrán esos encabezados predeterminados (por defecto, todos los métodos obtendrán esos encabezados).

### CSRF

El método `setCSRFToken` permite especificar el token CSRF, que se añadirá a todas las solicitudes `put`, `post` y `delete`.

### Solicitudes concurrentes

A veces es mejor cancelar la solicitud en vuelo si sus resultados ya no son necesarios. Para que esto suceda, se debe pasar a las `options` de la solicitud el `concurrentId`. Cuando ocurre la siguiente solicitud con el mismo `concurrentId`, la solicitud anterior con ese id será cancelada.

También se puede cancelar una solicitud manualmente invocando el método `cancelRequest(concurrentId)`.

### Recolección de solicitudes

Es posible configurar la recolección de solicitudes en el almacenamiento local utilizando la opción `collector`. Almacena todas las solicitudes y errores por separado. La siguiente `apiInstance` mantendrá las últimas 10 solicitudes (tanto exitosas como no) y los últimos 10 errores de solicitudes.

```javascript
const apiInstance = new API({
  collector: {
    collectErrors: 10,
    collectRequests: 10,
  },
});
```

Para obtener las solicitudes guardadas, hay que invocar el método `getCollectedRequests` que devuelve el objeto `{errors: [...], requests: [...]}`.

### Uso

El uso sugerido es subclasificar la clase base `AxiosWrapper`:

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

Cuando el parámetro `baseURL` se pasa a la configuración de `axios`, todos los nombres de ruta solicitados se añadirán a él.

```javascript
const apiInstance = new API({
  config: {
    baseURL: '/api/v2',
  },
});
```
