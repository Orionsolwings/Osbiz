import React, { useState } from 'react'
import { Routes, Route , Navigate} from 'react-router-dom'
import "./App.css"
import Login from '@pages/Login/Login'
import Signup from '@pages/Signup/Signup'
import Profile from '@pages/Profile/Profile'
import Companyprofile from '@pages/Signup/Companyprofile'
import ProtectedRoute from "@components/ProtectedRoute"
import LoginProtectedRoute from "@components/LoginProtectedRoute"
import Dashboard from '@pages/Dashboard/Dashboard'

import AuthLayout from '@components/auth/AuthLayout'
import BussinessPartner from '@pages/BusinesPartner/BussinessPartner'
import AddBussinessPartner from '@pages/BusinesPartner/AddBussinessPartner'


const App = () => {
  const [isLogin ,setIsLogin] = useState(localStorage.getItem("isLogin") === "true" || false);
  return (
   <>
   <Routes >
    <Route
        path="/"
        element={
          !isLogin ? <Login setIsLogin={setIsLogin} /> : <Navigate to="/dashboard" replace />
        }
      />
      <Route
        path="/signup"
        element={!isLogin ? <Signup /> : <Navigate to="/dashboard" replace />}
      />
      <Route path='/companyprofile' element={
        !isLogin ? <ProtectedRoute> <Companyprofile /> </ProtectedRoute>  : <Navigate to="/dashboard" replace />
      } />

      <Route
        path="/dashboard"
        element={
          <LoginProtectedRoute isLogin={isLogin}>
            <AuthLayout>
              <Dashboard />
            </AuthLayout>
          </LoginProtectedRoute>
        }
      />

      <Route
        path="/businesspartner"
        element={
          <LoginProtectedRoute isLogin={isLogin}>
            <AuthLayout>
              <BussinessPartner />
            </AuthLayout>
          </LoginProtectedRoute>
        }
      />
      <Route
        path="/businesspartner/creatabussinesspartner"
        element={
          <LoginProtectedRoute isLogin={isLogin}>
              <AddBussinessPartner/>
          </LoginProtectedRoute>
        }
      />


    <Route
        path="/profile"
        element={
          <LoginProtectedRoute isLogin={isLogin}>
            <AuthLayout>
              <Profile />
            </AuthLayout>
          </LoginProtectedRoute>
        }
      />

       <Route
        path="*"
        element={<Navigate to={isLogin ? "/dashboard" : "/"} replace />}
      />
    
   </Routes>
   </>
  )
}

export default App