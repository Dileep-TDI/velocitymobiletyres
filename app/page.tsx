import { redirect } from "next/navigation";
import { westRyde } from "@/content/siteContent";

/** Canonical West Ryde landing lives at /mobile-tyre-repair-west-ryde/ */
export default function HomePage() {
  redirect(`/${westRyde.slug}/`);
}
