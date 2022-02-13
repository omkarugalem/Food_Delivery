import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Authcomponent/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Authcomponent/Login";
import PasswordReset from "./Components/Authcomponent/PasswordReset";
import PhoneAuth from "./Components/Authcomponent/PhoneAuth";
import Home from "./Home";
import DineIn from "./Components/Food/DineIn";
import AddProducts from "./Components/Food/AddProducts";
import Navbar from "./Components/HeaderComp/Navbar";
import CreatePost from "./Components/Food/CreatePost";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/phone-auth" element={<PhoneAuth />} />
        <Route path="dine-in" element={<DineIn />} />
        <Route path="add-to-products" element={<AddProducts />} />
        <Route path="create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;
