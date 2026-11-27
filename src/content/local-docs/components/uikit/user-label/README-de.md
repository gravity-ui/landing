# UserLabel

`UserLabel` ist ein kompakter Chip mit dem Avatar und Namen oder E-Mail-Adresse eines Benutzers, geeignet für Inline-Erwähnungen und Listen (verwenden Sie `User` für einen größeren Profilblock und `Avatar` nur für das Bild).

## Type

Wird zur Verwaltung des Avatar-Aussehens verwendet. Verwenden Sie `"person"` für eine personalisierte Entität und `"email"` für eine E-Mail-Adresse. Wenn Sie keinen Avatar benötigen, verwenden Sie `"empty"`.

<!--SANDBOX
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel type="person" text="Charles Darwin" />
            <UserLabel type="email" text="email@example.com" />
            <UserLabel type="empty" text="Alan Turing" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel type="person" text="Charles Darwin (person)" />
<UserLabel type="email" text="email@example.com (email)" />
<UserLabel type="empty" text="Alan Turing (empty)" />
```

<!--/GITHUB_BLOCK-->

## Avatar

Diese Komponente kann mit einem benutzerdefinierten Avatar verwendet werden. Sie funktioniert nur mit `type: 'person'`. Sie können ein Bild, eine Eigenschaft der [Avatar](../Avatar/README.md)-Komponente oder einen benutzerdefinierten React-Knoten bereitstellen.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel
                type="person"
                avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg/193px-Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg"
                text="Charles Darwin"
            />
            <UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import {GraduationCap} from '@gravity-ui/icons';

<UserLabel type="person" avatar="<url>" text="Charles Darwin" />
<UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
```

<!--/GITHUB_BLOCK-->

## Interaktivität

Diese Komponente ist auch interaktiv: sie kann klickbar oder schließbar sein.

<!--SANDBOX
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
            <UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
<UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name         | Beschreibung                                     |                                    Typ                                     |   Standard    |
| :----------- | :----------------------------------------------- | :-------------------------------------------------------------------------: | :-----------: |
| type         | Avatar-Aussehen                                  |                       `'person'` `'email'` `'empty'`                        |  `'person'`   |
| view         | `UserLabel`-Ansicht                              |                           `'outlined'` `'clear'`                            | `'outlined'`  |
| size         | Avatar-Größe                                     |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |     `'s'`     |
| avatar       | Benutzer-Avatar                                  | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |               |
| text         | Sichtbarer Text                                  |                              `React.ReactNode`                              |               |
| description  | Benutzerbeschreibung                             |                              `React.ReactNode`                              |               |
| onClick      | `click`-Ereignisbehandlungsroutine für die Komponente |                                 `Function`                                  |               |
| onCloseClick | `click`-Ereignisbehandlungsroutine für das Kreuz-Symbol |                                 `Function`                                  |               |
| className    | Benutzerdefinierte CSS-Klasse für das Stammelement |                                  `string`                                   |               |
| style        | HTML-Stilattribut                                |                            `React.CSSProperties`                            |               |
| qa           | `data-qa`-HTML-Attribut, verwendet für Tests      |                                  `string`                                   |               |

## CSS API

| Name                                     | Beschreibung                                             |
| :--------------------------------------- | :------------------------------------------------------ |
| `--g-user-label-size`                    | Größe für Avatar (Breite und Höhe) und Höhe für Label |
| `--g-user-label-border-radius`           | Label-Randradius                                        |
| `--g-user-label-padding`                 | Horizontale Auffüllung des Labels                       |
| `--g-user-label-gap`                     | Abstand zwischen Elementen (Avatar, Text, Schließen-Symbol) |
| `--g-user-label-text-font-weight`        | Schriftstärke des Textes                                |
| `--g-user-label-text-font-size`          | Schriftgröße des Textes                                 |
| `--g-user-label-text-line-height`        | Zeilenhöhe des Textes                                   |
| `--g-user-label-description-font-weight` | Schriftstärke der Beschreibung                          |
| `--g-user-label-description-font-size`   | Schriftgröße der Beschreibung                           |
| `--g-user-label-description-line-height` | Zeilenhöhe der Beschreibung                             |
