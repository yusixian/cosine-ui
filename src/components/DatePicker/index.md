# DatePicker

日期选择器 实现日月年面板的选择

日、月、年选择面板的实现交互：

- 日面板实现：实现点击日期选择具体日期，点击头部面部左右箭头可前往上一年/下一年、上一月/下一月
- 月面板实现：点击日面板头部月份进入，点击月份则选择具体月份并返回日面板，点击头部面部左右箭头前往上一年/下一年
- 年面板实现：点击日面板头部月份进入，以十年为区间，点击年份则选择该年并返回日面板，点击头部面部左右箭头前往上个十年/下个十年
- 根据输入框输入实时变换日期

### API

- 支持默认日期的设置 `defaultDate` 通过设置 defaultDate 为 dayjs 对象实现默认日期的设置
- 支持日期的获取 `onDateChange` 通过日期变化的回调函数获取当前日期，返回 dayjs 对象

```tsx
/**
 * defaultShowCode: true
 */
import React, { useState } from 'react'
import { Space, DatePicker } from 'cosine-ui'
export default () => {
  const [selectDateString, setSelectDateString] = useState('')
  const onChange = (date, dateString) => {
    setSelectDateString(dateString)
  }
  return (
    <>
      <div>nowDate: {selectDateString}</div>
      <DatePicker onChange={onChange} />
    </>
  )
}
```

<API></API>

## 组件源码

<code src="./index.tsx" compact=true defaultShowCode=true></code>
