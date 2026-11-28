도움말 아이콘으로, 데스크톱에서는 팝오버에서, 모바일에서는 시트에서 컨텍스트 정보를 보여줍니다. 인터페이스 공간을 추가로 차지하지 않고 팁, 설명 또는 지원 콘텐츠를 표시하는 데 이상적입니다.

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## 예시

렌더링된 원시 HTML과 마우스 떠날 때 닫히는 컴포넌트:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 속성

`HelpMark`는 다음 속성 외에도 유효한 `button` 요소 속성을 모두 받을 수 있습니다.

| 이름         | 설명                                   |           유형           | 기본값 |
| :----------- | :-------------------------------------------- | :----------------------: | :-----: |
| size         | 아이콘 크기 설정                                | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| popoverProps | 데스크톱 `Popover` 속성 재정의              |      `PopoverProps`      |         |
| sheetProps   | 모바일 `Sheet` 속성 재정의                 |       `SheetProps`       |         |
| children     | 팝오버 또는 시트 내부에 표시되는 콘텐츠 |    `React.ReactNode`     |         |

## CSS API

| 이름                 | 설명     |
| :------------------- | :-------------- |
| `--g-help-mark-size` | 아이콘 크기(px) |