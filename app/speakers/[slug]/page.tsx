import ProductPage from "@/app/ProductPage";
import data from "@/data.json";

const HeadphoneProductPage = ({ params }: { params: { slug: string } }) => {
  const product = data.speakers.find((product) => product.slug === params.slug);

  return <ProductPage product={product} slug={params.slug} />;
};

export default HeadphoneProductPage;
