import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init"; // Firebase initialization

const SignIn = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    if (!email || !password) {
      setError("Please enter both email and password.");
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Sign-in successful!");
      navigate("/"); // Redirect to dashboard after successful sign-in
    } catch (err) {
      setError("Failed to sign in. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Google sign-in successful!");
      navigate("/"); // Redirect after Google sign-in
    } catch (err) {
      setError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-6 min-h-screen">
      <div className="space-y-8 bg-white shadow-2xl p-10 rounded-2xl w-full max-w-4xl">
        {/* Heading */}
        <h2 className="font-extrabold text-4xl text-center text-gray-800">
          Sign In <span role="img" aria-label="sparkles">✨</span>
        </h2>
        <p className="text-center text-gray-500 text-sm">
          Welcome back! Please sign in to continue.
        </p>

        {/* Form */}
        <form onSubmit={handleSignIn} className="gap-6 grid grid-cols-1 md:grid-cols-2">
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className={`border-gray-300 px-4 py-3 border rounded-lg w-full focus:outline-none transition-all duration-300 ${
                error ? "border-red-500" : "hover:shadow-md focus:ring-2 focus:ring-blue-500"
              }`}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className={`border-gray-300 px-4 py-3 border rounded-lg w-full focus:outline-none transition-all duration-300 ${
                error ? "border-red-500" : "hover:shadow-md focus:ring-2 focus:ring-blue-500"
              }`}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="col-span-1 md:col-span-2 mb-4">
              <p className="text-center text-red-500 text-sm">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105"
              } shadow-lg py-3 rounded-lg w-full font-semibold text-white transition duration-300 ease-in-out`}
            >
              {loading ? "Signing In..." : "Sign In"}
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
          <button
            className="bg-red-600 hover:bg-red-700 shadow-lg p-3 rounded-full text-white transition duration-300"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle size={20} />
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 shadow-lg p-3 rounded-full text-white transition duration-300"
          >
            <FaFacebook size={20} />
          </button>
          <button
            className="bg-blue-400 hover:bg-blue-500 shadow-lg p-3 rounded-full text-white transition duration-300"
          >
            <FaTwitter size={20} />
          </button>
        </div>

        {/* Register Link */}
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
