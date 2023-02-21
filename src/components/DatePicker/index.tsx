import React, { useCallback, useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'
import Icon from '../Icon'
import DatePanel from './DatePanel'
import YearPanel from './YearPanel'
import { useClickAway } from 'react-use'
import MonthPanel from './MonthPanel'
export type DatePickerProps = {
  /** 日期变化时的回调函数 */
  onChange?: (date: dayjs.Dayjs, dateString?: string) => void
  /**
   * 默认日期
   * @default nowDate
   */
  defaultDate?: Date
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
}
const DatePicker = ({ defaultDate, onChange }: DatePickerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [curDate, setCurDate] = useState(() => (dayjs(defaultDate).isValid() ? dayjs(defaultDate) : dayjs())) // 透传
  const [date, setDate] = useState(curDate)
  const [dateString, setDateString] = useState(curDate.format('YYYY-MM-DD'))
  const [open, setOpen] = useState(false)
  const [panelType, setPanelType] = useState('Date')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [setIsMounted])

  useClickAway(containerRef, () => {
    setOpen(false)
  })

  const changeDate = (date: dayjs.Dayjs) => {
    setDate(date)
    setCurDate(date)
    setDateString(date.format('YYYY-MM-DD'))
    onChange?.(date, date.format('YYYY-MM-DD'))
    setOpen(false)
  }

  const openPanel = useCallback(
    (type = 'Date') => {
      setOpen(true)
      setPanelType(type ?? 'Date')
    },
    [setOpen, setPanelType],
  )

  const openDatePanel = useCallback(() => {
    openPanel('Date')
  }, [openPanel])

  const openMonthPanel = useCallback(() => {
    openPanel('Month')
  }, [openPanel])

  const openYearPanel = useCallback(() => {
    openPanel('Year')
  }, [openPanel])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let nowValue = e?.target?.value
    setDateString(nowValue)
    let newDate = dayjs(nowValue)
    if (newDate.isValid()) changeDate(newDate)
  }

  if (!isMounted) return null

  return (
    <div
      className="relative inline-flex items-center rounded border border-gray-400 px-2 py-1 text-gray-400 hover:border-blue-500 hover:text-blue-500 focus:border-blue-500"
      ref={containerRef}
    >
      <input
        className="focus:outline-none"
        type="text"
        placeholder="请输入日期"
        onFocus={openDatePanel}
        value={dateString}
        onChange={onInputChange}
      />
      <Icon type="datepicker" className="text-xl" />
      <DatePanel
        close={() => setOpen(false)}
        className="min-h-[300px] min-w-[300px]"
        active={open && panelType === 'Date'}
        curDate={curDate}
        changeDate={changeDate}
        handleYear={openYearPanel}
        handleMonth={openMonthPanel}
      />
      <YearPanel
        className="min-h-[300px] min-w-[300px]"
        active={open && panelType === 'Year'}
        curDate={curDate}
        onChange={changeDate}
        openDayPanel={openDatePanel}
      />
      <MonthPanel
        className="min-h-[300px] min-w-[300px]"
        active={open && panelType === 'Month'}
        curDate={curDate}
        onChange={changeDate}
        openDayPanel={openDatePanel}
      />
    </div>
  )
}
export default DatePicker
