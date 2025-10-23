# 🌍 Gravity-UI i18n Tools

이 저장소에는 Gravity-UI의 i18n(국제화)에 사용되는 공통 유틸리티, 라이브러리 및 플러그인이 포함되어 있습니다.

## 유용한 링크

- [데모 프로젝트](./example/README.md)

## 라이브러리

| 이름                                                    | 설명                                                         | 버전                                                |
|-------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| [i18n](./packages/i18n/README.md)                 | 경량 i18n 라이브러리입니다.                  |  <a href="https://npmjs.com/package/@gravity-ui/i18n-core"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-react](./packages/i18n-react/README.md)               | React 클라이언트 애플리케이션을 위한 i18n 라이브러리 (ICU 메시지 구문).              |  <a href="https://npmjs.com/package/@gravity-ui/i18n-react"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-react?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-node](./packages/i18n-node/README.md)                 | 서버 애플리케이션을 위한 i18n 라이브러리 (ICU 메시지 구문).                        |  <a href="https://npmjs.com/package/@gravity-ui/i18n-node"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-node?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [eslint-plugin-i18n](./packages/eslint-plugin-i18n/README.md) | i18n을 위한 ESLint 규칙입니다.                                       |  <a href="https://npmjs.com/package/@gravity-ui/eslint-plugin-i18n"><img src="https://img.shields.io/npm/v/@gravity-ui/eslint-plugin-i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-cli](./packages/i18n-cli/README.md)                   | 언어 파일 작업을 위한 도구입니다.                   |  <a href="https://npmjs.com/package/@gravity-ui/i18n-cli"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-cli?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-babel-plugin](./packages/i18n-babel-plugin/README.md) | 언어 파일 전달을 최적화하기 위한 Babel 플러그인입니다.           |  <a href="https://npmjs.com/package/@gravity-ui/i18n-babel-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-babel-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-optimize-plugin](./packages/i18n-optimize-plugin/README.md) | 언어 파일 전달을 최적화하기 위한 Webpack/Rspack 플러그인입니다. |  <a href="https://npmjs.com/package/@gravity-ui/i18n-optimize-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-optimize-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [vscode-extension](./packages/vscode-extension/README.md) | 로컬라이제이션 파일 생성을 위한 VS Code 확장 프로그램입니다. | |

## 개발

1. pnpm 설치

    ```bash
    npm i -g pnpm@9.12.3
    ```

1. 종속성 설치

    ```bash
    pnpm i
    ```

1. `nx`를 사용하여 명령어 실행

    ```bash
    # i18n-cli 패키지 빌드
    pnpm nx build @gravity-ui/i18n-cli

    # i18n-cli 패키지에 대한 타입 검사 실행
    pnpm nx typecheck @gravity-ui/i18n-cli

    # 모든 패키지에 대한 린트 실행
    pnpm nx run-many --target=lint --parallel
    ```