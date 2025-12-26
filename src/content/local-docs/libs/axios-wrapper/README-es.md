# Axios Wrapper
Esta librería proporciona un envoltorio conveniente para Axios, añadiendo la cancelación automática de peticiones concurrentes a sus funcionalidades.

## Instalación

```shell
npm install --save-dev @gravity-ui/axios-wrapper
```

## API HTTP

### Parámetros del constructor

##### config [opcional]
La configuración de una instancia de `axios`.

##### collector [opcional]
La configuración del colector de peticiones es un objeto:
```json
{
    "collectErrors": 10,
    "collectRequests": 10
}
```

### Métodos básicos
El envoltorio proporciona los métodos HTTP `get`, `head`, `put`, `post`, `delete`.

Los métodos `get` y `head` tienen la firma `(url, params, options)`; `put`, `post`, mientras que el método `delete`
tiene la firma `(url, data, params, options)`.

El argumento `params` representa los parámetros de la cadena de consulta, mientras que `options` son los ajustes de la petición.

Actualmente se admiten 4 ajustes de petición:
- `concurrentId (string)`: ID de petición opcional
- `collectRequest (bool)`: indicador opcional que indica si la petición debe ser registrada (por defecto `true`)
- `requestConfig (object)`: configuración opcional con parámetros de petición personalizados
- `headers (object)`: objeto opcional con cabeceras de petición personalizadas.
- `timeout (number)`: tiempo de espera de petición opcional
- `onDownloadProgress (function)`: función de devolución de llamada opcional para procesar el progreso de la descarga de archivos

### Cabeceras
El método `setDefaultHeader({name (string), value (string), methods (array)})` permite añadir una cabecera de petición por defecto.

Los argumentos `name` y `value` son obligatorios, el argumento opcional `methods` especifica todos los métodos que recibirán estas cabeceras por defecto (por defecto, todos los métodos recibirán estas cabeceras).

### CSRF
El método `setCSRFToken` permite especificar un token CSRF, que se añadirá a todas las peticiones `put`, `post` y `delete`.

### Peticiones concurrentes
A veces es mejor cancelar una petición en curso si sus resultados ya no son necesarios. Para que esto ocurra, se debe pasar el ID `concurrentId` a las `options` de la petición. Cuando se produce la siguiente petición con el mismo `concurrentId`, la petición anterior con ese ID se cancelará.

También se puede cancelar una petición manualmente invocando el método `cancelRequest(concurrentId)`.

### Recopilación de peticiones
Es posible configurar la recopilación de peticiones en el almacenamiento local utilizando la opción `collector`. Almacena todas las peticiones y errores por separado. La siguiente instancia `apiInstance` conservará las 10 últimas peticiones (tanto exitosas como no) y los 10 últimos errores.
```javascript
const apiInstance = new API({
    collector: {
        collectErrors: 10,
        collectRequests: 10
    }
});
```

Para obtener las peticiones guardadas, hay que invocar el método `getCollectedRequests`, que devuelve el objeto
`{errors: [...], requests: [...]}`.

### Uso
El uso sugerido es heredar de la clase base `AxiosWrapper`:
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

Cuando se pasa el parámetro `baseURL` a la configuración de `axios`, todos los nombres de ruta solicitados se añadirán a él.
```javascript
const apiInstance = new API({
    config: {
        baseURL: '/api/v2'
    }
});
```