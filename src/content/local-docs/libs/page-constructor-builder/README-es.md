# Page Constructor Builder

Una potente utilidad de línea de comandos para construir páginas estáticas a partir de configuraciones YAML utilizando el paquete [@gravity-ui/page-constructor](https://github.com/gravity-ui/page-constructor). Consulta [page-constructor storybook](https://preview.gravity-ui.com/page-constructor/) para obtener detalles de configuración.

## Inicio Rápido

1. **Instalar paquete:**

```bash
npm install @gravity-ui/page-constructor-builder
```

2. **Añadir comando de construcción a package.json:**

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
favicon: logo.svg
theme: light
minify: true
```

`pages/index.yml`:

```yaml
meta:
  title: Hola, Mundo
  description: Una página simple de constructor de páginas

blocks:
  - type: header-block
    title: Hola, Mundo
    description: |
      Crea páginas estáticas atractivas a partir de **configuraciones YAML** utilizando la potencia de
      [@gravity-ui/page-constructor](https://github.com/gravity-ui/page-constructor).
    background:
      color: '#f8f9fa'
```

4. **Construir tus páginas:**

```bash
npm run build
```

5. **Abrir los archivos HTML generados en tu navegador:**

```bash
open dist/index.html
```

## Uso

### Comandos

#### `page-builder build`

Construye páginas a partir de configuraciones YAML.

```bash
page-builder build [opciones]
```

**Opciones:**

- `-i, --input <ruta>`: Directorio de entrada que contiene archivos YAML (por defecto: "./pages")
- `-o, --output <ruta>`: Directorio de salida para los archivos construidos (por defecto: "./dist")
- `-c, --config <ruta>`: Ruta del archivo de configuración (por defecto: "./page-builder.config.yml")
- `--css <archivos...>`: Archivos CSS personalizados para incluir
- `--components <ruta>`: Directorio de componentes personalizados
- `--navigation <ruta>`: Archivo de datos de navegación
- `--assets <ruta>`: Directorio de activos estáticos para copiar
- `--theme <tema>`: Tema (light|dark) (por defecto: "light")
- `--base-url <url>`: URL base para el sitio
- `--minify`: Habilitar minificación
- `--source-maps`: Generar mapas de origen
- `--watch`: Habilitar modo de observación

### Configuración

Crea un archivo `page-builder.config.yml` en la raíz de tu proyecto:

```yaml
input: ./pages
output: ./dist
assets: ./assets
favicon: logo.svg # Archivo favicon desde assets o URL externa
theme: light
baseUrl: https://mysite.com
minify: true
sourceMaps: false # Generar mapas de origen para depuración (aumenta el tamaño del paquete)
css:
  - ./styles/main.css
  - ./styles/components.scss
components: ./components
navigation: ./navigation.yml
webpack:
  # Configuración personalizada de webpack
```

### Configuración de Página

Crea archivos YAML en tu directorio de páginas:

```yaml
# pages/index.yml
meta:
  title: Bienvenido a Mi Sitio
  description: Esta es la página de inicio de mi increíble sitio

blocks:
  - type: header-block
    title: ¡Bienvenido!
    description: Este es un **bloque de encabezado** con soporte para markdown
    background:
      color: '#f0f0f0'

  - type: content-block
    title: Sobre Nosotros
    text: |
      Este es un bloque de contenido con múltiples líneas de texto.

      Puedes usar formato **markdown** aquí.

  - type: CustomBlock # Tu componente personalizado
    title: Componente Personalizado
    content: Esto utiliza un componente personalizado
```

### Componentes Personalizados

Crea componentes React en tu directorio de componentes:

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

### Estilos Personalizados

Añade tus archivos CSS/SCSS personalizados:

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

### Activos Estáticos

El constructor de páginas maneja automáticamente activos estáticos como imágenes, iconos y otros archivos. Configura el directorio de activos en tu archivo de configuración:

```yaml
# page-builder.config.yml
input: ./pages
output: ./dist
assets: ./assets # Directorio de activos para copiar
```

**Estructura del Directorio de Activos:**

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

**Uso de Activos en tus Páginas:**

```yaml
# pages/index.yml
blocks:
  - type: header-block
    title: Bienvenido
    description: Echa un vistazo a nuestro increíble contenido
    background:
      image: assets/images/hero-banner.jpg

  - type: media-block
    title: Sobre Nosotros
    media:
      - type: image
        src: assets/images/about-photo.png
        alt: Foto de nuestro equipo
```

### Favicon

El constructor de páginas admite la adición de favicons a tus páginas estáticas. Puedes especificar un archivo local de tu directorio de activos o una URL externa.

#### Configuración

Añade la opción `favicon` a tu archivo de configuración:

```yaml
# page-builder.config.yml
favicon: logo.svg # Archivo local del directorio de activos
# o
favicon: https://cdn.example.com/favicon.ico # URL externa
```

#### Archivos Favicon Locales

Para archivos favicon locales, el constructor:

- Detectará automáticamente el archivo en tu directorio de activos
- Lo copiará al directorio de salida
- Generará etiquetas `<link>` HTML correctas con los tipos MIME adecuados

**Formatos de archivo compatibles:**

- **SVG** (recomendado) - `image/svg+xml`
- **ICO** (clásico) - `image/x-icon`
- **PNG** (moderno) - `image/png`
- **JPG/JPEG** (aceptable) - `image/jpeg`
- **GIF** (animado) - `image/gif`

**Ejemplos:**

```yaml
# page-builder.config.yml
favicon: logo.svg                    # Archivo en el directorio assets/
favicon: icons/favicon.ico           # Archivo en el subdirectorio assets/icons/
favicon: ./custom/path/favicon.png   # Ruta personalizada relativa al proyecto
favicon: /absolute/path/favicon.ico  # Ruta absoluta
```

#### URLs externas para Favicon

También puedes usar URLs externas de favicon desde CDNs u otros dominios:

```yaml
# page-builder.config.yml
favicon: https://cdn.example.com/favicon.ico
favicon: https://mysite.com/assets/logo.svg
```

#### HTML Generado

El constructor genera automáticamente las etiquetas HTML apropiadas basándose en el tipo de favicon:

```html
<!-- Para favicons SVG -->
<link rel="icon" type="image/svg+xml" href="assets/logo.svg" />

<!-- Para favicons ICO (incluye soporte para navegadores antiguos) -->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
<link rel="shortcut icon" href="assets/favicon.ico" />

<!-- Para URLs externas -->
<link rel="icon" href="https://example.com/favicon.ico" />
```

### Navegación

El constructor de páginas soporta la configuración de navegación global que aparece en todas las páginas. La navegación se configura a través de un archivo YAML separado.

#### Configuración de Navegación

Crea un archivo `navigation.yml` en la raíz de tu proyecto (o especifica una ruta personalizada en tu configuración):

```yaml
# navigation.yml
logo:
  text: Nombre de Tu Sitio
  url: 'index.html'
  icon: 'assets/logo.svg'

header:
  leftItems:
    - text: Inicio
      url: 'index.html'
      type: 'link'
    - text: Acerca de
      url: 'about.html'
      type: 'link'
    - text: Documentación
      url: 'https://external-site.com/docs'
      type: 'link'
  rightItems:
    - text: GitHub
      url: 'https://github.com/your-repo'
      type: 'link'
    - text: Contacto
      url: 'contact.html'
      type: 'link'

footer:
  leftItems:
    - text: Política de Privacidad
      url: 'privacy.html'
      type: 'link'
  rightItems:
    - text: © 2024 Tu Empresa
      type: 'text'
```

#### Anulación de Navegación por Página

Puedes anular la navegación para páginas específicas añadiendo una sección `navigation` directamente en el YAML de tu página:

```yaml
# pages/special-page.yml
meta:
  title: Página Especial

navigation:
  logo:
    text: Sitio Especial
    url: 'index.html'
  header:
    leftItems:
      - text: Volver al Principal
        url: 'index.html'
        type: 'link'

blocks:
  - type: header-block
    title: Esta página tiene navegación personalizada
```

### Configuración de Analíticas

Añade el campo `analytics` a tu `page-builder.config.yml`:

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