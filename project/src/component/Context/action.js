export const addToCart=(value)=>({
    type:"add_to_cart",
    payload:value
})
export const removeFromCart=(title)=>(
{
    type:"remove_from_cart" ,
    payload:title
}
)
export const checkout=()=>({
type:"checkout"
})