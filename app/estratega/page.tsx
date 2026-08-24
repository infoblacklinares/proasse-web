import { AdSlot } from "@/components/estratega/ad-slot";
import { BreakingTicker } from "@/components/estratega/breaking-ticker";
import { HeroStory } from "@/components/estratega/hero-story";
import { Newsletter } from "@/components/estratega/newsletter";
import { SectionHead } from "@/components/estratega/section-head";
import { StoryCard } from "@/components/estratega/story-card";
import { TopicChips } from "@/components/estratega/topic-chips";
import { getFeatured, getLatest } from "@/lib/estratega/data";

export default function PortadaPage() {
  const featured = getFeatured();
  const latest = getLatest();

  // La publicidad se intercala después de la cuarta nota, como en el mockup
  const beforeAd = latest.slice(0, 4);
  const afterAd = latest.slice(4, 8);

  return (
    <>
      <BreakingTicker />
      <HeroStory article={featured} />

      <SectionHead title="Lo más reciente" href="/estratega/secciones" />
      {beforeAd.map((article) => (
        <StoryCard key={article.slug} article={article} />
      ))}

      <AdSlot />

      {afterAd.map((article) => (
        <StoryCard key={article.slug} article={article} />
      ))}

      <SectionHead title="Explora El Estratega" />
      <TopicChips />

      <Newsletter />
    </>
  );
}
