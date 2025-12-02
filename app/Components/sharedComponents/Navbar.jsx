"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const { data: session } = useSession(); // get logged-in user

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link href="/" className="font-bold text-xl flex items-center">
            <Image src="/logo.png" alt="Logo" width={96} height={60} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/courses" className="hover:text-gray-200">Courses</Link>

            {/* {session ? (
              <>
                <Link href="/dashboard" className="hover:text-gray-200">Dashboard</Link>
                <button
                  onClick={() => signOut()}
                  className="hover:text-gray-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="hover:text-gray-200">Login</Link>
            )} */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <Link href="/" className="block px-4 py-2 hover:bg-blue-600">Home</Link>
          <Link href="/courses" className="block px-4 py-2 hover:bg-blue-600">Courses</Link>

          {/* {session ? (
            <>
              <Link href="/dashboard" className="block px-4 py-2 hover:bg-blue-600">Dashboard</Link>
              <button
                onClick={() => signOut()}
                className="block w-full text-left px-4 py-2 hover:bg-blue-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="block px-4 py-2 hover:bg-blue-600">Login</Link>
          )} */}
        </div>
      )}
    </nav>
  );
}
