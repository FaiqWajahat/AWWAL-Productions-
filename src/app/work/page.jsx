import WorkHero from "@/components/WorkHero";
import WorkMarquee from "@/components/WorkMarquee";
import ProofWall from "@/components/ProofWall";
import WorkFeatured from "@/components/WorkFeatured";
import WorkGrid from "@/components/WorkGrid";
import WorkFinalCta from "@/components/WorkFinalCta";

export const metadata = {
  title: "Portfolio & Case Studies | Awwal",
  description: "Explore the digital ecosystems, high-converting platforms, and scaling ad campaigns driving $15M+ in client revenue.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <WorkHero />
      <WorkMarquee />
      <ProofWall />
      <WorkFeatured />
      <WorkGrid />
      <WorkFinalCta />
    </div>
  );
}
