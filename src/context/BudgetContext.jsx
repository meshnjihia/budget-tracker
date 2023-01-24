// budget context
import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/UseLocalStorage';



const BudgetContext = React.createContext()

export const UNCATEGORIZED_BUDGET_ID = 'Uncategorized'

export function useBudgets() {
  return useContext(BudgetContext)
}

export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage('budgets',[])
  const [expenses, setExpenses] =useLocalStorage('expenses',[])

  // function getBudgetExpenses(budgetId) {
  //   return expenses.filter(expenses => expenses.budgetId === budgetId)
  // }

  function getBudgetExpenses(budgetId) {
    if(budgetId === UNCATEGORIZED_BUDGET_ID){
        return expenses.filter(expense => !expense.budgetId)
    }
    return expenses.filter(expense => expense.budgetId === budgetId || (!expense.budgetId && budgetId === UNCATEGORIZED_BUDGET_ID))
}

  function addExpense({description, amount, budgetId}) {
    setExpenses(prevExpenses => {
      
      return [...prevExpenses, {id: uuidv4(), description, amount, budgetId}]
    }) 
  }
  function addBudget({name, max}) {
    setBudgets(prevBudgets => {
      if (prevBudgets.find(budgets => budgets.name === name)) {
        return prevBudgets
      }
      return [...prevBudgets, {id: uuidv4( ), name, max}]
    }) 
  }

  function deleteExpense({ id }) {
    setExpenses(prevExpenses => { 
      return prevExpenses.filter(expenses => expenses.id !== id)
    })
  }
  // function deleteBudget({ id }) {
  //   setExpenses(prevExpenses => {
  //     return prevExpenses.map(expense => {
  //       if (expenses.budgetId !== id) return expense
  //       return {...expense, budgetId: UNCATEGORIZED_BUDGET_ID}

  //     })
  //   })
  //   setBudgets(prevBudgets => {
  //     return prevBudgets.filter(budgets => budgets.id !== id)
  //   })
  // }


function deleteBudget({ id }) {
    setExpenses(prevExpenses => {
      return prevExpenses.map(expense => {
        if (expense.budgetId !== id) return expense
        return {...expense, budgetId: UNCATEGORIZED_BUDGET_ID}

      })
    })
    setBudgets(prevBudgets => {
      return prevBudgets.filter(budgets => budgets.id !== id)
    })
  }





  return (
    <BudgetContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteExpense,
        deleteBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}
