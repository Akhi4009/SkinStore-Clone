export const reducer=(state,action)=>{
    switch(action.type){
        case ("add_to_cart"):
            return [...state,action.payload];
            case ("remove_from_cart"):{
                const cartAfterRemoval=state.filter(item=>item.title!==action.payload)
                return cartAfterRemoval
            };
            case ("checkout"):{
                return []
            }
                

            default:
                return state
    }
}
