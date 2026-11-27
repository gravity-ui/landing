<!--GITHUB_BLOCK-->

# ClipboardButton

<!--/GITHUB_BLOCK-->

`ClipboardButton` est un bouton prêt à l'emploi qui copie le texte donné dans le presse-papiers et joue une animation de succès. Il combine [`CopyToClipboard`](../CopyToClipboard/README.md) (le comportement de copie) avec [`ClipboardIcon`](../ClipboardIcon/README.md) (l'icône animée).

```tsx
import {ClipboardButton} from '@gravity-ui/uikit';
```

<!--SANDBOX
import {ClipboardButton} from '@gravity-ui/uikit';

export default function () {
    return <ClipboardButton text="Some text to copy" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ClipboardButton text="Some text to copy" />
```

<!--/GITHUB_BLOCK-->

## Propriétés

Les propriétés de `ClipboardButton` sont héritées des propriétés de `Button` [propriétés](../Button/README.md#properties).

| Nom                | Description                                                               |            Type            |   Défaut   |
| :----------------- | :------------------------------------------------------------------------ | :------------------------: | :--------: |
| hasTooltip         | Active/désactive l'affichage de l'infobulle                               |         `boolean`          |   `true`   |
| onCopy             | Callback après la copie `(text: string, result: boolean) => void`         |         `Function`         |            |
| text               | Texte à copier (peut être une chaîne de caractères ou une fonction retournant une chaîne) |  `string \| () => string`  |            |
| timeout            | Temps avant que l'état ne revienne à la normale après le clic sur le bouton |          `number`          |   `1000`   |
| tooltipInitialText | Texte affiché avant la copie                                              |          `string`          |  `"Copy"`  |
| tooltipSuccessText | Texte affiché après la copie                                              |          `string`          | `"Copied!"`|
| icon               | Icône personnalisée                                                       |     `React.ReactNode`      |            |
| iconPosition       | Position de l'icône                                                       | `start          \|    end` |   `start`  |
