import React from "react";
import Image from "next/image";
import logo from "@/public/assets/audiophile-logo.svg";
import NavMenu from "./NavMenu";
import FacebookIcon from "@/components/icons/FacebookIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

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

const Footer = () => {
  return (
    <footer className="bg-black h-[365px] flex justify-center relative">
      <div className="w-[1110px]  pt-20 flex justify-between">
        <div className="absolute w-[101px] h-[4px] bg-[var(--orange)] top-0" />
        <div className="flex flex-col gap-8">
          <Image src={logo} alt="logo" />
          <p className="w-[540px]">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>
          <p className=" font-bold">Copyright 2021. All Rights Reserved</p>
        </div>
        <div>
          <NavMenu />
          <div className="flex items-center gap-4 justify-end mt-20">
            {icons.map((item, index) => (
              <a key={index} className="hover:cursor-pointer">
                <item.icon className="fill-white hover:fill-[var(--orange)]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
