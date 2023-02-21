import classNames from 'classnames'
import dayjs from 'dayjs'
import React from 'react'

export type DayListItemProps = {
  day: dayjs.Dayjs
  curDate: dayjs.Dayjs
  changeDay: (date: dayjs.Dayjs) => void
}
const DayListItem = ({ day, curDate, changeDay }: DayListItemProps) => {
  const muted = !day.isSame(curDate, 'month')
  const choose = curDate.isSame(day)

  return (
    <div
      key={day.date()}
      className={classNames('flex cursor-pointer items-center justify-center rounded-lg', {
        'bg-blue-500 text-white hover:bg-blue-500 hover:text-white': choose,
        'text-black/40 hover:bg-gray-100': muted,
        'text-black hover:bg-gray-100 hover:text-black': !muted && !choose,
      })}
      onClick={() => changeDay(day)}
    >
      {day.date()}
    </div>
  )
}
export default DayListItem
