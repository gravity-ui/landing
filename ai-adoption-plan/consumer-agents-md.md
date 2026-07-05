# Managed-секция AGENTS.md для проекта потребителя

**Приоритет:** P1 — закрывает главный пробел эпика (discovery) · **Зависимости:** packages-inventory.md (`llmDescription`) + readme-template.md (секция required setup в README); усиливается docs-in-npm.md · **Трекер:** нет карточки — завести под DATAUI-3745

## Цель

Дать агенту в проекте потребителя локальную точку входа: короткий управляемый блок в AGENTS.md/CLAUDE.md пользователя — обвязка, peer-минимумы, где лежат доки (node_modules + llms.txt URL). Именно так «сайтовые» артефакты становятся находимыми: не агент ищет сайт, а мы кладём ссылку туда, куда он смотрит в каждой сессии.

## Контекст

Референсы: `npx convex ai-files install` (управляемая секция, по evals Convex ~+20% к успеху), Next.js 16.2 (`create-next-app` кладёт AGENTS.md, `next dev` поддерживает блок `<!-- BEGIN:nextjs-agent-rules -->` актуальным), Expo. Vercel evals: сжатый 8KB-индекс доков в AGENTS.md дал 100% против 53% baseline и 53–79% у skills.

## Шаги

1. Спроектировать контент блока (генерится из `libs.mjs` + мета-секций README пакетов, целиться в ≤4–8KB):
   - маркеры `<!-- BEGIN:gravity-ui-agent-rules -->` / `<!-- END:... -->` — обновляемая секция;
   - какие пакеты @gravity-ui/\* установлены в проекте (читаем package.json) и их одно-предложенческие описания;
   - required setup: импорты стилей, ThemeProvider, peer-минимумы с инструкцией «проверь package.json прежде чем писать код»;
   - «docs for installed versions: `node_modules/@gravity-ui/<pkg>/dist/docs/` (source of truth), online: `gravity-ui.com/<pkg>/llms.txt`»;
   - топ hallucination traps (из readme-template.md).
2. CLI-команда доставки. Варианты: подкоманда в существующем пакете (`npx @gravity-ui/uikit ai-init`) или отдельный `@gravity-ui/agent-docs`. Поведение: создать/обновить только свой блок в AGENTS.md и CLAUDE.md (`@AGENTS.md`-импорт для Claude Code), идемпотентно, `--check`-режим для CI.
3. Обновление при апгрейде: команда перегенерирует блок под установленные версии; упомянуть её в release notes и README пакетов.
4. Прогнать через evals (evals-baseline.md): конфигурация «AGENTS.md-секция + доки в node_modules» — ожидаемо лучшая; зафиксировать против baseline и против «только llms.txt».
5. Документация на сайте: страница «Using Gravity UI with AI agents» (человекочитаемая инструкция: одна команда).

## Definition of Done

- [ ] CLI устанавливает/обновляет managed-блок в AGENTS.md и CLAUDE.md, идемпотентно.
- [ ] Блок генерится из libs.mjs и README-мета-секций, размер ≤8KB, покрывает все установленные пакеты Tier-1.
- [ ] Evals-прирост зафиксирован в тикете.
- [ ] Страница «Using Gravity UI with AI agents» опубликована и добавлена в корневой llms.txt.

## Разблокирует

starter-templates.md, agent-skill.md.
