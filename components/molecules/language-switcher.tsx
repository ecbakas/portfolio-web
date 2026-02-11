"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/lib/navigation";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { routing } from "@/lib/routing";

export function LanguageSwitcher({ className }: { className?: string }) {
    const t = useTranslations("Language");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function onLocaleChange(nextLocale: string) {
        router.replace(pathname, { locale: nextLocale });
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className={className}>
                    <Languages className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">{t("toggle")}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {routing.locales.map((cur) => (
                    <DropdownMenuItem
                        key={cur}
                        onClick={() => onLocaleChange(cur)}
                        className={locale === cur ? "bg-accent text-accent-foreground" : ""}
                    >
                        {t(cur)}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
