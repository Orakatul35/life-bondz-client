import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const linkStyle =
    "hover:text-rose-500 transition-colors duration-300 cursor-pointer";

  return (
    <footer className="bg-gray-50 text-gray-800 pt-16 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            LifeBondz
          </h2>
          <p className="text-sm leading-6 text-gray-600">
            A trusted matrimony platform helping individuals find their perfect life partner with love, respect, and compatibility.
          </p>
        </div>

        {/* Quick Links — EXACT MATCH WITH NAVBAR ROUTES */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-rose-500">Quick Links</h3>
          <ul className="space-y-3">

            <li>
              <NavLink to="/" className={linkStyle}>Home</NavLink>
            </li>

            <li>
              <NavLink to="/biodatas" className={linkStyle}>Biodatas</NavLink>
            </li>

            <li>
              <NavLink to="/blogs" className={linkStyle}>Blogs</NavLink>
            </li>

            <li>
              <NavLink to="/contacts" className={linkStyle}>Contact Us</NavLink>
            </li>

          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-rose-500">Support</h3>
          <ul className="space-y-3">

            <li>
              <NavLink to="/aboutus" className={linkStyle}>About Us</NavLink>
            </li>

            <li className={linkStyle}>Privacy Policy</li>
            <li className={linkStyle}>Terms & Conditions</li>
            <li className={linkStyle}>Help Center</li>

          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-rose-500">Stay Connected</h3>
          <p className="text-sm text-gray-600 mb-4">Subscribe for tips, stories & updates</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-rose-300 transition"
            />
            <button className="btn bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl px-6 hover:scale-105 transform transition">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500 flex flex-col sm:flex-row justify-center items-center gap-2">
        <span>© {new Date().getFullYear()} LifeBondz</span>
        <span>— All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
