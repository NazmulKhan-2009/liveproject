// const {combineReducers}=require('redux')
// const {ourTeamReducers}=require("./components/OurTeam/OurTeam.reducers")
// const {ourTeamReducers}=require("./components/OurTeam.reducers")

import {combineReducers} from "redux"
import {ourTeamReducers} from "./components/OurTeam/OurTeam.reducers"
import { ShopCatergoriesReducer } from "./components/ShopCategories/ShopCatergories.reducer";
import cartReducer from "./reducers/cart.reducer";
// import cartReducer from "./reducers/cart";
import productReducers from "./reducers/products.reducers";


export const rootReducer=combineReducers({
 teamMembers:ourTeamReducers,
 shopCategories:ShopCatergoriesReducer,
 cart:cartReducer,
 products:productReducers
})