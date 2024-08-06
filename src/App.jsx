import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
const App = () => {
  return (


    <div className='app-container'>

      <SideBar />

      <div className='content'>

        <Header />
        <Footer />
      </div>

    </div>


  )
}

export default App