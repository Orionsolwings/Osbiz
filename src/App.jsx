import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Login from '@pages/Login/Login'
import Signup from '@pages/Signup/Signup'
import Profile from '@pages/Profile/Profile'
import Companyprofile from '@pages/Signup/Companyprofile'
import ProtectedRoute from "@components/ProtectedRoute"
import Dashboard from '@pages/Dashboard/Dashboard'


const App = () => {
  const [isLogin ,setIsLogin] = useState(true)
  return (
   <>
   <Routes >
    <Route path='/' element={!isLogin ? <Login setIsLogin={setIsLogin}/> : <Dashboard />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/profile' element={<Profile />}/>
    <Route path='/companyprofile' element={
      <ProtectedRoute>
        <Companyprofile />
      </ProtectedRoute>
      } />
   </Routes>
   </>
  )
}

export default App