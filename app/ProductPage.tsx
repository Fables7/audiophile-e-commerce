import ProductDetails from "@/components/ProductDetails";
import ProductItem, { ProductItemProps } from "@/components/ProductItem";
import ProductNav from "@/components/ProductNav";
import ProductSuggestions from "@/components/ProductSuggestions";
import SiteInfo from "@/components/SiteInfo";
import Wrapper from "@/components/Wrapper";

interface Props {
  product?: ProductItemProps;
  slug: string;
}

const ProductPage = ({ product, slug }: Props) => {
  if (!product) return <h1>No Product found</h1>;
  return (
    <Wrapper>
      <ProductItem product={product} shop />
      <ProductDetails product={product} />
      <ProductSuggestions slug={slug} />
      <ProductNav />
      <SiteInfo />
    </Wrapper>
  );
};

export default ProductPage;
