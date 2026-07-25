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

// Analizar fecha absoluta
dateTimeParse({year: 2021, month: 7, day: 7})?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse([2021, 7, 7])?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('2021-08-07')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse(1621708204063)?.format(FORMAT); // "2021-05-22T21:30:04+03:00"
dateTimeParse('')?.format(FORMAT); // undefined
dateTimeParse('incorrect-date')?.format(FORMAT); // undefined

// Analizar fecha relativa
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

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE) para más detalles.

## Para agentes de IA

Utilidades de fecha/hora conscientes de la zona horaria — análisis (incluyendo expresiones relativas como `now-1d/d`), formato y gestión de locales — sin ninguna interfaz de usuario, úsalo cuando necesites calcular y formatear fechas de forma fiable en diferentes zonas horarias en lugar de recurrir a un calendario completo de interfaz de usuario.

### Cuándo usar

- Para analizar expresiones de fecha absolutas o relativas (`'now-1d'`, `'now/d'`) en un objeto `dateTime` consciente de la zona horaria.
- Para formatear fechas para su visualización en la zona horaria del usuario con soporte de localización.
- Para compartir lógica de fechas entre código del servidor (Node) y del cliente (React) — el paquete no tiene dependencia de React.

### Cuándo no usar

- Para renderizar un calendario, selector de fechas o cualquier **interfaz de usuario** de fechas, usa [`@gravity-ui/date-components`](https://gravity-ui.com/components/date-components) — construye sus elementos visuales sobre este paquete.
- Para operaciones matemáticas de fechas inmutables y ligeras sin necesidad de zonas horarias/expresiones relativas, `date-fns` o las APIs nativas `Intl`/`Date` pueden ser suficientes.

### Errores comunes

- **Llamar a `dateTimeParse('')` esperando una fecha** — devuelve `undefined`, no un `dateTime`; protege con encadenamiento opcional o una comprobación de nulos.
- **Olvidar cargar un locale** — `settings.setLocale('de')` solo formatea nombres localizados (días de la semana, meses) después de que `settings.loadLocale('de')` se haya resuelto.
- **Función "alucinada" `formatDate` / `parseDate`** — los puntos de entrada son `dateTimeParse` (analizar) y `dateTime(...).format(...)` (formatear).
- **Asumir que la zona horaria del usuario se aplica automáticamente** — pasa `timeZone` explícitamente o se utiliza la zona horaria del sistema.

## Documentación para agentes de IA

La documentación legible por agentes para la versión instalada se encuentra en `node_modules/@gravity-ui/date-utils/build/docs/INDEX.md`.