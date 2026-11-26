`ClipboardButton` é um botão pronto para uso que copia o texto fornecido para a área de transferência e reproduz uma animação de sucesso. Ele combina [`CopyToClipboard`](../CopyToClipboard/README.md) (o comportamento de cópia) com [`ClipboardIcon`](../ClipboardIcon/README.md) (o ícone animado).

```tsx
import {ClipboardButton} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Propriedades

As propriedades do `ClipboardButton` são herdadas das propriedades do `Button` [aqui](../Button/README.md#properties).

| Nome               | Descrição                                                               |            Tipo            |   Padrão   |
| :----------------- | :------------------------------------------------------------------------ | :------------------------: | :---------: |
| hasTooltip         | Alterna a exibição da dica de ferramenta                                |         `boolean`          |   `true`    |
| onCopy             | Callback após a cópia `(text: string, result: boolean) => void`          |         `Function`         |             |
| text               | Texto a ser copiado (pode ser uma string ou uma função que retorna uma string) |  `string \| () => string`  |             |
| timeout            | Tempo antes que o estado volte ao normal após o clique do botão           |          `number`          |   `1000`    |
| tooltipInitialText | Texto exibido antes de copiar                                             |          `string`          |  `"Copy"`   |
| tooltipSuccessText | Texto exibido após copiar                                                 |          `string`          | `"Copied!"` |
| icon               | Ícone personalizado                                                       |     `React.ReactNode`      |             |
| iconPosition       | Posição do ícone                                                          | `start          \|    end` |   `start`   |