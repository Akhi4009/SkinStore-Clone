import React,{createContext,useReducer} from 'react'

export const AuthContext=createContext()

export const action={
    type:"login"
    }

    const reducer=(state,action)=>{
if(action.type==="login"){
    return{...state,isAuth:true}
}
    }

const initState={
    isAuth:false,
    }
const AuthContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initState)
  return (
    <AuthContext.Provider value={{state,dispatch}}>
{children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider