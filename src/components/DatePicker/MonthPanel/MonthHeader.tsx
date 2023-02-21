import classNames from 'classnames'
import React from 'react'
import Icon from '../../Icon'

export type MonthHeaderProps = {
  curYear: number
  changeYear: (y: number) => void
  iconClass?: string
}

const MonthHeader = ({ curYear, changeYear, iconClass }: MonthHeaderProps) => {
  const iconClassName = classNames('cursor-pointer text-2xl text-gray-300 hover:text-blue-500', iconClass)

  return (
    <div className="flex items-center justify-between gap-1 border-b border-gray-300 px-1 py-2">
      <Icon type="arrow-left-2" className={iconClassName} onClick={() => changeYear(curYear - 1)} />
      <div className="flex flex-grow items-center justify-center gap-2 text-black hover:text-blue-500">{curYear}年</div>
      <Icon type="arrow-right-2" className={iconClassName} onClick={() => changeYear(curYear + 1)} />
    </div>
  )
}
export default MonthHeader
