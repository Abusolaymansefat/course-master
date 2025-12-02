// app/register/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setMsg(data.error || "Registration failed");
    } else {
      setMsg("Registered successfully. Redirecting to login...");
      setTimeout(() => router.push("/login"), 1500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        {msg && <div className="mb-3">{msg}</div>}

        <form onSubmit={handleSubmit}>
          <input className="w-full border p-2 rounded mb-3" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required />
          <input className="w-full border p-2 rounded mb-3" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <input type="password" className="w-full border p-2 rounded mb-3" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />

          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Create Account</button>
        </form>
      </div>
    </div>
  );
}
