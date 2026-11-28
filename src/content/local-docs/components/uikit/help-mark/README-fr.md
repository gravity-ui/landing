<!--GITHUB_BLOCK-->

# HelpMark

<!--/GITHUB_BLOCK-->

Une icône d'aide qui révèle des informations contextuelles dans une bulle au survol ou au clic. Idéal pour afficher des astuces, des explications ou du contenu de support sans prendre d'espace supplémentaire dans l'interface.

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## Exemples

Composant avec HTML brut rendu et fermeture à la sortie de la souris :

<!--SANDBOX
import {HelpMark} from '@gravity-ui/uikit';

export default function () {
    return (
        <HelpMark onClick={() => console.log('just action happened')}>
            <b>Lorem ipsum</b> dolor sit{' '}
            <a href="https://example.com" target="_blank" rel="noreferrer">
                amet
            </a>
            , at scelerisque suspendisse
        </HelpMark>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<HelpMark onClick={() => console.log('just action happened')}>
  <b>Lorem ipsum</b> dolor sit{' '}
  <a href="https://example.com" target="_blank" rel="noreferrer">
    amet
  </a>
  , at scelerisque suspendisse
</HelpMark>
```

<!--/GITHUB_BLOCK-->

## Propriétés

`HelpMark` accepte toutes les propriétés valides d'un élément `button` en plus de celles-ci :

| Nom         | Description                          |           Type           | Défaut |
| :---------- | :----------------------------------- | :----------------------: | :----: |
| iconSize    | Définit la taille de l'icône         | `"s"` `"m"` `"l"` `"xl"` | `"m"`  |
| popoverProps | Remplace les propriétés de `Popover` |      `PopoverProps`      |        |
| children    | Contenu affiché à l'intérieur de la bulle |    `React.ReactNode`     |        |
