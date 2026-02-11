"use client";

import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ComponentProps {
    title: string;
    description: string[];
    icon?: ReactNode;
    className?: string;
    variant?: "default" | "horizontal";
}

const Component: FC<ComponentProps> = ({ title, description, icon, className, variant = "default" }) => {
    return (
        <div className={cn(" cursor-pointer transform transition-all duration-500 hover:scale-[1.02]", variant === "default" && "hover:-rotate-1 hover:scale-105")}>
            <Card className={cn("max-w-full h-full text-zinc-900 dark:text-white rounded-2xl border border-zinc-200 dark:border-white/10 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-[#010101] dark:via-[#090909] dark:to-[#010101] shadow-none relative backdrop-blur-xl overflow-hidden hover:border-zinc-300 dark:hover:border-white/25 hover:shadow-zinc-200/50 dark:hover:shadow-white/5 hover:shadow-3xl", variant === "default" ? "w-[350px]" : "w-full", className)}>


                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-black/10 to-transparent dark:from-white/10 dark:to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"></div>
                    <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-black/5 dark:bg-white/5 blur-xl animate-ping"></div>
                    <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 blur-lg animate-ping"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>


                <div className={cn("relative z-10 flex items-center", variant === "default" ? "flex-col text-center p-8" : "flex-row text-left p-6 gap-6")}>
                    <div className={cn("relative", variant === "default" ? "mb-6" : "shrink-0")}>
                        <div className="absolute inset-0 rounded-full border-2 border-black/10 dark:border-white/20 animate-ping duration-5000"></div>
                        <div className="absolute inset-0 rounded-full border border-black/5 dark:border-white/10 animate-pulse duration-5000"></div>

                        <div className="rounded-full backdrop-blur-lg border border-black/10 dark:border-white/20 bg-gradient-to-br from-white/80 to-white/60 dark:from-black/80 dark:to-black/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-black/10 dark:hover:shadow-white/20">
                            <div className="transform group-hover:rotate-180 transition-transform duration-700">
                                {icon}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h3 className={cn("font-bold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300", variant === "default" ? "text-3xl mb-4" : "text-xl mb-1")}>
                            {title}
                        </h3>

                        <div className="space-y-1 max-w-sm">
                            {description.map((line, idx) => (
                                <p
                                    key={idx}
                                    className="text-zinc-600 dark:text-gray-300 text-sm leading-relaxed transform group-hover:text-zinc-900 dark:group-hover:text-gray-200 transition-colors duration-300"
                                >
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>

                    {variant === "default" && <div className="mt-auto w-1/3 h-0.5 bg-gradient-to-r from-transparent via-black/20 dark:via-white/50 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-5000 animate-pulse"></div>}
                </div>


                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-black/5 dark:from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-black/5 dark:from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
        </div>
    );
};

export default Component;
