# Creador de constructores de páginas

Una potente utilidad de línea de comandos para crear páginas estáticas a partir de configuraciones de YAML mediante el paquete [@gravity](https://github.com/gravity-ui/page-constructor) -ui/page-constructor. Consulte el [libro de cuentos del constructor de páginas para obtener detalles](https://preview.gravity-ui.com/page-constructor/) de configuración.

## Inicio rápido

1. **Paquete de instalación:**

```bash
npm install @gravity-ui/page-constructor-builder
```

2. **Agregue el comando de compilación a package.json:**

```json
{
  "scripts": {
    "build": "page-builder build"
  }
}
```

3. **Añadir archivos fuente:**

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

4. **Crea tus páginas:**

```bash
npm run build
```

5. **Abra los archivos HTML generados en su navegador:**

```bash
open dist/index.html
```

## Uso

### Comandos

#### `page-builder build`

Crea páginas a partir de configuraciones de YAML.

```bash
page-builder build [options]
```

**Opciones:**

- `-i, --entrada: <path>` Directorio de entrada que contiene archivos YAML (predeterminado:». /páginas «)
- `-o, --salida: <path>` Directorio de salida para los archivos creados (predeterminado:». /dist «)
- `-c, --configuración: <path>` Ruta del archivo de configuración (predeterminado:»). /page-builder.config.yml «)
- `--css: <files...>` Archivos CSS personalizados para incluir
- `--componentes: <path>` Directorio de componentes personalizados
- `--navegación: <path>` Archivo de datos de navegación
- `--activos: <path>` Directorio de activos estáticos para copiar
- `--tema: <theme>` Tema (luz)|oscuro) (predeterminado: «claro»)
- `--URL base: <url>` URL base del sitio
- `--minify`: Habilitar la minificación
- `--source-maps`: Generar mapas de origen
- `--watch`: Activar el modo reloj

### Configuración

Crea un `page-builder.config.yml` archivo en la raíz de tu proyecto:

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

### Configuración de página

Crea archivos YAML en tu directorio de páginas:

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

### Componentes personalizados

Crea componentes de React en tu directorio de componentes:

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

### Estilos personalizados

Agregue sus archivos CSS/SCSS personalizados:

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

### Activos estáticos

El constructor de páginas gestiona automáticamente los activos estáticos, como imágenes, iconos y otros archivos. Configure el directorio de activos en su archivo de configuración:

```yaml
# page-builder.config.yml
input: ./pages
output: ./dist
assets: ./assets # Assets directory to copy
```

**Estructura del directorio de activos:**

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

**Uso de activos en tus páginas:**

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

### Navegación

El constructor de páginas admite la configuración de navegación global que aparece en todas las páginas. La navegación se configura mediante un archivo YAML independiente.

#### Configuración de navegación

Crea un `navigation.yml` archivo en la raíz de tu proyecto (o especifica una ruta personalizada en tu configuración):

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

#### Anulación de navegación por página

Puedes anular la navegación de páginas específicas añadiendo una `navigation` sección directamente en el YAML de tu página:

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
