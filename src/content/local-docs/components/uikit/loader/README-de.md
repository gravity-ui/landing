<!--GITHUB_BLOCK-->

# Loader

<!--/GITHUB_BLOCK-->

Der `Loader`-Komponente zeigt den Ladefortschritt als blinkende Balken an. Im Gegensatz zu `Spin` wird diese Komponente in globalen Szenarien verwendet, z. B. für eine ganze Seite oder einen `Dialog`.

```tsx
import {Loader} from '@gravity-ui/uikit';
```

### Größe

<!--SANDBOX
import {Loader} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Loader size="s" />
            <Loader size="m" />
            <Loader size="l" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Loader size="s" />
<Loader size="m" />
<Loader size="l" />
```

<!--/GITHUB_BLOCK-->

`S`: Kleine Größe, wird verwendet, wenn der normale Lader zu groß ist.

`M`: Mittlere (Standard-)Größe, wird in den meisten Fällen verwendet.

`L`: Große Größe, wird verwendet, wenn der normale Lader zu klein ist.

## Eigenschaften

| Name      | Beschreibung                           |       Typ        | Standard |
| :-------- | :------------------------------------ | :--------------: | :------: |
| size      | Größe des Laders                       | `"s"` `"m"` `"l"` |  `"s"`   |
| className | Benutzerdefinierte CSS-Klasse für das Wurzelelement |     `string`     |          |
