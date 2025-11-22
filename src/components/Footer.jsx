import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content pt-12 pb-6 border-t border-rose-100">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand Section */}
                <div>
                    <h2 className="text-3xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-3">
                        LifeBondz
                    </h2>
                    <p className="text-sm leading-6 text-gray-600">
                        A trusted and professional matrimony platform helping individuals
                        find their perfect life partner with love, respect, and compatibility.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-rose-500">Quick Links</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="hover:text-rose-500 cursor-pointer transition">Home</li>
                        <li className="hover:text-rose-500 cursor-pointer transition">Biodata</li>
                        <li className="hover:text-rose-500 cursor-pointer transition">Blogs</li>
                        <li className="hover:text-rose-500 cursor-pointer transition">Contact</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-rose-500">Support</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="hover:text-rose-500 cursor-pointer transition">About Us</li>
                        <li className="hover:text-rose-500 cursor-pointer transition">Privacy Policy</li>
                        <li className="hover:text-rose-500 cursor-pointer transition">Terms & Conditions</li>
                        <li className="hover:text-rose-500 cursor-pointer transition">Help Center</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-rose-500">Stay Connected</h3>
                    <p className="text-sm text-gray-600 mb-3">Subscribe for tips, stories & updates</p>
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            placeholder="Email address" 
                            className="input input-bordered w-full rounded-xl"
                        />
                        <button className="btn bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl px-6">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center mt-10 pt-6 border-t border-gray-300 text-sm text-gray-600">
                © {new Date().getFullYear()} LifeBondz — All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;