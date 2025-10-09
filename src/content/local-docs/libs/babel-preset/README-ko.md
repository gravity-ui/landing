# @gravity-ui/babel-preset

Gravity UI 프로젝트를 위한 Babel 프리셋

## 설치
```
npm install --save-dev @gravity-ui/babel-preset
```

## 사용법

### `.babelrc`를 통한 사용

```json5
{
  "presets": [
      "@gravity-ui/babel-preset",
      {
        "env": {modules: false}, // 기본값: {}
        "runtime": {useESModules: true}, // 기본값: {}
        "typescript": true, // 기본값: false
        "react": {runtime: "automatic"} // 기본값: {}
      }
  ]
}
```