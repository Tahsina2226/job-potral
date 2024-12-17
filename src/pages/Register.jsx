import React from "react";
import Lottie from "lottie-react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import animationData from "../assets/Animation - 1734369243575.json";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password validation
    const passwordCriteria = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    if (!passwordCriteria.length) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (!passwordCriteria.uppercase) {
      alert("Password must contain at least one uppercase letter.");
      return;
    }

    if (!passwordCriteria.number) {
      alert("Password must contain at least one number.");
      return;
    }

    if (!passwordCriteria.specialChar) {
      alert("Password must contain at least one special character.");
      return;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // TODO: Replace with API call for registration
    console.log({ email, password });
    alert("Registration successful!");
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-6 min-h-screen">
      <div className="space-y-8 bg-white shadow-2xl p-10 rounded-2xl w-full max-w-4xl">
        {/* Animation */}
        <div className="flex justify-center items-center bg-gray-100 shadow-inner mb-8 p-4 rounded-xl">
          <Lottie animationData={animationData} loop={true} style={{ height: 150 }} />
        </div>

        {/* Heading */}
        <h2 className="font-extrabold text-4xl text-center text-gray-800">
          Create Your Account <span role="img" aria-label="sparkles">✨</span>
        </h2>
        <p className="text-center text-gray-500 text-sm">
          Join us and start exploring the amazing features we offer!
        </p>

        {/* Form */}
        <form onSubmit={handleRegister} className="gap-6 grid grid-cols-1 md:grid-cols-2">
          {/* Full Name */}
          <div className="mb-6">
            <label htmlFor="fullName" className="block mb-2 font-medium text-gray-700">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              className="border-gray-300 hover:shadow-md px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 ease-in-out focus:outline-none"
            />
          </div>

          {/* Username */}
          <div className="mb-6">
            <label htmlFor="username" className="block mb-2 font-medium text-gray-700">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Choose a username"
              className="border-gray-300 hover:shadow-md px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 ease-in-out focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="border-gray-300 hover:shadow-md px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 ease-in-out focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="border-gray-300 hover:shadow-md px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 ease-in-out focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              className="border-gray-300 hover:shadow-md px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 ease-in-out focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2 font-medium text-gray-700">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="border-gray-300 hover:shadow-md px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 ease-in-out focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 hover:from-purple-600 to-purple-600 hover:to-blue-600 shadow-lg py-3 rounded-lg w-full font-semibold text-white transform transition duration-300 ease-in-out hover:scale-105"
            >
              Register
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center mt-6">
          <div className="flex-grow border-gray-300 border-t"></div>
          <span className="px-3 text-gray-500 text-sm">or continue with</span>
          <div className="flex-grow border-gray-300 border-t"></div>
        </div>

        {/* Social Buttons */}
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

        {/* Sign In Link */}
        <p className="mt-8 text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/signin"
            className="font-medium text-blue-600 hover:underline transition duration-300 ease-in-out"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
