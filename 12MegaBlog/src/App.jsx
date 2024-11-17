import React, { useState, useEffect} from 'react'
import { useDispatch } from  'react-redux'

import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Outlet } from 'react-router-dom'
import { Header } from './components'
import { Footer } from './components'

function App() {
 const [loading, setloading] = useState(true)
 const dispatch = useDispatch()

 useEffect(() => {
     authService.getCurrentUser()
     .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout({userData}))
      }
     })
     .finally(() => setloading(false))
 }, [])

  return !loading ? (
    <div className='flex flex-wrap content-between min-h-screen bg-gray-400'>
      <div className='block w-full'>
        <Header />
        <main>
          TODO: {/* <Outlet/> */}
        </main>
        <Footer />
      </div>
       </div>
  ) : null
}

export default App
