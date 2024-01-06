import React from "react";
import ProductItem from "./ProductItem";
import { StaticImageData } from "next/image";

export type ProductItemProps = {
  name: string;
  description: string;
  new?: boolean;
  image: string;
  alt: string;
  right?: boolean | undefined;
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
          name={item.name}
          description={item.description}
          new={item.new}
          image={item.image}
          alt={item.alt}
          right={item.right}
        />
      ))}
    </>
  );
};

export default ProductsItemsList;
