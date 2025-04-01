# @gravity-ui/stylelint-config

## Instalar

```
npm install --save-dev stylelint postcss @gravity-ui/stylelint-config
```

## Uso

Agregue `.stylelintrc` un archivo en la raíz del proyecto con el siguiente contenido:

```json
{
  "extends": "@gravity-ui/stylelint-config"
}
```

### Más bonita

Si está utilizando Prettier, amplíe la configuración raíz con las reglas adicionales:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/prettier"]
}
```

### Pedido

Si desea ordenar las propiedades en sus archivos css, amplíe la configuración raíz con las reglas adicionales:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/order"]
}
```
