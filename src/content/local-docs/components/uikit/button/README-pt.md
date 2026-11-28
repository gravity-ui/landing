Os botões atuam como um gatilho para certas ações. Embora este seja o seu propósito principal, em alguns casos muito raros, eles podem ser usados como links para navegar para outras páginas.

```tsx
import {Button} from '@gravity-ui/uikit';
```

## Aparência

Existem quatro tipos de `Button` em termos de aparência: básico, contornado, plano e de contraste.
A aparência do `Button` é determinada pela propriedade `view`.

### Básico

`action`: O tipo mais distinto de `Button`. É usado para a ação principal em uma tela que requer mais atenção.
Recomendamos o uso de apenas um botão desse tipo por página.

`normal`: Tipo padrão de `Button` projetado para ações secundárias ou para manter a importância de uma ação sem chamar muita atenção para ela.

`raised`: Colocado acima do conteúdo como um elemento flutuante, geralmente com uma localização fixa.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Contornado

`outlined`: Usado para ações secundárias que requerem menos atenção. Pode ser usado com ou sem um botão principal; no primeiro caso, deve ser um botão enfatizado.

`outlined-action`: Geralmente usado como um link para outra página ou recurso externo.

Este tipo também possui variações semânticas que podem ser usadas quando semânticas adicionais são necessárias: `outlined-info`, `outlined-success`, `outlined-warning` e `outlined-danger`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Plano

`flat`: Usado para ações auxiliares que requerem a menor atenção. É frequentemente usado em uma lista de botões ou ícones de ação (sem texto) em um editor.

`flat-secondary`: Menos enfatizado que o botão `flat`. É frequentemente usado como um botão secundário em caixas de diálogo e janelas modais.

`flat-action`: Geralmente usado como um link para outra página ou recurso externo.

Ele também possui variações semânticas que podem ser usadas onde semânticas adicionais são necessárias: `outlined-info`, `outlined-success`, `outlined-warning` e `outlined-danger`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Contraste

`contrast` é escuro no tema claro e claro no tema escuro. `contrast-inverted` inverte essas cores. `contrast-light` permanece claro e `contrast-dark` permanece escuro em ambos os temas.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Ícones

Para adicionar um ícone a um `Button`, use o componente [`Icon`](../Icon), que é um wrapper especial para SVGs. O tamanho do ícone é selecionado automaticamente de acordo com o tamanho do `Button`. Defina explicitamente o `size`, `width` ou `height` do `Icon` para substituí-lo.

Para dimensionar um ícone personalizado de acordo com o tamanho do `Button`, use a função de renderização `Button.Icon`:

```tsx
<Button size="l">
  <Button.Icon>{({size}) => <CustomIcon size={size} />}</Button.Icon>
  Action
</Button>
```

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Estados

Um `Button` pode ter diferentes estados:

`disabled`: Quando o botão está indisponível por algum motivo.

`loading`: Quando alguns processos assíncronos estão em execução em segundo plano.

`selected`: Quando o usuário pode **Ativar** e **Desativar** o botão.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Gatilho de menu

O `Button` muda automaticamente sua aparência quando atributos aria correspondentes (`aria-haspopup`, `aria-expanded`) são passados:

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Tamanho

Use a propriedade `size` para gerenciar o tamanho do `Button`. O tamanho padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Largura

Use a propriedade `width` para gerenciar como o `Button` se comporta dentro do contêiner:

`auto`: Limita a largura máxima do `Button` ocultando o conteúdo transbordante com reticências.

`max`: Corresponde à largura do `Button` à largura do contêiner pai, também ocultando o conteúdo transbordante com reticências.

GRAVITY_TRANSLATION_BLOCK_16_END

## Pin

A propriedade `pin` permite gerenciar a forma das bordas _início_ e _fim_ e é geralmente usada para combinar vários botões em uma única unidade.
O valor da propriedade `pin` consiste nos nomes de estilo _início_ e _fim_ separados por um hífen, por exemplo, `round-brick`.
Os estilos de borda são: `round` (padrão), `circle`, `brick` e `clear`.

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

## Propriedades

O `Button` aceita quaisquer props válidos de elemento `button` ou `a`, além destas:

| Nome      | Descrição                                                          |              Tipo               |     Padrão     |
| :-------- | :------------------------------------------------------------------- | :-----------------------------: | :------------: |
| children  | Conteúdo do `Button`. Você pode usar texto e o componente `<Icon/>`. |        `React.ReactNode`        |                |
| component | Substitui o componente raiz                                          |       `React.ElementType`       |                |
| disabled  | Alterna o estado `disabled`                                          |            `boolean`            |     `false`     |
| href      | Passe isso para tornar o componente raiz um link                    |            `string`             |                |
| loading   | Alterna o estado `loading`                                           |            `boolean`            |     `false`     |
| pin       | Define o estilo da borda do `Button`                                 |            `string`             | `"round-round"` |
| qa        | Atributo HTML `data-qa`, usado para testes                           |            `string`             |                |
| selected  | Alterna o estado `selected`                                          |            `boolean`            |                |
| size      | Define o tamanho do `Button`                                         | `"xs"` `"s"` `"m"` `"l"` `"xl"` |      `"m"`      |
| view      | Define a aparência do `Button`                                       |          `ButtonView`           |   `"normal"`    |
| width     | Controla como o `Button` usa o espaço do pai                         |        `"auto"` `"max"`         |                |

## API CSS

| Nome                                | Descrição               |
| :---------------------------------- | :------------------------ |
| `--g-button-text-color`             | Cor do texto                |
| `--g-button-text-color-hover`       | Cor do texto ao passar o mouse       |
| `--g-button-background-color`       | Cor de fundo          |
| `--g-button-background-color-hover` | Cor de fundo ao passar o mouse |
| `--g-button-border-width`           | Largura da borda              |
| `--g-button-border-color`           | Cor da borda              |
| `--g-button-border-style`           | Estilo da borda           |
| `--g-button-focus-outline-width`    | Largura do contorno de foco       |
| `--g-button-focus-outline-color`    | Cor do contorno de foco       |
| `--g-button-focus-outline-style`    | Estilo do contorno de foco       |
| `--g-button-focus-outline-offset`   | Deslocamento do contorno de foco      |
| `--g-button-height`                 | Altura (altura da linha)      |
| `--g-button-padding`                | Preenchimentos laterais             |
| `--g-button-border-radius`          | Raio da borda           |
| `--g-button-font-size`              | Tamanho da fonte do texto            |
| `--g-button-icon-space`             | Espaço disponível para o ícone      |
| `--g-button-icon-offset`            | Deslocamento do ícone               |