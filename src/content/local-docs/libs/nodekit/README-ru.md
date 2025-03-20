# NodeKit

`NodeKit` — это простой набор инструментов для приложений, скриптов и библиотек Node.js, который включает поддержку логирования, телеметрии, конфигурации и обработки ошибок, обеспечивая стабильную основу для работы с различными проектами.

## Начало работы

Добавьте зависимость к проекту:

```bash
npm install --save @gravity-ui/nodekit
```

Импортируйте и инициализируйте `NodeKit` в приложении:

```typescript
import {NodeKit} from '@gravity-ui/nodekit';

const nodeKit = new NodeKit();
nodekit.ctx.log('App is ready');
```

## Документация

Дополнительная документация находится в папке `docs/`:

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md) — описывает, как настроить сам `NodeKit` и приложения, основанные на `NodeKit`.
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) — описывает концепцию контекстов `NodeKit`, а также логирование и трассировку.
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) — содержит описание полезного пользовательского класса ошибок, который предлагает `NodeKit` для ваших приложений.
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) — включает список дополнительных вспомогательных функций, входящих в состав `NodeKit`.

## Вклад в проект

### Начало работы

Склонируйте репозиторий `NodeKit` и примеры приложений:

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

Свяжите `NodeKit` с `npm` и запустите компилятор:

```bash
cd nodekit && npm link && npm run dev
```

В другом терминале перейдите в папку с примерами и откройте интересующий пример. Свяжите его с вашим `NodeKit` и запустите приложение:

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

После выполнения этих шагов можно вносить изменения как в `NodeKit`, так и в демонстрационное приложение, при этом результаты таких изменений будут отражаться в режиме реального времени.
