import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600">
          Reach out to start your next project with {siteConfig.name}.
        </p>

        <ul className="mt-10 space-y-4">
          <li className="flex items-center gap-3 text-zinc-700">
            <Mail className="h-5 w-5 text-zinc-500" />
            <a href={`mailto:${siteConfig.links.email}`} className="hover:text-zinc-900">
              {siteConfig.links.email}
            </a>
          </li>
          <li className="flex items-center gap-3 text-zinc-700">
            <Phone className="h-5 w-5 text-zinc-500" />
            <span>Add your phone number</span>
          </li>
          <li className="flex items-center gap-3 text-zinc-700">
            <MapPin className="h-5 w-5 text-zinc-500" />
            <span>Add your location</span>
          </li>
        </ul>
      </div>
    </Container>
  );
}
