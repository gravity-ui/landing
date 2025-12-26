# @gravity-ui/babel-preset

Babel preset for Gravity UI projects

## Install
```
npm install --save-dev @gravity-ui/babel-preset
```

## Usage

### Via `.babelrc`

```json5
{
  "presets": [
      "@gravity-ui/babel-preset",
      {
        "env": {modules: false}, // defaults to {}
        "runtime": {useESModules: true}, // defaults to {}
        "typescript": true, // defaults to false
        "react": {runtime: "automatic"} // defaults to {}
      }
  ]
}
```
