import React from "react";
import Image from "next/image";
import headphones from "@/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "@/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "@/assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "Headphones",
    link: "/headphones",
    image: headphones,
  },
  {
    title: "Speakers",
    link: "/speakers",
    image: speakers,
  },
  {
    title: "Earphones",
    link: "/earphones",
    image: earphones,
  },
];

interface ProductNavItemProps {
  title: string;
  link: string;
  image: any;
}

const ProductNavItem = ({ title, link, image }: ProductNavItemProps) => {
  return (
    <div className="h-[284px] flex-col justify-end flex">
      <div className="bg-[var(--med-gray)] h-[204px] flex flex-col items-center ">
        <div className="h-[150px] mt-[-30px]  flex items-end">
          <Image src={image} alt={title} width={200} />
        </div>

        <h6 className="text-center">{title}</h6>
        <div className="flex  items-center mt-2">
          <Link href={link} className="hover:text-[var(--orange)] subtitle">
            SHOP
          </Link>
          <ChevronRight size={18} color="var(--orange)" />
        </div>
      </div>
    </div>
  );
};

const ProductNav = () => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-20">
      {products.map((item, index) => (
        <ProductNavItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ProductNav;
