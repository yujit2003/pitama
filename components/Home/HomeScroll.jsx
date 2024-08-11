import React from 'react';
import scrollHome from "../../images/home_scroll.jpg";
import Image from 'next/image';

const HomeScroll = () => {
  return (
    <div className="overflow-hidden relative w-full">
      <div className="mk-photo-roller-frame">
        <Image
          width={2000}
          height={150}
          alt="Policy"
          src={scrollHome}
          className="w-full h-full object-cover"
        />
        <Image
          width={2000}
          height={150}
          alt="Policy"
          src={scrollHome}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default HomeScroll;
