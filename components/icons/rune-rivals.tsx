import Image from "next/image";
import runeRivals from "@/public/rune-rivals/logo.png";

export default function RuneRivals({ width = 1080, height = 1080, className }: { width?: number, height?: number, className?: string }) {
    return (
        <Image src={runeRivals} alt="Rune Rivals" width={width} height={height} className={className} quality={100} />
    );
}