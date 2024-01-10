"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import CartTotal from "@/components/CartTotal";
import CartDetail from "@/components/CartDetail";
import { useSelector } from "react-redux";
import { RootState } from "@/store/cart";

const CheckoutSummary = () => {
  const total = useSelector((state: RootState) => state.cart.total);
  const shipping = total > 0 ? 50 : 0;
  return (
    <Card className="min-w-[350px] h-fit">
      <CardHeader>
        <h6>Summary</h6>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <CartTotal />
          <CartDetail label="Shipping" price={shipping} />
          <CartTotal vat={20} />
        </div>
        <CartDetail total label="grand total" price={total + shipping} />
        <Button disabled={total === 0}>Continue & pay</Button>
      </CardContent>
    </Card>
  );
};

export default CheckoutSummary;
