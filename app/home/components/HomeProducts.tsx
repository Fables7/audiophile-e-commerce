import React from "react";
import Image from "next/image";
import patternCircles from "@/public/assets/home/desktop/pattern-circles.svg";
import zx9speaker from "@/public/assets/home/desktop/image-speaker-zx9.png";
import zx7speaker from "@/public/assets/home/desktop/image-speaker-zx7.jpg";
import zx7speakerTablet from "@/public/assets/home/tablet/image-speaker-zx7.jpg";
import yx1earphones from "@/public/assets/home/desktop/image-earphones-yx1.jpg";
import yx1earphonesTablet from "@/public/assets/home/tablet/image-earphones-yx1.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Zx9Speaker = () => {
  return (
    <div className="lg:h-[560px] md:h-[720px] bg-[var(--orange)] relative overflow-hidden lg:py-10 md:py-16 px-20  flex lg:justify-end md:justify-center items-center rounded-md">
      <div className="flex flex-col lg:items-start lg:gap-6 md:gap-8 z-20 md:items-center lg:self-auto md:self-end  ">
        <h1 className="text-white w-[261px]">ZX9 Speaker</h1>
        <p className="w-[349px]">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link href="/speakers/zx9-speaker">
          <Button className="bg-black hover:bg-[#4C4C4C]">See Product</Button>
        </Link>
      </div>
      <div className="lg:w-[370px] md:w-[180px] h-auto  z-10 absolute lg:bottom-[-10px] lg:top-auto md:top-[60px] lg:left-40 ">
        <Image
          src={zx9speaker}
          alt="ZX9 Speaker"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-[950px] md:w-[1000px] absolute lg:top-[-30px] md:top-[-330px] lg:left-[-135px] ">
        <Image
          src={patternCircles}
          alt="pattern circles"
          className=" w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const Zx7Speaker = () => {
  return (
    <div className="w-full h-[320px] rounded-md overflow-hidden  relative flex items-center pl-20">
      <Image
        src={zx7speaker}
        alt="ZX7 Speaker"
        fill
        className="hidden lg:inline"
      />
      <Image
        src={zx7speakerTablet}
        alt="ZX7 Speaker"
        fill
        className="lg:hidden object-cover"
      />
      <div className="absolute flex flex-col items-start gap-5">
        <h4>zx7 speaker</h4>
        <Link href="/speakers/zx7-speaker">
          <Button variant="outline" className=" bg-transparent">
            See Product
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Yx1Earphones = () => {
  return (
    <div className="h-[320px] flex justify-between">
      <div className="rounded-md overflow-hidden lg:w-[540px] md:w-[339px] border">
        <Image
          src={yx1earphones}
          alt="YX1 Earphones"
          className="hidden lg:inline"
        />
        <Image
          src={yx1earphonesTablet}
          alt="YX1 Earphones"
          className="lg:hidden"
        />
      </div>
      <div className="lg:w-[540px] md:w-[339px] bg-[var(--med-gray)] rounded-md flex flex-col items-start gap-4 justify-center lg:pl-20 md:pl-10">
        <h4>yx1 earphones</h4>
        <Link href="/earphones/yx1-wireless-earphones">
          <Button variant="outline" className="bg-transparent">
            see product
          </Button>
        </Link>
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
