# Page Constructor Builder

[@gravity-ui/page-constructor](https://github.com/gravity-ui/page-constructor) 패키지를 사용하여 YAML 설정을 기반으로 정적 페이지를 빌드하는 강력한 명령줄 유틸리티입니다. 설정에 대한 자세한 내용은 [page-constructor storybook](https://preview.gravity-ui.com/page-constructor/)을 참조하세요.

## 빠른 시작

1. **패키지 설치:**

```bash
npm install @gravity-ui/page-constructor-builder
```

2. **package.json에 빌드 명령 추가:**

```json
{
  "scripts": {
    "build": "page-builder build"
  }
}
```

3. **소스 파일 추가:**

`page-builder.config.yml`:

```yaml
input: ./pages
output: ./dist
assets: ./assets
favicon: logo.svg
theme: light
minify: true
```

`pages/index.yml`:

```yaml
meta:
  title: Hello, World
  description: A simple page constructor page

blocks:
  - type: header-block
    title: Hello, World
    description: |
      Build beautiful static pages from **YAML configurations** using the power of 
      [@gravity-ui/page-constructor](https://github.com/gravity-ui/page-constructor).
    background:
      color: '#f8f9fa'
```

4. **페이지 빌드:**

```bash
npm run build
```

5. **생성된 HTML 파일을 브라우저에서 열기:**

```bash
open dist/index.html
```

## 사용법

### 명령

#### `page-builder build`

YAML 설정을 사용하여 페이지를 빌드합니다.

```bash
page-builder build [options]
```

**옵션:**

- `-i, --input <path>`: YAML 파일을 포함하는 입력 디렉토리 (기본값: "./pages")
- `-o, --output <path>`: 빌드된 파일의 출력 디렉토리 (기본값: "./dist")
- `-c, --config <path>`: 설정 파일 경로 (기본값: "./page-builder.config.yml")
- `--css <files...>`: 포함할 사용자 정의 CSS 파일
- `--components <path>`: 사용자 정의 컴포넌트 디렉토리
- `--navigation <path>`: 네비게이션 데이터 파일
- `--assets <path>`: 복사할 정적 에셋 디렉토리
- `--theme <theme>`: 테마 (light|dark) (기본값: "light")
- `--base-url <url>`: 사이트의 기본 URL
- `--minify`: 최소화 활성화
- `--source-maps`: 소스 맵 생성
- `--watch`: 감시 모드 활성화

### 설정

프로젝트 루트에 `page-builder.config.yml` 파일을 생성합니다:

```yaml
input: ./pages
output: ./dist
assets: ./assets
favicon: logo.svg # 에셋 또는 외부 URL의 파비콘 파일
theme: light
baseUrl: https://mysite.com
minify: true
sourceMaps: false # 디버깅을 위한 소스 맵 생성 (번들 크기 증가)
css:
  - ./styles/main.css
  - ./styles/components.scss
components: ./components
navigation: ./navigation.yml
webpack:
  # 사용자 정의 webpack 설정
```

### 페이지 설정

페이지 디렉토리에 YAML 파일을 생성합니다:

```yaml
# pages/index.yml
meta:
  title: Welcome to My Site
  description: This is the homepage of my awesome site

blocks:
  - type: header-block
    title: Welcome!
    description: This is a **header block** with markdown support
    background:
      color: '#f0f0f0'

  - type: content-block
    title: About Us
    text: |
      This is a content block with multiple lines of text.

      You can use **markdown** formatting here.

  - type: CustomBlock # Your custom component
    title: Custom Component
    content: This uses a custom component
```

### 사용자 정의 컴포넌트

컴포넌트 디렉토리에 React 컴포넌트를 생성합니다:

```typescript
// components/CustomBlock.tsx
import React from 'react';

interface CustomBlockProps {
  title: string;
  content: string;
  className?: string;
}

export const CustomBlock: React.FC<CustomBlockProps> = ({
  title,
  content,
  className = ''
}) => {
  return (
    <div className={`custom-block ${className}`}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default CustomBlock;
```

### 사용자 정의 스타일

사용자 정의 CSS/SCSS 파일을 추가합니다:

```css
/* styles/main.css */
.custom-block {
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  background: #f5f5f5;
  border-left: 4px solid #007acc;
}

.custom-block h2 {
  margin-top: 0;
  color: #007acc;
}
```

### 정적 에셋

페이지 생성기 빌더는 이미지, 아이콘 및 기타 파일과 같은 정적 에셋을 자동으로 처리합니다. 설정 파일에서 에셋 디렉토리를 구성합니다:

```yaml
# page-builder.config.yml
input: ./pages
output: ./dist
assets: ./assets # 복사할 에셋 디렉토리
```

**에셋 디렉토리 구조:**

```
assets/
├── images/
│   ├── hero-banner.jpg
│   └── about-photo.png
├── icons/
│   ├── logo.svg
│   └── social-icons.svg
└── documents/
    └── brochure.pdf
```

**페이지에서 에셋 사용:**

```yaml
# pages/index.yml
blocks:
  - type: header-block
    title: Welcome
    description: Check out our amazing content
    background:
      image: assets/images/hero-banner.jpg

  - type: media-block
    title: About Us
    media:
      - type: image
        src: assets/images/about-photo.png
        alt: Our team photo
```

### 파비콘

페이지 생성기 빌더는 정적 페이지에 파비콘을 추가하는 것을 지원합니다. 에셋 디렉토리의 로컬 파일 또는 외부 URL을 지정할 수 있습니다.

#### 설정

설정 파일에 `favicon` 옵션을 추가합니다:

```yaml
# page-builder.config.yml
favicon: logo.svg # 에셋 디렉토리의 로컬 파일
# 또는
favicon: https://cdn.example.com/favicon.ico # 외부 URL
```

#### 로컬 파비콘 파일

로컬 파비콘 파일의 경우 빌더는 다음을 수행합니다:

- 에셋 디렉토리에서 파일을 자동으로 감지합니다.
- 출력 디렉토리로 복사합니다.
- 올바른 MIME 유형으로 올바른 HTML `<link>` 태그를 생성합니다.

**지원되는 파일 형식:**

- **SVG** (권장) - `image/svg+xml`
- **ICO** (클래식) - `image/x-icon`
- **PNG** (모던) - `image/png`
- **JPG/JPEG** (허용) - `image/jpeg`
- **GIF** (애니메이션) - `image/gif`

**예시:**

```yaml
# page-builder.config.yml
favicon: logo.svg                    # assets/ 디렉토리 내 파일
favicon: icons/favicon.ico           # assets/icons/ 하위 디렉토리 내 파일
favicon: ./custom/path/favicon.png   # 프로젝트 상대 경로
favicon: /absolute/path/favicon.ico  # 절대 경로
```

#### 외부 파비콘 URL

CDN 또는 다른 도메인의 외부 파비콘 URL도 사용할 수 있습니다.

```yaml
# page-builder.config.yml
favicon: https://cdn.example.com/favicon.ico
favicon: https://mysite.com/assets/logo.svg
```

#### 생성된 HTML

빌더는 파비콘 유형에 따라 적절한 HTML 태그를 자동으로 생성합니다.

```html
<!-- SVG 파비콘의 경우 -->
<link rel="icon" type="image/svg+xml" href="assets/logo.svg" />

<!-- ICO 파비콘의 경우 (레거시 브라우저 지원 포함) -->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
<link rel="shortcut icon" href="assets/favicon.ico" />

<!-- 외부 URL의 경우 -->
<link rel="icon" href="https://example.com/favicon.ico" />
```

### 네비게이션

페이지 빌더는 모든 페이지에 표시되는 전역 네비게이션 구성을 지원합니다. 네비게이션은 별도의 YAML 파일을 통해 구성됩니다.

#### 네비게이션 구성

프로젝트 루트에 `navigation.yml` 파일을 생성하거나 (또는 설정에서 사용자 지정 경로 지정) 합니다.

```yaml
# navigation.yml
logo:
  text: 귀하의 사이트 이름
  url: 'index.html'
  icon: 'assets/logo.svg'

header:
  leftItems:
    - text: 홈
      url: 'index.html'
      type: 'link'
    - text: 소개
      url: 'about.html'
      type: 'link'
    - text: 문서
      url: 'https://external-site.com/docs'
      type: 'link'
  rightItems:
    - text: GitHub
      url: 'https://github.com/your-repo'
      type: 'link'
    - text: 문의
      url: 'contact.html'
      type: 'link'

footer:
  leftItems:
    - text: 개인정보처리방침
      url: 'privacy.html'
      type: 'link'
  rightItems:
    - text: © 2024 귀하의 회사
      type: 'text'
```

#### 페이지별 네비게이션 재정의

페이지 YAML에 `navigation` 섹션을 직접 추가하여 특정 페이지의 네비게이션을 재정의할 수 있습니다.

```yaml
# pages/special-page.yml
meta:
  title: 특별 페이지

navigation:
  logo:
    text: 특별 사이트
    url: 'index.html'
  header:
    leftItems:
      - text: 메인으로 돌아가기
        url: 'index.html'
        type: 'link'

blocks:
  - type: header-block
    title: 이 페이지는 사용자 지정 네비게이션을 가지고 있습니다
```

### 분석 구성

`page-builder.config.yml`에 `analytics` 필드를 추가합니다.

```yaml
analytics: ./analytics.js
```

`analytics.js`:

```javascript
module.exports = {
  sendEvents: (events) => {
    /* ... */
  },
  autoEvents: true,
};
```