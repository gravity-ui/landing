# @gravity-ui/stylelint-config

Stylelint-Konfiguration für Gravity UI-Projekte.

## Anforderungen

- Node.js >= 20.x
- Stylelint 16.18.0
- PostCSS 8.x

## Installation

```
npm install --save-dev stylelint postcss @gravity-ui/stylelint-config
```

## Verwendung

Fügen Sie eine `.stylelintrc`-Datei im Stammverzeichnis Ihres Projekts mit folgendem Inhalt hinzu:

```json
{
  "extends": "@gravity-ui/stylelint-config"
}
```

### Prettier

Wenn Sie Prettier verwenden, erweitern Sie die Hauptkonfiguration um zusätzliche Regeln:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/prettier"]
}
```

### Reihenfolge

Wenn Sie die Reihenfolge von Eigenschaften in Ihren CSS-Dateien festlegen möchten, erweitern Sie die Hauptkonfiguration um zusätzliche Regeln:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/order"]
}
```