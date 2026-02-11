import { FC } from "react";
import { LucideIcon } from "lucide-react";

type TechStackItem = {
    name: string;
    description: string;
    icon: FC<{ className?: string }>;
};

type TechStackCategory = {
    name: string;
    icon: LucideIcon;
    items: TechStackItem[];
};

type TechStackProps = {
    title: string;
    description: string;
    categories: TechStackCategory[];
};

const TechStack: FC<TechStackProps> = ({ title, description, categories }) => {
    return (
        <section className="space-y-8">
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
                <p className="text-muted-foreground">{description}</p>
            </div>

            <div className="grid gap-2">
                {categories.map((category, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex items-center gap-2">
                            <category.icon className="h-5 w-5 text-primary" />
                            <h3 className="font-medium text-lg">{category.name}</h3>
                        </div>
                        <div className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex items-start gap-2 p-2 rounded-lg border bg-card/50 hover:bg-card transition-colors">
                                    <div className="bg-background p-2 rounded-md border shrink-0">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="font-medium text-sm">{item.name}</div>
                                        <div className="text-xs text-muted-foreground leading-snug">{item.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
