import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/MyAccount";
import Cart from "./pages/Cart";
import MyAccount from "./pages/MyAccount";
import Favorite from "./pages/Favorite";
import { HashRouter as Router, Routes,  Route } from "react-router-dom";
import Catalog from './pages/Catalog'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
