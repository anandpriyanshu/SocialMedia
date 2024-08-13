import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost from './components/CreatePost.jsx'
import CardList from './components/CardList.jsx'


const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      { path: '/', element: <CardList /> },
      { path: '/create-post', element: <CreatePost /> }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
