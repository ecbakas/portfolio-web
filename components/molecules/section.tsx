import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ArrowRight, Building2, ChevronRight, ExternalLink, Globe } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Puppeteer } from "../icons/puppeteer";
import RuneRivals from "../icons/rune-rivals";
import { Strapi } from "../icons/strapi";
import { Telegraf } from "../icons/telegraf";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Title from "./title";

const items: SectionItem[] = [
  {
    title: "Rune Rivals",
    description: "A competitive grid control game.",
    icon: RuneRivals,
    tags: ["React Native", "TypeScript", "Expo", "Node.js", "Socket.io"],
    link: {
      href: "/projects/rune-rivals",
      target: "_self",
    },
  },
  {
    title: "Birfatura Wrapper",
    description: "A wrapper API for Birfatura API.",
    icon: Globe,
    tags: ["Node.js", "TypeScript", "Express",],
    link: {
      href: "/projects/birfatura-wrapper",
      target: "_self",
    },
  },
  {
    title: "Strapi CMS Core",
    description: "A Strapi CMS for landing projects.",
    icon: Strapi,
    tags: ["Node.js", "TypeScript", "Strapi", "Next.js", "Tailwind CSS", "Shadcn UI"],
    link: {
      href: "/projects/strapi-cms-core",
      target: "_self",
    },
  },
  {
    title: "R10 Pro Bot",
    description: "Intelligent forum automation & bumping tool.",
    icon: Puppeteer,
    tags: ["Node.js", "Puppeteer", "MySQL", "Automation"],
    link: {
      href: "/projects/r10-up",
      target: "_self",
    },
  },
  {
    title: "Telegram Bot Manager",
    description: "Advanced multi-bot management system.",
    icon: Telegraf,
    tags: ["Node.js", "Supabase", "Telegraf", "Docker"],
    link: {
      href: "/projects/telegram-bot-manager",
      target: "_self",
    },
  },
  {
    title: "Padu Insaat",
    description: "Premium construction company landing page.",
    icon: Building2,
    tags: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion"],
    link: {
      href: "/projects/paduinsaat-landing",
      target: "_self",
    },
  },

  {
    title: "Ayasofyazılım UI",
    description: "Updating and developing AyasofyazılımUI library.",
    icon: GitHubLogoIcon,
    tags: ["TypeScript", "React", "Tailwind CSS", "Shadcn UI"],
    link: {
      href: "https://github.com/ecbakas/ayasofyazilim-ui",
      target: "_blank",
    },
  },
  {
    title: "SchemaForm",
    description: "Form generation from schema with JSON Schema standard.",
    icon: GitHubLogoIcon,
    tags: ["TypeScript", "React", "Tailwind CSS", "Shadcn UI"],
    link: {
      href: "https://github.com/ecbakas/autoform",
      target: "_blank",
    },
  },
];
export default function Section() {
  return (
    <Card className="flex flex-col gap-2 shadow-none bg-transparent border-none p-0">
      <Title title="Projects">
        <Button variant={"outline"} className="hidden">
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Title>
      <div className="space-y-2">
        {items.map((item) => (
          <SectionItem key={item.title} item={item} />
        ))}
      </div>
    </Card>
  );
}
type SectionItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  tags?: string[],
  link: {
    href: string;
    target: string;
  };
};
export function SectionItem({ item }: { item: SectionItem }) {
  return (
    <Button asChild variant={"outline"} className="w-full items-start">
      <Link
        href={item.link.href}
        target={item.link.target}
        className="xs:flex relative grid h-auto min-h-32 gap-4"
      >
        <item.icon className="aspect-square h-12 min-w-12 min-h-12 w-12 rounded-full mb-auto" />
        <div className="w-full overflow-hidden flex flex-col gap-1">
          <div>
            <h6 className="text-lg">{item.title}</h6>
            <p className="w-full overflow-hidden text-ellipsis text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {item.tags?.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        {item.link.target === "_blank" && (
          <ExternalLink className="xs:relative xs:right-auto xs:top-auto absolute right-4 top-4 ml-2 my-auto h-4 min-w-4" />
        )}
        {item.link.target !== "_blank" && (
          <ChevronRight className="xs:relative xs:top-auto xs:right-auto absolute right-4 top-4 ml-2 my-auto h-4 min-w-4" />
        )}
      </Link>
    </Button>
  );
}
