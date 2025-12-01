"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 shadow rounded">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Google Login Button */}
        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center space-x-2 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="w-5 h-5"
          />
          <span>Login with Google</span>
        </button>

        <p className="mt-4 text-center text-gray-600">
          Don’t have an account? <a href="/register" className="text-blue-600">Register</a>
        </p>
      </div>
    </div>
  );
}
