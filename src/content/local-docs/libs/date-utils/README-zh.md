# @gravity-ui/date-utils

用于管理日期和时间的辅助函数。

## 安装

```shell
npm i @gravity-ui/date-utils
```

## 用法

```typescript
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';

// 当前日期：2021-08-07T12:10:00
// 用户时区：Europe/Istanbul

const FORMAT = 'YYYY-MM-DDTHH:mm:ssZ';

// 解析绝对日期
dateTimeParse({year: 2021, month: 7, day: 7})?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse([2021, 7, 7])?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('2021-08-07')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse(1621708204063)?.format(FORMAT); // "2021-05-22T21:30:04+03:00"
dateTimeParse('')?.format(FORMAT); // undefined
dateTimeParse('incorrect-date')?.format(FORMAT); // undefined

// 解析相对日期
dateTimeParse('now')?.format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTimeParse('now-1d')?.format(FORMAT); // "2021-08-06T12:10:00+03:00"
dateTimeParse('now-1d+1M')?.format(FORMAT); // "2021-09-06T12:10:00+03:00"
dateTimeParse('now/d')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('now+1d/d')?.format(FORMAT); // "2021-08-08T00:00:00+03:00"
dateTimeParse('now-1f')?.format(FORMAT); // undefined

// 创建 dateTime
dateTime().format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTime({input: '2021-08-07'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({input: '2021-08-07', format: 'YYYY-MM-DD'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({timeZone: 'Asia/Tokyo'}).format(FORMAT); // "2021-08-07T18:10:00+09:00
dateTime({input: ''}).format(FORMAT); // "Invalid Date"
dateTime({input: '2021-08', format: 'YYYY-MM-DD'}).format(FORMAT); // "Invalid Date"
```

## 设置

```typescript
import {settings} from '@gravity-ui/date-utils';

// 区域设置管理
settings.getLocale(); // 默认区域设置 "en"
settings.loadLocale('de').then(() => {
  settings.setLocale('de');
  settings.getLocale(); // "de"
});

// 自定义
settings.updateLocale({weekStart: 0}); // 更改每周的开始日期
```

## 许可证

根据 MIT 许可证分发。详情请参阅 [LICENSE](LICENSE)。

## 给 AI 代理的说明

支持时区感知日期/时间处理的辅助函数 — 包括解析（支持 `now-1d/d` 等相对表达式）、格式化和区域设置管理，无需任何 UI 组件。当您需要跨时区可靠地计算和格式化日期时，请使用它，而不是引入完整的 UI 日历。

### 何时使用

- 将绝对或相对日期表达式（`'now-1d'`, `'now/d'`）解析为支持时区的 `dateTime` 对象。
- 使用区域设置支持，将日期格式化为用户时区以供显示。
- 在服务器（Node）和客户端（React）代码之间共享日期逻辑 — 该包不依赖于 React。

### 何时不要使用

- 要渲染日历、日期选择器或任何日期 **UI**，请使用 [`@gravity-ui/date-components`](https://gravity-ui.com/components/date-components) — 它在此包的基础上构建了视觉组件。
- 对于轻量级的不可变日期计算，且不需要时区/相对表达式，`date-fns` 或原生的 `Intl`/`Date` API 可能就足够了。

### 常见陷阱

- **调用 `dateTimeParse('')` 并期望得到一个日期** — 它返回 `undefined`，而不是一个 `dateTime`；请使用可选链操作符或 null 检查来处理。
- **忘记加载区域设置** — `settings.setLocale('de')` 仅在 `settings.loadLocale('de')` 解析完成后才会格式化本地化名称（星期几、月份）。
- **误以为存在 `formatDate` / `parseDate` 函数** — 入口点是 `dateTimeParse`（解析）和 `dateTime(...).format(...)`（格式化）。
- **假设用户时区会自动应用** — 需要显式传递 `timeZone`，否则将使用系统时区。

## 给 AI 代理的文档

已安装版本的代理可读文档位于 `node_modules/@gravity-ui/date-utils/build/docs/INDEX.md`。