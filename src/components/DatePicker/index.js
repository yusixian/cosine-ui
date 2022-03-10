/*
 * @Author: cos
 * @Date: 2022-03-09 18:03:13
 * @LastEditTime: 2022-03-10 23:41:00
 * @LastEditors: cos
 * @Description: 日期选择器 实现日月年面板的选择
 * @FilePath: \HTML\project\cosine-ui\src\components\DatePicker\index.js
 */
import React from 'react';
import moment from 'moment';
import './index.scss' 

moment.locale('zh-cn');
const Header = ({curdate, changeMonth, changeYear, handleYear, handleMonth}) => (
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
const MonthDays = ({date, onClick}) => {
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
  
    return (
        <nav className="picker-panel-days">
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
    handleYear() {
        // 跳转至年份面板
        console.log('handleYear!');
    }
    handleMonth() {
        // 跳转至月份选择面板
        console.log('handleMonth!');
    }
    render() {
        // console.log(this.props.curDate)
        const { curDate } = this.props;
        console.log(curDate.format())
        return (
            <div className="picker-panel" data-active= {this.props.active}>
                <Header curdate={curDate} 
                    changeMonth={(month) => this.changeMonth(month)}
                    changeYear={(y) => this.changeYear(y)} 
                    handleYear={() => this.handleYear()} 
                    handleMonth={() => this.handleMonth()}/>
                <MonthDays onClick={(date) => this.changeDate(date)} date={curDate} />
            </div>
        )
    }
}
class DateInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        let { defaultDate } = props;
        let curDate = defaultDate.isValid() ? defaultDate : moment();
        this.state = {
            curDate,
            inputText: curDate.format('YYYY-MM-DD'),
            openPanel: false
        };
    }
    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick);
    }
    handleDocumentClick = (e) => {
        // console.log(this.inputRef.current)
        if (!this.inputRef.current) {
            return;
        }
        /**点击弹窗之内的，不关闭；点击弹窗之外的，关闭 */
        if (!this.inputRef.current.contains(e.target) 
                && this.inputRef.current !== e.target) {
            this.setState({
                openPanel: false
            });
            // console.log('out!!')
        } 
        // else console.log('in');
    }
    changeDate(d) {
        console.log('change', d)
        this.setState({ curDate:d, inputText:d.format('YYYY-MM-DD') });
        this.props.changeDate(d);
        this.setState({
            openPanel: false
        });
    }
    handleChange(e) {
        let nowValue = e.target.value;
        this.setState({ inputText: nowValue });
        let newDate = moment(nowValue);
        console.log('newDate', newDate)
        if(newDate.isValid()) this.changeDate(newDate);
    }
    handleFocus() {
        this.setState({ openPanel: true })
    }
    handleBlur() {
        this.setState({ openPanel: false })
    }
    render() {
        const { inputText, curDate, openPanel } = this.state;
        console.log('curDate',curDate)
        return (
            <div ref={this.inputRef} className="date-picker-input">
                <input type="text" placeholder="请输入日期" onFocus={() => this.handleFocus()} value={inputText} onChange={(e) => this.handleChange(e)} />
                <svg viewBox="64 64 896 896" focusable="false" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                </svg>
                <DatePanel active={openPanel} curDate={curDate} changeDate={(d) => this.changeDate(d)} />
            </div>
        )
    }
}
class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        let { defaultDate } = props;
        this.state = {
            curDate: defaultDate.isValid() ? defaultDate : moment()
        };
    }
    changeDate(d) {
        this.props.onDateChange(d);
    }
    render() {
        const { curDate } = this.state
        return (
            <div className="date-picker">
                <DateInput defaultDate={curDate} changeDate={(d) => this.changeDate(d)} />
            </div>
        )
    }
}
export default DatePicker;

