import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>

          <p className="text-gray-500 mt-2">Login to your Airbnb account</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Username or Email
            </label>

            <input
              type="text"
              placeholder="Enter your username or email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-rose-500 font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <div className="text-center mt-7 text-sm text-gray-600">
          Don't have an account?
          <Link
            to="/signup"
            className="text-rose-500 font-semibold ml-1 hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
