import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>

          <p className="text-gray-500 mt-2">Join us and start exploring</p>
        </div>

        {/* Signup Form */}
        <form className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
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
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-7 text-sm text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="text-rose-500 font-semibold ml-1 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
