<!--GITHUB_BLOCK-->

# Loader

<!--/GITHUB_BLOCK-->

O componente `Loader` exibe o progresso de carregamento como barras piscantes. Ao contrário do `Spin`, este componente é usado em cenários globais, por exemplo, para uma página inteira ou `Dialog`.

```tsx
import {Loader} from '@gravity-ui/uikit';
```

### Tamanho

<!--SANDBOX
import {Loader} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Loader size="s" />
            <Loader size="m" />
            <Loader size="l" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Loader size="s" />
<Loader size="m" />
<Loader size="l" />
```

<!--/GITHUB_BLOCK-->

`S`: Tamanho pequeno, usado quando o loader regular é muito grande.

`M`: Tamanho médio (básico), usado na maioria dos casos.

`L`: Tamanho grande, usado quando o loader regular é muito pequeno.

## Propriedades

| Nome      | Descrição                               |       Tipo        | Padrão |
| :-------- | :-------------------------------------- | :---------------: | :----: |
| size      | Tamanho do Loader                       | `"s"` `"m"` `"l"` | `"s"`  |
| className | Classe CSS personalizada para o elemento raiz |     `string`      |        |
