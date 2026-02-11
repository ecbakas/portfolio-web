import CalltoAction from "@/components/molecules/cta";
import DownloadResume from "@/components/molecules/download-resume";
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from "@/components/molecules/image-comparison";
import Title from "@/components/molecules/title";
import { Card } from "@/components/ui/card";
import memoji from "@/public/memoji.png";
import reveal from "@/public/reveal.png";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("AboutPage");
  return (
    <div className="space-y-6 p-4 dark:text-muted-foreground">
      <Title title={t("title")} className="mb-8" />
      <h3 className="text-3xl font-bold">{t("greeting")}</h3>
      <p>
        {t("p1")}
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
        {t("p2")}
      </p>
      <p>
        {t("p3")}
      </p>
      <p>
        {t("p4")}
      </p>
      <DownloadResume />
      <CalltoAction />
    </div>
  );
}
