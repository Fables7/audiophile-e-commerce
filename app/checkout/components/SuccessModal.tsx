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
import { Separator } from "@/components/ui/separator";
import { RootState, clearCart } from "@/store/cart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const SuccessModal = ({ total }: { total: number }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const Item = useSelector((state: RootState) => state.cart.cart[0]);
  const cartLength = useSelector((state: RootState) => state.cart.cart.length);
  if (!Item) return null;

  const handleBackToHome = () => {
    router.push("/home");
    dispatch(clearCart());
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button disabled={total === 0}>continue & pay</Button>
      </DialogTrigger>

      <DialogContent className="left-[50%] top-[30%] px-9 min-w-[540px] gap-10">
        <Image
          src="/assets/checkout/icon-order-confirmation.svg"
          alt="success icon"
          width={64}
          height={64}
        />
        <DialogHeader>
          <DialogTitle>
            <h3 className="w-[284px]">thank you for your order</h3>
          </DialogTitle>
          <p className="text-black/50">
            You will receive an email confirmation shortly.
          </p>
        </DialogHeader>
        <div className="min-w-[444px] h-[140px] bg-[var(--med-gray)] rounded-md flex justify-between">
          <div className="border border-500-red flex-1 px-6 flex flex-col justify-center gap-2">
            <CartItem
              image={Item.cartImage}
              name={Item.name}
              price={Item.price}
              id={Item.id}
              quantity={Item.quantity}
              checkout
            />
            {cartLength > 1 && (
              <>
                <Separator />
                <p className="text-black/50 text-center">
                  and {cartLength - 1} other item(s)
                </p>
              </>
            )}
          </div>
          <div className="w-[198px] bg-black h-full flex flex-col px-7 justify-center">
            <p className="text-white/50">GRAND TOTAL</p>
            <h6 className="text-white">$ {total.toLocaleString()}</h6>
          </div>
        </div>

        <Button onClick={handleBackToHome}>back to home</Button>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
