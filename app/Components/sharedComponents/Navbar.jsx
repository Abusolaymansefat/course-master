"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { motion } from "framer-motion";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <motion.nav
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]/90 shadow-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3">

        {/* Logo */}
        <motion.div variants={fadeInItem}>
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image src="/logo.png" width={96} height={60} alt="Logo" />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          variants={fadeInItem}
          className="hidden md:flex items-center gap-6 text-white font-medium"
        >
          <Link href="/" className="hover:text-gray-100 hover:drop-shadow-lg transition">
            Home
          </Link>

          <Link href="/courses" className="hover:text-gray-100 hover:drop-shadow-lg transition">
            Courses
          </Link>

          {session ? (
            <>
              <Link href="/dashboard" className="hover:text-gray-100 transition">
                Dashboard
              </Link>

              <button
                onClick={() => signOut()}
                className="px-4 py-1 rounded-md bg-white/20 hover:bg-white/30 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-gray-100 transition">
                Login
              </Link>

              <Link
                href="/register"
                className="px-4 py-1 rounded-md bg-white/20 hover:bg-white/30 transition"
              >
                Register
              </Link>
            </>
          )}
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          variants={fadeInItem}
          className="text-3xl text-white md:hidden"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.8 }}
        >
          {open ? "✖" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="md:hidden text-white bg-gradient-to-b from-[var(--color-primary)]/95 to-[var(--color-secondary)]/95 backdrop-blur-lg shadow-xl border-t border-white/10"
        >
          <Link href="/" className="block px-5 py-3 border-b border-white/10 hover:bg-white/10">
            Home
          </Link>

          <Link href="/courses" className="block px-5 py-3 border-b border-white/10 hover:bg-white/10">
            Courses
          </Link>

          {session ? (
            <>
              <Link href="/dashboard" className="block px-5 py-3 border-b border-white/10 hover:bg-white/10">
                Dashboard
              </Link>

              <button
                onClick={() => signOut()}
                className="block w-full text-left px-5 py-3 hover:bg-white/10"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="block px-5 py-3 border-b border-white/10 hover:bg-white/10">
                Login
              </Link>

              <Link href="/register" className="block px-5 py-3 hover:bg-white/10">
                Register
              </Link>
            </>
          )}
        </motion.div>
      )}
    </motion.nav>
  );
}
