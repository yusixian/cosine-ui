# Icon

[IconFont 图标库地址](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=3572517&keyword=&project_type=&page=)

```ts
export type IconTypes = 'search' | 'close' | 'voice' | 'photo' | 'delete' | 'user' | 'github' | 'juejin' | 'lightOrDark'

export type IconProps = {
  type: IconTypes
  className?: string
  style?: React.CSSProperties
  onClick?: () => void // 点击事件
  show?: boolean // 默认为显示 true
  href?: string // 可以点的话，需要指定 href
}
```

利用 iconfont 下载下来的 js，以 symbol 形式引用，因此会根据当前字体颜色和大小改变 icon 的颜色和大小

## 演示

```tsx
import React from 'react'
import { Space, Icon } from 'cosine-ui'

export default () => (
  <Space>
    <Icon type="github" style={{ fontSize: 46, color: 'black' }} href={'https://github.com/yusixian/cosine-ui'} />
    <Icon type="photo" show={false} />
    <Icon type="voice" show={true} />
    <Icon type="juejin" style={{ fontSize: 30, color: 'blue' }} onClick={() => alert('click!')} />
    <Icon type="search" style={{ fontSize: 30, color: 'red' }} />
    <Icon type="delete" style={{ fontSize: 16, color: 'gray' }} />
  </Space>
)
```

## 所有图标

所有图标如下：

```tsx
import React from 'react'
import { Space, Icon, Button, IconNames } from 'cosine-ui'

export default () => (
  <Space>
    {IconNames.map((type) => (
      <Space key={type} direction="vertical">
        <Icon type={type} style={{ fontSize: 46 }} />
        <Button onClick={() => console.log(type)}>{type}</Button>
      </Space>
    ))}
  </Space>
)
```

<API></API>

## 组件源码

<code src="./index.tsx" compact=true defaultShowCode=true></code>
