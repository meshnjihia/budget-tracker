import React from 'react'
import { currencyFormatter, getPercentage, btnStyles } from '../utils'
import ProgressBar from './ProgressBar'
const BudgetCard = ({
  name,
  amount,
  max,
  clr,
  onAddExpenseClick,
  OnViewBudgetClick,
  hideButtons,
}) => {
  const percentage = getPercentage(amount, max)
  const classNames = []
  if (percentage > 65) {
    classNames.push('bg-red-600/50 rounded-md')
  } else if (clr) {
    classNames.push('bg-gray-600/50 rounded-md')
  }

  return (
    <div className={classNames.join('')}>
      <div className={`p-4`}>
        <div className="flex justify-between items-baseline font-normal mb-3">
          <div className="mr-2">{name}</div>
          <div className="flex items-baseline gap-2">
            {currencyFormatter.format(amount)}
            {max && (
              <span className="text-sm text-white/60">
                / {currencyFormatter.format(max)}{' '}
              </span>
            )}
          </div>
        </div>

        <div>{max && <ProgressBar percentage={percentage} />}</div>
        {!hideButtons && (<div className="flex gap-8 mt-4">
          <button
            onClick={OnViewBudgetClick}
            className={`${btnStyles} bg-zinc-500 hover:bg-slate-500 ml-auto`}
          >
            view expense
          </button>
          <button
            onClick={onAddExpenseClick}
            className={`${btnStyles} bg-teal-400 hover:bg-teal-500`}
          >
            add expense
          </button>
        </div>)}
        
      </div>
    </div>
  )
}

export default BudgetCard
