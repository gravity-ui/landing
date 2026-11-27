<!--GITHUB_BLOCK-->

# Link

<!--/GITHUB_BLOCK-->

`Link` é uma parte do texto que, ao ser clicada, leva o usuário para outra parte da página, outra página dentro do serviço ou uma página externa.

```tsx
import {Link} from '@gravity-ui/uikit';
```

Sua principal diferença em relação ao [Button](../Button) é a função de navegação. Na maioria das vezes, um `Link` leva para outra página ou abre uma nova aba no navegador.

## Aparência

Existem três tipos de links disponíveis: `normal` (o marrom usual), `primary` (preto) e `secondary` (cinza). Você pode gerenciá-lo com a propriedade `view`. Você também pode habilitar a exibição de que o link já foi clicado usando a propriedade `visitable`.

### Normal

Este é o padrão de `link` mais familiar e bem estabelecido. É usado para destacar visualmente um elemento dentro de um texto ou tabela, e como parte da navegação. Você pode usá-lo para navegar tanto para páginas internas quanto para fontes externas, incluindo documentação. Além disso, este tipo é usado para páginas de erro e estados zero.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link view="normal" href="#">Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="normal" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Primary

Este tipo é usado quando é nativamente claro que um elemento é clicável, mas o uso de um `Link` marrom sobrecarregaria a interface e impediria que você destacasse adequadamente os pontos-chave em uma página.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link view="primary" href="#">Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="primary" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Secondary

Assim como o `Link` primário, este tipo é usado quando é nativamente claro para o usuário que um elemento é clicável, mas a navegação por ele não é essencial e afeta um pequeno número de cenários. Seu principal objetivo é não distrair o usuário dos pontos-chave da página. O tipo `Secondary` é mais frequentemente usado em breadcrumbs ou ao exibir atributos secundários.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link view="secondary" href="#">Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="secondary" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Visitable

Esta propriedade é usada para mostrar que o `Link` já foi clicado.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link href="https://gravity-ui.com/" visitable>Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link href="https://gravity-ui.com/" visitable>
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

## `href`

A propriedade `href` é obrigatória.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link href="#">Link with href</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link href="#">Link with href</Link>
```

<!--/GITHUB_BLOCK-->

## Uso

Você pode usar um `Link` tanto como um elemento de texto independente quanto como parte do texto:

<!--SANDBOX
import {Link, Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>
                <Link href="#">what roles are active in the service</Link>
            </Text>
            <Text>
                Currently, this role can only be assigned to a{' '}
                <Link href="#">folder</Link> or <Link href="#">cloud</Link>
            </Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text>
    <Link href="#">What roles are available in the service</Link>
</Text>
<Text>
    Currently, this role can only be assigned to a <Link href="#">folder</Link> or <Link href="#">cloud</Link>
</Text>
```

<!--/GITHUB_BLOCK-->

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
