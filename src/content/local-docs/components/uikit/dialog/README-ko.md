`Dialog`는 제목, 본문, 푸터 액션이 있는 모달 창으로, 확인, 폼, 프롬프트에 사용됩니다. `Modal` 위에 구축되었습니다.

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## 사용법

```tsx
const [open, setOpen] = useState(false);
const dialogTitleId = 'app-confirmation-dialog-title';

<Dialog onOpenChange={setOpen} open={open} aria-labelledby={dialogTitleId}>
  <Dialog.Header caption="Caption" id={dialogTitleId} />
  <Dialog.Body>Dialog.Body</Dialog.Body>
  <Dialog.Footer
    onClickButtonCancel={() => setOpen(false)}
    onClickButtonApply={() => alert('onApply')}
    textButtonApply="Apply"
    textButtonCancel="Cancel"
  />
</Dialog>;
```

## 속성
GRAVITY_TRANSLATION_BLOCK_0_END

| 이름                  | 설명                                                                                             | 타입                                                                | 기본값     |
| :-------------------- | :----------------------------------------------------------------------------------------------- | :------------------------------------------------------------------ | :---------- |
| open                  | 현재 대화 상자 상태                                                                              | `boolean`                                                           |             |
| onOpenChange          | 대화 상자 열림 상태 변경을 처리합니다.                                                              | `(open: boolean, event?: Event, reason?: OpenChangeReason) => void` |             |
| initialFocus          | 푸터 `cancel` 또는 `apply` 버튼을 포함한 초기 포커스 대상                                             | `ModalProps['initialFocus'] \| 'cancel' \| 'apply'`                 |             |
| returnFocus           | 닫은 후 포커스가 돌아갈 위치를 제어합니다.                                                              | `ModalProps['returnFocus']`                                         |             |
| className             | 대화 상자 내용 래퍼의 `className`                                                                    | `string`                                                            |             |
| modalClassName        | 대화 상자가 포함된 모달 상자의 `className`                                                              | `string`                                                            |             |
| maxWidth              | 대화 상자 내용의 최대 너비                                                                           | `'s'` `'m'` `'l'`                                                   |             |
| fullWidth             | `true`이면 내용이 `maxWidth`까지 확장됩니다.                                                              | `boolean`                                                           |             |
| disableBodyScrollLock | 본문 스크롤 잠금을 토글합니다.                                                                       | `boolean`                                                           | `false`     |
| disableTransition     | `true`이면 열기 및 닫기 애니메이션을 건너뜁니다.                                                          | `boolean`                                                           | `false`     |
| disableEscapeKeyDown  | escape 키 누름을 비활성화할지 여부를 토글합니다.                                                            | `boolean`                                                           | `false`     |
| disableOutsideClick   | 외부 클릭을 비활성화할지 여부를 토글합니다.                                                              | `boolean`                                                           | `false`     |
| keepMounted           | 대화 상자를 마운트된 상태로 유지할지 여부를 토글합니다.                                                      | `boolean`                                                           | `false`     |
| hasCloseButton        | 대화 상자 오른쪽 상단 모서리에 닫기 아이콘이 있는지 여부를 토글합니다.                                          | `boolean`                                                           | `true`      |
| aria-labelledby       | `<Dialog/>` 캡션 ID. 캡션 ID를 설정하려면 `<Dialog.Header/>`의 `id` 속성을 사용하세요.                               | `string`                                                            |             |
| aria-label            | 접근성을 위한 대화 상자 레이블. 캡션이 사용자에게 보이는 경우 `aria-labelledby`를 설정하세요.                               | `string`                                                            |             |
| container             | 대화 상자 상자를 위한 컨테이너 요소                                                                    | `HTMLElement`                                                       |             |
| qa                    | 대화 상자가 포함된 모달 상자의 `data-qa` 속성 값                                                          | `string`                                                            |             |
| contentOverflow       | `Dialog`에 내부 스크롤 표시기가 있는지 또는 내용에 따라 크기가 커지는지를 결정합니다.                                     | `'visible'` `'auto'`                                                | `'visible'` |

`onOpenChange`은 Escape 키를 누르면 `escape-key`, 외부 클릭 시 `outside-press`, 닫기 버튼 클릭 시 `click`, 스크린 리더 해제 버튼 클릭 시 `undefined`를 받습니다. `open`이 `false`로 변경되면 이유에 관계없이 닫힙니다.
GRAVITY_TRANSLATION_BLOCK_1_END