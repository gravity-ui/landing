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