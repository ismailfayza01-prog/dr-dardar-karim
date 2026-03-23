import { PublicSubpage } from "@/components/public/public-subpage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Connexion interne du cabinet",
  description: "Espace de connexion reserve au cabinet.",
  path: "/login",
  noindex: true,
});

export default function LoginPage() {
  return <PublicSubpage kind="login" />;
}
