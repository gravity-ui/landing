`Select` é um controle que fornece uma lista de opções que um usuário pode selecionar.

```tsx
import {Select} from '@gravity-ui/uikit';
```

> [!NOTE]
> Na v8, as opções são desenhadas pela nova lista. O que mudou para o consumidor está coletado no
> [guia de migração](https://github.com/gravity-ui/uikit/blob/main/docs/migration-select-v8.md).

## Opções

Opções para selecionar.

### Definindo opções

Você pode definir opções como um array de objetos ou como filhos de um componente. A primeira abordagem é útil para casos em que as opções exigem preparação complexa e, possivelmente, memorização. A segunda é conveniente quando há poucas opções e sua configuração não requer cálculos complexos.

Em um React Server Component, `Select.Option` e `Select.OptionGroup` não são alcançáveis: use `SelectOption` e `SelectOptionGroup` nomeados em vez disso. Seus tipos de props são `SelectOptionProps` e `SelectOptionGroupProps`.

#### Lista plana

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

#### O texto de uma opção

O texto de uma opção é o que o gatilho mostra para uma opção selecionada, o que o filtro corresponde e
o que a busca pelas primeiras letras procura. Por padrão, é o conteúdo da opção quando esta é uma string ou um número, seus filhos quando estes são, e seu `value` caso contrário — então uma opção que renderiza qualquer coisa que não seja uma string simples precisa de
`getOptionText`, ou será procurada e nomeada por seu valor.

GRAVITY_TRANSLATION_BLOCK_3_END

`useSelectOptions` aceita a mesma propriedade: passe-a lá também quando as opções forem filtradas
fora do componente. Defina a função fora do componente ou memorize-a — ela participa da
memorização da lista, e uma nova função a cada renderização reconstrói as linhas.

`getOptionText` substitui a propriedade `text` de uma opção, que foi removida: o texto de uma opção é
solicitado em vez de armazenado, então uma função cobre todas as opções em vez de um campo repetido em cada uma delas.

O `value` de uma opção identifica sua linha, então os valores devem ser únicos em toda a lista,
incluindo grupos (para um [valor não string](#non-string-values) — sua chave). O `id` DOM da linha é
derivado dele, e esse id é o que `aria-activedescendant` do gatilho aponta — leia-o de lá em vez de construí-lo manualmente: o escape de um valor pertence à lista e não é um contrato.

#### Lista agrupada

Um cabeçalho de grupo é uma legenda em vez de uma opção: ele carrega `role="presentation"`, fica fora
da navegação por teclado e da contagem de linhas `role="option"`, e descreve as opções abaixo dele
através de `aria-describedby`. Um grupo cujo `label` está vazio desenha uma linha separadora em vez de um
cabeçalho — como a primeira linha da lista, ele não tem nada para separar e não ocupa espaço algum. Esse é
o desenho padrão de um grupo: `renderOptionGroup` e `getOptionGroupHeight` são chamados primeiro e
desenham e medem o que quiserem, com ou sem rótulo vazio.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Armazenando dados em opções

Você pode definir e armazenar dados únicos em cada opção usando a propriedade `option.data`. Isso pode ser útil quando você precisa enriquecer os dados ao usar o callback `onUpdate` ou, por exemplo, ao desenhar suas opções com `renderOption`.

### Valores não string

O valor de uma opção pode ser de qualquer tipo: o tipo de `value`, `defaultValue` e `onUpdate` segue
as opções. O Select conhece um valor por uma chave de string — o id de sua linha, o campo de um formulário e a comparação de dois valores usam isso. Uma string é sua própria chave, outro primitivo é transformado em um com `String()`, e um objeto precisa de `getValueKey`. Valores com chaves iguais são um único valor: um objeto de uma nova resposta seleciona a opção que ele corresponde. Defina `getValueKey` fora do componente ou memorize-o, como `getOptionText`.

GRAVITY_TRANSLATION_BLOCK_6_END

Um valor de objeto não tem texto próprio: dê à opção um `content` string ou passe `getOptionText`.
Um filho `Select.Option` aceita uma string a menos que seu tipo seja nomeado: `<Select.Option<unknown, number>
value={1}>`; o próprio Select pega o tipo de `value` ou um `onUpdate` tipado `{(value: number[]) =>
…}`. Um valor selecionado sem opção é mostrado por sua chave; mantenha sua opção em `options` ou renderize-o com `renderSelectedOptions`. Um formulário envia chaves, não valores. Em um tipo de união, `1`
e `"1"` compartilham uma chave e são um único valor.

### Valores anuláveis

`''`, `null` e `undefined` significam nenhum valor, a menos que uma opção os declare. Sem uma opção, tal
valor não tem texto, botão de limpar ou contagem; um formulário o envia como `''`, enquanto `value` e `onUpdate` o mantêm como está. `0` e `false` são sempre valores.

GRAVITY_TRANSLATION_BLOCK_7_END

## Selecionando múltiplas opções

Para habilitar a seleção múltipla, use a propriedade `multiple`. Seu valor padrão é `false`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

Shift+clique, Shift+↑/↓ e Shift+Espaço selecionam um intervalo de opções, da opção escolhida por último ao destino.

### Contador

Você pode adicionar um contador de itens selecionados ao componente usando a propriedade `hasCounter`.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Filtrando opções

Para habilitar a seção de filtro, use a propriedade `filterable`. Seu valor padrão é `false`.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## A busca pelas primeiras letras

Com o popup aberto e nenhum filtro no caminho, as teclas de caracteres procuram uma opção: a lista move a atividade para a primeira opção cujo texto **começa com** o que foi digitado, o buffer é resetado um segundo após a última tecla, e repetir um caractere cicla pelas opções que começam com ele. Um espaço pertence à consulta enquanto está sendo digitada, então uma legenda com um espaço nela é alcançável — e não seleciona nada até que o buffer esteja vazio novamente. Um caractere que a lista usou para sua busca não atinge os atalhos de teclado da aplicação ao redor.

Em um `Select` `filterable`, as teclas vão para o filtro em vez disso: digitar lá é filtrar.

## Tamanho

Para gerenciar o tamanho padrão do controle e das opções, use a propriedade `size`. Seu tamanho padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Largura do controle

Por padrão, a largura do controle se estende para corresponder à largura do conteúdo das opções selecionadas. Você pode gerenciá-la usando a propriedade `width`:

`'max'`: Estende para a largura total do pai.

`number`: Aplica a largura em pixels.

GRAVITY_TRANSLATION_BLOCK_16_END

## Largura do popup

Você pode gerenciar a largura do popup com a propriedade `popupWidth`. Os valores disponíveis são:

`'fit'`: Aplica a largura do controle.

`number`: Aplica a largura em pixels.

Pontos a serem observados sobre o comportamento padrão:

- A largura do popup é igual à largura da opção mais larga, mas não maior que `90vw`. Isso não se aplica a um `Select` [virtualizado](#virtualized-list).

- Opções estreitas são estendidas para caber na largura do controle.

GRAVITY_TRANSLATION_BLOCK_17_END

## Lista virtualizada

Uma longa lista de opções é renderizada linha por linha, a menos que você solicite o contrário: cada opção é uma linha DOM. Para renderizar apenas as visíveis, envolva o `Select` em `ListVirtualizer` do ponto de entrada `@gravity-ui/uikit/virtualizer` — o wrapper não precisa de configuração e o popup continua funcionando através do portal. Algumas centenas de opções é onde começa a valer a pena; acima de 150, o `Select` informa isso em um aviso de desenvolvimento.

O ponto de entrada requer `@tanstack/react-virtual`: é uma dependência peer opcional do pacote e deve ser instalada junto com ele.

```tsx
import {Select} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

<ListVirtualizer>
  <Select options={thousandsOfOptions} />
</ListVirtualizer>;
```

O wrapper não precisa ficar ao lado do `Select`: um wrapper com `minItemsCount` na raiz do aplicativo cobre todos os `Select` abaixo dele. Um `Select` com menos opções é renderizado como se não houvesse wrapper — cada opção uma linha DOM, o popup tão largo quanto a opção mais larga. O `Select` conta todas as suas opções, sem os cabeçalhos de grupo e sem o filtro, então digitar não muda a lista.

```tsx
import {Provider} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

<Provider theme="light">
  <ListVirtualizer minItemsCount={50}>
    <App />
  </ListVirtualizer>
</Provider>;
```

Para alterar as configurações de um `Select`, coloque um segundo wrapper diretamente sobre ele. Ele muda apenas o que recebe e pega o restante do que está na raiz: `overscan={20}` mantém o limite, `minItemsCount={0}` virtualiza esse `Select` independentemente do número de suas opções, e `minItemsCount={Infinity}` o mantém simples.

```tsx
import {Select} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

// Sob o wrapper na raiz: este Select é virtualizado independentemente do número de suas opções
<ListVirtualizer minItemsCount={0}>
  <Select options={options} />
</ListVirtualizer>;
```

O código do virtualizador é um bloco próprio e não é carregado para os `Select`s menores. Um `Select` que será virtualizado começa a carregá-lo ao montar; um popup aberto antes de ele chegar mostra suas primeiras opções até que a janela assuma o controle e role para o item selecionado.

Coisas a ter em mente sobre um `Select` virtualizado:

- A largura do popup não é mais ajustada ao comprimento da opção mais longa.

- A largura mínima do popup é igual à largura do controle, ou `100px` se o controle for mais curto.

- A altura de uma linha antes de ser renderizada é obtida de [getOptionHeight](#rendering-options-with-different-heights) e do `size` do `Select`; o `estimateItemSize` do wrapper não é usado, pois o tipo de uma linha de opção não sai do `Select` — passá-lo gera um aviso em desenvolvimento. As propriedades `measure` e `overscan` do wrapper funcionam como [descrito](https://github.com/gravity-ui/uikit/blob/main/src/components/List/README.md#virtualization) para o `List`.

- Um popup renderizado no servidor recebe suas primeiras opções em vez da janela — não há viewport para medi-lo — e a janela assume o controle após a hidratação.

- O wrapper cobre a lista deste `Select`, incluindo a que [renderPopup](#rendering-options-list) coloca na página. Uma lista dentro de uma linha dele, ou um `Select` colocado em tal linha, renderiza cada linha própria: a virtualização de uma lista não alcança o que suas linhas desenham.

- Defina `getOptionHeight` e `renderOption` fora do componente ou use memoização: uma nova função a cada renderização faz o virtualizador reiniciar suas medições e as linhas serem re-renderizadas.

GRAVITY_TRANSLATION_BLOCK_18_END

## Nome acessível

O gatilho precisa de um nome: `label`, `aria-label`, `aria-labelledby` ou um `<label htmlFor>` apontando para o `id` do `Select`. `label` nomeia o gatilho e fica fora de seu valor; um placeholder não é um nome. Com `renderControl`, o label não é desenhado, então nomeie o controle personalizado você mesmo.

## Uso avançado

Existem muitas maneiras de personalizar seu `Select`.

### Renderizando controle personalizado

Para renderizar um controle personalizado, use a propriedade `renderControl`.

Passe `ref` para seu elemento e espalhe `triggerProps` sobre ele: eles abrem e fecham o popup, carregam o teclado da lista e o ARIA do combobox (`role`, `aria-expanded`, `aria-controls`, `aria-activedescendant`). Um controle que os mantém para si mesmo nem abre nem navega. `triggerProps` também contém `disabled`. Converta o `ref` genérico para um `ref` de botão ao usar `Button`.

GRAVITY_TRANSLATION_BLOCK_19_END

GRAVITY_TRANSLATION_BLOCK_20_END

### Renderizando seção de filtro personalizada

Para renderizar uma seção de filtro personalizada, use a propriedade `renderFilter` e defina a propriedade `filterable` como `true`.

`inputProps` carrega tudo o que o input de um combobox precisa: o valor, os manipuladores, o placeholder e a conexão ARIA — `role`, `aria-label`, `aria-controls`, `aria-activedescendant`, `aria-expanded`, `aria-autocomplete`. Ele também carrega `size: 1`, uma dica de largura em vez de ARIA: permite que o input encolha para o popup em vez de manter os vinte caracteres que um `input` solicita por padrão. Sem eles, o filtro não tem nome acessível e não nomeia nenhuma opção ativa para um leitor de tela. Espalhe-o sobre um `input` simples junto com `ref`. Um componente com sua própria API — `TextInput`, por exemplo — pega as props que possui (`value`, `placeholder`, `onChange`, `onKeyDown`) e passa o restante para o elemento através de `controlProps`, o que um desestruturamento de linha faz; `onKeyDown` deve estar entre eles, ele carrega todo o teclado da lista.

GRAVITY_TRANSLATION_BLOCK_21_END

GRAVITY_TRANSLATION_BLOCK_22_END

### Renderizando opções personalizadas

Para renderizar opções personalizadas, use a propriedade `renderOption`. Ela é chamada com a opção e com o
estado de sua linha: `isItemActive`, se a linha é a ativa (aquela que `Enter` aplica);
`selected`, se a opção está selecionada; e `itemHeight`, a altura que a linha resulta — aquela que
[getOptionHeight](#rendering-options-with-different-heights) retornou ou o mínimo do
[size](#size). A própria linha mostra a seleção ao lado do que quer que ela renderize: um
marcador em um `Select` [múltiplo](#selecting-multiple-options) e um destaque em um único.
Uma opção que desenha sua própria indicação — um `Radio` ou um `Checkbox` de `selected` — desliga
isso com `selectionStyle="none"`; sem uma própria, a seleção se torna invisível. Tal controle é
decoração — a linha seleciona a opção, e um elemento interativo não é permitido dentro dela: envolva
o controle em um elemento com `inert` (`inert=""` antes do React 19) e mantenha o texto da opção fora
dele.

`renderOptionGroup` é o mesmo para o cabeçalho de um grupo: o grupo e `{isItemActive, itemHeight}`.

GRAVITY_TRANSLATION_BLOCK_23_END

GRAVITY_TRANSLATION_BLOCK_24_END

### Renderizando opções selecionadas personalizadas

Para renderizar a seleção no controle, use a propriedade `renderSelectedOptions`. Ela é chamada com
todas as opções selecionadas na ordem de `value` — um array de um em um select único — e apenas
quando há um valor. Um valor sem opção vem como `{value}`, sem `content`. Dê chaves aos elementos
retornados quando eles contiverem estado. O label, placeholder, contador e botão de limpar
permanecem com o `Select`. Sem a propriedade, o controle mostra os textos das opções unidos por `, `.

GRAVITY_TRANSLATION_BLOCK_25_END

GRAVITY_TRANSLATION_BLOCK_26_END

### Opções de renderização com alturas diferentes

Uma linha tem a altura do seu conteúdo e não é menor que o mínimo de seu `size` (24, 28, 36 e 44 pixels, como o controle do mesmo tamanho; no celular, toda linha ocupa os 44 de `xl`) — a menos que você defina a altura manualmente. Se precisar renderizar opções com alturas diferentes, você pode usar a propriedade `option.data`. Ela armazenará informações sobre qual altura você precisa definir para as opções, bem como a propriedade `getOptionHeight` para definir esse valor: o número que ela retornar se tornará a altura da linha e a estimativa que o [virtualizador](#virtualized-list) usará para posicionar as linhas.

GRAVITY_TRANSLATION_BLOCK_27_END

GRAVITY_TRANSLATION_BLOCK_28_END

### Renderizando um contador personalizado

Para renderizar um contador personalizado, use a propriedade `renderCounter`. O contador só é exibido quando a seleção múltipla está habilitada (`multiple={true}`) e `hasCounter={true}`.

GRAVITY_TRANSLATION_BLOCK_29_END

GRAVITY_TRANSLATION_BLOCK_30_END

### Renderizando a lista de opções

A propriedade `renderPopup` permite controlar o conteúdo da lista de opções: alterar a ordem dos elementos padrão (filtro, lista), ocultá-los ou adicionar elementos personalizados entre, antes ou depois deles.

GRAVITY_TRANSLATION_BLOCK_31_END

GRAVITY_TRANSLATION_BLOCK_32_END

### Erro

Este estado do `Select` é para entrada incorreta do usuário. Para alterar a aparência do `Select`, use a propriedade `validationState` com o valor `"invalid"`. Opcionalmente, você pode fornecer uma mensagem de erro através da propriedade `errorMessage`. Por padrão, o texto da mensagem é renderizado fora do componente.
Você pode alterar isso com a propriedade `errorPlacement`.

GRAVITY_TRANSLATION_BLOCK_33_END

## Propriedades

| Nome                                                         | Descrição                                                                                                                        | Tipo                                     | Padrão                                                   |
| :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                    | Controla a classe CSS                                                                                                            | `string`                                 |                                                          |
| defaultValue                                                 | Valores padrão que representam opções selecionadas em caso de uso de estado não controlado                                      | `V[]`                                    |                                                          |
| disabled                                                     | Indica que o controle não pode ser manipulado pelo usuário                                                                       | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                             | Indica que o popup de seleção possui uma seção de filtro                                                                       | `boolean`                                | `false`                                                  |
| filterOption                                                 | Usado para comparar a opção com o filtro                                                                                        | `function`                               |                                                          |
| filterPlaceholder                                            | Texto padrão do placeholder da entrada de filtro                                                                                 | `string`                                 |                                                          |
| [getOptionText](#the-text-of-an-option)                      | O texto de uma opção: o gatilho, o filtro e a busca pelas primeiras letras o utilizam                                           | `function`                               | conteúdo da string, caso contrário o valor               |
| [getValueKey](#non-string-values)                            | A chave de string de um valor: o id de sua linha, o campo do formulário, a igualdade de valores                                 | `(value: V) => string`                   | a própria string, `String()` para outro primitivo        |
| [getOptionHeight](#rendering-options-with-different-heights) | Usado para definir a altura de opções personalizadas pelo usuário                                                                | `function`                               |                                                          |
| getOptionGroupHeight                                         | Usado para definir a altura de grupos de opções personalizados pelo usuário                                                      | `function`                               |                                                          |
| hasClear                                                     | Habilita a exibição de um ícone para limpar as opções selecionadas                                                              | `boolean`                                | `false`                                                  |
| id                                                           | Atributo `id` do HTML                                                                                                            | `string`                                 |                                                          |
| label                                                        | Rótulo do controle; no celular, também é o título da folha                                                                       | `string`                                 |                                                          |
| loading                                                      | Adiciona o item de carregamento ao final da lista de opções. Funciona como um indicador de carregamento persistente enquanto a lista de opções está vazia. | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                      | Indica se várias opções podem ser selecionadas na lista                                                                          | `boolean`                                | `false`                                                  |
| name                                                         | Nome do controle                                                                                                                 | `string`                                 |                                                          |
| onBlur                                                       | Handler chamado quando o elemento perde o foco.                                                                                  | `function`                               |                                                          |
| filter                                                       | Valor do filtro controlado                                                                                                       | `string`                                 | `''`                                                     |
| onFilterChange                                               | Dispara a cada alteração do filtro                                                                                               | `function`                               |                                                          |
| onFocus                                                      | Handler chamado quando o elemento ganha foco                                                                                     | `function`                               |                                                          |
| onLoadMore                                                   | Dispara quando o indicador de carregamento fica visível                                                                          | `function`                               |                                                          |
| onOpenChange                                                 | Dispara a cada alteração da visibilidade do popup                                                                                | `function`                               |                                                          |
| onUpdate                                                     | Dispara quando uma alteração no valor do `Select` é confirmada pelo usuário                                                     | `function`                               |                                                          |
| [options](#options)                                          | Opções para selecionar                                                                                                           | `SelectOptions`                          |                                                          |
| pin                                                          | Vista da borda do controle                                                                                                       | `string`                                 | `'round-round'`                                          |
| placeholder                                                  | Texto do placeholder                                                                                                             | `string`                                 |                                                          |
| popupClassName                                               | Classe CSS do popup com a lista de opções                                                                                        | `string`                                 |                                                          |
| popupPlacement                                               | Posicionamento do popup                                                                                                          | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                   | Largura do popup                                                                                                                 | `number \| 'fit'`                        |                                                          |
| sheetClassName                                               | Classe CSS da folha                                                                                                              | `string`                                 |                                                          |
| qa                                                           | Atributo de ID de teste (`data-qa`)                                                                                              | `string`                                 |                                                          |
| [renderControl](#rendering-custom-control)                   | Usado para renderizar o controle do usuário                                                                                      | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                   | Usado para renderizar o contador do usuário. Funciona apenas com [hasCounter](#counter).                                         | `function`                               |                                                          |
| renderEmptyOptions                                           | Usado para renderizar um nó para uma lista de opções vazia                                                                       | `function`                               |                                                          |
| [renderFilter](#rendering-custom-filter-section)             | Usado para renderizar a seção de filtro do usuário                                                                               | `function`                               |                                                          |
| [renderOption](#rendering-custom-options)                    | Usado para renderizar as opções do usuário                                                                                       | `function`                               |                                                          |
| renderOptionGroup                                            | Usado para renderizar grupos de opções do usuário                                                                                | `function`                               |                                                          |
| [renderSelectedOptions](#rendering-custom-selected-options)  | Usado para renderizar a seleção no controle                                                                                      | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                       | Usado para renderizar o conteúdo da lista de opções                                                                              | `function`                               |                                                          |
| [selectionStyle](#rendering-custom-options)                  | Como uma linha mostra que sua opção está selecionada: a marca de seleção ou destaque (`auto`) ou nada (`none`)                  | `'auto' \| 'none'`                       | `'auto'`                                                 |
| [size](#size)                                                | Tamanho do controle / opções                                                                                                     | `string`                                 | `'m'`                                                    |
| value                                                        | Valores que representam opções selecionadas                                                                                      | `V[]`                                    |                                                          |
| view                                                         | Vista do controle                                                                                                                | `string`                                 | `'normal'`                                               |
| [width](#control-width)                                      | Largura do controle                                                                                                              | `string \| number`                       | `undefined`                                              |
| errorMessage                                                 | Texto do erro                                                                                                                    | `string`                                 |                                                          |
| errorPlacement                                               | Posição do erro                                                                                                                  | `outside` `inside`                       | `outside`                                                |
| validationState                                              | Estado de validação                                                                                                              | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                       | Mostra a contagem de opções selecionadas. O contador aparece apenas quando a seleção [múltipla](#selecting-multiple-options) está habilitada. | `boolean`                                |                                                          |

## API CSS

Os nomes das classes do markup não são um contrato público — as linhas do popup são renderizadas pela
lista e sua visualização de linha, e seu markup muda com o kit. O que é suportado:

- as variáveis abaixo;
- a aparência de uma linha, através das variáveis `--g-list-item-view-*` da
  [visualização de linha](../ListItemView/README.md#css-api): suas cores, e sua altura, preenchimento e raio,
  que de outra forma seguem o [tamanho](#size) do `Select`. Defina-as em `popupClassName` ou
  `sheetClassName` — por exemplo, `--g-list-item-view-min-height: 48px` para linhas mais altas no celular.
  A estimativa do [virtualizador](#virtualized-list) e o `itemHeight` de `renderOption` ainda
  vêm do tamanho: quando o número exato importa, use `getOptionHeight`;
- o conteúdo de uma linha, através de `renderOption`, `renderOptionGroup` e `renderSelectedOptions`.

| Nome                             | Descrição                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | Cor do contorno se focado (ausente por padrão) |