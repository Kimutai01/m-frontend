import { useState } from "react";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Components/Home/index.jsx";

import { Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import UsersList from "./components/UsersList";
import UserEdit from "./pages/UserEdit";
import ProductList from "./pages/ProductList";
import ProductEdit from "./pages/ProductEdit";
import OrderList from "./pages/OrderList";
import HomeShop from "./pages/HomeShop";
import News from "./Components/News/index.jsx";
import Ticket from "./Components/Ticket/index.jsx";
import Team from "./Components/Team/index.jsx";
import Membership from "./Components/Membership/index.jsx";
import OurClub from "./Components/OurClub/index.jsx";
import NewsList from "./components/NewsList";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/shop" element={<HomeShop />} />
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/team" element={<Team />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/ourclub" element={<OurClub />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart/:id?" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/admin/userlist" element={<UsersList />} />
        <Route path="/admin/user/:id/edit" element={<UserEdit />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/product/:id/edit" element={<ProductEdit />} />
        <Route path="/admin/orderlist" element={<OrderList />} />
        <Route path="/admin/news" element={<NewsList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
