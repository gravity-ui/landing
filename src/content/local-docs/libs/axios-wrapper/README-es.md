# Axios Wrapper
Esta biblioteca proporciona una envoltura conveniente alrededor de Axios, añadiendo la cancelación automática de solicitudes concurrentes a sus características.

## Instalar

```shell
npm install --save-dev @gravity-ui/axios-wrapper
```

## API HTTP

### Parámetros del constructor

##### config [opcional]
La configuración de una instancia de `axios`.

##### collector [opcional]
La configuración del colector de solicitudes es un objeto:
```json
{
    "collectErrors": 10,
    "collectRequests": 10
}
```

### Métodos básicos
La envoltura proporciona los métodos http `get`, `head`, `put`, `post`, `delete`.

Los métodos `get` y `head` tienen la firma `(url, params, options)`; `put`, `post`, mientras que el método `delete`
tiene la firma `(url, data, params, options)`.

El argumento `params` se refiere a los parámetros de la cadena de consulta, mientras que `options` son la configuración de la solicitud.

Actualmente se admiten 4 configuraciones de solicitud:
- `concurrentId (string)`: ID de solicitud opcional
- `collectRequest (bool)`: indicador opcional que indica si la solicitud debe ser registrada (por defecto `true`)
- `requestConfig (object)`: configuración opcional con parámetros de solicitud personalizados
- `headers (object)`: objeto opcional con encabezados de solicitud personalizados.
- `timeout (number)`: tiempo de espera de solicitud opcional
- `onDownloadProgress (function)`: función de devolución de llamada opcional para procesar el progreso de la descarga de archivos

### Encabezados
El método `setDefaultHeader({name (string), value (string), methods (array)})` permite añadir un encabezado de solicitud predeterminado.

Los argumentos `name` y `value` son obligatorios, el argumento opcional `methods` especifica todos los métodos que recibirán esos encabezados predeterminados (por defecto, todos los métodos recibirán esos encabezados).

### CSRF
El método `setCSRFToken` permite especificar un token CSRF, que se añadirá a todas las solicitudes `put`, `post` y `delete`.

### Solicitudes concurrentes
A veces es mejor cancelar una solicitud en curso si sus resultados ya no son necesarios. Para que esto suceda, se debe pasar el ID `concurrentId` a las `options` de la solicitud. Cuando se produce la siguiente solicitud con el mismo `concurrentId`, la solicitud anterior con ese ID se cancelará.

También se puede cancelar una solicitud manualmente invocando el método `cancelRequest(concurrentId)`.

### Recopilación de solicitudes
Es posible configurar la recopilación de solicitudes en el almacenamiento local utilizando la opción `collector`. Almacena todas las solicitudes y errores por separado. La siguiente `apiInstance` conservará las 10 últimas solicitudes (tanto exitosas como no) y los 10 últimos errores.
```javascript
const apiInstance = new API({
    collector: {
        collectErrors: 10,
        collectRequests: 10
    }
});
```

Para obtener las solicitudes guardadas, hay que invocar el método `getCollectedRequests`, que devuelve el objeto `{errors: [...], requests: [...]}`.

### Uso
El uso sugerido es crear una subclase de la clase base `AxiosWrapper`:
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

Cuando se pasa el parámetro `baseURL` a la configuración de `axios`, todas las rutas solicitadas se añadirán a él.
```javascript
const apiInstance = new API({
    config: {
        baseURL: '/api/v2'
    }
});
```