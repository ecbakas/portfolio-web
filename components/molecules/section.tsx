import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import Title from "./title";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";

const items: SectionItem[] = [
  {
    title: "Ayasofyazılım UI",
    description: "Updating and developing AyasofyazılımUI library.",
    icon: GitHubLogoIcon,
    link: {
      href: "https://github.com/ecbakas/ayasofyazilim-ui",
      target: "_blank",
    },
  },
  {
    title: "SchemaForm",
    description: "Form generation from schema with JSON Schema standard.",
    icon: GitHubLogoIcon,
    link: {
      href: "https://github.com/ecbakas/autoform",
      target: "_blank",
    },
  },
];
export default function Section() {
  return (
    <Card className="flex flex-col gap-4 p-4 shadow-none">
      <Title title="Projects">
        <Button variant={"outline"}>
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
  link: {
    href: string;
    target: string;
  };
};
export function SectionItem({ item }: { item: SectionItem }) {
  return (
    <Button asChild variant={"outline"} className="w-full">
      <Link
        href={item.link.href}
        target={item.link.target}
        className="xs:flex relative grid h-auto min-h-20 gap-4"
      >
        <item.icon className="min-h-12 min-w-12" />
        <div className="w-full overflow-hidden">
          <h6 className="text-lg">{item.title}</h6>
          <p className="w-full overflow-hidden text-ellipsis text-sm text-muted-foreground">
            {item.description}
          </p>
        </div>
        {item.link.target === "_blank" && (
          <ExternalLink className="xs:relative xs:right-auto xs:top-auto absolute right-4 top-4 ml-2 h-4 min-w-4" />
        )}
        {item.link.target !== "_blank" && (
          <ChevronRight className="xs:relative xs:top-auto xs:right-auto absolute right-4 top-4 ml-2 h-4 min-w-4" />
        )}
      </Link>
    </Button>
  );
}
