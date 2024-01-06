import CategoryHeader from "@/components/CategoryHeader";
import ProductNav from "@/components/ProductNav";
import ProductsItemsList from "@/components/ProductsItemsList";
import SiteInfo from "@/components/SiteInfo";
import data from "@/data.json";

const HeadphonesPage = () => {
  return (
    <div>
      <CategoryHeader title="headphones" />
      <div className="flex  justify-center">
        <div className="w-[1110px] flex flex-col gap-32 py-40">
          <ProductsItemsList products={data.headphones} />
          <ProductNav />
          <SiteInfo />
        </div>
      </div>
    </div>
  );
};

export default HeadphonesPage;
