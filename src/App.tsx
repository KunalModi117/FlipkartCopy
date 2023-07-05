import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductListingPage from './components/productlistingpage';
import ProductDetailPage from './components/productdetailpage';
import CartPage from './components/cartpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/products' Component={ProductListingPage} />
          <Route path='/products/detail' Component={ProductDetailPage} />
          <Route path='/cart' Component={CartPage} />
          {/* <ProductListingPage></ProductListingPage> */}
          {/* <ProductDetailPage></ProductDetailPage> */}
          {/* <CartPage></CartPage> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
