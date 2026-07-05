# Документация внутри npm-пакета (пилот: uikit)

**Приоритет:** P0 — самый результативный канал по всем публичным evals · **Зависимости:** нет (усиливается readme-template.md) · **Трекер:** нет карточки — завести под DATAUI-3745, EPIC 3

## Цель

Агент, работающий в проекте потребителя, должен находить актуальную документацию установленной версии локально — в `node_modules/@gravity-ui/*`. Это единственный канал без discovery-проблемы и с автоматическим версионированием (доки всегда соответствуют установленной версии — снимает вопрос version-pinned URL из DATAUI-3747).

## Контекст

Сейчас тарболл `@gravity-ui/uikit` содержит один markdown — корневой README; README компонентов не публикуются, агент видит только `.d.ts`. Референсы: Next.js 16.2+ кладёт 423 md-файла в `dist/docs/` (evals: 58% → 100%), Mastra шипит `dist/docs/` + SOURCE_MAP.json, TanStack Intent и antfu/skills-npm — SKILL.md в тарболле.

## Шаги

1. Пилот в `gravity-ui/uikit`:
   - на сборке копировать `src/components/*/README.md` → `dist/docs/components/`, плюс ключевые гайды (темизация, стили, i18n) → `dist/docs/guides/`;
   - препроцессинг: вырезать `<!--SANDBOX-->`, `<!--GITHUB_BLOCK-->`, бейджи, картинки (тот же клинер, что в package-llms-txt.md — вынести в общий пакет/скрипт);
   - `dist/docs/INDEX.md` — компактный индекс: компонент → одна строка описания → путь к файлу;
   - добавить `dist/docs` в `files` package.json; замерить прирост размера тарболла (ожидаемо сотни КБ текста — приемлемо; если нет, обсудить отдельный пакет `@gravity-ui/uikit-docs`).
2. В корневой README пакета — секция для агентов: «Docs for the installed version are in `node_modules/@gravity-ui/uikit/dist/docs/`. Your training data may be outdated — these files are the source of truth» (формулировка Next.js).
3. Прогнать evals-набор (evals-baseline.md) в конфигурации «доки в node_modules»: агент должен сам находить `dist/docs` при указании из AGENTS.md-секции (consumer-agents-md.md) и заметно реже — без указания. Зафиксировать обе цифры.
4. По результатам пилота — тиражировать на остальные Tier-1 пакеты (charts, navigation, icons, date-components, table, markdown-editor, page-constructor); для некомпонентных пакетов — README + гайды.
5. Проверка `docs_in_tarball` в trip-wire CI (packages-inventory.md): скрипт смотрит содержимое опубликованного тарболла — метрика раскатки по тирам.

## Definition of Done

- [ ] Релиз uikit с `dist/docs/` опубликован; в тарболле все README компонентов, очищенные от сервисных маркеров.
- [ ] Evals-прогон с доками в node_modules показал прирост против baseline; цифры в тикете.
- [ ] План тиражирования на 7 остальных Tier-1 пакетов согласован с мейнтейнерами.
- [ ] Прирост размера тарболла задокументирован и согласован.

## Разблокирует

consumer-agents-md.md (секция ссылается на `dist/docs/`), agent-skill.md.
