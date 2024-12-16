import React from 'react';
import Lottie from 'lottie-react';
import animationData from "../assets/Animation - 1734369243575.json";

const Register = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 min-h-screen">
      <div className="space-y-8 bg-white shadow-xl p-10 rounded-xl w-full max-w-md">
        <div className="flex justify-center items-center mb-8">
          <Lottie animationData={animationData} loop={true} />
        </div>

        <div>
          <h2 className="mb-8 font-extrabold text-4xl text-center text-gray-800">
            Create Your Account <span role="img" aria-label="sparkles">✨</span>
          </h2>
          <form>
            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 ease-in-out focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 ease-in-out focus:outline-none"
              />
            </div>
            <div className="mb-8">
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 ease-in-out focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg w-full text-white transform transition duration-300 ease-in-out hover:scale-105"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-blue-600 hover:underline transition duration-300 ease-in-out"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
