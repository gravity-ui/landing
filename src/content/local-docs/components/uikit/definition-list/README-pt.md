<!--GITHUB_BLOCK-->

# DefinitionList

<!--/GITHUB_BLOCK-->

O componente para exibir uma lista de definições com termo e definição separados por pontos.

```tsx
import {DefinitionList} from '@gravity-ui/uikit';
```

## Exemplos

<!--SANDBOX
import {DefinitionList} from '@gravity-ui/uikit';

export default function () {
    return (
        <DefinitionList nameMaxWidth={100} contentMaxWidth={100}>
            <DefinitionList.Item name="Node value with copy" copyText="value">
                <strong>value with copy</strong>
            </DefinitionList.Item>
            <DefinitionList.Item name="Empty value with copy" copyText="nothing to copy" />
        </DefinitionList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<DefinitionList nameMaxWidth={100} contentMaxWidth={100}>
  <DefinitionList.Item name="Node value with copy" copyText="value">
    <strong>value with copy</strong>
  </DefinitionList.Item>
  <DefinitionList.Item name="Empty value with copy" copyText="nothing to copy" />
</DefinitionList>
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome               | Descrição                                                                                         |              Tipo              |   Padrão    |
| :----------------- | :-------------------------------------------------------------------------------------------------- | :----------------------------: | :---------: |
| [children](#items) | Itens da lista                                                                                      |       `React.ReactNode`        |             |
| responsive         | Se definido como `true`, a lista ocupará 100% da largura de seu pai                               |           `boolean`            |             |
| direction          | Se definido como `vertical`, o conteúdo será localizado sob o nome e a lista ocupará 100% da largura de seu pai | `'horizontal'` \| `'vertical'` | 'horizontal' |
| nameMaxWidth       | Largura máxima do termo                                                                             |            `number`            |             |
| contentMaxWidth    | Largura máxima da definição                                                                         |            `number`            |             |
| className          | Nome da classe para a lista de definições                                                           |            `string`            |             |

### Itens

Os filhos de `DefinitionList` devem ser componentes do tipo `DefinitionList.Item` com as seguintes propriedades:

| Nome     | Descrição                                      |           Tipo            | Padrão |
| -------- | :------------------------------------------------ | :-----------------------: | :----: |
| name     | Termo                                             |        `ReactNode`        |        |
| children | Definição                                       |        `ReactNode`        |        |
| copyText | Se definido, será exibido um ícone para copiar este texto |         `string`          |        |
| note     | Se definido, um `HelpMark` será exibido ao lado do termo      | `string \| HelpMarkProps` |        |

## API CSS

| Nome                           | Descrição                         |
| :----------------------------- | :---------------------------------- |
| `--g-definition-list-item-gap` | Espaço entre os itens da lista de definições |
