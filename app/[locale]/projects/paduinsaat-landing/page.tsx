import { ArrowLeft, ArrowRight, Building2, Film, LayoutTemplate, Move, Palette, Star, Users } from "lucide-react";
import { Link } from "@/lib/navigation";

import Title from "@/components/molecules/title";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { FramerIcon } from "@/components/icons/framer";
import { GSAP } from "@/components/icons/gsap";
import { NextjsIcon } from "@/components/icons/nextjs";
import { ReactIcon } from "@/components/icons/react";
import { TailwindCSS } from "@/components/icons/tailwind";
import { TypeScript } from "@/components/icons/typescript";
import HighlightCart from "@/components/molecules/highlight-cart";
import TechStack from "@/components/molecules/tech-stack";
import { useTranslations } from "next-intl";

export default function PaduInsaatPage() {
    const t = useTranslations("PaduInsaat");
    const commonT = useTranslations("ProjectPage");
    const projectsT = useTranslations("Projects.items");
    const tagsT = useTranslations("Tags");

    const PageData = {
        header: {
            title: projectsT("paduInsaat.title"),
            backLabel: commonT("backLabel"),
        },
        hero: {
            title: t("hero.title"),
            description: t("hero.description"),
            tags: [tagsT("nextjs"), tagsT("tailwind"), tagsT("gsap"), tagsT("framer")],
        },
        features: {
            title: t("features.title"),
            list: [
                {
                    title: t("features.list.animations.title"),
                    description: t("features.list.animations.description"),
                    icon: Film,
                },
                {
                    title: t("features.list.gallery.title"),
                    description: t("features.list.gallery.description"),
                    icon: LayoutTemplate,
                },
                {
                    title: t("features.list.expertise.title"),
                    description: t("features.list.expertise.description"),
                    icon: Star,
                },
                {
                    title: t("features.list.customer.title"),
                    description: t("features.list.customer.description"),
                    icon: Users,
                }
            ]
        },
        workflow: {
            title: t("workflow.title"),
            list: [
                {
                    title: t("workflow.list.hero.title"),
                    description: t("workflow.list.hero.description"),
                    icon: Move,
                },
                {
                    title: t("workflow.list.services.title"),
                    description: t("workflow.list.services.description"),
                    icon: Building2,
                }
            ]
        },
        techStack: {
            title: commonT("techStackTitle"),
            description: t("tech.description"),
            categories: [
                {
                    name: t("tech.platform"),
                    icon: LayoutTemplate,
                    items: [
                        {
                            name: t("tech.items.nextjs.name"),
                            description: t("tech.items.nextjs.description"),
                            icon: NextjsIcon,
                        },
                        {
                            name: t("tech.items.react.name"),
                            description: t("tech.items.react.description"),
                            icon: ReactIcon,
                        },
                        {
                            name: t("tech.items.typescript.name"),
                            description: t("tech.items.typescript.description"),
                            icon: TypeScript,
                        },
                    ]
                },
                {
                    name: t("tech.styling"),
                    icon: Palette,
                    items: [
                        {
                            name: t("tech.items.tailwind.name"),
                            description: t("tech.items.tailwind.description"),
                            icon: TailwindCSS,
                        },
                        {
                            name: t("tech.items.gsap.name"),
                            description: t("tech.items.gsap.description"),
                            icon: GSAP,
                        },
                        {
                            name: t("tech.items.framer.name"),
                            description: t("tech.items.framer.description"),
                            icon: FramerIcon,
                        },
                    ]
                }
            ]
        }
    };
    return (
        <div className="flex flex-col gap-2 pb-12">
            {/* Header / Navigation */}
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/">
                        <ArrowLeft className="h-4 w-4" />
                        <span className="sr-only">{PageData.header.backLabel}</span>
                    </Link>
                </Button>
                <Title title={PageData.header.title} />
            </div>

            {/* Hero / Introduction */}
            <div className="grid gap-6">
                <div className="flex flex-col justify-center gap-2">
                    <h1 className="text-4xl font-bold tracking-tight">{PageData.hero.title}</h1>
                    <p className="text-muted-foreground text-lg">
                        {PageData.hero.description}
                    </p>
                    <div className="flex gap-2">
                        {PageData.hero.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                </div>
            </div>

            <Separator />

            {/* Features Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight">{PageData.features.title}</h2>
                <div className="grid gap-2">
                    {PageData.features.list.map((item, index) => (
                        <HighlightCart
                            key={index}
                            className="max-w-full h-full"
                            title={item.title}
                            description={[item.description]}
                            variant="horizontal"
                            icon={<div className="size-16 flex"><item.icon className="m-auto max-w-6 w-full h-full text-primary opacity-80" /></div>}
                        />
                    ))}
                </div>
            </section>

            <Separator />

            {/* Workflow Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight">{PageData.workflow.title}</h2>
                <div className="grid gap-2">
                    {PageData.workflow.list.map((item, index) => (
                        <HighlightCart
                            key={index}
                            className="max-w-full h-full"
                            title={item.title}
                            description={[item.description]}
                            variant="horizontal"
                            icon={<div className="size-16 flex"><item.icon className="m-auto max-w-6 w-full h-full text-primary opacity-80" /></div>}
                        />
                    ))}
                </div>
            </section>

            <Separator />

            {/* Tech Stack */}
            <TechStack {...PageData.techStack} />

            {/* CTA */}
            <section className="rounded-xl border bg-muted/40 p-8 text-center space-y-4">
                <h2 className="text-2xl font-semibold">{commonT("cta.ready")}</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    {commonT("cta.description")}
                </p>
                <div className="pt-2">
                    <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                        {commonT("cta.button")} <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
