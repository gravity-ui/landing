# Page Constructor Builder

Ein leistungsstarkes Kommandozeilen-Tool zum Erstellen statischer Seiten aus YAML-Konfigurationen mit dem Paket [@gravity-ui/page-constructor](https://github.com/gravity-ui/page-constructor). Details zur Konfiguration finden Sie im [page-constructor Storybook](https://preview.gravity-ui.com/page-constructor/).

## Schnellstart

1. **Paket installieren:**

```bash
npm install @gravity-ui/page-constructor-builder
```

2. **Build-Befehl zu package.json hinzufügen:**

```json
{
  "scripts": {
    "build": "page-builder build"
  }
}
```

3. **Quelldateien hinzufügen:**

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
  description: Eine einfache Seite des Seitenkonstruktors

blocks:
  - type: header-block
    title: Hello, World
    description: |
      Erstellen Sie schöne statische Seiten aus **YAML-Konfigurationen** mit der Leistung von
      [@gravity-ui/page-constructor](https://github.com/gravity-ui/page-constructor).
    background:
      color: '#f8f9fa'
```

4. **Seiten erstellen:**

```bash
npm run build
```

5. **Generierte HTML-Dateien im Browser öffnen:**

```bash
open dist/index.html
```

## Verwendung

### Befehle

#### `page-builder build`

Erstellt Seiten aus YAML-Konfigurationen.

```bash
page-builder build [optionen]
```

**Optionen:**

- `-i, --input <pfad>`: Eingabeverzeichnis mit YAML-Dateien (Standard: "./pages")
- `-o, --output <pfad>`: Ausgabeverzeichnis für erstellte Dateien (Standard: "./dist")
- `-c, --config <pfad>`: Pfad zur Konfigurationsdatei (Standard: "./page-builder.config.yml")
- `--css <dateien...>`: Benutzerdefinierte CSS-Dateien, die eingeschlossen werden sollen
- `--components <pfad>`: Verzeichnis für benutzerdefinierte Komponenten
- `--navigation <pfad>`: Datei für Navigationsdaten
- `--assets <pfad>`: Verzeichnis für statische Assets, die kopiert werden sollen
- `--theme <thema>`: Thema (light|dark) (Standard: "light")
- `--base-url <url>`: Basis-URL für die Website
- `--minify`: Minifizierung aktivieren
- `--source-maps`: Source Maps generieren
- `--watch`: Watch-Modus aktivieren

### Konfiguration

Erstellen Sie eine `page-builder.config.yml`-Datei im Stammverzeichnis Ihres Projekts:

```yaml
input: ./pages
output: ./dist
assets: ./assets
favicon: logo.svg # Favicon-Datei aus Assets oder externe URL
theme: light
baseUrl: https://mysite.com
minify: true
sourceMaps: false # Source Maps für Debugging generieren (erhöht die Bundle-Größe)
css:
  - ./styles/main.css
  - ./styles/components.scss
components: ./components
navigation: ./navigation.yml
webpack:
  # Benutzerdefinierte Webpack-Konfiguration
```

### Seitenkonfiguration

Erstellen Sie YAML-Dateien in Ihrem Seitenverzeichnis:

```yaml
# pages/index.yml
meta:
  title: Willkommen auf meiner Website
  description: Dies ist die Homepage meiner großartigen Website

blocks:
  - type: header-block
    title: Willkommen!
    description: Dies ist ein **Header-Block** mit Markdown-Unterstützung
    background:
      color: '#f0f0f0'

  - type: content-block
    title: Über uns
    text: |
      Dies ist ein Inhaltsblock mit mehreren Textzeilen.

      Sie können hier **Markdown**-Formatierung verwenden.

  - type: CustomBlock # Ihre benutzerdefinierte Komponente
    title: Benutzerdefinierte Komponente
    content: Dies verwendet eine benutzerdefinierte Komponente
```

### Benutzerdefinierte Komponenten

Erstellen Sie React-Komponenten in Ihrem Komponentenverzeichnis:

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

### Benutzerdefinierte Stile

Fügen Sie Ihre benutzerdefinierten CSS/SCSS-Dateien hinzu:

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

### Statische Assets

Der Page Constructor Builder verarbeitet automatisch statische Assets wie Bilder, Icons und andere Dateien. Konfigurieren Sie das Assets-Verzeichnis in Ihrer Konfigurationsdatei:

```yaml
# page-builder.config.yml
input: ./pages
output: ./dist
assets: ./assets # Assets-Verzeichnis zum Kopieren
```

**Struktur des Assets-Verzeichnisses:**

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

**Verwendung von Assets in Ihren Seiten:**

```yaml
# pages/index.yml
blocks:
  - type: header-block
    title: Willkommen
    description: Entdecken Sie unsere erstaunlichen Inhalte
    background:
      image: assets/images/hero-banner.jpg

  - type: media-block
    title: Über uns
    media:
      - type: image
        src: assets/images/about-photo.png
        alt: Foto unseres Teams
```

### Favicon

Der Page Constructor Builder unterstützt das Hinzufügen von Favicons zu Ihren statischen Seiten. Sie können entweder eine lokale Datei aus Ihrem Assets-Verzeichnis oder eine externe URL angeben.

#### Konfiguration

Fügen Sie die Option `favicon` zu Ihrer Konfigurationsdatei hinzu:

```yaml
# page-builder.config.yml
favicon: logo.svg # Lokale Datei aus dem Assets-Verzeichnis
# oder
favicon: https://cdn.example.com/favicon.ico # Externe URL
```

#### Lokale Favicon-Dateien

Für lokale Favicon-Dateien wird der Builder:

- Die Datei automatisch in Ihrem Assets-Verzeichnis erkennen
- Sie in das Ausgabeverzeichnis kopieren
- Korrekte HTML `<link>`-Tags mit den richtigen MIME-Typen generieren

**Unterstützte Dateiformate:**

- **SVG** (empfohlen) - `image/svg+xml`
- **ICO** (klassisch) - `image/x-icon`
- **PNG** (modern) - `image/png`
- **JPG/JPEG** (akzeptabel) - `image/jpeg`
- **GIF** (animiert) - `image/gif`

**Beispiele:**

```yaml
# page-builder.config.yml
favicon: logo.svg                    # Datei im Verzeichnis assets/
favicon: icons/favicon.ico           # Datei im Unterverzeichnis assets/icons/
favicon: ./custom/path/favicon.png   # Benutzerdefinierter Pfad relativ zum Projekt
favicon: /absolute/path/favicon.ico  # Absoluter Pfad
```

#### Externe Favicon-URLs

Sie können auch externe Favicon-URLs von CDNs oder anderen Domains verwenden:

```yaml
# page-builder.config.yml
favicon: https://cdn.example.com/favicon.ico
favicon: https://mysite.com/assets/logo.svg
```

#### Generiertes HTML

Der Builder generiert automatisch die entsprechenden HTML-Tags basierend auf dem Favicon-Typ:

```html
<!-- Für SVG-Favicons -->
<link rel="icon" type="image/svg+xml" href="assets/logo.svg" />

<!-- Für ICO-Favicons (beinhaltet Unterstützung für ältere Browser) -->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
<link rel="shortcut icon" href="assets/favicon.ico" />

<!-- Für externe URLs -->
<link rel="icon" href="https://example.com/favicon.ico" />
```

### Navigation

Der Page Constructor Builder unterstützt die globale Navigationskonfiguration, die auf allen Seiten angezeigt wird. Die Navigation wird über eine separate YAML-Datei konfiguriert.

#### Navigationskonfiguration

Erstellen Sie eine `navigation.yml`-Datei im Stammverzeichnis Ihres Projekts (oder geben Sie einen benutzerdefinierten Pfad in Ihrer Konfiguration an):

```yaml
# navigation.yml
logo:
  text: Ihr Website-Name
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
    - text: © 2024 Ihr Unternehmen
      type: 'text'
```

#### Seitenindividuelle Navigationsüberschreibung

Sie können die Navigation für bestimmte Seiten überschreiben, indem Sie einen `navigation`-Abschnitt direkt in Ihrer Seiten-YAML hinzufügen:

```yaml
# pages/special-page.yml
meta:
  title: Spezielle Seite

navigation:
  logo:
    text: Spezielle Website
    url: 'index.html'
  header:
    leftItems:
      - text: Zurück zur Hauptseite
        url: 'index.html'
        type: 'link'

blocks:
  - type: header-block
    title: Diese Seite hat eine benutzerdefinierte Navigation
```