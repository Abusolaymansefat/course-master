"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialLogin from "./SocialLogin";
import Link from "next/link";
import LoadingOverlay from "./LoadingOverlay";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.error) {
      setError(res.error || "Login failed");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <LoadingOverlay loading={loading} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-style w-full mt-2"
            placeholder="Enter email"
            disabled={loading}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-style w-full mt-2"
            placeholder="Enter password"
            disabled={loading}
            required
          />
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 rounded-full mt-4 w-full font-medium text-lg ${
            loading
              ? "bg-gray-400 cursor-not-allowed text-gray-200"
              : "bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-gray-100 hover:bg-[var(--color-primary-dark)] dark:hover:bg-[var(--color-primary)]"
          }`}
        >
          Login
        </button>
      </form>

      <span className="mt-6 text-center block">Or Sign In with</span>
      <SocialLogin />

      <span className="text-center block mt-4">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="text-[var(--color-primary)] dark:text-[var(--color-primary-dark)]"
        >
          Register
        </Link>
      </span>
    </div>
  );
}
