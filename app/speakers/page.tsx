import CategoryHeader from "@/components/CategoryHeader";
import ProductNav from "@/components/ProductNav";
import ProductsItemsList from "@/components/ProductsItemsList";
import SiteInfo from "@/components/SiteInfo";
import data from "@/data.json";

const SpeakersPage = () => {
  return (
    <div>
      <CategoryHeader title="speakers" />
      <div className="flex  justify-center">
        <div className="w-[1110px] flex flex-col gap-32 py-40">
          <ProductsItemsList products={data.speakers} />
          <ProductNav />
          <SiteInfo />
        </div>
      </div>
    </div>
  );
};

export default SpeakersPage;
