import React, { useMemo } from 'react'
import MonthListItem from './MonthListItem'

export type MonthListProps = {
  /** 当前月份，传入 0-11 */
  curMonth: number
  /** 点击事件 */
  changeMonth: (m: number) => void
}
const MonthList = ({ curMonth, changeMonth }: MonthListProps) => {
  const months = useMemo(() => {
    const months = []
    for (let i = 0; i < 12; ++i) months.push(<MonthListItem curMonth={curMonth} month={i} changeMonth={changeMonth} />)
    return months
  }, [curMonth, changeMonth])

  return <div className="grid flex-grow grid-cols-3 grid-rows-4 gap-1 px-2 py-1">{months.concat()}</div>
}
export default MonthList
