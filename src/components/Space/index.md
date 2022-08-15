# Space

设置组件之间的间距

## 演示

默认 size 为 middle

默认间距大小为 `middle` ，对应预设参见 [tailwind - gap](https://www.tailwindcss.cn/docs/gap)
| gap | 对应预设 | 对应 rem | 根节点 16px 时对应 px 值 |
| ------ | -------- | -------- | ------------------------ |
| small | gap-1 | 0.25rem | 4px |
| middle | gap-3 | 0.75rem | 12px |
| large | gap-5 | 1.25rem | 20px |

```tsx
/**
 * title: 默认middle
 * defaultShowCode: true
 */
import React from 'react'
import { Space, Button } from 'cosine-ui'
export default () => (
  <Space>
    <Button type="primary">Primary</Button>
    <Button type="primary">Primary</Button>
    <Button type="primary">Primary</Button>
    <Button type="primary">Primary</Button>
    <Button type="primary">Primary</Button>
    <Button type="primary">Primary</Button>
  </Space>
)
```

```tsx
/**
 * title: gap=40px
 * defaultShowCode: true
 */
import React from 'react'
import { Space, Button } from 'cosine-ui'
export default () => (
  <Space gap={40}>
    <Button type="primary">Primary</Button>
    <Button type="primary">Primary</Button>
    <Button type="primary">Primary</Button>
    <Button type="primary">Primary</Button>
  </Space>
)
```

<API></API>

## 组件源码

<code src="./index.tsx" compact=true defaultShowCode=true></code>
