# @gravity-ui/date-utils

Helpers for managing Date and Time.

## Install

```shell
npm i @gravity-ui/date-utils
```

## Usage

```typescript
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';

// Current date: 2021-08-07T12:10:00
// User's time zone: Europe/Istanbul

const FORMAT = 'YYYY-MM-DDTHH:mm:ssZ';

// parse absolute date
dateTimeParse({year: 2021, month: 7, day: 7})?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse([2021, 7, 7])?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('2021-08-07')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse(1621708204063)?.format(FORMAT); // "2021-05-22T21:30:04+03:00"
dateTimeParse('')?.format(FORMAT); // undefined
dateTimeParse('incorrect-date')?.format(FORMAT); // undefined

// parse relative date
dateTimeParse('now')?.format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTimeParse('now-1d')?.format(FORMAT); // "2021-08-06T12:10:00+03:00"
dateTimeParse('now-1d+1M')?.format(FORMAT); // "2021-09-06T12:10:00+03:00"
dateTimeParse('now/d')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('now+1d/d')?.format(FORMAT); // "2021-08-08T00:00:00+03:00"
dateTimeParse('now-1f')?.format(FORMAT); // undefined

// create dateTime
dateTime().format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTime({input: '2021-08-07'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({input: '2021-08-07', format: 'YYYY-MM-DD'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({timeZone: 'Asia/Tokyo'}).format(FORMAT); // "2021-08-07T18:10:00+09:00
dateTime({input: ''}).format(FORMAT); // "Invalid Date"
dateTime({input: '2021-08', format: 'YYYY-MM-DD'}).format(FORMAT); // "Invalid Date"
```

## Settings

```typescript
import {settings} from '@gravity-ui/date-utils';

// Locales management
settings.getLocale(); // default locale "en"
settings.loadLocale('de').then(() => {
  settings.setLocale('de');
  settings.getLocale(); // "de"
});

// Customization
settings.updateLocale({weekStart: 0}); // change first day of week
```

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## For AI agents

Timezone-aware date/time helpers — parsing (including relative expressions like `now-1d/d`), formatting, and locale management — without any UI, reach for it when you need to compute and format dates reliably across time zones instead of pulling in a full UI calendar.

### When to use

- Parsing absolute or relative date expressions (`'now-1d'`, `'now/d'`) into a timezone-aware `dateTime` object.
- Formatting dates for display in the user's timezone with locale support.
- Sharing date logic between server (Node) and client (React) code — the package has no React dependency.

### When not to use

- To render a calendar, date picker, or any date **UI**, use [`@gravity-ui/date-components`](https://gravity-ui.com/components/date-components) — it builds its visuals on top of this package.
- For lightweight immutable date math and no timezone/relative-expression needs, `date-fns` or the native `Intl`/`Date` APIs may suffice.

### Common pitfalls

- **Calling `dateTimeParse('')` expecting a date** — returns `undefined`, not a `dateTime`; guard with optional chaining or a null check.
- **Forgetting to load a locale** — `settings.setLocale('de')` only formats localized names (weekdays, months) after `settings.loadLocale('de')` has resolved.
- **Hallucinated function `formatDate` / `parseDate`** — the entry points are `dateTimeParse` (parse) and `dateTime(...).format(...)` (format).
- **Assuming the user's timezone is applied automatically** — pass `timeZone` explicitly or the system timezone is used.

## Documentation for AI agents

Agent-readable documentation for the installed version is located in `node_modules/@gravity-ui/date-utils/build/docs/INDEX.md`.
