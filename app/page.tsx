import { redirect } from "next/navigation";
import { campbelltown } from "@/content/siteContent";

/** Canonical Campbelltown landing lives at /mobile-tyre-repair-campbelltown/ */
export default function HomePage() {
  redirect(`/${campbelltown.slug}/`);
}
