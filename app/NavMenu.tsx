"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <NavigationMenu >
      <NavigationMenuList className="text-white subtitle ">
        <NavigationMenuItem>
          <Link href="/home" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              HOME
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/headphones" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              HEADPHONES
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/speakers" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              SPEAKERS
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/earphones" passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              EARPHONES
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
