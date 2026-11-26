## 간단 설명

`DFDialog` 컴포넌트는 폼 생성을 용이하게 하기 위한 목적으로, 내부적으로 `react-final-form`을 사용합니다.
몇 가지 미리 정의된 필드 유형을 지원하지만, 사용자는 `registerDialogControl`을 사용하여 새로운 필드를 등록하여 확장할 수 있습니다.

### 컨트롤

- [기본 컨트롤](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-00-base-controls)
  - `plain` - 정적 텍스트
  - `text` - 편집 가능한 텍스트
  - `multi-text` - 사용자가 정의한 문자열 배열
  - `checkbox` - 체크박스
  - `tumbler` - 토글 스위치
  - `radio` - 라디오 버튼
  - `editable-list` - 제거 가능한 문자열 목록
  - `multi-editable-list` - 제거 가능한 문자열의 다중 목록
  - `text area` - 텍스트 영역
  - `select` - 선택
  - `block` - ReactNode 추가 가능
- [사용자 정의 컨트롤 등록](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

### 기능

- 인라인 및 모달 보기
- [단일 탭](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-01-one-tab) 및 [여러 탭 폼](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab--horizontal-tabs)
- [세로/가로 탭](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab)
- [숨겨진 필드 및 탭](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-04-visibility-condition)
- [값에 따른 필드 연결](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-05-extras-and-linked-fields)
- [필드 레벨 유효성 검사](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-06-field-validators)
- [폼 레벨 유효성 검사](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-07-form-validation)
- [가상화된 탭](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-virtualized-tabs)
- [복제 가능한 탭](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-cloneable-tabs-)
- [그룹화된 필드](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-03-sections)

## 설치

```bash
$ npm install @gravity-ui/dialog-fields
```

패키지 관리자에 따라 `peerDependencies`를 수동으로 설치해야 할 수 있습니다.

세로 탭은 UIKit의 드래그 앤 드롭 및 가상화 진입점을 사용하며,
Select 컨트롤은 50개 이상의 옵션 목록을 가상화합니다.
애플리케이션을 UIKit의 `Provider`로 감싸고 `@gravity-ui/uikit/styles/styles.css`를 가져오세요.

## UIKit 8로 마이그레이션

애플리케이션의 루트 `ThemeProvider`와 `MobileProvider`를 `Provider`로 교체하세요.
제거된 `__experimentalMobileModals` 속성을 제외한 나머지 속성들을 `Provider`로 옮기세요:

```diff
-import {ThemeProvider, MobileProvider} from '@gravity-ui/uikit';
+import {Provider} from '@gravity-ui/uikit';

-<ThemeProvider theme="light">
-  <MobileProvider>
-    <App />
-  </MobileProvider>
-</ThemeProvider>
+<Provider theme="light">
+  <App />
+</Provider>
```

애플리케이션에서 이미 `Provider`를 사용하고 있다면, `DFDialog` 주위에 추가적인 래퍼는 필요하지 않습니다.
`DFDialog`는 `visible`, `size`, `onClose` 속성을 그대로 유지하며, UIKit의 `Dialog.open`, `maxWidth`, `onOpenChange` 변경 사항은 라이브러리 내부에서 처리됩니다.

사용자 정의 스타일 및 시각적 스냅샷을 검토하세요:

- 다이얼로그 헤더, 본문, 푸터의 간격이 변경되어 모달 및 인라인 폼 모두에 영향을 미칩니다.
- 데스크톱 푸터 버튼은 이제 최소 너비 128px 대신 콘텐츠에 맞게 조정됩니다.
  이전 너비를 복원하려면 `footerProps.propsButtonApply`와 `footerProps.propsButtonCancel` 모두에 `{width: 'max', className: 'form-action'}`을 전달하고,
  스타일시트에서 `.form-action { min-width: 128px; }`를 설정하세요.
- 크기 `l`인 체크박스 컨트롤은 이제 15px 대신 13px 레이블과 17px 대신 18px 표시기를 사용합니다. 테마 색상도 약간 변경되었습니다.
- 세로 탭은 레거시 컴포넌트 없이 새로운 `List`를 사용합니다. 이전 `.g-list__item` 마크업을 대상으로 하는 사용자 정의 선택자는 수정해야 합니다. `onOrderChanged({oldIndex, newIndex})` 콜백은 유지됩니다.

필드 정의를 통해 전달되는 사용자 정의 컨트롤 및 UIKit 속성은
[UIKit 마이그레이션 가이드](https://github.com/gravity-ui/uikit/blob/main/docs/migration-to-v8.md)를 따라야 합니다.
특히, `Select`는 더 이상 `virtualizationThreshold`를 허용하지 않습니다. 내장된 `select` 컨트롤은 50개 옵션의 임계값을 가진 `ListVirtualizer`를 사용합니다.

## 사용법

이 예제에는 애플리케이션 프로바이더가 포함되어 있습니다. 애플리케이션에 이미 루트 `Provider`가 있다면, 여기에 표시된 래퍼는 생략하세요.

```tsx
import {DFDialog} from '@gravity-ui/dialog-fields';
import {Provider} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
}

function MyForm() {
  return (
    <Provider theme="light">
      <DFDialog<FormValues>
        visible={true}
        headerProps={{
          title: 'My form',
        }}
        onAdd={(form) => {
          console.log(form.getState().values);
          return Promise.resolve();
        }}
        fields={[
          {
            name: 'firstName',
            type: 'text',
            caption: 'First name',
            tooltip: 'Description for first name field',
          },
          {
            name: 'lastName',
            type: 'text',
            caption: 'LastName',
            tooltip: 'Description for last name field',
          },
        ]}
      />
    </Provider>
  );
}
```

### 조건부 표시

필드와 탭은 `visibilityCondition`을 지원합니다. 문자열 `when`을 사용하면 `isActive`는 해당 필드의 값을 받습니다:

```ts
visibilityCondition: {
  when: 'register',
  isActive: (value) => Boolean(value),
}
```

여러 값에 의존하려면 필드 이름 배열을 사용하세요. `isActive`는 `when`과 동일한 순서로 별도의 인수로 값을 받습니다:

```ts
visibilityCondition: {
  when: ['multiConsumer', 'register'],
  isActive: (multiConsumer, register) => Boolean(multiConsumer && register),
}
```

이름은 탭 접두사(`general.register` 등)를 포함한 폼 루트의 경로입니다. 가시성은 참조된 필드 중 하나가 변경될 때 업데이트됩니다.
조건에 의해 숨겨진 필드는 시각적으로만 숨겨지는 것이 아니라 마운트 해제됩니다.

더 많은 예제는 [storybook](https://preview.yandexcloud.dev/dialog-fields)에서 확인할 수 있습니다.