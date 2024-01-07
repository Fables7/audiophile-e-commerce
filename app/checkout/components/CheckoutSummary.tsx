import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";

const CheckoutSummary = () => {
  return (
    <Card className="min-w-[350px] h-fit">
      <CardHeader>
        <h6>Summary</h6>
      </CardHeader>
      <CardContent>
        <Button>Continue & pay</Button>
      </CardContent>
    </Card>
  );
};

export default CheckoutSummary;
