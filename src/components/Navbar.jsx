import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase Authentication methods

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // Store user data
  const navigate = useNavigate(); // Initialize navigate
  const auth = getAuth(); // Firebase auth instance

  // Fetch user data when the component mounts
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Update user state with the logged-in user's data
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [auth]);

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase sign-out
      navigate('/signin'); // Navigate to the sign-in page after logout
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg text-white">
      <div className="flex justify-between items-center mx-auto px-6 py-4 container">
        {/* Logo and Site Title */}
        <Link to="/" className="flex items-center">
          {/* Logo Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0dRX-M1_Acl6dkO-AmVXXOEJmYiH6YfJ9Yg&s" // Path to your logo file (place it in public/logo.png)
            alt="JobPortal Logo"
            className="mr-2 rounded-md w-20 h-10 object-contain" // Styling for the logo
          />
          {/* Site Title */}
          <span className="font-extrabold text-4xl text-white hover:text-yellow-300 tracking-wide transition-all duration-300">
            Job<span className="text-yellow-300">Portal</span>
          </span>
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
            to="/register"
            className="hover:text-yellow-300 transform transition duration-300 ease-in-out hover:scale-110"
          >
            Register
          </Link>
          <Link
            to="/signin"
            className="hover:text-yellow-300 transform transition duration-300 ease-in-out hover:scale-110"
          >
            Sign In
          </Link>

          {/* If user is logged in */}
          {user && (
            <div className="flex items-center space-x-4 ml-auto">
              {/* User Profile Image and Hoverable Details */}
              <div className="relative group">
                {/* Profile Image */}
                <Link to="/profile">
                  <img
                    src={user.photoURL || 'https://via.placeholder.com/40'}
                    alt="User"
                    className="border-2 border-white rounded-full w-10 h-10 object-cover"
                  />
                </Link>

                {/* Hoverable User Details */}
                <div className="group-hover:block left-0 absolute hidden bg-gray-700 mt-2 px-2 py-1 rounded-md text-sm text-white">
                  <p className="font-bold">{user.displayName || 'User Name'}</p>
                  <p>{user.email}</p>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm text-white"
              >
                Log Out
              </button>
            </div>
          )}

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
            to="/register"
            className="block text-lg text-white hover:text-yellow-300 transform transition hover:translate-x-2 duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
          <Link
            to="/signin"
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
