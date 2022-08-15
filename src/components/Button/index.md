# Button

按钮组件

## 演示

### type

默认为 default 按钮

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react'
import { Space, Button } from 'cosine-ui'
export default () => (
  <Space>
    <Button type="default">Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="link">Link</Button>
  </Space>
)
```

### size

默认大小为 middle

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react'
import { Space, Button } from 'cosine-ui'
export default () => (
  <Space align="center">
    <Button size="small">Small</Button>
    <Button>Middle</Button>
    <Button size="large">Large</Button>
  </Space>
)
```

### danger 属性

标识警告的按钮

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react'
import { Space, Button } from 'cosine-ui'
export default () => (
  <Space>
    <Button danger>Default</Button>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </Space>
)
```

### ghost 属性

ghost 属性代表幽灵按钮，适用于有背景的情况下，会将背景改为透明并且按钮反色

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react'
import { Space, Button } from 'cosine-ui'
export default () => (
  <Space style={{ background: '#1C1C1C', padding: '10px' }}>
    <Button ghost>Default</Button>
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button type="link" ghost>
      Link
    </Button>
    <Button ghost danger>
      Default
    </Button>
    <Button type="primary" ghost danger>
      Primary
    </Button>
    <Button type="link" ghost danger>
      Link
    </Button>
  </Space>
)
```

<API></API>

## 组件源码

<code src="./index.tsx" compact=true defaultShowCode=true></code>
