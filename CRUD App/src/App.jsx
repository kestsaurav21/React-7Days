import React, { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import AddContact from './components/AddContact'
import NoContact from './components/NoContact'
import ContactModal from './components/ContactModal'


const App = () => {


  const [showModal, setShowModal ] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (

    <div className='bg-gray-900 w-screen h-screen flex flex-col items-center p-10 relative'>
      {
        showModal && <ContactModal closeModal={closeModal} />
      }
      <Header />
      <div className='w-[80%] flex items-center justify-between'>
        <SearchBar />
        <AddContact openModal={openModal} />
      </div>
      <NoContact />
      {/* <ContactModal /> */}
      
      
    </div>

  )
}

export default App