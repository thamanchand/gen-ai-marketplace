import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  const imageURL = `http://localhost:1337/uploads/medium_Default_American_traditional_tattoo_of_a_beautiful_Latin_woman_0_90efccbd_533a_48b7_8bd0_94715000a03f_1_9dccfd31be.jpg`;

  return (
    <div className="container mx-auto h-[600px]">
      {/* Content */}
      <div className="relative  flex h-full flex-col items-center justify-between px-4 md:flex-row md:px-16">
        {/* Left Column */}
        <div className="mb-8 w-full space-y-4 md:mb-0 md:w-1/2">
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-5xl">
            <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
              Buy and Sell
            </span>
          </h1>
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
            <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
              AI generated images
            </span>
          </h3>
          <p className="text-gray-600">
            Your ultimate hub for buying and selling unique artworks generated
            by artificial intelligence.
          </p>
          <div className="flex space-x-4">
            <button
              type="button"
              className="rounded-lg bg-gradient-to-r from-purple-400 to-pink-600 px-6 py-3 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-700"
            >
              Start selling
            </button>
            <button
              type="button"
              className="rounded-lg border-2 border-purple-400 px-6 py-3 font-bold text-purple-400   hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-700 hover:text-white "
            >
              Explore
            </button>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-full px-4 md:w-1/2 md:px-10">
          <div className="relative rounded-lg bg-white shadow-lg">
            {/* Popular Tag */}
            <div className="absolute right-2 top-2 flex items-center space-x-2 rounded-lg bg-gradient-to-r from-purple-600 via-purple-600 to-transparent px-3 py-1 text-white">
              <FaStar />
              <span>POPULAR</span>
            </div>

            <img
              src={imageURL}
              alt="Popular Art"
              className="h-48 w-full rounded-t-lg object-cover"
            />
            <div className="space-y-4 p-4">
              <h2 className="text-2xl font-bold text-black">
                Anime Pastel Dream
              </h2>
              <p className="text-gray-600">
                Pastel anime styling. Use with PMv3 and the anime preset for
                incredible range. Model by Lykon.
              </p>
              <button
                type="button"
                className=" w-full rounded-lg bg-gradient-to-r from-purple-400 to-pink-600 px-4 py-2 font-semibold text-white transition-opacity duration-300 hover:opacity-90"
              >
                <Link
                  href="/listingdetail/2"
                  className="no-underline hover:no-underline focus:no-underline "
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <span className="text-white no-underline hover:no-underline focus:no-underline">
                    Buy
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
