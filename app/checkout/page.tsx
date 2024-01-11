"use client";
import React from "react";
import Wrapper from "@/components/Wrapper";
import CheckoutCard from "./components/CheckoutCard";
import CheckoutSummary from "./components/CheckoutSummary";
import { useSelector } from "react-redux";
import { RootState } from "@/store/cart";
import { useRouter } from "next/navigation";
import BackNav from "@/components/BackNav";

const CheckoutPage = () => {
  const cartLength = useSelector((state: RootState) => state.cart.cart.length);
  const purchasesLength = useSelector(
    (state: RootState) => state.cart.purchases.items.length
  );
  const router = useRouter();
  if (cartLength === 0 && purchasesLength === 0) {
    router.push("/home");
  }
  return (
    <div className="border-2 bg-[var(--med-gray)]">
      <Wrapper className="gap-0 pt-10">
        <BackNav />
        <div className="flex-row flex gap-0 justify-between">
          <CheckoutCard />
          <CheckoutSummary />
        </div>
      </Wrapper>
    </div>
  );
};

export default CheckoutPage;
