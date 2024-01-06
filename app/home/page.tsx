import ProductNav from "@/components/ProductNav";
import SiteInfo from "@/components/SiteInfo";
import Xx99Mark2Headphones from "@/components/images/Xx99Mark2Headphones";
import HomeProducts from "./components/HomeProducts";

const HomePage = () => {
  return (
    <div>
      <Xx99Mark2Headphones />
      <div className="w-full flex justify-center ">
        <div className="w-[1110px] flex flex-col gap-40 pb-60">
          <ProductNav />
          <HomeProducts />
          <SiteInfo />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
