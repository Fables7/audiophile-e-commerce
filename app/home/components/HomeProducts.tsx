import React from "react";
import Image from "next/image";
import patternCircles from "@/public/assets/home/desktop/pattern-circles.svg";
import zx9speaker from "@/public/assets/home/desktop/image-speaker-zx9.png";
import zx7speaker from "@/public/assets/home/desktop/image-speaker-zx7.jpg";
import yx1earphones from "@/public/assets/home/desktop/image-earphones-yx1.jpg";
import { Button } from "@/components/ui/button";

const Zx9Speaker = () => {
  return (
    <div className="h-[560px] bg-[var(--orange)] relative overflow-hidden py-10 px-20 flex justify-end items-center rounded-md">
      <div className="flex flex-col items-start gap-8 z-20">
        <h1 className="text-white w-[116px]">ZX9 Speaker</h1>
        <p className="w-[349px]">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button className="bg-black hover:bg-[#4C4C4C]">See Product</Button>
      </div>
      <Image
        src={zx9speaker}
        alt="ZX9 Speaker"
        width={360}
        className=" z-10 absolute bottom-[-10px] left-40"
      />
      <Image
        src={patternCircles}
        alt="pattern circles"
        className="absolute top-[-30px] left-[-135px]"
      />
    </div>
  );
};

const Zx7Speaker = () => {
  return (
    <div className="w-full h-[320px] rounded-md overflow-hidden  relative flex items-center pl-20">
      <Image src={zx7speaker} alt="ZX7 Speaker" fill />
      <div className="absolute flex flex-col items-start gap-5">
        <h4>zx7 speaker</h4>
        <Button variant="outline" className=" bg-transparent">
          See Product
        </Button>
      </div>
    </div>
  );
};

const Yx1Earphones = () => {
  return (
    <div className="h-[320px] flex justify-between">
      <div className="rounded-md overflow-hidden w-[540px]">
        <Image src={yx1earphones} alt="YX1 Earphones" />
      </div>
      <div className="w-[540px] bg-[var(--med-gray)] rounded-md flex flex-col items-start gap-4 justify-center pl-20">
        <h4>yx1 earphones</h4>
        <Button variant="outline" className="bg-transparent">
          see product
        </Button>
      </div>
    </div>
  );
};

const HomeProducts = () => {
  return (
    <div className="flex flex-col gap-10">
      <Zx9Speaker />
      <Zx7Speaker />
      <Yx1Earphones />
    </div>
  );
};

export default HomeProducts;
