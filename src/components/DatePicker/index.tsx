import React, { useCallback, useEffect, useRef, useState } from 'react'
// import YearPanel from './YearPanel'
// import MonthPanel from './MonthPanel'
import dayjs from 'dayjs'
import Icon from '../Icon'
import DatePanel from './DatePanel'
export type DatePickerProps = {
  /** 日期变化时的回调函数 */
  onChange?: (date: dayjs.Dayjs, dateString?: string) => void
  /** 默认下面是 */
  defaultDate?: Date
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
}
const DatePicker = ({ defaultDate, onChange }: DatePickerProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [curDate] = useState(() => (dayjs(defaultDate).isValid() ? dayjs(defaultDate) : dayjs()))
  const [date, setDate] = useState(curDate)
  const [dateString, setDateString] = useState(curDate.format('YYYY-MM-DD'))
  const [openPanel, setOpenPanel] = useState(false)
  const [panelType, setPanelType] = useState('Date')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [setIsMounted])

  // TODO: refactor - HOC
  const handleDocumentClick = useCallback(
    (e: Event) => {
      if (!inputRef.current) {
        return
      }
      /**点击弹窗之内的，不关闭；点击弹窗之外的，关闭 */
      const target = e.target as HTMLElement
      if (!inputRef.current.contains(target) && inputRef.current !== target) setOpenPanel(false)
    },
    [inputRef, setOpenPanel],
  )
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
    return () => document.removeEventListener('click', handleDocumentClick)
  }, [isMounted, handleDocumentClick])

  const changeDate = useCallback(
    (date: dayjs.Dayjs) => {
      setDate(date)
      setDateString(date.format('YYYY-MM-DD'))
      onChange?.(date, date.format('YYYY-MM-DD'))
    },
    [setDate, setDateString, onChange],
  )

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let nowValue = e?.target?.value
      setDateString(nowValue)
      let newDate = dayjs(nowValue)
      if (newDate.isValid()) changeDate(newDate)
    },
    [setDateString, changeDate],
  )

  const openDatePanel = useCallback(() => {
    setPanelType('Date')
  }, [setPanelType])

  const openMonthPanel = useCallback(() => {
    setPanelType('Month')
  }, [setPanelType])

  const openYearPanel = useCallback(() => {
    setPanelType('Year')
  }, [setPanelType])

  const onInputFocus = useCallback(() => {
    setOpenPanel(true)
  }, [setOpenPanel])

  return (
    <div className=" relative inline-flex items-center rounded border border-gray-400 px-2 py-1 text-gray-400 hover:border-blue-500 hover:text-blue-500 focus:border-blue-500">
      <input
        className="focus:outline-none"
        type="text"
        ref={inputRef}
        placeholder="请输入日期"
        onFocus={onInputFocus}
        value={dateString}
        onChange={onInputChange}
      />
      <Icon type="datepicker" className="text-xl" />
      <DatePanel
        active={openPanel && panelType === 'Date'}
        curDate={curDate}
        changeDate={changeDate}
        handleYear={openYearPanel}
        handleMonth={openMonthPanel}
      />
      {/* <YearPanel
        active={openPanel && panelType === 'Year'}
        curDate={curDate}
        changeDate={changeDate}
        handleDate={openDatePanel}
      />
      <MonthPanel
        active={openPanel && panelType === 'Month'}
        curDate={curDate}
        changeDate={changeDate}
        handleDate={openDatePanel} 
      />*/}
    </div>
  )
}
export default DatePicker
