/*
 * @Author: cos
 * @Date: 2022-03-11 02:14:05
 * @LastEditTime: 2022-03-11 02:51:31
 * @LastEditors: cos
 * @Description:
 * @FilePath: \HTML\project\cosine-ui\src\components\DatePicker\DateInput\MonthPanel\index.js
 */

import React from 'react'
import moment from 'moment'
import './index.scss'

moment.locale('zh-cn')

const MonthHeader = ({ curYear, changeYear }) => {
  return (
    <nav className="picker-panel-header">
      <a href="#!" onClick={() => changeYear(curYear - 1)}>
        &#8249;
      </a>
      <div>
        <a href="#!">{curYear}年</a>
      </div>
      <a href="#!" onClick={() => changeYear(curYear + 1)}>
        &#8250;
      </a>
    </nav>
  )
}
const Month = ({ curMonth, month, onClick }) => {
  let className = []

  if (curMonth === month) className.push('choosed')
  return (
    <div onClick={() => onClick(month)} className={className.join(' ')}>
      {month + 1}月
    </div>
  )
}
const Months = ({ curMonth, onClick }) => {
  let months = []
  for (let i = 0; i < 12; ++i) {
    months.push(<Month key={i} onClick={(y) => onClick(y)} curMonth={curMonth} month={i} />)
  }
  return <nav className="picker-panel-months">{months.concat()}</nav>
}
class MonthPanel extends React.Component {
  changeYear(y) {
    const { changeDate, curDate } = this.props
    curDate.year(y)
    changeDate(curDate)
  }
  changeMonth(m) {
    const { changeDate, curDate, handleDate } = this.props
    curDate.month(m)
    changeDate(curDate)
    handleDate()
  }
  render() {
    const { active, curDate } = this.props
    return (
      <div className="picker-panel" data-active={active}>
        <MonthHeader curYear={curDate.year()} changeYear={(y) => this.changeYear(y)} />
        <Months onClick={(m) => this.changeMonth(m)} curMonth={curDate.month()} />
      </div>
    )
  }
}

export default MonthPanel
