`Dialog`는 제목, 본문, 푸터 액션이 있는 모달 창으로, 확인, 폼, 프롬프트에 사용됩니다. `Modal` 위에 구축되었습니다.

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## 사용법

```tsx
const [open, setOpen] = useState(false);
const dialogTitleId = 'app-confirmation-dialog-title';

<Dialog
  onClose={() => setOpen(false)}
  open={open}
  onEnterKeyDown={() => {
    alert('onEnterKeyDown');
  }}
  aria-labelledby={dialogTitleId}
>
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

| 이름                  | 설명                                                                                               | 타입                                                                                             | 기본값      |
| :-------------------- | :------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- | :---------- |
| open                  | 현재 대화 상자 상태                                                                                | `boolean`                                                                                        |             |
| onEscapeKeyDown       | Escape 키 누름 이벤트 핸들러                                                                       | `(event: KeyboardEvent) => void`                                                                 |             |
| onEnterKeyDown        | Enter 키 누름 이벤트 핸들러                                                                        | `(event: KeyboardEvent) => void`                                                                 |             |
| onOutsideClick        | 대화 상자 외부 클릭 이벤트 핸들러                                                                  | `(event: MouseEvent) => void`                                                                    |             |
| onClose               | 대화 상자 닫기 이벤트 핸들러                                                                       | `(event: MouseEvent or KeyboardEvent,` `reason: ModalCloseReason or "closeButtonClick") => void` |             |
| className             | 대화 상자 내용 래퍼의 `className`                                                                  | `string`                                                                                         |             |
| modalClassName        | 대화 상자가 포함된 모달 상자의 `className`                                                         | `string`                                                                                         |             |
| size                  | 대화 상자 크기. 사용 중단됨. 동일한 결과를 얻으려면 `maxWidth` + `fullWidth`를 사용하세요.          | `'s'` `'m'` `'l'`                                                                                |             |
| maxWidth              | 대화 상자 내용의 최대 너비                                                                         | `'s'` `'m'` `'l'`                                                                                |             |
| fullWidth             | `true`인 경우 내용이 `maxWidth`까지 확장됩니다.                                                    | `boolean`                                                                                        |             |
| disableBodyScrollLock | 본문 스크롤 잠금을 토글합니다.                                                                     | `boolean`                                                                                        | `false`     |
| disableEscapeKeyDown  | Escape 키 누름을 비활성화할지 여부를 토글합니다.                                                   | `boolean`                                                                                        | `false`     |
| disableOutsideClick   | 외부 클릭을 비활성화할지 여부를 토글합니다.                                                        | `boolean`                                                                                        | `false`     |
| keepMounted           | 대화 상자를 마운트된 상태로 유지할지 여부를 토글합니다.                                            | `boolean`                                                                                        | `false`     |
| hasCloseButton        | 대화 상자 오른쪽 상단 모서리에 닫기 아이콘이 있는지 여부를 토글합니다.                              | `boolean`                                                                                        | `true`      |
| aria-labelledby       | `<Dialog/>` 캡션 ID. 캡션 ID를 설정하려면 `<Dialog.Header/>`의 `id` 속성을 사용하세요.             | `string`                                                                                         |             |
| aria-label            | 접근성을 위한 대화 상자 레이블. 캡션이 사용자에게 보이는 경우 `aria-labelledby`를 설정하세요.       | `string`                                                                                         |             |
| container             | 대화 상자 컨테이너 요소                                                                            | `HTMLElement`                                                                                    |             |
| qa                    | 대화 상자가 포함된 모달 상자의 `data-qa` 속성 값                                                   | `string`                                                                                         |             |
| contentOverflow       | `Dialog`에 내부 스크롤 표시기가 있는지 또는 내용에 따라 크기가 커지는지 결정합니다.                | `'visible'` `'auto'`                                                                             | `'visible'` |