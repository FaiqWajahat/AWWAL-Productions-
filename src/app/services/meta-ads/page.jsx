import MetaAdsHero from "@/components/MetaAdsHero";
import MetaAdsFailures from "@/components/MetaAdsFailures";
import MetaAdsSystem from "@/components/MetaAdsSystem";
import MetaAdsTracking from "@/components/MetaAdsTracking";
import MetaAdsWhyUs from "@/components/MetaAdsWhyUs";
import MetaAdsResults from "@/components/MetaAdsResults";
import MetaAdsFaq from "@/components/MetaAdsFaq";
import MetaAdsFinalCta from "@/components/MetaAdsFinalCta";

export const metadata = {
  title: "Meta Ads Management | Awwal",
  description: "We don't just log into Ads Manager and start spending. We start with your business economics and build a system that turns ad spend into measurable revenue.",
};

export default function MetaAdsPage() {
  return (
    <div className="flex flex-col w-full">
      <MetaAdsHero />
      <MetaAdsFailures />
      <MetaAdsSystem />
      <MetaAdsTracking />
      <MetaAdsWhyUs />
      <MetaAdsResults />
      <MetaAdsFaq />
      {/* <MetaAdsFinalCta /> */}
    </div>
  );
}
