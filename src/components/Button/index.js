/*
 * @Author: cos
 * @Date: 2022-03-09 17:51:33
 * @LastEditTime: 2022-03-09 17:56:00
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \cosine-ui\src\components\Button\index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({ text }) => <button className="btn">一个组件按钮:{text}</button>

Button.propTypes = {
  text: PropTypes.any
};

export default Button;

