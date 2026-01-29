# @gravity-ui/stylelint-config

Gravity UI 프로젝트를 위한 Stylelint 설정입니다.

## 요구 사항

- Node.js >= 20.x
- Stylelint 16.18.0
- PostCSS 8.x

## 설치

```
npm install --save-dev stylelint postcss @gravity-ui/stylelint-config
```

## 사용법

프로젝트 루트에 다음과 같은 내용으로 `.stylelintrc` 파일을 추가하세요:

```json
{
  "extends": "@gravity-ui/stylelint-config"
}
```

### Prettier

Prettier를 사용 중이라면, 추가 규칙을 포함하여 루트 설정을 확장하세요:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/prettier"]
}
```

### 순서

CSS 파일의 속성 순서를 정렬하고 싶다면, 추가 규칙을 포함하여 루트 설정을 확장하세요:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/order"]
}
```