import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CreatePost from './components/CreatePost'
import CardList from './components/CardList'
import PostListProvider from './store/post-list-store'
const App = () => {

  const [selectedTab, setselecteTab] = useState(" ")
  return (

    <PostListProvider>
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
    </PostListProvider>


  )
}

export default App