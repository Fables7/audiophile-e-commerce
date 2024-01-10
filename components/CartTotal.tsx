"use client";
import { RootState } from "@/store/cart";
import React from "react";
import { useSelector } from "react-redux";
import CartDetail from "./CartDetail";

interface Props {
  vat?: number;
}

const CartTotal = ({ vat }: Props) => {
  const total = useSelector((state: RootState) => state.cart.total);
  return (
    <CartDetail
      label={vat ? "vat (included)" : "Total"}
      price={vat ? (total / 100) * vat : total}
    />
  );
};

export default CartTotal;
