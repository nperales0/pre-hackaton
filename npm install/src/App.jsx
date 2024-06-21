import { useState } from 'react'
import {BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import './App.css'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to= "/login"/> }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path= '/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
