# @gravity-ui/stylelint-config

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

Si estás usando Prettier, extiende la configuración raíz con las reglas adicionales:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/prettier"]
}
```

### Order

Si quieres ordenar las propiedades en tus archivos CSS, extiende la configuración raíz con las reglas adicionales:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/order"]
}
```
