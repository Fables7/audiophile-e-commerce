import CategoryHeader from "@/components/CategoryHeader";
import ProductsItemsList from "@/components/ProductsItemsList";
import yx1 from "@/assets/product-yx1-earphones/desktop/image-product.jpg";
import React from "react";
import ProductNav from "@/components/ProductNav";
import SiteInfo from "@/components/SiteInfo";

const products = [
  {
    title: "yx1 wireless earphones",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    new: true,
    src: yx1,
    alt: "xx99 Mark II Headphones",
  },
];

const EarphonesPage = () => {
  return (
    <div>
      <CategoryHeader title="Earphones" />
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

export default EarphonesPage;
