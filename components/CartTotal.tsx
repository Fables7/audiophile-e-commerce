"use client";
import { RootState } from "@/store/cart";
import React from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const total = useSelector((state: RootState) => state.cart.total);
  return (
    <div className="flex  justify-between">
      <p className="text-black/50">TOTAL</p>
      <h6>$ {total.toLocaleString()}</h6>
    </div>
  );
};

export default CartTotal;
