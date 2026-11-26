O componente `Loader` exibe o progresso de carregamento como barras piscantes. Ao contrário do `Spin`, este componente é usado em cenários globais, por exemplo, para uma página inteira ou `Dialog`.

```tsx
import {Loader} from '@gravity-ui/uikit';
```

### Tamanho

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

`S`: Tamanho pequeno, usado quando o loader regular é muito grande.

`M`: Tamanho médio (básico), usado na maioria dos casos.

`L`: Tamanho grande, usado quando o loader regular é muito pequeno.

## Propriedades

| Nome      | Descrição                               |       Tipo        | Padrão |
| :-------- | :-------------------------------------- | :---------------: | :----: |
| size      | Tamanho do Loader                       | `"s"` `"m"` `"l"` | `"s"`  |
| className | Classe CSS personalizada para o elemento raiz |     `string`      |        |