import React from 'react'

const ProgressBar = ({ percentage }) => {
  
  let bgClr = 'bg-cyan-600'

  if (percentage <= 25) {
    bgClr = 'bg-teal-500'
  } else if (percentage > 25 && percentage <= 50) {
    bgClr = 'bg-orange-500'
  } else if (percentage > 50 && percentage <= 75) {
    bgClr = 'bg-red-500'
  } else if (percentage > 75 ) {
    bgClr = 'bg-red-600'
    
  }

  return (
    <div className="w-full bg-gray-500 rounded-full">
      <div
        className={`text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full ${bgClr}`}
        style={{ width: percentage + '%' }}
      >
        {percentage}%
      </div>
    </div>
  )
}

export default ProgressBar
