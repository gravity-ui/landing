# @gravity-ui/babel-preset

Preset do Babel para projetos Gravity UI

## Instalação
```
npm install --save-dev @gravity-ui/babel-preset
```

## Uso

### Via `.babelrc`

```json5
{
  "presets": [
      "@gravity-ui/babel-preset",
      {
        "env": {modules: false}, // padrão é {}
        "runtime": {useESModules: true}, // padrão é {}
        "typescript": true, // padrão é false
        "react": {runtime: "automatic"} // padrão é {}
      }
  ]
}
```