```html
<!--
  This file is part of the @gravity-ui/date-utils library.

  Copyright (c) 2021-2024 Yandex LLC.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<div lang="en">English</div>
<div lang="ru">Русский</div>
<div lang="fr">Français</div>
```

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
dateTime({timeZone: 'Asia/Tokyo'}).format(FORMAT); // "2021-08-07T18:10:00+09:00"
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