Der `Loader`-Komponente zeigt den Ladefortschritt als blinkende Balken an. Im Gegensatz zu `Spin` wird diese Komponente in globalen Szenarien verwendet, z. B. für eine ganze Seite oder einen `Dialog`.

```tsx
import {Loader} from '@gravity-ui/uikit';
```

### Größe

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

`S`: Kleine Größe, wird verwendet, wenn der normale Lader zu groß ist.

`M`: Mittlere (Standard-)Größe, wird in den meisten Fällen verwendet.

`L`: Große Größe, wird verwendet, wenn der normale Lader zu klein ist.

## Eigenschaften

| Name      | Beschreibung                           |       Typ        | Standard |
| :-------- | :------------------------------------ | :--------------: | :------: |
| size      | Größe des Laders                       | `"s"` `"m"` `"l"` |  `"s"`   |
| className | Benutzerdefinierte CSS-Klasse für das Wurzelelement |     `string`     |          |