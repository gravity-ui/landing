`CopyToClipboard` é um wrapper render-prop que copia texto para a área de transferência e expõe o status da cópia ao seu filho, permitindo que você renderize seu próprio gatilho; para um botão pronto, use `ClipboardButton`.

```tsx
import {CopyToClipboard} from '@gravity-ui/uikit';
```

### Filhos (função de renderização)

Esta é uma função de renderização fornecida como propriedade de filhos. Ela pode atualizar seu conteúdo dependendo do status que é retornado como o primeiro argumento na função de renderização.
Existem três status disponíveis: `pending`, `success` e `error`.

`pending`: Status inicial retornado na função de renderização no caso neutro.

`success`: Status de resultado retornado na função de renderização em caso de sucesso.

`error`: Status de resultado retornado na função de renderização em caso de erro.

A opção `timeout` define o tempo em ms para restaurar o status inicial (`pending`) após um dos status de resultado (`success` ou `error`).

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Propriedades

| Nome     | Descrição                                                              |           Tipo           | Padrão |
| :------- | :--------------------------------------------------------------------- | :----------------------: | :----: |
| children | Função de renderização `(status: CopyToClipboardStatus) => React.ReactElement` |        `Function`        |        |
| onCopy   | Manipulador de evento `copy`                                           |        `Function`        |        |
| text     | Texto a ser copiado (pode ser uma string ou uma função que retorna uma string) | `string \| () => string` |        |
| timeout  | Tempo em ms para restaurar o status inicial                            |         `number`         |        |