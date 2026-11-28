<!--GITHUB_BLOCK-->

# Link

<!--/GITHUB_BLOCK-->

`Link` — это часть текста, при нажатии на которую пользователь переходит на другую часть страницы, другую страницу внутри сервиса или на внешнюю веб-страницу.

```tsx
import {Link} from '@gravity-ui/uikit';
```

Его главное отличие от [Button](../Button) — навигационная функция. Чаще всего `Link` ведет на другую страницу или открывает новую вкладку браузера.

## Внешний вид

Доступно три типа ссылок: `normal` (обычная коричневая), `primary` (черная) и `secondary` (серая). Управлять ими можно с помощью свойства `view`. Также можно включить отображение того, что ссылка уже была нажата, с помощью свойства `visitable`.

### Normal

Это самый привычный и устоявшийся паттерн `link`. Он используется для визуального выделения элемента внутри текста или таблицы, а также как часть навигации. С его помощью можно переходить как на внутренние страницы, так и на внешние источники, включая документацию. Кроме того, этот тип используется для страниц ошибок и пустых состояний.

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

Этот тип используется, когда пользователю и так понятно, что элемент кликабелен, но использование коричневого `Link` перегрузит интерфейс и не даст должным образом выделить ключевые моменты на странице.

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

Как и primary `Link`, этот тип используется, когда пользователю и так понятно, что элемент кликабелен, при этом навигация по нему не является основной задачей и затрагивает небольшое количество сценариев. Его главная цель — не отвлекать пользователя от ключевых моментов на странице. Тип `Secondary` чаще всего используется в хлебных крошках или при отображении второстепенных атрибутов.

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

Это свойство используется для отображения того, что `Link` уже был нажат.

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

Свойство `href` является обязательным.

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

## Использование

Вы можете использовать `Link` как самостоятельный текстовый элемент, так и как часть текста:

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

## Свойства

`Link` принимает любые валидные props элемента `a` в дополнение к этим:

| Имя      | Описание                               |                 Тип                 |  По умолчанию   |
| :------- | :------------------------------------- | :---------------------------------: | :-------------: |
| children | Содержимое `Link`                      |          `React.ReactNode`          |                 |
| href     | HTML-атрибут `href`                    |               `string`              |                 |
| qa       | HTML-атрибут `data-qa`, используется для тестирования |               `string`              |                 |
| underline | Отображает подчеркивание под `Link`    |              `boolean`              |     `false`     |
| view     | Внешний вид `Link`                     | `"normal"` `"primary"` `"secondary"` |    `"normal"`   |
| visitable | Отображает CSS-состояние `:visitable` |              `boolean`              |     `false`     |
