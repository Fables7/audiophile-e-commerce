import React from "react";
import { Button } from "./ui/button";
import CartItem from "./CartItem";
import data from "../data.json";

const CartDialog = () => {
  const headphones = data.headphones;
  return (
    <div className="flex flex-col gap-6">
      <h6>cart (3)</h6>
      <div className="flex flex-col gap-6">
        {headphones.map((item, index) => (
          <CartItem key={index} name={item.name} image={item.cartImage} />
        ))}
      </div>
      <div className="flex  justify-between">
        <p className="text-black/50">TOTAL</p>
        <h6>$ 0</h6>
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDialog;
