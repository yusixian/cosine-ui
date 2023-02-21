import classNames from 'classnames'
import React from 'react'

export type YearListItemProps = {
  /** 当前显示的年份 */
  year: number
  /** 当前年份，传入 */
  curYear: number
  /** 点击事件 */
  changeYear: (y: number) => void
}
const YearListItem = ({ year, curYear, changeYear }: YearListItemProps) => {
  const indexYear = Math.floor(year / 10) % 10
  const nowYear = Math.floor(curYear / 10) % 10
  const muted = nowYear !== indexYear
  const choose = curYear === year
  return (
    <div
      key={year}
      className={classNames('flex cursor-pointer items-center justify-center rounded-lg', {
        'bg-blue-500 text-white hover:bg-blue-500 hover:text-white': choose,
        'text-black/40 hover:bg-gray-100': muted,
        'text-black hover:bg-gray-100 hover:text-black': !muted && !choose,
      })}
      onClick={() => changeYear(year)}
    >
      {year}年
    </div>
  )
}
export default YearListItem

// const Year = ({ curYear, year, onClick }: { curYear: number; year: number; onClick: (y: number) => void }) => {
//   let className = []
//   const indexYear = Math.floor(year / 10) % 10
//   const nowYear = Math.floor(curYear / 10) % 10
//   if (curYear === year) className.push('choosed')

//   if (nowYear !== indexYear) {
//     className.push('muted')
//   }
//   return (
//     <div onClick={() => onClick(year)} className={className.join(' ')}>
//       {year}年
//     </div>
//   )
// }
