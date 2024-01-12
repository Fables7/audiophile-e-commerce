import React from "react";
import Image from "next/image";
import mobile from "@/public/assets/home/mobile/image-header.jpg";
import desktop from "@/public/assets/headphones-header.svg";
import { Button } from "../ui/button";
import Link from "next/link";

const Xx99Mark2Headphones = () => {
  return (
    <div className=" h-fit relative  flex justify-center bg-[#141414] overflow-hidden ">
      <div className=" h-full w-full bg-black lg:opacity-20 md:opacity-60  absolute z-10"></div>
      <div className="w-[1110px] h-[600px] relative flex items-center lg:justify-end bg-blend-multiply md:justify-center">
        <div className="absolute lg:left-0 z-20 flex flex-col gap-8 lg:items-start md:items-center">
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
            <Link href="/headphones/xx99-mark-two-headphones">
              <Button>SEE PRODUCT</Button>
            </Link>
          </div>
        </div>
        <div className="h-[600px] md:h-[710px] lg:h-[600px]">
          <Image
            className="mt-[-20px] w-full h-full object-cover"
            src={desktop}
            alt="XX99 Mark II Headphones"
            // width={1153}
          />
        </div>
      </div>
    </div>
  );
};

export default Xx99Mark2Headphones;
