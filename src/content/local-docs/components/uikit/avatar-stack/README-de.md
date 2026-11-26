GRAVITY_TRANSLATION_BLOCK_0_END

Diese Komponente wird für einen Stapel von Bildern verwendet, die sich überlappen, und optional mit einer Steuerung. Sie bezieht sich normalerweise auf Benutzer-Avatare.

```ts
import {AvatarStack} from '@gravity-ui/uikit';
```

## Verwendung

Grundsätzlich hat `AvatarStack` keine Einschränkungen hinsichtlich der zu rendernden Komponenten. Sehen Sie sich unten ein Beispiel für die übliche Verwendung an:

```tsx
<AvatarStack>
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login1`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login2`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login3`} />
</AvatarStack>
```

## Eigenschaften

| Name        | Beschreibung                                                                                                                                                      |                        Typ                        |  Standard  |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------: | :--------: | --- |
| max         | Bestimmt, wie viele Avatare vor dem `More`-Button sichtbar sind. Wenn die Anzahl der Avatare um nur 1 von `max` abweicht, wird der `More`-Button durch einen Avatar ersetzt. |                      `number`                      |     3     |
| overlapSize | Bestimmt, wie stark jedes Element das nächste überlappen soll. Sie können `s` für `xs` bis `m`-große `Avatar`s, `m` für `l`-große und `l` für `xl`-große verwenden. |                   `s`, `m`, `l`                    |    `s`    |
| size        | Größe für die Steuerung, die zusätzliche Avatare anzeigt. Ihr Wert ist derselbe wie die `Avatar`-Größe.                                                                       |                    `AvatarSize`                    |           |
| className   | Klassenname des Stamm-DOM-Knotens                                                                                                                                  |                      `string`                      |           |
| children    | Liste von Avataren, die auch zusätzliche Wrapper haben können                                                                                                                |                     `Object[]`                     |           |
| renderMore  | Benutzerdefinierte Darstellung für die Steuerung, die zusätzliche Avatare anzeigt                                                                                                           | `function(options: {count: number}): ReactElement` |           |
| moreVariant | Variante der Standardsteuerung, die zusätzliche 'Zähler' anzeigt                                                                                                            |                  `counter`,`dots`                  | `counter` |     |

### AvatarStack.MoreButton

Komponente zum Überschreiben des `More`-Buttons

```tsx
<AvatarStack
  renderMore={({count}) => (
    <Tooltip content={'Weitere Benutzer'}>
      <AvatarStack.MoreButton count={count} />
    </Tooltip>
  )}
>
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login1`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login2`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login3`} />
</AvatarStack>
```