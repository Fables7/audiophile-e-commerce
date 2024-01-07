import React from "react";
import Wrapper from "@/components/Wrapper";
import CheckoutCard from "./components/CheckoutCard";
import CheckoutSummary from "./components/CheckoutSummary";

const CheckoutPage = () => {
  return (
    <div className="border-2 bg-[var(--med-gray)]">
      <Wrapper className="flex-row gap-0 justify-between">
        <CheckoutCard />
        <CheckoutSummary />
      </Wrapper>
    </div>
  );
};

export default CheckoutPage;
