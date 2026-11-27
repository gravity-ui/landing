<!--GITHUB_BLOCK-->

# Link

<!--/GITHUB_BLOCK-->

`Link`는 클릭 시 사용자를 페이지의 다른 부분, 서비스 내의 다른 페이지 또는 외부 웹사이트 페이지로 이동시키는 텍스트의 일부입니다.

```tsx
import {Link} from '@gravity-ui/uikit';
```

[Button](../Button)과의 주요 차이점은 탐색 기능입니다. 대부분의 경우 `Link`는 다른 페이지로 이동하거나 새 브라우저 탭을 엽니다.

## 모양

세 가지 유형의 링크를 사용할 수 있습니다: `normal`(일반 갈색), `primary`(검은색) 및 `secondary`(회색). `view` 속성으로 관리할 수 있습니다. `visitable` 속성을 사용하여 링크가 이미 클릭되었음을 표시할 수도 있습니다.

### Normal

이것은 가장 익숙하고 잘 확립된 `link` 패턴입니다. 텍스트 또는 테이블 내의 요소를 시각적으로 강조하고 탐색의 일부로 사용됩니다. 이를 사용하여 내부 페이지와 외부 소스(문서 포함)로 이동할 수 있습니다. 또한 이 유형은 오류 페이지 및 제로 상태에 사용됩니다.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link view="normal" href="#">Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="normal" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Primary

이 유형은 요소가 클릭 가능하다는 것이 본질적으로 명확하지만 갈색 `Link`를 사용하면 인터페이스가 과부하되고 페이지의 주요 요점을 제대로 강조하지 못하게 될 때 사용됩니다.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link view="primary" href="#">Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="primary" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Secondary

Primary `Link`와 마찬가지로 이 유형은 사용자가 요소가 클릭 가능하다는 것을 본질적으로 알 수 있지만 이를 통해 탐색하는 것이 필수적이지 않고 소수의 시나리오에 영향을 미칠 때 사용됩니다. 주요 목표는 사용자가 페이지의 주요 요점에서 주의를 산만하게 하지 않는 것입니다. `Secondary` 유형은 주로 브레드크럼이나 보조 속성을 표시할 때 사용됩니다.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link view="secondary" href="#">Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="secondary" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### Visitable

이 속성은 `Link`가 이미 클릭되었음을 표시하는 데 사용됩니다.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link href="https://gravity-ui.com/" visitable>Link</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link href="https://gravity-ui.com/" visitable>
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

## `href`

`href` 속성은 필수입니다.

<!--SANDBOX
import {Link} from '@gravity-ui/uikit';

export default function () {
    return <Link href="#">Link with href</Link>;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Link href="#">Link with href</Link>
```

<!--/GITHUB_BLOCK-->

## 사용법

`Link`는 독립적인 텍스트 요소로도, 텍스트의 일부로도 사용할 수 있습니다.

<!--SANDBOX
import {Link, Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>
                <Link href="#">what roles are active in the service</Link>
            </Text>
            <Text>
                Currently, this role can only be assigned to a{' '}
                <Link href="#">folder</Link> or <Link href="#">cloud</Link>
            </Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text>
    <Link href="#">What roles are available in the service</Link>
</Text>
<Text>
    Currently, this role can only be assigned to a <Link href="#">folder</Link> or <Link href="#">cloud</Link>
</Text>
```

<!--/GITHUB_BLOCK-->

## 속성

`Link`는 다음 외에도 유효한 `a` 요소 속성을 모두 허용합니다.

| 이름      | 설명                               |                 유형                 | 기본값 |
| :-------- | :--------------------------------- | :----------------------------------: | :----: |
| children  | `Link` 콘텐츠                      |          `React.ReactNode`           |        |
| href      | `href` HTML 속성                   |               `string`               |        |
| qa        | `data-qa` HTML 속성, 테스트에 사용 |               `string`               |        |
| underline | `Link` 아래에 밑줄 표시            |              `boolean`               | `false` |
| view      | `Link` 모양                        | `"normal"` `"primary"` `"secondary"` | `"normal"` |
| visitable | `:visitable` CSS 상태 표시         |              `boolean`               | `false` |
