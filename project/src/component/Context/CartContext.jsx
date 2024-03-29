import React,{createContext,useReducer} from 'react'
import {reducer} from "./reducer"

export const CartContext=createContext()

const CartContextProvider = ({children}) => {

  const initState={
    data:[]
  }
  
const [state,dispatch]=useReducer(reducer,initState)
  return <CartContext.Provider value={{state,dispatch}}>

    {children}
  </CartContext.Provider>;
};

export default CartContextProvider;
