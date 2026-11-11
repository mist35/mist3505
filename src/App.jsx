import React from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./pages/home";
import Acc from "./pages/acc";
import Men from "./pages/men";
import Products from "./pages/Products";
import Shoes from "./pages/shoes";
import Sports from "./pages/sports";
import New from "./pages/new";
import Language from "./pages/language";
import Store from "./pages/store";
import Join from "./pages/join";
import Login from "./pages/login";
import SeasonOff from "./pages/seasonOff";
import Orders from "./pages/orders";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
import CustomerService from "./pages/customerService";
import Detail from "./pages/detail";
import Country from "./pages/country";
import Program from "./pages/program";

function App(){   

    const navigate = useNavigate();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/acc" element={<Acc />} />
        <Route path="/pages/men" element={<Men />} />
        <Route path="/pages/women" element={<Products />} />
        <Route path="/pages/shoes" element={<Shoes />} />
        <Route path="/pages/sports" element={<Sports />} />
        <Route path="/pages/new" element={<New />} />
        <Route path="/pages/language" element={<Language />} />
        <Route path="/pages/store" element={<Store />} />
        <Route path="/pages/join" element={<Join />} />                   
        <Route path="/pages/login" element={<Login />} />
        <Route path="/pages/seasonoff" element={<SeasonOff />} />
        <Route path="/pages/orders" element={<Orders />} />
        <Route path="/pages/wishlist" element={<Wishlist />} />
        <Route path="/pages/cart" element={<Cart />} />
        <Route path="/pages/customerService" element={<CustomerService />} />
        <Route path="/pages/Detail" element={<Detail />}/>
        <Route path="/pages/country" element={<Country />} />
        <Route path="/pages/Program" element={<Program />}/>
      </Routes>
      <Footer />
    </>
  )
  }
  export default App