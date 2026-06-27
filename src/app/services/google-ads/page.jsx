import GoogleAdsHero from "@/components/GoogleAdsHero";
import GoogleAdsVsMeta from "@/components/GoogleAdsVsMeta";
import GoogleAdsFailures from "@/components/GoogleAdsFailures";
import GoogleAdsSystem from "@/components/GoogleAdsSystem";
import GoogleAdsTracking from "@/components/GoogleAdsTracking";
import GoogleAdsWhyUs from "@/components/GoogleAdsWhyUs";
import GoogleAdsResults from "@/components/GoogleAdsResults";
import GoogleAdsFaq from "@/components/GoogleAdsFaq";
import GoogleAdsFinalCta from "@/components/GoogleAdsFinalCta";

export const metadata = {
  title: "Google Ads Management | Awwal",
  description: "Stop paying for clicks that never become customers. We build the campaigns, keyword strategy, and tracking system that turns search intent into measurable revenue.",
};

export default function GoogleAdsPage() {
  return (
    <div className="flex flex-col w-full">
      <GoogleAdsHero />
      <GoogleAdsVsMeta />
      <GoogleAdsFailures />
      <GoogleAdsSystem />
      <GoogleAdsTracking />
      <GoogleAdsWhyUs />
      <GoogleAdsResults />
      <GoogleAdsFaq />
      {/* <GoogleAdsFinalCta /> */}
    </div>
  );
}
