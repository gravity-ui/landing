```html
<!-- Language options -->
<div class="language-options">
  <a href="/README.md">English</a>
  <a href="/README.de.md">Deutsch</a>
</div>
```

# @gravity-ui/babel-preset

Babel-Preset für Gravity UI Projekte

## Installation
```
npm install --save-dev @gravity-ui/babel-preset
```

## Verwendung

### Über `.babelrc`

```json5
{
  "presets": [
      "@gravity-ui/babel-preset",
      {
        "env": {modules: false}, // Standard ist {}
        "runtime": {useESModules: true}, // Standard ist {}
        "typescript": true, // Standard ist false
        "react": {runtime: "automatic"} // Standard ist {}
      }
  ]
}
```