# Официальный MCP-сервер @gravity-ui/mcp

**Приоритет:** P3 (после пассивного слоя — так же поступил Vercel) · **Зависимости:** packages-inventory.md; желательно package-llms-txt.md как источник данных · **Трекер:** DATAUI-3745, EPIC 5

## Цель

MCP-сервер для живых и структурированных данных, которые плохо ложатся в статический markdown. Конкурентный паритет: «MCP Server» — стандартный пункт навигации у MUI, Ant Design, Chakra, HeroUI, Mantine, shadcn.

## Контекст

Важный урок Vercel: в Next.js 16.3 они _удалили_ доки-инструменты из своего MCP в пользу доков в node_modules — MCP оправдан для того, что нельзя положить в файл. Референс по составу инструментов — Ant Design (8 tools: list, info, doc, demo, token, changelog…) и Mantine (`@mantine/mcp-server` читает статические данные с сайта).

## Шаги

1. Состав инструментов (по убыванию ценности):
   - `search_icons` — поиск по 2000+ иконок @gravity-ui/icons по смыслу (киллер-фича: имена иконок агенты стабильно галлюцинируют; наработка `scripts/icon-search` уже в landing);
   - `get_component` — описание + пропсы + минимальный пример (данные из пакетных llms.txt/README);
   - `list_components` / `search_components` — с описаниями из libs.mjs;
   - `get_design_tokens` — токены темы (+ uikit-themer);
   - `get_changelog` — изменения между версиями пакета (закрывает version drift для проектов на старых мажорах);
   - `list_packages` — каталог экосистемы с роутинг-описаниями.
2. Реализация: stdio-пакет `@gravity-ui/mcp` (npx-запуск, как у Ant Design/Chakra) + опционально remote (mcp.gravity-ui.com) позже. Данные — с сайта (пакетные llms.txt, .md-эндпоинты), не дублировать контент в пакете сервера.
3. Регистрация: официальный MCP Registry (registry.modelcontextprotocol.io, reverse-DNS от домена gravity-ui.com), GitHub MCP Registry, страница «MCP Server» в доках сайта с конфигами для Claude Code/Cursor/VS Code/Codex.
4. Evals: сценарии «иконки» и «старый мажор» — до/после.

## Definition of Done

- [ ] `npx @gravity-ui/mcp` работает в Claude Code и Cursor; минимум 4 инструмента (icons, get_component, list_packages, changelog).
- [ ] Опубликован в официальном MCP Registry и GitHub MCP Registry.
- [ ] Страница «MCP Server» на сайте, указана в корневом llms.txt.
- [ ] Evals: поиск иконок и changelog-сценарии — прирост зафиксирован.
