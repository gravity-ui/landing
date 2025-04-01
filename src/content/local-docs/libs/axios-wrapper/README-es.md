# Envoltorio Axios

Esta biblioteca proporciona un práctico envoltorio para Axios, añadiendo la cancelación automática de solicitudes simultáneas.
a sus características.

## Instalar

```shell
npm install --save-dev @gravity-ui/axios-wrapper
```

## API HTTP

### Parámetros del constructor

##### configuración [opcional]

La configuración de una `axios` instancia.

##### colector [opcional]

La configuración del recopilador de solicitudes es un objeto:

```json
{
  "collectErrors": 10,
  "collectRequests": 10
}
```

### Métodos básicos

Wrapper proporciona métodos http `get`, ,,, `head`. `put` `post` `delete`

Métodos `get` y `head` tienen la firma `(url, params, options)`; `put`, `post`, mientras que el `delete` método
tiene `(url, data, params, options)` firma.

El `params` argumento representa los parámetros de la cadena de consulta, mientras que `options` es una configuración de solicitud.

Actualmente se admiten 4 configuraciones de solicitud:

- `concurrentId (string)`: identificador de solicitud opcional
- `collectRequest (bool)`: indicador opcional, que indica si la solicitud debe ser de registro (predeterminado `true`)
- `requestConfig (object)`: configuración opcional con los parámetros de solicitud personalizados
- `headers (object)`: objeto opcional con encabezados de solicitud personalizados.
- `timeout (number)`: tiempo de espera de solicitud opcional
- `onDownloadProgress (function)`: llamada opcional para procesar el progreso de la descarga del archivo

### Cabeceras

El `setDefaultHeader({name (string), value (string), methods (array)})` método permite añadir un valor predeterminado
encabezado de solicitud.

Los argumentos `name` y `value` son obligatorios, el argumento opcional `methods` especifica todos los métodos que los obtienen
encabezados predeterminados (de forma predeterminada, todos los métodos obtendrán esos encabezados).

### CSRF

El `setCSRFToken` método permite especificar el token CSRF, que se agregará a todos, y `put` `post` `delete`
solicitudes.

### Solicitudes simultáneas

A veces es mejor cancelar la solicitud en vuelo si sus resultados ya no son necesarios. Para hacer esto
sucede, uno debe pasar para solicitar `options` la `concurrentId` identificación. Cuando la próxima solicitud con el mismo
`concurrentId` Si ocurre, la solicitud anterior con ese identificador se cancelará.

También se cancela una solicitud manualmente invocando el `cancelRequest(concurrentId)` método.

### Recopilación de solicitudes

Es posible configurar la recopilación de solicitudes en el almacenamiento local mediante la `collector` opción. Almacena
todas las solicitudes y errores por separado. Lo siguiente `apiInstance` mantendrá las 10 últimas solicitudes (ambas exitosas)
y no) y 10 últimas solicitudes erróneas.

```javascript
const apiInstance = new API({
  collector: {
    collectErrors: 10,
    collectRequests: 10,
  },
});
```

Para obtener las solicitudes guardadas, hay que invocar el `getCollectedRequests` método que devuelve el objeto
`{errors: [...], requests: [...]}`.

### Uso

El uso sugerido es subclasificar la `AxiosWrapper` clase base:

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

Cuando el `baseURL` parámetro se pase a la `axios` configuración, se le añadirán todos los nombres de ruta solicitados.

```javascript
const apiInstance = new API({
  config: {
    baseURL: '/api/v2',
  },
});
```
