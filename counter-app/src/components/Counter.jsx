import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counter/actions';
const Counter = () => {

    const counterValue = useSelector(state => state.counterValue)

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        if (counterValue === 0) return;
        dispatch(decrement())
    }

  return (
    <div className='p-4 h-52 w-92 flex flex-col items-start justify-center text-white gap-10'>
        <div className='text-6xl font-bold text-center w-full'>
            {counterValue}
        </div>

        <div className='flex items-center justify-between gap-10'>
            <button onClick={handleIncrement}
             className='bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded-lg w-24 cursor-pointer'>
                +
            </button>
            <button onClick={handleDecrement}
             className='bg-red-500 hover:bg-red-700 text-white text-2xl font-bold py-2 px-4 rounded-lg w-24 cursor-pointer'>
                -                
            </button>

        </div>

    </div>
  )
}

export default Counter