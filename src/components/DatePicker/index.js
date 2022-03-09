/*
 * @Author: cos
 * @Date: 2022-03-09 18:03:13
 * @LastEditTime: 2022-03-09 18:14:25
 * @LastEditors: cos
 * @Description: 日期选择器 实现日月年面板的选择
 * @FilePath: \cosine-ui\src\components\DatePicker\index.js
 */
import React from 'react';
import moment from 'moment';
import './index.scss' 

moment.locale('zh-cn');
class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            startDate: moment().subtract(3, 'day'),
            endDate: moment().add(3, 'day')
        };
    }
    render() {
        const {date, startDate, endDate} = this.state;
        return (
        <div className="date-picker">
            {date.toString()}
        </div>
        )
    }
}
export default DatePicker;

