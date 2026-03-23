import { PublicSubpage } from "@/components/public/public-subpage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Prendre rendez-vous chez le dentiste a Tanger",
  description:
    "Contactez le Cabinet dentaire Dr Dardar Karim a Tanger pour preparer une consultation, demander un rendez-vous et retrouver facilement l'adresse du cabinet.",
  path: "/rdv",
});

export default function AppointmentPage() {
  return <PublicSubpage kind="appointments" />;
}
