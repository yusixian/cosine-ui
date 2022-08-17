import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { useCallback, useEffect, useState } from 'react'
import DateHeader from './DateHeader'
import DayList from './DayList'

export type DatePanelProps = {
  /** 面板是否显示 为了动画 */
  active: boolean
  /** 当前日期 */
  curDate: dayjs.Dayjs
  /** 改变当前日期句柄 */
  changeDate: (date: dayjs.Dayjs) => void
  /** 跳转年面板 */
  handleYear: () => void
  /** 跳转月面板 */
  handleMonth: () => void
}

const DatePanel = ({ active, curDate, changeDate, handleYear, handleMonth }: DatePanelProps) => {
  const [nowDate, setNowDate] = useState(curDate)

  const changeDay = useCallback(
    (day: dayjs.Dayjs) => {
      setNowDate(day)
    },
    [nowDate, setNowDate],
  )

  const changeMonth = useCallback(
    (month: number) => {
      setNowDate(dayjs(nowDate.month(month)))
    },
    [nowDate, setNowDate],
  )

  const changeYear = useCallback(
    (year: number) => {
      setNowDate(dayjs(nowDate.year(year)))
    },
    [nowDate, setNowDate],
  )

  useEffect(() => {
    changeDate(nowDate)
  }, [nowDate, changeDate])
  return (
    <div
      className={classNames(
        'absolute top-full left--3 z-10 m-1 flex min-h-[300px] min-w-[300px] origin-top flex-col rounded border border-gray-100 bg-white py-1 px-3 shadow transition-all',
        active ? 'scale-y-100' : ' scale-y-0',
      )}
    >
      <DateHeader
        curDate={nowDate}
        changeMonth={changeMonth}
        changeYear={changeYear}
        handleYear={handleYear}
        handleMonth={handleMonth}
      />
      <DayList changeDay={changeDay} curDate={nowDate} />
    </div>
  )
}

export default DatePanel
