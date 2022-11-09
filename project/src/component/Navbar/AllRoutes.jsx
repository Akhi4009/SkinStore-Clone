import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Cart from '../Pages/Cart'
import Help from '../Pages/Help'


const AllRoutes = () => {
  return (
    <>
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/registar' element={<Register/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path="/help" element={<Help/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes