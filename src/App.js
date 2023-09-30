import {  Routes, Route } from 'react-router-dom';

import Lay from './components/Lay';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';



import ProductProvider from './contexts/ProductContext';
import CartProvider from './contexts/CartContext';
import SidebarProvider from './contexts/SidebarContext';


const App = () => {
  return ( 
    <div className='overflow-hidden' >
    
      <SidebarProvider>
        <CartProvider>  
          <ProductProvider>
                <Routes>
                  <Route path='/'  element={ <Lay  />  } >
                      
                    <Route index  element={ <Home  /> } />
                    <Route path='/product/:id' element={ <ProductDetails /> } />
            
                  </Route>
                </Routes>
          </ProductProvider>      
        </CartProvider>
      </SidebarProvider>
      
    </div> 
  )
};

export default App;



// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Lay from './components/Lay';
// import Home from './pages/Home';
// import ProductDetails from './pages/ProductDetails';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Sidebar from './components/Sidebar';

// const App = () => {
//   return ( 
//     <div className='overflow-hidden' >
    
//     <Router>
//           <Header />
            
//               <Routes>
                

//                   <Route path='/'  element={ <Home  /> } />
//                   <Route path='/product/:id' element={ <ProductDetails /> } />
          
               
//               </Routes>
           
//           <Sidebar />
//           <Footer />  
//           </Router>
//     </div> 
//   )
// };

// export default App;


