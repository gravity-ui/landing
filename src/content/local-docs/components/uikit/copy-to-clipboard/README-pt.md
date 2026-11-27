<!--GITHUB_BLOCK-->

# CopyToClipboard

<!--/GITHUB_BLOCK-->

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

<!--SANDBOX
import {Button, CopyToClipboard} from '@gravity-ui/uikit';

const buttonText = {
    pending: 'Click Me',
    success: 'Copied!',
    error: "Couldn't copy...",
};

export default function () {
    return (
        <CopyToClipboard text="Some text to copy" timeout={500}>
            {(status) => (
                <Button view="normal" size="l">
                    {buttonText[status]}
                </Button>
            )}
        </CopyToClipboard>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const buttonText = {
  pending: 'Click Me',
  success: 'Copied!',
  error: "Couldn't copy...",
};

<CopyToClipboard text="Some text to copy" timeout={500}>
  {(status) => <button>{buttonText[status]}</button>}
</CopyToClipboard>;
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome     | Descrição                                                              |           Tipo           | Padrão |
| :------- | :--------------------------------------------------------------------- | :----------------------: | :----: |
| children | Função de renderização `(status: CopyToClipboardStatus) => React.ReactElement` |        `Function`        |        |
| onCopy   | Manipulador de evento `copy`                                           |        `Function`        |        |
| text     | Texto a ser copiado (pode ser uma string ou uma função que retorna uma string) | `string \| () => string` |        |
| timeout  | Tempo em ms para restaurar o status inicial                            |         `number`         |        |
