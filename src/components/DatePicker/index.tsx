import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
// import DatePanel from './DatePanel'
// import YearPanel from './YearPanel'
// import MonthPanel from './MonthPanel'
import dayjs from 'dayjs'
export type DatePickerProps = {
  /** 日期变化时的回调函数 */
  onChange: (date: dayjs.Dayjs, dateString?: string) => void
  /** 默认下面是 */
  defaultDate?: Date
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
}
const DatePicker = ({ defaultDate, onChange }: DatePickerProps) => {
  const inputRef = useRef()
  const [curDate] = useState(() => (dayjs(defaultDate).isValid() ? dayjs(defaultDate) : dayjs()))
  const [date, setDate] = useState(curDate)
  const [dateString, setDateString] = useState(curDate.format('YYYY-MM-DD'))
  const [openPanel, setOpenPanel] = useState(false)
  const [panelType, setPanelType] = useState('Date')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [setIsMounted])
  const handleDocumentClick = (e: Event) => {
    if (!inputRef.current) {
      return
    }
    /**点击弹窗之内的，不关闭；点击弹窗之外的，关闭 */
    //     if (!inputRef.current.contains(e.target) && inputRef.current !== e.target) {
    //       setOpenPanel(false)
    //     }
  }
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
    return () => document.removeEventListener('click', handleDocumentClick)
  }, [isMounted, handleDocumentClick])

  const changeDate = (date: dayjs.Dayjs) => {
    setDate(date)
    setDateString(date.format('YYYY-MM-DD'))
    onChange(date, date.format('YYYY-MM-DD'))
  }
  const handleChange = (e: Event) => {
    let nowValue = e?.target?.value
    setDateString(nowValue)
    let newDate = dayjs(nowValue)
    if (newDate.isValid()) changeDate(newDate)
  }
  const handleDate = () => {
    setPanelType('Date')
  }
  const handleYear = () => {
    setPanelType('Year')
  }
  const handleMonth = () => {
    setPanelType('Month')
  }
  const handleFocus = () => {
    setOpenPanel(true)
  }
  const handleBlur = () => {
    setOpenPanel(false)
  }
  return (
    <div className="picker-input">
      <input
        type="text"
        placeholder="请输入日期"
        onFocus={() => handleFocus()}
        value={dateString}
        onChange={(e) => handleChange(e)}
      />
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        data-icon="calendar"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
      </svg>
      <DatePanel
        active={openPanel && panelType === 'Date'}
        curDate={curDate}
        changeDate={(d) => changeDate(d)}
        handleYear={() => handleYear()}
        handleMonth={() => handleMonth()}
      />
      <YearPanel
        active={openPanel && panelType === 'Year'}
        curDate={curDate}
        changeDate={(d) => changeDate(d)}
        handleDate={() => handleDate()}
      />
      <MonthPanel
        active={openPanel && panelType === 'Month'}
        curDate={curDate}
        changeDate={(d) => changeDate(d)}
        handleDate={() => handleDate()}
      />
    </div>
  )
}
DatePicker.defaultProps = {}
export default DatePicker
