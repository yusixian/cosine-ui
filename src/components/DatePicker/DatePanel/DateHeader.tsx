import React from 'react'
import dayjs from 'dayjs'
export type DateHeaderProps = {
  curdate: dayjs.Dayjs
  /** 改变当前月份的函数 */
  changeMonth: (month: number) => void
  /** 改变当前年份的函数 */
  changeYear: (year: number) => void
  /** 跳转年面板 */
  handleYear: () => void
  /** 跳转月面板 */
  handleMonth: () => void
}
const DateHeader = ({ curdate, changeMonth, changeYear, handleYear, handleMonth }: DateHeaderProps) => (
  <nav className="picker-panel-header">
    <a href="#!" onClick={() => changeYear(curdate.year() - 1)}>
      &#8249;&#8249;
    </a>
    <a href="#!" onClick={() => changeMonth(curdate.month() - 1)}>
      &#8249;
    </a>
    <div>
      <a href="#!" onClick={() => handleYear()}>
        {curdate.format('YYYY')}年
      </a>
      <a href="#!" onClick={() => handleMonth()}>
        {curdate.format('M')}月
      </a>
    </div>
    <a href="#!" onClick={() => changeMonth(curdate.month() + 1)}>
      &#8250;
    </a>
    <a href="#!" onClick={() => changeYear(curdate.year() + 1)}>
      &#8250;&#8250;
    </a>
  </nav>
)
export default DateHeader
