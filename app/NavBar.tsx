import logo from "@/public/assets/audiophile-logo.svg";
import ShoppingCart from "@/public/assets/shopping-cart.svg";
import Image from "next/image";
import NavMenu from "./NavMenu";
import { Separator } from "@/components/ui/separator";
import { DialogTrigger } from "@/components/ui/dialog";
import lines from "@/public/assets/lines.svg";

const NavBar = () => {
  return (
    <div className="bg-black h-[90px] w-full flex items-center justify-center z-[51] ">
      <div className="lg:w-[1110px] md:w-[689px] flex lg:justify-between md:justify-normal  relative h-full">
        <button className="lg:hidden">
          <Image src={lines} alt="hamburger icon" height={16} width={15} />
        </button>
        <Image
          src={logo}
          alt={"logo"}
          height={25}
          className="lg:m-0 md:mr-auto md:ml-10"
        />
        <NavMenu className="lg:flex hidden" />
        <DialogTrigger>
          <Image src={ShoppingCart} alt="shopping cart" className="ml-16" />
        </DialogTrigger>
        <Separator className="absolute bottom-0 bg-[#3e3e3e]" />
      </div>
    </div>
  );
};

export default NavBar;
