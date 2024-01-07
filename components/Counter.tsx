import React from "react";
import classNames from "classnames";

interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
}

const Counter = ({ count, setCount, className }: CounterProps) => {
  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => {
    if (count === 1) return;
    setCount((prev) => prev - 1);
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
