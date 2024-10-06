import { cn } from "@/lib/utils";

export default function Title({ title, className, titleClassName, children }: { title: string; className?: string; titleClassName?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-center justify-between gap-2", className)}>
      <div
        className={cn(
          "flex items-center gap-2 text-lg font-medium text-muted-foreground dark:text-zinc-400",
          titleClassName,
        )}
      >
        <span className="block size-2 rounded-full bg-muted-foreground dark:bg-zinc-400"></span>
        {title}
      </div>
      {children}
    </div>
  );
}
