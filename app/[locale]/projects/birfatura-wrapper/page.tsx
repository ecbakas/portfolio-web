
import { ArrowLeft, ArrowRight, Code2, FileJson, Globe, LayoutDashboard, Lock, Server, Settings, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Title from "@/components/molecules/title";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Expressjs } from "@/components/icons/express";
import { Nodejs } from "@/components/icons/nodejs";
import { TypeScript } from "@/components/icons/typescript";
import HighlightCart from "@/components/molecules/highlight-cart";
import TechStack from "@/components/molecules/tech-stack";
import { useTranslations } from "next-intl";

export default function BirfaturaWrapperPage() {
    const t = useTranslations("Birfatura");
    const commonT = useTranslations("ProjectPage");
    const projectsT = useTranslations("Projects.items");
    const tagsT = useTranslations("Tags");

    const PageData = {
        header: {
            title: projectsT("birfaturaWrapper.title"),
            backLabel: commonT("backLabel"),
        },
        hero: {
            title: t("hero.title"),
            description: t("hero.description"),
            tags: [tagsT("integration"), tagsT("backend"), tagsT("automation"), tagsT("typescript")],
        },
        features: {
            title: t("features.title"),
            list: [
                {
                    title: t("features.sync.title"),
                    description: t("features.sync.description"),
                    icon: Zap,
                },
                {
                    title: t("features.typeSafe.title"),
                    description: t("features.typeSafe.description"),
                    icon: Code2,
                },
                {
                    title: t("features.config.title"),
                    description: t("features.config.description"),
                    icon: Settings,
                },
                {
                    title: t("features.secure.title"),
                    description: t("features.secure.description"),
                    icon: Lock,
                }
            ]
        },
        workflow: {
            title: t("workflow.title"),
            list: [
                {
                    title: t("workflow.source.title"),
                    description: t("workflow.source.description"),
                    icon: LayoutDashboard,
                },
                {
                    title: t("workflow.target.title"),
                    description: t("workflow.target.description"),
                    icon: FileJson,
                }
            ]
        },
        techStack: {
            title: commonT("techStackTitle"),
            description: t("tech.description"),
            categories: [
                {
                    name: t("tech.backend"),
                    icon: Server,
                    items: [
                        {
                            name: t("tech.items.nodejs.name"),
                            description: t("tech.items.nodejs.description"),
                            icon: Nodejs,
                        },
                        {
                            name: t("tech.items.express.name"),
                            description: t("tech.items.express.description"),
                            icon: Expressjs,
                        },
                        {
                            name: t("tech.items.typescript.name"),
                            description: t("tech.items.typescript.description"),
                            icon: TypeScript,
                        },
                    ]
                },
                {
                    name: t("tech.security"),
                    icon: Lock,
                    items: [
                        {
                            name: t("tech.items.middleware.name"),
                            description: t("tech.items.middleware.description"),
                            icon: Settings,
                        },
                        {
                            name: t("tech.items.rest.name"),
                            description: t("tech.items.rest.description"),
                            icon: Globe,
                        },
                        {
                            name: t("tech.items.token.name"),
                            description: t("tech.items.token.description"),
                            icon: Lock,
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
                            <Badge key={tag} variant="secondary">
                                {tagsT.has(tag.toLowerCase()) ? tagsT(tag.toLowerCase()) : tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>

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
                            variant="horizontal"
                            description={[item.description]}
                            icon={<div className="size-16 flex"><item.icon className="m-auto max-w-6 w-full h-full text-primary opacity-80" /></div>}
                        />
                    ))}
                </div>
            </section>

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
