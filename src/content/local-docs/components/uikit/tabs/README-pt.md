<!--GITHUB_BLOCK-->

# Tabs components

<!--/GITHUB_BLOCK-->

Os componentes `Tab` são usados para explorar, organizar conteúdo e alternar entre diferentes visualizações.

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

<!--SANDBOX
import {useState} from 'react';
import {Tab, TabList, TabPanel, TabProvider} from '@gravity-ui/uikit';

export default function () {
    const [activeTab, setActiveTab] = useState('second');

    return (
        <TabProvider value={activeTab} onUpdate={setActiveTab}>
            <TabList>
                <Tab value="first">First Tab</Tab>
                <Tab value="second">Active Tab</Tab>
                <Tab value="third" disabled>
                    Disabled Tab
                </Tab>
            </TabList>
            <div>
                <TabPanel value="first">First Panel</TabPanel>
                <TabPanel value="second">Second Panel</TabPanel>
                <TabPanel value="third">Third Panel</TabPanel>
            </div>
        </TabProvider>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [activeTab, setActiveTab] = React.useState('second');

return (
  <TabProvider value={activeTab} onUpdate={setActiveTab}>
    <TabList>
      <Tab value="first">First Tab</Tab>
      <Tab value="second">Active Tab</Tab>
      <Tab value="third" disabled>
        Disabled Tab
      </Tab>
    </TabList>
    <div>
      <TabPanel value="first">First Panel</TabPanel>
      <TabPanel value="second">Second Panel</TabPanel>
      <TabPanel value="third">Third Panel</TabPanel>
    </div>
  </TabProvider>
);
```

<!--/GITHUB_BLOCK-->

### Componentes

- [TabProvider](#tabprovider)
- [TabList](#tablist)
- [Tab](#tab)
- [TabPanel](#tabpanel)

## TabProvider

Um componente que fornece a funcionalidade de seleção de abas.

## Propriedades

| Nome     | Descrição                                              |           Tipo            | Padrão |
| :------- | :------------------------------------------------------- | :-----------------------: | :----: |
| children | Lista de abas e painéis de abas, provavelmente com alguns wrappers |     `React.ReactNode`     |        |
| value    | Valor da aba ativa                                         |         `string`          |        |
| onUpdate | Manipulador de atualização de aba                                       | `(value: string) => void` |        |

## TabList

Componente que serve como contêiner para um conjunto de `tabs`.

### Tamanho

Para controlar o tamanho das `tabs`, use a propriedade `size`. O tamanho padrão é `m`.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TabList value="second" size="m">
                <Tab value="first">M Size first</Tab>
                <Tab value="second">M Size second</Tab>
            </TabList>
            <TabList value="second" size="l">
                <Tab value="first">L Size first</Tab>
                <Tab value="second">L Size second</Tab>
            </TabList>
            <TabList value="second" size="xl">
                <Tab value="first">XL Size first</Tab>
                <Tab value="second">v Size second</Tab>
            </TabList>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="second" size="m">
    <Tab value="first">M Size first</Tab>
    <Tab value="second">M Size second</Tab>
</TabList>
<TabList value="second" size="l">
    <Tab value="first">L Size first</Tab>
    <Tab value="second">L Size second</Tab>
</TabList>
<TabList value="second" size="xl">
    <Tab value="first">XL Size first</Tab>
    <Tab value="second">v Size second</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Propriedades

`TabList` aceita quaisquer props válidas de elemento `div`, além destas:

| Nome            | Descrição                                                                            |               Tipo               | Padrão  |
| :-------------- | :------------------------------------------------------------------------------------- | :------------------------------: | :-----: |
| children        | Lista de abas, provavelmente com alguns wrappers                                              |        `React.ReactNode`         |         |
| value           | Valor da aba ativa                                         |             `string`             |         |
| onUpdate        | Manipulador de atualização de aba                                       |    `(value: string) => void`     |          |
| className       | Classe CSS do elemento                                                                   |             `string`             |         |
| activateOnFocus | Ativa a aba ao focar. Use isso apenas se o conteúdo do painel puder ser exibido imediatamente   |            `boolean`             | `false`  |
| size            | Tamanho do elemento                                                                    |        `"m"` `"l"` `"xl"`        |  `"m"`   |
| contentOverflow | Como lidar com itens que não cabem horizontalmente (quebrar, rolar ou um menu **Mais**) | `"wrap"` `"scroll"` `"collapse"` | `"wrap"` |
| moreLabel       | Rótulo para o gatilho de overflow de colapso quando a aba ativa está visível na lista     |        `React.ReactNode`         | `"More"` |
| qa              | Atributo HTML `data-qa`, usado em testes                                                |             `string`             |         |

## Tab

Este componente é usado para renderizar itens de aba.

### Ícone

Usado se você precisar exibir um ícone para um item de aba.

<!--SANDBOX
import {Gear} from '@gravity-ui/icons';
import {Icon, Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" icon={<Icon size={16} data={Gear} />}>
                Tab with icon
            </Tab>
            <Tab value="second">Tab without icon</Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" icon={<Icon size={16} data={GearIcon} />}>
    Tab with icon
  </Tab>
  <Tab value="second">Tab without icon</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Estados

O item de aba tem um sinalizador desativado.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first">First Tab</Tab>
            <Tab value="second" disabled>
                Disabled Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first">First Tab</Tab>
  <Tab value="second" disabled>
    Disabled Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Contador

Usado se você precisar exibir um número para um item de aba.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" counter={13}>
                First Tab
            </Tab>
            <Tab value="second" counter={3}>
                Second Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" counter={13}>
    First Tab
  </Tab>
  <Tab value="second" counter={3}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Rótulo

Usado se você precisar exibir um rótulo para um item de aba.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" label={{content: 'Label 1'}}>
                First Tab
            </Tab>
            <Tab value="second" label={{content: 'Label 2'}}>
                Second Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" label={{content: 'Label 1'}}>
    First Tab
  </Tab>
  <Tab value="second" label={{content: 'Label 2'}}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Overflow de Conteúdo

Usado se você precisar colapsar um item de aba.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
    <Tab value="first">First Tab</Tab>
    <Tab value="second">Second Tab</Tab>
    <Tab value="third">Third Tab</Tab>
    <Tab value="fourth">Fourth Tab</Tab>
    <Tab value="fifth">Fifth Tab</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
        <UIKit.Tab value="first">First Tab</UIKit.Tab>
        <UIKit.Tab value="second">Second Tab</UIKit.Tab>
        <UIKit.Tab value="third">Third Tab</UIKit.Tab>
        <UIKit.Tab value="fourth">Fourth Tab</UIKit.Tab>
        <UIKit.Tab value="fifth">Fifth Tab</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
  <Tab value="first">First Tab</Tab>
  <Tab value="second">Second Tab</Tab>
  <Tab value="third">Third Tab</Tab>
  <Tab value="fourth">Fourth Tab</Tab>
  <Tab value="fifth">Fifth Tab</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Propriedades

`Tab` aceita quaisquer props válidas de elemento `button` ou `a`, além destas:

| Nome      | Descrição                             |        Tipo         | Padrão |
| :-------- | --------------------------------------- | :-----------------: | :-----: |
| value     | Valor da aba                               |      `string`       |         |
| title     | Título da aba                               |      `string`       |         |
| icon      | Ícone exibido no início                               |  `React.ReactNode`  |         |
| counter   | Conteúdo exibido no final                               |  `number` `string`  |         |
| href      | Um URL para linkar.                               |      `string `      |         |
| label     | `<Label>` exibido no final                                |  `React.ReactNode`  |         |
| disabled  | Estado inativo                                |      `boolean`      |         |
| component | Substitui o componente raiz                               | `React.ElementType` |         |
| children  | Conteúdo da aba                               |  `React.ReactNode`  |         |
| qa        | Atributo `data-qa` do HTML, usado em testes                                |      `string`       |         |

## TabPanel

É um elemento contêiner para conteúdo associado a uma aba

### Propriedades

`TabPanel` aceita quaisquer props válidas de elemento `div` além destas:

| Nome     | Descrição                             |       Tipo        | Padrão |
| :------- | :-------------------------------------- | :---------------: | :-----: |
| children | Conteúdo do painel                        | `React.ReactNode` |         |
| value    | Valor da aba ativa                        |     `string`      |         |
| qa       | Atributo `data-qa` do HTML, usado em testes                                |     `string`      |         |

## API CSS

| Nome                             | Descrição                |
| :------------------------------- | :------------------------- |
| `--g-tabs-border-width`          | Largura da borda das abas          |
| `--g-tabs-item-height`           | Altura do item das abas           |
| `--g-tabs-item-border-width`     | Largura da borda do item das abas     |
| `--g-tabs-item-gap`              | Distância entre as abas      |
| `--g-tabs-vertical-item-height`  | Altura do item vertical das abas  |
| `--g-tabs-vertical-item-padding` | Preenchimento vertical do item das abas |
