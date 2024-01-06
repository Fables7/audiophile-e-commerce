import logo from "@/public/assets/audiophile-logo.svg";
import ShoppingCart from "@/public/assets/shopping-cart.svg";
import Image from "next/image";
import NavMenu from "./NavMenu";
import { Separator } from "@/components/ui/separator";

const NavBar = () => {
  return (
    <div className="bg-black h-[90px] w-full flex items-center justify-center">
      <div className="w-[1110px] flex  justify-between relative h-full">
        <Image src={logo} alt={"logo"} height={25} />
        <NavMenu />
        <Image src={ShoppingCart} alt="shopping cart" className="ml-16" />
        <Separator className="absolute bottom-0 bg-[#3e3e3e]" />
      </div>
    </div>
  );
};

export default NavBar;
