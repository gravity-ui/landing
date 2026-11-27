<!--GITHUB_BLOCK-->

# Link

<!--/GITHUB_BLOCK-->

`Link` ist ein Textteil, der den Benutzer beim Anklicken zu einem anderen Teil der Seite, einer anderen Seite innerhalb des Dienstes oder einer externen Website führt.

```tsx
import {Link} from '@gravity-ui/uikit';
```

Sein Hauptunterschied zu [Button](../Button) ist die Navigationsfunktion. Meistens führt ein `Link` zu einer anderen Seite oder öffnet einen neuen Browser-Tab.

## Erscheinungsbild

Es gibt drei Arten von Links: `normal` (das übliche Braun), `primary` (Schwarz) und `secondary` (Grau). Sie können dies mit der `view`-Eigenschaft steuern. Sie können auch die Anzeige aktivieren, dass der Link bereits angeklickt wurde, indem Sie die `visitable`-Eigenschaft verwenden.

### Normal

Dies ist das vertrauteste und etablierteste `link`-Muster. Es wird verwendet, um ein Element innerhalb eines Textes oder einer Tabelle visuell hervorzuheben und als Teil der Navigation. Sie können es verwenden, um sowohl zu internen Seiten als auch zu externen Quellen, einschließlich Dokumentationen, zu navigieren. Zusätzlich wird dieser Typ für Fehlerseiten und Zero-States verwendet.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link view="normal" href="#">Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="normal" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Primary

Dieser Typ wird verwendet, wenn es nativ klar ist, dass ein Element klickbar ist, aber die Verwendung eines braunen `Link` die Benutzeroberfläche überladen und Sie daran hindern würde, wichtige Punkte auf einer Seite richtig hervorzuheben.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link view="primary" href="#">Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="primary" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Secondary

Ähnlich wie der primäre `Link` wird dieser Typ verwendet, wenn es für den Benutzer nativ klar ist, dass ein Element klickbar ist, während die Navigation durch dieses Element nicht wesentlich ist und nur wenige Szenarien betrifft. Sein Hauptziel ist es, den Benutzer nicht von den wichtigsten Punkten auf der Seite abzulenken. Der `Secondary`-Typ wird am häufigsten in Breadcrumbs oder bei der Anzeige sekundärer Attribute verwendet.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link view="secondary" href="#">Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="secondary" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Visitable

Diese Eigenschaft wird verwendet, um anzuzeigen, dass der `Link` bereits angeklickt wurde.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link href="https://gravity-ui.com/" visitable>Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link href="https://gravity-ui.com/" visitable>
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

## `href`

Die `href`-Eigenschaft ist erforderlich.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link href="#">Link with href</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link href="#">Link with href</Link>
```

<!--/GITHUB_BLOCK-->

## Verwendung

Sie können einen `Link` sowohl als eigenständiges Textelement als auch als Teil eines Textes verwenden:

<!--SANDBOX
import {Link, Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>
                <Link href="#">what roles are active in the service</Link>
            </Text>
            <Text>
                Currently, this role can only be assigned to a{' '}
                <Link href="#">folder</Link> or <Link href="#">cloud</Link>
            </Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text>
    <Link href="#">What roles are available in the service</Link>
</Text>
<Text>
    Currently, this role can only be assigned to a <Link href="#">folder</Link> or <Link href="#">cloud</Link>
</Text>
```

<!--/GITHUB_BLOCK-->

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
