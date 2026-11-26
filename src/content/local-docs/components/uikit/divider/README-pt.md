O componente `Divider` é usado como uma linha fina para delimitar e agrupar elementos, reforçando a hierarquia visual.

```tsx
import {Divider} from '@gravity-ui/uikit';
```

```tsx
<Divider className="custom-divider" direction="horizontal" />
```

### Orientação

Use a propriedade `direction` para gerenciar a orientação do `Divider`. A orientação padrão é `horizontal`.

#### Horizontal

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

#### Vertical

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Conteúdo personalizado

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Alinhamento

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Propriedades

| Nome        | Descrição                                      | Tipo                    | Padrão       |
| :---------- | :--------------------------------------------- | :---------------------- | :----------- |
| className   | Atributo `class` HTML                          | `string`                | -            |
| orientation | Determina a direção do divisor                 | `horizontal - vertical` | `horizontal` |
| children    | Conteúdo personalizado dentro do divisor       | `React.ReactNode`       |              |
| align       | Posição do conteúdo personalizado              | `start - center - end`  | `start`      |
| style       | Atributo `style` HTML                          | `React.CSSProperties`   |              |
| qa          | Atributo `data-qa` HTML, usado para testes     | `string`                |              |

### API CSS

| Nome                | Descrição                                                                      |
| :------------------ | :----------------------------------------------------------------------------- |
| `--g-divider-color` | Cor do divisor                                                                 |
| `--g-divider-size`  | Tamanho do divisor (altura para orientação horizontal, largura para vertical) |