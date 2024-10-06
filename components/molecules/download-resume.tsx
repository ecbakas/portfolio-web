import { Download } from "lucide-react";
import { Button } from "../ui/button";

export default function DownloadResume() {
  return (
    <Button
      className="w-full dark:border-zinc-700 dark:bg-black dark:text-white"
      variant="outline"
      asChild
    >
      <a href={"/ertugrulcanbakas-cv.pdf"} download={true}>
        <Download className="mr-2 w-4" />
        Download my resume
      </a>
    </Button>
  );
}
