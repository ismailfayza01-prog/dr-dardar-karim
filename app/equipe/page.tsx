import { PublicSubpage } from "@/components/public/public-subpage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cabinet dentaire et praticien a Tanger",
  description:
    "Presentation du Cabinet dentaire Dr Dardar Karim a Tanger, de son approche de soin et des informations essentielles pour preparer une consultation.",
  path: "/equipe",
});

export default function TeamPage() {
  return <PublicSubpage kind="team" />;
}
