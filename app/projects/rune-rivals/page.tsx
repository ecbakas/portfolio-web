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

const PageData = {
    header: {
        title: "Rune Rivals",
        backLabel: "Back to Home",
    },
    hero: {
        title: "Master the Grid. Claim the Elements.",
        description: "Rune Rivals is a strategic turn-based game played on a 6x6 grid. Capture tiles, solve puzzles, and use powerful items to dominate your opponents. Choose your element Fire, Water, Earth, or Air and battle for supremacy.",
        tags: ["Strategy", "Multiplayer", "Puzzle"],
        placeholderText: "Gameplay Placeholder",
        splashImage: splash,
    },
    roomOptions: {
        title: "Room Customization",
        categories: {
            title: "Categories",
            value: "5 Types",
            description: "Math, Reflex, Memory, Word, Mixed",
        },
        turnTime: {
            title: "Turn Time",
            value: "Variable",
            description: "15s, 30s, or 60s per turn",
        },
        players: {
            title: "Players",
            value: "2 or 4",
            description: "Head-to-head or free-for-all",
        },
        bots: {
            title: "Bots",
            value: "AI Support",
            description: "Add bots to fill empty slots",
        },
    },
    gameLogic: {
        title: "How to Play",
        mechanics: {
            title: "Core Mechanics",
            gridDescription: "The game is played on a 6x6 grid. Each player controls an element (Fire, Water, Earth, Air).",
            captureDescription: "Every turn, you capture a tile by solving a question based on the room's category.",
            jumpDescription: "If your selected tile \"jumps\" over an enemy tile (passing an enemy tile between your new tile and an existing one), you attempt to capture both the empty tile and the enemy's tile.",
            note: "Note: Capturing enemy tiles makes the question harder!",
        },
        scoring: {
            title: "Scoring & Winning",
            points: [
                { label: "Corners:", value: "5 points" },
                { label: "Borders:", value: "8 points" },
                { label: "Inner Tiles:", value: "12 points" },
            ],
            summary: "Points are used to buy powerful items if \"Item Mode\" is enabled. The player with the most tiles/points at the end wins!",
        },
    },
    items: {
        title: "Power-Ups & Items",
        modeLabel: "Item Mode: ON/OFF",
        list: [
            {
                title: "Shield",
                details: "Apply to your own tiles to protect them from being swapped or captured by enemies. Visible to all players.",
                image: shield,
            },
            {
                title: "Trap",
                details: "Place on empty tiles. Invisible to enemies! If they select it, their points are reduced by 50.",
                image: trap,
            },
            {
                title: "Strike",
                details: "Attack an enemy tile directly to neutralize their control without needing to capture a surrounding tile.",
                image: strike,
            },
            {
                title: "Phoenix",
                details: "Must be used before solving. Grants a second chance (new question) if you answer incorrectly.",
                image: phoenix,
            },
        ],
    },
    gallery: {
        title: "Gallery",
        images: [
            {
                src: screenshotEntry,
                alt: "Rune Rivals Entry Screen"
            },
            {
                src: screenshotCreate,
                alt: "Rune Rivals Create Game Screen"
            },
            {
                src: screenshotLobby,
                alt: "Rune Rivals Game Lobby"
            },
            {
                src: screenshotIngame1,
                alt: "Rune Rivals In-Game Action"
            },
            {
                src: screenshotIngame2,
                alt: "Rune Rivals In-Game Strategy"
            },
        ]
    },
    techStack: {
        title: "Tech Stack",
        description: "The modern technologies and tools used to build and design Rune Rivals.",
        categories: [
            {
                name: "Mobile (Frontend)",
                icon: Smartphone,
                items: [
                    {
                        name: "React Native (Expo)",
                        description: "Provides a native performance with a single codebase for efficient cross-platform delivery.",
                        icon: Expo,
                    },
                    {
                        name: "TypeScript",
                        description: "Ensures type safety and drastically reduces runtime errors in a complex codebase.",
                        icon: TypeScript,
                    },
                    {
                        name: "React Native Reanimated",
                        description: "Enables silky smooth 60fps animations essential for game feel.",
                        icon: Layers,
                    },
                    {
                        name: "Socket.IO Client",
                        description: "Low-latency connection required for real-time multiplayer synchronization.",
                        icon: SocketIO,
                    },
                    {
                        name: "Zustand",
                        description: "Minimalistic state management to handle rapid game state updates without re-render lag.",
                        icon: Zustand,
                    },
                ]
            },
            {
                name: "Backend (Game Server)",
                icon: Server,
                items: [
                    {
                        name: "Node.js",
                        description: "Leverages the same language as the frontend for shared types and logic.",
                        icon: Nodejs,
                    },
                    {
                        name: "Express.js",
                        description: "Simple and robust routing for API endpoints and middleware handling.",
                        icon: Expressjs,
                    },
                    {
                        name: "Socket.IO",
                        description: "Handles room management and event-driven gameplay logic reliably.",
                        icon: SocketIO,
                    },
                    {
                        name: "TypeScript",
                        description: "Strict typing across the backend prevents critical logic errors during gameplay.",
                        icon: TypeScript,
                    },
                ]
            },
            {
                name: "Infrastructure & DevOps",
                icon: Cloud,
                items: [
                    {
                        name: "Supabase Self-Hosted",
                        description: "Instantly provides a production-ready database and authentication system.",
                        icon: Supabase,
                    },
                    {
                        name: "Docker",
                        description: "Guarantees the game server runs identically in development and production.",
                        icon: Docker,
                    },
                    {
                        name: "Coolify",
                        description: "Simplifies self-hosting the game server with automatic deployments.",
                        icon: Coolify,
                    },
                    {
                        name: "EAS Build",
                        description: "Offloads complex native builds to the cloud for faster iteration.",
                        icon: Cloud,
                    },
                ]
            },
            {
                name: "Design & Creative",
                icon: Palette,
                items: [
                    {
                        name: "Figma",
                        description: "Rapid prototyping of game UI and user flows.",
                        icon: Figma,
                    },
                    {
                        name: "Photoshop",
                        description: "Creation and editing of game assets.",
                        icon: Photoshop,
                    },
                    {
                        name: "Gemini",
                        description: "For creating game assets.",
                        icon: Gemini,
                    },
                ]
            }
        ]
    }
};

export default function Page() {
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