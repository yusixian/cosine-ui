/*
 * @Author: cos
 * @Date: 2022-03-09 17:47:00
 * @LastEditTime: 2022-03-09 18:12:26
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \cosine-ui\src\App.js
 */

// src/App.js

import React, { Component } from 'react';
import { DatePicker } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DatePicker />
      </div>
    );
  }
}

export default App;
