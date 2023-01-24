import { AiFillCloseCircle } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'

import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../context/BudgetContext'
import { currencyFormatter } from '../utils'

const ViewBudgetModal = ({ onClose, budgetId }) => {
  const {
    getBudgetExpenses,
    budgets,
    deleteBudget,
    deleteExpense,
  } = useBudgets()

  const expenses = getBudgetExpenses(budgetId)

  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: 'Unsorted', id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId)
  if (!budgetId) return null
  return (
    <div className="bg-black/50 fixed top-0 left-0 w-screen h-screen z-[9999]">
      {/* AddBudget container */}

      <div className="sm:max-w-[425px] max-w-xs w-full fixed top-[40%] left-[50%] translate-x-[-40%] translate-y-[-50%] flex flex-col bg-[#4e5a46] items-center rounded-2xl text-white">
        <img />

        <div className="w-full p-4">
          {/* close btn */}
          <p className="absolute right-4 top-3 cursor-pointer text-white">
            <AiFillCloseCircle size={25} onClick={onClose} />
          </p>
          {/* content */}
          <div className="flex flex-col items-center mt-8 py-4 px-8">
            <div>
              <header className="flex flex-col gap-8">
                <div className="flex flex-row gap-4 items-center">
                  <span className="flex-1 font-bold">Expenses:-</span>
                  <span className="capitalize font-semibold text-zinc-800 underline underline-offset-4 tracking-tighter">
                    {budget?.name}
                  </span>

                  {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                    <button
                      className={`p-[.5rem] rounded-md text-center bg-[#ff1414] text-xs font-medium text-white`}
                      onClick={() => {
                        deleteBudget(budget)
                        onClose()
                      }}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </header>
              <div className="flex flex-col gap-12 mt-8">
                {expenses.map((expense) => (
                  <div
                    className="flex flex-row gap-8 items-center border-b pb-1 border-black/20"
                    key={expense.id}
                  >
                    <div className="text-lg mr-auto ">
                      <span className="text-xs pr-2"> Description:-</span>
                      <span className="text-sm text-zinc-800 font-bold">{expense.description}</span>
                    </div>
                    <div className="text-sm">
                      {currencyFormatter.format(expense.amount)}
                    </div>
                    <button onClick={() => deleteExpense(expense)} className='bg-red-500 rounded-full p-[.1rem]'>
                      <MdClose />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* btn container */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBudgetModal
