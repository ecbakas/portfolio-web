import CalltoAction from "@/components/molecules/cta";
import DownloadResume from "@/components/molecules/download-resume";
import Title from "@/components/molecules/title";
import { Card } from "@/components/ui/card";
import memoji from "@/public/memoji.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="space-y-6 p-4 dark:text-muted-foreground">
      <Title title="About" className="mb-8" />
      <h3 className="text-3xl font-bold">It&apos;s me Ertuğrulcan</h3>
      <p>
        Hello, I’m Ertuğrulcan. I graduated in the field of Computer Programming
        in 2018. Realizing my interest in interface design and development, I
        started to improve my skills in this area and I continue to do so.
      </p>
      <Card className="h-96 overflow-hidden">
        <div className="relative h-full w-full">
          <Image alt="memoji" fill src={memoji.src} className="object-cover" />
        </div>
      </Card>
      <p>
        With my knowledge of technologies such as Next.js, Tailwind CSS, and
        TypeScript, I have worked with several companies as a freelancer,
        gaining significant experience in interface development and effective
        communication. Additionally, I strive to contribute to the community by
        supporting open-source projects on GitHub.
      </p>
      <p>
        Currently, I am working at Ayasofyazılım and continuing my development
        through freelance projects.
      </p>
      <DownloadResume />
      <CalltoAction />
    </div>
  );
}
