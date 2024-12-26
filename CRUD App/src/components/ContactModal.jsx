import React from 'react'

const ContactModal = ({  }) => {
  return (
    <>
    <div className='flex flex-col items-center justify-center bg-white p-10 rounded-xl shadow-lg z-50'>
        <h1 className='text-center text-2xl font-bold sm:text-4xl'>Contact Details</h1>
        <form className='flex flex-col justify-start gap-2 w-[80%] sm:w-[90%] my-5 mx-auto'>
          <label htmlFor="name">Name</label>
          <input 
          className=' text-md sm:text-xl font-lg outline-none cursor-pointer border-2 border-black p-1 '
          type="text" 
          id="name" 
          placeholder="Enter Name" />
          <label htmlFor="email">Contact No.</label>
          <input 
          className=' text-md sm:text-xl font-lg outline-none cursor-pointer border-2 border-black p-1'
          type="email" id="email" placeholder="Enter Email" />

          <button
            className='bg-yellow-400 text-white font-semibold text-sm sm:text-lg rounded-xl p-2'
          >Add Contact</button>
        </form>
    </div>
    </>
    
  )
}

export default ContactModal