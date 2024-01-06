"use client";
import React from "react";
import { Button } from "./ui/button";

const AddToCart = () => {
  const [count, setCount] = React.useState(1);
  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => {
    if (count === 1) return;
    setCount((prev) => prev - 1);
  };
  return (
    <div className="flex gap-4">
      <div className="w-[120px] h-[48px] flex justify-between items-center bg-[var(--med-gray)] px-5">
        <button
          onClick={decreaseCount}
          className=" hover:text-[var(--orange)] text-xl text-black/50"
        >
          -
        </button>
        <p className="subtitle text-black">{count}</p>
        <button
          onClick={increaseCount}
          className=" hover:text-[var(--orange)] text-xl text-black/50"
        >
          +
        </button>
      </div>
      <Button>add to cart</Button>
    </div>
  );
};

export default AddToCart;
