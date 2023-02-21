import classNames from 'classnames'
import React from 'react'
import Icon from '../../Icon'

export type YearHeaderProps = {
  curYear: number
  changeYear: (y: number) => void
  iconClass?: string
}
const YearHeader = ({ curYear, changeYear, iconClass }: YearHeaderProps) => {
  const startYear = Math.floor(curYear / 10) * 10
  const endYear = startYear + 9
  const iconClassName = classNames('cursor-pointer text-2xl text-gray-300 hover:text-blue-500', iconClass)

  return (
    <div className="flex items-center justify-between gap-1 border-b border-gray-300 px-1 py-2">
      <Icon type="arrow-left-2" className={iconClassName} onClick={() => changeYear(startYear - 10)} />
      <div className="flex flex-grow items-center justify-center gap-2 text-black hover:text-blue-500">
        {startYear}年——{endYear}年
      </div>
      <Icon type="arrow-right-2" className={iconClassName} onClick={() => changeYear(startYear + 10)} />
    </div>
  )
}
export default YearHeader
