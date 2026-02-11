import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Link } from "@/lib/navigation";
import { calComIcon } from "../icons/";
import { Button } from "../ui/button";
import Title from "./title";
import { Card } from "../ui/card";
import { useTranslations } from "next-intl";

type Social = {
  key: string;
  icon: React.ElementType;
  link: {
    href: string;
    target: string;
  };
};

const socials: Social[] = [
  {
    key: "GitHub",
    icon: GitHubLogoIcon,
    link: {
      href: "https://github.com/ecbakas",
      target: "_blank",
    },
  },
  {
    key: "Calcom",
    icon: calComIcon,
    link: {
      href: "https://cal.com/ertugrulcan",
      target: "_blank",
    },
  },

  {
    key: "LinkedIn",
    icon: LinkedInLogoIcon,
    link: {
      href: "https://www.linkedin.com/in/ecbakas/",
      target: "_blank",
    },
  },
];

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="space-y-2">
      <Card className="p-4 shadow-none">
        <Title
          title={t("followMe")}
          className="flex w-full items-center justify-between rounded-lg"
        >
          <div className="flex gap-2">
            {socials.map((social) => (
              <Button
                asChild
                variant={"outline"}
                size={"icon"}
                key={social.key}
              >
                <Link
                  key={social.key}
                  href={social.link.href}
                  target={social.link.target}
                  className="group"
                  title={social.key}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              </Button>
            ))}
          </div>
        </Title>
      </Card>
      <Card className="flex min-h-24 w-full items-center justify-center p-4 text-center shadow-none">
        <p className="text-muted-foreground dark:text-white">
          {t("copyright")}
        </p>
      </Card>
    </footer>
  );
}
