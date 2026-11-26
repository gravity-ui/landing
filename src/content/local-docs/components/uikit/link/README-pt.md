`Link` é uma parte do texto que, ao ser clicada, leva o usuário para outra parte da página, outra página dentro do serviço ou uma página externa.

```tsx
import {Link} from '@gravity-ui/uikit';
```

Sua principal diferença em relação ao [Button](../Button) é a função de navegação. Na maioria das vezes, um `Link` leva para outra página ou abre uma nova aba no navegador.

## Aparência

Existem três tipos de links disponíveis: `normal` (o marrom usual), `primary` (preto) e `secondary` (cinza). Você pode gerenciá-lo com a propriedade `view`. Você também pode habilitar a exibição de que o link já foi clicado usando a propriedade `visitable`.

### Normal

Este é o padrão de `link` mais familiar e bem estabelecido. É usado para destacar visualmente um elemento dentro de um texto ou tabela, e como parte da navegação. Você pode usá-lo para navegar tanto para páginas internas quanto para fontes externas, incluindo documentação. Além disso, este tipo é usado para páginas de erro e estados zero.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Primary

Este tipo é usado quando é nativamente claro que um elemento é clicável, mas o uso de um `Link` marrom sobrecarregaria a interface e impediria que você destacasse adequadamente os pontos-chave em uma página.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Secondary

Assim como o `Link` primário, este tipo é usado quando é nativamente claro para o usuário que um elemento é clicável, mas a navegação por ele não é essencial e afeta um pequeno número de cenários. Seu principal objetivo é não distrair o usuário dos pontos-chave da página. O tipo `Secondary` é mais frequentemente usado em breadcrumbs ou ao exibir atributos secundários.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Visitable

Esta propriedade é usada para mostrar que o `Link` já foi clicado.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## `href`

A propriedade `href` é obrigatória.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Uso

Você pode usar um `Link` tanto como um elemento de texto independente quanto como parte do texto:

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Propriedades

`Link` aceita quaisquer props válidas do elemento `a` além destas:

| Nome      | Descrição                                |                 Tipo                 |  Padrão   |
| :-------- | :----------------------------------------- | :----------------------------------: | :-------: |
| children  | Conteúdo do `Link`                         |          `React.ReactNode`           |           |
| href      | Atributo HTML `href`                       |               `string`               |           |
| qa        | Atributo HTML `data-qa`, usado para testes |               `string`               |           |
| underline | Exibe sublinhado sob o `Link`              |              `boolean`               |  `false`  |
| view      | Aparência do `Link`                        | `"normal"` `"primary"` `"secondary"` | `"normal"` |
| visitable | Exibe o estado CSS `:visitable`            |              `boolean`               |  `false`  |