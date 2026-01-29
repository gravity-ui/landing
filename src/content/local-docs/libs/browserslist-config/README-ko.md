# Gravity UI 패키지 제품군 브라우저 목록 설정

## 호환 브라우저

호환 브라우저는 [browsersl.ist](https://browsersl.ist/#q=last%202%20major%20versions%20and%20last%202%20years%20and%20fully%20supports%20es6%20and%20%3E%200.05%25%0Anot%20dead%0Anot%20op_mini%20all%0Anot%20and_qq%20%3E%200%0Anot%20and_uc%20%3E%200%0AFirefox%20ESR%0AChrome%20%3E%200%20and%20last%202%20years%20and%20%3E%200.05%25%0ASafari%20%3E%200%20and%20last%202%20years%20and%20%3E%200.05%25%0AFirefox%20%3E%200%20and%20last%202%20years%20and%20%3E%200.01%25)에서 확인할 수 있습니다.

## 설치

```bash
npm i --save-dev @gravity-ui/browserslist-config
```

`package.json` 파일의 `browserslist` 섹션에 설정을 추가하세요:

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

이 패키지는 프로덕션용 브라우저 목록 버전을 제공합니다.