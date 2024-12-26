import React from 'react'
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className='flex items-center justify-start bg-gray-600 p-2 rounded-xl my-10 w-[75%] sm:w-[80%] gap-2'>
        <IoMdSearch className='text-3xl text-white' />
        <input 
        className='bg-transparent w-[80%] text-white text-md sm:text-xl font-semibold outline-none cursor-pointer'
        type="text" 
        placeholder="Type here..."
         />
    </div>
  )
}

export default SearchBar