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
    <Loading indicator="loading-2" style={{ color: 'red' }} />
    <Loading indicator="loading-3" style={{ color: 'blue', width: 60, height: 60 }} />
  </Space>
)
```

## 自定义指示器

indicator 可传入自定义的指示器图标

<API></API>

## 组件源码

<code src="./index.tsx" compact=true defaultShowCode=true></code>
