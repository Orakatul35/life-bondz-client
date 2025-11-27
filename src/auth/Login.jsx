import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-rose-50 py-12 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
                    Welcome Back
                </h2>
                <p className="text-gray-600 text-center mb-6">
                    Login to your LifeBondz account or continue with Google
                </p>

                {/* Google Login Button */}
                <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-2 mb-6 hover:shadow-lg transition-all duration-300">
                    <FcGoogle className="w-6 h-6" />
                    <span className="text-gray-700 font-medium">Continue with Google</span>
                </button>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">or</span>
                    </div>
                </div>

                {/* Email & Password Login */}
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="input input-bordered w-full rounded-xl"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full rounded-xl"
                        required
                    />
                    <button type="submit" className="btn bg-rose-600 hover:bg-rose-700 text-white w-full py-2 rounded-xl shadow-md transition-all duration-300">
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-4">
                    Don’t have an account? <a href="/register" className="text-rose-600 font-medium hover:underline">Register</a>
                </p>
            </div>
        </section>
    );
};

export default Login;
