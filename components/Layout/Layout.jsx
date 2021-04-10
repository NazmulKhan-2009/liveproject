
import Header from '../Layout/components/Header/Header'

import Footer from './components/Footer/Footer';



export default function Layout({children}) {
 return (
  <>
   

   <Header />

   {children}

   <Footer/>

   <a
        href="#"
        id="back-to-top"
        title="Back to top"
        style={{ display: "none" }}
      >
        &uarr;
  </a>

  

  
  </>
 )
}


