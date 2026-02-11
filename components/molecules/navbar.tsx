"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CircleUser, House, Library } from "lucide-react";
import { Link } from "@/lib/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import HireMe from "./hire-me";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";

const navbarItems = [
  {
    key: "home",
    href: "/",
    icon: House,
  },
  {
    key: "about",
    href: "/about",
    icon: CircleUser,
  },
  {
    key: "knowledgeBase",
    href: "/knowledge-base",
    icon: Library,
  },
];

export default function Navbar() {
  const t = useTranslations("Navbar");
  const active = usePathname();
  console.log(active);
  return (
    <NavigationMenu className="sticky top-0 z-50 min-h-16 w-full max-w-full rounded-lg border bg-white p-2 px-3 shadow-xl dark:bg-black">
      <NavigationMenuList className="">
        {navbarItems.map((item) => (
          <NavigationMenuItem key={item.key} asChild>
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
              <Link href={item.href} title={t(item.key)}>
                <item.icon className="h-10" />
              </Link>
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <LanguageSwitcher className="ml-auto border-none shadow-none" />
      <ThemeToggle className="mr-2 border-none shadow-none" />
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
