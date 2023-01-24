import React from 'react'
import BudgetCard from './BudgetCard'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../context/BudgetContext'

const UnsortedBudgetCard = (props) => {
  const { getBudgetExpenses } = useBudgets()
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount, 0
  )

// const { expenses } = useBudgets()
// const amount = expenses.filter(expense => !expense.budgetId).reduce(
//     (total, expense) => total + expense.amount, 0
// )


  //Todo figure out why this is not import the right id
   if (amount <= 0) return null
  
  return <BudgetCard clr name="Unsorted" amount={amount} {...props} />
}

export default UnsortedBudgetCard
