/*
 * @Author: cos
 * @Date: 2022-03-09 17:47:00
 * @LastEditTime: 2022-03-10 20:42:30
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \HTML\project\cosine-ui\src\App.js
 */

// src/App.js

import moment from 'moment';
import React, { Component } from 'react';
import { DatePicker } from './components';
import './App.scss'
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

export default App;
