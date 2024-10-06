"use client";
import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";

export default function CopyMail() {
  return (
    <Button
      variant={"outline"}
      onClick={() => {
        toast({
          title: "Copied",
          description: "Email address copied to clipboard.",
        });
        navigator.clipboard.writeText("ecbakas@gmail.com");
      }}
    >
      <Copy className="mr-2 w-4" />
      Copy Mail
    </Button>
  );
}
