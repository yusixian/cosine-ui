/*
 * @Author: cos
 * @Date: 2022-03-11 02:01:11
 * @LastEditTime: 2022-03-11 03:03:10
 * @LastEditors: cos
 * @Description: 日期选择器的输入框、面板控制 通过ref实现点击面板外关闭面板
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