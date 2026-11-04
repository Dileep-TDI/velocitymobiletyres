import Image from "next/image";
import Link from "next/link";
import { staticImages } from "@/lib/site-images";

const PHONE_HREF = "tel:0404730738";
const PHONE_LABEL = "0404 730 738";
const HOURS = "7 am – 9 pm";

const socialLinks = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/quickfitmobiletyres",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/quickfitmobiletyres",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        label: "Google",
        href: "https://www.google.com/maps?cid=quickfitmobiletyres",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const currentYear = 2026;

    return (
        <footer className="bg-secondary text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Brand Column */}
                    <div className="space-y-5">
                        <Link href="/" className="inline-block">
                            <Image
                                src={staticImages.logoWhite.src}
                                alt={staticImages.logoWhite.alt}
                                width={staticImages.logoWhite.width}
                                height={staticImages.logoWhite.height}
                                className="h-16 sm:h-20 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-md">
                            Mobile tyre repair and replacement services in Campbelltown and nearby suburbs. We come to you.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary hover:text-secondary transition-all duration-200 flex items-center justify-center text-gray-400 hover:text-secondary"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-heading font-bold text-lg uppercase tracking-wider mb-5">
                            Contact Us
                        </h3>
                        <ul className="space-y-5 text-base">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <div>
                                    <a
                                        href={PHONE_HREF}
                                        className="text-white text-lg font-bold hover:text-primary transition-colors !text-white hover:!text-primary"
                                    >
                                        {PHONE_LABEL}
                                    </a>
                                    <p className="text-gray-300 text-sm sm:text-base mt-1">
                                        Call us for mobile tyre assistance
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-white text-lg font-bold">Operating Hours</p>
                                    <p className="text-gray-300 text-sm sm:text-base mt-1 font-medium">
                                        {HOURS}, 7 days
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-white text-lg font-bold">Service Area</p>
                                    <p className="text-gray-300 text-sm sm:text-base mt-1">
                                        Farrow Rd, Campbelltown NSW 2560
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom stripe */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
                    <p>© {currentYear} Quickfit Mobile Tyres. All rights reserved.</p>
                    <div className="flex items-center gap-4 flex-wrap justify-center">
                        <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-conditions" className="hover:text-primary transition-colors">
                            Terms &amp; Conditions
                        </Link>
                        <a
                            href="https://tussle.digital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            Managed by Tussle Digital
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
