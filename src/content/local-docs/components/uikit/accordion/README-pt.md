<!--GITHUB_BLOCK-->

# Accordion

<!--/GITHUB_BLOCK-->

O componente Accordion permite criar painéis de conteúdo recolhíveis onde os utilizadores podem mostrar ou ocultar secções de informação. Isto é útil para organizar grandes quantidades de conteúdo de forma compacta.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Base example

```tsx
<Accordion>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Controlar o estado do accordion

Pode controlar o estado do accordion utilizando as propriedades `value` e `onUpdate` do componente raiz, ou por item.

Exemplo de controlo de estado a partir do componente raiz:

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState<string | null>('item1');

    return (
        <Accordion value={value} onUpdate={setValue}>
            <Accordion.Item summary="Settings" value="item1">
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item summary="Notifications" value="item2">
                Manage notification preferences
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [value, setValue] = React.useState('item1');

  return (
    <Accordion value={value} onUpdate={setValue}>
      <Accordion.Item summary="Settings" value="item1">
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" value="item2">
        Manage notification preferences
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

Exemplo de controlo de estado por item através da propriedade `expanded`:

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);

    return (
        <Accordion>
            <Accordion.Item
                summary="Settings"
                onUpdate={setItem1}
                value="item1"
                expanded={item1}
            >
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item
                summary="Notifications"
                onUpdate={setItem2}
                value="item2"
                expanded={item2}
            >
                Manage notification preferences
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [item1, setItem1] = React.useState(true);
  const [item2, setItem2] = React.useState(false);
  return (
    <Accordion>
      <Accordion.Item summary="Settings" onUpdate={setItem1} value="item1" expanded={item1}>
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" onUpdate={setItem2} value="item2" expanded={item2}>
        Manage notification preferences
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

## Tamanho

Utilize a propriedade `size` para controlar o tamanho do `Accordion`. O tamanho padrão é `m`.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion size="m">
                <Accordion.Item summary="Medium Size">Content for medium accordion</Accordion.Item>
            </Accordion>
            <Accordion size="l">
                <Accordion.Item summary="Large Size">Content for large accordion</Accordion.Item>
            </Accordion>
            <Accordion size="xl">
                <Accordion.Item summary="Extra Large Size">
                    Content for extra large accordion
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion size="m">
    <Accordion.Item summary="Medium Size">
        Content for medium accordion
    </Accordion.Item>
</Accordion>
<Accordion size="l">
    <Accordion.Item summary="Large Size">
        Content for large accordion
    </Accordion.Item>
</Accordion>
<Accordion size="xl">
    <Accordion.Item summary="Extra Large Size">
        Content for extra large accordion
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Visualização

`solid`: Visualização principal com fundo (usada por padrão).

`top-bottom`: Visualização com bordas superior e inferior.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion view="solid">
                <Accordion.Item summary="Solid View">Content with solid background</Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
            </Accordion>
            <Accordion view="top-bottom">
                <Accordion.Item summary="Top-Bottom View">
                    Content with top-bottom borders
                </Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion view="solid">
    <Accordion.Item summary="Solid View">
        Content with solid background
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
<Accordion view="top-bottom">
    <Accordion.Item summary="Top-Bottom View">
        Content with top-bottom borders
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Posição da Seta

`end`: A seta está posicionada no final do cabeçalho (usada por padrão).

`start`: A seta está posicionada no início do cabeçalho.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion arrowPosition="end">
                <Accordion.Item summary="Arrow at End">Content with arrow at the end</Accordion.Item>
            </Accordion>
            <Accordion arrowPosition="start">
                <Accordion.Item summary="Arrow at Start">
                    Content with arrow at the start
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion arrowPosition="end">
    <Accordion.Item summary="Arrow at End">
        Content with arrow at the end
    </Accordion.Item>
</Accordion>
<Accordion arrowPosition="start">
    <Accordion.Item summary="Arrow at Start">
        Content with arrow at the start
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Múltiplos

A propriedade `multiple` permite que vários itens do accordion sejam expandidos simultaneamente.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion multiple>
            <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
            <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
            <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion multiple>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Resumo Personalizado

Utilize o componente `Accordion.Summary` para criar um cabeçalho personalizado.

<!--SANDBOX
import {Accordion, Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item value="custom">
                <Accordion.Summary>
                    {(props) => (
                        <Button {...props} view="flat" width="max">
                            Custom Summary Button
                        </Button>
                    )}
                </Accordion.Summary>
                Content with custom summary component
            </Accordion.Item>
            <Accordion.Item summary="Regular Summary">
                Content with regular summary prop
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item value="custom">
    <Accordion.Summary>
      {(props) => (
        <Button {...props} view="flat" width="max">
          <Icon data={Settings} size={16} />
          Custom Summary Button
        </Button>
      )}
    </Accordion.Summary>
    Content with custom summary component
  </Accordion.Item>
  <Accordion.Item summary="Regular Summary">Content with regular summary prop</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Estado Desativado

Itens individuais do accordion podem ser desativados utilizando a propriedade `disabled`.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item summary="Active Item">
                This item is active and can be expanded
            </Accordion.Item>
            <Accordion.Item summary="Disabled Item" disabled>
                This item is disabled and cannot be expanded
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item summary="Active Item">This item is active and can be expanded</Accordion.Item>
  <Accordion.Item summary="Disabled Item" disabled>
    This item is disabled and cannot be expanded
  </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Propriedades

### Accordion

| Nome          | Descrição                                        |            Tipo            |  Padrão  |
| :------------ | :----------------------------------------------- | :------------------------: | :-------: |
| size          | Tamanho do Accordion                             |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | Aparência do Accordion                           |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | Permite que múltiplos itens sejam expandidos simultaneamente |         `boolean`          |  `false`  |
| arrowPosition | Posição do indicador de seta                     |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | Valor padrão para estado não controlado          | `string` `string[]` `null` |           |
| value         | Valor atual para estado controlado               | `string` `string[]` `null` |           |
| onUpdate      | Função de callback chamada quando o estado muda  |         `Function`         |           |
| ariaLevel     | Nível de cabeçalho para acessibilidade           |          `number`          |    `3`    |
| className     | Nome da classe CSS                               |          `string`          |           |
| qa            | Atributo `data-qa` HTML, usado para testes       |          `string`          |           |

### Accordion.Item

| Nome            | Descrição                                      |       Type        | Padrão |
| :-------------- | :--------------------------------------------- | :---------------: | :----: |
| value           | Identificador único para o item                |     `string`      |        |
| summary         | Cabeçalho do item do accordion                 | `React.ReactNode` |        |
| expanded        | Estado expandido controlado                    |     `boolean`     |        |
| defaultExpanded | Estado expandido padrão                        |     `boolean`     |        |
| disabled        | Desativa o item do accordion                   |     `boolean`     | `false` |
| keepMounted     | Mantém o conteúdo no DOM mesmo quando recolhido |     `boolean`     |        |
| onUpdate        | Função de callback chamada quando o estado do item muda |    `Function`     |        |
| className       | Nome da classe CSS                             |     `string`      |        |
| qa              | Atributo `data-qa` HTML, usado para testes     |     `string`      |        |

### Accordion.Summary

| Nome     | Descrição                                                                             |                      Tipo                       |                                          Padrão                                          |
| :------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | Função de renderização de resumo personalizada                                          | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | Atributo `data-qa` do HTML, usado para testes. Funciona apenas se `qa` for passado em Accordion.Item |                    `string`                     | `${accordion-item}-summary` se `qa` for passado em Accordion.Item, `disclosure-summary` se não |

## API CSS

| Nome                           | Descrição                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | Preenchimento em linha (horizontal) para o acordeão |
