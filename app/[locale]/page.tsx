import CalltoAction from "@/components/molecules/cta";
import Hero from "@/components/molecules/hero";
import KnowledgeBase from "@/components/molecules/knowledge-base";
import Section from "@/components/molecules/section";

export default async function Home() {
  return (
    <>
      <Hero />
      <Section />
      <CalltoAction />
      <KnowledgeBase minimal />
    </>
  );
}
