import { PublicSubpage } from "@/components/public/public-subpage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Soins dentaires a Tanger",
  description:
    "Decouvrez les soins proposes par le Cabinet dentaire Dr Dardar Karim a Tanger : dentisterie generale, esthetique du sourire, implants et accompagnement du patient.",
  path: "/services",
});

export default function ServicesPage() {
  return <PublicSubpage kind="services" />;
}
