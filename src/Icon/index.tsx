import classNames from 'classnames'
import React from 'react'
import './script/iconfont.js'

export type IconTypes = 'search' | 'close' | 'voice' | 'photo' | 'delete' | 'user' | 'github' | 'juejin' | 'lightOrDark'

export type IconProps = {
  type: IconTypes
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  show?: boolean // 默认为显示 true
  href?: string // 可以点的话，需要指定 href
}

const IconFont = ({ type, style, className, onClick }: IconProps) => {
  return (
    <svg className={classNames(`icon`, className)} style={style} aria-hidden="true" onClick={onClick}>
      <use xlinkHref={`#icon-${type}`}></use>
    </svg>
  )
}

const Icon = ({ show = true, href, className, ...attr }: IconProps) => {
  if (!href) return <>{show && <IconFont className={classNames('cursor-pointer', className)} {...attr} />}</>
  return (
    <a href={href} className="cursor-pointer">
      {show && <IconFont className={className} {...attr} />}
    </a>
  )
}
export default Icon
