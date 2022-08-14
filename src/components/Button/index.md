# Button

按钮组件

## 演示

```tsx
import React from 'react'
import { Space, Button } from 'cosine-ui'
export default () => (
  <Space>
    <Button type="default">Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="danger">Danger</Button>
    <Button type="ghost">Ghost</Button>
  </Space>
)
```

## 参数

参数如下：

```ts
export type ButtonProps = {
  type?: 'primary' | 'secondary' | 'ghost'
  size?: 'large' | 'middle' | 'small'
  className?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  style?: React.CSSProperties
}
```

<API></API>

## 组件源码

<code src="./index.tsx" compact=true defaultShowCode=true></code>
