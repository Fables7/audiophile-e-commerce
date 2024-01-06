import CategoryHeader from "@/components/CategoryHeader";
import ProductNav from "@/components/ProductNav";
import ProductsItemsList from "@/components/ProductsItemsList";
import SiteInfo from "@/components/SiteInfo";
import Wrapper from "@/components/Wrapper";
import data from "@/data.json";

const EarphonesPage = () => {
  return (
    <div>
      <CategoryHeader title="Earphones" />
      <Wrapper>
        <ProductsItemsList products={data.earphones} />
        <ProductNav />
        <SiteInfo />
      </Wrapper>
    </div>
  );
};

export default EarphonesPage;
