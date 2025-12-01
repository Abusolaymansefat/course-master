"use client";

import Image from "next/image";
import Link from "next/link";

// import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0 font-bold text-lg">
          <Image 
                        src="/logo.png" 
                        alt="CourseMaster Logo" 
                        width={96}
                        height={60}
                      />
        </div>

        {/* Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="/" className="block px-4 py-2 hover:bg-blue-600">Home</Link>
          <Link href="/courses" className="block px-4 py-2 hover:bg-blue-600">Courses</Link>
          <Link href="/dashboard" className="block px-4 py-2 hover:bg-blue-600">Dashboard</Link>
          <Link href="/login" className="block px-4 py-2 hover:bg-blue-600">Login</Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} CourseMaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
