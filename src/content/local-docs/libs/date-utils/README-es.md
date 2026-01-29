# @gravity-ui/date-utils

Utilidades para gestionar fechas y horas.

## Instalación

```shell
npm i @gravity-ui/date-utils
```

## Uso

```typescript
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';

// Fecha actual: 2021-08-07T12:10:00
// Zona horaria del usuario: Europe/Istanbul

const FORMAT = 'YYYY-MM-DDTHH:mm:ssZ';

// Parsear fecha absoluta
dateTimeParse({year: 2021, month: 7, day: 7})?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse([2021, 7, 7])?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('2021-08-07')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse(1621708204063)?.format(FORMAT); // "2021-05-22T21:30:04+03:00"
dateTimeParse('')?.format(FORMAT); // undefined
dateTimeParse('incorrect-date')?.format(FORMAT); // undefined

// Parsear fecha relativa
dateTimeParse('now')?.format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTimeParse('now-1d')?.format(FORMAT); // "2021-08-06T12:10:00+03:00"
dateTimeParse('now-1d+1M')?.format(FORMAT); // "2021-09-06T12:10:00+03:00"
dateTimeParse('now/d')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('now+1d/d')?.format(FORMAT); // "2021-08-08T00:00:00+03:00"
dateTimeParse('now-1f')?.format(FORMAT); // undefined

// Crear dateTime
dateTime().format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTime({input: '2021-08-07'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({input: '2021-08-07', format: 'YYYY-MM-DD'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({timeZone: 'Asia/Tokyo'}).format(FORMAT); // "2021-08-07T18:10:00+09:00
dateTime({input: ''}).format(FORMAT); // "Invalid Date"
dateTime({input: '2021-08', format: 'YYYY-MM-DD'}).format(FORMAT); // "Invalid Date"
```

## Configuración

```typescript
import {settings} from '@gravity-ui/date-utils';

// Gestión de locales
settings.getLocale(); // locale por defecto "en"
settings.loadLocale('de').then(() => {
  settings.setLocale('de');
  settings.getLocale(); // "de"
});

// Personalización
settings.updateLocale({weekStart: 0}); // cambiar el primer día de la semana
```