<!--GITHUB_BLOCK-->

# AvatarStack

<!--/GITHUB_BLOCK-->

이 컴포넌트는 이미지들이 서로 겹쳐 쌓이고, 선택적으로 컨트롤을 포함하는 데 사용됩니다. 일반적으로 사용자 아바타를 나타냅니다.

```ts
import {AvatarStack} from '@gravity-ui/uikit';
```

## 사용법

기본적으로 `AvatarStack`은 렌더링할 컴포넌트에 대한 제한이 없습니다. 일반적인 사용 예시는 다음과 같습니다.

```tsx
<AvatarStack>
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login1`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login2`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login3`} />
</AvatarStack>
```

## 속성

| 이름        | 설명                                                                                                                                                      |                        타입                        |  기본값  |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------: | :-------: | --- |
| max         | `More` 버튼이 표시되기 전에 보이는 아바타 수를 결정합니다. 아바타 수가 `max`보다 1개 적으면 `More` 버튼은 아바타로 대체됩니다. |                      `number`                      |     3     |
| overlapSize | 각 항목이 다음 항목을 얼마나 겹칠지 결정합니다. `xs`에서 `m` 크기의 `Avatar`에는 `s`를, `l` 크기에는 `m`을, `xl` 크기에는 `l`을 사용하는 것이 좋습니다. |                   `s`, `m`, `l`                    |    `s`    |
| size        | 추가 아바타를 표시하는 컨트롤의 크기입니다. 값은 `Avatar` 크기와 동일합니다.                                                                       |                    `AvatarSize`                    |           |
| className   | 루트 DOM 노드의 클래스 이름                                                                                                                                  |                      `string`                      |           |
| children    | 추가 래퍼를 가질 수도 있는 아바타 목록                                                                                                                |                     `Object[]`                     |           |
| renderMore  | 추가 아바타를 표시하는 컨트롤의 사용자 정의 렌더링                                                                                                           | `function(options: {count: number}): ReactElement` |           |
| moreVariant | 추가 '카운터'를 표시하는 기본 컨트롤의 변형                                                                                                            |                  `counter`,`dots`                  | `counter` |     |

### AvatarStack.MoreButton

`More` 버튼을 재정의하기 위한 컴포넌트

```tsx
<AvatarStack
  renderMore={({count}) => (
    <Tooltip content={'More users'}>
      <AvatarStack.MoreButton count={count} />
    </Tooltip>
  )}
>
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login1`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login2`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login3`} />
</AvatarStack>
```