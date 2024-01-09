"use client";
import React from "react";
import { Button } from "./ui/button";
import CartItem from "./CartItem";
import data from "../data.json";
import Link from "next/link";
import { DialogClose } from "./ui/dialog";
import CartTotal from "./CartTotal";
import { useSelector } from "react-redux";
import { RootState } from "@/store/cart";

const CartDialog = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  return (
    <div className="flex flex-col gap-6">
      <h6>cart ({cart.length})</h6>
      <div className="flex flex-col gap-6">
        {cart.map((item, index) => (
          <CartItem
            key={index}
            name={item.name}
            image={item.cartImage}
            price={item.price}
            id={item.id}
            quantity={item.quantity}
          />
        ))}
      </div>
      <CartTotal />
      <Link href="/checkout">
        <DialogClose asChild>
          <Button className="w-full">Checkout</Button>
        </DialogClose>
      </Link>
    </div>
  );
};

export default CartDialog;
