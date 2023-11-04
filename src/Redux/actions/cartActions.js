export function addToCart(element){
    return{
        type:"ADD_ITEM_TO_CART",
        item:{
            id:element.id,
            image:element.thumbnail,
            title:element.title,
            discount:element.discountPercentage,
            price:element.price,
            finalPrice: (element.price - (element.discountPercentage*element.price)*0.01),
        }
    }
}

export function removeFromCart(id){
    return{
        type:"REMOVE_ITEM_FROM_CART",
        id:id
    }
}

export function reset(element){
    return{
        type:"DEFAULT"
    }
}