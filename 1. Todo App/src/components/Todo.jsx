import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateSearch } from '../redux/actions';
import { IoSearchSharp } from "react-icons/io5";

const Todo = () => {

  const dispatch = useDispatch()

  const [ taskName, setTaskName ] = useState('');

  const [ searchTerm, setSearchTerm ] = useState('')

  const handleAddTodo = () => {
    dispatch(addTodo(taskName))
    setTaskName('')
  }

  const handleAddTodoClick = () => {

    if (taskName.trim() !== '') {
      handleAddTodo()
    }
  }

  const handleSearch = (value) => {
    setSearchTerm(value)
    dispatch(updateSearch(value))


  }

  return (
    <div className='max-w-3xl mx-auto sm:mt-8 p-4 bg-slate-800 rounded'>
        <h2 className='text-2xl text-white text-center uppercase mt-3 mb-6 font-bold '>Todo Application</h2>

        {/* input text and button  */}

        <div className='flex justify-evenly items-center'>
            <input 
            className='w-[80%] p-2  border-2 border-white rounded-md focus:outline-none focus:border-blue-500' 
            type="text" 
            placeholder='Add a task'
            name='taskName'
            id='taskName'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={handleAddTodoClick}
            className='bg-violet-800 px-4 py-2 text-white font-bold text-2xl rounded-md cursor-pointer hover:scale-110 transition-all duration-900 focus:outline-none focus:border-2 border-white'>+</button>
        </div>

        {/* filter and search */}

        <div className='mt-8 flex  justify-end items-center'>

          <div className='flex items-center justify-center mb-4 gap-5 '>
          <input 
            className=' p-2  border-2 border-white rounded-md focus:outline-none focus:border-blue-500' 
            type="text" 
            placeholder='Search Here ...'
            name='searchTerm'
            id='searchTerm'
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            />
          
          <button className='bg-black p-3 text-white font-bold text-2xl rounded-md cursor-pointer hover:scale-110 transition-all duration-900 focus:outline-none focus:border-2 border-white'>
            <IoSearchSharp className='text-white text-2xl' />
          </button>
          </div>
         

        </div>

    </div>
  )
}

export default Todo