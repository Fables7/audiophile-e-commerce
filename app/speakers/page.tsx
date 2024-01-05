import CategoryHeader from "@/components/CategoryHeader";
import React from "react";
import ProductsItemsList from "@/components/ProductsItemsList";
import zx9Speaker from "@/assets/product-zx9-speaker/desktop/image-product.jpg";
import zx7Speaker from "@/assets/product-zx7-speaker/desktop/image-product.jpg";
import ProductNav from "@/components/ProductNav";
import SiteInfo from "@/components/SiteInfo";

const products = [
  {
    title: "zx9 speaker",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    new: true,
    src: zx9Speaker,
    alt: "zx9 Speaker",
  },
  {
    title: "zx7 speaker",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    new: true,
    src: zx7Speaker,
    alt: "zx7 Speaker",
    right: true,
  },
];

const SpeakersPage = () => {
  return (
    <div>
      <CategoryHeader title="speakers" />
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

export default SpeakersPage;
