import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Module/Home/Home';
import Footer from './Components/Footer/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Product from './Module/Product/Product';
import Products from './Module/Products/Products';
import CategoriesProducts from './Module/CategoriesProducts/CategoriesProducts';
import Cart from './Module/Cart/Cart';
import Hero from './Components/Hero/Hero';



function App() {
 
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route  path='/products' element={<Products/>}/>
        <Route path='/categories/:name' element={<CategoriesProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/hero' element={<Hero/>}/>

      </Routes >
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App