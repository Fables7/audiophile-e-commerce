import React from "react";
import Image from "next/image";
import { ProductItemProps } from "./ProductItem";

interface DetailProps {
  quantity: number;
  item: string;
}

const Detail = ({ quantity, item }: DetailProps) => {
  return (
    <div className="flex ">
      <p className="text-[var(--orange)] mr-4 w-6">{quantity}x</p>
      <p className="text-black/50 font-medium capitalize">{item}</p>
    </div>
  );
};

interface Props {
  product: ProductItemProps;
}

const ProductDetails = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-40">
      <div className="flex justify-between">
        <div className="w-[635px] flex flex-col gap-6">
          <h3>features</h3>
          {product.features?.map((feature, index) => (
            <p className="text-black/50" key={index}>
              {feature}
            </p>
          ))}
        </div>
        <div className="w-[350px] flex flex-col gap-6">
          <h3>in the box</h3>
          {product.details?.map((detail, index) => (
            <Detail key={index} quantity={detail.quantity} item={detail.item} />
          ))}
        </div>
      </div>
      {product.showcase && (
        <div className="h-[592px] flex justify-between">
          <div className="flex flex-col justify-between">
            <Image
              className="rounded-md"
              src={product.showcase[0].image}
              alt={product.showcase[0].alt}
              width={445}
              height={280}
            />
            <Image
              className="rounded-md"
              src={product.showcase[1].image}
              alt={product.showcase[1].alt}
              width={445}
              height={280}
            />
          </div>
          <Image
            className="rounded-md"
            src={product.showcase[2].image}
            alt={product.showcase[2].alt}
            width={635}
            height={592}
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
