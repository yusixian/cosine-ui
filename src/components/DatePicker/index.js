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

