import { DashboardView } from "@/components/dashboard/dashboard-view";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dashboard interne du cabinet",
  description: "Tableau de bord reserve au cabinet.",
  path: "/dashboard",
  noindex: true,
});

export default function DashboardPage() {
  return <DashboardView />;
}
