<!--GITHUB_BLOCK-->

# HelpMark

<!--/GITHUB_BLOCK-->

Um ícone de ajuda que revela informações contextuais em um popover ao passar o mouse ou clicar. Ideal para mostrar dicas, explicações ou conteúdo de suporte sem ocupar espaço extra na interface.

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## Exemplos

Componente com HTML bruto renderizado e fechamento ao sair do mouse:

<!--SANDBOX
import {HelpMark} from '@gravity-ui/uikit';

export default function () {
    return (
        <HelpMark onClick={() => console.log('just action happened')}>
            <b>Lorem ipsum</b> dolor sit{' '}
            <a href="https://example.com" target="_blank" rel="noreferrer">
                amet
            </a>
            , at scelerisque suspendisse
        </HelpMark>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<HelpMark onClick={() => console.log('just action happened')}>
  <b>Lorem ipsum</b> dolor sit{' '}
  <a href="https://example.com" target="_blank" rel="noreferrer">
    amet
  </a>
  , at scelerisque suspendisse
</HelpMark>
```

<!--/GITHUB_BLOCK-->

## Propriedades

`HelpMark` aceita quaisquer props válidas de elemento `button` além destas:

| Nome         | Descrição                               |           Tipo           | Padrão |
| :----------- | :-------------------------------------- | :----------------------: | :----: |
| iconSize     | Define o tamanho do ícone               | `"s"` `"m"` `"l"` `"xl"` | `"m"`  |
| popoverProps | Substitui as props do `Popover`         |      `PopoverProps`      |        |
| children     | Conteúdo exibido dentro do popover      |    `React.ReactNode`     |        |
