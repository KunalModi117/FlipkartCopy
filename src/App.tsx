import './App.css';
import ProductListingPage from './components/productListingPage';
import ProductDetailsPage from './components/productDetails';
import CartPage from './components/cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListingPage />} />
          <Route path='/products/details/:id' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
