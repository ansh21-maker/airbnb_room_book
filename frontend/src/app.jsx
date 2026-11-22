import React from "react";
import { Routes, Route, Router } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Navbar } from "./components/navbar";
import { Newadd } from "./pages/add/Newadd";
import { Signup } from "./pages/auth/signup";
import { Login } from "./pages/auth/login";
import Footer from "./components/footer";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newadd" element={<Newadd />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
