import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import YearHeader from './YearHeader'
import YearList from './YearList'

export type YearPanelProps = {
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
const YearPanel = ({ active, curDate, onChange, openDayPanel, className, style }: YearPanelProps) => {
  const [curYear, setCurYear] = useState(dayjs(curDate))
  const changeYear = (y: number) => {
    const newDate = dayjs(curDate).year(y)
    setCurYear(newDate)
    onChange(newDate)
    openDayPanel()
  }

  useEffect(() => {
    setCurYear(curDate)
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
      <YearHeader curYear={curYear.year()} changeYear={changeYear} />
      <YearList changeYear={changeYear} curYear={curYear.year()} />
    </div>
  )
}
export default YearPanel
