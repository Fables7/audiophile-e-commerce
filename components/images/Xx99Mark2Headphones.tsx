import React from "react";
import Image from "next/image";
import mobile from "@/public/assets/home/mobile/image-header.jpg";
import desktop from "@/public/assets/headphones-header.svg";
import { Button } from "../ui/button";

const Xx99Mark2Headphones = () => {
  return (
    <div className=" h-fit relative  flex justify-center bg-[#141414] overflow-hidden ">
      <div className=" h-full w-full bg-black opacity-20  absolute z-10"></div>
      <div className="w-[1110px] relative flex items-center justify-end bg-blend-multiply ">
        <div className="absolute left-0 z-20 flex flex-col gap-8">
          <p className="over-line">New Product</p>
          <h1 className="text-white">
            XX99 MARK II <br />
            HEADPHONES
          </h1>
          <p className="w-[349px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </p>
          <div>
            <Button>SEE PRODUCT</Button>
          </div>
        </div>
        <Image
          className="mt-[-20px] "
          src={desktop}
          alt="XX99 Mark II Headphones"
          // width={1153}
          height={600}
        />
      </div>
    </div>
  );
};

export default Xx99Mark2Headphones;
