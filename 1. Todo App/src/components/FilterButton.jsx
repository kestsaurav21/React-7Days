import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodos, markAllCompleted } from '../redux/actions';

const FilterButton = () => {

    const dispatch = useDispatch();

    const currentFilter = useSelector((state) => state.filter);

    const handleFilter = (filter) => {
        dispatch(filterTodos(filter))
    }


  return (
    <div className='flex space-x-4  items-center mb-4 '>
        <select 
            value={currentFilter}
            onChange={(e) => handleFilter(e.target.value)}
            className='text-lg px-4 py-2 rounded-md border-gray-300 focus:outline-none'>
            <option value="ALL">Default</option>
            <option value="COMPLETED">Completed</option>
            <option value="INCOMPLETED">Incomplete</option>
        </select>

        <button 
        onChange={() => dispatch(markAllCompleted())}
        className='bg-fuchsia-500 px-4 py-2 text-white font-semibold rounded-lg cursor-pointer hover:scale-105 transition-all duration-700'>Mark All Completed</button>
    </div>
  )
}

export default FilterButton