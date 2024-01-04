import React from "react";
import Image from "next/image";
import headphones from "@/assets/home/mobile/image-header.jpg";

const Xx99Mark2Headphones = () => {
  return (
    <div className=" h-fit relative">
      <div className=" h-full w-full bg-black opacity-40  absolute"></div>
      <div className="absolute w-full h-full">
        <h1 className="text-white text-center">
          XX99 MARK II <br />
          HEADPHONES
        </h1>
      </div>
      <Image src={headphones} alt="XX99 Mark II Headphones" />
    </div>
  );
};

export default Xx99Mark2Headphones;
