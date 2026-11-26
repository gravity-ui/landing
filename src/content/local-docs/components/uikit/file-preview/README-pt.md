`FilePreview` é um cartão de pré-visualização compacto para um único arquivo, mostrando uma miniatura ou ícone do tipo de arquivo com o nome do arquivo e ações opcionais.

```tsx
import {FilePreview} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Propriedades

| Nome                | Descrição                                                                                                                            | Tipo                  | Obrigatório | Padrão    |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------------- | :-------------------- | :-------: | :-------- |
| file                | A interface `File` fornece informações sobre arquivos e permite que o JavaScript em uma página da web acesse seu conteúdo.            | `File`                |     ✓     |           |
| imageSrc            | Fonte para a pré-visualização da imagem                                                                                              | `string`              |           |           |
| description         | Descrição exibida abaixo do nome do arquivo                                                                                         | `string`              |           |           |
| selected            | Habilita ou desabilita estilos de seleção                                                                                            | `boolean`             |           | `false`   |
| className           | Nome da classe para o contêiner do arquivo                                                                                           | `string`              |           |           |
| onClick             | Manipulador de clique para o contêiner do arquivo                                                                                    | `function`            |           |           |
| [actions](#actions) | Uma matriz de ações interativas                                                                                                      | `FilePreviewAction[]` |           | `[]`      |
| view                | O modo de visualização da pré-visualização do arquivo (o texto não é visível para a visualização `compact`)                            | `default`, `compact`  |           | `default` |

#### Ações

Para um arquivo, você pode prescrever ações que serão visíveis quando você passar o mouse sobre ele.

| Nome              | Descrição                                                                                                                                                                                | Tipo                                                                                                                                                       | Obrigatório | Padrão |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------: | ------ |
| id                | ID da ação                                                                                                                                                                               | `String`                                                                                                                                                   |             |        |
| icon              | Ícone da ação                                                                                                                                                                            | `React.ReactNode`                                                                                                                                          |      ✓      |        |
| title             | Dica da ação ao passar o mouse                                                                                                                                                            | `String`                                                                                                                                                   |      ✓      |        |
| onClick           | Manipulador de clique da ação                                                                                                                                                            | `React.MouseEventHandler<HTMLElement>` para a visualização padrão e `(event: React.MouseEvent<HTMLElement, MouseEvent> or KeyboardEvent) => void` para a visualização compacta |             |        |
| href              | Link do botão de ação                                                                                                                                                                    | `String`                                                                                                                                                   |             |        |
| disabled          | Ação desabilitada                                                                                                                                                                        | `boolean`                                                                                                                                                  |             |        |
| extraProps        | Props adicionais do botão de ação                                                                                                                                                        | `ButtonButtonProps or ButtonLinkProps` (funciona apenas para a visualização padrão para desktop)                                                          |             |        |
| tooltipExtraProps | Props adicionais da dica da ação                                                                                                                                                         | `Omit<ActionTooltipProps, 'title' or 'children'>` (funciona apenas para a visualização padrão para desktop)                                                |             |        |