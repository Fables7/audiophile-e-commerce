import React from "react";
import data from "@/data.json";
import Wrapper from "@/components/Wrapper";
import ProductItem from "@/components/ProductItem";
import ProductDetails from "@/components/ProductDetails";
import ProductNav from "@/components/ProductNav";
import SiteInfo from "@/components/SiteInfo";

const HeadphoneProductPage = ({ params }: { params: { slug: string } }) => {
  const product = data.headphones.find(
    (product) => product.slug === params.slug
  );

  if (!product) return <h1>No Product found</h1>;
  return (
    <Wrapper>
      <ProductItem product={product} shop />
      <ProductDetails product={product} />
      <ProductNav />
      <SiteInfo />
    </Wrapper>
  );
};

export default HeadphoneProductPage;
