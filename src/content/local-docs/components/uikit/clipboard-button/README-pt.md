O `ClipboardButton` é um botão pronto para uso que copia um determinado texto para a área de transferência e reproduz uma animação de sucesso. Ele combina [`CopyToClipboard`](../CopyToClipboard/README.md) (o comportamento de cópia) com [`ClipboardIcon`](../ClipboardIcon/README.md) (o ícone animado).

```tsx
import {ClipboardButton} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Tooltip

Use `tooltipProps` para configurar o [`ActionTooltip`](../ActionTooltip/README.md) subjacente,
por exemplo, seu posicionamento ou comportamento de portal:

```tsx
<ClipboardButton text="Algum texto para copiar" tooltipProps={{placement: 'top', disablePortal: true}} />
```

As propriedades suportadas são `onOpenChange`, `strategy`, `placement`, `offset`, `disabled`,
`container`, `disablePortal`, e as propriedades `DOMProps` (`className`, `style`) e `QAProps` (`qa`).

Defina `tooltipProps.disabled` como `true` para desabilitar o tooltip. `hasTooltip={false}` e o tempo limite de feedback de cópia também o desabilitam, mesmo quando `tooltipProps.disabled` é `false`. Use
`tooltipInitialText`, `tooltipSuccessText` e `timeout` para configurar o feedback de cópia.

## Propriedades

As propriedades do `ClipboardButton` são herdadas das [propriedades](../Button/README.md#properties) do `Button`.

| Nome               | Descrição                                                               |            Tipo            |   Padrão   |
| :----------------- | :------------------------------------------------------------------------ | :------------------------: | :---------: |
| hasTooltip         | Alterna a exibição do tooltip                                             |         `boolean`          |   `true`    |
| onCopy             | Callback após a cópia `(text: string, result: boolean) => void`          |         `Function`         |             |
| text               | Texto a ser copiado (pode ser uma string ou uma função que retorna uma string)        |  `string \| () => string`  |             |
| timeout            | Tempo antes que o estado volte ao normal após o clique do botão |          `number`          |   `1000`    |
| tooltipInitialText | Texto exibido antes de copiar                                                 |          `string`          |  `"Copy"`   |
| tooltipSuccessText | Texto exibido após copiar                                                  |          `string`          | `"Copied!"` |
| tooltipProps       | Configuração do tooltip. Veja [propriedades suportadas](#tooltip).              |          `object`          |             |
| icon               | Ícone personalizado                                                               |     `React.ReactNode`      |             |
| iconPosition       | Posição do ícone                                                          | `start          \|    end` |   `start`   |