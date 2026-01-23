# @gravity-ui/babel-preset

Gravity UI 프로젝트를 위한 Babel 프리셋

## 설치
```
npm install --save-dev @gravity-ui/babel-preset
```

## 사용법

### `.babelrc` 파일을 통한 설정

```json5
{
  "presets": [
      "@gravity-ui/babel-preset",
      {
        "env": {modules: false}, // 기본값은 {} 입니다.
        "runtime": {useESModules: true}, // 기본값은 {} 입니다.
        "typescript": true, // 기본값은 false 입니다.
        "react": {runtime: "automatic"} // 기본값은 {} 입니다.
      }
  ]
}
```