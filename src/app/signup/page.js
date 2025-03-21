"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:9090/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          gender,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register.");
      }

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data)); // Save user data
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Failed to register. Please try again.");
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
          <h2 className="text-3xl font-bold text-gray-700 text-center mb-4">Create Account</h2>
          <p className="text-gray-500 text-center mb-6">
            Fill in your details to register an account.
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border text-black rounded-lg shadow-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border text-black rounded-lg shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border text-black rounded-lg shadow-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <select
              className="w-full p-3 border text-black rounded-lg shadow-sm"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border text-black rounded-lg shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border text-black rounded-lg shadow-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
            >
              Sign Up
            </button>

            <p className="text-center text-gray-500">
              Already have an account?{" "}
              <span
                onClick={() => router.push("/signin")}
                className="text-blue-500 cursor-pointer font-semibold"
              >
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}