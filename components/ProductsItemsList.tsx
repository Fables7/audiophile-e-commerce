import ProductItem from "./ProductItem";
import { ProductItemProps } from "./ProductItem";

interface Props {
  products: ProductItemProps[];
}

const ProductsItemsList = ({ products }: Props) => {
  return (
    <>
      {products.map((item, index) => {
        const right = index % 2 !== 0;
        return <ProductItem key={index} product={item} right={right} />;
      })}
    </>
  );
};

export default ProductsItemsList;
