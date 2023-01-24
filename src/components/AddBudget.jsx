import { AiFillCloseCircle } from 'react-icons/ai'

import { useRef } from 'react'
import { useBudgets } from '../context/BudgetContext'


const AddBudget = ({ open, onClose }) => {
    
  const nameRef = useRef()
  const maxRef = useRef()
  const { addBudget} = useBudgets()
  function  handleSubmit(e) {
    e.preventDefault()
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    })
    onClose()
  }
  if (!open) return null
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
              <form action="" onSubmit={handleSubmit}>
                <header className="">
                  <h2 className="font-bold text-2xl mb-8">New Budget</h2>
                </header>
                <div className="flex flex-col">
                  {/* formGroup */}
                  <div id="name" className=" flex flex-col mb-3">
                    <label htmlFor="" className='text-base font-montserrat font-medium mb-1'>Name.</label>
                    <input
                      ref={nameRef}
                      type="text"
                      required
                      placeholder='Budget Item Name'
                      className="outline-none bg-gray-300 rounded-md border-none text-zinc-800 py-1.5 px-2 placeholder:text-xs placeholder:text-center"
                    />
                  </div>
                  <div id="max" className=" flex flex-col mb-3">
                    <label htmlFor="" className='text-base font-medium mb-1'>Maximum Spending:</label>
                    <input
                      
                      ref={maxRef}
                      type="number"
                      min={0}
                      step={0.01}
                      required
                      placeholder='max amount for the budget item'
                      className="outline-none bg-gray-300 rounded-md border-none appearance-none py-1.5 px-2 placeholder:text-xs placeholder:text-center text-zinc-800"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button onClick={handleSubmit}
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

export default AddBudget
