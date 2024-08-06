import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CreatePost from './components/CreatePost'
import CardList from './components/CardList'
const App = () => {

  const [selectedTab, setselecteTab] = useState(" ")
  return (



    <div className='app-container'>

      <SideBar selectedTab={selectedTab} setselecteTab={setselecteTab} />

      <div className='content'>

        <Header />
        {
          selectedTab === 'Home' ? <CardList /> : <CreatePost />
        }


        <Footer />
      </div>

    </div>


  )
}

export default App