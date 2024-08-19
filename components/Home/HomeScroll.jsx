import React from 'react';
import scrollHome from "../../images/home_scroll.jpg";
import Image from 'next/image';

const HomeScroll = () => {
  return (
    <div className="overflow-hidden relative w-full md:h-[50vh]">
      <div className="mk-photo-roller-frame">
        <Image
          width={1380}
          height={345}
          alt="Policy"
          src={scrollHome}
          className="w-[80vw] md:h-[48vh] object-cover mx-6"
        />
  
        <Image
          width={1380}
          height={345}
          alt="Policy"
          src={scrollHome}
          className="w-[80vw] md:h-[48vh] object-cover"
        />
        <Image
          width={1380}
          height={345}
          alt="Policy"
          src={scrollHome}
          className="w-[80vw] md:h-[48vh] object-cover"
        />
        <Image
          width={1380}
          height={345}
          alt="Policy"
          src={scrollHome}
          className="w-[80vw] md:h-[48vh] object-cover"
        />
        <Image
          width={1380}
          height={345}
          alt="Policy"
          src={scrollHome}
          className="w-[80vw] md:h-[48vh] object-cover"
        />
        <Image
          width={1380}
          height={345}
          alt="Policy"
          src={scrollHome}
          className="w-[80vw] md:h-[48vh] object-cover"
        />
      </div>
    </div>
  );
}

export default HomeScroll;
