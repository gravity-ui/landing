`Card` é um componente React reutilizável que é basicamente um contêiner semelhante a um cartão com estilos e recursos personalizáveis. Ele é usado para exibir informações ou conteúdo de maneira visualmente atraente e bem organizada.

```tsx
import {Card} from '@gravity-ui/uikit';
```

## Aparência

O `Card` pode ser exibido com várias combinações de estilos:

- `theme`: `normal`, `info`, `success`, `warning`, `danger` ou `utility`.
- `type`: `selection`, `action` ou `container`.
- `view`: `outlined` ou `clear`, ou `outlined`, `filled` ou `raised` (dependendo do parâmetro `type`).

## Tema

Este parâmetro é usado para especificar o estilo do tema do cartão. Ele determina o esquema de cores e a aparência do cartão.

Ao especificar diferentes valores de tema, você pode personalizar a aparência visual do `Card` para corresponder ao seu propósito e ao estilo que você precisa.

- `normal`: Tema normal/padrão do cartão.
- `info`: Tema para exibir informações neutras.
- `success`: Tema para exibir conteúdo positivo ou afirmativo.
- `warning`: Tema para exibir avisos.
- `danger`: Tema para exibir conteúdo relacionado a problemas críticos ou erros.
- `utility`: Tema para exibir dicas úteis.

GRAVITY_TRANSLATION_BLOCK_1_END

## Tipo

Este parâmetro é usado para definir o tipo do componente `Card`. Ele permite personalizar a aparência e o comportamento do cartão.

- `container`: Cartão que atua como um contêiner para outros elementos. Ele fornece um layout estruturado para o conteúdo.
- `action`: Cartão com um elemento interativo, como um botão, que aciona uma ação quando clicado.
- `selection`: Cartão que pode ser selecionado ou clicado para executar uma ação específica.

GRAVITY_TRANSLATION_BLOCK_2_END

## Visualização

Este parâmetro é usado para especificar o estilo de visualização ou layout do `Card`. Ele permite personalizar a aparência e o arranjo do conteúdo do cartão.

- `clear`: Sem estilo.
- `outlined`: Aplica uma borda fina para destacar o conteúdo do cartão.
- `filled`: Preenche o conteúdo do cartão.
- `raised`: Aplica uma sombra para levantar ligeiramente o contêiner.

GRAVITY_TRANSLATION_BLOCK_3_END

## Propriedades

| Nome      | Descrição                                                                                       |    Tipo     |    Padrão    |
| :-------- | :---------------------------------------------------------------------------------------------- | :---------: | :----------: |
| children  | Conteúdo do cartão                                                                              | `ReactNode` |              |
| type      | O tipo do `Card` determina quais propriedades estão disponíveis.                                |  `string`   | `"container"` |
| view      | Esta propriedade está disponível apenas para os tipos `"container"` e `"selection"`.              |  `string`   | `"outlined"`  |
| theme     | Cor base do cartão. Esta propriedade está disponível apenas para o tipo `"container"`.            |  `string`   |  `"normal"`   |
| size      | O tamanho do `Card` determina quais propriedades estão disponíveis.                               |  `string`   |     `"m"`     |
| className | Classe CSS                                                                                      |  `string`   |              |
| onClick   | Manipulador de clique do cartão. Esta propriedade está disponível apenas para os tipos `"selection"` e `"action"`. | `Function`  |              |
| selected  | Cartão selecionado. Esta propriedade está disponível apenas para o tipo `"selection"`.            |  `Boolean`  |              |
| disabled  | Cartão desativado. Esta propriedade está disponível apenas para os tipos `"selection"` e `"action"`. |  `Boolean`  |              |
| qa        | Atributo HTML `data-qa`, usado para testes                                                      |  `string`   |              |

## API CSS

| Nome                        | Descrição      |
| :-------------------------- | :--------------- |
| `--g-card-background-color` | Cor de fundo     |
| `--g-card-border-width`     | Largura da borda |
| `--g-card-border-color`     | Cor da borda     |
| `--g-card-border-radius`    | Raio da borda    |
| `--g-card-box-shadow`       | Sombra           |