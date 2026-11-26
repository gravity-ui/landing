GRAVITY_TRANSLATION_BLOCK_0_END

`Link` ist ein Textteil, der den Benutzer beim Anklicken zu einem anderen Teil der Seite, einer anderen Seite innerhalb des Dienstes oder einer externen Website führt.

```tsx
import {Link} from '@gravity-ui/uikit';
```

Sein Hauptunterschied zu [Button](../Button) ist die Navigationsfunktion. Meistens führt ein `Link` zu einer anderen Seite oder öffnet einen neuen Browser-Tab.

## Erscheinungsbild

Es gibt drei Arten von Links: `normal` (das übliche Braun), `primary` (Schwarz) und `secondary` (Grau). Sie können dies mit der `view`-Eigenschaft steuern. Sie können auch die Anzeige aktivieren, dass der Link bereits angeklickt wurde, indem Sie die `visitable`-Eigenschaft verwenden.

### Normal

Dies ist das vertrauteste und etablierteste `link`-Muster. Es wird verwendet, um ein Element innerhalb eines Textes oder einer Tabelle visuell hervorzuheben und als Teil der Navigation. Sie können es verwenden, um sowohl zu internen Seiten als auch zu externen Quellen, einschließlich Dokumentationen, zu navigieren. Zusätzlich wird dieser Typ für Fehlerseiten und Zero-States verwendet.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Primary

Dieser Typ wird verwendet, wenn es nativ klar ist, dass ein Element klickbar ist, aber die Verwendung eines braunen `Link` die Benutzeroberfläche überladen und Sie daran hindern würde, wichtige Punkte auf einer Seite richtig hervorzuheben.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Secondary

Ähnlich wie der primäre `Link` wird dieser Typ verwendet, wenn es für den Benutzer nativ klar ist, dass ein Element klickbar ist, während die Navigation durch dieses Element nicht wesentlich ist und nur wenige Szenarien betrifft. Sein Hauptziel ist es, den Benutzer nicht von den wichtigsten Punkten auf der Seite abzulenken. Der `Secondary`-Typ wird am häufigsten in Breadcrumbs oder bei der Anzeige sekundärer Attribute verwendet.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Visitable

Diese Eigenschaft wird verwendet, um anzuzeigen, dass der `Link` bereits angeklickt wurde.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## `href`

Die `href`-Eigenschaft ist erforderlich.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Verwendung

Sie können einen `Link` sowohl als eigenständiges Textelement als auch als Teil eines Textes verwenden:

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Eigenschaften

`Link` akzeptiert alle gültigen `a`-Element-Props zusätzlich zu diesen:

| Name      | Beschreibung                                |                 Type                 |  Default   |
| :-------- | :------------------------------------------ | :----------------------------------: | :--------: |
| children  | `Link`-Inhalt                               |          `React.ReactNode`           |            |
| href      | `href`-HTML-Attribut                        |               `string`               |            |
| qa        | `data-qa`-HTML-Attribut, wird für Tests verwendet |               `string`               |            |
| underline | Zeigt Unterstreichung unter dem `Link` an   |              `boolean`               |  `false`   |
| view      | `Link`-Erscheinungsbild                     | `"normal"` `"primary"` `"secondary"` | `"normal"` |
| visitable | Zeigt den CSS-Status `:visitable` an        |              `boolean`               |  `false`   |