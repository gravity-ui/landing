# Config do Browserslist para a família de pacotes Gravity UI

## Navegadores compatíveis

Você pode verificar os navegadores compatíveis em [browsersl.ist](https://browsersl.ist/#q=last%203%20years%20and%20fully%20supports%20es6%20and%20%3E%200.05%25%0Anot%20dead%0Anot%20op_mini%20all%0Anot%20and_qq%20%3E%200%0Anot%20and_uc%20%3E%200%0AFirefox%20ESR%0AFirefox%20%3E%200%20and%20last%203%20years%20and%20%3E%200.01%25).

## Instalação

```bash
npm i --save-dev @gravity-ui/browserslist-config
```

Adicione a configuração ao `package.json` na seção `browserslist`:

```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config"
  ]
}
```

Você pode especificar navegadores adicionais com base no seu público, como:
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

O pacote fornece a versão de produção do browserslist.