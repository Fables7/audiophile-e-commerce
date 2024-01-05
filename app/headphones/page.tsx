import CategoryHeader from "@/components/CategoryHeader";
import ProductItem from "@/components/ProductItem";
import React from "react";
import xx99MarkII from "@/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import xx99MarkI from "@/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xx59 from "@/assets/product-xx59-headphones/desktop/image-product.jpg";
import ProductNav from "@/components/ProductNav";
import SiteInfo from "@/components/SiteInfo";
import ProductsItemsList from "@/components/ProductsItemsList";

const products = [
  {
    title: "xx99 mark II headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    new: true,
    src: xx99MarkII,
    alt: "xx99 Mark II Headphones",
  },
  {
    title: "xx99 mark I headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    src: xx99MarkI,
    alt: "xx99 Mark I Headphones",
    right: true,
  },
  {
    title: "xx59 headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    src: xx59,
    alt: "xx59 Headphones",
  },
];

const HeadphonesPage = () => {
  return (
    <div>
      <CategoryHeader title="headphones" />
      <div className="flex  justify-center">
        <div className="w-[1110px] flex flex-col gap-32 py-40">
          <ProductsItemsList products={products} />
          <ProductNav />
          <SiteInfo />
        </div>
      </div>
    </div>
  );
};

export default HeadphonesPage;
