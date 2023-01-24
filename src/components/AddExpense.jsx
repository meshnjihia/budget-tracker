import { AiFillCloseCircle } from 'react-icons/ai'

import { useRef } from 'react'
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../context/BudgetContext'

const AddExpense = ({ open, onClose, defaultBudgetId }) => {
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef(defaultBudgetId || UNCATEGORIZED_BUDGET_ID)
  const { addExpense, budgets } = useBudgets()

  function handleSubmit(e) {
    e.preventDefault()
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
    })
    onClose()
  }
  if (!open) return null
  return (
    <div className="bg-black/50 fixed top-0 left-0 w-screen h-screen z-[9999]">
      {/* AddExpense container */}

      <div className="sm:max-w-[425px] max-w-xs w-full fixed top-[40%] left-[50%] translate-x-[-40%] translate-y-[-50%] flex flex-col bg-[#713f05] items-center rounded-2xl text-white">
        <img />

        <div className="w-full p-4">
          {/* close btn */}
          <p className="absolute right-4 top-3 cursor-pointer text-white">
            <AiFillCloseCircle size={25} onClick={onClose} />
          </p>
          {/* content */}
          <div className="flex flex-col items-center mt-8 py-4 px-8">
            <div>
              <form action="" onSubmit={handleSubmit}>
                <header className="">
                  <h2 className="font-bold text-2xl mb-8">New Expense</h2>
                </header>
                <div className="flex flex-col">
                  {/* formGroup */}
                  <div id="description" className=" flex flex-col mb-3">
                    <label
                      htmlFor=""
                      className="text-sm font-montserrat font-medium mb-1"
                    >
                      Description
                    </label>
                    <input
                      ref={descriptionRef}
                      type="text"
                      required
                      placeholder="Expense Description"
                      className="outline-none bg-gray-300 rounded-md border-none text-zinc-800 py-1.5 px-2 placeholder:text-xs placeholder:text-center"
                    />
                  </div>
                  <div id="amount" className=" flex flex-col mb-3">
                    <label
                      htmlFor=""
                      className="text-sm font-montserrat font-medium mb-1"
                    >
                      Amount:
                    </label>
                    <input
                      ref={amountRef}
                      type="number"
                      min={0}
                      step={0.01}
                      required
                      placeholder="Expense Amount"
                      className="outline-none bg-gray-300 rounded-md border-none appearance-none py-1.5 px-2 placeholder:text-xs placeholder:text-center text-zinc-800"
                    />
                  </div>
                  <div id="budgetId" className=" flex flex-col mb-3">
                    <label
                      htmlFor=""
                      className="text-sm font-montserrat font-medium mb-1"
                    >
                      Budget Item
                    </label>
                    <select
                      defaultValue={defaultBudgetId || UNCATEGORIZED_BUDGET_ID}
                      ref={budgetIdRef}
                      // className="outline-none bg-gray-300 rounded-md border-none placeholder:text-xs placeholder:text-center text-zinc-800 border border-gray-300  mb-6 text-sm  block w-full p-2.5"
                      className="block py-2.5 px-1.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    >
                      <option
                        id={UNCATEGORIZED_BUDGET_ID}
                        className="border-none outline-none bg-white ring-0 text-center"
                      >
                        Unsorted
                      </option>
                      {budgets.map((budget) => (
                        <option
                          key={budget.id}
                          value={budget.id}
                          className="appearance-none border-none outline-none bg-white text-zinc-800"
                        >
                          {budget.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className={`p-2 rounded-md text-center bg-[#92e1c1] mt-2 text-base font-medium text-[#4e5a46]`}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* btn container */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddExpense
