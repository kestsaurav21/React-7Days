import React from 'react'
import Counter from './components/Counter'

const App = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-violet-700'>
        <div className='flex flex-col items-center justify-center gap-4 p-10 text-center bg-black  rounded-lg shadow-xl'>
          <h2 className='text-4xl font-bold text-white'>Counter App</h2>
          <p className='text-xl text-white'>
            A simple counter application built with React and Redux
          </p>

          <Counter />
        </div>      
    </div>
  )
}

export default App