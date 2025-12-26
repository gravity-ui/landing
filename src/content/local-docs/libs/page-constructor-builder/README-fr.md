# Page Constructor Builder

Un utilitaire puissant en ligne de commande pour construire des pages statiques à partir de configurations YAML en utilisant le package [@gravity-ui/page-constructor](https://github.com/gravity-ui/page-constructor). Voir [page-constructor storybook](https://preview.gravity-ui.com/page-constructor/) pour les détails de configuration.

## Démarrage Rapide

1. **Installer le package :**

```bash
npm install @gravity-ui/page-constructor-builder
```

2. **Ajouter la commande de build à package.json :**

```json
{
  "scripts": {
    "build": "page-builder build"
  }
}
```

3. **Ajouter les fichiers sources :**

`page-builder.config.yml` :

```yaml
input: ./pages
output: ./dist
assets: ./assets
favicon: logo.svg
theme: light
minify: true
```

`pages/index.yml` :

```yaml
meta:
  title: Bonjour, le Monde
  description: Une page simple du constructeur de pages

blocks:
  - type: header-block
    title: Bonjour, le Monde
    description: |
      Construisez de belles pages statiques à partir de **configurations YAML** en utilisant la puissance de
      [@gravity-ui/page-constructor](https://github.com/gravity-ui/page-constructor).
    background:
      color: '#f8f9fa'
```

4. **Construire vos pages :**

```bash
npm run build
```

5. **Ouvrir les fichiers HTML générés dans votre navigateur :**

```bash
open dist/index.html
```

## Utilisation

### Commandes

#### `page-builder build`

Construit les pages à partir des configurations YAML.

```bash
page-builder build [options]
```

**Options :**

- `-i, --input <path>` : Répertoire d'entrée contenant les fichiers YAML (défaut : "./pages")
- `-o, --output <path>` : Répertoire de sortie pour les fichiers construits (défaut : "./dist")
- `-c, --config <path>` : Chemin du fichier de configuration (défaut : "./page-builder.config.yml")
- `--css <files...>` : Fichiers CSS personnalisés à inclure
- `--components <path>` : Répertoire des composants personnalisés
- `--navigation <path>` : Fichier de données de navigation
- `--assets <path>` : Répertoire des ressources statiques à copier
- `--theme <theme>` : Thème (light|dark) (défaut : "light")
- `--base-url <url>` : URL de base pour le site
- `--minify` : Activer la minification
- `--source-maps` : Générer des cartes sources
- `--watch` : Activer le mode surveillance

### Configuration

Créez un fichier `page-builder.config.yml` à la racine de votre projet :

```yaml
input: ./pages
output: ./dist
assets: ./assets
favicon: logo.svg # Fichier favicon depuis les assets ou une URL externe
theme: light
baseUrl: https://mysite.com
minify: true
sourceMaps: false # Générer des cartes sources pour le débogage (augmente la taille du bundle)
css:
  - ./styles/main.css
  - ./styles/components.scss
components: ./components
navigation: ./navigation.yml
webpack:
  # Configuration webpack personnalisée
```

### Configuration de Page

Créez des fichiers YAML dans votre répertoire de pages :

```yaml
# pages/index.yml
meta:
  title: Bienvenue sur Mon Site
  description: C'est la page d'accueil de mon super site

blocks:
  - type: header-block
    title: Bienvenue !
    description: Ceci est un **bloc d'en-tête** avec prise en charge du markdown
    background:
      color: '#f0f0f0'

  - type: content-block
    title: À Propos de Nous
    text: |
      Ceci est un bloc de contenu avec plusieurs lignes de texte.

      Vous pouvez utiliser le formatage **markdown** ici.

  - type: CustomBlock # Votre composant personnalisé
    title: Composant Personnalisé
    content: Ceci utilise un composant personnalisé
```

### Composants Personnalisés

Créez des composants React dans votre répertoire de composants :

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

### Styles Personnalisés

Ajoutez vos fichiers CSS/SCSS personnalisés :

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

### Ressources Statiques

Le constructeur de pages gère automatiquement les ressources statiques comme les images, les icônes et autres fichiers. Configurez le répertoire des ressources dans votre fichier de configuration :

```yaml
# page-builder.config.yml
input: ./pages
output: ./dist
assets: ./assets # Répertoire des ressources à copier
```

**Structure du Répertoire des Ressources :**

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

**Utilisation des Ressources dans Vos Pages :**

```yaml
# pages/index.yml
blocks:
  - type: header-block
    title: Bienvenue
    description: Découvrez notre contenu incroyable
    background:
      image: assets/images/hero-banner.jpg

  - type: media-block
    title: À Propos de Nous
    media:
      - type: image
        src: assets/images/about-photo.png
        alt: Photo de notre équipe
```

### Favicon

Le constructeur de pages prend en charge l'ajout de favicons à vos pages statiques. Vous pouvez spécifier soit un fichier local de votre répertoire d'assets, soit une URL externe.

#### Configuration

Ajoutez l'option `favicon` à votre fichier de configuration :

```yaml
# page-builder.config.yml
favicon: logo.svg # Fichier local du répertoire des assets
# ou
favicon: https://cdn.example.com/favicon.ico # URL externe
```

#### Fichiers Favicon Locaux

Pour les fichiers favicon locaux, le constructeur :

- Détectera automatiquement le fichier dans votre répertoire d'assets
- Le copiera dans le répertoire de sortie
- Générera des balises `<link>` HTML appropriées avec les types MIME corrects

**Formats de fichiers pris en charge :**

- **SVG** (recommandé) - `image/svg+xml`
- **ICO** (classique) - `image/x-icon`
- **PNG** (moderne) - `image/png`
- **JPG/JPEG** (acceptable) - `image/jpeg`
- **GIF** (animé) - `image/gif`

**Exemples :**

```yaml
# page-builder.config.yml
favicon: logo.svg                    # Fichier dans le répertoire assets/
favicon: icons/favicon.ico           # Fichier dans le sous-répertoire assets/icons/
favicon: ./custom/path/favicon.png   # Chemin personnalisé relatif au projet
favicon: /absolute/path/favicon.ico  # Chemin absolu
```

#### URLs externes pour les favicons

Vous pouvez également utiliser des URLs externes pour les favicons, provenant de CDNs ou d'autres domaines :

```yaml
# page-builder.config.yml
favicon: https://cdn.example.com/favicon.ico
favicon: https://mysite.com/assets/logo.svg
```

#### HTML généré

Le constructeur génère automatiquement les balises HTML appropriées en fonction du type de favicon :

```html
<!-- Pour les favicons SVG -->
<link rel="icon" type="image/svg+xml" href="assets/logo.svg" />

<!-- Pour les favicons ICO (inclut la prise en charge des navigateurs plus anciens) -->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
<link rel="shortcut icon" href="assets/favicon.ico" />

<!-- Pour les URLs externes -->
<link rel="icon" href="https://example.com/favicon.ico" />
```

### Navigation

Le constructeur de pages prend en charge la configuration de la navigation globale qui apparaît sur toutes les pages. La navigation est configurée via un fichier YAML séparé.

#### Configuration de la navigation

Créez un fichier `navigation.yml` à la racine de votre projet (ou spécifiez un chemin personnalisé dans votre configuration) :

```yaml
# navigation.yml
logo:
  text: Nom de votre site
  url: 'index.html'
  icon: 'assets/logo.svg'

header:
  leftItems:
    - text: Accueil
      url: 'index.html'
      type: 'link'
    - text: À propos
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
    - text: Politique de confidentialité
      url: 'privacy.html'
      type: 'link'
  rightItems:
    - text: © 2024 Votre entreprise
      type: 'text'
```

#### Substitution de la navigation par page

Vous pouvez remplacer la navigation pour des pages spécifiques en ajoutant une section `navigation` directement dans le YAML de votre page :

```yaml
# pages/special-page.yml
meta:
  title: Page spéciale

navigation:
  logo:
    text: Site spécial
    url: 'index.html'
  header:
    leftItems:
      - text: Retour au principal
        url: 'index.html'
        type: 'link'

blocks:
  - type: header-block
    title: Cette page a une navigation personnalisée
```

### Configuration des analyses

Ajoutez le champ `analytics` à votre fichier `page-builder.config.yml` :

```yaml
analytics: ./analytics.js
```

`analytics.js` :

```javascript
module.exports = {
  sendEvents: (events) => {
    /* ... */
  },
  autoEvents: true,
};
```