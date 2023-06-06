
import './App.css';
import ReactDOM from "react-dom/client";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import NoPage from './components/NoPage';
import Coupons from './components/Coupons';
import History from './components/History';
import ShoppingCart from './components/ShoppingCart';



function App() {
  let [basket,setBasket] = useState([])
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home basket={basket} setBasket={setBasket} />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="history" element={<History />} />
          <Route path="shoppingCart" element={<ShoppingCart basket={basket} setBasket={setBasket} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
