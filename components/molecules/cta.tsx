import CopyMail from "./copy-mail";
import HireMe from "./hire-me";
import { useTranslations } from "next-intl";

export default function CalltoAction() {
  const t = useTranslations("CTA");
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <h3 className="text-center text-3xl font-semibold">
        {t("title")}
      </h3>
      <p className="text-center text-muted-foreground">
        {t("description")}
      </p>
      <div className="space-x-2">
        <HireMe />
        <CopyMail />
      </div>
    </div>
  );
}
