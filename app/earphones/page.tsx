import CategoryHeader from "@/components/CategoryHeader";
import ProductNav from "@/components/ProductNav";
import ProductsItemsList from "@/components/ProductsItemsList";
import SiteInfo from "@/components/SiteInfo";
import data from "@/data.json";

const EarphonesPage = () => {
  return (
    <div>
      <CategoryHeader title="Earphones" />
      <div className="flex  justify-center">
        <div className="w-[1110px] flex flex-col gap-32 py-40">
          <ProductsItemsList products={data.earphones} />
          <ProductNav />
          <SiteInfo />
        </div>
      </div>
    </div>
  );
};

export default EarphonesPage;
