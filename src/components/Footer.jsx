import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] py-10 text-white">
      <div className="mx-auto px-6 container">
        <div className="gap-10 grid grid-cols-1 md:grid-cols-3 text-center md:text-left">
          {/* Section 1: About */}
          <div>
            <h3 className="mb-4 font-bold text-3xl text-yellow-300">About 🌟</h3>
            <p className="text-gray-300 leading-relaxed">
              JobPortal is your gateway to a better career. 🚀 <br /> Find jobs, grow your network, and achieve your dreams with us.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="mb-4 font-bold text-3xl text-yellow-300">Quick Links 🔗</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out"
                >
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out"
                >
                  💼 Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out"
                >
                  📝 Register
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out"
                >
                  🔑 Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out"
                >
                  📞 Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div>
            <h3 className="mb-4 font-bold text-3xl text-yellow-300">Follow Us 🌐</h3>
            <div className="flex justify-center md:justify-start space-x-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transform transition duration-300 hover:scale-110"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transform transition duration-300 hover:scale-110"
              >
                <FaTwitter size={32} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transform transition duration-300 hover:scale-110"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transform transition duration-300 hover:scale-110"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-gray-600 my-8 border-t-2"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm tracking-wide">
            &copy; {new Date().getFullYear()} JobPortal. All Rights Reserved. ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
