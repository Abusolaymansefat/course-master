"use client";

import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="flex justify-center gap-4 mt-3">
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => signIn("github")}
        className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer"
      >
        <FaGithub size={26} />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => signIn("google")}
        className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer"
      >
        <FcGoogle size={26} />
      </motion.div>
    </div>
  );
}
