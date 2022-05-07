import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';
import React from "react";
import Bought from './pages/Bought';
import AversiMap from './pages/AversiMap';



import { useEffect, useState } from "react";
import Personal from './pages/Personal';

const queryClient = new QueryClient()



function App() {

  const [favoriteId, setFavoriteId] = useState([]);
  const [cart, setCart] = useState([]);
  const [images, setImages] = useState([]);

  function uploadImg(imageList){
      setImages(imageList);
  
  }

  function makeFavorite(e){
    let array = [...favoriteId];
    if(array.includes(e)){
      setFavoriteId(favoriteId.filter(item => item !== e))
    }else{
      setFavoriteId([...favoriteId, e]);
    }
  };


  function addToCart(itemId, itemAmount){
    if(itemId == 0){
      setCart([]);
      return
    }
    let condition = true
    cart.forEach(item =>{
      if(item.id === parseInt(itemId)){
        item.amount += parseInt(itemAmount);
        condition = false
        return
      }      
    })

    if(condition){
      setCart([...cart, {id: parseInt(itemId), amount : parseInt(itemAmount) }]);
    }
  };

  function updateCart(itemId, action){
    console.log('nini')
    cart.forEach(item =>{
      if(item.id === parseInt(itemId)){
        item.amount += action;
        return
      }      
    })
  };

  return (
    
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home favoriteList={favoriteId} makeFavorite={makeFavorite}/>} />
      <Route path="/product" element={<Products favoriteList={favoriteId} makeFavorite={makeFavorite} />} />
      <Route path="/product/:productId" element={<Product addToCart={addToCart} favoriteId={favoriteId} makeFavorite = {makeFavorite}/>} />
      <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart} updateCart={updateCart}/>} />
      <Route path="/buy" element={<Bought/>} />
      <Route path="/map" element={<AversiMap/>} />
      <Route path="/personal" element={<Personal uploadImg={uploadImg} images={images}/>} />
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    
  );
}

export default App;

