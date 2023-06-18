
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import MyAccount from "./pages/MyAccount";
import Favorite from "./pages/Favorite";
import { HashRouter as Router, Routes,  Route } from "react-router-dom";
import Catalog from './pages/Catalog'

function App() {
  const user = true
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalog/:gender/:category" element={<Catalog />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;