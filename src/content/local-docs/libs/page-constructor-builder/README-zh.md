# Page Constructor Builder

一个强大的命令行实用程序，用于使用 [@gravity](https://github.com/gravity-ui/page-constructor) -ui/page-constructor 包从 YAML 配置中构建静态页面。有关配置的详细信息， [请参阅页面构造器故事书](https://preview.gravity-ui.com/page-constructor/)。

## 快速入门

1.**安装软件包：**

```bash
npm install @gravity-ui/page-constructor-builder
```

2.**向 package.json 添加编译命令：**

```json
{
  "scripts": {
    "build": "page-builder build"
  }
}
```

3.**添加源文件：**

`page-builder.config.yml`:

```yaml
input: ./pages
output: ./dist
assets: ./assets
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

4.**创建您的页面：**

```bash
npm run build
```

5.**在浏览器中打开生成的 HTML 文件：**

```bash
open dist/index.html
```

## 用法

### Commands

#### `page-builder build`

使用 YAML 配置构建页面。

```bash
page-builder build [options]
```

**选项：**

- `-i，-- <path>` 输入：包含 YAML 文件的输入目录（默认值：”。/页面 “)
- `-o，-- <path>` 输出：已生成文件的输出目录（默认值：”。/dist “)
- `-c，-- <path>` config：配置文件路径（默认值：”。/page-builder.config.yml “)
- `--css <files...>`:要包含的自定义 CSS 文件
- `--组件 <path>`：自定义组件目录
- `--导航 <path>`：导航数据文件
- `--资产 <path>`：要复制的静态资产目录
- `--主题 <theme>`：主题（灯光）|深色）（默认值：“浅色”）
- `--基本网址 <url>`：该网站的基本 URL
- `--minify`:启用缩小
- `--source-maps`:生成源地图
- `--watch`:启用监视模式

### 配置

在你的项目根目录下创建一个 `page-builder.config.yml` 文件：

```yaml
input: ./pages
output: ./dist
assets: ./assets
theme: light
baseUrl: https://mysite.com
minify: true
sourceMaps: false # Generate source maps for debugging (increases bundle size)
css:
  - ./styles/main.css
  - ./styles/components.scss
components: ./components
navigation: ./navigation.yml
webpack:
  # Custom webpack configuration
```

### 页面配置

在你的页面目录中创建 YAML 文件：

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

### 自定义组件

在你的组件目录中创建 React 组件：

```typescript
// components/CustomBlock.tsx
import React from 'react';

interface CustomBlockProps {
  title: string;
  content: string;
  className?: string;
}

export const CustomBlock: React.FC<CustomBlockProps> = ({title, content, className = ''}) => {
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

添加您的自定义 CSS/SCSS 文件：

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

### 静态资产

页面构造器生成器会自动处理静态资产，例如图像、图标和其他文件。在配置文件中配置资产目录：

```yaml
# page-builder.config.yml
input: ./pages
output: ./dist
assets: ./assets # Assets directory to copy
```

**资产目录结构：**

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

**在页面中使用资产：**

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

### 导航

页面构造器生成器支持显示在所有页面上的全局导航配置。导航是通过单独的 YAML 文件配置的。

#### 导航配置

在项目根目录中创建 `navigation.yml` 文件（或在配置中指定自定义路径）：

```yaml
# navigation.yml
logo:
  text: Your Site Name
  url: 'index.html'
  icon: 'assets/logo.svg'

header:
  leftItems:
    - text: Home
      url: 'index.html'
      type: 'link'
    - text: About
      url: 'about.html'
      type: 'link'
    - text: Documentation
      url: 'https://external-site.com/docs'
      type: 'link'
  rightItems:
    - text: GitHub
      url: 'https://github.com/your-repo'
      type: 'link'
    - text: Contact
      url: 'contact.html'
      type: 'link'

footer:
  leftItems:
    - text: Privacy Policy
      url: 'privacy.html'
      type: 'link'
  rightItems:
    - text: © 2024 Your Company
      type: 'text'
```

#### 每页导航覆盖

您可以通过直接在页面中添加分 `navigation` 区来覆盖特定页面的导航 YAML：

```yaml
# pages/special-page.yml
meta:
  title: Special Page

navigation:
  logo:
    text: Special Site
    url: 'index.html'
  header:
    leftItems:
      - text: Back to Main
        url: 'index.html'
        type: 'link'

blocks:
  - type: header-block
    title: This page has custom navigation
```
