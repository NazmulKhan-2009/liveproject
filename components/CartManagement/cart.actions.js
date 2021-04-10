import { ADD_TO_CART, DELETE_CART, UPDATE_PRODUCT_QUANTITY } from "./cart.actionType";

export const addToCart=(product)=>({
 type:ADD_TO_CART,
 payload:product
})

export const deleteCart=(productId)=>({
 type:DELETE_CART ,
 payload:productId
})

export const updateProductQuantity=(productId,quantity)=>({
  type:UPDATE_PRODUCT_QUANTITY,
  payload:{productId,quantity}
})
