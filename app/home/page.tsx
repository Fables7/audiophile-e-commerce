import React from "react";
import Image from "next/image";
import Xx99Mark2Headphones from "@/components/images/Xx99Mark2Headphones";
import ProductNav from "@/components/ProductNav";

const HomePage = () => {
  return (
    <div>
      <Xx99Mark2Headphones />
      <div className="w-full flex justify-center ">
        <div className="w-[1110px]">
          <ProductNav />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
