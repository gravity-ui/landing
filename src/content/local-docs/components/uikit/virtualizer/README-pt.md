GRAVITY_TRANSLATION_BLOCK_0_END

O Virtualizer renderiza apenas a janela de linhas que está atualmente visível, o que torna listas de dezenas de milhares de itens acessíveis.

```tsx
import {ListVirtualizer, Virtualizer} from '@gravity-ui/uikit/virtualizer';
```

Este ponto de entrada precisa de `@tanstack/react-virtual`: é uma dependência peer opcional, então instale-a ao lado de `@gravity-ui/uikit`.

Duas coisas vivem aqui. `Virtualizer` é o motor — um contêiner de rolagem que posiciona e mede as linhas que você renderiza. `ListVirtualizer` é a camada de virtualização da [List](../List/README.md): ela envolve uma `<List>`, e a lista é renderizada através do motor sem nenhuma outra alteração.

## Virtualizer

O elemento que o componente renderiza é o próprio contêiner de rolagem, então sua altura deve ser limitada. `getItemSize` é a estimativa usada antes que uma linha seja renderizada; a menos que `measure` esteja desativado, a altura medida de uma linha de nível superior a substitui após a montagem, razão pela qual linhas de altura variável não precisam de configuração.

```tsx
import {Virtualizer} from '@gravity-ui/uikit/virtualizer';

const ROW_HEIGHT = 32;

function Log({records}) {
  return (
    <Virtualizer
      style={{height: 400}}
      count={records.length}
      getItemSize={() => ROW_HEIGHT}
      getItemKey={(index) => records[index].id}
      renderRow={({index}) => <div style={{height: ROW_HEIGHT}}>{records[index].message}</div>}
    />
  );
}
```

## ListVirtualizer

O wrapper é a única coisa que muda — a lista interna permanece como estava. Todas as suas props de configuração são opcionais: sem `estimateItemSize`, as alturas das linhas vêm do `size` da lista.

```tsx
import {List} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

function TrackList({tracks}) {
  return (
    <ListVirtualizer estimateItemSize={28}>
      <List
        aria-label="Archive"
        style={{maxHeight: 480}}
        items={tracks}
        getItemContent={(track) => track.title}
      />
    </ListVirtualizer>
  );
}
```

A raiz da `List` se torna o contêiner de rolagem, então limitar sua altura depende de você — caso contrário, a janela degenera para a lista completa. Os detalhes da camada estão na seção [Virtualization](../List/README.md#virtualization) da List.

### Um wrapper para todo o aplicativo

O wrapper é um provedor de contexto: ele cobre todas as `List` e `Select` abaixo dele, incluindo os popups dos `Select`s. Com `minItemsCount`, ele pode ficar uma vez ao lado do `Provider` de tema e virtualizar apenas as listas longas — uma lista com poucas linhas é renderizada como se não houvesse wrapper, com todas as linhas no DOM.

```tsx
import {Provider} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

root.render(
  <Provider theme="light">
    <ListVirtualizer minItemsCount={50}>
      <App />
    </ListVirtualizer>
  </Provider>,
);
```

Uma `List` conta suas linhas, incluindo cabeçalhos de seção. Uma `Select` conta suas opções sem os cabeçalhos de grupo e sem o filtro, então digitar no filtro não muda a lista de um modo para outro.

Um wrapper dentro de outro muda apenas o que lhe é dado e pega o restante do de cima, da mesma forma que um `Provider` de tema aninhado faz. Ao redor de uma única lista sob o wrapper raiz:

- `<ListVirtualizer overscan={20}>` mantém o limite da raiz e muda o buffer;
- `<ListVirtualizer minItemsCount={0}>` virtualiza a lista independentemente do seu tamanho;
- `<ListVirtualizer minItemsCount={Infinity}>` a mantém simples, e o chunk não é carregado para ela.

### Carregamento sob demanda

O código da janela — incluindo `@tanstack/react-virtual` — é um chunk próprio: importar `ListVirtualizer` não o traz para o bundle do aplicativo. O chunk é carregado quando a primeira lista longa o suficiente para `minItemsCount` é renderizada, e uma `Select` que será virtualizada começa a carregá-lo na montagem, antes que seu popup abra. Até que o chunk chegue, a lista mostra suas primeiras linhas na mesma raiz: a página não fica vazia, e a janela as substitui assim que pode ser renderizada, rolando para a linha ativa que a lista estava mostrando. Se o chunk falhar ao carregar, o erro alcança o limite de erro mais próximo da lista.

> [!NOTE]
> Em HTML renderizado no servidor, uma lista virtualizada tem suas primeiras linhas: não há viewport para medir a janela, então a janela assume o controle após a hidratação. O restante das linhas não está no markup — deixe uma lista não virtualizada quando todo o seu conteúdo precisar estar lá.

## Propriedades

### Virtualizer

O restante das props vai para o elemento contêiner de rolagem.

| Nome                  | Descrição                                                                                                    |                          Tipo                          | Padrão |
| :-------------------- | :----------------------------------------------------------------------------------------------------------- | :----------------------------------------------------: | :-----: |
| count                 | O número de itens de primeiro nível na lista                                                                 |                        `number`                        |         |
| getItemSize           | A altura de um item, incluindo seus filhos; os filhos chegam com o `parentKey`                               |            `(index, parentKey?) => number`             |         |
| getItemKey            | A chave de um item; os filhos chegam com o `parentKey`                                                       |              `(index, parentKey?) => Key`              |         |
| renderRow             | Renderiza uma linha: o item, a chave de seu pai e um callback renderizando seus filhos                       | `(item, parentKey, renderChildren) => React.ReactNode` |         |
| measure               | Mede as alturas reais das linhas de nível superior após a montagem, em vez de confiar em `getItemSize`      |                       `boolean`                        | `true`  |
| overscan              | O número de linhas renderizadas acima e abaixo da janela visível                                             |                        `number`                        |   `0`   |
| disableVirtualization | Renderiza todas as linhas; útil para uma lista conhecida por ser pequena                                     |                       `boolean`                        |         |
| persistedIndexes      | Linhas mantidas na janela mesmo quando fora da tela; cada entrada é um caminho de índices na hierarquia      |                   `Array<number[]>`                    |         |
| loading               | Se mais itens estão sendo carregados: até que volte para `false`, `onLoadMore` não é chamado novamente      |                       `boolean`                        |         |
| onLoadMore            | Chamado quando a rolagem se aproxima do fim                                                                  |                      `() => void`                      |         |
| apiRef                | Ref para a API imperativa: `scrollToIndex`, `scrollToOffset`, `scrollOffset`, `scrollRect`                   |              `React.Ref<VirtualizerApi>`               |         |
| containerRef          | Ref do elemento contêiner de rolagem                                                                         |                `React.Ref<HTMLElement>`                |         |

### ListVirtualizer

| Nome             | Descrição                                                                                                                               |            Tipo             |          Padrão          |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :----------------------: |
| children         | O `<List>` interno                                                                                                                       |         `ReactNode`         |                          |
| estimateItemSize | A estimativa de altura de uma linha antes de ser renderizada — uma constante ou uma função do contexto da linha                                          | `number \| (ctx) => number` | pelo `size` da lista |
| measure          | Mede as alturas reais das linhas após a montagem (linhas de altura variável fora da caixa)                                               |          `boolean`          |          `true`           |
| minItemsCount    | Uma lista com menos linhas é renderizada como se não houvesse wrapper; um `Select` conta suas opções, sem os cabeçalhos de grupo e sem o filtro |          `number`           |            `0`            |
| overscan         | O buffer de linhas fora da janela visível                                                                                          |          `number`           |            `5`            |

Um wrapper dentro de outro recebe as props que não lhe são dadas do wrapper acima: os padrões na tabela são os do wrapper mais externo.