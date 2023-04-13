export const reducer=(state,action)=>{
   
    switch(action.type){
        case ("cart_data"):
            return {...state,data:action.payload};
            case ("data_change"):{
                
                return {...state,}
            };
            case ("checkout"):{
                return []
            }
                

            default:
                return state
    }
}
