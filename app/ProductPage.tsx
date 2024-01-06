import React from "react";
import Wrapper from "@/components/Wrapper";
import ProductItem from "@/components/ProductItem";
import ProductDetails from "@/components/ProductDetails";
import ProductSuggestions from "@/components/ProductSuggestions";
import ProductNav from "@/components/ProductNav";
import SiteInfo from "@/components/SiteInfo";
import { ProductItemProps } from "@/components/ProductItem";

interface Props {
  product?: ProductItemProps;
  slug: string;
}

const ProductPage = ({ product, slug }: Props) => {
  if (!product) return <h1>No Product found</h1>;
  return (
    <Wrapper>
      <ProductItem product={product} shop />
      <ProductDetails product={product} />
      <ProductSuggestions slug={slug} />
      <ProductNav />
      <SiteInfo />
    </Wrapper>
  );
};

export default ProductPage;
