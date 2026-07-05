# Agent Skill «Building UI with Gravity UI»

**Приоритет:** P3 · **Зависимости:** consumer-agents-md.md (контент), docs-in-npm.md (доки, на которые ссылаться) · **Трекер:** DATAUI-3745, EPIC 5

## Цель

Официальный skill по открытому стандарту [agentskills.io](https://agentskills.io) — упакованное знание «как строить интерфейсы на Gravity UI» для Claude Code, Copilot и 70+ агентов через `npx skills`.

## Контекст

Референс — skill shadcn/ui: активируется по наличию маркера проекта, подтягивает живой конфиг. Важная оговорка из evals Vercel: skills часто не активируются сами (в 56% прогонов не были вызваны; 53% успеха против 100% у AGENTS.md-индекса) — поэтому skill дополняет managed-секцию, а не заменяет её, и managed-секция должна явно упоминать skill.

## Шаги

1. `SKILL.md` (frontmatter name/description с триггерами: gravity, @gravity-ui, uikit…) + `references/`: выбор пакета (болевые пары), обвязка, паттерны композиции, работа с темой, антипаттерны/hallucination traps. Тело <5k токенов, детали — в references (progressive disclosure).
2. Инструкция активации: «прочитай package.json, определи установленные @gravity-ui/\* и версии, доки — в node_modules/.../dist/docs».
3. Дистрибуция: репозиторий `gravity-ui/skills`; установка `npx skills add gravity-ui/skills`; сабмит в skills.sh и в маркетплейс Claude-плагинов; рассмотреть shipping внутри npm-тарболла (`skills/` каталог, конвенция antfu/skills-npm, TanStack Intent) — тогда skill приезжает с `npm install`.
4. Managed-секция AGENTS.md (consumer-agents-md.md) упоминает skill явным вызовом — обход проблемы автоактивации.
5. Evals: с явным вызовом skill против managed-секции без skill.

## Definition of Done

- [ ] Skill валиден по спеке agentskills.io, установка через `npx skills add` работает.
- [ ] Опубликован на skills.sh; решение по in-tarball дистрибуции зафиксировано.
- [ ] Evals-сравнение в тикете.
