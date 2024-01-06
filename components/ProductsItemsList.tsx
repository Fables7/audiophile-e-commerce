import ProductItem from "./ProductItem";
import { ProductItemProps } from "./ProductItem";

interface Props {
  products: ProductItemProps[];
  category: "headphones" | "speakers" | "earphones";
}

const ProductsItemsList = ({ products, category }: Props) => {
  return (
    <>
      {products.map((item, index) => {
        const right = index % 2 !== 0;
        return (
          <ProductItem
            category={category}
            key={index}
            product={item}
            right={right}
          />
        );
      })}
    </>
  );
};

export default ProductsItemsList;
