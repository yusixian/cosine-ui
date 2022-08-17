import React from 'react'
import dayjs from 'dayjs'
import Icon from '../../Icon'
import classNames from 'classnames'
export type DateHeaderProps = {
  curDate: dayjs.Dayjs
  /** 改变当前月份的函数 */
  changeMonth: (month: number) => void
  /** 改变当前年份的函数 */
  changeYear: (year: number) => void
  /** 跳转年面板 */
  handleYear: () => void
  /** 跳转月面板 */
  handleMonth: () => void
  iconClass?: string
}
const DateHeader = ({ curDate, changeMonth, changeYear, handleYear, handleMonth, iconClass }: DateHeaderProps) => {
  const iconClassName = classNames('cursor-pointer text-2xl text-gray-300 hover:text-blue-500', iconClass)
  return (
    <div className="flex items-center justify-between gap-1 border-b border-gray-300 px-1 py-2">
      <Icon type="arrow-left-2" className={iconClassName} onClick={() => changeYear(curDate.year() - 1)} />
      <Icon type="arrow-left" className={iconClassName} onClick={() => changeMonth(curDate.month() - 1)} />
      <div className="flex flex-grow items-center justify-center gap-2 text-black hover:text-blue-500">
        <a href="#!" onClick={() => handleYear()}>
          {curDate.format('YYYY')}年
        </a>
        <a href="#!" onClick={() => handleMonth()}>
          {curDate.format('M')}月
        </a>
      </div>
      <Icon type="arrow-right" className={iconClassName} onClick={() => changeMonth(curDate.month() + 1)} />
      <Icon type="arrow-right-2" className={iconClassName} onClick={() => changeYear(curDate.year() + 1)} />
    </div>
  )
}
export default DateHeader
