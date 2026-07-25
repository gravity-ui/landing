# @gravity-ui/date-utils

Utilitaires pour la gestion des dates et heures.

## Installation

```shell
npm i @gravity-ui/date-utils
```

## Utilisation

```typescript
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';

// Date actuelle : 2021-08-07T12:10:00
// Fuseau horaire de l'utilisateur : Europe/Istanbul

const FORMAT = 'YYYY-MM-DDTHH:mm:ssZ';

// Analyse d'une date absolue
dateTimeParse({year: 2021, month: 7, day: 7})?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse([2021, 7, 7])?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('2021-08-07')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse(1621708204063)?.format(FORMAT); // "2021-05-22T21:30:04+03:00"
dateTimeParse('')?.format(FORMAT); // undefined
dateTimeParse('incorrect-date')?.format(FORMAT); // undefined

// Analyse d'une date relative
dateTimeParse('now')?.format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTimeParse('now-1d')?.format(FORMAT); // "2021-08-06T12:10:00+03:00"
dateTimeParse('now-1d+1M')?.format(FORMAT); // "2021-09-06T12:10:00+03:00"
dateTimeParse('now/d')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('now+1d/d')?.format(FORMAT); // "2021-08-08T00:00:00+03:00"
dateTimeParse('now-1f')?.format(FORMAT); // undefined

// Création d'un objet dateTime
dateTime().format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTime({input: '2021-08-07'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({input: '2021-08-07', format: 'YYYY-MM-DD'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({timeZone: 'Asia/Tokyo'}).format(FORMAT); // "2021-08-07T18:10:00+09:00
dateTime({input: ''}).format(FORMAT); // "Invalid Date"
dateTime({input: '2021-08', format: 'YYYY-MM-DD'}).format(FORMAT); // "Invalid Date"
```

## Paramètres

```typescript
import {settings} from '@gravity-ui/date-utils';

// Gestion des locales
settings.getLocale(); // locale par défaut "en"
settings.loadLocale('de').then(() => {
  settings.setLocale('de');
  settings.getLocale(); // "de"
});

// Personnalisation
settings.updateLocale({weekStart: 0}); // changer le premier jour de la semaine
```

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

## Pour les agents IA

Utilitaires de date/heure conscients des fuseaux horaires — analyse (y compris les expressions relatives comme `now-1d/d`), formatage et gestion des locales — sans aucune interface utilisateur. Utilisez-les lorsque vous avez besoin de calculer et de formater des dates de manière fiable entre les fuseaux horaires, sans avoir à importer une bibliothèque complète de calendrier.

### Quand l'utiliser

- Pour analyser des expressions de date absolues ou relatives (`'now-1d'`, `'now/d'`) en un objet `dateTime` conscient du fuseau horaire.
- Pour formater des dates à afficher dans le fuseau horaire de l'utilisateur avec prise en charge des locales.
- Pour partager la logique de date entre le code serveur (Node) et client (React) — le package n'a pas de dépendance React.

### Quand ne pas l'utiliser

- Pour afficher un calendrier, un sélecteur de date ou toute autre **interface utilisateur** de date, utilisez [`@gravity-ui/date-components`](https://gravity-ui.com/components/date-components) — il s'appuie sur ce package pour ses éléments visuels.
- Pour des calculs de date immuables légers sans besoin de fuseaux horaires ou d'expressions relatives, `date-fns` ou les API natives `Intl`/`Date` peuvent suffire.

### Pièges courants

- **Appeler `dateTimeParse('')` en s'attendant à une date** — renvoie `undefined`, pas un objet `dateTime` ; utilisez la chaîne optionnelle (`?.`) ou une vérification nulle.
- **Oublier de charger une locale** — `settings.setLocale('de')` ne formate les noms localisés (jours de la semaine, mois) qu'après que `settings.loadLocale('de')` a été résolu.
- **Fonctions fantaisistes `formatDate` / `parseDate`** — les points d'entrée sont `dateTimeParse` (pour l'analyse) et `dateTime(...).format(...)` (pour le formatage).
- **Supposer que le fuseau horaire de l'utilisateur est appliqué automatiquement** — spécifiez explicitement `timeZone` ou le fuseau horaire du système sera utilisé.

## Documentation pour les agents IA

La documentation lisible par agent pour la version installée se trouve dans `node_modules/@gravity-ui/date-utils/build/docs/INDEX.md`.