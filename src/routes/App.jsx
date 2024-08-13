
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import PostListProvider from '../store/post-list-store'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
const App = () => {

  const [selectedTab, setselecteTab] = useState("Home")

  return (

    <PostListProvider>
      <div className='app-container'>

        <SideBar selectedTab={selectedTab} setselecteTab={setselecteTab} />

        <div className='content'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>


  )
}

export default App