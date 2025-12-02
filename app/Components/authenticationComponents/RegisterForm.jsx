"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
      } else {
        router.push("/login"); // success → redirect to login
      }
    } catch (err) {
      setError("Something went wrong!");
    }

    setLoading(false);
  };

  const handleSocialLogin = async (provider) => {
    setLoading(true);
    await signIn(provider, { callbackUrl: "/dashboard" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 min-w-[300px]">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Creating your account...
            </p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="input-style w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="input-style w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password (min 6 chars)"
          className="input-style w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded text-white font-medium ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <span className="text-center mt-4">Or Sign Up with</span>
        <div className="flex justify-center items-center gap-4 mb-6">
          <div
            onClick={() => handleSocialLogin("github")}
            className="w-[50px] h-[50px] bg-gray-200 dark:bg-gray-700 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaGithub size={22} />
          </div>
          <div
            onClick={() => handleSocialLogin("google")}
            className="w-[50px] h-[50px] bg-gray-200 dark:bg-gray-700 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FcGoogle size={22} />
          </div>
        </div>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
