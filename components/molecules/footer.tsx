import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { calComIcon } from "../icons/";
import { Button } from "../ui/button";
import Title from "./title";
import { Card } from "../ui/card";

type Social = {
  title: string;
  icon: React.ElementType;
  link: {
    href: string;
    target: string;
  };
};

const socials: Social[] = [
  {
    title: "GitHub",
    icon: GitHubLogoIcon,
    link: {
      href: "https://github.com/ecbakas",
      target: "_blank",
    },
  },
  {
    title: "Calcom",
    icon: calComIcon,
    link: {
      href: "https://cal.com/ertugrulcan",
      target: "_blank",
    },
  },

  {
    title: "LinkedIn",
    icon: LinkedInLogoIcon,
    link: {
      href: "https://www.linkedin.com/in/ecbakas/",
      target: "_blank",
    },
  },
];

export default function Footer() {
  return (
    <footer className="space-y-2">
      <Card className="p-4 shadow-none">
        <Title
          title="Follow me"
          className="flex w-full items-center justify-between rounded-lg"
        >
          <div className="flex gap-2">
            {socials.map((social) => (
              <Button
                asChild
                variant={"outline"}
                size={"icon"}
                key={social.title}
              >
                <Link
                  key={social.title}
                  href={social.link.href}
                  target={social.link.target}
                  className="group"
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
          © 2024 Ertugrulcan Bakas
        </p>
      </Card>
    </footer>
  );
}

// {
//   title: "Instagram",
//   icon: InstagramLogoIcon,
//   link: {
//     href: "https://instagram.com/ecbakas",
//     target: "_blank",
//   },
// },
// {
//   title: "Twitter",
//   icon: xIcon,
//   link: {
//     href: "https://twitter.com/ecbakas",
//     target: "_blank",
//   },
// },
