```html
<!-- Language options -->
<div class="language-options">
  <a href="/README.md">English</a> |
  <a href="/README.fr.md">Français</a>
</div>
```

# @gravity-ui/babel-preset

Preset Babel pour les projets Gravity UI

## Installation
```
npm install --save-dev @gravity-ui/babel-preset
```

## Utilisation

### Via `.babelrc`

```json5
{
  "presets": [
      "@gravity-ui/babel-preset",
      {
        "env": {modules: false}, // par défaut {}
        "runtime": {useESModules: true}, // par défaut {}
        "typescript": true, // par défaut false
        "react": {runtime: "automatic"} // par défaut {}
      }
  ]
}
```