# .md-эндпоинты и content negotiation на сайте

**Приоритет:** P1 · **Зависимости:** нет · **Трекер:** DATAUI-3745, EPIC 4 (задача 4.1)

## Цель

Каждая страница документации gravity-ui.com доступна как чистый markdown — по суффиксу `.md` и по заголовку `Accept: text/markdown`. Агент, попавший на любую страницу сайта, получает контент в 30–100 раз дешевле по токенам.

## Контекст

Стандарт 2026: Next.js (любой URL доков + `.md`, 16.3), Cloudflare docs (`/index.md`), Mintlify (по умолчанию для всех хостящихся доков). Claude Code, Cursor, OpenCode уже шлют `Accept: text/markdown` (Codex/Copilot/Windsurf — нет, им нужен суффикс). Сайт — Next.js, контент уже в markdown/MDX в `src/content/`.

## Шаги

1. Route handler: `GET /components/uikit/button.md` (и остальные разделы доков) → отдать исходный markdown страницы; фронтматтер: title, package, version, canonical URL, lastUpdated.
2. Content negotiation: middleware — если `Accept: text/markdown` и есть md-вариант, отдать его с того же URL (`Content-Type: text/markdown`, `Vary: Accept`).
3. Препроцессинг: вырезать сервисные блоки (`<!--SANDBOX-->`, `<!--GITHUB_BLOCK-->`), заменить интерактивные примеры кодом; переиспользовать общий клинер из docs-in-npm.md / package-llms-txt.md.
4. Дискавери: `<link rel="alternate" type="text/markdown" href="...">` в head HTML-страниц; ссылки на `.md`-варианты из пакетных llms.txt.
5. Не забыть e2e: суффикс работает для всех локалей и не ломает существующий роутинг/sitemap.

## Definition of Done

- [ ] Все страницы документации компонентов и гайдов отдаются по `.md`-суффиксу.
- [ ] `Accept: text/markdown` возвращает markdown с того же URL (проверено curl'ом в e2e).
- [ ] `link rel=alternate` присутствует на HTML-страницах.
- [ ] Замер: токены страницы Button HTML vs md — в описании PR.
