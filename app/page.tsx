import { redirect } from "next/navigation";
import { chippingNorton } from "@/content/siteContent";

/** Canonical Chipping Norton landing lives at /mobile-tyre-repair-chipping-norton/ */
export default function HomePage() {
  redirect(`/${chippingNorton.slug}/`);
}
