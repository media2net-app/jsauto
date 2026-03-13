import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-900 text-white">
      <div className="mx-auto w-full max-w-[1536px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl font-bold">JS Auto&apos;s</h3>
            <p className="mt-2 text-sm text-gray-300">
              In- en verkoop van gebruikte auto&apos;s
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@jsautos.nl"
                  className="text-gray-300 hover:text-white"
                >
                  info@jsautos.nl
                </a>
              </li>
              <li>
                <a
                  href="tel:+31630286332"
                  className="text-gray-300 hover:text-white"
                >
                  06-30 286 332
                </a>
              </li>
              <li className="text-gray-300">
                A.G. Bellstraat 53
                <br />
                7903 BB Hoogeveen
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Gegevens
            </h4>
            <ul className="mt-3 space-y-1 text-sm text-gray-300">
              <li>KvK: 70196389</li>
              <li>BTW: NL221561298B01</li>
              <li>IBAN: NL33 RABO 0325 5530 92</li>
              <li>BIC: RABONL2U</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} JS Auto&apos;s. Alle rechten voorbehouden.
          </p>
          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-6">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/occasions" className="text-gray-300 hover:text-white">
              Occasions
            </Link>
            <Link href="/over-ons" className="text-gray-300 hover:text-white">
              Over Ons
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
