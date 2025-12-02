"use client";

export default function LoadingOverlay({ loading, message = "Logging you in..." }) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 min-w-[300px]">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{message}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          Please wait while we authenticate your account
        </p>
      </div>
    </div>
  );
}
