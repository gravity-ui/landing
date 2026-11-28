`Breadcrumbs` é um elemento de navegação que mostra a localização atual de uma página na hierarquia de um site. Ele fornece links que permitem aos usuários retornar a níveis superiores na hierarquia, facilitando a navegação em um site com várias camadas. Os Breadcrumbs são especialmente úteis para sites e aplicativos grandes com uma estrutura de páginas baseada em hierarquia.

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

Migrando do `Breadcrumbs` legado? Veja o [guia de migração](https://github.com/gravity-ui/uikit/blob/main/docs/migration-from-legacy-breadcrumbs.md).

## Exemplo

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Eventos

Use a propriedade `onAction` como um callback para lidar com eventos de clique nos itens.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Links

Em `Breadcrumbs`, clicar em um item normalmente aciona `onAction`. No entanto, você também pode usá-los como links para outras páginas ou sites. Para fazer isso, adicione a propriedade `href` ao componente `<Breadcrumbs.Item>`:

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Contexto raiz

Para ajudar os usuários a entender a estrutura geral, alguns aplicativos sempre mostram o ponto de partida (item raiz) dos Breadcrumbs, mesmo quando outros itens estão ocultos devido a limitações de espaço.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Separador

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### Breadcrumbs com ícones

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Integração com roteadores

GRAVITY_TRANSLATION_BLOCK_12_END

### Marcos (Landmarks)

Quando os breadcrumbs são usados como um elemento de navegação principal para uma página, eles podem ser colocados em um [marco de navegação](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html). Marcos ajudam os usuários de tecnologia assistiva a encontrar rapidamente as principais seções de uma página. Para criar um marco de navegação, coloque os breadcrumbs dentro de um elemento `<nav>` com um `aria-label`:

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

### Itens desativados

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

### Conteúdo final

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

## Propriedades

| Nome             | Descrição                                                                  | Tipo                 | Padrão |
| :--------------- | :--------------------------------------------------------------------------- | :------------------- | :------ |
| children         | Itens do Breadcrumb                                                          | `React.ReactNode`    |         |
| disabled         | Determina se `Breadcrumbs` está desabilitado.                                | `boolean`            |         |
| showRoot         | Habilita ou desabilita a exibição sempre do item raiz se os itens estiverem colapsados. | `boolean`            |         |
| maxItems         | Número máximo de itens visíveis, incluindo o controle de colapso.             | `number`             |         |
| itemComponent    | Componente usado para renderizar os itens.                                   | `React.ElementType`  |         |
| popupPlacement   | Estilo do popup do item colapsado.                                           | `PopupPlacement`     |         |
| popupStyle       | Estilo do popup do item colapsado.                                           | `"staircase"`        |         |
| qa               | Atributo HTML `data-qa`, usado para testes                                   | `string`             |         |
| separator        | Nó separador personalizado.                                                   | `React.ReactNode`    | "/"     |
| onAction         | Handler chamado com a chave do item clicado.                                 | `(key: Key) => void` |         |
| id               | ID único do elemento.                                                        | `string`             |         |
| className        | Nome da classe CSS para o elemento.                                          | `string`             |         |
| style            | Define o estilo inline para o elemento.                                      | `CSSProperties`      |         |
| aria-label       | Define um valor de string que rotula o elemento atual.                       | `string`             |         |
| aria-labelledby  | Identifica o(s) elemento(s) que rotulam o elemento atual.                    | `string`             |         |
| aria-describedby | Identifica o(s) elemento(s) que descrevem o objeto.                          | `string`             |         |
| endContent       | Nó do usuário renderizado após o último item do breadcrumb.                  | `React.ReactNode`    |         |

### BreadcrumbsItemProps
GRAVITY_TRANSLATION_BLOCK_1_END

| Nome       | Descrição                                                    | Tipo                              | Padrão |
| :--------- | :------------------------------------------------------------- | :-------------------------------- | :----- |
| children   | Conteúdo do Breadcrumbs.                                           | `React.ReactNode`                 |         |
| title      | Representação em string do conteúdo do item.                    | `string`                          |         |
| aria-label | Rótulo de acessibilidade para o item.                              | `string`                          |         |
| href       | URL a ser usada para o hyperlink.                                  | `string`                          |         |
| onClick    | Manipulador de clique do item.                                            | `React.MouseEventHandler`         |         |
| target     | Janela de destino para o link.                                    | `React.HTMLAttributeAnchorTarget` |         |
| rel        | Relacionamento entre o recurso vinculado e a página atual. | `string`                          |         |
| disabled   | Se o BreadcrumbsItem está desabilitado.                       | `boolean`                         |         |