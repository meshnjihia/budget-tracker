
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Logo } from './assets'

import { Home,CreateBudget } from './pages'
function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 p-4 border-b border-b-[#e6ebf4]">
        <Link to="/" className='flex items-center mx-auto flex-1'>
          <img src={Logo} alt="" className="w-16 object-contain" />
          <h2 className='font-semibold text-lf tracking-wide bg-inherit hover:scale-110 duration-75 text-teal-400'><span className='font-bold text-zinc-700'>Budget</span> App</h2>
        </Link>
        <Link to='/create-budget' className='font-medium font-montserrat bg-[#646] rounded-md text-white px-4 py-2'> Create Budget</Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] '>
        <Routes>
          
          <Route path="/create-budget" element={<CreateBudget />} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
