"use client";

import React from "react";

const HomeScroll = () => {
  return (
    <div className="relative mt-2 mx-10 w-[80wh] h-[30vh]  md:w-[80wh] md:h-[80vh] overflow-hidden">
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
