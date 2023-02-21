import dayjs from 'dayjs'
import React, { useMemo } from 'react'
import DayListItem from './DayListItem'

export type DayListProps = {
  curDate: dayjs.Dayjs
  changeDay: (day: dayjs.Dayjs) => void
}

const DayList = ({ curDate, changeDay }: DayListProps) => {
  const nowMonthDays = dayjs(curDate).daysInMonth()
  const firstDayDate = dayjs(curDate).startOf('month')
  const preMonth = dayjs(curDate).subtract(1, 'month')
  const preMonthDays = preMonth.daysInMonth()
  const nextMonth = dayjs(curDate).add(1, 'month')
  const labels = useMemo(() => {
    const labels = []
    for (let i = 0; i <= 6; i++) {
      labels.push(
        <div
          key={dayjs().day(i).format('ddd')}
          className="text-md flex items-center justify-center text-center font-semibold leading-9 text-black/60"
        >
          {dayjs().day(i).format('ddd')}
        </div>,
      )
    }
    return labels
  }, []) // 星期显示

  const days = useMemo(() => {
    const days = []
    for (let i = firstDayDate.day(); i >= 0; i--) {
      const preDay = dayjs(preMonth.date(preMonthDays - i))
      days.push(<DayListItem key={preDay.format('DD MM YYYY')} changeDay={changeDay} curDate={curDate} day={preDay} />)
    }
    for (let i = 1; i <= nowMonthDays; i++) {
      const day = dayjs(curDate.date(i))
      days.push(<DayListItem key={day.format('DD MM YYYY')} changeDay={changeDay} curDate={curDate} day={day} />)
    }
    const daysCount = days.length
    for (let i = 1; i <= 42 - daysCount; i++) {
      const nextDay = nextMonth.date(i)
      days.push(<DayListItem key={nextDay.format('DD MM YYYY')} changeDay={changeDay} curDate={curDate} day={nextDay} />)
    }
    return days
  }, [curDate]) // 日期显示

  return (
    <div className={'flex flex-grow flex-col px-2 py-1'}>
      <div className="grid h-7 flex-grow-0 grid-cols-7 grid-rows-1">{labels.concat()}</div>

      <div className="grid flex-grow grid-cols-7 grid-rows-6">{days.concat()}</div>
    </div>
  )
}

export default DayList
