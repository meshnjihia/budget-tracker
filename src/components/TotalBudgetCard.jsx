import React from 'react'
import TBudgetCard from './TBudgetCard'
import { useBudgets } from '../context/BudgetContext'

const TotalBudgetCard = () => {
  const { expenses, budgets } = useBudgets()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = budgets.reduce((total, budget) => total + budget.max, 0)
  if (max === 0) return null
  return <TBudgetCard clr name="Total" amount={amount} max={max} hideButtons />
}

export default TotalBudgetCard
