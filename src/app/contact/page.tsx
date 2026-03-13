export const metadata = {
  title: "Contact | JS Auto's",
  description: "Neem contact op met JS Auto's - In- en verkoop van gebruikte auto's in Hoogeveen",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-[1536px] overflow-x-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Contact
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Heeft u vragen over een occasion, wilt u uw auto inruilen of verkopen? Neem gerust contact met ons op.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Contactgegevens */}
        <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-xl font-semibold text-white">
            Onze gegevens
          </h2>
          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/20">
                <svg
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-white">Bezoekadres</h3>
                <p className="mt-1 text-gray-400">
                  A.G. Bellstraat 53
                  <br />
                  7903 BB Hoogeveen
                </p>
                <a
                  href="https://maps.google.com/?q=A.G.+Bellstraat+53,+7903+BB+Hoogeveen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-blue-400 hover:underline"
                >
                  Bekijk op Google Maps →
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/20">
                <svg
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-white">Telefoon</h3>
                <a
                  href="tel:+31630286332"
                  className="mt-1 block text-gray-400 hover:text-blue-400"
                >
                  06-30 286 332
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/20">
                <svg
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-white">E-mail</h3>
                <a
                  href="mailto:info@jsautos.nl"
                  className="mt-1 block text-gray-400 hover:text-blue-400"
                >
                  info@jsautos.nl
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Openingstijden / Extra info */}
        <div className="space-y-8">
          <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-xl font-semibold text-white">
              Bedrijfsgegevens
            </h2>
            <ul className="mt-6 space-y-2 text-sm text-gray-400">
              <li>
                <span className="font-medium text-white">KvK:</span> 70196389
              </li>
              <li>
                <span className="font-medium text-white">BTW:</span> NL221561298B01
              </li>
              <li>
                <span className="font-medium text-white">IBAN:</span> NL33 RABO 0325 5530 92
              </li>
              <li>
                <span className="font-medium text-white">BIC:</span> RABONL2U
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Wij zijn bereikbaar voor afspraken en vragen. Neem gerust contact op voor een vrijblijvend gesprek over uw autobehoeften.
          </p>
        </div>
      </div>
    </div>
  );
}
