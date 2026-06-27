import AuditHero from "@/components/AuditHero";
import AuditFormSection from "@/components/AuditFormSection";

export const metadata = {
  title: "Get a Free Audit & Quotation | Awwal",
  description: "Request a free audit of your current ad campaigns or a quotation for your custom web development project.",
};

export default function AuditPage() {
  return (
    <div className="flex flex-col w-full">
      <AuditHero />
      <AuditFormSection />
    </div>
  );
}
