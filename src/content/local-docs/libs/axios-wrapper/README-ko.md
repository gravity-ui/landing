# Axios Wrapper
이 라이브러리는 Axios를 편리하게 래핑하여 동시 요청 자동 취소 기능을 추가합니다.

## 설치

```shell
npm install --save-dev @gravity-ui/axios-wrapper
```

## HTTP API

### 생성자 매개변수

##### config [선택 사항]
`axios` 인스턴스의 설정입니다.

##### collector [선택 사항]
요청 수집기의 설정은 다음과 같은 객체입니다:
```json
{
    "collectErrors": 10,
    "collectRequests": 10
}
```

### 기본 메서드
래퍼는 `get`, `head`, `put`, `post`, `delete` HTTP 메서드를 제공합니다.

`get` 및 `head` 메서드는 `(url, params, options)` 시그니처를 가지며, `put`, `post`, `delete` 메서드는
`(url, data, params, options)` 시그니처를 가집니다.

`params` 인자는 쿼리 문자열 매개변수를 나타내고, `options`는 요청 설정을 의미합니다.

현재 4가지 요청 설정이 지원됩니다:
- `concurrentId (string)`: 선택적 요청 ID
- `collectRequest (bool)`: 선택적 플래그로, 요청을 로깅할지 여부를 나타냅니다 (기본값 `true`).
- `requestConfig (object)`: 사용자 정의 요청 매개변수를 포함하는 선택적 설정
- `headers (object)`: 사용자 정의 요청 헤더를 포함하는 선택적 객체입니다.
- `timeout (number)`: 선택적 요청 타임아웃
- `onDownloadProgress (function)`: 파일 다운로드 진행 상황 처리를 위한 선택적 콜백

### 헤더
`setDefaultHeader({name (string), value (string), methods (array)})` 메서드를 사용하여 기본 요청 헤더를 추가할 수 있습니다.

`name` 및 `value` 인자는 필수이며, 선택적 인자인 `methods`는 해당 기본 헤더를 받을 모든 메서드를 지정합니다 (기본적으로 모든 메서드가 해당 헤더를 받습니다).

### CSRF
`setCSRFToken` 메서드를 사용하여 CSRF 토큰을 지정할 수 있으며, 이 토큰은 모든 `put`, `post`, `delete` 요청에 추가됩니다.

### 동시 요청
결과가 더 이상 필요하지 않은 경우 진행 중인 요청을 취소하는 것이 더 나을 때가 있습니다. 이를 위해 요청의 `options`에 `concurrentId`를 전달해야 합니다. 동일한 `concurrentId`로 다음 요청이 발생하면 해당 ID를 가진 이전 요청이 취소됩니다.

`cancelRequest(concurrentId)` 메서드를 호출하여 요청을 수동으로 취소할 수도 있습니다.

### 요청 수집
`collector` 옵션을 사용하여 로컬 스토리지에 요청을 수집하도록 설정할 수 있습니다. 모든 요청과 오류를 별도로 저장합니다. 다음 `apiInstance`는 마지막 10개의 요청(성공 및 실패 모두)과 마지막 10개의 오류 요청을 유지합니다.
```javascript
const apiInstance = new API({
    collector: {
        collectErrors: 10,
        collectRequests: 10
    }
});
```

저장된 요청을 가져오려면 `getCollectedRequests` 메서드를 호출해야 하며, 이 메서드는 `{errors: [...], requests: [...]}` 객체를 반환합니다.

### 사용법
기본 `AxiosWrapper` 클래스를 서브클래싱하는 것이 권장됩니다:
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

`axios` 설정에 `baseURL` 매개변수가 전달되면, 요청된 모든 경로 이름이 해당 `baseURL`에 추가됩니다.
```javascript
const apiInstance = new API({
    config: {
        baseURL: '/api/v2'
    }
});
```