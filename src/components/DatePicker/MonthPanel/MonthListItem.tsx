import classNames from 'classnames'
import React from 'react'

export type MonthListItemProps = {
  /** 显示的月份 */
  month: number
  /** 当前月份，传入 0-11 */
  curMonth: number
  /** 点击事件 */
  changeMonth: (m: number) => void
}
const MonthListItem = ({ curMonth, month, changeMonth }: MonthListItemProps) => {
  const choose = curMonth === month
  return (
    <div
      key={month}
      className={classNames('flex cursor-pointer items-center justify-center rounded-lg', {
        'bg-blue-500 text-white hover:bg-blue-500 hover:text-white': choose,
      })}
      onClick={() => changeMonth(month)}
    >
      {month + 1} 月
    </div>
  )
}
export default MonthListItem
