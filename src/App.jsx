import React, { useState, useEffect } from 'react'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firbase.js'

const App = () => {

    const [isUser, setIsUser] = useState(true);
    const user = auth.currentUser;
    
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
        
          if (user) {
        
            
            // const uid = user.uid;
            setIsUser(user)
            
          } else {
            console.log("No user Found");

            
          }
        }, []);
      })

    

  return (
    <BrowserRouter>
    <Routes>
      <Route path='home' element={isUser ? <Home username= {isUser} /> : <Login />}/>
      <Route path='/' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App