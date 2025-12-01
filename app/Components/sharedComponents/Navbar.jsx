"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            {/* CourseMaster */}
             <Image 
              src="/logo.png" 
              alt="CourseMaster Logo" 
              width={96}
              height={60}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/courses" className="hover:text-gray-200">Courses</Link>
            <Link href="/dashboard" className="hover:text-gray-200">Dashboard</Link>
            <Link href="/login" className="hover:text-gray-200">Login</Link>
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
          <Link href="/dashboard" className="block px-4 py-2 hover:bg-blue-600">Dashboard</Link>
          <Link href="/login" className="block px-4 py-2 hover:bg-blue-600">Login</Link>
        </div>
      )}
    </nav>
  );
}
