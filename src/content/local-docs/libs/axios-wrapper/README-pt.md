# Axios Wrapper
Esta biblioteca fornece um wrapper conveniente em torno do Axios, adicionando cancelamento automático de requisições concorrentes
às suas funcionalidades.

## Instalar

```shell
npm install --save-dev @gravity-ui/axios-wrapper
```

## API HTTP

### Parâmetros do construtor

##### config [opcional]
A configuração de uma instância `axios`.

##### collector [opcional]
A configuração do coletor de requisições é um objeto:
```json
{
    "collectErrors": 10,
    "collectRequests": 10
}
```

### Métodos básicos
O wrapper fornece os métodos http `get`, `head`, `put`, `post`, `delete`.

Os métodos `get` e `head` têm a assinatura `(url, params, options)`; `put`, `post`, enquanto o método `delete`
tem a assinatura `(url, data, params, options)`.

O argumento `params` representa os parâmetros da string de consulta, enquanto `options` são as configurações da requisição.

Atualmente, 4 configurações de requisição são suportadas:
- `concurrentId (string)`: ID opcional da requisição
- `collectRequest (bool)`: flag opcional, indicando se a requisição deve ser registrada (padrão `true`)
- `requestConfig (object)`: configuração opcional com os parâmetros personalizados da requisição
- `headers (object)`: objeto opcional com cabeçalhos de requisição personalizados.
- `timeout (number)`: tempo limite opcional da requisição
- `onDownloadProgress (function)`: callback opcional para processar o progresso do download de arquivos

### Cabeçalhos
O método `setDefaultHeader({name (string), value (string), methods (array)})` permite adicionar um cabeçalho de requisição
padrão.

Os argumentos `name` e `value` são obrigatórios, o argumento opcional `methods` especifica todos os métodos que receberão esses
cabeçalhos padrão (por padrão, todos os métodos receberão esses cabeçalhos).

### CSRF
O método `setCSRFToken` permite especificar o token CSRF, que será adicionado a todas as requisições `put`, `post` e `delete`.

### Requisições concorrentes
Às vezes, é melhor cancelar uma requisição em andamento se seus resultados não forem mais necessários. Para que isso
aconteça, deve-se passar o ID `concurrentId` nas `options` da requisição. Quando uma nova requisição com o mesmo
`concurrentId` ocorre, a requisição anterior com esse ID será cancelada.

É possível cancelar uma requisição manualmente também, invocando o método `cancelRequest(concurrentId)`.

### Coleta de requisições
É possível configurar a coleta de requisições no armazenamento local usando a opção `collector`. Ela armazena
todas as requisições e erros separadamente. A seguinte `apiInstance` manterá as 10 últimas requisições (bem-sucedidas
ou não) e os 10 últimos erros.
```javascript
const apiInstance = new API({
    collector: {
        collectErrors: 10,
        collectRequests: 10
    }
});
```

Para obter as requisições salvas, deve-se invocar o método `getCollectedRequests`, que retorna o objeto
`{errors: [...], requests: [...]}`.

### Uso
O uso sugerido é criar uma subclasse da classe base `AxiosWrapper`:
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

Quando o parâmetro `baseURL` é passado na configuração do `axios`, todos os caminhos solicitados serão anexados a ele.
```javascript
const apiInstance = new API({
    config: {
        baseURL: '/api/v2'
    }
});
```