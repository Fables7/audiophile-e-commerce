"use client";
import React from "react";
import classNames from "classnames";
import { increaseItemQuantity, decreaseItemQuantity } from "@/store/cart";
import { useDispatch } from "react-redux";

interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  className?: string;

  id?: string;
}

const Counter = ({ count, setCount, className, id }: CounterProps) => {
  const dispatch = useDispatch();
  const increaseCount = () => {
    setCount((prev) => prev + 1);
    if (id) dispatch(increaseItemQuantity(id));
  };
  const decreaseCount = () => {
    if (count === 1 && !id) return;
    setCount((prev) => prev - 1);
    if (id) dispatch(decreaseItemQuantity(id));
  };
  const baseClass = classNames(
    className,
    "w-[120px] h-[48px] flex justify-between items-center bg-[var(--med-gray)] px-5"
  );
  return (
    <div className={baseClass}>
      <button
        onClick={decreaseCount}
        className=" hover:text-[var(--orange)] text-l text-black/50"
      >
        -
      </button>
      <p className="subtitle text-black">{count}</p>
      <button
        onClick={increaseCount}
        className=" hover:text-[var(--orange)] text-l text-black/50"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
