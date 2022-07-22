
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import ProductContext from './state/productContext';
import Layout from './components/Layout';
import Home from './pages/Home';


const App = () => {
  const [productsInCart, setProductsInCart] = useState([]);

  return (
    <ProductContext.Provider value={{ productsInCart, setProductsInCart }}>
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route exac path='/' element={<Home/>} />
          </Routes>
      </Layout>
    </BrowserRouter>
    
    
    </ProductContext.Provider>
  );
}

export default App;
