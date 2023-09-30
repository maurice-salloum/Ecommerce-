import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>

    <Router>
      <Routes>
        <Route  path='/*'  element={ <App /> } />
      </Routes>
    </Router>  
  
  </React.StrictMode>

);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import ProductProvider from './contexts/ProductContext';

// import SidebarProvider from './contexts/SidebarContext';
// import CartProvider from './contexts/CartContext';




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <SidebarProvider>
//     {/* <CartProvider> */}
//       <ProductProvider>

//         <React.StrictMode>
//             <App />
//         </React.StrictMode>

//       </ProductProvider>
//     {/* </CartProvider> */}
//   </SidebarProvider>

// );