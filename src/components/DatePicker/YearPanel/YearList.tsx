import React, { useMemo } from 'react'
import YearListItem from './YearListItem'

export type YearListProps = {
  curYear: number
  changeYear: (y: number) => void
}
const YearList = ({ curYear, changeYear }: YearListProps) => {
  const startYear = Math.floor(curYear / 10) * 10
  const endYear = startYear + 9
  const years = useMemo(() => {
    const years = []
    years.push(<YearListItem key={startYear - 1} changeYear={changeYear} curYear={curYear} year={startYear - 1} />)
    for (let i = 0; i < 10; ++i) {
      years.push(<YearListItem key={startYear + i} changeYear={changeYear} curYear={curYear} year={startYear + i} />)
    }
    years.push(<YearListItem key={endYear + 1} changeYear={changeYear} curYear={curYear} year={endYear + 1} />)
    return years
  }, [curYear, changeYear])

  return <div className="grid flex-grow grid-cols-3 grid-rows-4 gap-1 px-2 py-1">{years.concat()}</div>
}

export default YearList
