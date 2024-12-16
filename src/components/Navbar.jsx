import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg text-white">
      <div className="flex justify-between items-center mx-auto px-6 py-4 container">
        {/* Logo */}
        <Link
          to="/"
          className="font-extrabold text-4xl text-white hover:text-yellow-300 tracking-wide transition-all duration-300"
        >
          Job<span className="text-yellow-300">Portal</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="md:flex space-x-8 hidden text-lg">
          <Link
            to="/"
            className="hover:text-yellow-300 transform transition duration-300 ease-in-out hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/jobs"
            className="hover:text-yellow-300 transform transition duration-300 ease-in-out hover:scale-110"
          >
            Jobs
          </Link>
          <Link
            to="/Register"
            className="hover:text-yellow-300 transform transition duration-300 ease-in-out hover:scale-110"
          >
            Register
          </Link>
          <Link
            to="/Signin"
            className="hover:text-yellow-300 transform transition duration-300 ease-in-out hover:scale-110"
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transform transition duration-300 ease-in-out hover:scale-110"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="space-y-4 md:hidden bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg px-6 py-4">
          <Link
            to="/"
            className="block text-lg text-white hover:text-yellow-300 transform transition hover:translate-x-2 duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/jobs"
            className="block text-lg text-white hover:text-yellow-300 transform transition hover:translate-x-2 duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            Jobs
          </Link>
          <Link
            to="/Register"
            className="block text-lg text-white hover:text-yellow-300 transform transition hover:translate-x-2 duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
          <Link
            to="/Signin"
            className="block text-lg text-white hover:text-yellow-300 transform transition hover:translate-x-2 duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className="block text-lg text-white hover:text-yellow-300 transform transition hover:translate-x-2 duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
