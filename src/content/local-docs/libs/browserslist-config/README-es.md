# Configuración de Browserslist para la familia de paquetes de Gravity UI

## Navegadores compatibles

Puedes consultar los navegadores compatibles en [browsersl.ist](https://browsersl.ist/#q=baseline%20widely%20available%20on%202025-01-01%20with%20downstream).

## Instalación

```bash
npm i --save-dev @gravity-ui/browserslist-config
```

Añade la configuración a la sección `browserslist` de tu `package.json`:

```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config"
  ]
}
```

Puedes especificar navegadores adicionales según tu audiencia, por ejemplo:
```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config",
    "Chrome >= 100",
    "Firefox >= 100"
  ]
}
```

## Uso

El paquete proporciona la versión de producción de browserslist.