Um ícone de ajuda que revela informações contextuais em um popover no desktop e em uma folha no mobile. Ideal para mostrar dicas, explicações ou conteúdo de suporte sem ocupar espaço extra na interface.

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## Exemplos

Componente com HTML bruto renderizado e fechamento ao sair do mouse:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Propriedades

`HelpMark` aceita quaisquer props válidas de elemento `button` além destas:

| Nome         | Descrição                                   |           Tipo           | Padrão |
| :----------- | :-------------------------------------------- | :----------------------: | :----: |
| size         | Define o tamanho do ícone                                | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| popoverProps | Substitui as props do `Popover` do desktop              |      `PopoverProps`      |        |
| sheetProps   | Substitui as props do `Sheet` do mobile                 |       `SheetProps`       |        |
| children     | Conteúdo exibido dentro do popover ou da folha |    `React.ReactNode`     |        |

## API CSS

| Nome                 | Descrição     |
| :------------------- | :-------------- |
| `--g-help-mark-size` | Tamanho do ícone em px |