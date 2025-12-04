import React, { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
    const { googleLogin, createAccount } = useContext(AuthContext);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Save user to DB
    const saveUserToServer = async (user) => {
        await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
    };

    // Google Registration
    const handleGoogleRegister = async () => {
        setError("");
        setSuccess("");

        try {
            const result = await googleLogin();
            const user = result.user;

            await saveUserToServer({
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                role: "user",
                createdAt: new Date(),
            });

            setSuccess("Google login successful! Redirecting...");
            setTimeout(() => (window.location.href = "/"), 1200);

        } catch (err) {
            setError("Google login failed. Try again.");
        }
    };

    // Manual registration
    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoURL = form.photo.value;

        if (password.length < 6) {
            return setError("Password must be at least 6 characters long.");
        }

        if (password !== confirm) {
            return setError("Passwords do not match.");
        }

        try {
            const result = await createAccount(name, email, password, photoURL);
            const user = result.user;

            await saveUserToServer({
                name,
                email,
                photoURL,
                role: "user",
                createdAt: new Date(),
            });

            setSuccess("Registration successful! Redirecting...");
            form.reset();

            setTimeout(() => (window.location.href = "/login"), 1500);

        } catch (err) {
            setError("Registration failed. Email may already be in use.");
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-rose-50 py-12 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">

                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
                    Create Your Account
                </h2>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-600 text-center mb-4">{success}</p>}

                {/* Google Register Button */}
                <button
                    onClick={handleGoogleRegister}
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-2 mb-6 hover:shadow-lg transition-all duration-300"
                >
                    <FcGoogle className="w-6 h-6" />
                    <span className="text-gray-700 font-medium">
                        Continue with Google
                    </span>
                </button>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">OR Register Using Email</span>
                    </div>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleRegister} className="space-y-4">

                    <input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        className="w-full border border-gray-300 px-4 py-2 rounded-xl"
                        required
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className="w-full border border-gray-300 px-4 py-2 rounded-xl"
                        required
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 px-4 py-2 rounded-xl"
                        required
                    />

                    <input
                        name="confirm"
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full border border-gray-300 px-4 py-2 rounded-xl"
                        required
                    />

                    <input
                        name="photo"
                        type="url"
                        placeholder="Profile Photo URL (optional)"
                        className="w-full border border-gray-300 px-4 py-2 rounded-xl"
                    />

                    <button
                        type="submit"
                        className="bg-rose-600 hover:bg-rose-700 text-white w-full py-2 rounded-xl font-semibold shadow-md transition"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-4">
                    Already have an account?
                    <a href="/login" className="text-rose-600 ml-1 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Register;
