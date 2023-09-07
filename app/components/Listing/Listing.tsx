"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";
import { useQuery } from "react-query";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { v4 } from "uuid";

import type { ListingDetail } from "@/types";

import Hero from "../Hero/Hero";
import TopCreators from "../TopCreators/TopCreators";
// import { getArtImageLoader } from "@/utils/getImageLoader";

const IMAGE_URL = process.env.STRAPI_PUBLIC_API_URL;

export const getArtImageLoader = (url: string) => {
  console.log("image_url", `${IMAGE_URL}${url}`);
  return `${IMAGE_URL}${url}`;
};
const fetchListings = async () => {
  const response = await axios.get("http://localhost:1337/api/arts?populate=*");
  return response.data;
};

const Listing: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("New");
  const [activeTimeFilter, setActiveTimeFilter] = useState("24h");

  const {
    data: listings,
    isLoading,
    isError,
  } = useQuery("listings", fetchListings);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching listings</p>;

  return (
    <section>
      <Hero />

      <main className="w-screen  p-6 py-3 mx-auto ">
        {/* Sort & Filter */}
        <div className="mb-4 mt-4 flex flex-col-reverse space-y-4 space-y-reverse md:flex-row md:justify-between md:space-y-0">
          <div className="flex flex-wrap space-x-2 md:space-x-4">
            {["Trending", "New", "Top"].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded font-bold transition duration-300 ease-in-out mt-2 ${
                  activeFilter === filter
                    ? "border-2 border-purple-400 text-purple-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-700 hover:text-white px-6 py-2"
                    : "bg-white hover:bg-gray-200 px-5 py-2"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap space-x-2 md:space-x-4">
            {["24h", "7d", "30d", "Max"].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveTimeFilter(filter)}
                className={`rounded font-bold transition duration-300 ease-in-out mt-2 ${
                  activeTimeFilter === filter
                    ? "border-2 border-purple-400 text-purple-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-700 hover:text-white px-6 py-2"
                    : "bg-white hover:bg-gray-200 px-5 py-2"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        {/* Listings */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry
            columnsCount={3}
            gutter="10px"
            className="masonry gap-4 md:grid md:grid-cols-2 lg:grid-cols-3"
          >
            {listings.data.map((art: any) => (
              <Link key={art.id} href={`/listing-detail/${art.id}`}>
                <div
                  key={v4()}
                  className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={getArtImageLoader(
                      art?.attributes?.imageUrl?.data?.attributes?.formats.small
                        .url || ""
                    )}
                    alt={art.attributes.title}
                    width={
                      art?.attributes?.imageUrl?.data?.attributes?.formats.small
                        .width
                    }
                    height={
                      art?.attributes?.imageUrl?.data?.attributes?.formats.small
                        .height
                    }
                    loading="lazy"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={getArtImageLoader(
                      `${art?.attributes?.imageUrl?.data?.attributes?.formats.small.url}?auto=format,compress&q=1&blur=500&w=2`
                    )}
                  />

                  <div className="absolute inset-0 p-4 opacity-0 transition-opacity duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                          A
                        </div>
                        <div className="text-white">Author 1</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-heart text-white" />{" "}
                        {/* Assuming you're using Font Awesome */}
                        <span className="text-white">123</span>{" "}
                        {/* Replace 123 with the actual count */}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h2 className="font-bold text-white">
                        {art.attributes.title}
                      </h2>
                      <p className="text-sm text-white">
                        {art.attributes.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </main>
      <TopCreators />
    </section>
  );
};

export default Listing;
