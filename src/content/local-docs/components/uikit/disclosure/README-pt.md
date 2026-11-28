<!--GITHUB_BLOCK-->

# Disclosure

<!--/GITHUB_BLOCK-->

`Disclosure` é um componente colapsável que permite exibir e ocultar seu conteúdo aninhado.

```tsx
import {Disclosure} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Base example

```tsx
<Disclosure summary="Summary">Content</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Controlando o estado de expansão

Você pode controlar o estado de expansão usando as propriedades `expanded` e `onUpdate`.

Exemplo de componente controlado:

<!--SANDBOX
import {Disclosure} from '@gravity-ui/uikit';

export default function () {
    return (
        <Disclosure summary="Summary" defaultExpanded>
            Content
        </Disclosure>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledDisclosure() {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <Disclosure summary="Summary" expanded={expanded} onUpdate={setExpanded}>
      Content
    </Disclosure>
  );
}
```

<!--/GITHUB_BLOCK-->

## Tamanho

Use a propriedade `size` para controlar o tamanho do `Disclosure`. O tamanho padrão é `m`.

<!--SANDBOX
import {Disclosure, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure summary="Middle size" size="m">
                Content
            </Disclosure>
            <Disclosure summary="Large size" size="l">
                Content
            </Disclosure>
            <Disclosure summary="Extra large size" size="xl">
                Content
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Middle size" size="m">
  Content
</Disclosure>
<Disclosure summary="Large size" size="l">
  Content
</Disclosure>
<Disclosure summary="Extra large size" size="xl">
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Posição da Seta

`start`: A seta é posicionada no início do cabeçalho (usado por padrão).

`end`: A seta é posicionada no final do cabeçalho.

<!--SANDBOX
import {Disclosure, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure summary="Summary with start arrow" arrowPosition="start">
                Content
            </Disclosure>
            <Disclosure summary="Summary with end arrow" arrowPosition="end">
                Content
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Summary with start arrow" arrowPosition="start">
  Content
</Disclosure>
<Disclosure summary="Summary with end arrow" arrowPosition="end">
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Conteúdo Personalizado

Use o componente `Disclosure.Summary` para criar um cabeçalho personalizado e `Disclosure.Details` para preencher o conteúdo personalizado.

<!--SANDBOX
import {Check} from '@gravity-ui/icons';
import {Button, Disclosure, Flex, Icon} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure>
                <Disclosure.Summary>
                    {(props) => (
                        <Button {...props}>
                            <Icon data={Check} size={14} />
                            Custom summary
                            <Icon data={Check} size={14} />
                        </Button>
                    )}
                </Disclosure.Summary>
                <div>Custom details</div>
                <div>More custom details</div>
            </Disclosure>
            <Disclosure summary="Summary">
                <Disclosure.Summary>
                    {(_props, defaultButton) => (
                        <Flex gap={4}>
                            {defaultButton}
                            <Icon data={Check} size={14} />
                        </Flex>
                    )}
                </Disclosure.Summary>
                <Disclosure.Details>Custom Details</Disclosure.Details>
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure>
  <Disclosure.Summary>
    {(props) => (
      <Button {...props}>
        <Icon data={Check} size={14} />
        Custom summary
        <Icon data={Check} size={14} />
      </Button>
    )}
  </Disclosure.Summary>
  <div>Custom details</div>
  <div>More custom details</div>
</Disclosure>
```

```tsx
<Disclosure>
  <Disclosure.Summary>
    {(_props, defaultButton) => (
      <Flex gap={4}>
        {defaultButton}
        <Icon data={Check} size={14} />
      </Flex>
    )}
  </Disclosure.Summary>
  <Disclosure.Details>Custom Details</Disclosure.Details>
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Estado Desabilitado

O `Disclosure` pode ser desabilitado usando a propriedade `disabled`.

<!--SANDBOX
import {Disclosure} from '@gravity-ui/uikit';

export default function () {
    return (
        <Disclosure summary="Summary" disabled>
            Content
        </Disclosure>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Summary" disabled>
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Propriedades

### Disclosure

| Nome             | Descrição                                                  | Tipo                                                  | Padrão    |
| :--------------- | :----------------------------------------------------------- | :---------------------------------------------------- | :-------- |
| size             | Tamanho do componente                                        | `"m"` `"l"` `"xl"`                                    | `"m"`     |
| className        | Nome da classe CSS do elemento raiz                          | `string`                                              |           |
| disabled         | Estado desabilitado                                          | `boolean`                                             | `false`   |
| defaultExpanded  | Estado inicial de abertura                                   | `boolean`                                             | `false`   |
| expanded         | Estado de abertura controlado                                | `boolean`                                             |           |
| arrowPosition    | Posição do controle                                          | `"start"` `"end"`                                     | `"start"` |
| summary          | Resumo do conteúdo                                           | `React.ReactNode`                                     |           |
| keepMounted      | Manter o conteúdo no DOM mesmo quando recolhido              | `boolean`                                             | `true`    |
| onUpdate         | Callback é acionado quando o estado de expandir/recolher é alterado. | `(expanded: boolean) => void`                         |           |
| onSummaryKeyDown | Callback é acionado em eventos de teclado quando o resumo está focado. | `(e: React.KeyboardEvent<HTMLButtonElement>) => void` |           |
| children         | Conteúdo                                                     | `React.ReactNode`                                     |           |
| qa               | Identificador de teste                                       | `string`                                              |           |

### Disclosure.Summary

| Nome     | Descrição                                     | Tipo                                            | Padrão               |
| :------- | :-------------------------------------------- | :---------------------------------------------- | :------------------- |
| children | Função de renderização                        | `(props, defaultSummary) => React.ReactElement` |                      |
| qa       | Identificador de teste                        | `string`                                        | `disclosure-summary` |

### Disclosure.Details

| Nome     | Descrição                               | Tipo              | Padrão               |
| :------- | :-------------------------------------- | :---------------- | :------------------- |
| children | Conteúdo                                | `React.ReactNode` |                      |
| qa       | Identificador de teste                  | `string`          | `disclosure-details` |

## API CSS

| Nome                                 | Descrição                                             |
| :----------------------------------- | :---------------------------------------------------- |
| `--g-disclosure-text-color`          | Cor do texto para o resumo do conteúdo                |
| `--g-disclosure-text-color-disabled` | Cor do texto para o resumo do conteúdo no estado desabilitado |
