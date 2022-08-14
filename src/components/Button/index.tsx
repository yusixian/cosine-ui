import classNames from 'classnames'
import React, { LegacyRef } from 'react'

export type ButtonProps = {
  /**
   * 按钮类型
   * @default default
   */
  type?: 'default' | 'primary' | 'danger' | 'ghost'
  /**
   * 按钮大小
   * @default middle
   */
  size?: 'large' | 'middle' | 'small'
  /** 点击事件 */
  onClick?: () => void
  /** 是否禁用 */
  disabled?: boolean
  /** 是否加载中 */
  loading?: boolean
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
}
const typeClass = {
  default: 'border-gray-300 hover:border-blue-500 hover:text-blue-500',
  primary: 'bg-blue-500 border-blue-500 text-white hover:bg-blue-400 hover:border-blue-400',
  danger: 'text-red-500 border-red-500 hover:bg-red-500 hover:text-white',
  ghost: 'hover:text-blue-500 hover:border-blue-500',
}
const sizeClass = {
  large: 'py-5 px-8',
  middle: 'py-1 px-2',
  small: 'p-1',
}
const Button = React.forwardRef(function ButtonInner(
  { type, size, className, onClick, disabled, loading, style, children }: React.PropsWithChildren<ButtonProps>,
  ref: LegacyRef<HTMLButtonElement>,
) {
  return (
    <button
      className={classNames(
        'box-border border transition ease-in-out hover:shadow-md',
        typeClass[type || 'primary'],
        sizeClass[size || 'middle'],
        className,
      )}
      style={style}
      onClick={loading ? undefined : onClick}
      ref={ref}
      disabled={disabled}
    >
      {children}
    </button>
  )
})
Button.defaultProps = {
  type: 'default',
  size: 'middle',
}
export default Button
