import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          About
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600">
          This is a starter page. Replace this content with your company story,
          team, and mission.
        </p>
      </div>
    </Container>
  );
}
