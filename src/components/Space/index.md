# Space

设置组件之间的间距

- 默认为水平间距 `gap-2` 即 0.5rem，参见 [tailwind - gap](https://www.tailwindcss.cn/docs/gap)

## 演示

```tsx
import React from 'react'
import { Space, Icon } from 'cosine-ui'

export default () => (
  <Space style={{ fontSize: 46 }}>
    <Icon type="github" />
    <Icon type="github" />
  </Space>
)
```

<API></API>

## 组件源码

<code src="./index.tsx" compact=true defaultShowCode=true></code>
