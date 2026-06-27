import WordPressHero from "@/components/WordPressHero";
import WordPressFailures from "@/components/WordPressFailures";
import WordPressWhy from "@/components/WordPressWhy";
import WordPressSystem from "@/components/WordPressSystem";
import WordPressFunnel from "@/components/WordPressFunnel";
import WordPressWhyUs from "@/components/WordPressWhyUs";
import WordPressVsOthers from "@/components/WordPressVsOthers";
import WordPressResults from "@/components/WordPressResults";
import WordPressFaq from "@/components/WordPressFaq";
import WordPressFinalCta from "@/components/WordPressFinalCta";

export const metadata = {
  title: "Custom WordPress Development | Awwal",
  description: "We build custom WordPress websites designed around your business goals, your customers, and your conversion path.",
};

export default function WordPressPage() {
  return (
    <div className="flex flex-col w-full">
      <WordPressHero />
      <WordPressFailures />
      <WordPressWhy />
      <WordPressSystem />
      <WordPressFunnel />
      <WordPressWhyUs />
      <WordPressVsOthers />
      <WordPressResults />
      <WordPressFaq />
      {/* <WordPressFinalCta /> */}
    </div>
  );
}
