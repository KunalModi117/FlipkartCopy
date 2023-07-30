import './App.css';
import ProductListingPage from './components/productListingPage';
import ProductDetailsPage from './components/productDetails';
import CartPage from './components/cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
const ob = {
  name: "shila",
  age: 20,
}
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<ProductListingPage />} />
          <Route path='/products/details/:id' element={<ProductDetailsPage />} action={() => { return ob }} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
