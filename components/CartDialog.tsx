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
import { ScrollArea } from "./ui/scroll-area";
import { useDispatch } from "react-redux";
import { clearCart } from "@/store/cart";

const CartDialog = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  return (
    <ScrollArea>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <h6>cart ({cart.length})</h6>
          <button onClick={() => dispatch(clearCart())}>
            <p className="text-black/50 underline">Remove all</p>
          </button>
        </div>

        <div className="flex flex-col gap-6 max-h-[300px] overflow-auto">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              name={item.name}
              image={item.cartImage}
              price={item.price}
              id={item.id}
              quantity={item.quantity}
              short={item.short}
            />
          ))}
        </div>
        <CartTotal />
        <Link
          href="/checkout"
          className={cart.length === 0 ? "pointer-events-none" : ""}
          aria-disabled={cart.length === 0}
          tabIndex={cart.length === 0 ? -1 : undefined}
        >
          <DialogClose asChild>
            <Button disabled={cart.length === 0} className="w-full">
              Checkout
            </Button>
          </DialogClose>
        </Link>
      </div>
    </ScrollArea>
  );
};

export default CartDialog;
