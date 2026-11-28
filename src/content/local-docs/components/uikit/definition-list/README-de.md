<!--GITHUB_BLOCK-->

# DefinitionList

<!--/GITHUB_BLOCK-->

Die Komponente zur Anzeige einer Definitionsliste mit Begriff und Definition, getrennt durch Punkte.

```tsx
import {DefinitionList} from '@gravity-ui/uikit';
```

## Beispiele

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

## Eigenschaften

| Name               | Beschreibung                                                                                                |              Typ              |   Standard    |
| :----------------- | :---------------------------------------------------------------------------------------------------------- | :---------------------------: | :-----------: |
| [children](#items) | Elemente der Liste                                                                                          |       `React.ReactNode`       |               |
| responsive         | Wenn auf `true` gesetzt, nimmt die Liste die volle Breite ihres Elternelements ein                         |           `boolean`           |               |
| direction          | Wenn auf `vertical` gesetzt, wird der Inhalt unter dem Namen platziert und die Liste nimmt die volle Breite ihres Elternelements ein | `'horizontal'` \| `'vertical'` | 'horizontal' |
| nameMaxWidth       | Maximale Breite des Begriffs                                                                                |            `number`           |               |
| contentMaxWidth    | Maximale Breite der Definition                                                                              |            `number`           |               |
| className          | Klassenname für die Definitionsliste                                                                        |            `string`           |               |

### Items

Die `children` von `DefinitionList` sollten Komponenten vom Typ `DefinitionList.Item` mit den folgenden Eigenschaften sein:

| Name     | Beschreibung                                      |           Typ            | Standard |
| -------- | :------------------------------------------------ | :----------------------: | :------: |
| name     | Begriff                                           |        `ReactNode`       |          |
| children | Definition                                        |        `ReactNode`       |          |
| copyText | Wenn gesetzt, wird ein Symbol zum Kopieren dieses Textes angezeigt |         `string`         |          |
| note     | Wenn gesetzt, wird ein Hilfemarker neben dem Begriff angezeigt | `string \| HelpMarkProps` |          |

## CSS API

| Name                           | Beschreibung                        |
| :----------------------------- | :---------------------------------- |
| `--g-definition-list-item-gap` | Abstand zwischen den Elementen der Definitionsliste |
