# UserLabel

`UserLabel` ist ein kompakter Chip mit dem Avatar und Namen oder E-Mail-Adresse eines Benutzers, geeignet für Inline-Erwähnungen und Listen (verwenden Sie `User` für einen größeren Profilblock und `Avatar` nur für das Bild).

## Type

Wird zur Verwaltung des Avatar-Aussehens verwendet. Verwenden Sie `"person"` für eine personalisierte Entität und `"email"` für eine E-Mail-Adresse. Wenn Sie keinen Avatar benötigen, verwenden Sie `"empty"`.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Avatar

Diese Komponente kann mit einem benutzerdefinierten Avatar verwendet werden. Sie funktioniert nur mit `type: 'person'`. Sie können ein Bild, eine Eigenschaft der [Avatar](../Avatar/README.md)-Komponente oder einen benutzerdefinierten React-Knoten bereitstellen.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Interaktivität

Diese Komponente ist auch interaktiv: sie kann klickbar oder schließbar sein.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

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