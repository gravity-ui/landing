마우스를 올리거나 클릭하면 팝오버에서 컨텍스트 정보를 보여주는 도움말 아이콘입니다. 인터페이스에서 추가 공간을 차지하지 않고 팁, 설명 또는 지원 콘텐츠를 표시하는 데 이상적입니다.

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## 예시

렌더링된 원시 HTML과 마우스 떠날 때 닫히는 컴포넌트:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 속성

`HelpMark`는 다음 속성 외에도 유효한 `button` 요소 속성을 모두 허용합니다.

| 이름         | 설명                          |           유형           | 기본값 |
| :----------- | :---------------------------- | :----------------------: | :-----: |
| iconSize     | 아이콘 크기 설정              | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| popoverProps | `Popover` 속성 재정의         |      `PopoverProps`      |         |
| children     | 팝오버 내부에 표시되는 콘텐츠 |    `React.ReactNode`     |         |