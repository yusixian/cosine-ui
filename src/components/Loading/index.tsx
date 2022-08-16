import classNames from 'classnames'
import React from 'react'
import Icon from '../Icon'
import { IconTypes } from '../Icon/type'

export type LoadingProps = {
  /** 显示与否 */
  show?: boolean
  /** 自定义指示器图标 */
  indicator?: JSX.Element | IconTypes
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
}
const LoadingIcon = ({ indicator, className, style }: LoadingProps) => {
  return (
    <>
      {typeof indicator === 'string' ? (
        <Icon type={indicator as IconTypes} className={classNames('animate-spin', className)} style={style}></Icon>
      ) : (
        indicator
      )}
    </>
  )
}
const Loading = ({ show, ...args }: LoadingProps) => {
  return <>{show ? <LoadingIcon {...args} /> : null}</>
}
Loading.defaultProps = {
  show: true,
  indicator: 'loading',
}
export default Loading
