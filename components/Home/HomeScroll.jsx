"use client";

import React from "react";

const HomeScroll = () => {
  return (
    <div className="relative   w-full md:h-[80vh] h-screen overflow-hidden">
      <video
        src="/videos/main.MP4"
        controls // 👈 Enables play/pause manually
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default HomeScroll;
