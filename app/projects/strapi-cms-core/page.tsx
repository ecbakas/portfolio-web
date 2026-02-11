import { ArrowLeft, ArrowRight, Blocks, Code2, Database, Globe, Layout, Lock, Server, Settings, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Title from "@/components/molecules/title";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Docker } from "@/components/icons/docker";
import { Nodejs } from "@/components/icons/nodejs";
import { PostgreSQL } from "@/components/icons/postgresql";
import { TypeScript } from "@/components/icons/typescript";
import HighlightCart from "@/components/molecules/highlight-cart";
import TechStack from "@/components/molecules/tech-stack";
import { Strapi } from "@/components/icons/strapi";

const PageData = {
    header: {
        title: "CMS Strapi Core",
        backLabel: "Back to Home",
    },
    hero: {
        title: "The Ultimate Headless CMS Starter.",
        description: "A production-ready, pre-configured Strapi template designed for rapid landing page development. This core acts as a centralized content hub that can power any frontend with a flexible and robust API.",
        tags: ["CMS", "Headless", "Strapi", "Backend"],
    },
    features: {
        title: "Core Features",
        list: [
            {
                title: "Dynamic Page Building",
                description: "Utilizes Strapi's Dynamic Zones to create flexible, block-based page layouts that can be rearranged on the fly.",
                icon: Blocks,
            },
            {
                title: "Media Optimization",
                description: "Automatic image resizing, format conversion (WebP), and optimization pipeline for fast-loading assets.",
                icon: Zap,
            },
            {
                title: "SEO Ready",
                description: "Pre-configured SEO structures including meta tags, Open Graph data, and structured data schema fields.",
                icon: Globe,
            },
            {
                title: "Type Generation",
                description: "Automated TypeScript interface generation ensures your frontend code stays in perfect sync with your content schemas.",
                icon: Code2,
            }
        ]
    },
    workflow: {
        title: "Development Workflow",
        list: [
            {
                title: "Content Modeling",
                description: "Define your data structures using the intuitive Studio content builder. Create reusable components for consistent design systems.",
                icon: Layout,
            },
            {
                title: "API Consumption",
                description: "Consume your content via auto-generated REST or GraphQL endpoints with built-in filtering, sorting, and pagination.",
                icon: Server,
            }
        ]
    },
    techStack: {
        title: "Tech Stack",
        description: "Built on industry-standard technologies for scalability and ease of maintenance.",
        categories: [
            {
                name: "Core Platform",
                icon: Database,
                items: [
                    {
                        name: "Strapi CMS",
                        description: "The leading open-source headless CMS. Customizable, secure, and developer-first.",
                        icon: Strapi,
                    },
                    {
                        name: "Node.js",
                        description: "Reliable javascript runtime powering the CMS backend logic and plugins.",
                        icon: Nodejs,
                    },
                    {
                        name: "TypeScript",
                        description: "Fully typed codebase for better developer experience and reduced runtime errors.",
                        icon: TypeScript,
                    },
                ]
            },
            {
                name: "Infrastructure",
                icon: Server,
                items: [
                    {
                        name: "PostgreSQL",
                        description: "Robust relational database for secure and reliable content storage.",
                        icon: PostgreSQL,
                    },
                    {
                        name: "Docker",
                        description: "Containerized setup for consistent development and production environments.",
                        icon: Docker,
                    },
                ]
            }
        ]
    }
};

export default function CmsStrapiCorePage() {
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
                <h2 className="text-2xl font-semibold">Start Building</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Get up and running with a production-grade CMS in minutes. Perfect for agencies and freelance developers.
                </p>
                <div className="pt-2">
                    <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                        Request Template <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
