import React from "react";
import classNames from "classnames";

interface Props {
  label: string;
  price: number;
  total?: boolean;
}

const CartDetail = ({ label, price, total }: Props) => {
  const formattedPrice = price % 1 != 0 ? price.toFixed(2) : price;
  return (
    <div className="flex justify-between">
      <p className="text-black/50 uppercase">{label}</p>
      <h6
        className={classNames({
          "text-[var(--orange)]": total,
        })}
      >
        $ {formattedPrice.toLocaleString()}
      </h6>
    </div>
  );
};

export default CartDetail;
