import React, { useState } from 'react'
import BudgetCard from '../components/BudgetCard'
import AddBudget from '../components/AddBudget'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../context/BudgetContext'
import AddExpense from '../components/AddExpense'
import UnsortedBudgetCard from '../components/UnsortedBudgetCard'
import TotalBudgetCard from '../components/TotalBudgetCard'
import ViewBudgetModal from '../components/ViewBudgetModal'

const CreateBudget = () => {
  const [budgetModal, setBudgetModal] = useState(false)
  const [expenseModal, setExpenseModal] = useState(false)
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const [viewBudget, setViewBudget] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()

  function openAddExpenseModal(budgetId) {
    setExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

  return (
    <>
      <section className="mx-auto max-w-5xl font-montserrat">
        <div>
          <h1 className="font-bold font-dmsans text-2xl text-[#222328] capitalize">
            Know where every coin is
          </h1>
          <p className="mt-2 text-[#666e75] text-base max-w-lg">
            Create your Budget tracking activities to ensure you are always on
            top of things
            <span className="text-xs font-montserrat text-zinc-700 font-semibold">
              {' '}
              with M Budget App
            </span>
          </p>
        </div>
        <div className="my-4">
          <div className="flex gap-8 mb-4 items-center">
            <h1 className="font-bold font-montserrat text-2xl leading-3 pr-3  flex-1 underline underline-offset-4">
              Budgets
            </h1>
            <button
              // onClick={() => setShow(!show)}
              onClick={() => setBudgetModal(!budgetModal)}
              className="bg-teal-600 px-3 py-2 rounded-md text-gray-300 font-dmsans font-semibold hover:bg-teal-500 hover:text-white"
            >
              Add Budget
            </button>
            <button
              onClick={() => openAddExpenseModal(addExpenseModalBudgetId)}
              className="bg-red-600 px-3 py-2 rounded-md text-gray-300 font-dmsans font-semibold hover:bg-red-500 hover:text-white"
            >
              Add Expense
            </button>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-start gap-4">
          {budgets.map((budget) => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount,
              0,
            )
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                OnViewBudgetClick={() => setViewBudget(budget.id)}
                clr
              />
            )
          })}
          <UnsortedBudgetCard
            onAddExpenseClick={() =>
              openAddExpenseModal(UNCATEGORIZED_BUDGET_ID)
            }
            onViewBudgetClick={() => setViewBudget(UNCATEGORIZED_BUDGET_ID)}
          />

          <TotalBudgetCard />
          <ViewBudgetModal
            onClose={() => setViewBudget(null)}
            budgetId={viewBudget}
          />
        </div>

        <AddBudget
          open={budgetModal}
          onClose={() => setBudgetModal(!budgetModal)}
        />
        <AddExpense
          open={expenseModal}
          defaultBudgetId={addExpenseModalBudgetId}
          onClose={() => setExpenseModal(false)}
        />
      </section>
    </>
  )
}

export default CreateBudget
