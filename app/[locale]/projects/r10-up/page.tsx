import { ArrowLeft, ArrowRight, Bot, Database, Globe, Layers, LayoutDashboard, Lock, Server, Zap } from "lucide-react";
import Link from "next/link";

import Title from "@/components/molecules/title";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Expressjs } from "@/components/icons/express";
import { Nodejs } from "@/components/icons/nodejs";
import HighlightCart from "@/components/molecules/highlight-cart";
import TechStack from "@/components/molecules/tech-stack";
import { MySQL } from "@/components/icons/mysql";
import { Puppeteer } from "@/components/icons/puppeteer";
import { useTranslations } from "next-intl";

export default function R10UpPage() {
    const t = useTranslations("R10Up");
    const commonT = useTranslations("ProjectPage");
    const projectsT = useTranslations("Projects.items");
    const tagsT = useTranslations("Tags");

    const PageData = {
        header: {
            title: projectsT("r10ProBot.title"),
            backLabel: commonT("backLabel"),
        },
        hero: {
            title: t("hero.title"),
            description: t("hero.description"),
            tags: [tagsT("automation"), tagsT("puppeteer"), tagsT("nodejs"), tagsT("mysql")],
        },
        features: {
            title: t("features.title"),
            list: [
                {
                    title: t("features.emulation.title"),
                    description: t("features.emulation.description"),
                    icon: Globe,
                },
                {
                    title: t("features.scheduling.title"),
                    description: t("features.scheduling.description"),
                    icon: Zap,
                },
                {
                    title: t("features.session.title"),
                    description: t("features.session.description"),
                    icon: Lock,
                },
                {
                    title: t("features.dashboard.title"),
                    description: t("features.dashboard.description"),
                    icon: LayoutDashboard,
                }
            ]
        },
        workflow: {
            title: t("workflow.title"),
            list: [
                {
                    title: t("workflow.scanning.title"),
                    description: t("workflow.scanning.description"),
                    icon: Layers,
                },
                {
                    title: t("workflow.execution.title"),
                    description: t("workflow.execution.description"),
                    icon: Bot,
                }
            ]
        },
        techStack: {
            title: commonT("techStackTitle"),
            description: t("tech.description"),
            categories: [
                {
                    name: t("tech.runtime"),
                    icon: Server,
                    items: [
                        {
                            name: t("tech.items.nodejs.name"),
                            description: t("tech.items.nodejs.description"),
                            icon: Nodejs,
                        },
                        {
                            name: t("tech.items.puppeteer.name"),
                            description: t("tech.items.puppeteer.description"),
                            icon: Puppeteer,
                        },
                    ]
                },
                {
                    name: t("tech.data"),
                    icon: Database,
                    items: [
                        {
                            name: t("tech.items.mysql.name"),
                            description: t("tech.items.mysql.description"),
                            icon: MySQL,
                        },
                        {
                            name: t("tech.items.express.name"),
                            description: t("tech.items.express.description"),
                            icon: Expressjs,
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
                <h2 className="text-2xl font-semibold">{commonT("cta.interested")}</h2>
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
