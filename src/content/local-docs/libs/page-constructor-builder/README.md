# Page Constructor Builder

A powerful command-line utility for building static pages from YAML configurations using the [@gravity-ui/page-constructor](https://github.com/gravity-ui/page-constructor) package. See [page-constructor storybook](https://preview.gravity-ui.com/page-constructor/) for configuration details.

## Quick Start

1. **Install package:**

```bash
npm install @gravity-ui/page-constructor-builder
```

2. **Add build command to package.json:**

```json
{
  "scripts": {
    "build": "page-builder build"
  }
}
```

3. **Add source files:**

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

4. **Build your pages:**

```bash
npm run build
```

5. **Open the generated HTML files in your browser:**

```bash
open dist/index.html
```

## Usage

### Commands

#### `page-builder build`

Build pages from YAML configurations.

```bash
page-builder build [options]
```

**Options:**

- `-i, --input <path>`: Input directory containing YAML files (default: "./pages")
- `-o, --output <path>`: Output directory for built files (default: "./dist")
- `-c, --config <path>`: Configuration file path (default: "./page-builder.config.yml")
- `--css <files...>`: Custom CSS files to include
- `--components <path>`: Custom components directory
- `--navigation <path>`: Navigation data file
- `--assets <path>`: Static assets directory to copy
- `--theme <theme>`: Theme (light|dark) (default: "light")
- `--base-url <url>`: Base URL for the site
- `--minify`: Enable minification
- `--source-maps`: Generate source maps
- `--watch`: Enable watch mode

### Configuration

Create a `page-builder.config.yml` file in your project root:

```yaml
input: ./pages
output: ./dist
assets: ./assets
favicon: logo.svg # Favicon file from assets or external URL
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

### Page Configuration

Create YAML files in your pages directory:

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

### Custom Components

Create React components in your components directory:

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

### Custom Styles

Add your custom CSS/SCSS files:

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

### Static Assets

The page constructor builder automatically handles static assets like images, icons, and other files. Configure the assets directory in your configuration file:

```yaml
# page-builder.config.yml
input: ./pages
output: ./dist
assets: ./assets # Assets directory to copy
```

**Assets Directory Structure:**

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

**Using Assets in Your Pages:**

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

The page constructor builder supports adding favicons to your static pages. You can specify either a local file from your assets directory or an external URL.

#### Configuration

Add the `favicon` option to your configuration file:

```yaml
# page-builder.config.yml
favicon: logo.svg # Local file from assets directory
# or
favicon: https://cdn.example.com/favicon.ico # External URL
```

#### Local Favicon Files

For local favicon files, the builder will:

- Automatically detect the file in your assets directory
- Copy it to the output directory
- Generate proper HTML `<link>` tags with correct MIME types

**Supported file formats:**

- **SVG** (recommended) - `image/svg+xml`
- **ICO** (classic) - `image/x-icon`
- **PNG** (modern) - `image/png`
- **JPG/JPEG** (acceptable) - `image/jpeg`
- **GIF** (animated) - `image/gif`

**Examples:**

```yaml
# page-builder.config.yml
favicon: logo.svg                    # File in assets/ directory
favicon: icons/favicon.ico           # File in assets/icons/ subdirectory
favicon: ./custom/path/favicon.png   # Custom path relative to project
favicon: /absolute/path/favicon.ico  # Absolute path
```

#### External Favicon URLs

You can also use external favicon URLs from CDNs or other domains:

```yaml
# page-builder.config.yml
favicon: https://cdn.example.com/favicon.ico
favicon: https://mysite.com/assets/logo.svg
```

#### Generated HTML

The builder automatically generates appropriate HTML tags based on the favicon type:

```html
<!-- For SVG favicons -->
<link rel="icon" type="image/svg+xml" href="assets/logo.svg" />

<!-- For ICO favicons (includes legacy browser support) -->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
<link rel="shortcut icon" href="assets/favicon.ico" />

<!-- For external URLs -->
<link rel="icon" href="https://example.com/favicon.ico" />
```

### Navigation

The page constructor builder supports global navigation configuration that appears on all pages. Navigation is configured through a separate YAML file.

#### Navigation Configuration

Create a `navigation.yml` file in your project root (or specify a custom path in your config):

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

#### Per-Page Navigation Override

You can override navigation for specific pages by adding a `navigation` section directly in your page YAML:

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
