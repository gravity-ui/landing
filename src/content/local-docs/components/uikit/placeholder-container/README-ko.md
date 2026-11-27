`PlaceholderContainer`는 이미지, 텍스트 콘텐츠 및 액션 컨트롤과 함께 콘텐츠를 표시하는 컴포넌트입니다.

## 방향

`PlaceholderContainer`는 콘텐츠 레이아웃을 위해 `row`와 `column` 방향을 가집니다. 이를 관리하려면 `direction` 속성을 사용하세요. 기본값은 `row`입니다.

## 크기

`size` 속성을 사용하여 `PlaceholderContainer` 크기를 관리하세요. 기본 크기는 `l`입니다. 가능한 값은 `s`, `m`, `l`, `promo`입니다. `promo` 값은 최소 콘텐츠 높이와 더 큰 제목 크기 없이 콘텐츠 섹션의 전체 너비를 설정합니다.

## 액션 컨트롤

`PlaceholderContainer`는 버튼 컨트롤 또는 버튼 배열을 렌더링할 수 있습니다. 이를 표시하려면 `actions` 속성을 사용하세요.

GRAVITY_TRANSLATION_BLOCK_0_END

사용자 정의 컨트롤도 렌더링할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_1_END

## 이미지 및 콘텐츠

`image` 속성을 사용하면 이미지 `src` 및 `alt` 설정을 구성하거나 React 노드를 사용할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_2_END

`PlaceholderContainer` 콘텐츠는 제목 및 설명 섹션으로 구성되며, 해당 속성을 사용하여 설정할 수 있습니다. 사용자 정의 콘텐츠를 렌더링하려면 `content` 속성을 사용하세요.

```tsx
<PlaceholderContainer
  title="사용자 정의 콘텐츠 샘플"
  description="PlaceholderContainer 컴포넌트 데모에 대한 설명입니다."
  direction="row"
  size="s"
  align="center"
  image={
    <svg width="230" height="230" viewBox="0 0 230 230" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill="#DDDDDD" height="100%" transform="matrix(1 0 0 1 0 0)" width="100%" />
        <text
          fill="#999999"
          fontFamily="Sans-serif"
          fontSize="16"
          strokeWidth="0"
          textAnchor="middle"
          transform="matrix(1.88041 0 0 1.88041 -48.1289 -81.7475)"
          x="86.49"
          y="114"
        >
          1:1
        </text>
      </g>
    </svg>
  }
  content={
    <div>
      <h3>여기에 사용자 정의 제목이 있습니다.</h3>
      <p>
        <strong>여기</strong>에 사용자 정의 콘텐츠가 포함된 긴 텍스트를 추가하고 매우 긴 텍스트를 표시하기 위해 사용자 정의 콘텐츠 크기를 사용할 수 있습니다.
      </p>
    </div>
  }
/>
```

## 정렬

부모 컨테이너 내부의 콘텐츠 정렬을 관리하려면 `align` 속성을 사용하세요. 기본값은 `center`입니다.

## 속성

GRAVITY_TRANSLATION_BLOCK_3_END

| 이름        | 설명                                                                                                                             |                                     타입                                      | 기본값   |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------: | :--------: |
| className   | `class` HTML 속성 (선택 사항)                                                                                                    |                                   `string`                                    |            |
| direction   | 콘텐츠 레이아웃 방향을 설정하는 데 사용됩니다. 가능한 값은 `"row"` 및 `"column"`입니다.                                               |                                   `string`                                    |  `"row"`   |
| size        | 컴포넌트 크기. 가능한 값은 `"s"`, `"m"`, `"l"`, `"promo"`입니다.                                                                     |                                   `string`                                    |   `"l"`    |
| align       | 콘텐츠 가로 정렬을 설정하는 데 사용됩니다. 가능한 값은 `"center"` 및 `"left"`입니다.                                                    |                                   `string`                                    | `"center"` |
| title       | 콘텐츠 제목 텍스트                                                                                                               |                                   `string`                                    |            |
| description | 콘텐츠 설명 텍스트                                                                                                               |                                   `string`                                    |            |
| image       | `src`로 이미지를 설정하거나 React 노드를 제공하는 데 사용됩니다.                                                                    | `PlaceholderContainerImageNodeProps`<br/> `\| PlaceholderContainerImageProps` |            |
| content     | (제목, 설명 및 액션) 대신 노드를 렌더링하는 데 사용됩니다.                                                                         |                               `React.ReactNode`                               |            |
| actions     | 버튼 컨트롤 배열 또는 사용자 정의 노드를 렌더링하는 데 사용됩니다.                                                                   |     `PlaceholderContainerActionProps[]`<br/> `\|        React.ReactNode `     |            |
| maxWidth    | 컨테이너의 기본 최대 너비를 재정의하는 데 사용됩니다.                                                                              |                               `number` `string`                               |            |