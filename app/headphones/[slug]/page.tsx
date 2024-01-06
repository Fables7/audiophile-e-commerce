import React from "react";
import data from "@/data.json";
import Wrapper from "@/components/Wrapper";
import ProductItem from "@/components/ProductItem";

const HeadphoneProductPage = ({ params }: { params: { slug: string } }) => {
  const product = data.headphones.find(
    (product) => product.slug === params.slug
  );
  return (
    <Wrapper>
      {product ? <></> : <h1>No Product found</h1>}
      {product && <ProductItem product={product} shop />}
    </Wrapper>
  );
};

export default HeadphoneProductPage;
