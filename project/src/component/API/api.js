
const register=(data)=>{
    return fetch("http://localhost:8080/user/register",{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(data)
   }).then(res=>res.json())
   
}

const login=(data)=>{
    return fetch("http://localhost:8080/user/login",{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(data)
   }).then(res=>res.json())
   
}


export {register,login}