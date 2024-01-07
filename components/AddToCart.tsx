"use client";
import React from "react";
import { Button } from "./ui/button";
import Counter from "./Counter";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cart";

const AddToCart = () => {
  const [count, setCount] = React.useState(1);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({}));
  };

  return (
    <div className="flex gap-4">
      <Counter count={count} setCount={setCount} />
      <Button onClick={handleAddToCart}>add to cart</Button>
    </div>
  );
};

export default AddToCart;
