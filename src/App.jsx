import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Login from '@pages/Login/Login'
import Signup from '@pages/Signup/Signup'
import Profile from '@pages/Profile/Profile'
import Companyprofile from '@pages/Signup/Companyprofile'

const App = () => {
  return (
   <>
   <Routes >
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/profile' element={<Profile />}/>
    <Route path='/companyprofile' element={<Companyprofile />} />
   </Routes>
   </>
  )
}

export default App