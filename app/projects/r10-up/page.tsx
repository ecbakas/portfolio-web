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

const PageData = {
    header: {
        title: "R10 Pro Bot",
        backLabel: "Back to Home",
    },
    hero: {
        title: "Intelligent Forum Automation.",
        description: "A robust automation suite designed to manage R10.net forum topics. It handles complex tasks like Cloudflare bypass, session management, and scheduled topic bumping, all through a centralized dashboard.",
        tags: ["Automation", "Puppeteer", "Node.js", "MySQL"],
    },
    features: {
        title: "Core Capabilities",
        list: [
            {
                title: "Real Browser Emulation",
                description: "Uses 'puppeteer-real-browser' to mimic human behavior, successfully bypassing Cloudflare turnstile and bot detection.",
                icon: Globe,
            },
            {
                title: "Smart Scheduling",
                description: "Automatically monitors topic statuses and bumps them only when the 'Up' button is active, maximizing visibility without user intervention.",
                icon: Zap,
            },
            {
                title: "Session Persistence",
                description: "Manages cookies and sessions securely, handling logins and re-authenticating automatically if sessions expire.",
                icon: Lock,
            },
            {
                title: "Centralized Dashboard",
                description: "Provides a web-based interface to add topics, configuring settings, and view live screenshots of the bot's actions.",
                icon: LayoutDashboard,
            }
        ]
    },
    workflow: {
        title: "Automation Workflow",
        list: [
            {
                title: "Scanning & Detection",
                description: "Periodically scans the control panel to identify active topics and their current 'Up' status using DOM analysis.",
                icon: Layers,
            },
            {
                title: "Action Execution",
                description: "Executes precise click actions on the 'Up' buttons and verifies success via screenshot logging and database updates.",
                icon: Bot,
            }
        ]
    },
    techStack: {
        title: "Tech Stack",
        description: "Built with a focus on reliability and stealth in web automation.",
        categories: [
            {
                name: "Core & Runtime",
                icon: Server,
                items: [
                    {
                        name: "Node.js",
                        description: "The runtime environment executing the automation logic and server.",
                        icon: Nodejs,
                    },
                    {
                        name: "Puppeteer",
                        description: "Headless Chrome API used for controlling the browser and interacting with the forum pages.",
                        icon: Puppeteer,
                    },
                ]
            },
            {
                name: "Data & Backend",
                icon: Database,
                items: [
                    {
                        name: "MySQL",
                        description: "Relational database for storing topic lists, settings, and session cookies.",
                        icon: MySQL,
                    },
                    {
                        name: "Express.js",
                        description: "Serves the dashboard UI and handles API requests for the bot control panel.",
                        icon: Expressjs,
                    },
                ]
            }
        ]
    }
};

export default function R10UpPage() {
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
                <h2 className="text-2xl font-semibold">Need Automation?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Streamline your forum management with reliable, undetectable automation tools.
                </p>
                <div className="pt-2">
                    <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                        Contact for Details <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
