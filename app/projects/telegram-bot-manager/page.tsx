import { ArrowLeft, ArrowRight, Bot, Boxes, Cpu, Globe, LayoutDashboard, Lock, MessageSquare, RefreshCw, Server, Settings, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Title from "@/components/molecules/title";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Docker } from "@/components/icons/docker";
import { Nodejs } from "@/components/icons/nodejs";
import { Supabase } from "@/components/icons/supabase";
import { Telegraf } from "@/components/icons/telegraf";
import { TypeScript } from "@/components/icons/typescript";
import HighlightCart from "@/components/molecules/highlight-cart";
import TechStack from "@/components/molecules/tech-stack";

const PageData = {
    header: {
        title: "Telegram Bot Manager",
        backLabel: "Back to Home",
    },
    hero: {
        title: "Advanced Multi-Bot Orchestration.",
        description: "A comprehensive management system that empowers users to deploy, configure, and monitor multiple Telegram bots simultaneously. Features a powerful trigger-action engine and real-time updates via Supabase.",
        tags: ["TypeScript", "Node.js", "Telegraf", "Supabase", "Docker"],
    },
    features: {
        title: "Key Features",
        list: [
            {
                title: "Multi-Bot Architecture",
                description: "Scalable architecture supporting unlimited bots, each running in its own isolated Telegraf instance for stability and performance.",
                icon: Boxes,
            },
            {
                title: "Advanced Trigger System",
                description: "Supports over 15 trigger types including keywords, regex patterns, media types (photo, video), and user events (join/leave).",
                icon: Zap,
            },
            {
                title: "Dynamic Action Engine",
                description: "Execute 20+ different actions such as banning users, restricting permissions, sending media, or calling external APIs.",
                icon: Cpu,
            },
            {
                title: "Real-time Updates",
                description: "Seamless synchronization of bot configurations and commands across all instances using Supabase Realtime.",
                icon: RefreshCw,
            }
        ]
    },
    workflow: {
        title: "System Components",
        list: [
            {
                title: "Bot Manager Core",
                description: "Centralized service that instantiates and manages bot lifecycles, handling graceful shutdowns and error recovery.",
                icon: Settings,
            },
            {
                title: "Command Processor",
                description: "Efficiently routes incoming messages through a middleware chain to match triggers and execute corresponding action pipelines.",
                icon: MessageSquare,
            }
        ]
    },
    techStack: {
        title: "Tech Stack",
        description: "Built with modern technologies for reliability, type safety, and ease of deployment.",
        categories: [
            {
                name: "Core & Language",
                icon: Server,
                items: [
                    {
                        name: "Node.js",
                        description: "High-performance JavaScript runtime powering the bot logic.",
                        icon: Nodejs,
                    },
                    {
                        name: "TypeScript",
                        description: "Provides static typing and enhanced developer experience across the codebase.",
                        icon: TypeScript,
                    },
                    {
                        name: "Telegraf",
                        description: "Modern Telegram Bot Framework for Node.js.",
                        icon: Telegraf,
                    },
                ]
            },
            {
                name: "Infrastructure & Data",
                icon: Globe,
                items: [
                    {
                        name: "Supabase",
                        description: "PostgreSQL database with real-time capabilities for instant config updates.",
                        icon: Supabase,
                    },
                    {
                        name: "Docker",
                        description: "Containerized deployment ensuring consistency across development and production environments.",
                        icon: Docker,
                    },
                ]
            }
        ]
    }
};

export default function TelegramBotManagerPage() {
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
                <h2 className="text-2xl font-semibold">Interested in this project?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Manage your Telegram communities efficiently with automated modulation and interactive bots.
                </p>
                <div className="pt-2">
                    <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                        Get in Touch <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
