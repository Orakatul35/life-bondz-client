import React from 'react';

// Professional Matrimony Style Navbar (Warm Romantic Theme)
// Color Palette: Rose, Blush, Soft Gold, Deep Plum
// Uses DaisyUI + TailwindCSS

const Navbar = () => {
    return (
        <div className="navbar bg-base-100/90 backdrop-blur-lg shadow-md px-4 md:px-10 sticky top-0 z-50 border-b border-rose-100">
            {/* Brand */}
            <div className="flex-1">
                <a className="text-3xl font-extrabold tracking-wide cursor-pointer bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                    LifeBondz
                </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-lg font-medium items-center">
                <a className="hover:text-rose-500 transition cursor-pointer">Home</a>
                <a className="hover:text-rose-500 transition cursor-pointer">Biodata</a>
                <a className="hover:text-rose-500 transition cursor-pointer">Blogs</a>
                <a className="hover:text-rose-500 transition cursor-pointer">Contact</a>
            </div>

            {/* Login / Register Buttons */}
            <div className="hidden md:flex gap-4 items-center ml-6">
                <button className="btn px-6 btn-outline border-rose-400 text-rose-500 hover:bg-rose-50 font-semibold rounded-xl">Login</button>
                <button className="btn px-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-lg rounded-xl hover:scale-105 transition-all">Register</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-5 shadow-xl bg-base-100 rounded-xl w-56">
                    <li><a className="text-base">Home</a></li>
                    <li><a className="text-base">Biodata</a></li>
                    <li><a className="text-base">Blogs</a></li>
                    <li><a className="text-base">Contact</a></li>
                    <div className="border-t my-3"></div>
                    <li><a className="btn w-full btn-outline border-rose-400 text-rose-500 font-semibold rounded-xl">Login</a></li>
                    <li><a className="btn w-full mt-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-lg rounded-xl">Register</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;