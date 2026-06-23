# Config do Browserslist da família de pacotes Gravity UI

## Navegadores compatíveis

Você pode verificar os navegadores compatíveis em [browsersl.ist](https://browsersl.ist/#q=baseline%20widely%20available%20on%202025-01-01%20with%20downstream).

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