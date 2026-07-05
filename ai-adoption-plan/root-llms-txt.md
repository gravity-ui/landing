# Переработка корневого llms.txt

**Приоритет:** P1 · **Зависимости:** packages-inventory.md (описания) · **Трекер:** DATAUI-3745, EPIC 1

## Цель

Корневой `gravity-ui.com/llms.txt` — компактная «карта территории» по спеке [llmstxt.org](https://llmstxt.org): агент по ней выбирает пакет и уходит в пакетный llms.txt. Не энциклопедия.

## Контекст

Текущий генератор `scripts/generate-llms.mjs` берёт описание компонента из первой содержательной строки README — результат местами мусорный (Alert: «normal: Main theme (used by default)», Text: «These are the default fonts…», у PasswordInput/Tabs/TextArea описаний нет). UIKit раскрыт инлайн на 60 компонентов — контекст уходит на нерелевантное. Нет H1+blockquote по спеке, нет стартовых шаблонов и рецептов.

## Шаги

1. Переписать `scripts/generate-llms.mjs`:
   - источник описаний — `llmDescription` из `libs.mjs` (packages-inventory.md), **не** парсинг README; при отсутствии описания — падать, а не деградировать молча;
   - формат по спеке: H1 → blockquote-позиционирование (что такое Gravity UI, когда его выбирать) → секции H2 со списками `[name](url): description`;
   - убрать инлайн-список 60 компонентов uikit — вместо него одна ссылка на `gravity-ui.com/uikit/llms.txt` (package-llms-txt.md); до его появления допустимо оставить компактный список имён без URL на каждый README;
   - добавить секции: стартовые шаблоны (gravity-ui-vite-example, gravity-ui-nextjs-example), рецепты (`/recipes/`, по мере появления);
   - маловажное (icons-инфраструктура, пресеты конфигов) — в секцию `## Optional` (по спеке она отбрасывается при нехватке контекста).
2. Роутинг-подсказки для болевых пар прямо в описаниях секций (предложение Камендровского): например, в секции визуализации явная строка «for dashboards use charts; chartkit is a legacy wrapper; yagr is the low-level engine».
3. Бюджет размера: целиться в <10KB (референсы: Svelte 1.7KB, FastHTML 4.8KB, Anthropic 13.5KB). Проверка размера в CI.
4. Валидация по спеке (llmstxt-валидатор или собственный скрипт) в CI.
5. Blockquote-сноска про peer-версии и «read the user's package.json first» (наработка из комментария к DATAUI-3747).

## Definition of Done

- [ ] Новый llms.txt валиден по спеке llmstxt.org, размер <10KB, проверки в CI.
- [ ] Описания — только курируемые; отсутствие описания фейлит генерацию.
- [ ] Шаблоны и рецепты в индексе.
- [ ] Evals-прогон «агенту дали llms.txt» не деградировал против старого файла на задачах маршрутизации (болевые пары).
