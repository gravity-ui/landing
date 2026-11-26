<!--/GITHUB_BLOCK-->

# Accordion

<!--/GITHUB_BLOCK-->

O componente Accordion permite criar painéis de conteúdo recolhíveis onde os usuários podem mostrar ou ocultar seções de informações. Isso é útil para organizar grandes quantidades de conteúdo de forma compacta.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Exemplo básico

```tsx
<Accordion>
  <Accordion.Item summary="Primeiro Item">Conteúdo do primeiro item</Accordion.Item>
  <Accordion.Item summary="Segundo Item">Conteúdo do segundo item</Accordion.Item>
  <Accordion.Item summary="Terceiro Item">Conteúdo do terceiro item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Controlando o estado do accordion

Você pode controlar o estado do accordion usando as propriedades `value` e `onUpdate` do componente raiz, ou por item.

Exemplo controlando o estado a partir do componente raiz:

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState<string | null>('item1');

    return (
        <Accordion value={value} onUpdate={setValue}>
            <Accordion.Item summary="Configurações" value="item1">
                Configure as configurações da sua aplicação
            </Accordion.Item>
            <Accordion.Item summary="Notificações" value="item2">
                Gerencie as preferências de notificação
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
      <Accordion.Item summary="Configurações" value="item1">
        Configure as configurações da sua aplicação
      </Accordion.Item>
      <Accordion.Item summary="Notificações" value="item2">
        Gerencie as preferências de notificação
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

Exemplo controlando o estado por item através da prop `expanded`:

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);

    return (
        <Accordion>
            <Accordion.Item
                summary="Configurações"
                onUpdate={setItem1}
                value="item1"
                expanded={item1}
            >
                Configure as configurações da sua aplicação
            </Accordion.Item>
            <Accordion.Item
                summary="Notificações"
                onUpdate={setItem2}
                value="item2"
                expanded={item2}
            >
                Gerencie as preferências de notificação
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
      <Accordion.Item summary="Configurações" onUpdate={setItem1} value="item1" expanded={item1}>
        Configure as configurações da sua aplicação
      </Accordion.Item>
      <Accordion.Item summary="Notificações" onUpdate={setItem2} value="item2" expanded={item2}>
        Gerencie as preferências de notificação
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

## Tamanho

Use a propriedade `size` para controlar o tamanho do `Accordion`. O tamanho padrão é `m`.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion size="m">
                <Accordion.Item summary="Tamanho Médio">Conteúdo para accordion médio</Accordion.Item>
            </Accordion>
            <Accordion size="l">
                <Accordion.Item summary="Tamanho Grande">Conteúdo para accordion grande</Accordion.Item>
            </Accordion>
            <Accordion size="xl">
                <Accordion.Item summary="Tamanho Extra Grande">
                    Conteúdo para accordion extra grande
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion size="m">
    <Accordion.Item summary="Tamanho Médio">
        Conteúdo para accordion médio
    </Accordion.Item>
</Accordion>
<Accordion size="l">
    <Accordion.Item summary="Tamanho Grande">
        Conteúdo para accordion grande
    </Accordion.Item>
</Accordion>
<Accordion size="xl">
    <Accordion.Item summary="Tamanho Extra Grande">
        Conteúdo para accordion extra grande
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
                <Accordion.Item summary="Vista Sólida">Conteúdo com fundo sólido</Accordion.Item>
                <Accordion.Item summary="Outro Item">Mais conteúdo</Accordion.Item>
            </Accordion>
            <Accordion view="top-bottom">
                <Accordion.Item summary="Vista Superior-Inferior">
                    Conteúdo com bordas superior e inferior
                </Accordion.Item>
                <Accordion.Item summary="Outro Item">Mais conteúdo</Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion view="solid">
    <Accordion.Item summary="Vista Sólida">
        Conteúdo com fundo sólido
    </Accordion.Item>
    <Accordion.Item summary="Outro Item">
        Mais conteúdo
    </Accordion.Item>
</Accordion>
<Accordion view="top-bottom">
    <Accordion.Item summary="Vista Superior-Inferior">
        Conteúdo com bordas superior e inferior
    </Accordion.Item>
    <Accordion.Item summary="Outro Item">
        Mais conteúdo
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Posição da Seta

`end`: A seta é posicionada no final do cabeçalho (usado por padrão).

`start`: A seta é posicionada no início do cabeçalho.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion arrowPosition="end">
                <Accordion.Item summary="Seta no Final">Conteúdo com seta no final</Accordion.Item>
            </Accordion>
            <Accordion arrowPosition="start">
                <Accordion.Item summary="Seta no Início">
                    Conteúdo com seta no início
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion arrowPosition="end">
    <Accordion.Item summary="Seta no Final">
        Conteúdo com seta no final
    </Accordion.Item>
</Accordion>
<Accordion arrowPosition="start">
    <Accordion.Item summary="Seta no Início">
        Conteúdo com seta no início
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Múltiplos

A propriedade `multiple` permite que vários itens do acordeão sejam expandidos simultaneamente.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion multiple>
            <Accordion.Item summary="Primeiro Item">Conteúdo do primeiro item</Accordion.Item>
            <Accordion.Item summary="Segundo Item">Conteúdo do segundo item</Accordion.Item>
            <Accordion.Item summary="Terceiro Item">Conteúdo do terceiro item</Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion multiple>
  <Accordion.Item summary="Primeiro Item">Conteúdo do primeiro item</Accordion.Item>
  <Accordion.Item summary="Segundo Item">Conteúdo do segundo item</Accordion.Item>
  <Accordion.Item summary="Terceiro Item">Conteúdo do terceiro item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Resumo Personalizado

Use o componente `Accordion.Summary` para criar um cabeçalho personalizado.

<!--SANDBOX
import {Accordion, Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item value="custom">
                <Accordion.Summary>
                    {(props) => (
                        <Button {...props} view="flat" width="max">
                            Botão de Resumo Personalizado
                        </Button>
                    )}
                </Accordion.Summary>
                Conteúdo com componente de resumo personalizado
            </Accordion.Item>
            <Accordion.Item summary="Resumo Regular">
                Conteúdo com a prop de resumo regular
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
          Botão de Resumo Personalizado
        </Button>
      )}
    </Accordion.Summary>
    Conteúdo com componente de resumo personalizado
  </Accordion.Item>
  <Accordion.Item summary="Resumo Regular">Conteúdo com a prop de resumo regular</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Estado Desabilitado

Itens individuais do acordeão podem ser desabilitados usando a propriedade `disabled`.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

```jsx
export default function () {
    return (
        <Accordion>
            <Accordion.Item summary="Item Ativo">
                Este item está ativo e pode ser expandido
            </Accordion.Item>
            <Accordion.Item summary="Item Desativado" disabled>
                Este item está desativado e não pode ser expandido
            </Accordion.Item>
        </Accordion>
    );
}
```

SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item summary="Item Ativo">Este item está ativo e pode ser expandido</Accordion.Item>
  <Accordion.Item summary="Item Desativado" disabled>
    Este item está desativado e não pode ser expandido
  </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Propriedades

### Accordion

| Nome          | Descrição                                        |            Tipo            |  Padrão  |
| :------------ | :----------------------------------------------- | :------------------------: | :------: |
| size          | Tamanho do Accordion                             |     `"m"` `"l"` `"xl"`     |   `"m"`  |
| view          | Aparência do Accordion                           |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | Permite que múltiplos itens sejam expandidos simultaneamente |         `boolean`          |  `false` |
| arrowPosition | Posição do indicador de seta                     |     `"start"` `"end"`      |  `"end"` |
| defaultValue  | Valor padrão para estado não controlado          | `string` `string[]` `null` |          |
| value         | Valor atual para estado controlado               | `string` `string[]` `null` |          |
| onUpdate      | Função de callback chamada quando o estado muda  |         `Function`         |          |
| ariaLevel     | Nível do cabeçalho para acessibilidade           |          `number`          |    `3`   |
| className     | Nome da classe CSS                               |          `string`          |          |
| qa            | Atributo `data-qa` do HTML, usado para testes    |          `string`          |          |

### Accordion.Item

| Nome            | Descrição                                      |       Tipo        | Padrão |
| :-------------- | :--------------------------------------------- | :---------------: | :----: |
| value           | Identificador único para o item                |     `string`      |        |
| summary         | Cabeçalho do item do Accordion                 | `React.ReactNode` |        |
| expanded        | Estado expandido controlado                    |     `boolean`     |        |
| defaultExpanded | Estado expandido padrão                        |     `boolean`     |        |
| disabled        | Desabilita o item do accordion                 |     `boolean`     | `false`|
| keepMounted     | Mantém o conteúdo no DOM mesmo quando recolhido |     `boolean`     |        |
| onUpdate        | Função de callback chamada quando o estado do item muda |    `Function`     |        |
| className       | Nome da classe CSS                             |     `string`      |        |
| qa              | Atributo `data-qa` do HTML, usado para testes  |     `string`      |        |

### Accordion.Summary

| Nome     | Descrição                                                                             |                      Tipo                       |                                          Padrão                                          |
| :------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | Função de renderização de resumo personalizada                                          | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | Atributo `data-qa` do HTML, usado para testes. Funciona apenas se `qa` for passado em Accordion.Item |                    `string`                     | `${accordion-item}-summary` se `qa` for passado em Accordion.Item, `disclosure-summary` se não |

## API CSS

| Nome                           | Descrição                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | Preenchimento em linha (horizontal) para o acordeão |