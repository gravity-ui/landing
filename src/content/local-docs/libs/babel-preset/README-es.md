# @gravity-ui/babel-preset

Preset de Babel para proyectos de Gravity UI

## Instalación

```
npm install --save-dev @gravity-ui/babel-preset
```

## Uso

### A través de `.babelrc`

```json5
{
  presets: [
    '@gravity-ui/babel-preset',
    {
      env: {modules: false}, // por defecto es {}
      runtime: {useESModules: true}, // por defecto es {}
      typescript: true, // por defecto es false
      react: {runtime: 'automatic'}, // por defecto es {}
    },
  ],
}
```
