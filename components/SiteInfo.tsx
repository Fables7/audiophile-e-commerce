import React from "react";
import imageBestGear from "@/assets/shared/desktop/image-best-gear.jpg";
import Image from "next/image";

const SiteInfo = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-8">
        <h2 className="w-[445px]">
          bringing you the <span className="text-[var(--orange)]">best</span>{" "}
          audio gear
        </h2>
        <p className="text-black/50 w-[443px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Image src={imageBestGear} alt="image best gear" />
    </div>
  );
};

export default SiteInfo;
