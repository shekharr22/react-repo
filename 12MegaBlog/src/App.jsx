import React, { useState, useEffect} from 'react'
import { useDispatch } from  'react-redux'

import './App.css'
import authService, { AuthService } from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Outlet } from 'react-router-dom'
import { Header } from './components'
import { Footer } from './components'
import service, { Service } from './appwrite/config'

function App() {
 const [loading, setloading] = useState(true)
 const dispatch = useDispatch()

 useEffect(() => {
  authService.getCurrentUser()
     .then((userData) => {
      if (userData) {
        console.log(userData)
        dispatch(login({userData}))
      }else{
        console.log(userData)
        dispatch(logout({userData}))
      }
     })
     .finally(() => setloading(false))
     
    // const createAccount = async () => {
    //   console.log(await authService.createAccount())
    // }
    // createAccount()
    
    // const login = async () => {
    //   console.log(await authService.login())
    // }
    // login()
    
    //  const a = async () => {
    //   console.log(await service.getPosts())
    //  }
    //  a()
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
