/*
 * @Author: cos
 * @Date: 2022-03-11 02:05:20
 * @LastEditTime: 2022-03-11 02:06:29
 * @LastEditors: cos
 * @Description: 日期面板
 * @FilePath: \HTML\project\cosine-ui\src\components\DatePicker\DateInput\DatePanel\index.js
 */

import React from 'react';
import moment from 'moment';
import './index.scss' 

moment.locale('zh-cn');
const DateHeader = ({curdate, changeMonth, changeYear, handleYear, handleMonth}) => (
    <nav className="picker-panel-header">
        <a href='#!' onClick={() => changeYear(curdate.year() - 1)}>&#8249;&#8249;</a>
        <a href='#!' onClick={() => changeMonth(curdate.month() - 1)}>&#8249;</a>
        <div>
            <a href='#!' onClick={() => handleYear()}>{curdate.format('YYYY')}年</a>
            <a href='#!' onClick={() => handleMonth()}>{curdate.format('M')}月</a>
        </div>
        <a href='#!' onClick={() => changeMonth(curdate.month() + 1)}>&#8250;</a>
        <a href='#!' onClick={() => changeYear(curdate.year() + 1)}>&#8250;&#8250;</a>
    </nav>
);
const Day = ({currentdate, date, onClick}) => {
    let className = [];
    if(currentdate.isSame(date)) className.push('choosed');
    
    if(!date.isSame(currentdate, 'month')) {
        className.push('muted');
    }
    return (
        <div onClick={()=>onClick(date)} currentdate={date}  className={className.join(' ')}>{date.date()}</div>
    )
}
const Days = ({show, date, onClick}) => {
    const thisDate = moment(date);  // 当前日期
    const nowMonthDays = moment(date).daysInMonth(); // 本月所有天数
    const firstDayDate = moment(date).startOf('month'); // 第一天
    const preMonth = moment(date).subtract(1, 'month'); // 上个月
    const preMonthDays = preMonth.daysInMonth();
    const nextMonth = moment(date).add(1, 'month');
    let days = [];
    let labels = [];
  
    for (let i = 1; i <= 7; i++) {// 周一——周天
        labels.push(<div key={moment().day(i).format('ddd')} className="label">{moment().day(i).format('ddd')}</div>);
    }
  
    for (let i = firstDayDate.day(); i > 1; i--) {  // 第一天在星期几
        preMonth.date(preMonthDays - i + 2);
        days.push(
            <Day key={moment(preMonth).format('DD MM YYYY')} 
                onClick={(date) => onClick(date)} 
                currentdate={date} 
                date={moment(preMonth)} />
        );
    }
  
    for (let i = 1; i <= nowMonthDays; i++) {
        thisDate.date(i);
        days.push(
            <Day key={moment(thisDate).format('DD MM YYYY')} 
                onClick={(date) => onClick(date)} 
                currentdate={date} 
                date={moment(thisDate)}  />
        );
    }
  
    const daysCount = days.length;
    for (let i = 1; i <= (42 - daysCount); i++) {
        nextMonth.date(i);
        days.push(
            <Day key={moment(nextMonth).format('DD MM YYYY')} 
                onClick={(date) => onClick(date)} 
                currentdate={date} 
                date={moment(nextMonth)} />
        );
    }
    console.log('show:', show)
    return (
        <nav className="picker-panel-days" data-active={show}>
            {labels.concat()}
            {days.concat()}
        </nav>
    );
};
class DatePanel extends React.Component {
    changeDate(d) {
        this.props.changeDate(d);
    }
    changeDay(d) {
        const { curDate } = this.props;
        curDate.date(d)
        console.log('changeDay',curDate.format())
        this.props.changeDate(curDate);
    }
    changeMonth(m) {
        const { curDate } = this.props;
        curDate.month(m);
        this.props.changeDate(curDate);
    }
    changeYear(y) {
        const { curDate } = this.props;
        curDate.year(y)
        this.props.changeDate(curDate);
    }
    render() {
        // console.log(this.props.curDate)
        const { curDate, handleYear, handleMonth } = this.props;
        console.log(curDate.format())
        return (
            <div className="picker-panel" data-active= {this.props.active}>
                <DateHeader curdate={curDate} 
                    changeMonth={(month) => this.changeMonth(month)}
                    changeYear={(y) => this.changeYear(y)} 
                    handleYear={() => handleYear()} 
                    handleMonth={() => handleMonth()}/>
                <Days onClick={(date) => this.changeDate(date)} date={curDate} />
            </div>
        )
    }
}

export default DatePanel;