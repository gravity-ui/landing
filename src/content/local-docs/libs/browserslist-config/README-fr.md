# Configuration Browserslist de la famille de packages Gravity UI

## Navigateurs compatibles

Vous pouvez vérifier les navigateurs compatibles sur [browsersl.ist](https://browsersl.ist/#q=baseline%20widely%20available%20on%202025-01-01%20with%20downstream).

## Installation

```bash
npm i --save-dev @gravity-ui/browserslist-config
```

Ajoutez la configuration à la section `browserslist` de votre `package.json` :

```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config"
  ]
}
```

Vous pouvez spécifier des navigateurs supplémentaires en fonction de votre audience, par exemple :
```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config",
    "Chrome >= 100",
    "Firefox >= 100"
  ]
}
```

## Utilisation

Le package fournit la version de production de browserslist.