Le composant `Divider` est utilisé comme une ligne fine pour délimiter et regrouper des éléments afin de renforcer la hiérarchie visuelle.

```tsx
import {Divider} from '@gravity-ui/uikit';
```

```tsx
<Divider className="custom-divider" direction="horizontal" />
```

### Orientation

Utilisez la propriété `direction` pour gérer l'orientation du `Divider`. L'orientation par défaut est `horizontal`.

#### Horizontal

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

#### Vertical

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Contenu personnalisé

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Alignement

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Propriétés

| Nom        | Description                                | Type                    | Défaut       |
| :---------- | :----------------------------------------- | :---------------------- | :----------- |
| className   | Attribut HTML `class`                      | `string`                | -            |
| orientation | Détermine la direction du séparateur       | `horizontal - vertical` | `horizontal` |
| children    | Contenu personnalisé à l'intérieur du séparateur | `React.ReactNode`       |              |
| align       | Position du contenu personnalisé           | `start - center - end`  | `start`      |
| style       | Attribut HTML `style`                      | `React.CSSProperties`   |              |
| qa          | Attribut HTML `data-qa`, utilisé pour les tests | `string`                |              |

### API CSS

| Nom                | Description                                                                      |
| :------------------ | :------------------------------------------------------------------------------- |
| `--g-divider-color` | Couleur du séparateur                                                            |
| `--g-divider-size`  | Taille du séparateur (hauteur pour l'orientation horizontale, largeur pour l'orientation verticale) |