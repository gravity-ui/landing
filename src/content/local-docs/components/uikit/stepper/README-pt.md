`Stepper` guia o usuário através de uma sequência de etapas numeradas, mostrando o progresso em um fluxo de trabalho de várias etapas, semelhante a um assistente.

```tsx
import {Stepper} from '@gravity-ui/uikit';
```

## Exemplo

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Itens interativos

Use as props `onUpdate` e `value` com estado personalizado para manipular as etapas

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Visualizações diferentes

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Tamanhos diferentes

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Etapas desabilitadas

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### Ícones personalizados

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### Separador de etapa personalizado

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

### Etapa com elemento flutuante

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

## Propriedades

| Nome             | Descrição                                               |                  Tipo                  | Padrão |
| :--------------- | :-------------------------------------------------------- | :------------------------------------: | :----: |
| children         | Itens do Stepper.                                         | `React.ReactElement<StepperItemProps>` |        |
| size             | Define o tamanho da `Step`.                               |           `"s"` `"m"` `"l"`            | `"s"`  |
| value            | ID da `Step` selecionada atualmente.                      |           `number` `string`            |        |
| onUpdate         | Função para alterar a `Step` atual.                       |               `Function`               |        |
| qa               | Atributo HTML `data-qa`, usado para testes.               |                `string`                |        |
| separator        | Nó separador personalizado.                               |           `React.ReactNode`            |        |
| className        | Nome da classe CSS para o contêiner de Steps.             |                `string`                |        |
| style            | Define o estilo inline para o contêiner de Steps.         |            `CSSProperties`             |        |
| aria-label       | Define um valor de string que rotula o elemento atual.    |                `string`                |        |
| aria-labelledby  | Identifica o(s) elemento(s) que rotulam o elemento atual. |                `string`                |        |
| aria-describedby | Identifica o(s) elemento(s) que descrevem o objeto.       |                `string`                |        |

### StepperItemProps

| Nome      | Descrição                                       |              Type              | Padrão |
| :-------- | :------------------------------------------------ | :----------------------------: | :----: |
| id        | Define o ID da `Step`. O índice do elemento do array é o padrão. |       `string` `number`        |        |
| view      | Define a visualização da `Step`.                  | `"idle"` `"error"` `"success"` | `"idle"` |
| children  | Conteúdo da `Step`.                               |          `React.Node`          |        |
| disabled  | Determina se a `Step` está desabilitada.          |           `boolean`            |        |
| icon      | Nó de ícone personalizado.                        |         `SVGIconData`          |        |
| onClick   | Manipulador de clique da etapa.                   |   `React.MouseEventHandler`    |        |
| className | Nome da classe CSS para o elemento.               |            `string`            |        |

### API CSS

| Nome                              | Descrição                               |
| :-------------------------------- | :-------------------------------------- |
| `--g-stepper-gap`                 | Espaço entre os itens do passo e o separador. |
| `--g-stepper-item-text-max-width` | Largura máxima do texto do item do passo. |