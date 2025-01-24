import { ComponentProps, FC } from "react";
import { Link } from "@remix-run/react";
import { Home, PaintBucket } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui";
import { DarkModeSwitch } from "./darkModeSwitch";

import { cn } from "@/lib/utils";

type NavBarProps = ComponentProps<typeof NavigationMenu>;

export const NavBar: FC<NavBarProps> = ({ className, ...props }) => {
  return (
    <NavigationMenu
      className={cn("max-w-full p-2 bg-chart-1", className)}
      {...props}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Home className="w-4 h-4 mr-2" /> Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/colors">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <PaintBucket className="w-4 h-4 mr-2" /> Colors
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <DarkModeSwitch containerClassName="ml-auto" />
    </NavigationMenu>
  );
};
NavBar.displayName = "NavBar";
