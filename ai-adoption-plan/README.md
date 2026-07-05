# AI Adoption — план работ

Декомпозиция эпика [DATAUI-3745](https://st.yandex-team.ru/DATAUI-3745) (AI/LLM-ready documentation for Gravity UI) с учётом анализа best practices (июль 2026).

Ключевой принцип: llms.txt на сайте никто из агентов не находит сам (Ahrefs, 137k доменов: 97% файлов — ноль трафика). Поэтому наравне с сайтом строим **локальный слой в проекте потребителя**: доки в npm-тарболле + managed-секция в AGENTS.md. По evals Vercel/Next.js именно этот слой даёт основной прирост (58% → 100% task success).

## Задачи

| Файл                                           | Приоритет | Зависит от                     | Трек        |
| ---------------------------------------------- | --------- | ------------------------------ | ----------- |
| [packages-inventory.md](packages-inventory.md) | P0        | —                              | Данные      |
| [evals-baseline.md](evals-baseline.md)         | P0        | —                              | Измерение   |
| [context7.md](context7.md)                     | P0        | —                              | Дистрибуция |
| [docs-in-npm.md](docs-in-npm.md)               | P0        | —                              | Пакет       |
| [readme-template.md](readme-template.md)       | P1        | —                              | Конвенции   |
| [root-llms-txt.md](root-llms-txt.md)           | P1        | packages-inventory             | Сайт        |
| [consumer-agents-md.md](consumer-agents-md.md) | P1        | packages-inventory             | Пакет       |
| [md-endpoints.md](md-endpoints.md)             | P1        | —                              | Сайт        |
| [package-llms-txt.md](package-llms-txt.md)     | P2        | readme-template, root-llms-txt | Сайт        |
| [recipes.md](recipes.md)                       | P2        | —                              | Контент     |
| [starter-templates.md](starter-templates.md)   | P2        | consumer-agents-md             | Дистрибуция |
| [llms-analytics.md](llms-analytics.md)         | P2        | —                              | Измерение   |
| [mcp-server.md](mcp-server.md)                 | P3        | packages-inventory             | Дистрибуция |
| [agent-skill.md](agent-skill.md)               | P3        | consumer-agents-md             | Дистрибуция |

## Параллельные дорожки

Все P0 независимы — можно стартовать одновременно четырьмя исполнителями:

- **Дорожка A (данные/сайт):** packages-inventory → root-llms-txt → package-llms-txt; параллельно md-endpoints, llms-analytics.
- **Дорожка B (пакет/потребитель):** docs-in-npm (пилот uikit) → consumer-agents-md → starter-templates → agent-skill.
- **Дорожка C (конвенции/контент):** readme-template → раскатка по тирам (в репах пакетов, вне этого репо); параллельно recipes.
- **Дорожка D (измерение):** evals-baseline — до любых изменений; затем прогоны после каждого мержа из дорожек A/B.
- **Быстрая победа:** context7 — один PR, ни от чего не зависит.

## Соответствие эпику DATAUI-3745

- EPIC 1 (измерение, инфра) → evals-baseline, packages-inventory, root-llms-txt, llms-analytics
- EPIC 2 (шаблоны) → readme-template, consumer-agents-md (шаблон managed-секции)
- EPIC 3 (раскатка) → docs-in-npm + раскатка readme-template по тирам
- EPIC 4 (сайт) → md-endpoints, recipes, package-llms-txt
- EPIC 5 (интеграции) → context7 (добавлен, в эпике не было), mcp-server, agent-skill, starter-templates
