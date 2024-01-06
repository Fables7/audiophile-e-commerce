import React from "react";
import data from "@/data.json";

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const product = data.headphones.find(
    (product) => product.slug === params.slug
  );
  return <div>{product ? product.name : "No Product Found"}</div>;
};

export default ProductPage;
