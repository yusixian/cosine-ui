[TOC]

# 数据平台实习生笔试题目-DatePicker 组件开发

- 姓名：余思娴 

- 电话：18681438622
- 投递职位：AI Data Platform-前端工程师实习

## 组件介绍

### DatePicker组件
DatePicker 组件开发
代码及在线预览地址：[DatePicker（by cos）](https://codepen.io/yusixian/pen/wvPLgWN)

1. 日、月、年选择面板的实现
交互：
a.日面板实现：实现点击日期选择具体日期，点击头部面部左右箭头可前往上一年/下一年、上一月/下一月
b.月面板实现：点击日面板头部月份进入，点击月份则选择具体月份并返回日面板，点击头部面部左右箭头前往上一年/下一年
c.年面板实现：点击日面板头部月份进入，以十年为区间，点击年份则选择该年并返回日面板，点击头部面部左右箭头前往上个十年/下个十年
d.根据输入框输入实时变换日期
2. 对外API的实现
a. 支持默认日期的设置 `defaultDate` 通过设置defaultDate为moment对象实现默认日期的设置
b. 支持日期的获取 `onDateChange` 通过日期变化的回调函数获取当前日期，返回moment对象
示例：
```js
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowDate: 'No Value!'
        }
    }
    handleDateChange(date) {
        this.setState({nowDate: date.format('YYYY-MM-DD')});
    }
    render() {
        return (
            <div className="App">
                <div>nowDate: {this.state.nowDate}</div>
                <DatePicker defaultDate={moment()} onDateChange={(date) => this.handleDateChange(date)} />
            </div>
        );
    }
}
```
3. 面板展示与切换动画
通过 `picker-panel` 中初始透明度 `opacity`为 0，变化原点`transform-origin`为左上角，初始大小为 `scale(0)` ，通过自定义属性 `data-active` 为true控制显示
```css
.picker-panel {
    z-index: 10;
    position: absolute;
    background-color: white;
    top: 30px;
    left: 0;
    width: 300px;
    height: 300px;
    border-radius: 3px;
    border: 1px solid $gray-4;
    box-shadow:2px 2px 10px rgba(0, 0, 0, 0.4);

    display: flex;
    flex-direction: column;

    opacity: 0;
    transform: scale(0);
    transform-origin: top left;
    transition: all 300ms ease-in-out;
    &[data-active=true] {
        transform: scale(1);
        opacity: 1;
    }
}
```
5. 界面展示
- 初始值

![初始值](src/statics/imgs/%E5%88%9D%E5%A7%8B%E5%80%BC.png)

- 选择其他日期

![选择其他日期](src/statics/imgs/%E9%80%89%E6%8B%A9%E5%85%B6%E4%BB%96%E6%97%A5%E6%9C%9F.png)



- 下一年

![下一年](src/statics/imgs/%E4%B8%8B%E4%B8%80%E5%B9%B4.png)

- 上一个月

![上一个月](src/statics/imgs/%E4%B8%8A%E4%B8%80%E4%B8%AA%E6%9C%88.png)



- 进入年面板

![进入年面板](src/statics/imgs/%E8%BF%9B%E5%85%A5%E5%B9%B4%E9%9D%A2%E6%9D%BF.png)

- 切换年面板

![切换年面板](src/statics/imgs/%E5%88%87%E6%8D%A2%E5%B9%B4%E9%9D%A2%E6%9D%BF.png)



- 月面板

![月面板](src/statics/imgs/%E6%9C%88%E9%9D%A2%E6%9D%BF.png)





## 完整代码

### DatePicker组件

```react
/*
 * @Author: cos
 * @Date: 2022-03-09 18:03:13
 * @LastEditTime: 2022-03-11 01:49:17
 * @LastEditors: cos
 * @Description: 日期选择器 实现日月年面板的选择
 * @FilePath: \HTML\project\cosine-ui\src\components\DatePicker\index.js
 */
import React from 'react';
import moment from 'moment';
import DateInput from './DateInput';
import './index.scss' 

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
```

**index.scss**

```scss
input { outline: none; }
```



#### DateInput组件

日期选择器的输入框、面板控制 通过ref实现点击面板外关闭面板

```react
/*
 * @Author: cos
 * @Date: 2022-03-11 02:01:11
 * @LastEditTime: 2022-03-11 02:14:41
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \HTML\project\cosine-ui\src\components\DatePicker\DateInput\index.js
 */

import React from 'react';
import moment from 'moment';
import './index.scss' 
import DatePanel from './DatePanel';
import YearPanel from './YearPanel';
import MonthPanel from './MonthPanel';
class DateInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        let { defaultDate } = props;
        let curDate = defaultDate.isValid() ? defaultDate : moment();
        this.state = {
            curDate,
            inputText: curDate.format('YYYY-MM-DD'),
            openPanel: false,
            panelType: 'Date'
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
        // this.setState({
        //     openPanel: false
        // });
    }
    handleChange(e) {
        let nowValue = e.target.value;
        this.setState({ inputText: nowValue });
        let newDate = moment(nowValue);
        console.log('newDate', newDate)
        if(newDate.isValid()) this.changeDate(newDate);
    }
    handleDate() {
        console.log('Date!')
        this.setState({ panelType: 'Date' })
    }
    handleYear() {
        this.setState({ panelType: 'Year' })
    }
    handleMonth() {
        this.setState({ panelType: 'Month' })
        console.log('handleMonth!')
    }
    handleFocus() {
        this.setState({ openPanel: true })
    }
    handleBlur() {
        this.setState({ openPanel: false })
    }
    render() {
        const { inputText, curDate, openPanel, panelType } = this.state;
        console.log('curDate',curDate)
        return (
            <div ref={this.inputRef} className="picker-input">
                <input type="text" placeholder="请输入日期" onFocus={() => this.handleFocus()} value={inputText} onChange={(e) => this.handleChange(e)} />
                <svg viewBox="64 64 896 896" focusable="false" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                </svg>
                <DatePanel active={openPanel && panelType==='Date'} curDate={curDate} changeDate={(d) => this.changeDate(d)} handleYear={() => this.handleYear()} handleMonth={() => this.handleMonth()} />
                <YearPanel active={openPanel && panelType==='Year'} curDate={curDate} changeDate={(d) => this.changeDate(d)} handleDate={() => this.handleDate()} />
                <MonthPanel active={openPanel && panelType==='Month'} curDate={curDate} changeDate={(d) => this.changeDate(d)} handleDate={() => this.handleDate()} />
            </div>
        )
    }
}

export default DateInput;
```

**index.scss**

```scss
$color-6: #1890ff;
$gray-4: #d9d9d9;
$gray-3: #f5f5f5;
.picker-input {
    border-radius: 2px;
    color: $gray-4;
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 5px;

    border: 1px solid $gray-4;
    input { border: none; outline: none; }
    &:hover, &:focus {
        border: 1px solid $color-6;
    }
    .picker-panel {
        z-index: 10;
        position: absolute;
        background-color: white;
        top: 30px;
        left: 0;
        width: 300px;
        height: 300px;
        border-radius: 3px;
        border: 1px solid $gray-4;
        box-shadow:2px 2px 10px rgba(0, 0, 0, 0.4);

        display: flex;
        flex-direction: column;
        
        opacity: 0;
        transform: scale(0);
        transform-origin: top left;
        transition: all 300ms ease-in-out;
        &[data-active=true] {
            transform: scale(1);
            opacity: 1;
        }
        &-header {
            // margin: -15px -15px 15px;
            padding: 8px 5px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 4px;
            border-bottom: 1px solid $gray-4;
            a {
              flex-grow: 1;
              cursor: pointer;
              line-height: 0;
              font-size: 32px;
              width: 20px;
              text-align: center;
              display: inline-block;
              margin-top: -5px;
              color: $gray-4;
              user-select: none;
              text-decoration: none;
              &:hover {
                color: $color-6;
              }
            }
            div {
                flex-grow: 10;
                line-height: normal;
                padding: 0 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                // gap: 8px;
                a {
                    width: auto;
                    margin-top: 0;
                    line-height: normal;
                    font-weight: normal;
                    font-size: 16px;
                    font-weight: 400;
                    color: black;
                }
            }
        }
    }
}
```



##### DatePanel 日面板

````react
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
````

**index.scss**

```scss
$color-6: #1890ff;
$gray-4: #d9d9d9;
$gray-3: #f5f5f5;
.picker-panel-days {
    padding: 5px 10px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-template-rows: repeat(7,1fr);
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 16px;
        color: rgb(0, 0, 0);
        transition: all 900ms ease-in-out linear;
        border-radius: 10px;
        &:hover {
            background-color: $gray-3;
        }
        &.label {
            text-transform: uppercase;
            color: rgba(0, 0, 0, 0.6);
            font-weight: 600;
            font-size: 14px;
            cursor: initial;
        }
    
        &.choosed {
            color: white;
            background-color: $color-6;
        }
    
        &.muted {
            color: rgba(0, 0, 0, 0.4);
        }
    }
}

```



##### MonthPanel 月面板

````react
/*
 * @Author: cos
 * @Date: 2022-03-11 02:14:05
 * @LastEditTime: 2022-03-11 02:51:31
 * @LastEditors: cos
 * @Description: 月面板
 * @FilePath: \HTML\project\cosine-ui\src\components\DatePicker\DateInput\MonthPanel\index.js
 */

import React from 'react';
import moment from 'moment';
import './index.scss' 

moment.locale('zh-cn');

const MonthHeader = ({curYear, changeYear}) => {
    return (
        <nav className="picker-panel-header">
            <a href='#!' onClick={() => changeYear(curYear - 1)}>&#8249;</a>
            <div>
                <a href='#!'>{curYear}年</a>
            </div>
            <a href='#!' onClick={() => changeYear(curYear + 1)}>&#8250;</a>
        </nav>
    )
};
const Month = ({curMonth, month, onClick}) => {
    let className = [];
    
    if(curMonth === month) className.push('choosed');
    return (
        <div onClick={()=>onClick(month)} className={className.join(' ')}>{month+1}月</div>
    )
}
const Months = ({curMonth, onClick}) => {
    let months = [];
    for(let i = 0; i < 12; ++i) {
        months.push(
            <Month key={i} 
                onClick={(y) => onClick(y)} 
                curMonth={curMonth} 
                month={i} />
        );
    }
    return (
        <nav className="picker-panel-months">
            {months.concat()}
        </nav>
    );
}
class MonthPanel extends React.Component {
    changeYear(y) {
        const { changeDate, curDate } = this.props;
        curDate.year(y)
        changeDate(curDate);
    }
    changeMonth(m){
        const { changeDate, curDate, handleDate } = this.props;
        curDate.month(m)
        changeDate(curDate);
        handleDate()
    }
    render() {
        const { active, curDate } = this.props;
        console.log('Month!')
        return (
            <div className="picker-panel" data-active= {active}>
                <MonthHeader curYear={curDate.year()}
                    changeYear={(y) => this.changeYear(y)} />
                <Months onClick={(m) => this.changeMonth(m)} curMonth={curDate.month()} />
            </div>
        )
    }
}

export default MonthPanel;
````

**index.scss**

```scss
$color-6: #1890ff;
$gray-4: #d9d9d9;
$gray-3: #f5f5f5;
.picker-panel-months {
    padding: 5px 10px;
    // width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(4,1fr);
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 16px;
        color: rgb(0, 0, 0);
        transition: all 900ms ease-in-out linear;
        border-radius: 10px;
        &:hover {
            background-color: $gray-3;
        }
        &.label {
            text-transform: uppercase;
            color: rgba(0, 0, 0, 0.6);
            font-weight: 600;
            font-size: 14px;
            cursor: initial;
        }
    
        &.choosed {
            color: white;
            background-color: $color-6;
        }
    
        &.muted {
            color: rgba(0, 0, 0, 0.4);
        }
    }
}
```



##### YearPanel 年面板

````react
/*
 * @Author: cos
 * @Date: 2022-03-11 02:11:41
 * @LastEditTime: 2022-03-11 02:48:18
 * @LastEditors: cos
 * @Description: 年面板
 * @FilePath: \HTML\project\cosine-ui\src\components\DatePicker\DateInput\YearPanel\index.js
 */
import React from 'react';
import moment from 'moment';
import './index.scss' 

moment.locale('zh-cn');
const YearHeader = ({curYear, changeYear}) => {
    const startYear = Math.floor(curYear/10)*10;
    const endYear = startYear+9;
    return (
        <nav className="picker-panel-header">
            <a href='#!' onClick={() => changeYear(startYear - 10)}>&#8249;&#8249;</a>
            <div>
                <a href='#!'>{startYear}——{endYear}年</a>
            </div>
            <a href='#!' onClick={() => changeYear(startYear + 10)}>&#8250;&#8250;</a>
        </nav>
    )
};
const Year = ({curYear, year, onClick}) => {
    let className = [];
    const indexYear = Math.floor(year/10)%10;
    const nowYear = Math.floor(curYear/10)%10;
    if(curYear === year) className.push('choosed');
    
    if(nowYear !== indexYear) {
        className.push('muted');
    }
    return (
        <div onClick={()=>onClick(year)} className={className.join(' ')}>{year}年</div>
    )
}
const Years = ({curYear, onClick}) => {
    const startYear = Math.floor(curYear/10)*10;
    const endYear = startYear+9;
    let years = [];

    years.push(
        <Year key={startYear-1} 
            onClick={(y) => onClick(y)} 
            curYear={curYear} 
            year={startYear-1} />
    );
    for(let i = 0; i < 10; ++i) {
        years.push(
            <Year key={startYear+i} 
                onClick={(y) => onClick(y)} 
                curYear={curYear} 
                year={startYear+i} />
        );
    }
    years.push(
        <Year key={endYear+1} 
            onClick={(y) => onClick(y)} 
            curYear={curYear} 
            year={endYear+1} />
    );
    return (
        <nav className="picker-panel-years">
            {years.concat()}
        </nav>
    );
}
class YearPanel extends React.Component {
    constructor(props) {
        super(props);
        const { curDate } = props;
        this.state = { curYear: curDate.year() }
    }
    chooseYear(y) {
        const { changeDate, curDate, handleDate } = this.props;
        this.changeYear(y)
        curDate.year(y)
        changeDate(curDate);
        handleDate()
    }
    changeYear(y){
        this.setState({ curYear:y })
    }
    render() {
        const { active } = this.props;
        const { curYear } = this.state
        return (
            <div className="picker-panel" data-active= {active}>
                <YearHeader curYear={curYear}
                    changeYear={(y) => this.changeYear(y)} />
                <Years onClick={(y) => this.chooseYear(y)} curYear={curYear} />
            </div>
        )
    }
}
export default YearPanel;
````

**index.scss**

```scss
$color-6: #1890ff;
$gray-4: #d9d9d9;
$gray-3: #f5f5f5;
.picker-panel-years {
    padding: 5px 10px;
    // width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(4,1fr);
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 16px;
        color: rgb(0, 0, 0);
        transition: all 900ms ease-in-out linear;
        border-radius: 10px;
        &:hover {
            background-color: $gray-3;
        }
        &.label {
            text-transform: uppercase;
            color: rgba(0, 0, 0, 0.6);
            font-weight: 600;
            font-size: 14px;
            cursor: initial;
        }
    
        &.choosed {
            color: white;
            background-color: $color-6;
        }
    
        &.muted {
            color: rgba(0, 0, 0, 0.4);
        }
    }
}
```

##### 

