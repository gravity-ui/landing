# AI-обвязка в стартовых шаблонах

**Приоритет:** P2 · **Зависимости:** consumer-agents-md.md · **Трекер:** DATAUI-3745, EPIC 5 (расширение задачи про .cursorrules)

## Цель

Проекты, созданные из официальных шаблонов (gravity-ui-vite-example, gravity-ui-nextjs-example), с первого коммита содержат AI-обвязку — как `create-next-app` и `create-expo-app`.

## Шаги

1. В оба шаблона положить:
   - `AGENTS.md` с managed-секцией Gravity UI (генерат из consumer-agents-md.md);
   - `CLAUDE.md`, импортирующий его (`@AGENTS.md`) — Claude Code до сих пор не читает AGENTS.md нативно;
   - `.cursor/rules/gravity-ui.mdc` с тем же контентом в формате Cursor (frontmatter: `globs`, `alwaysApply: false`, description с триггерами) — пункт эпика про .cursorrules, но в актуальном формате `.cursor/rules/` (legacy `.cursorrules` deprecated).
2. Единый источник: все три файла генерятся из одного шаблона managed-секции — не поддерживать три копии руками.
3. Упомянуть шаблоны в корневом llms.txt (root-llms-txt.md) и на странице «Using Gravity UI with AI agents».
4. Проверить сценарий «пользователь клонирует шаблон и просит агента добавить фичу» на evals-промптах.

## Definition of Done

- [ ] Оба шаблона содержат AGENTS.md + CLAUDE.md + .cursor/rules, сгенерированные из одного источника.
- [ ] Свежесклонированный шаблон: агент без подсказок находит правила (проверено в Claude Code и Cursor).
- [ ] Шаблоны указаны в корневом llms.txt.
