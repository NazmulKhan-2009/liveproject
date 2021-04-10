// ! way My Way=========--------------->Checkout Bellow code 

// const setCat=(shopCategories)=>{

// const outPut=shopCategories.map(item=>
  
//    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={Math.random()}>
//         <div className="shop-cat-box">
//           <img className="img-fluid" src={`images/${item.image}`} alt="" />
//           <a className="btn hvr-hover" href="#">
//             {item.name}
//           </a>
//         </div>
//     </div>
  
  
//   )
//   return outPut
// }




//! way as per tutorial==========-------->Checkout Bellow Code 


////const setCat=(cat)=>{

// //   const shopCat=[]

// //   for (let i = 0; i < cat.length; i++) {
// //     const item=cat[i]
    
// //       const value=<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" >
// //         <div className="shop-cat-box">
// //           <img className="img-fluid" src={`images/${item.image}`} alt="" />
// //           <a className="btn hvr-hover" href="#">
// //             {item.name}
// //           </a>
// //         </div>
// //       </div>

// // shopCat.push(value)
    
// //   }


// //   return shopCat


// // }


// export default function ShopCategories({shopCategories}) {
//  console.log(shopCategories)
//  console.log(setCat(shopCategories))
//  return (
//   <div className="categories-shop">
//     <div className="container">
//       <div className="row">
//         {setCat(shopCategories)}
//       </div>
//     </div>
//   </div>
//  )
// }


//! Check Code Above code ========------------------->



//*Copy Paste code for learning

const renderCategories = (categories) => {
  const categoriesComponentArr = [];
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const categoryComponent = (
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={i}>
        <div className="shop-cat-box">
          <img className="img-fluid" src={`images/${category.image}`} alt="" />
          <a className="btn hvr-hover" href="#">
            {category.name}
          </a>
        </div>
      </div>
    );

    categoriesComponentArr.push(categoryComponent);
  }

  return categoriesComponentArr;
};

export default function ShopCategories({ categories }) {
  return (
    <div className="categories-shop">
      <div className="container">
        <div className="row">{renderCategories(categories)}</div>
      </div>
    </div>
  );
}
