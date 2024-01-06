import CategoryHeader from "@/components/CategoryHeader";
import ProductNav from "@/components/ProductNav";
import ProductsItemsList from "@/components/ProductsItemsList";
import SiteInfo from "@/components/SiteInfo";
import data from "@/data.json";
import Wrapper from "@/components/Wrapper";

const HeadphonesPage = () => {
  return (
    <div>
      <CategoryHeader title="headphones" />
      <Wrapper>
        <ProductsItemsList products={data.headphones} />
        <ProductNav />
        <SiteInfo />
      </Wrapper>
    </div>
  );
};

export default HeadphonesPage;
