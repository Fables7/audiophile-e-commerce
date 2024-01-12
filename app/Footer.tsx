import React from "react";
import Image from "next/image";
import logo from "@/public/assets/audiophile-logo.svg";
import NavMenu from "./NavMenu";
import FacebookIcon from "@/components/icons/FacebookIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { cn } from "@/lib/utils";

const icons = [
  {
    icon: FacebookIcon,
  },
  {
    icon: TwitterIcon,
  },
  {
    icon: InstagramIcon,
  },
];

const IconDisplay = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "flex items-center gap-4 justify-end lg:mt-20 md:mt-0",
      className
    )}
  >
    {icons.map((item, index) => {
      const Icon = item.icon;
      return (
        <a key={index} className="hover:cursor-pointer">
          <Icon className="fill-white hover:fill-[var(--orange)]" />
        </a>
      );
    })}
  </div>
);
const Footer = () => {
  return (
    <footer className="bg-black lg:h-[365px] md:h-[370px] flex justify-center relative ">
      <div className="lg:w-[1110px] md:w-[689px]  lg:pt-20 md:pt-12  flex justify-between ">
        <div className="absolute w-[101px] h-[4px] bg-[var(--orange)] top-0" />
        <div className="flex flex-col gap-8 w-full pb-10">
          <Image src={logo} alt="logo" />
          <div className="flex flex-col">
            <NavMenu className="lg:hidden inline mb-4 " />

            <p className="lg:w-[540px] md:w-full  md:text-left ">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>
          </div>
          <div className="flex justify-between mt-auto">
            <p className=" font-bold  md:text-left">
              Copyright 2021. All Rights Reserved
            </p>
            <IconDisplay className="lg:hidden" />
          </div>
        </div>
        <div className="lg:inline md:hidden">
          <NavMenu />
          <IconDisplay />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
