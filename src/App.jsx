import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {  HashRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import Order from "./pages/Order";
import FilterData from "./pages/FilterData";
import ProductDetails from "./pages/ProductDetails";
import BackToTop from "./components/BackToTop";

function App() {
  const [order, setOrder] = useState(null)
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout setOrder={setOrder} />} />
          <Route path="order-confirmation" element={<Order order={order} />} />
          <Route path="filter-data" element={<FilterData />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
        <BackToTop />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
