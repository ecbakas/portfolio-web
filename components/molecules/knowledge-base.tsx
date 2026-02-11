"use client";

import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import {
    Code2,
    Terminal,
    Database as DatabaseIcon,
    Cloud,
    Palette,
    ArrowRight
} from "lucide-react";
import { NextjsIcon } from "../icons/nextjs";
import { ReactIcon } from "../icons/react";
import { TypeScript } from "../icons/typescript";
import { TailwindCSS } from "../icons/tailwind";
import { GSAP } from "../icons/gsap";
import { FramerIcon } from "../icons/framer";
import { Expo } from "../icons/expo";
import { Zustand } from "../icons/zustand";
import { Nodejs } from "../icons/nodejs";
import { Expressjs } from "../icons/express";
import { SocketIO } from "../icons/socketio";
import { Telegraf } from "../icons/telegraf";
import { PostgreSQL } from "../icons/postgresql";
import { MySQL } from "../icons/mysql";
import { Supabase } from "../icons/supabase";
import { Docker } from "../icons/docker";
import { Coolify } from "../icons/coolify";
import { Ubuntu } from "../icons/ubuntu";
import { Cloudflare } from "../icons/cloudflare";
import { Figma } from "../icons/figma";
import { Photoshop } from "../icons/photoshop";
import { Link } from "@/lib/navigation";
import { Button } from "../ui/button";
import Title from "./title";

const categories = [
    {
        id: "frontend",
        icon: Code2,
        skills: [
            { id: "nextjs", icon: NextjsIcon },
            { id: "react", icon: ReactIcon },
            { id: "typescript", icon: TypeScript },
            { id: "tailwind", icon: TailwindCSS },
            { id: "gsap", icon: GSAP },
            { id: "framer", icon: FramerIcon },
            { id: "expo", icon: Expo },
            { id: "zustand", icon: Zustand },
        ],
    },
    {
        id: "backend",
        icon: Terminal,
        skills: [
            { id: "nodejs", icon: Nodejs },
            { id: "express", icon: Expressjs },
            { id: "socketio", icon: SocketIO },
            { id: "telegraf", icon: Telegraf },
        ],
    },
    {
        id: "database",
        icon: DatabaseIcon,
        skills: [
            { id: "postgresql", icon: PostgreSQL },
            { id: "mysql", icon: MySQL },
            { id: "supabase", icon: Supabase },
        ],
    },
    {
        id: "devops",
        icon: Cloud,
        skills: [
            { id: "docker", icon: Docker },
            { id: "coolify", icon: Coolify },
            { id: "ubuntu", icon: Ubuntu },
            { id: "cloudflare", icon: Cloudflare },
        ],
    },
    {
        id: "design",
        icon: Palette,
        skills: [
            { id: "figma", icon: Figma },
            { id: "photoshop", icon: Photoshop },
        ],
    },
];

export default function KnowledgeBase({ minimal = false }: { minimal?: boolean }) {
    const t = useTranslations("KnowledgeBase");

    return (
        <Card className="flex flex-col gap-6 shadow-none bg-transparent border-none p-0 my-2">
            <Title title={t("title")} className="flex-col justify-start items-start">
                <p className="text-sm text-zinc-500 max-w-md">
                    {t("description")}
                </p>
            </Title>

            <div className="space-y-8">
                {categories.map((category) => {
                    const visibleSkills = minimal
                        ? category.skills.slice(0, 4)
                        : category.skills;

                    return (
                        <div key={category.id} className="space-y-4">
                            <div className="flex items-center gap-2 px-1">
                                <category.icon className="h-5 w-5 text-zinc-400" />
                                <h3 className="font-semibold text-base text-zinc-800 dark:text-zinc-200">
                                    {t(`categories.${category.id}`)}
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {visibleSkills.map((skill) => (
                                    <div
                                        key={skill.id}
                                        className="group relative flex items-center gap-4 p-4 rounded-lg border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98] cursor-default"
                                    >
                                        <div className="shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                                            <skill.icon className="h-8 w-8 text-zinc-900 dark:text-white" />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <div className="font-semibold text-sm text-zinc-900 dark:text-white truncate">
                                                {t(`items.${skill.id}.name`)}
                                            </div>
                                            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                                                {t(`items.${skill.id}.description`)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {minimal && (
                <div className="flex justify-center mt-2 mb-6">
                    <Button asChild variant="outline" className=" px-8">
                        <Link href="/knowledge-base" className="flex items-center gap-2">
                            {t("viewMore")}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            )}
        </Card>
    );
}
