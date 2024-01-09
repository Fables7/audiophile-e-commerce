"use client";
import React from "react";
import Counter from "./Counter";
import Image from "next/image";

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  id: string;
  quantity: number;
}

const CartItem = ({ image, name, price, id, quantity }: CartItemProps) => {
  const [count, setCount] = React.useState(quantity);
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
          <p className="text-black/50 font-bold">
            $ {(price * count).toLocaleString()}
          </p>
        </div>
      </div>
      <Counter
        count={count}
        setCount={setCount}
        className="h-[40px] w-[96px] "
        id={id}
      />
    </div>
  );
};

export default CartItem;
