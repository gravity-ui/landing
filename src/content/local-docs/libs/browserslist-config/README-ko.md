# Gravity UI 패키지 제품군 브라우저 목록 설정

## 호환 브라우저

호환 브라우저는 [browsersl.ist](https://browsersl.ist/#q=baseline%20widely%20available%20on%202025-01-01%20with%20downstream)에서 확인할 수 있습니다.

## 설치

```bash
npm i --save-dev @gravity-ui/browserslist-config
```

`package.json`의 `browserslist` 섹션에 설정을 추가하세요:

```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config"
  ]
}
```

대상 사용자에 따라 추가 브라우저를 지정할 수 있습니다. 예를 들어:
```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config",
    "Chrome >= 100",
    "Firefox >= 100"
  ]
}
```

## 사용법

이 패키지는 프로덕션 버전의 브라우저 목록을 제공합니다.