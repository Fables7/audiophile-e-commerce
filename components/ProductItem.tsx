import classNames from "classnames";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import AddToCart from "./AddToCart";

export type ProductItemProps = {
  slug?: string;
  name: string;
  description: string;
  new?: boolean;
  image: string;
  alt: string;
  price?: number;
  link?: string;
  showcase?: {
    image: string;
    alt: string;
  }[];
  features?: string[];
  details?: {
    quantity: number;
    item: string;
  }[];
};
interface Props {
  category?: "headphones" | "speakers" | "earphones";
  product: ProductItemProps;
  shop?: boolean;
  right?: boolean | undefined;
}

const ProductItem = ({ product, shop, right, category }: Props) => {
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
        <h2 className="w-[445px]">
          {product.name} {category === "speakers" ? "speaker" : category}
        </h2>
        <p className="text-black/50 w-[445px]">{product.description}</p>
        {shop && (
          <>
            <h6>${product.price?.toLocaleString()}</h6>
            <AddToCart product={product} />
          </>
        )}
        {!shop && (
          <Link href={`/${category}/${product.slug}`}>
            <Button>see product</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
