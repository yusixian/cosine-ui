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