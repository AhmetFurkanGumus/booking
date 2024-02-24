import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Navbars from './components/Navbar'
import LoginSignUp from './pages/login/LoginSignUp'
import SignUp from './pages/signup/SignUp'

const App = () => {

  

  return (
    <>


      <Navbars />
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<LoginSignUp />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
