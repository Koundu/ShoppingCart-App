const initialState = {
    cart: []
}

export const getTotal = (cart)=>{
    return(
        cart.reduce((amount,item) => item.finalPrice+amount,0)
    )
}

export function cartReducer(state=initialState,action){
    switch(action.type) {
        case "ADD_ITEM_TO_CART":
                const addItem = state.cart.findIndex((cartItem) => cartItem.id === action.item.id)    
                if(addItem>0){
                    alert("Item Already Added to the Cart")
                }else{
                    return{
                        ...state,cart:[...state.cart,action.item]
                    }
                }
        break;


        case "REMOVE_ITEM_FROM_CART":
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)
            let newCart = [...state.cart]
            if(index>=0){
                newCart.splice(index,1)
            }
            else{
                console.warn("Can not be deleted!");
            }
            return{
                ...state,cart:newCart
            }   
        break;  
                    
        default:
            return state;
    }
}

