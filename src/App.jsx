import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import Navbars from './components/Navbar';
import LoginSignUp from './pages/login/LoginSignUp';
import SignUp from './pages/signup/SignUp';
import Categories from './pages/categories/Categories';
import Books from './pages/books/Books'; 
import AllBooks from './pages/books/AllBooks';

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
          <Route path='/Categories' element={<Categories />} />
          <Route path='/AllBooks' element={<AllBooks />} />
          <Route path="/kitaplar/:categoryID" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
