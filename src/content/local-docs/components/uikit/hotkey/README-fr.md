Vous pouvez utiliser le composant `Hotkey` pour afficher les raccourcis clavier pour Mac et PC.

```tsx
import {Hotkey} from '@gravity-ui/uikit';
```

### Valeur

Les raccourcis clavier sont définis dans le format `<touche>+<touche>`, ce qui signifie que vous devez spécifier plusieurs touches séparées par un signe plus, par exemple, `shift+tab`.

La séquence de combinaisons de touches peut être séparée par un espace : `<raccourci> <raccourci>`, par exemple, `ctrl+a ctrl+c ctrl+v`.

Vous pouvez utiliser `mod` comme raccourci pour `cmd` sur Mac et `ctrl` pour les autres plateformes. Par exemple, `mod+v` est rendu comme ⌘+A pour Mac et Ctrl+A pour PC.

### Vue

`light` : Utilisé si le composant est affiché sur un fond clair (utilisé par défaut).

`dark` : Utilisé si le composant est affiché sur un fond sombre.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Plateforme

`pc` : Utilisé pour afficher les raccourcis clavier d'un clavier PC standard.

`mac` : Utilisé pour afficher les raccourcis clavier d'un clavier Macintosh.

Par défaut, la plateforme est détectée automatiquement.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Propriétés

| Nom       | Description                                                                                             |         Type          |        Défaut         |
| :-------- | :------------------------------------------------------------------------------------------------------ | :-------------------: | :-------------------: |
| view      | Utilisé pour définir le schéma de couleurs                                                              |  `"light"` `"dark"`   |       `"light"`       |
| platform  | Utilisé pour sélectionner la plateforme (PC ou Macintosh) pour afficher le raccourci clavier             |    `"pc"` `"mac"`     | Détecté automatiquement |
| title     | Valeur du raccourci clavier                                                                             |       `string`        |                       |
| style     | Attribut de style HTML                                                                                  | `React.CSSProperties` |                       |
| className | Nom de classe de l'alerte                                                                               |       `string`        |                       |