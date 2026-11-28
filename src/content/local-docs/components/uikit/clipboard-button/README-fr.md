GRAVITY_TRANSLATION_BLOCK_0_END

`ClipboardButton` est un bouton prêt à l'emploi qui copie le texte donné dans le presse-papiers et affiche une animation de succès. Il combine [`CopyToClipboard`](../CopyToClipboard/README.md) (le comportement de copie) avec [`ClipboardIcon`](../ClipboardIcon/README.md) (l'icône animée).

```tsx
import {ClipboardButton} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Tooltip

Utilisez `tooltipProps` pour configurer le [`ActionTooltip`](../ActionTooltip/README.md) sous-jacent,
par exemple son placement ou son comportement de portail :

```tsx
<ClipboardButton text="Some text to copy" tooltipProps={{placement: 'top', disablePortal: true}} />
```

Les propriétés prises en charge sont `onOpenChange`, `strategy`, `placement`, `offset`, `disabled`,
`container`, `disablePortal`, ainsi que les propriétés `DOMProps` (`className`, `style`) et `QAProps` (`qa`).

Définissez `tooltipProps.disabled` sur `true` pour désactiver le tooltip. `hasTooltip={false}` et le délai
de retour d'information de copie désactivent également le tooltip, même lorsque `tooltipProps.disabled` est `false`. Utilisez
`tooltipInitialText`, `tooltipSuccessText` et `timeout` pour configurer le retour d'information de copie.

## Propriétés

Les propriétés de `ClipboardButton` sont héritées des [propriétés](../Button/README.md#properties) de `Button`.

| Nom               | Description                                                               |            Type            |   Défaut   |
| :----------------- | :------------------------------------------------------------------------ | :------------------------: | :---------: |
| hasTooltip         | Active ou désactive l'affichage du tooltip                                |         `boolean`          |   `true`    |
| onCopy             | Callback après la copie `(text: string, result: boolean) => void`         |         `Function`         |             |
| text               | Texte à copier (peut être une chaîne de caractères ou une fonction retournant une chaîne) |  `string \| () => string`  |             |
| timeout            | Temps avant que l'état ne revienne à la normale après le clic sur le bouton |          `number`          |   `1000`    |
| tooltipInitialText | Texte affiché avant la copie                                              |          `string`          |  `"Copy"`   |
| tooltipSuccessText | Texte affiché après la copie                                              |          `string`          | `"Copied!"` |
| tooltipProps       | Configuration du tooltip. Voir [propriétés prises en charge](#tooltip).   |          `object`          |             |
| icon               | Icône personnalisée                                                       |     `React.ReactNode`      |             |
| iconPosition       | Position de l'icône                                                       | `start          \|    end` |   `start`   |