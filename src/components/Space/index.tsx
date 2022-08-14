import classNames from 'classnames'
import React from 'react'

export type SpaceProps = {
  gap?: number | string
  direction?: 'horizontal' | 'vertical'
  className?: string
  style?: React.CSSProperties
}
const Space = ({ gap, direction, className, style, children }: React.PropsWithChildren<SpaceProps>) => {
  return (
    <div
      className={classNames('flex flex-wrap items-center', { 'flex-col': direction === 'vertical' }, `gap-${gap}`, className)}
      style={style}
    >
      {children}
    </div>
  )
}
Space.defaultProps = {
  gap: 3,
  direction: 'horizontal',
}
export default Space
