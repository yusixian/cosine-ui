# Loading

加载动画

## 演示

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react'
import { Space, Loading } from 'cosine-ui'
export default () => (
  <Space style={{ fontSize: 40 }}>
    <Loading />
    <Loading style={{ color: 'red' }} />
    <Loading style={{ color: 'blue', width: 60, height: 60 }} />
  </Space>
)
```

<API></API>

## 组件源码

<code src="./index.tsx" compact=true defaultShowCode=true></code>
