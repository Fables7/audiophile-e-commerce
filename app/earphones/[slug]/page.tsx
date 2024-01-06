import ProductPage from "@/app/ProductPage";
import data from "@/data.json";

const EarphoneProductPage = ({ params }: { params: { slug: string } }) => {
  const product = data.earphones.find(
    (product) => product.slug === params.slug
  );

  return <ProductPage product={product} slug={params.slug} />;
};

export default EarphoneProductPage;
