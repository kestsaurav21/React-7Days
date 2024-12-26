import React from 'react'

const AddContact = ({ openModal }) => {
  return (
        <button 
        onClick={openModal}
        className='bg-white w-[38px] h-[38px] sm:w-[60px] sm:h-[60px] text-black font-bold text-md sm:text-4xl p-2 rounded-full'>
            +
        </button>
  )
}

export default AddContact