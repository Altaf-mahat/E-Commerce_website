import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './assets/Navbar/Navbar';
import Home from './Components/home';
import Electronics from './Products/Electronics';
import Cloths from './Fashion/Cloths';
import Food from './Foods/Food';
import Furniture from './Furniture/Furniture';
import Beauty from './Beauty/Beauty';
import Electro from './Electro/Electro';
import HomeProducts from './Components/HomeProducts';


const App = () => {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  // ADD TO CART
  const addToCart = (product) => {

    setCart(prev => {

      const exist = prev.find(item => item.id === product.id);

      if (exist) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];

    });

  };

  // REMOVE ITEM
  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // QUANTITY CHANGE
  const updateQty = (id, type) => {

    setCart(prev =>
      prev.map(item => {

        if (item.id === id) {

          if (type === "inc") {
            return { ...item, qty: item.qty + 1 };
          }

          if (type === "dec" && item.qty > 1) {
            return { ...item, qty: item.qty - 1 };
          }

        }

        return item;

      })
    );

  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
          
        </>
      ),
    },
    {
      path: '/Cloths',
      element: (
        <>
          <Navbar />
          <Cloths addToCart={addToCart}/>
        </>
      ),
    },
    {
      path: '/Electro',
      element: (
        <>
          <Navbar />
          <Electro addToCart={addToCart}/>
        </>
      ),
    },
    {
      path: '/Electronics',
      element: (
        <>
          <Navbar />
          <Electronics addToCart={addToCart}/>
        </>
      ),
    },
    {
      path: '/Food',
      element: (
        <>
          <Navbar />
          <Food addToCart={addToCart}/>
        </>
      ),
    },
    {
      path: '/Beauty',
      element: (
        <>
          <Navbar />
          <Beauty addToCart={addToCart}/>
        </>
      ),
    },
    {
      path: '/Furniture',
      element: (
        <>
          <Navbar />
          <Furniture addToCart={addToCart}/>
        </>
      ),
    },
    
  ]);

  return <RouterProvider router={router} />;
};

export default App;