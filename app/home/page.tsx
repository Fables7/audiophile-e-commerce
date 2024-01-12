import ProductNav from "@/components/ProductNav";
import SiteInfo from "@/components/SiteInfo";
import Xx99Mark2Headphones from "@/components/images/Xx99Mark2Headphones";
import HomeProducts from "./components/HomeProducts";
import Wrapper from "@/components/Wrapper";

const HomePage = () => {
  return (
    <div>
      <Xx99Mark2Headphones />
      <Wrapper className="pt-2">
        <ProductNav />
        <HomeProducts />
        <SiteInfo />
      </Wrapper>
    </div>
  );
};

export default HomePage;
