import { ComponentProps, FC } from "react";
import { Link, useMatches } from "@remix-run/react";
import { Home, PaintBucket } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui";
import { DarkModeSwitch } from "./darkModeSwitch";

import { cn } from "@/lib/utils";

type NavBarProps = ComponentProps<typeof NavigationMenu>;

export const NavBar: FC<NavBarProps> = ({ className, ...props }) => {
  const matches = useMatches();
  const parentMatch = matches[matches.length - 1];
  const pathname = parentMatch?.pathname;
  console.log(matches);

  return (
    <NavigationMenu
      className={cn("max-w-full p-2 bg-chart-1", className)}
      {...props}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            to="/"
            className={cn(
              navigationMenuTriggerStyle(),
              pathname === "/" && "bg-primary text-secondary"
            )}
          >
            <Home className="w-4 h-4 mr-2" /> Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/colors"
            className={cn(
              navigationMenuTriggerStyle(),
              pathname === "/colors" && "bg-primary text-secondary"
            )}
          >
            <PaintBucket className="w-4 h-4 mr-2" /> Colors
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <DarkModeSwitch containerClassName="ml-auto" />
    </NavigationMenu>
  );
};
NavBar.displayName = "NavBar";
