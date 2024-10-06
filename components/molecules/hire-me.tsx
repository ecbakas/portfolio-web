import { CirclePlus } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HireMe() {
  return (
    <Button asChild className="">
      <Link href={"/contact"}>
        <CirclePlus className="mr-2 w-4" />
        Hire Me
      </Link>
    </Button>
  );
}
