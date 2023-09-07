import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { v4 } from "uuid";

type Creator = {
  avatar: string;
  name: string;
  subtext: string;
  subImages: string[];
};

export const creatorsData: Creator[] = [
  {
    avatar: "https://picsum.photos/id/237/200/300",
    name: "Steven Townsend",
    subtext: "@StreetBoy",
    subImages: [
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/200/300?grayscale",
      "https://picsum.photos/id/237/200/300",
    ],
  },
  {
    avatar: "https://picsum.photos/seed/picsum/200/300",
    name: "Tiffany Betaniturt",
    subtext: "@CutieGirl",
    subImages: [
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/200/300?grayscale",
      "https://picsum.photos/id/237/200/300",
    ],
  },
  {
    avatar: "https://picsum.photos/id/237/200/300",
    name: "Jacqueline Burns",
    subtext: "@ButterFly",
    subImages: [
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/200/300?grayscale",
      "https://picsum.photos/id/237/200/300",
    ],
  },
  {
    avatar: "https://picsum.photos/id/237/200/300",
    name: "Mari Harrington",
    subtext: "@NorseQueen",
    subImages: [
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/200/300?grayscale",
      "https://picsum.photos/id/237/200/300",
    ],
  },
  {
    avatar: "https://picsum.photos/id/237/200/300",
    name: "Floyd Glasgow",
    subtext: "@BigBull",
    subImages: [
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/200/300?grayscale",
      "https://picsum.photos/id/237/200/300",
    ],
  },
  {
    avatar: "https://picsum.photos/id/237/200/300",
    name: "Donna Schultz",
    subtext: "@Angel",
    subImages: [
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/200/300?grayscale",
      "https://picsum.photos/id/237/200/300",
    ],
  },
  {
    avatar: "https://picsum.photos/id/237/200/300",
    name: "Steven Townsend",
    subtext: "@StreetBoy",
    subImages: [
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/200/300?grayscale",
      "https://picsum.photos/id/237/200/300",
    ],
  },
  {
    avatar: "https://picsum.photos/id/237/200/300",
    name: "Tiffany Betaniturt",
    subtext: "@CutieGirl",
    subImages: [
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/200/300?grayscale",
      "https://picsum.photos/id/237/200/300",
    ],
  },
  {
    avatar: "https://picsum.photos/id/237/200/300",
    name: "Jacqueline Burns",
    subtext: "@ButterFly",
    subImages: [
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/200/300?grayscale",
      "https://picsum.photos/id/237/200/300",
    ],
  },
  {
    avatar: "https://picsum.photos/id/237/200/300",
    name: "Mari Harrington",
    subtext: "@NorseQueen",
    subImages: [
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/200/300?grayscale",
      "https://picsum.photos/id/237/200/300",
    ],
  },
];

const TopCreators = () => {
  return (
    <section className="container mx-auto py-8 md:py-12 ">
      <div className="text-center">
        <h1 className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-left text-2xl font-extrabold text-transparent md:text-3xl lg:text-4xl">
          Top creators
        </h1>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
        {creatorsData.map((item) => (
          <div
            key={v4()}
            className="group rounded-lg bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-800"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src={item.avatar}
                  className="h-16 w-16 rounded-full"
                  alt={item.name}
                  width={64}
                  height={64}
                />
                <div>
                  <Link
                    href="/creator-profile"
                    className="text-lg font-semibold transition-colors hover:text-purple-600"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-1 text-gray-500">{item.subtext}</p>
                </div>
              </div>
              <Link
                href="/home"
                className="rounded-full p-2 transition-colors hover:text-purple-600"
              >
                <FaUserPlus size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {item.subImages.map((subitem) => (
                <Link
                  href="/home"
                  key={v4()}
                  className="overflow-hidden rounded-md hover:opacity-90"
                >
                  <Image
                    src={subitem}
                    className="rounded-md object-cover"
                    alt=""
                    layout="responsive"
                    width={104}
                    height={104}
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCreators;
