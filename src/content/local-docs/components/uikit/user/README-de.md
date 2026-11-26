GRAVITY_TRANSLATION_BLOCK_0_END

Dies ist eine allgemeine Komponente zur Anzeige eines Benutzeravatars mit einem Info-Block. Sie verwendet die [Avatar](../Avatar/README.md)-Komponente zur Darstellung des Avatars. Sie kann auch einen benutzerdefinierten React-Knoten als Avatar akzeptieren.

```tsx
import {User} from '@gravity-ui/uikit';
```

## Name und Beschreibung

Die `User`-Komponente verfügt über die Eigenschaften `name` und `description` zur Anzeige eines Info-Blocks.

GRAVITY_TRANSLATION_BLOCK_1_END

## Größe

Verwenden Sie die Eigenschaft `size`, um die Größe des `User` zu verwalten. Die Standardgröße ist `m`. Die möglichen Werte sind `3xs`, `2xs`, `xs`, `s`, `m`, `l` und `xl`.

Diese Eigenschaft wird auch an die interne `Avatar`-Komponente weitergegeben.

GRAVITY_TRANSLATION_BLOCK_2_END

## Eigenschaften

| Name             | Beschreibung                                |                                    Typ                                     | Standard |
| :--------------- | :------------------------------------------ | :-------------------------------------------------------------------------: | :------: |
| avatar           | Benutzeravatar                              | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |          |
| name             | Benutzername                                |                              `React.ReactNode`                              |          |
| description      | Benutzerbeschreibung                        |                              `React.ReactNode`                              |          |
| size             | Größe des Benutzerbereichs                  |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |   `m`    |
| aria-label       | `aria-label` für den Benutzerbereich        |                                  `string`                                   |          |
| aria-labelledby  | `aria-labelledby` für den Benutzerbereich   |                                  `string`                                   |          |
| aria-describedby | `aria-describedby` für den Benutzerbereich  |                                  `string`                                   |          |
| aria-details     | `aria-details` für den Benutzerbereich      |                                  `string`                                   |          |
| className        | Benutzerdefinierte CSS-Klasse für das Wurzelelement |                                  `string`                                   |          |
| style            | HTML-Stilattribut                           |                            `React.CSSProperties`                            |          |
| qa               | `data-qa` HTML-Attribut, für Tests verwendet |                                  `string`                                   |          |

## CSS API

| Name                               | Beschreibung                       |
| :--------------------------------- | :--------------------------------- |
| `--g-user-avatar-offset`           | Abstand zwischen Avatar und Textblock |
| `--g-user-name-font-weight`        | Schriftgewicht des Namens          |
| `--g-user-name-font-size`          | Schriftgröße des Namens            |
| `--g-user-name-line-height`        | Zeilenhöhe des Namens              |
| `--g-user-description-font-weight` | Schriftgewicht der Beschreibung    |
| `--g-user-description-font-size`   | Schriftgröße der Beschreibung      |
| `--g-user-description-line-height` | Zeilenhöhe der Beschreibung        |