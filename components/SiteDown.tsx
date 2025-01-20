"use client";
import React from 'react';
import siteMan from "../images/siteman.png";
import Image from 'next/image';

const SiteDown = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-800 text-gray-400 p-5">
      <h1 className="text-3xl font-bold mb-4">We’ll Be Back Soon!</h1>
      <p className="text-lg mb-6">
        Our site is temporarily down for maintenance. We’re working hard to get
        things back up and running. Please check back later.
      </p>
      <div className="mb-6">
        <Image
          src={siteMan}
          alt="Maintenance Illustration"
          className="max-w-full h-auto"
        />
      </div>
      <p className="text-base text-gray-400">Thank you for your patience!</p>
    </div>
  );
};

export default SiteDown;
