import ContactHero from "@/components/ContactHero";
import ContactWhatsApp from "@/components/ContactWhatsApp";
import ContactFirstConversation from "@/components/ContactFirstConversation";
import ContactFormSection from "@/components/ContactFormSection";
import ContactNextSteps from "@/components/ContactNextSteps";
import ContactResponse from "@/components/ContactResponse";
import ContactTrustSignals from "@/components/ContactTrustSignals";
import ContactFaq from "@/components/ContactFaq";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <ContactHero />
      <ContactWhatsApp />
      <ContactFirstConversation />
      <ContactFormSection />
      <ContactNextSteps />
      <ContactResponse />
      <ContactTrustSignals />
      <ContactFaq />
    </div>
  );
}
