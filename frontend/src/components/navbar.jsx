import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Home } from "../pages/home/home";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}

        <Link to="/" className="text-2xl font-semibold text-rose-500">
          <i className="fa-brands fa-airbnb"></i> airbnb
        </Link>

        {/* Center Navigation */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive ? "text-rose-500" : "text-gray-600 hover:text-black"
              }`
            }
          ></NavLink>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-6">
          <Link
            to="/newadd"
            className="text-sm font-semibold text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full"
          >
            Airbnb your home
          </Link>

          <Link
            to="/signup"
            className="text-sm font-medium text-gray-700 hover:text-rose-500"
          >
            Signup
          </Link>

          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-rose-500"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};
