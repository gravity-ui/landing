<!--GITHUB_BLOCK-->

# Tabs components

<!--/GITHUB_BLOCK-->

Tabs コンポーネントは、コンテンツの探索、整理、および異なるビューの切り替えに使用されます。

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

<!--SANDBOX
import {useState} from 'react';
import {Tab, TabList, TabPanel, TabProvider} from '@gravity-ui/uikit';

export default function () {
    const [activeTab, setActiveTab] = useState('second');

    return (
        <TabProvider value={activeTab} onUpdate={setActiveTab}>
            <TabList>
                <Tab value="first">First Tab</Tab>
                <Tab value="second">Active Tab</Tab>
                <Tab value="third" disabled>
                    Disabled Tab
                </Tab>
            </TabList>
            <div>
                <TabPanel value="first">First Panel</TabPanel>
                <TabPanel value="second">Second Panel</TabPanel>
                <TabPanel value="third">Third Panel</TabPanel>
            </div>
        </TabProvider>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [activeTab, setActiveTab] = React.useState('second');

return (
  <TabProvider value={activeTab} onUpdate={setActiveTab}>
    <TabList>
      <Tab value="first">First Tab</Tab>
      <Tab value="second">Active Tab</Tab>
      <Tab value="third" disabled>
        Disabled Tab
      </Tab>
    </TabList>
    <div>
      <TabPanel value="first">First Panel</TabPanel>
      <TabPanel value="second">Second Panel</TabPanel>
      <TabPanel value="third">Third Panel</TabPanel>
    </div>
  </TabProvider>
);
```

<!--/GITHUB_BLOCK-->

### コンポーネント

- [TabProvider](#tabprovider)
- [TabList](#tablist)
- [Tab](#tab)
- [TabPanel](#tabpanel)

## TabProvider

タブ選択機能を提供するコンポーネント

## プロパティ

| 名前     | 説明                                       |           タイプ            | デフォルト |
| :------- | :----------------------------------------- | :-----------------------: | :-----: |
| children | タブとタブパネルのリスト、おそらくいくつかのラッパーを含む |     `React.ReactNode`     |         |
| value    | アクティブなタブの値                       |         `string`          |         |
| onUpdate | タブ更新ハンドラー                         | `(value: string) => void` |         |

## TabList

`tabs` のセットのコンテナとして機能するコンポーネント

### サイズ

`tabs` のサイズを制御するには、`size` プロパティを使用します。デフォルトのサイズは `m` です。

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TabList value="second" size="m">
                <Tab value="first">M Size first</Tab>
                <Tab value="second">M Size second</Tab>
            </TabList>
            <TabList value="second" size="l">
                <Tab value="first">L Size first</Tab>
                <Tab value="second">L Size second</Tab>
            </TabList>
            <TabList value="second" size="xl">
                <Tab value="first">XL Size first</Tab>
                <Tab value="second">v Size second</Tab>
            </TabList>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="second" size="m">
    <Tab value="first">M Size first</Tab>
    <Tab value="second">M Size second</Tab>
</TabList>
<TabList value="second" size="l">
    <Tab value="first">L Size first</Tab>
    <Tab value="second">L Size second</Tab>
</TabList>
<TabList value="second" size="xl">
    <Tab value="first">XL Size first</Tab>
    <Tab value="second">v Size second</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### プロパティ

`TabList` は、これらのプロパティに加えて、有効な `div` 要素のプロパティをすべて受け入れます。

| 名前            | 説明                                                                            |               タイプ               | デフォルト  |
| :-------------- | :------------------------------------------------------------------------------ | :------------------------------: | :------: |
| children        | タブのリスト、おそらくいくつかのラッパーを含む                                  |        `React.ReactNode`         |          |
| value           | アクティブなタブの値                                                            |             `string`             |          |
| onUpdate        | タブ更新ハンドラー                                                              |    `(value: string) => void`     |          |
| className       | 要素の CSS クラス                                                               |             `string`             |          |
| activateOnFocus | フォーカス時にタブをアクティブにする。パネルの内容をすぐに表示できる場合にのみ使用してください |            `boolean`             | `false`  |
| size            | 要素のサイズ                                                                    |        `"m"` `"l"` `"xl"`        |  `"m"`   |
| contentOverflow | 水平方向に収まらないアイテムの処理方法（折り返し、スクロール、または **More** メニュー） | `"wrap"` `"scroll"` `"collapse"` | `"wrap"` |
| moreLabel       | アクティブなタブがリストに表示されている場合の折り返しオーバーフロートリガーのラベル |        `React.ReactNode`         | `"More"` |
| qa              | テストで使用される HTML `data-qa` 属性                                          |             `string`             |          |

## Tab

タブアイテムをレンダリングするために使用されるコンポーネント。

### アイコン

タブアイテムのアイコンを表示する必要がある場合に使用します。

<!--SANDBOX
import {Gear} from '@gravity-ui/icons';
import {Icon, Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" icon={<Icon size={16} data={Gear} />}>
                Tab with icon
            </Tab>
            <Tab value="second">Tab without icon</Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" icon={<Icon size={16} data={GearIcon} />}>
    Tab with icon
  </Tab>
  <Tab value="second">Tab without icon</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### ステート

タブアイテムには無効フラグがあります。

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first">First Tab</Tab>
            <Tab value="second" disabled>
                Disabled Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first">First Tab</Tab>
  <Tab value="second" disabled>
    Disabled Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### カウンター

タブアイテムに数値を表示する必要がある場合に使用します。

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" counter={13}>
                First Tab
            </Tab>
            <Tab value="second" counter={3}>
                Second Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" counter={13}>
    First Tab
  </Tab>
  <Tab value="second" counter={3}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### ラベル

タブアイテムのラベルを表示する必要がある場合に使用します。

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" label={{content: 'Label 1'}}>
                First Tab
            </Tab>
            <Tab value="second" label={{content: 'Label 2'}}>
                Second Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" label={{content: 'Label 1'}}>
    First Tab
  </Tab>
  <Tab value="second" label={{content: 'Label 2'}}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### コンテンツオーバーフロー

タブアイテムを折りたたむ必要がある場合に使用します。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
    <Tab value="first">First Tab</Tab>
    <Tab value="second">Second Tab</Tab>
    <Tab value="third">Third Tab</Tab>
    <Tab value="fourth">Fourth Tab</Tab>
    <Tab value="fifth">Fifth Tab</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
        <UIKit.Tab value="first">First Tab</UIKit.Tab>
        <UIKit.Tab value="second">Second Tab</UIKit.Tab>
        <UIKit.Tab value="third">Third Tab</UIKit.Tab>
        <UIKit.Tab value="fourth">Fourth Tab</UIKit.Tab>
        <UIKit.Tab value="fifth">Fifth Tab</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
  <Tab value="first">First Tab</Tab>
  <Tab value="second">Second Tab</Tab>
  <Tab value="third">Third Tab</Tab>
  <Tab value="fourth">Fourth Tab</Tab>
  <Tab value="fifth">Fifth Tab</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### プロパティ

`Tab` は、これらのプロパティに加えて、有効な `button` または `a` 要素のプロパティをすべて受け入れます。

| 名前      | 説明                             |        型         | デフォルト |
| :-------- | :------------------------------- | :---------------: | :-------: |
| value     | タブの値                         |      `string`     |           |
| title     | タブのタイトル                   |      `string`     |           |
| icon      | 先頭に表示されるアイコン         |  `React.ReactNode`  |           |
| counter   | 末尾に表示されるコンテンツ       |  `number` `string`  |           |
| href      | リンク先のURL                    |      `string `      |           |
| label     | 末尾に表示される`<Label>`        |  `React.ReactNode`  |           |
| disabled  | 非アクティブ状態                 |      `boolean`      |           |
| component | ルートコンポーネントをオーバーライド | `React.ElementType` |           |
| children  | タブのコンテンツ                 |  `React.ReactNode`  |           |
| qa        | テストで使用されるHTML `data-qa` 属性 |      `string`     |           |

## TabPanel

タブに関連付けられたコンテンツのコンテナ要素です。

### プロパティ

`TabPanel` は、有効な `div` 要素のプロパティに加えて、以下のプロパティを受け入れます。

| 名前     | 説明         |       型        | デフォルト |
| :------- | :----------- | :-------------: | :-------: |
| children | パネルのコンテンツ | `React.ReactNode` |           |
| value    | アクティブなタブの値 |     `string`    |           |
| qa       | テストで使用されるHTML `data-qa` 属性 |     `string`    |           |

## CSS API

| 名前                             | 説明             |
| :------------------------------- | :--------------- |
| `--g-tabs-border-width`          | タブの境界線の幅 |
| `--g-tabs-item-height`           | タブ項目の高さ   |
| `--g-tabs-item-border-width`     | タブ項目の境界線の幅 |
| `--g-tabs-item-gap`              | タブ間の距離     |
| `--g-tabs-vertical-item-height`  | 縦型タブ項目の高さ |
| `--g-tabs-vertical-item-padding` | 縦型タブ項目のパディング |
