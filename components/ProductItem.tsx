import classNames from "classnames";
import Image from "next/image";
import { Button } from "./ui/button";

export type ProductItemProps = {
  name: string;
  description: string;
  new?: boolean;
  image: string;
  alt: string;
  link?: string;
};
interface Props {
  product: ProductItemProps;
  shop?: boolean;
  right?: boolean | undefined;
}

const ProductItem = ({ product, shop, right }: Props) => {
  const containerClass = classNames({
    "h-[560px] flex justify-between": true,
    "flex-row-reverse": right,
  });
  return (
    <div className={containerClass}>
      <Image src={product.image} alt={product.alt} height={560} width={560} />
      <div className="flex flex-col gap-4 items-start justify-center">
        {product.new && (
          <p className="over-line text-[var(--orange)]">new product</p>
        )}
        <h2 className="w-[445px]">{product.name}</h2>
        <p className="text-black/50 w-[445px]">{product.description}</p>
        <Button>see product</Button>
      </div>
    </div>
  );
};

export default ProductItem;
