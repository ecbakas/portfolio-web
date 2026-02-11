import { ArrowLeft, Clock, Cloud, Info, Layers, Palette, Server, Smartphone, UserPlus, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Title from "@/components/molecules/title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import HighlightCart from "@/components/molecules/highlight-cart";
import { Stories, StoriesContent, Story, StoryImage } from "@/components/molecules/stories-carousel";
import phoenix from "@/public/items/phoenix.png";
import shield from "@/public/items/shield.png";
import strike from "@/public/items/strike.png";
import trap from "@/public/items/trap.png";
import screenshotCreate from "@/public/rune-rivals/screenshots/create-game.png";
import screenshotEntry from "@/public/rune-rivals/screenshots/entry.png";
import screenshotIngame1 from "@/public/rune-rivals/screenshots/ingame-1.png";
import screenshotIngame2 from "@/public/rune-rivals/screenshots/ingame-2.png";
import screenshotLobby from "@/public/rune-rivals/screenshots/lobby.png";
import splash from "@/public/rune-rivals/splash.png";

import { Coolify } from "@/components/icons/coolify";
import { Docker } from "@/components/icons/docker";
import { Expo } from "@/components/icons/expo";
import { Expressjs } from "@/components/icons/express";
import { Figma } from "@/components/icons/figma";
import { Gemini } from "@/components/icons/gemini";
import { Nodejs } from "@/components/icons/nodejs";
import { Photoshop } from "@/components/icons/photoshop";
import { SocketIO } from "@/components/icons/socketio";
import { Supabase } from "@/components/icons/supabase";
import { TypeScript } from "@/components/icons/typescript";
import { Zustand } from "@/components/icons/zustand";
import TechStack from "@/components/molecules/tech-stack";
import { useTranslations } from "next-intl";

export default function RuneRivalsPage() {
    const t = useTranslations("RuneRivals");
    const commonT = useTranslations("ProjectPage");
    const tagsT = useTranslations("Tags");
    const projectsT = useTranslations("Projects.items");

    const PageData = {
        header: {
            title: projectsT("runeRivals.title"),
            backLabel: commonT("backLabel"),
        },
        hero: {
            title: t("hero.title"),
            description: t("hero.description"),
            tags: [tagsT("strategy"), tagsT("multiplayer"), tagsT("puzzle")],
            placeholderText: "Gameplay Placeholder",
            splashImage: splash,
        },
        roomOptions: {
            title: t("roomOptions.title"),
            categories: {
                title: t("roomOptions.categories.title"),
                value: t("roomOptions.categories.value"),
                description: t("roomOptions.categories.description"),
            },
            turnTime: {
                title: t("roomOptions.turnTime.title"),
                value: t("roomOptions.turnTime.value"),
                description: t("roomOptions.turnTime.description"),
            },
            players: {
                title: t("roomOptions.players.title"),
                value: t("roomOptions.players.value"),
                description: t("roomOptions.players.description"),
            },
            bots: {
                title: t("roomOptions.bots.title"),
                value: t("roomOptions.bots.value"),
                description: t("roomOptions.bots.description"),
            },
        },
        gameLogic: {
            title: t("gameLogic.title"),
            mechanics: {
                title: t("gameLogic.mechanics.title"),
                gridDescription: t("gameLogic.mechanics.grid"),
                captureDescription: t("gameLogic.mechanics.capture"),
                jumpDescription: t("gameLogic.mechanics.jump"),
                note: t("gameLogic.mechanics.note"),
            },
            scoring: {
                title: t("gameLogic.scoring.title"),
                points: [
                    { label: t("gameLogic.scoring.corners"), value: `5 ${t("gameLogic.scoring.pts")}` },
                    { label: t("gameLogic.scoring.borders"), value: `8 ${t("gameLogic.scoring.pts")}` },
                    { label: t("gameLogic.scoring.inner"), value: `12 ${t("gameLogic.scoring.pts")}` },
                ],
                summary: t("gameLogic.scoring.summary"),
            },
        },
        items: {
            title: t("items.title"),
            modeLabel: t("items.modeLabel"),
            list: [
                {
                    title: t("items.names.shield"),
                    details: t("items.shield"),
                    image: shield,
                },
                {
                    title: t("items.names.trap"),
                    details: t("items.trap"),
                    image: trap,
                },
                {
                    title: t("items.names.strike"),
                    details: t("items.strike"),
                    image: strike,
                },
                {
                    title: t("items.names.phoenix"),
                    details: t("items.phoenix"),
                    image: phoenix,
                },
            ],
        },
        gallery: {
            title: t("gallery.title"),
            images: [
                {
                    src: screenshotEntry,
                    alt: t("gallery.entry")
                },
                {
                    src: screenshotCreate,
                    alt: t("gallery.create")
                },
                {
                    src: screenshotLobby,
                    alt: t("gallery.lobby")
                },
                {
                    src: screenshotIngame1,
                    alt: t("gallery.action")
                },
                {
                    src: screenshotIngame2,
                    alt: t("gallery.strategy")
                },
            ]
        },
        techStack: {
            title: commonT("techStackTitle"),
            description: t("tech.description"),
            categories: [
                {
                    name: t("tech.mobile"),
                    icon: Smartphone,
                    items: [
                        {
                            name: t("tech.items.expo.name"),
                            description: t("tech.items.expo.description"),
                            icon: Expo,
                        },
                        {
                            name: t("tech.items.typescript.name"),
                            description: t("tech.items.typescript.description"),
                            icon: TypeScript,
                        },
                        {
                            name: t("tech.items.reanimated.name"),
                            description: t("tech.items.reanimated.description"),
                            icon: Layers,
                        },
                        {
                            name: t("tech.items.socketio_client.name"),
                            description: t("tech.items.socketio_client.description"),
                            icon: SocketIO,
                        },
                        {
                            name: t("tech.items.zustand.name"),
                            description: t("tech.items.zustand.description"),
                            icon: Zustand,
                        },
                    ]
                },
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
                            name: t("tech.items.socketio.name"),
                            description: t("tech.items.socketio.description"),
                            icon: SocketIO,
                        },
                        {
                            name: t("tech.items.node_typescript.name"),
                            description: t("tech.items.node_typescript.description"),
                            icon: TypeScript,
                        },
                    ]
                },
                {
                    name: t("tech.devops"),
                    icon: Cloud,
                    items: [
                        {
                            name: t("tech.items.supabase.name"),
                            description: t("tech.items.supabase.description"),
                            icon: Supabase,
                        },
                        {
                            name: t("tech.items.docker.name"),
                            description: t("tech.items.docker.description"),
                            icon: Docker,
                        },
                        {
                            name: t("tech.items.coolify.name"),
                            description: t("tech.items.coolify.description"),
                            icon: Coolify,
                        },
                        {
                            name: t("tech.items.eas.name"),
                            description: t("tech.items.eas.description"),
                            icon: Cloud,
                        },
                    ]
                },
                {
                    name: t("tech.creative"),
                    icon: Palette,
                    items: [
                        {
                            name: t("tech.items.figma.name"),
                            description: t("tech.items.figma.description"),
                            icon: Figma,
                        },
                        {
                            name: t("tech.items.photoshop.name"),
                            description: t("tech.items.photoshop.description"),
                            icon: Photoshop,
                        },
                        {
                            name: t("tech.items.gemini.name"),
                            description: t("tech.items.gemini.description"),
                            icon: Gemini,
                        },
                    ]
                }
            ]
        }
    };
    return (
        <div className="flex flex-col gap-4 pb-12">
            {/* Header / Navigation */}
            <div className="flex items-center gap-4">
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
                <div className="flex flex-col justify-center gap-4">
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
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted/50 p-6 flex flex-col items-center justify-center text-center">
                    <Image
                        src={PageData.hero.splashImage}
                        alt="Rune Rivals Gameplay Splash"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <Separator />

            {/* Room Options */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">{PageData.roomOptions.title}</h2>
                <div className="grid gap-2 sm:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{PageData.roomOptions.categories.title}</CardTitle>
                            <Info className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{PageData.roomOptions.categories.value}</div>
                            <p className="text-xs text-muted-foreground">{PageData.roomOptions.categories.description}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{PageData.roomOptions.turnTime.title}</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{PageData.roomOptions.turnTime.value}</div>
                            <p className="text-xs text-muted-foreground">{PageData.roomOptions.turnTime.description}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{PageData.roomOptions.players.title}</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{PageData.roomOptions.players.value}</div>
                            <p className="text-xs text-muted-foreground">{PageData.roomOptions.players.description}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{PageData.roomOptions.bots.title}</CardTitle>
                            <UserPlus className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{PageData.roomOptions.bots.value}</div>
                            <p className="text-xs text-muted-foreground">{PageData.roomOptions.bots.description}</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Separator />

            {/* Game Logic */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">{PageData.gameLogic.title}</h2>
                <div className="grid gap-2">
                    <Card className="bg-muted/10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle>{PageData.gameLogic.mechanics.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-muted-foreground">
                            <p dangerouslySetInnerHTML={{ __html: PageData.gameLogic.mechanics.gridDescription.replace("6x6 grid", "<strong>6x6 grid</strong>") }} />
                            <p>{PageData.gameLogic.mechanics.captureDescription}</p>
                            <p dangerouslySetInnerHTML={{ __html: PageData.gameLogic.mechanics.jumpDescription.replace("both", "<strong>both</strong>") }} />
                            <p className="text-xs italic pt-2">
                                {PageData.gameLogic.mechanics.note}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-muted/10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle>{PageData.gameLogic.scoring.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-muted-foreground">
                            <ul className="list-disc pl-4 space-y-1">
                                {PageData.gameLogic.scoring.points.map((point) => (
                                    <li key={point.label}><strong>{point.label}</strong> {point.value}</li>
                                ))}
                            </ul>
                            <p className="pt-2">
                                {PageData.gameLogic.scoring.summary}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Separator />

            {/* Items */}
            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold tracking-tight">{PageData.items.title}</h2>
                    <Badge variant="outline">{PageData.items.modeLabel}</Badge>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                    {PageData.items.list.map((item, index) => (
                        <HighlightCart
                            key={index}
                            className="max-w-full h-full"
                            title={item.title}
                            description={[item.details]}
                            icon={<Image src={item.image} alt={item.title} width={500} height={500} className="object-contain rounded-full w-full h-full" />}
                        />
                    ))}
                </div>
            </section>

            <Separator />

            {/* Screenshots Carousel */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">{PageData.gallery.title}</h2>
                <Stories>
                    <StoriesContent>
                        {PageData.gallery.images.map((image, index) => (
                            <Story key={index} className="aspect-[9/16] hover:scale-105 transition-transform duration-200">
                                <StoryImage
                                    src={image.src.src}
                                    alt={image.alt}
                                    className="rounded-lg object-cover object-top"
                                />
                            </Story>
                        ))}
                    </StoriesContent>
                </Stories>
            </section>

            <Separator />

            {/* Tech Stack */}
            <TechStack {...PageData.techStack} />
        </div>
    );
}