import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";

const Navbar = () => {
  const { user, role, logoutUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Biodata", path: "/biodata" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contacts", path: "/contacts" },
  ];

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-rose-500 font-semibold transition"
      : "text-gray-700 hover:text-rose-500 transition";

  return (
    <div className="bg-white/80 backdrop-blur-xl border-b border-rose-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent select-none"
        >
          LifeBondz
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkStyle}>
              {link.name}
            </NavLink>
          ))}

          {/* Role Based Dashboard */}
          {user && role === "user" && (
            <NavLink to="/user-dashboard" className={linkStyle}>
              User Dashboard
            </NavLink>
          )}
          {user && role === "admin" && (
            <NavLink to="/admin-dashboard" className={linkStyle}>
              Admin Dashboard
            </NavLink>
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-5 py-2 border border-rose-400 text-rose-500 rounded-xl hover:bg-rose-50 transition font-semibold"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl shadow hover:scale-105 transition font-semibold"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={logoutUser}
              className="px-5 py-2 bg-rose-500 text-white rounded-xl shadow hover:bg-rose-600 transition font-semibold"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-rose-100 transition"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-xl border-t border-rose-100 px-5 py-4 space-y-4 animate-fadeDown">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block text-lg text-gray-700 hover:text-rose-500 font-medium transition"
            >
              {link.name}
            </NavLink>
          ))}

          {/* Role based mobile dashboard */}
          {user && role === "user" && (
            <NavLink
              to="/user-dashboard"
              onClick={() => setOpen(false)}
              className="block text-lg text-gray-700 hover:text-rose-500 transition"
            >
              User Dashboard
            </NavLink>
          )}
          {user && role === "admin" && (
            <NavLink
              to="/admin-dashboard"
              onClick={() => setOpen(false)}
              className="block text-lg text-gray-700 hover:text-rose-500 transition"
            >
              Admin Dashboard
            </NavLink>
          )}

          <div className="border-t pt-4">
            {!user ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center py-2 border border-rose-400 text-rose-500 rounded-xl font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center py-2 mt-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold shadow"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  logoutUser();
                  setOpen(false);
                }}
                className="block w-full text-center py-2 bg-rose-500 text-white rounded-xl font-semibold"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
