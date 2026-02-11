import { CirclePlus } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";

export default function HireMe() {
  const t = useTranslations("Common");
  return (
    <Button asChild className="">
      <Link href={"/contact"}>
        <CirclePlus className="mr-2 w-4" />
        {t("hireMe")}
      </Link>
    </Button>
  );
}
