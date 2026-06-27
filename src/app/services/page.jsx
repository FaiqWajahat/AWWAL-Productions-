import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Services
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600">
          Add your production services, packages, and offerings here.
        </p>
      </div>
    </Container>
  );
}
