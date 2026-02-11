import CalltoAction from "@/components/molecules/cta";
import DownloadResume from "@/components/molecules/download-resume";
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from "@/components/molecules/image-comparison";
import Title from "@/components/molecules/title";
import { Card } from "@/components/ui/card";
import memoji from "@/public/memoji.png";
import reveal from "@/public/reveal.png";
export default function Home() {
  return (
    <div className="space-y-6 p-4 dark:text-muted-foreground">
      <Title title="About" className="mb-8" />
      <h3 className="text-3xl font-bold">It&apos;s me Ertuğrulcan</h3>
      <p>
        Hello, I’m Ertuğrulcan. While my primary focus is frontend development, I possess a deep understanding of the entire web stack, allowing me to build robust, end-to-end solutions. I graduated in Computer Programming in 2018 and have since been refining my craft across the full spectrum of software development.
      </p>
      <Card className="h-96 overflow-hidden">
        <ImageComparison className="aspect-16/9 size-full rounded-lg relative bg-red-200" enableHover>
          <ImageComparisonImage
            src={memoji.src}
            alt="memoji"
            position="left"
          />
          <ImageComparisonImage
            src={reveal.src}
            alt="reveal"
            position="right"
          />
          <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-xs">
            <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
          </ImageComparisonSlider>
        </ImageComparison>
      </Card>
      <p>
        My expertise goes beyond just UI. I am proficient in modern frontend technologies like <b>React, Next.js, React Native, Expo, Shadcn UI,</b> and <b>Tailwind CSS</b>, paired with design tools like <b>Figma, Photoshop,</b> and <b>After Effects</b> to create exceptional user experiences.
      </p>
      <p>
        On the backend and infrastructure side, I work with <b>Node.js, WebSocket, JWT, Auth.js,</b> and databases such as <b>PostgreSQL</b> and <b>MS SQL</b>. I manage deployments using <b>Docker, Docker Compose, Coolify,</b> and reverse proxies like <b>Traefik, Caddy,</b> and <b>Nginx</b>. I also handle server administration with <b>Ubuntu/Linux bash</b> and <b>SSH</b>, and secure applications using <b>Cloudflare WAF</b> and <b>DNS</b>.
      </p>
      <p>
        I ensure quality through <b>E2E testing with Playwright</b> and automate workflows using <b>GitHub Actions</b>. Currently, I am working at Ayasofyazılım, continuing to expand my knowledge and contribute to open-source projects.
      </p>
      <DownloadResume />
      <CalltoAction />
    </div>
  );
}
