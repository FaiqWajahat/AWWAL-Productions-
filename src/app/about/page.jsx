import AboutHero  from "@/components/AboutHero";
import BriefLedger from "@/components/BeliefLedger";
import OurStory from "@/components/OurStory";
import OurTeam from "@/components/OurTeam";
import OurMission from "@/components/OurMission";
export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
    <AboutHero />
    <OurStory />
    <BriefLedger/>
    <OurMission />
    <OurTeam />
    </>
  );
}
