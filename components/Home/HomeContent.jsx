"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import scrollHome from "../../images/homecontent.jpeg";

const HomeContent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center box-border m-4 md:mt-20 mt-6 px-4 overflow-hidden bg-[#e5e7eb]">
      {/* Image Column (2/3 of the area) */}
      <div className="md:w-2/3 flex justify-center m-4 md:m-0">
        <Image
          width={1000}
          height={600}
          alt="Policy"
          src={scrollHome}
          className="w-full md:h-[600px] h-[40vh] object-cover rounded-md shadow-lg"
        />
      </div>

      {/* Content Column (1/3 of the area) */}
      <div className="md:w-1/3 font-serif relative m-4 z-10 wpb_wrapper text-center md:text-left px-6">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="md:text-5xl text-xl font-bold text-[#374151] tracking-tight">
            Our Story
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-80 text-sm md:text-xl 0 leading-relaxed"
        >
          <p>
            Pitama Foods is an independent provider of premium food products,
            specializing in a diverse range of carefully curated selections.
            From wholesome grains and aromatic spices to refreshing beverages,
            we prioritize quality and freshness in every product.
          </p>
          <p className="pt-6 text-sm md:text-xl">
            Our mission is to bring ethically sourced, high-quality ingredients
            to homes and businesses, ensuring a delightful culinary experience
            while maintaining competitive pricing.
          </p>
        </motion.div>

        {/* Tagline */}
        {/* <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8"
        >
          <h2 className="text-sm md:text-2xl font-pacifico text-[#a8b2b8] font-bold">
            Elevating Every Meal with Quality You Can Trust.
          </h2>
        </motion.div> */}

        {/* Button */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6"
        >
          <a href="/products">
            <button className="bg-[#374151] text-white hover:bg-[#a8b2b8] hover:text-[#374151] transition-all duration-300 py-3 px-6 text-lg font-semibold rounded-md shadow-md">
              Browse Products
            </button>
          </a>
        </motion.div> */}
      </div>
    </div>
  );
};

export default HomeContent;
