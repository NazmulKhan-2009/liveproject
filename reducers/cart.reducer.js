import { ADD_TO_CART, DELETE_CART, UPDATE_PRODUCT_QUANTITY } from "../components/CartManagement/cart.actionType";

const cartReducer=(state=[],action)=>{
//  let cartId=Math.random()
 switch (action.type) {
  case ADD_TO_CART:
   // return [...state,{...action.payload,cartId}]
   const previousCartItem=[...state]

   let isProductInCart=false;

   for(let i=0; i<previousCartItem.length;i++){
     const product=previousCartItem[i]
     if(product.id===action.payload.id){
       product.quantity+=1
       isProductInCart=true;
       break; //!note:- break means no loop require upon find the data
     }
   }

   if(!isProductInCart){
     action.payload.quantity=1
    //  action.payload.cartId=cartId
     previousCartItem.push(action.payload)
   }

  
   return previousCartItem


  case DELETE_CART:
   return state.filter(product=>action.payload!==product.id)
  
  case UPDATE_PRODUCT_QUANTITY:

  const existingCart=[...state]
    for(let i=0; i<existingCart.length; i++){
       const product=existingCart[i]
       if(product.id===action.payload.productId){
          product.quantity=parseInt(Math.ceil(action.payload.quantity))  
          break
       }
       
       
    }
   return existingCart

  default:return state;
 }

}

export default cartReducer

