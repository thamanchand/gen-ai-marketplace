import React, { useState, useEffect, useRef } from "react";
import SignOutButton from "../../auth/signout";
import { PiUserBold } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import UserNavLink from "./UserNavLink";
import { User } from "@/types/user";

type Props = {
  user?: User;
};

const ProfileDropDown: React.FC<Props> = ({ user }) => {
  const userPhoto = user?.picture;
  const userId = user?.id;

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropDown = () => setIsDropDownOpen(!isDropDownOpen);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropDownOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="font-semibold py-2 pr-4 pl-0 inline-flex items-center"
        onClick={toggleDropDown}
        aria-haspopup="true"
        aria-expanded={isDropDownOpen}
      >
        <Image
          className="rounded-full transition-all duration-400 ease-in-out border-4 group-hover:border-slate-500"
          src={userPhoto as string}
          width={40}
          height={40}
          alt="User Photo"
        />
      </button>
      {isDropDownOpen && (
        <div className="opacity-100 dark:bg-slate-800 bg-slate-100 transition-all duration-400 ease-in-out rounded-2xl dropdown-menu absolute z-10 w-screen max-w-[260px] sm:right-[1rem] mt-[1rem] px-2 py-4">
          <UserNavLink user={user} />
          <div className="dark:text-slate-300 px-4 space-y-4">
            <div>
              <Link href={`/my-account?user=${userId}`}>
                <span className="flex items-center space-x-2">
                  <PiUserBold size={24} />
                  <span>My Account</span>
                </span>
              </Link>
            </div>
            <div>
              <SignOutButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
