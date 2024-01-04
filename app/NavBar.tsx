import logo from "@/assets/audiophile-logo.svg";
import ShoppingCart from "@/assets/shopping-cart.svg";
import Image from "next/image";
import NavMenu from "./NavMenu";

const NavBar = () => {
  return (
    <div className="bg-black h-[90px] w-full flex items-center justify-center ">
      <div className="w-[1110px] flex  justify-between">
        <Image src={logo} alt={"logo"} height={25} />
        <NavMenu />
        <Image src={ShoppingCart} alt="shopping cart" />
      </div>
    </div>
  );
};

export default NavBar;
