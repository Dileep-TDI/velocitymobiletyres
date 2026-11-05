import { redirect } from "next/navigation";
import { kingsgrove } from "@/content/siteContent";

/** Canonical Kingsgrove landing lives at /mobile-tyre-repair-kingsgrove/ */
export default function HomePage() {
  redirect(`/${kingsgrove.slug}/`);
}
