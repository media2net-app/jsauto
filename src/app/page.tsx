import Link from "next/link";
import OccasionsSlider from "@/components/OccasionsSlider";

export default function Home() {
  return (
    <div>
      {/* Hero sectie */}
      <section
        className="relative overflow-hidden py-20 sm:py-28"
        style={{
          backgroundImage: "url('/WhatsApp%20Image%202026-03-11%20at%2015.16.34.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <div className="absolute inset-0 bg-[#1e3a5f]/75" />
        <div className="relative z-10 mx-auto max-w-[1536px] px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            JS Auto&apos;s
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100 sm:text-2xl">
            In- en verkoop van gebruikte auto&apos;s
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base text-blue-200">
            Uw betrouwbare partner in Hoogeveen voor kwaliteitsvolle occasions. Transparant, eerlijk en met persoonlijke service.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="flex min-h-[48px] items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-[#1e3a5f] transition-colors hover:bg-blue-50 active:bg-blue-100"
            >
              Neem contact op
            </Link>
            <Link
              href="/over-ons"
              className="flex min-h-[48px] items-center justify-center rounded-lg border-2 border-white/50 px-8 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10 active:bg-white/20"
            >
              Meer over ons
            </Link>
          </div>
        </div>
      </section>

      <OccasionsSlider />

      {/* Diensten sectie */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold text-[#1e3a5f] sm:text-4xl">
            Onze diensten
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Wij bieden een compleet pakket voor uw autobehoeften
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1e3a5f]/10 text-[#1e3a5f]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Occasions kopen</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Kies uit ons aanbod van zorgvuldig geselecteerde gebruikte auto&apos;s. Alle voertuigen zijn gecontroleerd en klaar voor gebruik.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1e3a5f]/10 text-[#1e3a5f]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Inruilen</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Wilt u uw huidige auto inruilen? Wij geven een eerlijke en transparante taxatie. Inruilen maakt uw nieuwe occasion betaalbaarder.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1e3a5f]/10 text-[#1e3a5f]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Verkoop van uw auto</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Heeft u een auto te koop? Neem contact met ons op. Wij kopen uw auto graag over tegen een marktconforme prijs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA sectie */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-[#1e3a5f] p-8 text-center sm:p-12">
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Klaar voor een nieuwe occasion?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-blue-100">
              Neem vrijblijvend contact op. Wij helpen u graag bij het vinden van de juiste auto of het verkopen van uw huidige voertuig.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+31630286332"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#1e3a5f] transition-colors hover:bg-blue-50"
              >
                <svg
                  className="h-5 w-5"
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
                06-30 286 332
              </a>
              <a
                href="mailto:info@jsautos.nl"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/50 px-6 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                <svg
                  className="h-5 w-5"
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
                info@jsautos.nl
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
