# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## インストール

```shell
npm install --save-dev @gravity-ui/illustrations
```

## 使用方法

### React

#### 準備

イラストのテーマを設定します。以下のいずれかの手順を実行してください。

##### 独自のカラーパレットでCSSトークンを定義する

アプリで以下のCSSトークンを定義します。

```scss
--gil-color-object-base: rgb(255, 190, 92);
--gil-color-object-accent-heavy: rgb(211, 101, 7);
--gil-color-object-hightlight: rgb(255, 216, 157);
--gil-color-shadow-over-object: rgb(211, 158, 80);
--gil-color-background-lines: rgb(140, 140, 140);
--gil-color-background-shapes: rgb(242, 242, 242);
--gil-color-object-accent-light: rgb(255, 255, 255);
--gil-color-object-danger: rgb(255, 0, 61);
```

##### SCSSでデフォルトのgravity-themeを使用したミックスインを使用する

さまざまなテーマでイラストのスタイリングに以下のミックスインを使用します。

```scss
@import '@gravity-ui/illustrations/styles/theme.scss';

.g-root {
  &_theme_light {
    @include g-illustrations-colors-light;
  }

  &_theme_light-hc {
    @include g-illustrations-colors-light-hc;
  }

  &_theme_dark {
    @include g-illustrations-colors-dark;
  }

  &_theme_dark-hc {
    @include g-illustrations-colors-dark-hc;
  }
}
```

##### 事前にgravityテーマがインストールされているプロジェクト向けの代替手段

または、プロジェクトに`@gravity-ui/uikit`が既にインストールされており、デフォルトテーマが使用されている場合は、プロジェクトのルートスタイルファイルに`styles.scss`をインポートするだけで済みます。

```scss
// 既存のgravityスタイル定義
import '@gravity-ui/uikit/styles/styles.css';
// その下にさらに1つインポートを追加するだけです
import '@gravity-ui/illustrations/styles/styles.scss';
```

#### コンポーネントの使用方法

```js
import NotFound from '@gravity-ui/illustrations/NotFound';
```

または

```js
import {NotFound} from '@gravity-ui/illustrations';
```

### SVG

> これには適切なローダーが必要になる場合があります

```js
import notFound from '@gravity-ui/illustrations/svgs/not-found-light.svg';
```

### 開発

新しいデザインに合わせてイラストを更新するには、ライトテーマのSVGファイル（`<this-repository-root>/svgs/<illustration-name>-light.svg`）の内容を変更し、次のコマンドを実行します。

```shell
npm run generate
```