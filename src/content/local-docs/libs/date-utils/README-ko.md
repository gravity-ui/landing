# @gravity-ui/date-utils

날짜 및 시간 관리를 위한 도우미입니다.

## 설치

```shell
npm i @gravity-ui/date-utils
```

## 사용법

```typescript
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';

// 현재 날짜: 2021-08-07T12:10:00
// 사용자 시간대: Europe/Istanbul

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

// 사용자 정의
settings.updateLocale({weekStart: 0}); // 주의 시작 요일 변경
```

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하십시오.

## AI 에이전트용

UI 없이 시간대 인식 날짜/시간 도우미 — 파싱( `now-1d/d`와 같은 상대 표현 포함), 포맷팅, 로케일 관리 — 시간대를 넘나들며 날짜를 안정적으로 계산하고 포맷해야 할 때 전체 UI 캘린더를 가져오는 대신 사용하세요.

### 언제 사용해야 할까요?

- 시간대 인식 `dateTime` 객체로 절대 또는 상대 날짜 표현식(`'now-1d'`, `'now/d'`)을 파싱할 때.
- 로케일 지원을 통해 사용자 시간대로 날짜를 포맷팅할 때.
- 서버(Node)와 클라이언트(React) 코드 간에 날짜 로직을 공유할 때 — 이 패키지는 React 종속성이 없습니다.

### 언제 사용하지 않아야 할까요?

- 캘린더, 날짜 선택기 또는 기타 날짜 **UI**를 렌더링하려면 [`@gravity-ui/date-components`](https://gravity-ui.com/components/date-components)를 사용하세요. 이 패키지는 이 패키지를 기반으로 시각적 요소를 구축합니다.
- 경량의 불변 날짜 계산 및 시간대/상대 표현 요구 사항이 없는 경우 `date-fns` 또는 네이티브 `Intl`/`Date` API로 충분할 수 있습니다.

### 일반적인 주의 사항

- **`dateTimeParse('')`를 호출하여 날짜를 기대하는 경우** — `undefined`를 반환하며 `dateTime`이 아닙니다. 옵셔널 체이닝 또는 null 검사로 보호하세요.
- **로케일을 로드하는 것을 잊는 경우** — `settings.loadLocale('de')`가 완료된 후에야 `settings.setLocale('de')`가 지역화된 이름(요일, 월)을 포맷합니다.
- **`formatDate` / `parseDate` 함수를 잘못 호출하는 경우** — 진입점은 `dateTimeParse`(파싱) 및 `dateTime(...).format(...)`(포맷)입니다.
- **사용자 시간대가 자동으로 적용된다고 가정하는 경우** — `timeZone`을 명시적으로 전달하거나 시스템 시간대가 사용됩니다.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/date-utils/build/docs/INDEX.md`에 있습니다.