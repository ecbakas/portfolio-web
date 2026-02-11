
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

const PageData = {
    header: {
        title: "BirFatura Wrapper",
        backLabel: "Back to Home",
    },
    hero: {
        title: "Seamless E-invoicing Integration.",
        description: "A robust TypeScript middleware that bridges the gap between PerfectPanel and BirFatura. This service automates the complex flow of fetching orders, mapping statuses, and generating valid e-invoices for SMM panels.",
        tags: ["Integration", "Backend", "Automation", "TypeScript"],
    },
    features: {
        title: "Key Capabilities",
        list: [
            {
                title: "Real-time Sync",
                description: "Retrieves new payments immediately from PerfectPanel, ensuring invoices are generated without delay.",
                icon: Zap,
            },
            {
                title: "Type-Safe Core",
                description: "Fully typed interfaces for Order, Payment, and API responses guarantee reliability and prevent runtime errors.",
                icon: Code2,
            },
            {
                title: "Configurable",
                description: "Environment-based configuration allows easy deployment across different panel environments and API keys.",
                icon: Settings,
            },
            {
                title: "Secure API",
                description: "Implements token-based authentication to secure endpoints and prevent unauthorized invoice generation.",
                icon: Lock,
            }
        ]
    },
    workflow: {
        title: "Integration Workflow",
        list: [
            {
                title: "PerfectPanel Source",
                description: "Connects to the PerfectPanel adminapi to fetch orders. Handles complex filtering based on date ranges and payment statuses to ensure no data is missed.",
                icon: LayoutDashboard,
            },
            {
                title: "BirFatura Target",
                description: "Transforms data into the specific JSON structure required by BirFatura. Handles VAT calculation, product mapping, and customer details formatting automatically.",
                icon: FileJson,
            }
        ]
    },
    techStack: {
        title: "Tech Stack",
        description: "Built with a robust selection of technologies to ensure reliability, security, and performance.",
        categories: [
            {
                name: "Core & Backend",
                icon: Server,
                items: [
                    {
                        name: "Node.js",
                        description: "High-performance runtime for handling concurrent API requests and background synchronization.",
                        icon: Nodejs,
                    },
                    {
                        name: "Express.js",
                        description: "Minimalist web framework providing robust routing and middleware capabilities for the API layer.",
                        icon: Expressjs,
                    },
                    {
                        name: "TypeScript",
                        description: "Ensures strict type safety across data transformation layers, preventing runtime errors in financial logic.",
                        icon: TypeScript,
                    },
                ]
            },
            {
                name: "Architecture & Security",
                icon: Lock,
                items: [
                    {
                        name: "Middleware Pattern",
                        description: "Custom middleware for request logging, error handling, and token-based authentication.",
                        icon: Settings,
                    },
                    {
                        name: "REST API",
                        description: "Exposes standardized endpoints that comply seamlessly with BirFatura's expected integration format.",
                        icon: Globe,
                    },
                    {
                        name: "Token Auth",
                        description: "Secure communication between services using bearer token validation.",
                        icon: Lock,
                    },
                ]
            }
        ]
    }
};

export default function BirfaturaWrapperPage() {
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
                <h2 className="text-2xl font-semibold">Ready to Integrate?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    This wrapper is designed to be a plug-and-play solution for any SMM panel using the PerfectPanel infrastructure.
                </p>
                <div className="pt-2">
                    <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                        Contact for Access <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
