import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Navbar } from "./components/navbar";
import { Signup } from "./pages/auth/signup";
import { Login } from "./pages/auth/login";
import { ListingData } from "./pages/add/listing";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-listing" element={<ListingData />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
