"use client";
import React from "react";
import { motion } from "framer-motion";

const HomeContent = () => {
  return (
    <div className="relative box-border md:mt-20 mt-6 px-4 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#ff6b00] to-[#ff3b3b] opacity-20 blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      />

      {/* Fade effect at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none"></div>

      <div className="relative z-10 wpb_wrapper">
        <div className="hidden sm:block h-10"></div>

        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="text-5xl font-bold text-[#ff6b00] tracking-tight">
            Pitama Foods
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto text-gray-800 leading-relaxed"
        >
          <p>
            Pitama Foods is an independent provider of premium food products,
            specializing in a diverse range of carefully curated selections.
            From wholesome grains and aromatic spices to refreshing beverages,
            we prioritize quality and freshness in every product.
          </p>
          <p className="pt-6">
            Our mission is to bring ethically sourced, high-quality ingredients
            to homes and businesses, ensuring a delightful culinary experience
            while maintaining competitive pricing.
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <h2 className="text-3xl font-pacifico text-[#ff3b3b] font-bold">
            Elevating Every Meal with Quality You Can Trust.
          </h2>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-center"
        >
          <a href="/products">
            <button className="bg-[#ff3b3b] mb-6 text-white hover:bg-[#ff6b00] transition-all duration-300 py-3 px-6 text-lg font-semibold rounded-md shadow-md">
              Browse Products
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeContent;
