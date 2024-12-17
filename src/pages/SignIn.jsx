import React from "react";
import Lottie from "lottie-react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import animationData from "../assets/Animation - 1734369243575.json";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-6 min-h-screen">
      <div className="space-y-8 bg-white shadow-2xl p-10 rounded-2xl w-full max-w-lg">
        {/* Lottie Animation */}
        <div className="flex justify-center bg-gray-100 shadow-inner mb-8 p-4 rounded-xl">
          <Lottie animationData={animationData} loop={true} style={{ height: 150 }} />
        </div>

        {/* Heading */}
        <h2 className="font-extrabold text-4xl text-center text-gray-800">
          Welcome Back <span role="img" aria-label="wave">👋</span>
        </h2>
        <p className="text-center text-gray-500 text-sm">
          Sign in to continue to your account.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border-gray-300 hover:shadow-md px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 ease-in-out focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border-gray-300 hover:shadow-md px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 ease-in-out focus:outline-none"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox w-4 h-4 text-blue-600 transition duration-300 ease-in-out"
              />
              <span className="ml-2 text-gray-600">Remember Me</span>
            </label>
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline transition duration-300 ease-in-out"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 hover:from-purple-600 to-purple-600 hover:to-blue-600 shadow-lg py-3 rounded-lg w-full font-semibold text-white transform transition duration-300 ease-in-out hover:scale-105"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center mt-6">
          <div className="flex-grow border-gray-300 border-t"></div>
          <span className="px-3 text-gray-500 text-sm">or continue with</span>
          <div className="flex-grow border-gray-300 border-t"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-6 mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 shadow-lg p-3 rounded-full text-white transition duration-300">
            <FaFacebook size={20} />
          </button>
          <button className="bg-red-600 hover:bg-red-700 shadow-lg p-3 rounded-full text-white transition duration-300">
            <FaGoogle size={20} />
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 shadow-lg p-3 rounded-full text-white transition duration-300">
            <FaTwitter size={20} />
          </button>
        </div>

        {/* Redirect to Register */}
        <p className="mt-8 text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-blue-600 hover:underline transition duration-300 ease-in-out"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
