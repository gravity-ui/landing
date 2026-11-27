<!--GITHUB_BLOCK-->

# List

<!--/GITHUB_BLOCK-->

O componente `List` renderiza uma lista de itens virtualizada, ordenável e filtrável com suporte para renderização personalizada e navegação por teclado.

```tsx
import {List} from '@gravity-ui/uikit';
```

### ItemsHeight

Determina a altura da lista de itens (ou uma função que retorna o valor da altura para uma lista). Pode ser útil ao definir a altura da lista dinamicamente, por exemplo, `(items: []) => number`.

### Items

Fornece um array de itens para uma lista:

<!--SANDBOX
import {List} from '@gravity-ui/uikit';

export default function () {
    return (
        <List items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']} itemsHeight={160} />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']} itemsHeight={160} />
```

<!--/GITHUB_BLOCK-->

Um item pode ser um escalar ou um valor arbitrário e deve ser `truthy` em qualquer caso.
Se for um valor arbitrário, certifique-se de especificar as funções de filtragem e renderização.
A renderização padrão apenas fornece um item como texto.

O campo especial `item.disabled` desabilita um item.

A personalização de renderização e altura oferece bastante espaço para experimentação.
Por exemplo, o código abaixo permite emular grupos:

<!--SANDBOX
import type {ListProps} from '@gravity-ui/uikit';
import {List} from '@gravity-ui/uikit';

type Item = {
    title: string;
    group?: boolean;
};

const items: ListProps<Item>['items'] = [
    {
        title: 'one',
        group: true,
        disabled: true,
    },
    {
        title: 'two',
    },
    {
        title: 'three',
        group: true,
        disabled: true,
    },
    {
        title: 'four',
    },
];

export default function () {
    return (
        <List
            items={items}
            onItemClick={(value) => console.log(value)}
            renderItem={(item) => {
                if (item.group) {
                    return (
                        <div className={'group'}>
                            <div className={'select-text'}>{item.title}</div>
                        </div>
                    );
                }

                return (
                    <div className={'select'}>
                        <div className={'select-text'}>{item.title}</div>
                    </div>
                );
            }}
            itemHeight={(item) => (item.group ? 24 : 36)}
            itemsHeight={160}
            filterItem={(filter) => (item) => item.title.includes(filter)}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={[
    {
      title: 'one',
      group: true,
      disabled: true,
    },
    {
      title: 'two',
    },
    {
      title: 'three',
      group: true,
      disabled: true,
    },
    {
      title: 'four',
    },
  ]}
  onItemClick={(value) => console.log(value)}
  renderItem={(item) => {
    if (item.group) {
      return (
        <div className={'group'}>
          <div className={'select-text'}>{item.title}</div>
        </div>
      );
    }
    return (
      <div className={'select'}>
        <div className={'select-text'}>{item.title}</div>
      </div>
    );
  }}
  itemHeight={(item) => (item.group ? 24 : 36)}
  itemsHeight={160}
  filterItem={(filter) => (item) => item.title.includes(filter)}
/>
```

<!--/GITHUB_BLOCK-->

### Filterable

A propriedade `filterable` desabilita a entrada para pesquisar um item se o seu valor for `false`. O seu valor padrão é `true`.

<!--SANDBOX
import {List} from '@gravity-ui/uikit';

export default function () {
    return (
        <List
            items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
            itemsHeight={160}
            filterable={false}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
  itemsHeight={160}
  filterable={false}
/>
```

<!--/GITHUB_BLOCK-->

### Sortable

A propriedade `sortable` habilita a troca de itens da lista se o seu valor for `true`. O seu valor padrão é `false`.

<!--SANDBOX
import {List} from '@gravity-ui/uikit';

export default function () {
    return (
        <List
            items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
            itemsHeight={160}
            sortable
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
  itemsHeight={160}
  sortable={true}
/>
```

<!--/GITHUB_BLOCK-->

### Virtualization

Para habilitar a virtualização, certifique-se de que uma das seguintes condições seja atendida:

1. Você define a propriedade `itemsHeight`. Neste caso, a altura da lista será fixa e igual a esse valor.
2. Você define o estilo `display: flex` para o contêiner pai da lista. Neste caso, a lista se adaptará à largura do contêiner.

### Gerenciamento externo

Às vezes, você pode querer gerenciar a atividade dos itens pelo teclado, mantendo o foco em um item externo.
O encaminhamento do evento `onKeyDown` para uma lista pode ajudá-lo aqui.
Da mesma forma, você pode encaminhar `onFocus` e `onBlur` se precisar repetir o comportamento quando um item ativo for perdido.

### Filter

A propriedade `filter` fornece o valor do filtro usado com a ordenação externa.

## Propriedades

| Nome              | Descrição
