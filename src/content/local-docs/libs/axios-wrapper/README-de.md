# Axios Wrapper
Diese Bibliothek bietet einen praktischen Wrapper für Axios, der unter anderem die automatische Abbrechung gleichzeitiger Anfragen hinzufügt.

## Installation

```shell
npm install --save-dev @gravity-ui/axios-wrapper
```

## HTTP API

### Konstruktorparameter

##### config [optional]
Die Konfiguration einer `axios`-Instanz.

##### collector [optional]
Die Konfiguration des Anfragensammlers ist ein Objekt:
```json
{
    "collectErrors": 10,
    "collectRequests": 10
}
```

### Grundlegende Methoden
Der Wrapper bietet die HTTP-Methoden `get`, `head`, `put`, `post`, `delete`.

Die Methoden `get` und `head` haben die Signatur `(url, params, options)`; `put`, `post` und die `delete`-Methode haben die Signatur `(url, data, params, options)`.

Das Argument `params` steht für Query-String-Parameter, während `options` eine Anfrageseinstellung ist.

Derzeit werden 4 Anfrageseinstellungen unterstützt:
- `concurrentId (string)`: optionale Anfrage-ID
- `collectRequest (bool)`: optionales Flag, das angibt, ob die Anfrage protokolliert werden soll (Standard `true`)
- `requestConfig (object)`: optionales Konfigurationsobjekt mit benutzerdefinierten Anfrageparametern
- `headers (object)`: optionales Objekt mit benutzerdefinierten Anfrageheadern.
- `timeout (number)`: optionales Timeout für die Anfrage
- `onDownloadProgress (function)`: optionale Callback-Funktion zur Verarbeitung des Fortschritts beim Herunterladen von Dateien

### Header
Die Methode `setDefaultHeader({name (string), value (string), methods (array)})` ermöglicht das Hinzufügen eines Standard-Anfrageheaders.

Die Argumente `name` und `value` sind erforderlich. Das optionale Argument `methods` gibt alle Methoden an, die diese Standard-Header erhalten (standardmäßig erhalten alle Methoden diese Header).

### CSRF
Die Methode `setCSRFToken` ermöglicht die Angabe eines CSRF-Tokens, das zu allen `put`, `post` und `delete`-Anfragen hinzugefügt wird.

### Gleichzeitige Anfragen
Manchmal ist es besser, eine laufende Anfrage abzubrechen, wenn ihre Ergebnisse nicht mehr benötigt werden. Um dies zu erreichen, sollte der `concurrentId` in den `options` der Anfrage übergeben werden. Wenn eine weitere Anfrage mit derselben `concurrentId` erfolgt, wird die vorherige Anfrage mit dieser ID abgebrochen.

Eine Anfrage kann auch manuell abgebrochen werden, indem die Methode `cancelRequest(concurrentId)` aufgerufen wird.

### Anfragen sammeln
Es ist möglich, das Sammeln von Anfragen im lokalen Speicher über die Option `collector` einzurichten. Dabei werden alle Anfragen und Fehler separat gespeichert. Die folgende `apiInstance` speichert die 10 letzten Anfragen (sowohl erfolgreiche als auch nicht erfolgreiche) und die 10 letzten fehlerhaften Anfragen.
```javascript
const apiInstance = new API({
    collector: {
        collectErrors: 10,
        collectRequests: 10
    }
});
```

Um gespeicherte Anfragen abzurufen, muss die Methode `getCollectedRequests` aufgerufen werden, die das Objekt `{errors: [...], requests: [...]}` zurückgibt.

### Verwendung
Die empfohlene Verwendung ist die Ableitung der Basisklasse `AxiosWrapper`:
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

Wenn der Parameter `baseURL` in der `axios`-Konfiguration übergeben wird, werden alle angeforderten Pfadnamen daran angehängt.
```javascript
const apiInstance = new API({
    config: {
        baseURL: '/api/v2'
    }
});
```