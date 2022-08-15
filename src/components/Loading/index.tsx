import classNames from 'classnames'
import React from 'react'
import Icon from '../Icon'

export type LoadingProps = {
  /** 显示与否 */
  show?: boolean
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
}
const Loading = ({ show, className, style }: LoadingProps) => {
  return <>{show ? <Icon type="loading" className={classNames('animate-spin', className)} style={style}></Icon> : null}</>
}
Loading.defaultProps = {
  show: true,
}
export default Loading
