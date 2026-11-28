`Divider` 组件用作分隔和分组元素的细线，以增强视觉层次结构。

```tsx
import {Divider} from '@gravity-ui/uikit';
```

```tsx
<Divider className="custom-divider" direction="horizontal" />
```

### 方向

使用 `direction` 属性来管理 `Divider` 的方向。默认方向是 `horizontal`。

#### 水平

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

#### 垂直

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### 自定义内容

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### 对齐

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## 属性

| 名称        | 描述                                   | 类型                    | 默认值       |
| :---------- | :------------------------------------- | :---------------------- | :----------- |
| className   | `class` HTML 属性                      | `string`                | -            |
| orientation | 确定分隔符方向                         | `horizontal - vertical` | `horizontal` |
| children    | 分隔符内的自定义内容                   | `React.ReactNode`       |              |
| align       | 自定义内容位置                         | `start - center - end`  | `start`      |
| style       | `style` HTML 属性                      | `React.CSSProperties`   |              |
| qa          | `data-qa` HTML 属性，用于测试          | `string`                |              |

### CSS API

| 名称                | 描述                                                                      |
| :------------------ | :------------------------------------------------------------------------ |
| `--g-divider-color` | 分隔符颜色                                                                |
| `--g-divider-size`  | 分隔符大小（水平方向为高度，垂直方向为宽度）                                |