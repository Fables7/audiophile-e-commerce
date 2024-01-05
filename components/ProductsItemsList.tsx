import React from "react";
import ProductItem from "./ProductItem";
import { StaticImageData } from "next/image";

export type ProductItemProps = {
  title: string;
  description: string;
  new?: boolean;
  src: StaticImageData;
  alt: string;
  right?: boolean;
  link?: string;
};

interface Props {
  products: ProductItemProps[];
}

const ProductsItemsList = ({ products }: Props) => {
  return (
    <>
      {products.map((item, index) => (
        <ProductItem
          key={index}
          title={item.title}
          description={item.description}
          new={item.new}
          src={item.src}
          alt={item.alt}
          right={item.right}
        />
      ))}
    </>
  );
};

export default ProductsItemsList;
