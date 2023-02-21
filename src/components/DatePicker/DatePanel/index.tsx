import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { useCallback, useEffect, useState } from 'react'
import DateHeader from './DateHeader'
import DayList from './DayList'

export type DatePanelProps = {
  /** 面板是否显示  */
  active: boolean
  /** 当前日期 */
  curDate: dayjs.Dayjs
  /** 改变当前日期 */
  changeDate: (date: dayjs.Dayjs) => void
  /** 关闭当前面板 */
  close: () => void
  /** 跳转年面板 */
  handleYear: () => void
  /** 跳转月面板 */
  handleMonth: () => void
  className?: string
}

const DatePanel = ({ active, curDate, close, changeDate, handleYear, handleMonth, className }: DatePanelProps) => {
  const [nowDate, setNowDate] = useState(dayjs(curDate))

  const changeDay = useCallback(
    (day: dayjs.Dayjs) => {
      setNowDate(day)
      changeDate(day)
      close()
    },
    [nowDate, setNowDate],
  )

  const changeMonth = useCallback(
    (month: number) => {
      setNowDate(dayjs(nowDate.month(month)))
      changeDate(dayjs(nowDate.month(month)))
    },
    [nowDate, setNowDate],
  )

  const changeYear = useCallback(
    (year: number) => {
      setNowDate(dayjs(nowDate.year(year)))
      changeDate(dayjs(nowDate.year(year)))
    },
    [nowDate, setNowDate],
  )

  useEffect(() => {
    setNowDate(curDate)
  }, [curDate])

  return (
    <div
      className={classNames(
        'absolute top-full left-0 z-10 mt-1 flex origin-top flex-col rounded border border-gray-100 bg-white py-1 px-3 shadow transition-all',
        active ? 'scale-y-100' : ' scale-y-0',
        className,
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
