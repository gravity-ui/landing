# @gravity-ui/stylelint-config

Configuração do Stylelint para projetos Gravity UI.

## Requisitos

- Node.js >= 20.x
- Stylelint 16.18.0
- PostCSS 8.x

## Instalação

```
npm install --save-dev stylelint postcss @gravity-ui/stylelint-config
```

## Uso

Adicione um arquivo `.stylelintrc` na raiz do projeto com o seguinte conteúdo:

```json
{
  "extends": "@gravity-ui/stylelint-config"
}
```

### Prettier

Se você estiver usando Prettier, estenda a configuração raiz com as regras adicionais:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/prettier"]
}
```

### Ordem

Se você quiser ordenar as propriedades em seus arquivos CSS, estenda a configuração raiz com as regras adicionais:

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/order"]
}
```