GRAVITY_TRANSLATION_BLOCK_0_END

점(.)으로 구분된 용어와 정의를 표시하는 컴포넌트입니다.

```tsx
import {DefinitionList} from '@gravity-ui/uikit';
```

## 예시

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 속성

| 이름               | 설명                                                                                         |              타입              |   기본값    |
| :----------------- | :------------------------------------------------------------------------------------------- | :----------------------------: | :----------: |
| [children](#items) | 목록 항목                                                                                   |       `React.ReactNode`        |              |
| responsive         | `true`로 설정하면 목록이 부모의 너비를 100% 차지합니다.                                        |           `boolean`            |              |
| direction          | `vertical`로 설정하면 콘텐츠가 이름 아래에 위치하고 목록이 부모의 너비를 100% 차지합니다. | `'horizontal'` \| `'vertical'` | 'horizontal' |
| nameMaxWidth       | 용어의 최대 너비                                                                             |            `number`            |              |
| contentMaxWidth    | 정의의 최대 너비                                                                             |            `number`            |              |
| className          | 정의 목록의 클래스 이름                                                                      |            `string`            |              |

### Items

DefinitionList의 자식은 다음과 같은 속성을 가진 `DefinitionList.Item` 타입의 컴포넌트여야 합니다.

| 이름     | 설명                                      |           타입            | 기본값 |
| -------- | :---------------------------------------- | :-----------------------: | :-----: |
| name     | 용어                                      |        `ReactNode`        |         |
| children | 정의                                      |        `ReactNode`        |         |
| copyText | 설정하면 이 텍스트를 복사하는 아이콘이 표시됩니다. |         `string`          |         |
| note     | 설정하면 용어 옆에 HelpMark가 표시됩니다. | `string \| HelpMarkProps` |         |

## CSS API

| 이름                           | 설명                         |
| :----------------------------- | :--------------------------- |
| `--g-definition-list-item-gap` | 정의 목록 항목 간의 간격 |