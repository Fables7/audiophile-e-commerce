import React from "react";
import imageBestGear from "@/public/assets/shared/desktop/image-best-gear.jpg";
import imageBestGearTablet from "@/public/assets/shared/tablet/image-best-gear.jpg";
import Image from "next/image";

const SiteInfo = () => {
  return (
    <div className="flex justify-between items-center lg:flex-row flex-col">
      <Image
        src={imageBestGearTablet}
        alt="image best gear"
        className="lg:hidden mb-12"
      />
      <div className="flex flex-col gap-8 items-center lg:w-[445px] md:w-[573px]">
        <h2>
          bringing you the <span className="text-[var(--orange)]">best</span>{" "}
          audio gear
        </h2>
        <p className="text-black/50 ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Image
        src={imageBestGear}
        alt="image best gear"
        className="lg:inline hidden"
      />
    </div>
  );
};

export default SiteInfo;
