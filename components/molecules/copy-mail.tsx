"use client";
import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

export default function CopyMail() {
  const t = useTranslations("Common");
  return (
    <Button
      variant={"outline"}
      onClick={() => {
        toast({
          title: t("copied"),
          description: t("emailCopiedDesc"),
        });
        navigator.clipboard.writeText("ecbakas@gmail.com");
      }}
    >
      <Copy className="mr-2 w-4" />
      {t("copyMail")}
    </Button>
  );
}
