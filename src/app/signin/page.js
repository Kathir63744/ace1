"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    try {
      const response = await fetch("http://localhost:9090/api/users/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign in");
      }
  
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.user)); // Save user data
  
      // Redirect to new page (e.g., `/profile`)
      router.replace("/home");
    } catch (err) {
      setError(err.message || "Failed to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/5153829.jpg')" }}
    >
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex max-w-4xl w-full">
        {/* Left Side - Image */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-6">
          <img src="/12.png" alt="Illustration" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">Welcome Back :)</h2>
          <p className="text-gray-500 text-center mb-6">
            To keep connected, please login with your personal information.
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full p-3 border text-black rounded-lg shadow-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border text-black rounded-lg shadow-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="accent-blue-600"
                />
                <span>Remember Me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login Now"}
            </button>

            <Link
              href="/signup"
              className="w-full bg-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-300 transition block text-center"
            >
              Create Account
            </Link>
          </form>

          {/* Social Login */}
          <p className="text-center text-gray-500 mt-6">Or you can join with</p>
          <div className="flex justify-center space-x-4 mt-3">
            <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition">
              <FaGoogle className="text-red-500" size={20} />
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition">
              <FaFacebook className="text-blue-600" size={20} />
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition">
              <FaTwitter className="text-blue-400" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}