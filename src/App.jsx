import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CreatePost from './components/CreatePost'
import CardList from './components/CardList'
const App = () => {
  return (


    <div className='app-container'>

      <SideBar />

      <div className='content'>

        <Header />
        <CreatePost />
        <CardList />
        <Footer />
      </div>

    </div>


  )
}

export default App