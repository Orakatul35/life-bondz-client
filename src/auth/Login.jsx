import React, { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
    const { googleLogin, loginUser } = useContext(AuthContext);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Save Google user to DB (only first time)
    const saveGoogleUser = async (user) => {
        await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                role: "user",
                createdAt: new Date(),
            }),
        });
    };

    // Google Login Handler
    const handleGoogleLogin = async () => {
        setError("");
        setSuccess("");

        try {
            const result = await googleLogin();
            const user = result.user;

            await saveGoogleUser(user);

            setSuccess("Google login successful! Redirecting...");
            setTimeout(() => (window.location.href = "/"), 1000);

        } catch (err) {
            setError("Google login failed. Try again!");
        }
    };

    // Email login
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value;

        try {
            await loginUser(email, password);

            setSuccess("Login successful! Redirecting...");
            form.reset();

            setTimeout(() => (window.location.href = "/"), 1000);

        } catch (err) {
            setError("Invalid email or password.");
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-rose-50 py-12 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
                    Welcome Back
                </h2>
                <p className="text-gray-600 text-center mb-6">
                    Login to your LifeBondz account or continue with Google
                </p>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-600 text-center mb-4">{success}</p>}

                {/* Google Login Button */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-2 mb-6 hover:shadow-lg transition-all duration-300"
                >
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
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className="input input-bordered w-full rounded-xl"
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full rounded-xl"
                        required
                    />
                    <button
                        type="submit"
                        className="btn bg-rose-600 hover:bg-rose-700 text-white w-full py-2 rounded-xl shadow-md transition-all duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-4">
                    Don't have an account?
                    <a href="/register" className="text-rose-600 font-medium hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Login;
