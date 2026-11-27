`Pagination` renderiza controles de navegação de página — números de página com botões anterior/próximo e um seletor opcional de tamanho de página — usados para dividir listas ou tabelas longas em várias páginas.

```tsx
import {Pagination} from '@gravity-ui/uikit';
```

## Uso

```jsx
import {Pagination, PaginationProps} from '@gravity-ui/uikit';

const [state, setState] = React.useState({page: 1, pageSize: 100});

const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
  setState((prevState) => ({...prevState, page, pageSize}));

const pagination = <Pagination page={1} pageSize={100} total={1000} onUpdate={handleUpdate} />;
```

## Componente personalizado

Você pode substituir o elemento raiz dos itens de paginação clicáveis (botões de navegação e de página) usando a prop `pageComponent`. Passe `pageComponent="a"` e retorne `href` de `getPageProps` para usar links regulares. Para integrações de roteador, passe um componente ciente do roteador, como `Link`, e retorne props específicas do roteador, por exemplo `to`.

`getPageProps` é chamado para cada item clicável (botões de página e botões de navegação). Ele **não** é chamado para reticências, o indicador "página de", o item de página simples (atual) no layout móvel ou botões de navegação desabilitados (eles sempre permanecem um `<button disabled>` nativo inerte para que não possam ser ativados, inclusive via teclado). As props gerenciadas pela paginação (`onClick`, `className`, `size`, `view`, `selected`, `disabled`, `qa`, `aria-current`, `children`) têm precedência sobre os valores retornados por `getPageProps`.

### Links regulares (`pageComponent="a"`)

```jsx
import {Pagination} from '@gravity-ui/uikit';
import type {PaginationProps, PaginationPagePropsGetter} from '@gravity-ui/uikit';

const total = 1000;
const page = 1;
const pageSize = 100;

const noop: PaginationProps['onUpdate'] = () => {};

const getPageProps: PaginationPagePropsGetter = ({page}) => ({href: `?page=${page}`});

const pagination = (
  <Pagination
    page={page}
    pageSize={pageSize}
    total={total}
    onUpdate={noop}
    pageComponent="a"
    getPageProps={getPageProps}
  />
);
```

### Links de roteador (por exemplo, `react-router`)

```jsx
import {Pagination} from '@gravity-ui/uikit';
import type {PaginationProps, PaginationPagePropsGetter} from '@gravity-ui/uikit';
import {Link} from 'react-router-dom';

const total = 1000;
const page = 1;
const pageSize = 100;

const noop: PaginationProps['onUpdate'] = () => {};

const getPageProps: PaginationPagePropsGetter<{to: string}> = ({page}) => ({
  to: `?page=${page}`,
});

const pagination = (
  <Pagination
    page={page}
    pageSize={pageSize}
    total={total}
    onUpdate={noop}
    pageComponent={Link}
    getPageProps={getPageProps}
  />
);
```

## Propriedades
GRAVITY_TRANSLATION_BLOCK_0_END

| Nome            | Descrição                                                                                                                                      |            Tipo             |   Padrão    |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :---------: |
| className       | Atributo HTML `class`                                                                                                                           |          `string`           |             |
| compact         | Oculta o título dos botões `First`, `Previous` e `Next`. Sempre definido como `true` na versão mobile.                                         |          `boolean`          |    `true`    |
| onUpdate        | Chamado quando o número da página ou `pageSize` é alterado                                                                                             |         `Function`          |             |
| size            | Tamanho dos itens de paginação. Por padrão, seu valor é `l` na versão mobile e `m`, na versão desktop                                         |          `string`           |             |
| page            | Número da página atual                                                                                                                             |          `number`           |             |
| pageSize        | Número de itens de dados por página                                                                                                                    |          `number`           |             |
| pageSizeOptions | Permite especificar as opções do `sizeChanger`                                                                                                  |         `number[]`          |             |
| total           | Número total de itens de dados                                                                                                                       |          `number`           |             |
| showInput       | Mostra um campo de entrada para navegar diretamente para as páginas                                                                                                        |          `boolean`          |   `false`    |
| showPages       | Mostra a numeração das páginas                                                                                                                             |          `boolean`          |    `true`    |
| qa              | Atributo HTML `data-qa`, usado para testes                                                                                                       |          `string`           |             |
| view            | Define a aparência dos botões e controles. Afeta a visualização do campo de entrada de paginação no mobile.                                                               |   `"outlined" \| "clear"`   | `"outlined"` |
| pageComponent   | Substitui o elemento raiz para itens de paginação clicáveis (botões de navegação e página). Use `"a"` para links regulares ou um componente ciente do roteador |  `PaginationPageComponent`  |             |
| getPageProps    | Retorna props extras por item clicável (por exemplo, `href` para `"a"` ou `to` para um `Link` do roteador). Aplicado apenas quando `pageComponent` está definido             | `PaginationPagePropsGetter` |             |