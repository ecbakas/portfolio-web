import ForOFor from "@/components/icons/forofor";
import Title from "@/components/molecules/title";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <Title title="Not Found" className="w-full" />
      <ForOFor className="h-max w-full max-w-sm" />
    </div>
  );
}
