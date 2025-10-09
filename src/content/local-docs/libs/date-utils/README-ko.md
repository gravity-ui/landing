# @gravity-ui/date-utils

날짜 및 시간 관리를 위한 유틸리티 함수 모음입니다.

## 설치

```shell
npm i @gravity-ui/date-utils
```

## 사용법

```typescript
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';

// 현재 날짜: 2021-08-07T12:10:00
// 사용자의 시간대: Europe/Istanbul

const FORMAT = 'YYYY-MM-DDTHH:mm:ssZ';

// 절대 날짜 파싱
dateTimeParse({year: 2021, month: 7, day: 7})?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse([2021, 7, 7])?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('2021-08-07')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse(1621708204063)?.format(FORMAT); // "2021-05-22T21:30:04+03:00"
dateTimeParse('')?.format(FORMAT); // undefined
dateTimeParse('incorrect-date')?.format(FORMAT); // undefined

// 상대 날짜 파싱
dateTimeParse('now')?.format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTimeParse('now-1d')?.format(FORMAT); // "2021-08-06T12:10:00+03:00"
dateTimeParse('now-1d+1M')?.format(FORMAT); // "2021-09-06T12:10:00+03:00"
dateTimeParse('now/d')?.format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTimeParse('now+1d/d')?.format(FORMAT); // "2021-08-08T00:00:00+03:00"
dateTimeParse('now-1f')?.format(FORMAT); // undefined

// dateTime 생성
dateTime().format(FORMAT); // "2021-08-07T12:10:00+03:00"
dateTime({input: '2021-08-07'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({input: '2021-08-07', format: 'YYYY-MM-DD'}).format(FORMAT); // "2021-08-07T00:00:00+03:00"
dateTime({timeZone: 'Asia/Tokyo'}).format(FORMAT); // "2021-08-07T18:10:00+09:00
dateTime({input: ''}).format(FORMAT); // "Invalid Date"
dateTime({input: '2021-08', format: 'YYYY-MM-DD'}).format(FORMAT); // "Invalid Date"
```

## 설정

```typescript
import {settings} from '@gravity-ui/date-utils';

// 로케일 관리
settings.getLocale(); // 기본 로케일 "en"
settings.loadLocale('de').then(() => {
  settings.setLocale('de');
  settings.getLocale(); // "de"
});

// 커스터마이징
settings.updateLocale({weekStart: 0}); // 주의 시작 요일 변경
```