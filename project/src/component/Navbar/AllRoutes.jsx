import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "../../Pages/Home"
import Login from "../../Pages/Login"
import Register from "../../Pages/Register"
import Cart from '../../Pages/Cart'

import Skincare from '../../Pages/Skincare'
import Makeup from '../../Pages/makeup'
import Hair from '../../Pages/Hair'
import Payment from '../../Pages/Payment'
import PrivateRoute from "./Private"


const AllRoutes = () => {
  return (
    <>
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/registar' element={<Register/>}/>
         <Route path='/cart' element={ <PrivateRoute><Cart/></PrivateRoute>}/>
       
         <Route path="/skincare" element={<Skincare/>}/>
         <Route path="/hair" element={<Hair/>}/>
         <Route path="/makeup" element={<Makeup/>}/>
         <Route path="/payment" element={<Payment/>}/>
         
    </Routes>
    </>
  )
}

export default AllRoutes