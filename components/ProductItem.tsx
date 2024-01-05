import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import classNames from "classnames";

interface Props {
  src: StaticImageData;
  alt: string;
  new?: boolean;
  title: string;
  description: string;
  right?: boolean;
  //   link: string;
}

const ProductItem = (props: Props) => {
  const containerClass = classNames({
    "h-[560px] flex justify-between": true,
    "flex-row-reverse": props.right,
  });
  return (
    <div className={containerClass}>
      <Image src={props.src} alt={props.alt} height={560} />
      <div className="flex flex-col gap-4 items-start justify-center">
        {props.new && (
          <p className="over-line text-[var(--orange)]">new product</p>
        )}
        <h2 className="w-[445px]">{props.title}</h2>
        <p className="text-black/50 w-[445px]">{props.description}</p>
        <Button>see product</Button>
      </div>
    </div>
  );
};

export default ProductItem;
