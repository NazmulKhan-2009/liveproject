import { useSelector } from "react-redux";
////import ShopCategories from "./ShopCategories";
//! try to understand difference between .js and .jsx where ourteam impoeted  as js and shopcategories imported as .jsx 
import ShopCategories from "./ShopCategories.jsx";

export default function ShopCategoriesContainer() {

 const shopCategories=useSelector(state=>state.shopCategories)

 return <ShopCategories categories={shopCategories}/>
}
