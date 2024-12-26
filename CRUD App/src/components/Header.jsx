import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='bg-slate-200 h-[10%] w-[90%] rounded-xl flex items-center justify-center gap-5  '>
        <img src={logo} alt="logo" />
        <h1 className='text-xl font-bold sm:text-2xl sm:font-semibold '>Contact App</h1>
    </div>
  )
}

export default Header