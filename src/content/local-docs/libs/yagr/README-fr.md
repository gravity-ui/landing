# Ẏagr <img src="https://raw.githubusercontent.com/gravity-ui/yagr/main/docs/assets/yagr.svg" width="24px" height="24px" />

Yagr est un moteur de rendu de graphiques HTML5 Canvas haute performance basé sur [uPlot](https://github.com/leeoniya/uPlot). Il offre des fonctionnalités de haut niveau pour les graphiques uPlot.

<img src="https://raw.githubusercontent.com/gravity-ui/yagr/main/docs/assets/demo.png" width="800" />

## Fonctionnalités

-   [Lignes, aires, colonnes et points comme types de visualisation. Configurables par série](https://yagr.tech/en/api/visualization)
-   [Info-bulle de légende configurable](https://yagr.tech/en/plugins/tooltip)
-   [Axes avec options supplémentaires pour la précision des décimales](https://yagr.tech/en/api/axes)
-   [Échelles avec fonctions de plage et transformations configurables](https://yagr.tech/en/api/scales)
-   [Lignes et bandes de tracé. Couche de dessin configurable](https://yagr.tech/en/plugins/plot-lines)
-   [Graphiques réactifs](https://yagr.tech/en/api/settings#adaptivity) (nécessite [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver))
-   [Support de haut niveau pour les aires/colonnes empilées](https://yagr.tech/en/api/scales#stacking)
-   [Marqueurs configurables](./docs/api/markers.md)
-   [Thème clair/sombre](https://yagr.tech/en/api/settings#theme)
-   [Normalisation des données](https://yagr.tech/en/api/scales#normalization)
-   [Raccourcis, marqueurs de curseur et accrochage configurables](https://yagr.tech/en/api/cursor)
-   Typescript
-   [Localisation](https://yagr.tech/en/api/settings#localization)
-   [Variables CSS dans les noms de couleurs](https://yagr.tech/en/api/css)
-   [Légende en ligne paginée](https://yagr.tech/en/plugins/legend)
-   [Gestion des erreurs et hooks étendus](https://yagr.tech/en/api/lifecycle)
-   [Alignement et interpolation des données pour les données manquantes](https://yagr.tech/en/api/data-processing)
-   [Mises à jour en temps réel](https://yagr.tech/en/api/dynamic-updates)

## [Documentation](https://yagr.tech)

## Démarrage Rapide

```
npm i @gravity-ui/yagr
```

### Module NPM

```typescript
import Yagr from '@gravity-ui/yagr';

new Yagr(document.body, {
    timeline: [1, 2, 3, 4, 5],
    series: [
        {
            data: [1, 2, 3, 4, 5],
            color: 'red',
        },
        {
            data: [2, 3, 1, 4, 5],
            color: 'green',
        },
    ],
});
```

### Balise Script

```html
<script src="https://unpkg.com/@gravity-ui/yagr/dist/yagr.iife.min.js"></script>
<script>
    new Yagr(document.body, {
        timeline: [1, 2, 3, 4, 5],
        series: [
            {
                data: [1, 2, 3, 4, 5],
                color: 'red',
            },
            {
                data: [2, 3, 1, 4, 5],
                color: 'green',
            },
        ],
    });
</script>
```

### Exemples

Besoin de quelque chose de spécifique ? Yagr propose des exemples utiles dans le dossier [demo/examples](./demo/examples/). Comment les lancer avec la version actuelle :

1. Clonez le dépôt.
2. Installez les dépendances `npm i`.
3. Lancez `npm run build`.
4. Lancez `npx http-server .`.
5. Ouvrez les exemples dans le navigateur en suivant la sortie de http-server.