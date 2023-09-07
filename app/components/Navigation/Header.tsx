"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-screen bg-white p-2 py-3 md:w-auto shadow-sm">
      <div
        className=" flex 
       flex-wrap items-center justify-between"
      >
        <div className="w-full md:w-auto">
          <Link
            href="/"
            className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-3xl font-bold text-transparent no-underline hover:font-extrabold"
          >
            AIPixHub
          </Link>
        </div>

        <div className="mt-4 flex w-full flex-wrap items-center md:mt-0 md:w-auto">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            className="mb-4 mr-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none md:mb-0 md:w-72"
          />

          {status === "unauthenticated" ? (
            <div className="space-x-2">
              <Link href="/auth/login">
                <button
                  type="button"
                  className="mx-auto rounded-lg bg-gradient-to-r from-pink-600 to-purple-400 p-2 px-4 text-white transition duration-300 hover:from-purple-500 hover:to-pink-700"
                >
                  Login
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/newlisting">
                <button
                  type="button"
                  className="rounded-lg bg-gradient-to-r from-purple-400 to-pink-600 p-2 px-4 text-white transition duration-300 hover:from-purple-500 hover:to-pink-700"
                >
                  Start selling
                </button>
              </Link>

              <div>
                <button
                  type="button"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-1 text-white"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <span className="group">
                    <Image
                      className="group-hover:border-opacity-50  inline transition-all duration-400 ease-in-out h-8 w-8 rounded-full border-2 border-white"
                      src={session?.user.picture as string}
                      width={40}
                      height={40}
                      alt="Photo"
                    />
                  </span>
                </button>
                {showDropdown && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-4 z-10 mt-2 min-w-[10rem] max-w-[90vw] mx-auto rounded-lg bg-white p-4 shadow-lg"
                  >
                    <div
                      className={`flex px-1 border-b-[1px] border-slate-100 pb-2 mb-2`}
                    >
                      <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 dark:text-white">
                          {session?.user.name}
                        </span>
                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                          {session?.user.email}
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/profile"
                      className="block rounded-lg p-2 text-black hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      type="button"
                      className="block rounded-lg p-2 text-black hover:bg-gray-100"
                    >
                      Settings
                    </button>
                    <button
                      type="button"
                      className="block rounded-lg p-2 text-black hover:bg-gray-100"
                      onClick={() => signOut()}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
