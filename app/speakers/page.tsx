import CategoryHeader from "@/components/CategoryHeader";
import ProductNav from "@/components/ProductNav";
import ProductsItemsList from "@/components/ProductsItemsList";
import SiteInfo from "@/components/SiteInfo";
import data from "@/data.json";
import Wrapper from "@/components/Wrapper";

const SpeakersPage = () => {
  return (
    <div>
      <CategoryHeader title="speakers" />
      <Wrapper>
        <ProductsItemsList category="speakers" products={data.speakers} />
        <ProductNav />
        <SiteInfo />
      </Wrapper>
    </div>
  );
};

export default SpeakersPage;
