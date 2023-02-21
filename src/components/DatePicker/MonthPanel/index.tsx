import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import MonthHeader from './MonthHeader'
import MonthList from './MonthList'

export type MonthPanelProps = {
  /** 是否显示 */
  active?: boolean
  /** 当前日期对象*/
  curDate: dayjs.Dayjs
  /** 改变日期的函数*/
  onChange: (date: dayjs.Dayjs) => void
  /** 打开day面板的函数 */
  openDayPanel: () => void
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
}
// TODO: 与年面板合并
const MonthPanel = ({ active, curDate, onChange, openDayPanel, className, style }: MonthPanelProps) => {
  const [curMonth, setCurMonth] = useState(dayjs(curDate))
  const changeMonth = (m: number) => {
    const newDate = dayjs(curDate).month(m)
    setCurMonth(newDate)
    onChange(newDate)
    openDayPanel()
  }

  const changeYear = (y: number) => {
    const newDate = dayjs(curDate).year(y)
    setCurMonth(newDate)
    onChange(newDate)
    openDayPanel()
  }

  useEffect(() => {
    setCurMonth(curDate)
  }, [curDate])

  return (
    <div
      style={style}
      className={classNames(
        'absolute top-full left-0 z-10 mt-1 flex origin-top flex-col rounded border border-gray-100 bg-white py-1 px-3 shadow transition-all',
        active ? 'scale-y-100' : ' scale-y-0',
        className,
      )}
    >
      <MonthHeader curYear={curMonth.year()} changeYear={changeYear} />
      <MonthList changeMonth={(m) => changeMonth(m)} curMonth={curMonth.month()} />
    </div>
  )
}
export default MonthPanel
