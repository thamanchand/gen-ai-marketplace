"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCog, FaPlus, FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { v4 } from "uuid";
import { useSession } from "next-auth/react";

export const creatorsData = [
  {
    image: "https://picsum.photos/id/237/200/300",
    price: "22",
  },
  {
    image: "https://picsum.photos/id/237/200/300",
    price: "22",
  },
];
const Profile = () => {
  const imageURL = `http://localhost:1337/uploads/medium_Default_American_traditional_tattoo_of_a_beautiful_Latin_woman_0_90efccbd_533a_48b7_8bd0_94715000a03f_1_9dccfd31be.jpg`;
  const { data: session, status } = useSession();

  return (
    <section className="w-screen bg-gray-100  py-12 md:w-auto">
      <div className="container mx-auto">
        <div className="group relative  rounded-xl shadow-md transition-transform  dark:shadow-gray-200">
          <img
            src={imageURL}
            alt=""
            className="h-80 w-full rounded-xl object-cover "
          />

          <div className="absolute bottom-[-14%] left-1/2 z-10 -translate-x-1/2">
            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full shadow-lg ring-4 ring-slate-50 transition-transform hover:scale-105 dark:ring-slate-800">
              <img
                src="https://picsum.photos/id/237/200/300"
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-50 transition-opacity duration-500 group-hover:opacity-70" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="relative text-center">
          <h5 className="mb-1 text-xl font-semibold">Jenny Jimenez </h5>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="inline-flex items-center rounded-full bg-violet-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-violet-700">
              <FaPlus size="18" /> <span className="px-2">Follow</span>
            </div>
            <Link
              href="/add"
              className="rounded-full bg-gradient-to-r from-purple-400 to-pink-600 p-2 transition duration-300 hover:bg-purple-500"
            >
              <FaUserPlus size="24" className="text-white" />
            </Link>
            {status === "unauthenticated" && (
              <Link
                href="/profile-edit"
                className="rounded-full bg-gradient-to-r from-purple-400 to-pink-600 p-2 transition duration-300 hover:bg-purple-500"
              >
                <FaCog size="24" className="text-white" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {creatorsData.map((item) => (
          <div
            key={v4()}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-slate-900 dark:hover:shadow-gray-700"
          >
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt=""
                layout="responsive"
                width={500}
                height={500}
                className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            <div className="flex items-center justify-between">
              <Link
                href="/add"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-400 to-pink-600 px-3 py-2 text-white transition duration-300 hover:bg-purple-500"
              >
                <FaShoppingCart className="mr-2" /> Buy now
              </Link>

              <Link
                href="/add"
                className="rounded-full bg-gradient-to-r from-purple-400 to-pink-600 p-2 transition duration-300 hover:bg-purple-500"
              >
                <FaPlus className="text-white" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profile;
