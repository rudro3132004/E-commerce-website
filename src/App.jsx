import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import BrandProducts from './pages/BrandProducts'
import NotFound from './pages/NotFound'
import MainProduct from './pages/MainProduct'
import UserRegister from './pages/UserRegister'
import UserLogIn from './pages/UserLogIn'
import Footer from './pages/Footer'
import WebScroll from './context/WebScroll'


const App = () => {
  return (
    <div>
       <Navbar/>
       
       < WebScroll />
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<UserLogIn/>} />
          <Route path='/register' element={<UserRegister/>} />
          <Route path='/brand-/:brand' element={<BrandProducts/>} />
          <Route path='/product-/:id' element={<MainProduct/>} />
          <Route path='*' element={<NotFound/>} />
       </Routes>

       <Footer/>

    </div>
  )
}

export default App