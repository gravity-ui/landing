<!--GITHUB_BLOCK-->

# Spin

<!--/GITHUB_BLOCK-->

O componente `Spin` exibe o estado de carregamento (um semicírculo giratório) em cenários inline. Ao contrário do `Loader`, este componente é usado para exibir o estado de carregamento em cenários inline, por exemplo, em um `Button` ou `Label`.

```tsx
import {Spin} from '@gravity-ui/uikit';
```

### Tamanho

<!--SANDBOX
import {Spin} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Spin size="xs" />
            <Spin size="s" />
            <Spin size="m" />
            <Spin size="l" />
            <Spin size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Spin size="xs" />
<Spin size="s" />
<Spin size="m" />
<Spin size="l" />
<Spin size="xl" />
```

<!--/GITHUB_BLOCK-->

`XS`: Extra pequeno.

`S`: Pequeno, usado quando um spin de tamanho médio é muito grande.

`M`: Médio (padrão), usado na maioria dos casos.

`L`: Grande, usado quando um spin de tamanho médio é muito pequeno.

`XL`: Extra grande.

## Propriedades

| Nome      | Descrição                           |              Tipo               | Padrão |
| :-------- | :------------------------------------ | :-----------------------------: | :-----: |
| size      | Tamanho do Spin                       | `"xs"` `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| style     | Estilos CSS personalizados para o elemento raiz |      `React.CSSProperties`      |         |
| className | Classe CSS personalizada para o elemento raiz |            `string`             |         |
| qa        | Atributo de teste (`data-qa`)            |            `string`             |         |

### API CSS

| Nome             | Descrição                     |
| :--------------- | :------------------------------ |
| `--g-spin-color` | A cor principal do componente |
