"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export const LoginForm = () => {
  // Get the search parameters from the URL
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  // CSS class for the buttons
  const buttonStyle = `
    flex items-center justify-center 
    dark:bg-slate-800 dark:text-white 
    dark:border-slate-800 dark:hover:bg-slate-700 
    border border-gray-300 rounded-lg 
    shadow-md w-full sm:max-w-xs px-6 py-2 
    text-sm font-medium text-gray-800 
    hover:bg-gray-200 hover:shadow-lg 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    focus:ring-blue-500 mb-4 transition-all duration-300
  `;

  // Function to handle sign-in for different providers
  const handleSignIn = (provider: string) => {
    signIn(provider, { callbackUrl });
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      {/* Button for signing in with Google */}
      <button className={buttonStyle} onClick={() => handleSignIn("google")}>
        <FcGoogle size={24} className="mr-2" />
        Continue with Google
      </button>
    </div>
  );
};
