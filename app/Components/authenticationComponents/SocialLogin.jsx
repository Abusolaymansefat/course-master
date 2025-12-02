"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function SocialLogin() {
  const handleSocialLogin = (provider) => {
    signIn(provider);
  };

  return (
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
  );
}
