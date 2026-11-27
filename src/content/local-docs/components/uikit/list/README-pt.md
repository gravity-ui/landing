Uma `List` exibe uma lista de itens interativos e permite que o usuário navegue por eles com o teclado,
selecione-os, reordene-os ou execute uma ação. Seleção, virtualização e arrastar e soltar são
camadas opcionais: nada delas existe até que você as ative.

- [List](#list)
  - [Uso Básico](#uso-básico)
  - [Tamanhos](#tamanhos)
  - [Getters de Item](#getters-de-item)
    - [getItemChildren](#getitemchildren)
    - [getItemContent](#getitemcontent)
    - [getItemDisabled](#getitemdisabled)
    - [getItemId](#getitemid)
    - [getItemTextValue](#getitemtextvalue)
  - [Ações de Item](#ações-de-item)
  - [renderItem](#renderitem)
    - [List.ItemView](#listitemview)
    - [Marcação Personalizada](#marcação-personalizada)
    - [Links](#links)
  - [O item ativo](#o-item-ativo)
  - [Seleção](#seleção)
    - [Seleção Única](#seleção-única)
    - [Seleção Múltipla](#seleção-múltipla)
  - [Virtualização](#virtualização)
  - [Linhas Interativas](#linhas-interativas)
  - [Arrastar e Soltar](#arrastar-e-soltar)
    - [@hello-pangea/dnd](#hello-pangeadnd)
    - [Qualquer outra biblioteca](#qualquer-outra-biblioteca)
  - [useListFocusOwner](#uselistfocusowner)
  - [Acessibilidade](#acessibilidade)
    - [Teclado](#teclado)
  - [Propriedades](#propriedades)
    - [List](#list-1)
    - [ListItemContext](#listitemcontext)
    - [ListItemHelpers](#listitemhelpers)
    - [Atributos de Dados](#atributos-de-dados)
    - [ListVirtualizer](#listvirtualizer)
    - [ListDndAdapter](#listdndadapter)

## Uso Básico

```tsx
import {List} from '@gravity-ui/uikit';

const languages = ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Kotlin'];

function LanguageList() {
  return <List aria-label="Languages" items={languages} />;
}
```

<ListExample />

Uma lista não tem um rótulo visível próprio, portanto, `aria-label` (ou `aria-labelledby`) é obrigatório — a
lista informa isso em desenvolvimento quando nenhum dos dois é passado.

## Tamanhos

A prop `size` define a densidade das linhas — `s`, `m` (o padrão), `l` ou `xl`. As linhas e
os cabeçalhos de seção de uma lista têm a altura e os preenchimentos de seu tamanho — veja
[Tamanhos de `ListItemView`](../ListItemView/README.md#sizes).

<ListSizes />

## Getters de Item

`List` não pede que você converta seus dados em um formato próprio: `items` contém seus objetos como
eles são, e um getter é como a lista faz uma pergunta sobre um deles — qual é seu id, o que mostrar
na linha, o que as pesquisas de typeahead buscam, se o item está desabilitado, se ele contém as
opções de uma seção. Cada getter tem um padrão que lê o campo de mesmo nome, então dados que
já respondem dessa forma não precisam de getter algum.

Seu item retorna intocado: ele vem com `onItemAction`, e `renderItem` o recebe junto com o estado
da linha.

| Getter             | Responde                                         | Padrão                            |
| :----------------- | :----------------------------------------------- | :-------------------------------- |
| `getItemChildren`  | as opções de uma seção, se o item for uma        | `item.children`                   |
| `getItemContent`   | o que mostrar em uma linha                       | a própria string                  |
| `getItemDisabled`  | se o item está desabilitado                      | `item.disabled`                   |
| `getItemId`        | o id de um item                                  | `item.id`, uma string é seu próprio id |
| `getItemTextValue` | o que as pesquisas de typeahead buscam            | o conteúdo, quando é uma string   |

Quando uma linha precisa de mais do que um valor — um ícone, uma descrição, um layout inteiro próprio — os
getters dão lugar e [`renderItem`](#renderitem) desenha a linha em vez disso.

### getItemChildren

`(item: T) => readonly T[] | undefined` — as opções de uma seção. Por padrão, o campo `children`
é lido, e apenas quando é um array.

Um item que tem filhos se torna uma seção: sua própria linha é o cabeçalho — apresentacional, fora
da navegação e seleção — seguido por suas opções, e um leitor de tela anuncia uma opção
junto com o nome de sua seção.

> [!NOTE]
> Apenas um nível de aninhamento é permitido: filhos de uma opção dentro de uma seção são reportados
> em desenvolvimento e renderizados como opções simples.

```tsx
import {List} from '@gravity-ui/uikit';

const documents = [
  {
    id: 'recent',
    name: 'Recent',
    children: [
      {id: 'report', name: 'Annual report'},
      {id: 'plan', name: 'Marketing plan'},
    ],
  },
  {
    id: 'all',
    name: 'All',
    children: [
      {id: 'backlog', name: 'Backlog'},
      {id: 'sync', name: 'Team sync'},
    ],
  },
];

function DocumentList() {
  return <List aria-label="Documents" items={documents} getItemContent={(item) => item.name} />;
}
```

<ListSections />

### getItemContent

`(item: T) => React.ReactNode` — o que mostrar em uma linha. Por padrão, um item string se renderiza
e um item de qualquer outra forma não renderiza nada, o que é reportado em desenvolvimento.

O resultado é um nó, não apenas texto, então um ícone ou um `<Text>` ao lado do rótulo é aceitável — mas
qualquer coisa que não seja uma string simples deixa o typeahead sem uma consulta, veja `getItemTextValue` abaixo.

O que quer que o getter retorne é colocado nos filhos da linha. Os slots da visualização da linha
(`startContent`, `description`, `endContent`) são suas props em vez de seu conteúdo, então eles são
definidos em [`renderItem`](#listitemview) — assim como a marcação da própria linha.

```tsx
import {CircleCheck, TriangleExclamation} from '@gravity-ui/icons';
import {Flex, Icon, List} from '@gravity-ui/uikit';

const services = [
  {id: 'api', name: 'API gateway', healthy: true},
  {id: 'database', name: 'Database', healthy: false},
  {id: 'cdn', name: 'CDN', healthy: true},
];

```tsx
import {Flex, List, Text} from '@gravity-ui/uikit';

function ServiceList() {
  return (
    <List
      aria-label="Services"
      items={services}
      getItemContent={(service) => (
        <Flex gap="spacing-2" alignItems="center">
          <Icon data={service.healthy ? CircleCheck : TriangleExclamation} size={14} />
          {service.name}
        </Flex>
      )}
      getItemTextValue={(service) => service.name}
    />
  );
}
```

<ListItemContent />

### getItemDisabled

`(item: T) => boolean` — se um item está desabilitado. Por padrão, o campo `disabled` do item
é lido.

Um item desabilitado é excluído de todas as interações: o foco e os cliques não o ativam, as setas,
`Home`/`End` e a digitação o pulam, gestos nunca o selecionam, e uma lista cujo item ativo não está
definido coloca seu foco de tabulação em um item habilitado em vez disso. Ele permanece na lista para
um leitor de tela (`aria-disabled`, mais `data-disabled` para seu CSS), e um `selectedIds` controlado
ainda pode contê-lo.

### getItemId

`(item: T) => string` — a identidade de um item. Por padrão, um item de string é seu próprio id, e um
item de qualquer outra forma é esperado ter um campo `id`.

Ids são a linguagem que a lista fala com você: `activeItemId`, `selectedIds`, `onItemAction` e o
adaptador de arrastar e soltar passam todos eles, e o id DOM de uma linha é derivado de um deles. Eles
têm que ser únicos e estáveis entre renderizações — um id que muda move a seleção e o cursor
com ele. Um id duplicado e um ausente são relatados em desenvolvimento; a lista não tem fallback
posicional, pois uma instabilidade oculta é pior do que um erro explícito.

### getItemTextValue

`(item: T) => string` — o texto que a digitação procura. Por padrão, é o conteúdo da linha quando
esse conteúdo é uma string.

O valor é usado apenas para digitação: ele não nomeia a linha para um leitor de tela, esse é o
trabalho do próprio conteúdo (ou de um `aria-label` em sua própria marcação). Quando o conteúdo não é
uma string simples e o getter está ausente, a lista informa isso em desenvolvimento e a linha
permanece invisível para a digitação.

## Ações de item

`onItemAction` é o gesto de aplicação de uma linha — um clique, `Enter` e `Espaço` enquanto um modo
de seleção está ativo. O item vem com seu id, então não há mapa de busca para construir, e o evento
do gesto vem em terceiro: um `MouseEvent` para um clique, um `KeyboardEvent` para uma tecla (`'key' in event`
os diferencia). Ele carrega os modificadores de um clique e permite que o padrão nativo seja suprimido —
a receita de [links](#links) é construída sobre ele.

Um clique do mouse em uma opção também é publicado para o `eventBroker` do kit (os assinantes veem
`componentId: 'g-List'` — o broker prefixa o id de um componente — e `eventId: 'click'`), a maneira
como o restante da análise da biblioteca é coletado. Teclas não são publicadas, nem cliques em uma
linha desabilitada ou em um cabeçalho de seção.

```tsx
import {Flex, List, Text} from '@gravity-ui/uikit';

const commands = [
  {id: 'copy', title: 'Copy'},
  {id: 'paste', title: 'Paste'},
  {id: 'duplicate', title: 'Duplicate'},
  {id: 'delete', title: 'Delete'},
];

function CommandList() {
  const [currentId, setCurrentId] = React.useState();

  return (
    <Flex direction="column" gap="spacing-2">
      <List
        aria-label="Actions"
        items={commands}
        getItemContent={(command) => command.title}
        onItemAction={setCurrentId}
      />
      <Text color="secondary">You applied item ID: {currentId}</Text>
    </Flex>
  );
}
```

<ListActions />

## renderItem

`renderItem(ctx, helpers)` desenha uma linha em vez da padrão. `ctx` carrega o item, seu
conteúdo e seu estado, e `helpers` carrega as props da linha: `getItemProps()` para o elemento
da linha, `getItemViewProps()` para a visualização da linha e `getCellProps()` para as células de uma grade.

Ele desenha todas as linhas, incluindo cabeçalhos de seção — eles chegam com `ctx.kind === 'section'`,
`getItemProps()` lhes dá as props de um cabeçalho em vez de uma opção, e
`getItemViewProps()` carrega apenas o `size` (um cabeçalho não tem estado). Ramifique com base no tipo e
desenhe o cabeçalho com `List.SectionHeader`:

```tsx
renderItem={(ctx, {getItemProps, getItemViewProps}) =>
  ctx.kind === 'section' ? (
    <List.SectionHeader {...getItemProps()} {...getItemViewProps()}>
      {ctx.content}
    </List.SectionHeader>
  ) : (
    <List.ItemView {...getItemProps()} {...getItemViewProps()}>
      {ctx.content}
    </List.ItemView>
  )
}
```

> [!NOTE] > `List.ItemView` é a maneira recomendada de desenhar uma linha complexa: ela implementa as diretrizes do
> sistema de design — tamanhos, espaçamento, tipografia e a indicação dos estados da linha — então uma linha construída
> a partir de seus slots permanece consistente com o restante da biblioteca. Marcação própria é a resposta
> apenas quando a linha não pode ser expressa com os slots de forma alguma.

### List.ItemView

`List.ItemView` é a linha do render padrão: ela fornece uma linha com um ícone inicial, uma descrição e
conteúdo final sem nenhuma marcação própria. A mesma visualização é exportada por si só como
[`ListItemView`](../ListItemView/README.md) — com as props de uma linha de árvore por cima, para linhas construídas
fora de uma lista.

```tsx
import {Clock, Envelope, Star} from '@gravity-ui/icons';
import {Icon, Label, List} from '@gravity-ui/uikit';

const mailboxes = [
  {id: 'inbox', name: 'Inbox', description: 'Unread first', icon: Envelope, count: 24},
  {id: 'starred', name: 'Starred', description: 'Flagged by you', icon: Star, count: 3},
  {id: 'snoozed', name: 'Snoozed', description: 'Back later today', icon: Clock, count: 1},
];

function MailboxList() {
  return (
    <List
      aria-label="Mailboxes"
      items={mailboxes}
      getItemTextValue={(mailbox) => mailbox.name}
      renderItem={(ctx, {getItemProps, getItemViewProps}) => (
        <List.ItemView
          {...getItemProps()}
          {...getItemViewProps()}
          startContent={<Icon data={ctx.item.icon} size={16} />}
          description={ctx.item.description}
          endContent={<Label>{ctx.item.count}</Label>}
        >
          {ctx.item.name}
        </List.ItemView>
      )}
    />
  );
}
```

<ListItemSlots />

### Marcação personalizada

`renderItem` pode retornar qualquer coisa — as props da lista ainda vêm de `getItemProps()`,
mas nada da visualização da linha é herdado: a aparência da linha e a forma como ela mostra seus estados
tornam-se suas.

Mostre o cursor do teclado com `ctx.state.cursorVisible`, da mesma forma que a linha padrão faz: o estado
`active` também pertence à linha sobre a qual o mouse pairou por último, e ele sobrevive à perda de foco da lista,
então uma indicação ligada apenas a ele permanece. O hover em si é seu — geralmente um CSS simples
`:hover`.

```tsx
import {Avatar, Flex, List, Text} from '@gravity-ui/uikit';

function TeammateList({users}) {
  return (
    <List
      aria-label="Teammates"
      items={users}
      style={{gap: 8}}
      getItemTextValue={(user) => user.name}
      renderItem={(ctx, {getItemProps}) => (
        <div
          {...getItemProps()}
          className="teammate" // o hover vive no CSS do consumidor
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: 12,
            borderRadius: 12,
            cursor: 'pointer',
            outline: `2px solid var(${
              ctx.state.active && ctx.state.cursorVisible
                ? '--g-color-line-brand'
                : '--g-color-line-generic'
            })`,
          }}
        >
          <Avatar text={ctx.item.name} size="l" />
          <Flex direction="column">
            <Text variant="subheader-1">{ctx.item.name}</Text>
            <Text color="secondary" variant="caption-2">
              {ctx.item.role}
            </Text>
          </Flex>
        </div>
      )}
    />
  );
}
```

<ListCustomMarkup />

GRAVITY_TRANSLATION_BLOCK_1_END

Qualquer coisa passada para `getItemProps(overrides)` é composta com as props da lista em vez de substituí-las: os manipuladores são chamados em cadeia, `className`, `ref` e `style` são mesclados.

### Links

Renderizar uma linha como uma âncora dá a ela as funcionalidades de um link — a URL na barra de status, "Abrir em nova aba", um clique do meio. Um clique é navegado pelo próprio navegador, incluindo os modificadores
(`Ctrl`/`Cmd`+clique abre uma aba em segundo plano, `Shift`+clique uma janela); `Enter` é interceptado pela
lista, então o teclado navega através de `onItemAction` — o evento os diferencia.

> [!IMPORTANT]
> Um leitor de tela anuncia tal linha como uma opção, não como um link: `role="option"` substitui o
> papel da âncora, então o link é uma funcionalidade do navegador em vez de uma promessa para
> tecnologia assistiva. Qualquer coisa que o usuário precise saber antes de ativar a linha pertence ao seu
> nome acessível — o exemplo diz que o link abre uma nova aba, que o ícone apenas mostra
> visualmente. Quando a linha deve permanecer um link real para tecnologia assistiva, coloque-a dentro de uma célula de uma
> [grade](#interactive-rows) em vez disso: lá seu próprio papel sobrevive.

```tsx
import {ArrowUpRightFromSquare} from '@gravity-ui/icons';
import {Icon, List} from '@gravity-ui/uikit';

const specs = [
  {
    id: 'listbox',
    name: 'ARIA listbox pattern',
    description: 'w3.org',
    href: 'https://www.w3.org/WAI/ARIA/apg/patterns/listbox/',
  },
  {
    id: 'grid',
    name: 'ARIA grid pattern',
    description: 'w3.org',
    href: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/',
  },
  {
    id: 'components',
    name: 'Gravity UI components',
    description: 'gravity-ui.com',
    href: 'https://gravity-ui.com/components',
  },
];

function SpecList() {
  return (
    <List
      aria-label="Specifications"
      items={specs}
      getItemTextValue={(spec) => spec.name}
      onItemAction={(id, spec, event) => {
        // Um clique é a navegação própria do navegador; Enter é da lista
        if ('key' in event) {
          window.open(spec.href, '_blank', 'noopener,noreferrer');
        }
      }}
      renderItem={(ctx, {getItemProps, getItemViewProps}) => (
        <List.ItemView
          component="a"
          href={ctx.item.href}
          target="_blank"
          rel="noopener noreferrer"
          {...getItemProps({'aria-label': `${ctx.item.name}, opens in a new tab`})}
          {...getItemViewProps()}
          description={ctx.item.description}
          endContent={<Icon data={ArrowUpRightFromSquare} size={14} />}
        >
          {ctx.item.name}
        </List.ItemView>
      )}
    />
  );
}
```

<ListLinks />

GRAVITY_TRANSLATION_BLOCK_2_END

## O item ativo

Um item por vez está ativo — aquele em que o teclado age. Ele segue o ponteiro enquanto o usuário está trabalhando com o mouse (desative isso com `activateOnHover`) e as setas enquanto eles estão trabalhando com o teclado, e o destaque corresponde à entrada em uso.

O foco DOM segue o item ativo enquanto uma linha da lista o mantém — sob o mouse também — então a linha focada, a linha ativa e o ponto de tabulação são sempre um e o mesmo, e `Tab` sai da lista de qualquer lugar. Enquanto nada está ativo, `Tab` entra na lista na primeira linha selecionada (`Shift`+`Tab` — na última), ou na primeira linha (a última) quando nada está selecionado. O foco nunca é retirado de fora: enquanto ele está em outro lugar na página, ou dentro do conteúdo interativo de uma célula, o hover move apenas o destaque e o ponto de tabulação.

O cursor escuro é desenhado pela lista que o usuário está controlando: trabalhar com o mouse o desativa (a linha sob o ponteiro é destacada pelo CSS `:hover` em vez disso), e o mesmo acontece com o foco saindo da lista — uma tecla pressionada em uma lista vizinha ilumina apenas essa lista. Uma tecla pressionada nesta, ou o foco retornando a ela, traz o cursor de volta.

O item ativo pode ser controlado com `activeItemId` e `onActiveItemUpdate`, onde `null` significa
que nada está ativo. Um ID que vem do seu próprio código move o destaque e o foco do teclado (e o foco DOM, enquanto uma linha o mantém). Tal ativação sempre mostra o cursor — a lista não o solicitou, então a UI que o fez (um botão ao lado da lista) tem algo para mostrar.

A lista mantém a linha ativa visível rolando sua própria raiz em vez da página: na montagem, em uma tecla, quando as linhas mudam ao redor dela e quando `activeItemId` muda enquanto o ponteiro está fora da lista.
Uma linha que o ponteiro ativa não é rolada. Para isso, a raiz tem que rolar — limite sua altura e defina `overflow: auto`; uma raiz que não o faz volta para `scrollIntoView`, e apenas em uma tecla.

```tsx
import {Button, Flex, List} from '@gravity-ui/uikit';

const languages = ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Kotlin'];

function LanguageList() {
  const [activeItemId, setActiveItemId] = React.useState(languages[1]);

  return (
    <Flex direction="column" gap="spacing-2">
      <Flex gap="spacing-2">
        <Button onClick={() => setActiveItemId(languages[0])}>Primeiro</Button>
        <Button onClick={() => setActiveItemId(languages[languages.length - 1])}>Último</Button>
        <Button onClick={() => setActiveItemId(null)}>Nenhum</Button>
      </Flex>
      <List
        aria-label="Languages"
        items={languages}
        activeItemId={activeItemId}
        onActiveItemUpdate={setActiveItemId}
      />
    </Flex>
  );
}
```

<ListControlledActivation />

## Seleção

Por padrão, `List` não permite seleção, mas isso pode ser habilitado usando a prop `selectionMode`.
Os itens selecionados são um array de IDs, controlados com `selectedIds` e `onSelectedUpdate` ou
não controlados com `defaultSelectedIds`. Cabeçalhos de seção e itens desabilitados nunca são selecionados por um
gesto, e um `onItemAction` passado junto é chamado pelo mesmo gesto, logo após a
seleção ter sido atualizada. A indicação segue o modo — um destaque em `single`, uma marca de seleção
em `multiple` — e ainda não há prop para escolhê-lo.

### Seleção única

Apenas um item pode ser selecionado por vez: escolher outro move a seleção para ele, e
clicar no item já selecionado não o limpa. A linha selecionada é destacada.

```tsx
import {List} from '@gravity-ui/uikit';

const languages = ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Kotlin'];

function LanguagePicker() {
  const [selectedIds, setSelectedIds] = React.useState([languages[0]]);

  return (
    <List
      aria-label="Languages"
      items={languages}
      selectionMode="single"
      selectedIds={selectedIds}
      onSelectedUpdate={setSelectedIds}
    />
  );
}
```

<ListSingleSelection />

### Seleção múltipla

Qualquer número de itens pode ser selecionado, e um clique em um item selecionado o limpa. Linhas selecionadas são
marcadas com uma marca de seleção em vez de um destaque, que competiria com o destaque da linha ativa.
O modo também traz os gestos de intervalo — um intervalo a partir do item escolhido por último, e selecionar tudo;
todos eles estão na [tabela de teclado](#keyboard). Um intervalo é computado sobre os dados em vez de
sobre o DOM, então ele cobre as linhas fora da janela de virtualização também.

```tsx
import {Flex, List, Text} from '@gravity-ui/uikit';

const languages = ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Kotlin'];

function LanguagePicker() {
  const [selectedIds, setSelectedIds] = React.useState([]);

  return (
    <Flex direction="column" gap="spacing-2">
      <List
        aria-label="Languages"
        items={languages}
        selectionMode="multiple"
        selectedIds={selectedIds}
        onSelectedUpdate={setSelectedIds}
      />
      <Text color="secondary">Selecionados: {selectedIds.join(', ') || 'nada'}</Text>
    </Flex>
  );
}
```

<ListMultipleSelection />

## Virtualização

Envolver a lista em `<ListVirtualizer>` renderiza apenas a janela visível de linhas, o que torna listas
de dezenas de milhares de itens possíveis. A raiz de `List` é o contêiner de rolagem, então sua altura
precisa ser limitada.

Quão alta uma linha é contada é decidido por duas props do wrapper: `estimateItemSize` é a
estimativa usada antes que a linha seja renderizada, e `measure` — ativado por padrão — substitui a estimativa pela
altura que a linha acabou tendo. É por isso que linhas de altura variável não precisam de configuração, e
por que desativar a medição só vale a pena quando cada linha tem exatamente a altura de uma estimativa
explícita. O restante das props está em [ListVirtualizer](#listvirtualizer).

O wrapper cobre uma lista: uma lista renderizada dentro de uma linha de uma lista virtualizada renderiza cada linha de
seu próprio, em fluxo. O mesmo vale para um componente com uma lista dentro dele — um `Select`, por exemplo — qualquer
linha em que ele esteja colocado.

`minItemsCount` torna o wrapper um limite: uma lista com menos linhas, incluindo cabeçalhos de seção,
renderiza como se não houvesse wrapper — cada linha no DOM e nenhuma ARIA de virtualização. Isso permite que um único
wrapper fique na raiz do aplicativo e virtualize apenas as listas longas. Uma lista cujas
linhas cruzam o limite muda seu modo e mantém a linha ativa e a seleção. Um wrapper dentro de outro muda apenas as
props que recebe e pega o restante do de cima:
`minItemsCount={0}` em torno de uma lista a virtualiza, independentemente do seu tamanho, `minItemsCount={Infinity}`
a mantém simples.

O código da janela é um bloco próprio, carregado quando a primeira lista que o necessita renderiza.
Até que ele chegue, a lista mostra suas primeiras linhas na mesma raiz, então a página não fica vazia.

> [!NOTE]
> Em HTML renderizado no servidor, uma lista virtualizada tem suas primeiras linhas: não há viewport para medir a
> janela contra, então a janela assume o controle após a hidratação. O restante das linhas não está no
> markup — deixe a lista não virtualizada quando todo o seu conteúdo precisar estar lá.

```tsx
import {List} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

function TrackList({tracks}) {
  return (
    <ListVirtualizer estimateItemSize={28}>
      <List
        aria-label="Archive"
        style={{height: 480}}
        items={tracks}
        getItemContent={(track) => track.title}
      />
    </ListVirtualizer>
  );
}
```

<ListVirtualized />

## Linhas interativas

Uma linha que contém um botão, uma caixa de seleção ou uma alça de arrastar precisa de `role="grid"`: conteúdo interativo
não é permitido dentro de uma opção simples. O conteúdo de tal linha vive em células, e o conteúdo interativo
dessas células é acessado com `←`/`→` — `→` entra nele, `←` volta e retorna para a
linha.

```tsx
import {TrashBin} from '@gravity-ui/icons';
import {Button, Icon, List} from '@gravity-ui/uikit';

function TaskList({tasks, removeTask}) {
  return (
    <List
      role="grid"
      aria-label="Tasks"
      items={tasks}
      getItemContent={(task) => task.title}
      renderItem={(ctx, {getItemProps, getItemViewProps, getCellProps}) => (
        <List.ItemView
          {...getItemProps()}
          {...getItemViewProps()}
          endContent={
            <span {...getCellProps()}>
              {/* a lista é um único ponto de tabulação, então o botão é alcançado com ←/→ */}
              <Button
                tabIndex={-1}
                aria-label={`Delete ${ctx.item.title}`}
                onClick={() => removeTask(ctx.id)}
              >
                <Icon data={TrashBin} />
              </Button>
            </span>
          }
        >
          <span {...getCellProps()}>{ctx.content}</span>
        </List.ItemView>
      )}
    />
  );
}
```

GRAVITY_TRANSLATION_BLOCK_1_END
<ListInteractiveRows />

O render padrão envolve o conteúdo em uma célula; com seu próprio `renderItem`, as células são
posicionadas com `getCellProps()`, que não retorna nada em uma lista simples — então um `renderItem`
funciona em ambos os casos. Dê ao conteúdo interativo `tabIndex={-1}`: a lista inteira é um único
ponto de tabulação.

## Arrastar e soltar

A reordenação é uma camada própria: você traz uma biblioteca de arrastar e soltar, a envolve em um
adaptador e passa o adaptador como a prop `dnd`. A partir daí, os papéis são divididos — a biblioteca
segue o ponteiro, seu código move os dados e a lista mostra o que está acontecendo: marca a linha
arrastada, desenha a linha de inserção e impede que a ativação siga o cursor. A lista não tem
arrastar com teclado próprio: ele vem com a biblioteca (`@hello-pangea/dnd` tem um).

Uma linha do render padrão tem um lugar para sua própria alça: o slot `dragHandle` de
`List.ItemView` é a célula mais externa de uma linha, antes da marca de seleção e da indentação de
aninhamento, então a alça permanece na borda da linha, independentemente do que mais a linha exibe.

### @hello-pangea/dnd

A biblioteca recomendada, com um kit em `@gravity-ui/uikit/hello-pangea-dnd`: o wrapper mais
`role="grid"`:

```tsx
import {List} from '@gravity-ui/uikit';
import {ListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';

function Playlist() {
  const [tracks, setTracks] = React.useState(initialTracks);

  return (
    <ListHelloPangeaDnd items={tracks} onItemsUpdate={setTracks}>
      <List role="grid" aria-label="Playlist" items={tracks} getItemContent={(t) => t.title} />
    </ListHelloPangeaDnd>
  );
}
```

O exemplo muda a lista para os [papéis de grade](#interactive-rows): a alça de arrastar desta
biblioteca é um botão real, e o conteúdo interativo é válido dentro de uma célula em vez de dentro
de uma opção.

GRAVITY_TRANSLATION_BLOCK_2_END
<ListDragAndDrop />

A soltura move seus dados: `onItemsUpdate` recebe o resultado de
`moveItem(items, fromId, toId, position, getId?)` — ele reordena o nível superior do array e
retorna o original, por referência, quando nada foi movido, então trate o resultado como imutável.

Linhas personalizadas, virtualização e várias listas: veja [HelloPangeaDnd](../HelloPangeaDnd/README.md)
e a história [Arrastar e soltar virtualizado](?path=/story/components-data-display-list--drag-and-drop-virtualized).
Linhas de marcação personalizada:

GRAVITY_TRANSLATION_BLOCK_3_END
<ListDragAndDropCustomRow />

O kit cobre listas planas. Para qualquer coisa que ele não cubra, conecte a biblioteca através do
adaptador da prop `dnd` manualmente, veja [Qualquer outra biblioteca](#any-other-library).

### Qualquer outra biblioteca

Um adaptador é um objeto simples de campos opcionais (veja [ListDndAdapter](#listdndadapter)): dois
getters de props e o estado do arrastar, mais o placeholder e o render padrão da linha para as
bibliotecas que precisam deles. Quais deles você preenche depende de como a biblioteca
alcança as linhas:

- **props e estado** — o adaptador registra as linhas e a própria zona de soltura através de
  `getItemDndProps`/`getContainerDndProps` (um `ref` para bibliotecas que aceitam elementos em vez
  de props) e relata `draggingId`/`dropTarget`;
- **apenas estado** — a biblioteca é integrada dentro do seu `renderItem` (um hook por item, um
  componente wrapper), então suas props nunca viajam através do adaptador.

> [!IMPORTANT]
> O estado — `draggingId` e `dropTarget` — é preenchido de qualquer maneira. Sem ele, a lista não
> sabe que um arrastar está acontecendo: a ativação continua seguindo o cursor, a linha não é marcada
> como arrastada e o destaque de hover permanece.

O que um adaptador deve à lista:

- o `ref` dos getters é estável (por id em `getItemDndProps`) — caso contrário, o elemento é
  re-registrado na biblioteca a cada renderização, e um arrastar re-renderiza a lista com frequência;
- as props não fecham o estado de renderização: as linhas são memoizadas, então leia os `items`
  frescos através de um ref;
- `dropTarget` é deduplicado antes de `setState` — um dragover dispara em cada pixel;
- `role`, `id` e `tabIndex` pertencem à lista — tais chaves são ignoradas com um aviso de dev.

Em seguida, escolha como a posição de soltura é mostrada — as duas maneiras se excluem:

- **uma linha de inserção desenhada pela lista** — preencha `dropTarget`, e a linha recebe
  `data-drop-target="before|after"` (funciona em um `renderItem` personalizado também);
- **os vizinhos se deslocam** — aplique as transformações da sua biblioteca e deixe `dropTarget`
  vazio, então a lacuna em si mostra o lugar.

Para estilos próprios, a lista marca a linha arrastada com `data-dragging` e a raiz com
`data-drag-active`.

Um wrapper que possui a biblioteca não pode alcançar a prop `dnd` de uma lista passada para ele como
filhos: ele fornece o adaptador através de `ListDndContext` do ponto de entrada principal em vez
disso, da maneira que `ListHelloPangeaDnd` faz. A prop tem precedência sobre o contexto (um aviso de
dev quando ambos estão presentes), e uma lista não passa o contexto para as listas renderizadas
dentro de suas linhas.

As duas formas são mostradas lado a lado nas histórias de [Integrações de arrastar e soltar](?path=/story/components-data-display-list-drag-and-drop-integrations--pragmatic-drag-and-drop),
cada biblioteca em uma lista simples e em uma virtualizada; o código-fonte completo de um exemplo
está em seu painel de Código:

- **pragmatic-drag-and-drop** — um adaptador de props e estado, a linha de inserção é desenhada pela
  lista: [plain](?path=/story/components-data-display-list-drag-and-drop-integrations--pragmatic-drag-and-drop),
  [virtualized](?path=/story/components-data-display-list-drag-and-drop-integrations--pragmatic-drag-and-drop-virtualized);
- **dnd-kit** — um adaptador apenas de estado com `useSortable` no componente de linha, os vizinhos se deslocam
  (não espalhe os `attributes` de `useSortable`: eles carregam `role` e `tabIndex`, que pertencem
  à lista): [plain](?path=/story/components-data-display-list-drag-and-drop-integrations--dnd-kit),
  [virtualized](?path=/story/components-data-display-list-drag-and-drop-integrations--dnd-kit-virtualized).

## useListFocusOwner

Às vezes, uma lista é controlada por uma entrada em vez de por si mesma: um filtro acima das linhas, um
combobox, o popup de um `Select`. O teclado então tem que servir a ambos ao mesmo tempo — o usuário digita
na entrada e navega pelas linhas com as setas — e o foco deve permanecer na entrada, caso contrário, a digitação para no meio do caminho.

É para isso que serve `useListFocusOwner()`. O hook retorna um objeto proprietário: a entrada recebe suas
props, a lista recebe o próprio objeto e, a partir desse momento, o foco DOM nunca sai da entrada
enquanto a linha ativa é exposta a um leitor de tela através de `aria-activedescendant`.

O hook não recebe argumentos e retorna o objeto proprietário:

| Nome          | Descrição                                                                                                                                                                    |                            Tipo                            |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------: |
| getInputProps | As props do elemento que possui o foco — uma entrada, ou o botão de gatilho de um combobox apenas de seleção. As substituições são compostas pelo mesmo contrato de `getItemProps` | `(overrides?: HTMLAttributes) => ListFocusOwnerInputProps` |

As props que `getInputProps()` constrói:

| Nome                  | Descrição                                                                       |               Type               |
| :-------------------- | :-------------------------------------------------------------------------------- | :------------------------------: |
| role                  | Marca a entrada como o controle da lista; substitua-a para padrões que não sejam combobox |           `'combobox'`           |
| aria-expanded         | Se uma lista com este proprietário está montada                                         |            `boolean`             |
| aria-controls         | O id da lista conectada                                                      |      `string \| undefined`       |
| aria-activedescendant | O id DOM da linha ativa dessa lista                                         |      `string \| undefined`       |
| onKeyDown             | A maquinaria do teclado da lista; um manipulador seu é executado depois dela              | `(event: KeyboardEvent) => void` |

O que muda na lista:

- as linhas saem da ordem de tabulação — a entrada é o único ponto de tabulação, e o foco DOM nunca se move para uma linha:
  um clique em uma linha a aplica e deixa o foco onde está;
- `↑`/`↓`/`PageUp`/`PageDown`/`Enter` funcionam a partir da entrada, movem o item ativo e o rolam para a visualização; `Home`/`End` também funcionam, a menos que o proprietário contenha um cursor — um `input`, um `textarea` ou um `contenteditable`. A regra é uma: **uma tecla que move o cursor em um campo de texto permanece com o campo, as outras vão para a lista**. `Home`/`End` movem o cursor, então o padrão de combobox APG os deixa para um combobox editável (e faz as setas da lista ciclarem para compensar); `PageUp`/`PageDown` não têm significado de cursor em um campo de linha única, então a lista os mantém;
- `Space` digita em um proprietário de texto; um proprietário que não contém um cursor (o gatilho de um combobox apenas de seleção) o entrega à lista, então ele seleciona como com uma linha em foco — sem um modo de seleção, ele não faz nada, e o proprietário não recebe um clique. `Ctrl`/`Cmd`+`A` seleciona o texto da entrada em vez dos itens;
- teclas de caracteres vão para um proprietário de texto — digitar lá é filtrar, então o typeahead permanece desativado. Um proprietário que não contém um cursor (o botão de gatilho de um combobox apenas de seleção) mantém o typeahead da lista;
- `Shift`+`↑`/`↓` ainda estende o intervalo quando uma seleção múltipla está ativa.

O que ter em mente:

- mantenha a atividade controlada e aponte-a para a primeira correspondência ao filtrar, para que `Enter`
  sempre aplique o que o usuário vê;
- uma lista dentro de um popup espera-se que seja montada apenas enquanto o popup estiver aberto. Um popup fechado mantido
  montado não é suportado: as setas de uma lista oculta continuariam movendo a atividade e
  `aria-expanded` permaneceria `true`;
- um proprietário serve uma lista — duas listas montadas ao mesmo tempo precisam de dois hooks;
- o proprietário não precisa ser uma entrada: o botão de gatilho de um combobox apenas de seleção recebe as
  mesmas props — elas são agnósticas ao elemento;
- para uma lista que não é um popup de forma alguma (o exemplo acima) substitua `role` e `aria-expanded`
  através das substituições de `getInputProps` quando a semântica do combobox não se encaixa;
- a acessibilidade completa do teclado das células de uma [grade](#interactive-rows) é garantida apenas na estratégia de roving: com um proprietário externo, `←`/`→` pertencem ao cursor da entrada.

```tsx
import {Flex, List, TextInput, useListFocusOwner} from '@gravity-ui/uikit';

const frameworks = ['React', 'Vue', 'Svelte', 'Solid', 'Angular', 'Qwik', 'Preact'];

const filterFrameworks = (query) =>
  frameworks.filter((name) => name.toLowerCase().includes(query.trim().toLowerCase()));
```

```jsx
function FrameworkPicker() {
  const [query, setQuery] = React.useState('');
  const [activeItemId, setActiveItemId] = React.useState(null);
  const focusOwner = useListFocusOwner();
  const {onKeyDown, ...inputProps} = focusOwner.getInputProps({'aria-label': 'Framework'});

  const handleQuery = (value) => {
    setQuery(value);
    // Typing is filtering: the activity moves to the first match
    setActiveItemId(filterFrameworks(value)[0] ?? null);
  };

  return (
    <Flex direction="column" gap="spacing-2">
      <TextInput
        value={query}
        onUpdate={handleQuery}
        controlProps={inputProps}
        // TextInput sets its own onKeyDown after spreading controlProps —
        // the keyboard of the list is handed to it through a separate prop
        onKeyDown={onKeyDown}
      />
      <List
        focusOwner={focusOwner}
        aria-label="Frameworks"
        items={filterFrameworks(query)}
        activeItemId={activeItemId}
        onActiveItemUpdate={setActiveItemId}
        onItemAction={(id) => setQuery(id)}
      />
    </Flex>
  );
}
```

GRAVITY_TRANSLATION_BLOCK_1_END

<ListFocusOwner />

## Acessibilidade

Os papéis, o teclado e o estado das linhas são responsabilidade da lista em si: ela
renderiza um `listbox` de `option`s com um único ponto de tabulação, marca as linhas selecionadas com
`aria-selected` quando um modo de seleção está ativo (e a lista com `aria-multiselectable` em
`multiple`), numera as linhas sob virtualização — `aria-setsize`/`aria-posinset` em uma listbox,
`aria-rowcount`/`aria-rowindex` em uma grade — e permite que um leitor de tela anuncie uma opção junto
com o nome de sua seção. O que resta para você:

- **nomeie a lista** com `aria-label` ou `aria-labelledby` — uma lista não tem um rótulo visível próprio;
- **passe `getItemTextValue`** quando o conteúdo de uma linha não for uma string simples, caso contrário, o digitação rápida
  não terá nada para pesquisar;
- **espalhe `getItemProps()`** no elemento de uma linha em um `renderItem` personalizado — o papel, o id,
  o teclado e o estado da linha vêm de lá;
- **mude para `role="grid"`** quando uma linha contiver conteúdo interativo e dê a esse conteúdo
  `tabIndex={-1}`: ele é alcançado com `←`/`→` em vez de `Tab` (veja
  [Linhas interativas](#interactive-rows));
- **conecte um input que possua o foco** através de `useListFocusOwner()` em vez de configurar
  `aria-activedescendant` manualmente (veja [useListFocusOwner](#uselistfocusowner)).

### Teclado

| Chave                                | Ação                                                                                                                                                                                                                                                                                                                                           |
| :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `↑` / `↓`                          | Mover para o item anterior/próximo, ciclando nas bordas                                                                                                                                                                                                                                                                                        |
| `PageUp` / `PageDown`              | Mover dez itens para cima/baixo; ao contrário das setas, eles não ciclam e param no primeiro/último item. Sem um item ativo ainda, `PageDown` entra na lista de cima e `PageUp` de baixo.                                                                                                                                                     |
| `Home` / `End`                     | Mover para o primeiro/último item. Com um proprietário de foco que segura um cursor (`input`, `textarea`, `contenteditable`), as teclas ficam à esquerda do cursor, como o padrão combobox do APG prescreve para um combobox editável.                                                                                                     |
| Teclas de caractere                | Pular para o item cujo texto começa com o que foi digitado; o buffer reinicia um segundo após a última tecla, e repetir um caractere cicla pelos itens que começam com ele. Um caractere que a lista usou para sua busca não atinge os atalhos do aplicativo ao redor. Com um proprietário de foco que segura um cursor, as teclas vão para o campo em vez disso. |
| `Enter`                            | Aplicar o item ativo (`onItemAction`)                                                                                                                                                                                                                                                                                                          |
| `Space`                            | Selecionar o item ativo (com um modo de seleção ativado); parte da consulta de digitação enquanto está sendo digitada — isso também se aplica com um proprietário de foco que não tem cursor.                                                                                                                                                     |
| `Shift` + clique, `Shift` + `↑`/`↓` | Selecionar um intervalo (`multiple` apenas); ao contrário das setas simples, uma `Shift`+seta para nas bordas em vez de ciclar.                                                                                                                                                                                                                               |
| `Shift` + `Space`                  | Selecionar o intervalo até o item ativo (`multiple` apenas)                                                                                                                                                                                                                                                                                       |
| `Ctrl`/`Cmd` + `A`                 | Selecionar todos os itens (`multiple` apenas; com um proprietário de foco, a tecla pertence à entrada)                                                                                                                                                                                                                                                           |
| `←` / `→`                          | Entrar no conteúdo interativo de uma célula e voltar (`role="grid"` apenas, espelhado em RTL)                                                                                                                                                                                                                                                     |
| `Tab`                              | Sair da lista: é um único ponto de tabulação                                                                                                                                                                                                                                                                                                       |

## Propriedades

### Lista

| Nome                | Descrição                                                                                                                  |                                Tipo                                 |               Padrão                |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------: | :----------------------------------: |
| items               | Os dados da lista (strings ou objetos)                                                                                     |                           `readonly T[]`                            |                                      |
| aria-label          | O nome da lista para um leitor de tela                                                                                     |                              `string`                               |                                      |
| aria-labelledby     | O elemento que nomeia a lista, em vez de `aria-label`                                                                       |                              `string`                               |                                      |
| getItemId           | O id único de um item                                                                                                      |                        `(item: T) => string`                        |            `(i) => i.id`             |
| getItemDisabled     | Se um item está desabilitado                                                                                               |                       `(item: T) => boolean`                        |        `(i) => !!i.disabled`         |
| getItemChildren     | Os filhos de uma seção                                                                                                     |              `(item: T) => readonly T[] \| undefined`               | `item.children`, quando é um array |
| getItemContent      | O conteúdo de uma linha                                                                                                    |                   `(item: T) => React.ReactNode`                    |     o item, se for uma string      |
| getItemTextValue    | O texto para digitação rápida (typeahead)                                                                                  |                        `(item: T) => string`                        |    `content` quando é uma string     |
| activeItemId        | O item ativo, controlado (`null` significa nenhum)                                                                         |                          `string \| null`                           |                                      |
| defaultActiveItemId | O item ativo, não controlado                                                                                               |                              `string`                               |                                      |
| onActiveItemUpdate  | O callback de uma mudança de atividade                                                                                     |                   `(id: string \| null) => void`                    |                                      |
| onItemAction        | Aplicando um item: um clique ou Enter (mais Espaço com a camada)                                                           | `(id: string, item: T, event: MouseEvent \| KeyboardEvent) => void` |                                      |
| selectionMode       | Liga a camada de seleção                                                                                                   |                      `'single' \| 'multiple'`                       |                                      |
| selectedIds         | Os itens selecionados, controlados                                                                                         |                         `readonly string[]`                         |                                      |
| defaultSelectedIds  | Os itens selecionados, não controlados                                                                                     |                         `readonly string[]`                         |                                      |
| onSelectedUpdate    | O callback de uma mudança de seleção                                                                                       |                      `(ids: string[]) => void`                      |                                      |
| dnd                 | Liga a camada de arrastar e soltar (um adaptador); substitui `ListDndContext`                                              |                         `ListDndAdapter<T>`                         |                                      |
| role                | A função ARIA: `grid` para linhas com conteúdo interativo                                                                  |                        `'listbox' \| 'grid'`                        |             `'listbox'`              |
| focusOwner          | Um proprietário de foco externo (`useListFocusOwner`)                                                                      |                          `ListFocusOwner`                           |                                      |
| activateOnHover     | Ativação ao passar o mouse: uma linha é ativada por um ponteiro que se move, não por linhas que entram sob um ponteiro parado |                              `boolean`                              |                `true`                |
| renderItem          | Uma renderização personalizada de uma linha                                                                                |                      `(ctx, helpers) => node`                       |                                      |
| id                  | A base dos ids das linhas e o alvo de um `aria-controls` externo                                                           |                              `string`                               |         um id gerado automaticamente         |
| size                | O tamanho das linhas                                                                                                       |                     `'s' \| 'm' \| 'l' \| 'xl'`                     |                `'m'`                 |
| className           | A classe CSS do elemento raiz                                                                                              |                              `string`                               |                                      |
| style               | O estilo inline do elemento raiz                                                                                           |                        `React.CSSProperties`                        |                                      |
| containerProps      | Props DOM extras da raiz (`onScroll`, `data-*`…), compostas com as props da lista como as substituições dos getters         |                 `ListPropsOverrides` sem `ref`                  |                                      |
| qa                  | O atributo `data-qa` da raiz (para testes)                                                                                 |                              `string`                               |                                      |
| ref                 | A ref do elemento raiz                                                                                                     |                     `React.Ref<HTMLDivElement>`                     |                                      |

`List.ItemView` é a visualização da linha da renderização padrão e `List.SectionHeader` é o cabeçalho da seção; ambos são estáticos do componente e destinados a `renderItem`. O cabeçalho mantém seu rótulo em uma linha e recorta o que não cabe com reticências. O auxiliar de reordenação é exportado ao lado da lista como `moveItem`, juntamente com `ListDndContext` — o canal de um adaptador de um wrapper. O kit da biblioteca de arrastar e soltar recomendada vem de seu próprio ponto de entrada, `@gravity-ui/uikit/hello-pangea-dnd` — veja [HelloPangeaDnd](../HelloPangeaDnd/README.md).

### ListItemContext

O primeiro argumento de `renderItem` — a linha como dados.

| Nome                | Descrição                                                                      |                    Tipo                    |
| :------------------ | :------------------------------------------------------------------------------- | :----------------------------------------: |
| id                  | O id do item, aquele que a lista usa                                            |                  `string`                  |
| item                | Seu item, inalterado                                                             |                    `T`                     |
| index               | A posição entre as linhas renderizadas, incluindo cabeçalhos de seção           |                  `number`                  |
| kind                | Se a linha é uma opção ou um cabeçalho de seção                                  |           `'item' \| 'section'`            |
| content             | O resultado de `getItemContent`                                                  |       `React.ReactNode \| undefined`       |
| state.active        | Se a linha é a ativa                                                             |                 `boolean`                  |
| state.cursorVisible | Se a linha ativa mostra o cursor do teclado; presente apenas na linha ativa      |           `boolean \| undefined`           |
| state.disabled      | O resultado de `getItemDisabled`                                                 |                 `boolean`                  |
| state.selected      | Presente apenas enquanto um modo de seleção está ativo                           |           `boolean \| undefined`           |
| state.dragging      | Se esta linha é a que está sendo arrastada; presente apenas quando `dnd` é passado |           `boolean \| undefined`           |
| state.dropTarget    | A borda onde a queda ocorrerá; presente apenas quando `dnd` é passado            | `'before' \| 'after' \| null \| undefined` |

### ListItemHelpers

O segundo argumento de `renderItem` — as props da linha. As substituições passadas para um getter são compostas com as props da lista em vez de substituí-las: os manipuladores são chamados em cadeia, `className`, `ref` e `style` são mesclados, e as chaves com o valor `undefined` são ignoradas.

| Nome             | Descrição                                                                                                                                      |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| getItemProps     | Tudo o que o elemento da linha precisa: a função, o id DOM, a parada de tabulação, os manipuladores, os atributos de dados                         |
| getItemViewProps | O estado da linha em termos de `List.ItemView`: `size`, `active`, `disabled`, `selected`, `selectionStyle`; para um cabeçalho de seção — apenas `size` |
| getCellProps     | As props de uma célula em `role="grid"`; um objeto vazio em uma listbox, para que um `renderItem` funcione em ambos                               |

Os resultados e as substituições dos getters são tipados como `ListItemDOMProps`, `ListCellDOMProps`, `ListItemViewStateProps` e `ListPropsOverrides` — para um wrapper sobre `renderItem`; as props de um adaptador dnd como `ListDndProps`.

### Atributos de dados

A lista marca as linhas e a raiz, para que o markup personalizado possa ser estilizado apenas com CSS. Um atributo de estado está presente ou ausente em vez de definido como `"false"`.

| Atributo           | Onde     | Quando                                                                                             |
| :----------------- | :------- | :------------------------------------------------------------------------------------------------- |
| `data-active`      | uma linha    | A linha é a ativa                                                                                  |
| `data-disabled`    | uma linha    | O item está desabilitado                                                                           |
| `data-selected`    | uma linha    | A linha está selecionada (um modo de seleção está ativo)                                          |
| `data-dragging`    | uma linha    | A linha está sendo arrastada (`dnd` foi passado)                                                   |
| `data-drop-target` | uma linha    | A queda cairá nesta linha; o valor é a borda, `before` ou `after`                                  |
| `data-drag-active` | a raiz | Uma queda está acontecendo em algum lugar na lista                                                 |
| `data-first-row`   | um cabeçalho | O cabeçalho da seção é a primeira linha da lista (sem espaçamento e sem linha separadora acima dela) |
| `data-qa`          | a raiz | O valor da prop `qa`                                                                               |

### ListVirtualizer

O wrapper da camada de [virtualização](#virtualization); importado de
`@gravity-ui/uikit/virtualizer` (precisa de `@tanstack/react-virtual` como dependência opcional).

| Nome             | Descrição                                                                                                                               |            Tipo             |          Padrão          |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :----------------------: |
| children         | O `<List>` interno                                                                                                                      |         `ReactNode`         |                          |
| estimateItemSize | A estimativa de altura de uma linha antes de ser renderizada — uma constante ou uma função do contexto da linha                           | `number \| (ctx) => number` | pela `size` da lista |
| measure          | Mede as alturas reais das linhas após a montagem (linhas de altura variável fora da caixa)                                               |          `boolean`          |          `true`          |
| minItemsCount    | Uma lista com menos linhas é renderizada como se não houvesse wrapper; um `Select` conta suas opções, sem os cabeçalhos de grupo e sem o filtro |          `number`           |           `0`            |
| overscan         | O buffer de linhas fora da janela visível                                                                                               |          `number`           |           `5`            |

Um wrapper dentro de outro recebe as props que não lhe são dadas pelo de cima: os padrões na tabela são os do wrapper mais externo.

### ListDndAdapter

O objeto da prop `dnd` — a camada de [arrastar e soltar](#drag-and-drop); `ListDndAdapter<T>`, onde `T` é o tipo do item da lista.

| Nome                  | Descrição                                                                                                                            |                         Tipo                          |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------: |
| getContainerDndProps? | As props da raiz da lista (a zona de soltar); `ref` é para bibliotecas que registram um elemento                                       |                 `() => ListDndProps`                  |
| getItemDndProps?      | As props de uma linha; elas são misturadas em `getItemProps` após as bases, antes dos overrides                                       |            `(id: string) => ListDndProps`             |
| draggingId?           | O que está sendo arrastado — a origem de `ctx.state.dragging` e `data-dragging`                                                      |                   `string \| null`                    |
| dropTarget?           | `{id, position}` — a origem de `ctx.state.dropTarget`; o indicador é desenhado pela lista                                           | `{id: string; position: 'before' \| 'after'} \| null` |
| placeholder?          | O último filho da raiz da lista (o espaço de `@hello-pangea/dnd`); ignorado sob virtualização                                        |                      `ReactNode`                      |
| renderItem?           | A linha renderizada enquanto a lista não tem seu próprio `renderItem`; mantenha-a estável                                            |     `(ctx: ListItemContext<T>, helpers) => node`      |