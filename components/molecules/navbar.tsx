"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CircleUser, House } from "lucide-react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import HireMe from "./hire-me";
import { ThemeToggle } from "./theme-toggle";

const navbarItems = [
  {
    title: "Home",
    href: "/",
    icon: House,
  },
  {
    title: "About",
    href: "/about",
    icon: CircleUser,
  },
  // {
  //   title: "Projects",
  //   href: "/projects",
  //   icon: AppWindowMac,
  // },
  // {
  //   title: "Contact",
  //   href: "/contact",
  //   icon: CirclePlus,
  // },
];

export default function Navbar() {
  const active = usePathname();
  console.log(active);
  return (
    <NavigationMenu className="sticky top-2 min-h-16 w-full max-w-full rounded-lg border bg-white p-2 px-3 shadow-xl dark:bg-black">
      <NavigationMenuList className="">
        {navbarItems.map((item) => (
          <NavigationMenuItem key={item.title} asChild>
            <Button
              asChild
              variant={"ghost"}
              size={"icon"}
              className={cn(
                active === item.href
                  ? "bg-gray-100 dark:bg-zinc-900"
                  : "text-zinc-400",
              )}
            >
              <Link href={item.href}>
                <item.icon className="h-10" />
              </Link>
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <ThemeToggle className="ml-auto mr-2 border-none shadow-none" />
      <HireMe />
    </NavigationMenu>
  );
}

export function Socials() {
  return (
    <div className="mt-6 flex gap-6">
      <Link href="https://github.com/ecbakas" target="_blank" className="group">
        <GitHubLogoIcon className="h-6> w-6" />
      </Link>
    </div>
  );
}
