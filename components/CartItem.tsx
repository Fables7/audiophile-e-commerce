"use client";
import React from "react";
import Counter from "./Counter";
import Image from "next/image";

interface CartItemProps {
  image: string;
  name: string;
}

const CartItem = ({ image, name }: CartItemProps) => {
  const [count, setCount] = React.useState(1);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt=""
          className="rounded-md"
          width={64}
          height={64}
        />
        <div>
          <p className="text-black font-bold uppercase">{name}</p>
          <p className="text-black/50 font-bold">$ 2,999</p>
        </div>
      </div>
      <Counter
        count={count}
        setCount={setCount}
        className="h-[32px] w-[96px]"
      />
    </div>
  );
};

export default CartItem;
