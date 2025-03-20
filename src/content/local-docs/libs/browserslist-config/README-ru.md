# Конфигурация `Browserslist` для пакетов Gravity UI

## Совместимые браузеры

Полный список совместимых браузеров доступен на [browsersl.ist](https://browsersl.ist/#q=last%202%20major%20versions%20and%20last%202%20years%20and%20fully%20supports%20es6%20and%20%3E%200.05%25%0Anot%20dead%0Anot%20op_mini%20all%0Anot%20and_qq%20%3E%200%0Anot%20and_uc%20%3E%200%0AFirefox%20ESR%0AChrome%20%3E%200%20and%20last%202%20years%20and%20%3E%200.05%25%0ASafari%20%3E%200%20and%20last%202%20years%20and%20%3E%200.05%25%0AFirefox%20%3E%200%20and%20last%202%20years%20and%20%3E%200.01%25).

## Установка

```bash
npm i --save-dev @gravity-ui/browserslist-config
```

Добавьте конфигурацию в блок `browserslist` файла `package.json`:

```json
{
  "browserslist": ["extends @gravity-ui/browserslist-config"]
}
```

Можно добавить дополнительные браузеры с учетом потребностей пользователей, например:

```json
{
  "browserslist": ["extends @gravity-ui/browserslist-config", "Chrome >= 100", "Firefox >= 100"]
}
```

## Использование

Пакет содержит готовую к использованию версию `Browserslist`.
