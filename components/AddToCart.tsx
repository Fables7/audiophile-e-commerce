"use client";
import React from "react";
import { Button } from "./ui/button";
import Counter from "./Counter";

const AddToCart = () => {
  const [count, setCount] = React.useState(1);

  return (
    <div className="flex gap-4">
      <Counter count={count} setCount={setCount} />
      <Button>add to cart</Button>
    </div>
  );
};

export default AddToCart;
