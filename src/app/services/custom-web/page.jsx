import CustomWebHero from "@/components/CustomWebHero";
import CustomWebWhen from "@/components/CustomWebWhen";
import CustomWebStack from "@/components/CustomWebStack";
import CustomWebSystem from "@/components/CustomWebSystem";
import CustomWebWhyUs from "@/components/CustomWebWhyUs";
import CustomWebVsOthers from "@/components/CustomWebVsOthers";
import CustomWebTimeline from "@/components/CustomWebTimeline";
import CustomWebResults from "@/components/CustomWebResults";
import CustomWebFaq from "@/components/CustomWebFaq";
import CustomWebFinalCta from "@/components/CustomWebFinalCta";

export const metadata = {
  title: "Custom Web Development & AI | Awwal",
  description: "We build fully custom web applications on the world's most advanced platforms — integrating AI where it creates genuine business value.",
};

export default function CustomWebPage() {
  return (
    <div className="flex flex-col w-full">
      <CustomWebHero />
      <CustomWebWhen />
      <CustomWebStack />
      <CustomWebSystem />
      <CustomWebWhyUs />
      <CustomWebVsOthers />
      <CustomWebTimeline />
      <CustomWebResults />
      <CustomWebFaq />
      {/* <CustomWebFinalCta /> */}
    </div>
  );
}
