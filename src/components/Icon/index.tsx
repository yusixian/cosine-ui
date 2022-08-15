import classNames from 'classnames'
import React from 'react'
import './script/iconfont.js'
import { IconTypes } from './type'

export type IconProps = {
  /** 图标唯一类型 */
  type: IconTypes
  /** 图标点击事件 */
  onClick?: () => void
  /** 图标显示与否 */
  show?: boolean
  /** 图标链接 */
  href?: string
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
}

const IconFont = ({ type, style, className, onClick }: IconProps) => {
  return (
    <svg className={classNames(`icon`, className)} style={style} aria-hidden="true" onClick={onClick}>
      <use xlinkHref={`#icon-${type}`}></use>
    </svg>
  )
}

const Icon = ({ show, href, className, ...attr }: IconProps) => {
  if (!href) return <>{show && <IconFont className={classNames('cursor-pointer', className)} {...attr} />}</>
  return (
    <a href={href} className="cursor-pointer">
      {show && <IconFont className={className} {...attr} />}
    </a>
  )
}
Icon.defaultProps = {
  show: true,
}
export default Icon
