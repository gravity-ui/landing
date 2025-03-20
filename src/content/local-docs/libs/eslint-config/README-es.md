# @gravity-ui/eslint-config

## Instalación

```
npm install --save-dev eslint @gravity-ui/eslint-config
```

## Uso

Añade un archivo `.eslintrc` en la raíz del proyecto con el siguiente contenido:

```json
{
  "extends": "@gravity-ui/eslint-config",
  "root": true
}
```

Añade archivos de configuración para cliente y servidor en los directorios correspondientes:

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

### Prettier

Si estás usando Prettier, extiende la configuración raíz con las reglas adicionales:

```json
{
  "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/prettier"],
  "root": true
}
```

### a11y

Si quieres detectar problemas de accesibilidad, extiende la configuración raíz con las reglas adicionales:

```json
{
  "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/a11y"],
  "root": true
}
```

### Order

Si quieres imponer una convención en el orden de importación de módulos, extiende la configuración raíz con las reglas adicionales:

```json
{
  "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/import-order"],
  "root": true
}
```
