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

利用 iconfont 下载下来的 js，以 symbol 形式引用，因此会根据当前字体颜色和大小

```tsx
import React from 'react'
import { Icon } from 'cosine-ui'
import 'tailwindcss/tailwind.css'

export default () => (
  <div style={{ fontSize: 20 }}>
    <Icon type="github" style={{ fontSize: 46, color: 'black' }} href={'https://github.com/yusixian/cosine-ui'} />
    <Icon type="photo" show={false} />
    <Icon type="voice" show={true} />
    <Icon type="juejin" style={{ fontSize: 30, color: 'blue' }} onClick={() => alert('click!')} />
    <Icon type="search" style={{ fontSize: 30, color: 'red' }} />
    <Icon type="delete" style={{ fontSize: 16, color: 'gray' }} />
  </div>
)
```
