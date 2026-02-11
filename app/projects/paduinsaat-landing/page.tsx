import { ArrowLeft, ArrowRight, Building2, Film, LayoutTemplate, Move, Palette, Star, Users } from "lucide-react";
import Link from "next/link";

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

const PageData = {
    header: {
        title: "Padu Insaat",
        backLabel: "Back to Home",
    },
    hero: {
        title: "Modern Construction Excellence.",
        description: "A premium landing page for Padu Insaat, a construction company with 14 years of experience. The site features advanced GSAP animations, a filterable project gallery, and a high-performance responsive design.",
        tags: ["Next.js 16", "Tailwind CSS", "GSAP", "Framer Motion"],
    },
    features: {
        title: "Key Highlights",
        list: [
            {
                title: "Advanced Animations",
                description: "Immersive scrolling experiences and entrance animations powered by GSAP and Framer Motion.",
                icon: Film,
            },
            {
                title: "Project Gallery",
                description: "Dynamic filtering system allowing users to browse projects by category (Residential, Commercial, Renovation).",
                icon: LayoutTemplate,
            },
            {
                title: "14 Years of Expertise",
                description: "Showcasing the company's long-standing history and commitment to quality and trust.",
                icon: Star,
            },
            {
                title: "Customer Centric",
                description: "Dedicated sections for customer testimonials and detailed service descriptions.",
                icon: Users,
            }
        ]
    },
    workflow: {
        title: "Site Structure",
        list: [
            {
                title: "Hero Slider",
                description: "High-impact visual slider demonstrating core value propositions.",
                icon: Move,
            },
            {
                title: "Services & Projects",
                description: "Clean, grid-based layouts to present services and portfolio items effectively.",
                icon: Building2,
            }
        ]
    },
    techStack: {
        title: "Tech Stack",
        description: "Built with the latest web technologies for speed, SEO, and user experience.",
        categories: [
            {
                name: "Framework & Core",
                icon: LayoutTemplate,
                items: [
                    {
                        name: "Next.js 16",
                        description: "The React framework for the web, utilizing the latest App Router features.",
                        icon: NextjsIcon,
                    },
                    {
                        name: "React 19",
                        description: "Leveraging the latest React features for concurrent rendering and server components.",
                        icon: ReactIcon,
                    },
                    {
                        name: "TypeScript",
                        description: "Ensuring type safety and code maintainability throughout the project.",
                        icon: TypeScript,
                    },
                ]
            },
            {
                name: "Styling & Animation",
                icon: Palette,
                items: [
                    {
                        name: "Tailwind CSS v4",
                        description: "Utility-first CSS framework for rapid and modern UI development.",
                        icon: TailwindCSS,
                    },
                    {
                        name: "GSAP",
                        description: "Professional-grade JavaScript animation library for complex timelines.",
                        icon: GSAP,
                    },
                    {
                        name: "Framer Motion",
                        description: "Production-ready motion library for React components.",
                        icon: FramerIcon,
                    },
                ]
            }
        ]
    }
};

export default function PaduInsaatPage() {
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
                <h2 className="text-2xl font-semibold">Ready to build something great?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    From modern landing pages to complex web applications, I help bring your vision to life.
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
