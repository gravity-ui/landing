# @gravity-ui/stylelint-config

Configuración de Stylelint para proyectos de Gravity UI.

## Requisitos

- Node.js >= 20.x
- Stylelint 16.18.0
- PostCSS 8.x

## Instalación

```
npm install --save-dev stylelint postcss @gravity-ui/stylelint-config
```

## Uso

Añade un archivo `.stylelintrc` en la raíz del proyecto con el siguiente contenido:

```json
{
  "extends": "@gravity-ui/stylelint-config"
}
```

### Prettier

Si estás utilizando Prettier, extiende la configuración raíz con las reglas adicionales:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/prettier"]
}
```

### Orden

Si deseas ordenar las propiedades en tus archivos CSS, extiende la configuración raíz con las reglas adicionales:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/order"]
}
```