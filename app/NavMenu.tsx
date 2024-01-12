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
import { cn } from "@/lib/utils";

const NavMenu = ({ className }: { className?: string }) => {
  return (
    <NavigationMenu className={className}>
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
