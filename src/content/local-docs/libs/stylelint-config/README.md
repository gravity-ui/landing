# @gravity-ui/stylelint-config

## Install

```
npm install --save-dev stylelint postcss @gravity-ui/stylelint-config
```

## Usage

Add `.stylelintrc` file in the project root with the following content:

```json
{
  "extends": "@gravity-ui/stylelint-config"
}
```

### Prettier

If you are using Prettier, extend root config with the additional rules:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/prettier"]
}
```

### Order

If you want to order properties in your css files, extend root config with the additional rules:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/order"]
}
```
