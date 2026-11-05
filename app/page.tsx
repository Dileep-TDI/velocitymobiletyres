import { redirect } from "next/navigation";
import { kirrawee } from "@/content/siteContent";

/** Canonical Kirrawee landing lives at /mobile-tyre-repair-kirrawee/ */
export default function HomePage() {
  redirect(`/${kirrawee.slug}/`);
}
