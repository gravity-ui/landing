# @gravity-ui/eslint-config

## Instalar

```
npm install --save-dev eslint @gravity-ui/eslint-config
```

## Uso

Agregue `.eslintrc` un archivo en la raíz del proyecto con el siguiente contenido:

```json
{
  "extends": "@gravity-ui/eslint-config",
  "root": true
}
```

Agregue los archivos de configuración del cliente y del servidor en los directorios correspondientes:

```json
{
  "extends": "@gravity-ui/eslint-config/server"
}
```

```json
{
  "extends": "@gravity-ui/eslint-config/client"
}
```

### Más bonita

Si está utilizando Prettier, amplíe la configuración raíz con las reglas adicionales:

```json
{
  "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/prettier"],
  "root": true
}
```

### a11y

Si desea detectar problemas de accesibilidad, amplíe la configuración raíz con las reglas adicionales:

```json
{
  "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/a11y"],
  "root": true
}
```

### Pedido

si desea hacer cumplir una convención en el orden de importación de los módulos, extienda la configuración raíz con las reglas adicionales:

```json
{
  "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/import-order"],
  "root": true
}
```
