"use client";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { RootState, purchaseItems } from "@/store/cart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SuccessModal = ({ total }: { total: number }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [openList, setOpenList] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { items: purchases, total: purchasesTotal } = useSelector(
    (state: RootState) => state.cart.purchases
  );
  const purchasesLength = purchases.length;

  const list = openList ? purchases : purchases.slice(0, 1);

  const handleBackToHome = () => {
    router.push("/home");
  };

  return (
    <Dialog open={open}>
      <DialogTrigger>
        <Button
          className="w-full"
          onClick={() => {
            setOpen(true);
            dispatch(purchaseItems());
          }}
          disabled={total === 0}
        >
          continue & pay
        </Button>
      </DialogTrigger>

      <DialogContent className="left-[50%] top-[30%] px-9 min-w-[540px] gap-10">
        <Image
          src="/assets/checkout/icon-order-confirmation.svg"
          alt="success icon"
          width={64}
          height={64}
        />
        <DialogHeader className="flex gap-4">
          <DialogTitle>
            <h3 className="w-[284px]">thank you for your order</h3>
          </DialogTitle>
          <p className="text-black/50">
            You will receive an email confirmation shortly.
          </p>
        </DialogHeader>
        <div className="min-w-[444px]  min-h-[140px] max-h-[270px] bg-[var(--med-gray)] rounded-md flex justify-between">
          <div className="flex-1 px-6 pr-5 py-5 box-border flex flex-col justify-center gap-2">
            <ScrollArea className="h-full  pr-4">
              {list.map((item, index) => (
                <CartItem
                  key={index}
                  image={item.cartImage}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  quantity={item.quantity}
                  short={item?.short}
                  checkout
                />
              ))}
            </ScrollArea>
            {purchasesLength > 1 && (
              <>
                <Separator />
                <button onClick={() => setOpenList(!openList)}>
                  <p className="text-black/50 text-center">
                    {openList
                      ? "View less"
                      : `and ${purchasesLength - 1} other item(s)`}
                  </p>
                </button>
              </>
            )}
          </div>
          <div className="w-[198px] bg-black h-full flex flex-col px-7 py-6 justify-end">
            <p className="text-white/50">GRAND TOTAL</p>
            <h6 className="text-white">$ {purchasesTotal.toLocaleString()}</h6>
          </div>
        </div>

        <Button onClick={handleBackToHome}>back to home</Button>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
