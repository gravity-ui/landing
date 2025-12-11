# Page Constructor Builder

一个强大的命令行工具，用于使用 [@gravity-ui/page-constructor](https://github.com/gravity-ui/page-constructor) 包从 YAML 配置构建静态页面。有关配置详情，请参阅 [page-constructor storybook](https://preview.gravity-ui.com/page-constructor/)。

## 快速入门

1. **安装包：**

```bash
npm install @gravity-ui/page-constructor-builder
```

2. **在 package.json 中添加构建命令：**

```json
{
  "scripts": {
    "build": "page-builder build"
  }
}
```

3. **添加源文件：**

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

4. **构建你的页面：**

```bash
npm run build
```

5. **在浏览器中打开生成的 HTML 文件：**

```bash
open dist/index.html
```

## 用法

### 命令

#### `page-builder build`

从 YAML 配置构建页面。

```bash
page-builder build [options]
```

**选项：**

- `-i, --input <path>`: 包含 YAML 文件的输入目录 (默认值: "./pages")
- `-o, --output <path>`: 构建文件的输出目录 (默认值: "./dist")
- `-c, --config <path>`: 配置文件路径 (默认值: "./page-builder.config.yml")
- `--css <files...>`: 要包含的自定义 CSS 文件
- `--components <path>`: 自定义组件目录
- `--navigation <path>`: 导航数据文件
- `--assets <path>`: 要复制的静态资源目录
- `--theme <theme>`: 主题 (light|dark) (默认值: "light")
- `--base-url <url>`: 站点的基础 URL
- `--minify`: 启用压缩
- `--source-maps`: 生成源映射
- `--watch`: 启用监视模式

### 配置

在项目根目录创建 `page-builder.config.yml` 文件：

```yaml
input: ./pages
output: ./dist
assets: ./assets
favicon: logo.svg # 来自 assets 或外部 URL 的图标文件
theme: light
baseUrl: https://mysite.com
minify: true
sourceMaps: false # 为调试生成源映射（会增加包大小）
css:
  - ./styles/main.css
  - ./styles/components.scss
components: ./components
navigation: ./navigation.yml
webpack:
  # 自定义 webpack 配置
```

### 页面配置

在你的 pages 目录中创建 YAML 文件：

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

  - type: CustomBlock # 你的自定义组件
    title: Custom Component
    content: This uses a custom component
```

### 自定义组件

在你的 components 目录中创建 React 组件：

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

### 自定义样式

添加你的自定义 CSS/SCSS 文件：

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

### 静态资源

Page constructor builder 会自动处理图片、图标和其他文件等静态资源。在配置文件中配置 assets 目录：

```yaml
# page-builder.config.yml
input: ./pages
output: ./dist
assets: ./assets # 要复制的资源目录
```

**资源目录结构：**

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

**在你的页面中使用资源：**

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

### Favicon

Page constructor builder 支持为你的静态页面添加 favicon。你可以指定一个来自 assets 目录的本地文件或一个外部 URL。

#### 配置

在配置文件中添加 `favicon` 选项：

```yaml
# page-builder.config.yml
favicon: logo.svg # 来自 assets 目录的本地文件
# 或者
favicon: https://cdn.example.com/favicon.ico # 外部 URL
```

#### 本地 Favicon 文件

对于本地 favicon 文件，构建器将：

- 自动检测 assets 目录中的文件
- 将其复制到输出目录
- 生成正确的 HTML `<link>` 标签，并带有正确的 MIME 类型

**支持的文件格式：**

- **SVG** (推荐) - `image/svg+xml`
- **ICO** (经典) - `image/x-icon`
- **PNG** (现代) - `image/png`
- **JPG/JPEG** (可接受) - `image/jpeg`
- **GIF** (动画) - `image/gif`

**示例：**

```yaml
# page-builder.config.yml
favicon: logo.svg                    # assets/ 目录下的文件
favicon: icons/favicon.ico           # assets/icons/ 子目录下的文件
favicon: ./custom/path/favicon.png   # 相对于项目根目录的自定义路径
favicon: /absolute/path/favicon.ico  # 绝对路径
```

#### 外部 Favicon URL

您也可以使用来自 CDN 或其他域的外部 favicon URL：

```yaml
# page-builder.config.yml
favicon: https://cdn.example.com/favicon.ico
favicon: https://mysite.com/assets/logo.svg
```

#### 生成的 HTML

构建器会根据 favicon 类型自动生成相应的 HTML 标签：

```html
<!-- 对于 SVG favicons -->
<link rel="icon" type="image/svg+xml" href="assets/logo.svg" />

<!-- 对于 ICO favicons (包括对旧版浏览器的支持) -->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
<link rel="shortcut icon" href="assets/favicon.ico" />

<!-- 对于外部 URL -->
<link rel="icon" href="https://example.com/favicon.ico" />
```

### 导航

页面构建器支持全局导航配置，该配置会显示在所有页面上。导航通过一个单独的 YAML 文件进行配置。

#### 导航配置

在项目根目录创建一个 `navigation.yml` 文件（或在您的配置文件中指定自定义路径）：

```yaml
# navigation.yml
logo:
  text: 您的网站名称
  url: 'index.html'
  icon: 'assets/logo.svg'

header:
  leftItems:
    - text: 首页
      url: 'index.html'
      type: 'link'
    - text: 关于
      url: 'about.html'
      type: 'link'
    - text: 文档
      url: 'https://external-site.com/docs'
      type: 'link'
  rightItems:
    - text: GitHub
      url: 'https://github.com/your-repo'
      type: 'link'
    - text: 联系
      url: 'contact.html'
      type: 'link'

footer:
  leftItems:
    - text: 隐私政策
      url: 'privacy.html'
      type: 'link'
  rightItems:
    - text: © 2024 您的公司
      type: 'text'
```

#### 每页导航覆盖

您可以通过在页面 YAML 中直接添加 `navigation` 部分来覆盖特定页面的导航：

```yaml
# pages/special-page.yml
meta:
  title: 特殊页面

navigation:
  logo:
    text: 特殊网站
    url: 'index.html'
  header:
    leftItems:
      - text: 返回主页
        url: 'index.html'
        type: 'link'

blocks:
  - type: header-block
    title: 此页面具有自定义导航
```

### 分析配置

将 `analytics` 字段添加到您的 `page-builder.config.yml`：

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