## 짧은 설명

`DFDialog` 컴포넌트는 폼 생성을 쉽게 하기 위한 목적으로, 내부적으로 react-final-form을 사용합니다.
몇 가지 미리 정의된 필드 유형을 지원하지만, 사용자는 `registerDialogControl`을 사용하여 새로운 유형을 등록하여 확장할 수 있습니다.

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

- 인플레이스 및 모달 보기
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
# 아직 설치하지 않은 경우 필요한 react/react-dom 버전을 사용하세요
$ npm install @gravity-ui/dialog-fields react@18 react-dom@18
```

패키지 관리자에 따라 `peerDependencies`를 수동으로 설치해야 할 수 있습니다.

## 사용법

```ts
import {DFDialog, FormApi} from '@gravity-ui/dialog-fields';

interface FormValues {
  firstName: string;
  lastName: string;
}

function MyForm() {
  return (
    <DFDialog<FormValues>
      visible={true}
      headerProps={{
        title: '내 폼',
      }}
      onAdd={(form) => {
        console.log(form.getState().values);
        return Promise.resolve();
      }}
      fields={[
        {
          name: 'firstName',
          type: 'text',
          caption: '이름',
          tooltip: '이름 필드에 대한 설명',
        },
        {
          name: 'lastName',
          type: 'text',
          caption: '성',
          tooltip: '성 필드에 대한 설명',
        },
      ]}
    />
  );
}
```

### 조건부 표시

필드와 탭은 `visibilityCondition`을 지원합니다. `when` 문자열을 사용하면
`isActive`는 해당 필드의 값을 받습니다.

```ts
visibilityCondition: {
  when: 'register',
  isActive: (value) => Boolean(value),
}
```

여러 값에 의존하려면 필드 이름 배열을 사용하세요. `isActive`는 `when`과
동일한 순서로 별도의 인수로 값을 받습니다.

```ts
visibilityCondition: {
  when: ['multiConsumer', 'register'],
  isActive: (multiConsumer, register) => Boolean(multiConsumer && register),
}
```

이름은 탭 접두사(`general.register` 등)를 포함한 폼 루트의 경로입니다.
참조된 필드 중 하나가 변경되면 가시성이 업데이트됩니다.
조건에 의해 숨겨진 필드는 시각적으로만 숨겨지는 것이 아니라 마운트 해제됩니다.

[스토리북](https://preview.yandexcloud.dev/dialog-fields)에서 더 많은 예제를 확인하세요.